/* eslint react/jsx-one-expression-per-line:0, jsx-a11y/media-has-caption:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, consistent-return:0 */
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
    nowPlaying: 'https://radio.dreampip.com/api/nowplaying/dpip000',
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
  nowPlaying?: string;
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
  const [status, setStatus] = useState('loading');
  const [title, setTitle] = useState(prompt);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedTrack = tracks[1];
  const icon = isPlaying ? EIcon.stop : EIcon.play;

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

  const updatePrompt = async () => {
    console.log(
      '%c dp::oneiros::audio_player::prompt::now_playing(fetching)',
      'background-color: pink; color: blue;',
    );
    const url = selectedTrack.nowPlaying;
    if (url) {
      try {
        const req = await fetch(url);
        const json = await req.json();
        const text = json?.now_playing?.song?.title;

        if (text.match(/^[0-9]*$/)) {
          setTitle(`Rotation Portal ${text}`);
        } else {
          setTitle(text);
        }
      } catch (e) {
        console.log(
          '%c dp::oneiros::audio_player::prompt::now_playing(error)',
          'background-color: red; color: white;',
        );
      }
    }
  };

  const logStatus = () => {
    console.log(
      `%c dp::oneiros::audio_player::status_changed(${status})`,
      'background-color: blue',
    );
  };

  const handlePlaying = () => {
    if (!audioElement.current) return;
    setIsPlaying(true);
    setStatus('playing');
  };

  const handleStopping = () => {
    if (!audioElement.current) return;
    setIsPlaying(false);
    setStatus('stopped');
  };

  const handleStalled = () => {
    if (!audioElement.current) return;
    setIsPlaying(false);
    setStatus('stalled');
  };

  const handlePlay = () => {
    if (!audioElement.current) return;
    audioElement?.current?.play();
  };

  const handleStop = () => {
    if (!audioElement.current) return;
    audioElement?.current?.pause();
  };

  const handleClick = () => {
    if (!audioElement.current) return;
    onPlayTrack();
    if (isPlaying) {
      handleStop();
    } else {
      handlePlay();
    }
  };

  useEffect(logStatus, [status]);

  useEffect(() => {
    if (audioElement.current) {
      const memo = {
        clearPromptInterval: () => {},
      };

      const checkPrompt = () => {
        const interval = setInterval(() => {
          updatePrompt();
        }, 5000);
        memo.clearPromptInterval = () => clearInterval(interval);
      };

      const handleOnline = () => {
        setStatus('online');
        setTimeout(handlePlay, 5000);
      };

      const handleOffline = () => {
        setStatus('offline');
        handleStopping();
      };

      audioElement.current.addEventListener('play', handlePlaying);
      audioElement.current.addEventListener('playing', handlePlaying);
      audioElement.current.addEventListener('pause', handleStopping);

      audioElement.current.addEventListener('ended', handleStopping);
      audioElement.current.addEventListener('stalled', handleStalled);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      checkPrompt();

      return () => {
        audioElement.current.removeEventListener('play', handlePlaying);
        audioElement.current.removeEventListener('playing', handlePlaying);
        audioElement.current.removeEventListener('ended', handleStopping);
        audioElement.current.removeEventListener('stalled', handleStalled);
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        memo.clearPromptInterval();
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
            icon={icon}
            variant={ButtonVariant.FILLED}
            buttonTheme={EButtonTheme.PRIMARY}
            onClick={handleClick}
          />
        )}
        <MuxAudio
          src={selectedTrack.url}
          controls={nativeControls}
          ref={audioElement}
          autoPlay={autoPlay}
          loop
          preferPlayback="mse"
        />
      </div>
      <div className={promptWrapperStyles}>
        <div
          key={`player__prompt--${title}`}
          className="absolute left-a0 top-b1"
        >
          <Typography className={promptStyles} truncate>
            {title} ·{title} ·{title} ·{title} ·{title} ·{title} ·{title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HAudioPlayer;
