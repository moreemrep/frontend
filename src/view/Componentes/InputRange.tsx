import React, { DetailedHTMLProps, InputHTMLAttributes, useState, useEffect } from 'react';

interface InputRangeProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChangee: (distance: number) => void;
  min: number;
  max: number;
}

export const InputRange: React.FC<InputRangeProps> = ({ onChangee, max, min, ...props }) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onChangee(Math.trunc((value * (max - min)) / 100) + min);
  }, [value]);

  useEffect(() => {
    onChangee(min);
  }, []);

  return <input {...props} value={value} onChange={e => setValue(parseInt(e.target.value))} type="range" />;
};
