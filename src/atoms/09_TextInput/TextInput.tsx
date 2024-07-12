/* eslint no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/TextInput.tsx
import { useMemo, useState } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import { Typography, TypographyVariant } from '../02_Typography';
import {
  SystemIcon as Icon,
  ESystemIcon,
  EIconSize,
  EIconColor,
} from '../05_SystemIcon';

export enum ETextInputVariant {
  STANDARD = 'standard',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

export interface IOption {
  label: string;
  value: string | number;
}

export interface ITextInputExtraProps {
  onClick?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  onFocus?: (e?: any) => void;
  onDateChange?: (e?: any) => void;
  callbackRef?: any;
  value?: string;
  autoComplete?: string;
}

export interface ITextInput extends ITextInputExtraProps {
  className?: string;
  label: string;
  icon?: ESystemIcon;
  placeholder?: string;
  onChange?: (e?: any) => void;
  theme?: string;
  variant?: ETextInputVariant;
  name?: string;
  type?: string;
  id?: string;
}

const iconBoxSx = [
  {
    [`
        flex
        gap-0
        items-center
        `]: true,
  },
];
const iconBoxStyles = clsx(iconBoxSx);

const StartIcon = function ({ icon, hide, theme }: any) {
  return (
    <Icon
      className={`textInputIcon mb-b0 motion-reduce:transition-width ease-in-out duration-300 delay-1000 overflow-hidden ${hide ? 'min-w-0 w-0' : 'min-w-a3'}`}
      icon={icon}
      theme={theme}
      color={EIconColor.BW}
      size={EIconSize.SMALL}
    />
  );
};

const TextInputLabel = function ({
  id,
  styles,
  variant,
  label,
  icon,
  placeholder,
}: any) {
  return (
    <InputLabel
      htmlFor={id}
      className={styles}
      shrink={placeholder ? true : undefined}
    >
      <Box className={iconBoxStyles}>
        {icon ? <StartIcon icon={icon} /> : undefined}
        <Box>
          <Typography className="textInputLabel" variant={variant}>
            {label}
          </Typography>
        </Box>
      </Box>
    </InputLabel>
  );
};

export const HTextInput = function (props: ITextInput) {
  const {
    className = '',
    label = 'Label',
    placeholder = 'This is a very long placeholder',
    icon,
    variant = ETextInputVariant.OUTLINED,
    onChange = () => {},
    id = 'atom__textinput',
    theme = 'light',
    name = '',
    type = 'text',
    ...extraProps
  } = props;

  const [value, setValue] = useState(extraProps?.value || '');

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
        dark:bg-transparent
        dark:!text-body-dark
        [&>div]:flex
        [&>div]:items-center
        [&.Mui-focused_fieldset]:!border-primary-light
        [&.Mui-focused_fieldset_legend]:!w-auto

        dark:!border-primary-dark
        dark:[&_fieldset]:!border-body-dark
        dark:[&.Mui-focused_fieldset]:!border-primary-dark
        `]: true,
    },
  ];
  const selectStyles = clsx(selectSx);

  const labelSx = [
    {
      [`
        transition
        `]: true,
      [`
        [&_.textInputIcon]:visible
        [&[data-shrink=true]_.textInputIcon]:hidden
        [&[data-shrink=true]_.textInputPlaceholder]:hidden
        [&[data-shrink=true]_.textInputLabel]:visible
      `]: !!icon,
    },
  ];
  const labelStyles = clsx(labelSx);

  const typographyVariantMap = useMemo(
    () => ({
      [ETextInputVariant.STANDARD]: TypographyVariant.SMALL,
      [ETextInputVariant.FILLED]: TypographyVariant.SMALL,
      [ETextInputVariant.OUTLINED]: TypographyVariant.SMALL,
    }),
    [],
  );

  const hasText = useMemo(() => !!value, [value, extraProps?.value]);

  const StartAdornment = useMemo(
    () => <StartIcon icon={icon} hide={hasText} theme={theme} />,
    [icon, theme, hasText],
  );

  const handleDateChange = (e: any, opts: any) => {
    if (!opts?.skip && extraProps?.onDateChange) extraProps.onDateChange(e);
    if (opts?.blur && extraProps?.onBlur) extraProps.onBlur(e);
    if (opts?.value !== undefined) setValue(opts.value || '');
  };

  if (extraProps?.callbackRef?.current) {
    extraProps.callbackRef.current = handleDateChange;
  }

  const handleClick = (e: any) => {
    if (extraProps?.onClick) {
      extraProps?.onClick(e);
      onChange(e);
    }
  };

  const handleFocus = (e: any) => {
    if (extraProps?.onFocus) {
      handleDateChange(e?.target?.value, { skip: true });
      onChange(e);
    }
  };

  const handleBlur = (e: any) => {
    if (extraProps?.onBlur) {
      handleDateChange(e?.target?.value, {
        skip: true,
        value: e?.target?.value,
      });
      extraProps?.onBlur(e);
    }
  };

  const handleChange = (e: any) => {
    setValue(e?.target?.value);
    if (extraProps?.onDateChange) {
      handleDateChange(e?.target?.value, {
        skip: false,
        value: e?.target?.value,
      });
    }
    if (onChange) {
      onChange(e?.target?.value);
    }
  };

  return (
    <Box id="inputBase" className={boxStyles}>
      <FormControl fullWidth size="small">
        <TextInputLabel
          id={`${id}---label`}
          label={label}
          styles={labelStyles}
          variant={typographyVariantMap[variant]}
          placeholder={placeholder}
          icon={icon}
        />
        <OutlinedInput
          id={id}
          name={name}
          type={type}
          className={selectStyles}
          value={value}
          startAdornment={placeholder ? StartAdornment : undefined}
          placeholder={placeholder}
          onChange={handleChange}
          label={label}
          onClick={handleClick}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoComplete={extraProps?.autoComplete}
        />
      </FormControl>
    </Box>
  );
};

export default HTextInput;
