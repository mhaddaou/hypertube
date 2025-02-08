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

        setLoadingStatus('Loading video player...');
        const streamUrl = `/movies/stream/${provider}/${id}/${quality}`;
        if (videoRef.current) {
          videoRef.current.src = `${axiosInstance.defaults.baseURL}${streamUrl}`;
        }
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
      {error ? (
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
            onError={() => setError('Error loading video')}
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