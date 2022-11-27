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
        className="px-4 py-4 rounded bg-cyan-50 w-full block"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value={'seleccione'}>{placeholder}</option>
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
