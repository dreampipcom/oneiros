/* eslint react/jsx-one-expression-per-line:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/AudioPlayer.tsx
import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import MuxAudio from '@mux/mux-audio-react';

import { Button, ButtonVariant, EButtonTheme } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { EIcon } from '../../atoms/05_SystemIcon';

export const DEFAULT_TRACKS = [
  {
    id: 'dreampip__chan_0000',
    className: '',
    onPlay: () => {},
    title: 'This is the track playing',
    url: 'https://www.dreampip.com/api/nexus/audio',
    isPlaying: false,
  },
  {
    id: 'dreampip__chan_0001',
    className: '',
    onPlay: () => {},
    title: 'This is the track playing',
    url: 'https://radio.dreampip.com/hls/dpip000/live.m3u8',
    isPlaying: false,
  },
];

export enum EAudioPlayerVariant {
  DEFAULT = 'default',
}

export interface IBackgroundImage {
  mobile?: string;
  desktop?: string;
}

export interface IAudioTrack {
  id?: string;
  className?: string;
  onPlay?: () => void;
  title?: string;
  url?: string;
  isPlaying?: boolean;
}

export interface IAudioPlayer {
  id?: string;
  className?: string;
  tracks?: IAudioTrack[];
  onPlayTrack?: () => void;
  nativeControls?: boolean;
  autoPlay?: boolean;
  hideAnimation?: boolean;
  flip?: boolean;
  prompt?: string;
  theme?: 'light' | 'dark';
}

export const HAudioPlayer = function ({
  id = 'atom__AudioPlayer',
  className = '',
  tracks = DEFAULT_TRACKS,
  onPlayTrack = () => {},
  nativeControls = false,
  autoPlay = false,
  flip = false,
  hideAnimation = false,
  prompt = 'Rotation portals',
  theme = 'light',
}: IAudioPlayer) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState('ready');
  const [title, setTitle] = useState(prompt);
  const selectedTrack = tracks[1];
  const shouldAutoPlay = autoPlay || status === 'playing';

  const gridSx = [
    {
      [`class02
        flex
        col-span-full col-start-0
        content-center
        items-center
        align-center
        justify-center
        basis-full
        overflow-hidden
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  const promptSx = [
    {
      [`class02
        basis-full 
        ml-a2 
        col-span-4 
        col-start-1
        `]: true,
      [`        
        animate-rprompter
        min-w-[800px]
        text-left
      `]: !hideAnimation,
      [`        
        text-right
        animate-lprompter
      `]: !!flip,
    },
  ];

  const promptStyles = `${clsx(promptSx)}`;

  const promptWrapperSx = [
    {
      [`class03
        overflow-hidden relative w-full h-full
        order-3
        `]: true,
      [`        
        !order-1
      `]: !!flip,
    },
  ];

  const promptWrapperStyles = `${clsx(promptWrapperSx)}`;

  const handleStatus = (status: string, options: { title?: string }) => {
    console.log(
      `%c, dp::oneiros::audio_player::status_changed(${status})`,
      'background-color: blue',
    );
    setStatus(status);
    setTitle(options?.title || prompt);
  };

  const reconstructPlayer = () => {
    handleStatus('stopped', {});
    setTimeout(() => handleStatus('ready', {}), 0);
  };

  const handlePlay = () => {
    handleStatus('playing', {
      title: audioElement?.current?.getAttribute('data-title') || prompt,
    });
  };

  const handleStop = () => {
    handleStatus('stopped', {});
    setTimeout(() => setStatus('ready'), 0);
  };

  const handleClick = () => {
    if (!audioElement.current) return;
    onPlayTrack();
    const isPlaying = status === 'playing';

    if (isPlaying) {
      audioElement.current.pause();
      reconstructPlayer();
    } else {
      audioElement.current.play();
      handleStatus('playing', {});
    }
  };

  useEffect(() => {
    const element = audioElement.current;

    if (element) {
      const memo = {
        clearInterval: () => {},
      };

      const retryPlay = () => {
        const interval = setInterval(() => {
          setTimeout(() => {
            if (status !== 'playing') {
              reconstructPlayer();
              element.play();
            }
          }, 0);
        }, 1000);
        memo.clearInterval = () => clearInterval(interval);
      };

      const handleStalled = () => {
        handleStatus('stalled', {});
        retryPlay();
        setTimeout(retryPlay, 1000);
      };

      const handleOnline = () => {
        handleStatus('online', {});
        memo.clearInterval();
        setTimeout(handlePlay, 1000);
      };

      const handleOffline = () => {
        handleStatus('offline', {});
        setTimeout(retryPlay, 1000);
      };

      element.addEventListener('ended', handleStop);
      element.addEventListener('stalled', handleStalled);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        element.removeEventListener('ended', handleStop);
        element.removeEventListener('stalled', handleStalled);
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        memo.clearInterval();
        handleStatus('destroying', {});
      };
    }
    return () => {};
  }, []);

  return (
    <div id={id} className={gridStyles}>
      <div className="flex items-center justify-center order-2">
        {nativeControls ? undefined : (
          <Button
            className="w-full"
            theme={theme}
            icon={status === 'playing' ? EIcon.stop : EIcon.play}
            variant={ButtonVariant.FILLED}
            buttonTheme={EButtonTheme.PRIMARY}
            onClick={handleClick}
          />
        )}
        {status !== 'stopped' ? (
          <MuxAudio
            startTime={-1}
            src={selectedTrack.url}
            controls={nativeControls}
            ref={audioElement}
            autoPlay={shouldAutoPlay}
            loop
            preload="none"
            streamType="live"
            preferPlayback="mse"
          />
        ) : undefined}
      </div>
      <div className={promptWrapperStyles}>
        <div className="absolute left-a0 top-b1">
          <Typography className={promptStyles} truncate>
            {title} · {title} · {title} · {title} · {title} · {title} · {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HAudioPlayer;
