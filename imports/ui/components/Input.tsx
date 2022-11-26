import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  minLength?: number;
  className?: string;
}

export const Input = ({ label, type, name, value, onChange, placeholder, minLength, className }: InputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        aria-label="labelInput"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        minLength={minLength}
      />
    </div>
  );
};
