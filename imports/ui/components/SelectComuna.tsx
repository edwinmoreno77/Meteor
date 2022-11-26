import React from 'react';
import { SelectProps } from './SelectRegion';

export const SelectComuna = ({ label, onChange, value, regiones, name, placeholder, inputRegion }: SelectProps) => {
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
        <option value={'seleccione'}>Seleccione una comuna</option>
        {regiones.map((region) => {
          if (region.region === inputRegion) {
            return region.comunas.map((comuna, index) => {
              return (
                <option key={index} value={comuna}>
                  {comuna}
                </option>
              );
            });
          }
        })}
      </select>
    </>
  );
};
