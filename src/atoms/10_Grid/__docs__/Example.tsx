// @atoms/10_Grid/__test__/Example.tsx
import React, { FC } from 'react';
import Grid, { IGrid, EBleedVariant, EGridVariant } from '../Grid.tsx';
import Button from '../../01_Button/Button.tsx';
import DateRange from '../../12_DateRange/DateRange.tsx';
import TextInput from '../../09_TextInput/TextInput.tsx';
import Dropdown from '../../07_Dropdown/Dropdown.tsx';
import Image from '../../08_Image/Image.tsx';

const Example: FC<IGrid> = function ({
  variant,
  background,
  gradient,
  theme = 'light',
}) {
  return (
    <div>
      <Grid
        theme={theme}
        id="MAIN_GRID"
        variant={EGridVariant.ONE_COLUMN}
        bleed={EBleedVariant.RESPONSIVE}
        gradient={gradient}
        background={background}
      >
        <Grid theme={theme} variant={variant}>
          <TextInput
            theme={theme}
            className="col-span-3 col-start-0 md:col-span-3 md:col-start-0"
          />
          <DateRange
            theme={theme}
            className="col-span-3 col-start-0 md:col-span-3 md:col-start-0"
          />
        </Grid>
        <Grid theme={theme} variant={variant}>
          <DateRange
            theme={theme}
            className="col-span-3 col-start-0 md:col-span-3 md:col-start-0"
          />
          <Dropdown
            theme={theme}
            className="col-span-3 col-start-0 md:col-span-3 md:col-start-0"
          />
        </Grid>
        <Grid theme={theme} variant={variant}>
          <Image
            theme={theme}
            className="col-span-full col-start-0 md:col-span-4 md:col-start-0"
          />
          <Button
            theme={theme}
            className="col-span-full col-start-0 md:col-span-3 md:col-start-5"
          >
            Hello world
          </Button>
        </Grid>
        <Grid theme={theme} variant={variant}>
          <Button
            theme={theme}
            className="col-span-6 col-start-0 md:col-span-full md:col-start-0"
          >
            Hello world two
          </Button>
        </Grid>
        <Grid theme={theme} variant={variant}>
          <Button
            theme={theme}
            className="col-span-4 col-start-0 md:col-span-4 md:col-start-0"
          >
            Hello world three
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Example;
