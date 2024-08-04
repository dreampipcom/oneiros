/* eslint jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/AudioPlayer.tsx
import clsx from 'clsx';
import { Fragment } from 'react';
import Grid, {
  EBleedVariant,
  EGridVariant,
} from '../../atoms/10_Grid/Grid.tsx';

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
  theme?: 'light' | 'dark';
}

export const HAudioPlayer = function ({
  id = 'atom__AudioPlayer',
  className = '',
  tracks = DEFAULT_TRACKS,
  onPlayTrack = () => {},
  theme = 'light',
}: IAudioPlayer) {
  const gridSx = [
    {
      [`class02
        grid
        sm:grid-cols-12
        sm:!gap-a0
        md:!gap-a4
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  onPlayTrack();

  return (
    <Grid
      theme={theme}
      id={id}
      className={gridStyles}
      variant={EGridVariant.TWELVE_COLUMNS}
      bleed={EBleedVariant.RESPONSIVE}
    >
      <audio
        src={tracks[0].url}
        className="col-span-full sm:col-span-6 lg:col-span-4 col-start-0"
      >
        {tracks.map((file) => (
          <>
            <source src={file.url} type="audio/mpeg" />
            <track
              kind="subtitles"
              key={`molecules__AudioPlayer__card__element--${file.title}`}
              srcLang="en"
              label="English"
              src={file.url}
            />
          </>
        ))}
      </audio>
    </Grid>
  );
};

export default HAudioPlayer;
