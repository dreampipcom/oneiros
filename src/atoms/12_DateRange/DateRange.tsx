/* eslint react/no-unstable-nested-components:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/DateRange.tsx
import type { Moment } from 'moment';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/en-gb';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import { ESystemIcon } from '../05_SystemIcon';
import { TextInput } from '../09_TextInput';

const DATE_PLACEHOLDER = 'DD/MM/YYYY';
const BLANK_VALUE = [null, null];
const BLANK_STRING = '';
const DELIMITER = ' — ';

export enum EDateRangeVariant {
  STANDARD = 'standard',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

export interface IDateRange {
  className?: string;
  label: string;
  icon?: string;
  theme?: 'light' | 'dark';
  disablePast?: boolean;
  onSelect?: (e?: any) => void;
  name?: string;
  id?: string;
}

export const HDateRange = function ({
  className,
  theme = 'light',
  icon = ESystemIcon.calendar,
  disablePast = true,
  label = 'Pick your dates',
  onSelect = () => {},
  name = '',
  id = 'atom__daterange',
}: IDateRange) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const textRef = useRef((e?: any, opts?: any) => ({ e, opts }));
  const [value, setValue] = useState<(Moment | null)[]>(BLANK_VALUE);
  const [open, setOpen] = useState<boolean>(false);
  const valueRef = useRef(value);

  const boxSx = [
    {
      [`
        w-full
        relative

        [&_.base-Popper-root]:!left-1/2
        [&_.base-Popper-root]:!transform
        [&_.base-Popper-root]:!-translate-x-1/2
        [&_.base-Popper-root]:!inset-auto
        [&_.base-Popper-root]:!mt-a5
        md:[&_.base-Popper-root]:!absolute 
        md:[&_.base-Popper-root]:!top-a5
        md:[&_.base-Popper-root]:!mt-0

        [&_.MuiPickersToolbarText-root.Mui-selected]:text-soft-light
        dark:[&_.MuiPickersToolbarText-root.Mui-selected]:text-soft-light

        dark:!text-body-dark
        [&_.MuiDateRangePickerDay-day.Mui-selected]:bg-soft-light
        hover:[&_.MuiDateRangePickerDay-day.Mui-selected]:bg-soft-light
        focus:[&_.MuiDateRangePickerDay-day.Mui-selected]:bg-soft-light

        [&_.MuiButton-colorPrimary]:!text-secondary-light

        [&_.MuiDateRangePickerDay-rangeIntervalDayHighlight]:!bg-soft-bg
        hover:[&_.MuiDateRangePickerDay-day]:!bg-soft-light
        `]: true,
    },
  ];
  const boxStyles = `${clsx(boxSx)} ${className}`;

  const setDate = ({ date, i }: { date: Moment; i: number }) => {
    valueRef.current[i] = date;
    setValue([...valueRef.current]);
  };

  const handleOpen = () => {
    if (!open) setOpen(true);
  };

  const handleClose = () => {
    if (open) setOpen(false);
  };

  const handleClear = () => {
    setValue([...BLANK_VALUE]);
    valueRef.current = [...BLANK_VALUE];

    textRef?.current([...BLANK_VALUE], {
      skip: true,
      blur: true,
      value: BLANK_STRING,
    });
    handleClose();
  };

  useEffect(() => {
    handleClear();
    return () => {
      textRef.current = (e?: any, opts?: any) => ({ e, opts });
      handleClear();
    };
  }, []);

  const handleChange = (e: any) => {
    valueRef.current = value;
    const stringsArr: string[] = [];

    if (!Array.isArray(e)) {
      e?.split(DELIMITER)?.forEach((date: string, i: number) => {
        const momentDate = moment(date, DATE_PLACEHOLDER, true);

        if (momentDate.isValid()) {
          setDate({ date: momentDate, i });
          textRef?.current(e, {
            skip: true,
            value: valueRef.current.join(DELIMITER),
          });
        }

        if (momentDate !== value[i]) {
          valueRef.current[i] = null;
          setValue([...valueRef.current]);
        }
      }) as unknown as string[];
    } else if (e.every((el) => el === null)) {
      setValue([...BLANK_VALUE]);
      valueRef.current = [...BLANK_VALUE];
      textRef?.current(e, { skip: true, blue: true, value: BLANK_STRING });
    } else {
      e?.forEach((momentDate: Moment, i: number) => {
        if (momentDate?.format) {
          const dateString = momentDate.format(DATE_PLACEHOLDER);

          if (momentDate.isValid()) {
            valueRef.current[i] = momentDate;
            stringsArr[i] = dateString;
            setValue([...valueRef.current]);
            textRef?.current(e, {
              skip: true,
              value: stringsArr.join(DELIMITER),
            });
          }

          if (momentDate !== value[i]) {
            valueRef.current[i] = null;
            setValue([...valueRef.current]);
          }
        }
      }) as unknown as string[];
    }
    onSelect(value);
  };

  const uid = id + Date.now();

  return (
    <Box id={id} className={boxStyles}>
      <FormControl fullWidth size="small">
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
          <DateRangePicker
            slots={{
              field: SingleInputDateRangeField,
              textField: TextInput,
            }}
            name={uid}
            open={open}
            label={label}
            calendars={1}
            shouldDisableDate={() => false}
            onChange={handleChange}
            onAccept={handleClose}
            onOpen={handleOpen}
            onClose={handleClose}
            format={DATE_PLACEHOLDER}
            disablePast={disablePast}
            value={value as [Moment | null, Moment | null]}
            slotProps={{
              field: { clearable: true, dateSeparator: DELIMITER.trim() },
              popper: {
                disablePortal: true,
              },
              dialog: {
                disablePortal: true,
              },
              textField: {
                autoComplete: 'off',
                icon,
                id: uid,
                onDateChange: handleChange,
                callbackRef: textRef,
                onClick: handleOpen,
                theme,
                name,
              } as any,
              actionBar: {
                actions: ['clear', 'today', 'accept'],
                onClear: handleClear,
                onAccept: handleClose,
              },
              toolbar: {
                hidden: false,
              },
            }}
          />
        </LocalizationProvider>
      </FormControl>
    </Box>
  );
};

export default HDateRange;
