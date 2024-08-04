/* eslint jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/AudioPlayer.tsx
import clsx from 'clsx';
import { Fragment, useRef, useState, useEffect } from 'react';
import Grid, {
  EBleedVariant,
  EGridVariant,
} from '../../atoms/10_Grid/Grid.tsx';

import { Button, ButtonVariant, EButtonTheme } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { ESystemIcon } from '../../atoms/05_SystemIcon';

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
  prompt?: string;
  theme?: 'light' | 'dark';
}

export const HAudioPlayer = function ({
  id = 'atom__AudioPlayer',
  className = '',
  tracks = DEFAULT_TRACKS,
  onPlayTrack = () => {},
  nativeControls = false,
  prompt = 'Rotation portals',
  theme = 'light',
}: IAudioPlayer) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState('stopped');
  const [title, setTitle] = useState(prompt);
  const gridSx = [
    {
      [`class02
        grid
        sm:grid-cols-12
        sm:!gap-a0
        md:!gap-a1
        content-center
        items-center
        align-center
        justify-center
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  const handlePlay = () => {
    if (!audioElement.current) return;
    onPlayTrack();
    const isPlaying = status === 'playing';

    if (isPlaying) {
      audioElement.current?.pause();
      audioElement.current.currentTime = 0;
      setStatus('stopped');
    } else {
      audioElement.current?.play();
      setStatus('playing');
    }
  };

  const handleStatus = (status: string, options: { title?: string }) => () => {
    setStatus(status);
    setTitle(options?.title || prompt);
  };

  useEffect(() => {
    const handlePlay = handleStatus('playing', {
      title: audioElement.current?.getAttribute('data-title') || prompt,
    });
    const handleStop = handleStatus('stopped', {});
    audioElement.current?.addEventListener('play', handlePlay);
    audioElement.current?.addEventListener('ended', handleStop);

    return () => {
      audioElement.current?.removeEventListener('play', handlePlay);
      audioElement.current?.removeEventListener('ended', handleStop);
    };
  }, [status]);

  return (
    <Grid
      theme={theme}
      id={id}
      className={gridStyles}
      variant={EGridVariant.TWELVE_COLUMNS}
      bleed={EBleedVariant.RESPONSIVE}
    >
      <div className="flex items-center justify-center col-span-full sm:col-span-1 lg:col-span-1 col-start-0">
        <Button
          className="w-full"
          theme={theme}
          icon={status === 'playing' ? ESystemIcon.stop : ESystemIcon.play}
          variant={ButtonVariant.FILLED}
          buttonTheme={EButtonTheme.PRIMARY}
          onClick={handlePlay}
        />
        <audio
          src={tracks[0].url}
          controls={nativeControls}
          ref={audioElement}
          autoPlay
          preload="none"
        >
          {tracks.map((file) => (
            <>
              <source src={file.url} type="audio/mpeg" />
              <track
                kind="subtitles"
                key={`molecules__AudioPlayer__element--${file.title}`}
                data-title={file.title}
                srcLang="en"
                label="English"
                src={file.url}
              />
            </>
          ))}
        </audio>
      </div>
      <Typography
        className="col-span-full sm:col-span-6 lg:col-span-4 col-start-0"
        truncate
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default HAudioPlayer;
