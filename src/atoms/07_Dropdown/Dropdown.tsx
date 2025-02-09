/* eslint no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/Dropdown.tsx
import { useMemo, useState } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { Typography, TypographyVariant } from '../02_Typography';
import {
  SystemIcon as Icon,
  EIcon,
  EIconSize,
  EIconColor,
} from '../05_SystemIcon';

const DEFAULT_OPTIONS = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 2,
  },
];

export enum EDropdownVariant {
  STANDARD = 'standard',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

export interface IOption {
  label: string;
  value: string | number;
}

export interface IDropdown {
  className?: string;
  label: string;
  theme?: 'light' | 'dark';
  value?: string;
  options: IOption[];
  icon?: EIcon;
  onSelect?: (e?: string | number) => void;
  variant?: EDropdownVariant;
  name?: string;
  id?: string;
}

const chevronSx = [
  {
    [`
        border-solid
        border-icon-light-bw
        dark:border-icon-dark-bw
        border-0
        border-l
        pl-a0
        pr-a1
        w-a6
        `]: true,
  },
];
const chevronStyles = clsx(chevronSx);

const IconComponent = function ({ theme }: any) {
  return (
    <Icon
      className={chevronStyles}
      theme={theme}
      icon={EIcon['chevron-down']}
      color={EIconColor.BW}
      size={EIconSize.SMALL}
    />
  );
};

const SelectLabel = function ({ id, styles, variant, label }: any) {
  return (
    <InputLabel htmlFor={id} className={styles}>
      <Typography variant={variant}>{label}</Typography>
    </InputLabel>
  );
};

export const HDropdown = function ({
  className,
  theme = 'light',
  label = 'Label',
  options = DEFAULT_OPTIONS,
  icon,
  value = '',
  variant = EDropdownVariant.OUTLINED,
  onSelect = () => {},
  name = '',
  id = 'atom__dropdown',
}: IDropdown) {
  const [_value, setValue] = useState(value);

  const boxSx = [
    {
      [`
        w-full
        `]: true,
    },
  ];
  const boxStyles = `${clsx(boxSx)} ${className}`;

  const selectSx = [
    {
      [`
        rounded-md
        bg-soft-bg
        dark:bg-primary-dark
        dark:!text-primary-dark


        text-body-light
        dark:text-body-dark

        [&>div]:flex
        [&>div]:items-center

        [&_fieldset]:!border-primary-light
        hover:!border-primary-dark
        hover:[&_fieldset]:!border-primary-dark
        
        [&.Mui-focused_fieldset]:!border-primary-light
        [&.Mui-focused_fieldset_legend]:!w-auto

        dark:!border-primary-soft
        dark:[&_fieldset]:!border-primary-soft
        dark:[&.Mui-focused_fieldset]:!border-primary-dark
        `]: true,
      '[&_fieldset_legend]:!w-0': !_value,
    },
  ];
  const selectStyles = clsx(selectSx);

  const iconBoxSx = [
    {
      [`
        flex
        gap-a1
        items-center
        `]: true,
    },
  ];
  const iconBoxStyles = clsx(iconBoxSx);

  const labelSx = [
    {
      [`
        transition
        `]: true,
      [`
        mx-a4
        data-[shrink=true]:mx-a0
      `]: !!icon,
    },
  ];
  const labelStyles = clsx(labelSx);

  const menuItemSx = [
    {
      [`
        text-body-light

        hover:bg-soft-bg 
        focus:bg-soft-bg 

        [&.Mui-selected]:bg-soft-bg

        [&.Mui-focusVisible]:bg-soft-bg 

        hover:[&.Mui-selected]:bg-soft-light 
        hover:[&.Mui-focusVisible]:bg-soft-light
        `]: true,
    },
  ];
  const menuItemStyles = clsx(menuItemSx);

  const typographyVariantMap = useMemo(
    () => ({
      [EDropdownVariant.STANDARD]: TypographyVariant.SMALL,
      [EDropdownVariant.FILLED]: TypographyVariant.SMALL,
      [EDropdownVariant.OUTLINED]: TypographyVariant.SMALL,
    }),
    [],
  );

  const optionsTransversalMap: any = options.reduce((acc: any, opt) => {
    acc[opt.value] = opt.label;
    return acc;
  }, {});

  const SelectIcon = useMemo(() => <IconComponent theme={theme} />, [theme]);

  const OptionsComponent = useMemo(
    () =>
      options.map((item) => (
        <MenuItem
          className={menuItemStyles}
          key={`menuitem-${id}--${item.value}`}
          value={item.value}
        >
          <Typography inherit variant={typographyVariantMap[variant]}>
            {item.label}
          </Typography>
        </MenuItem>
      )),
    [options, menuItemStyles, typographyVariantMap, variant, id],
  );

  return (
    <Box className={boxStyles}>
      <FormControl fullWidth size="small">
        <SelectLabel
          id={`${id}---label`}
          label={label}
          styles={labelStyles}
          variant={typographyVariantMap[variant]}
        />
        <Select
          id={id}
          name={name}
          className={selectStyles}
          value={_value}
          onChange={(e) => {
            setValue(e.target.value);
            onSelect(_value);
          }}
          variant={variant}
          labelId={`${id}---label`}
          label={label}
          displayEmpty
          IconComponent={() => SelectIcon}
          renderValue={(value) => (
            <Box className={iconBoxStyles}>
              {icon ? (
                <Icon
                  icon={icon}
                  theme={theme}
                  color={EIconColor.PRIMARY}
                  size={EIconSize.SMALL}
                />
              ) : undefined}
              <Box>{optionsTransversalMap[value]}</Box>
            </Box>
          )}
        >
          {OptionsComponent}
        </Select>
      </FormControl>
    </Box>
  );
};

export default HDropdown;
