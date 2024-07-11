// @atoms/12_DateRange/__test__/Example.tsx
import React, { FC } from 'react';
import DateRange, { DateRangeProps } from '../DateRange.tsx';

const Example: FC<DateRangeProps> = function ({
  variant,
  icon = 'activity-heart',
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '180px',
        margin: '0 auto',
      }}
    >
      <DateRange variant={variant} icon={icon} />
    </div>
  );
};

export default Example;
