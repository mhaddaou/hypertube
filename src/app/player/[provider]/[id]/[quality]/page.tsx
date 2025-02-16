'use client';

import { FC, useEffect, useRef, useState } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { fetchMovieData } from '@/lib/features/Movie/Movie';

interface PlayerProps {
  params: {
    provider: string;
    id: string;
    quality: string;
  };
}

const AVAILABLE_QUALITIES = ['Q2160p', 'Q1080p', 'Q720p', 'Q3D'];

const Player: FC<PlayerProps> = ({ params }) => {
  const { provider, id, quality } = params;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieData.movieData);
  const [loadingStatus, setLoadingStatus] = useState<string>('Initializing...');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const retryTimeoutRef = useRef<NodeJS.Timeout>();
  const checkIntervalRef = useRef<NodeJS.Timeout>();
  const attemptCountRef = useRef(0);
  const maxAttempts = 30;

  const tryPlayVideo = () => {
    if (videoRef.current && downloadStarted) {
      attemptCountRef.current += 1;
      const streamUrl = `/movies/stream/${provider}/${id}/${quality}`;
      videoRef.current.src = `${axiosInstance.defaults.baseURL}${streamUrl}`;
      videoRef.current.load();
      
      if (attemptCountRef.current >= maxAttempts) {
        clearInterval(checkIntervalRef.current);
        setError('Failed to load video after multiple attempts');
        return;
      }
      
      setLoadingStatus(`Checking if video is ready... (Attempt ${attemptCountRef.current}/${maxAttempts})`);
    }
  };

  useEffect(() => {
    if (downloadStarted && !checkIntervalRef.current) {
      tryPlayVideo();
      checkIntervalRef.current = setInterval(tryPlayVideo, 10000);
    }

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [downloadStarted]);

  const handleVideoPlay = () => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      setError(null);
      setIsLoading(false);
    }
  };

  const handleVideoError = () => {
    if (downloadStarted) {
      setError('Retrying stream...');
      retryTimeoutRef.current = setTimeout(tryPlayVideo, 5000);
    } else {
      setError('Error loading video');
    }
  };

  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const initializeStream = async () => {
      try {
        setIsLoading(true);
        setLoadingStatus('Fetching movie information...');
        
        if (!movieData) {
          await dispatch(fetchMovieData({ id: parseInt(id), source: provider })).unwrap();
          return;
        }
        
        setLoadingStatus('Preparing video stream...');
        const selectedTorrent = movieData.torrents?.find(
          t => `Q${t.quality}` === quality
        );

        if (!selectedTorrent) {
          throw new Error('No torrent found for selected quality');
        }

        setLoadingStatus('Starting download...');
        await axiosInstance.post('/movies/torrent', {
          movie_id: id.toString(),
          source: provider,
          magnet_url: selectedTorrent.url
        });
        setDownloadStarted(true);

        setLoadingStatus('Loading video player...');
        tryPlayVideo();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize stream');
      } finally {
        setIsLoading(false);
      }
    };

    initializeStream();
  }, [provider, id, quality, movieData]);

  const handleQualityChange = (newQuality: string) => {
    const currentTime = videoRef.current?.currentTime || 0;
    router.push(`/player/${provider}/${id}/${newQuality}?t=${currentTime}`);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative">
      {error && !downloadStarted ? (
        <div className="text-white text-center">
          <p className="text-xl">{error}</p>
        </div>
      ) : isLoading ? (
        <div className="text-white text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl">{loadingStatus}</p>
          <p className="text-sm text-gray-400">This might take a few moments...</p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            controls
            className="w-full h-full max-h-[80vh]"
            onError={handleVideoError}
            onPlay={handleVideoPlay}
          >
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 flex gap-2">
            {AVAILABLE_QUALITIES.map((q) => (
              <button
                key={q}
                onClick={() => handleQualityChange(q)}
                className={`px-4 py-2 rounded ${
                  quality === q
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Player;