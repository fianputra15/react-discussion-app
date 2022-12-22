import React from 'react';

export default function useInput() {
  const [val, setVal] = React.useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setVal(value);
  };
  const handleResetValue = () => {
    setVal('');
  };

  return [
    val, handleChange, handleResetValue,
  ];
}
