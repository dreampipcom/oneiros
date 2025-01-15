/* eslint react/jsx-one-expression-per-line:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/AudioPlayer.tsx
import clsx from 'clsx';
import { Fragment, useRef, useState, useEffect } from 'react';

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
    url: 'https://www.dreampip.com/api/nexus/audio/1',
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
  const [status, setStatus] = useState('stopped');
  const [title, setTitle] = useState(prompt);
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

  const handlePlay = () => {
    if (!audioElement.current) return;
    onPlayTrack();
    const isPlaying = status === 'playing';

    if (isPlaying) {
      audioElement.current.pause();
      audioElement.current.src = 'about:blank';
      audioElement.current.load();
      setStatus('stopped');
    } else {
      audioElement.current.src = tracks[0].url || 'about:blank';
      audioElement.current.load();
      audioElement.current.play();
      setStatus('playing');
    }
  };

  useEffect(() => {
    const element = audioElement.current;
    const handleStatus =
      (status: string, options: { title?: string }) => () => {
        setStatus(status);
        setTitle(options?.title || prompt);
      };
    if (element) {
      const handlePlay = handleStatus('playing', {
        title: element.getAttribute('data-title') || prompt,
      });
      const handleStop = handleStatus('stopped', {});
      element.addEventListener('play', handlePlay);
      element.addEventListener('ended', handleStop);

      return () => {
        element.removeEventListener('play', handlePlay);
        element.removeEventListener('ended', handleStop);
      };
    }
    return () => {};
  }, [status, prompt]);

  return (
    <div id={id} className={gridStyles}>
      <div className="flex items-center justify-center order-2">
        <Button
          className="w-full"
          theme={theme}
          icon={status === 'playing' ? EIcon.stop : EIcon.play}
          variant={ButtonVariant.FILLED}
          buttonTheme={EButtonTheme.PRIMARY}
          onClick={handlePlay}
        />
        <audio
          src={tracks[0].url}
          controls={nativeControls}
          ref={audioElement}
          autoPlay={autoPlay}
          preload="none"
        >
          {tracks.map((file) => (
            <>
              <source
                key={`molecules__AudioPlayer__element-source-${file.title}`}
                src={file.url}
                type="audio/mpeg"
              />
              <track
                kind="subtitles"
                key={`molecules__AudioPlayer__element-track-${file.title}`}
                data-title={file.title}
                srcLang="en"
                label="English"
                src={file.url}
              />
            </>
          ))}
        </audio>
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
