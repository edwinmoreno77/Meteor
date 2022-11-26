import React from 'react';

export interface SelectProps {
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
  regiones?: any;
  placeholder?: string;
  inputRegion?: string;
}

export const SelectRegion = ({ label, onChange, value, regiones, name, placeholder }: SelectProps) => {
  return (
    <>
      <label>{label}</label>
      <select
        aria-label="labelSelect"
        className="form-select mb-2"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value={'seleccione'}>Seleccione una region</option>
        {regiones.map((region, index) => {
          return (
            <option key={index} value={region.region}>
              {region.region}
            </option>
          );
        })}
      </select>
    </>
  );
};
