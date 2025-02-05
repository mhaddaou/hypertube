'use client';

import { FC, useEffect, useRef, useState } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  useEffect(() => {
    const streamUrl = `/movies/stream/${provider}/${id}/${quality}`;
    
    if (videoRef.current) {
      videoRef.current.src = `${axiosInstance.defaults.baseURL}${streamUrl}`;
    }
  }, [provider, id, quality]);

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