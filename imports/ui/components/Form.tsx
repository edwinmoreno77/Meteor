import React from 'react';
import { User } from '../../api/users';
import { regionesNombres } from '../../helpers/regiones';
import { useForm } from '../../helpers/useForm';
import { SelectRegion } from './SelectRegion';
import { SelectComuna } from './SelectComuna';
import { Input } from './Input';

const userFormFields = {
  name: '',
  lastNameM: '',
  lastNameP: '',
  rut: '',
  inputRegion: '',
  comuna: '',
  codigoPostal: '',
};

const { regiones } = regionesNombres;

export const Form = () => {
  const { name, lastNameM, lastNameP, rut, inputRegion, comuna, codigoPostal, onInputChange, isFormValid } =
    useForm(userFormFields);

  const user: User = {
    name: name,
    lastNameM: lastNameM,
    lastNameP: lastNameP,
    rut: rut,
    codigoPostal: codigoPostal,
    Region: inputRegion,
    comuna: comuna,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    isFormValid(user);
  };

  return (
    <div className="flex justify-center ali drop-shadow-md mx-80">
      <form className="columns-1 w-full m-9 box-border h-auto drop-shadow-md" onSubmit={handleSubmit}>
        <Input
          label={'Nombres:'}
          className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
          type={'text'}
          name={'name'}
          value={name}
          onChange={onInputChange}
          placeholder={'nombres'}
          minLength={2}
        />
        <Input
          label={'Apellido Paterno:'}
          className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
          type={'text'}
          name={'lastNameP'}
          value={lastNameP}
          onChange={onInputChange}
          placeholder={'Apellido Paterno'}
          minLength={2}
        />
        <Input
          label={'Apellido Materno:'}
          className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
          type={'text'}
          name={'lastNameM'}
          value={lastNameM}
          onChange={onInputChange}
          placeholder={'apellido materno'}
          minLength={2}
        />
        <Input
          label={'Rut:'}
          className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
          type={'text'}
          name={'rut'}
          value={rut}
          onChange={onInputChange}
          placeholder={'rut'}
          minLength={2}
        />
        <SelectRegion
          label={'Region:'}
          placeholder={'Seleccione Region'}
          name={'inputRegion'}
          value={inputRegion}
          onChange={onInputChange}
          regiones={regiones}
        />
        <SelectComuna
          label={'comuna:'}
          name={'comuna'}
          value={comuna}
          onChange={onInputChange}
          regiones={regiones}
          placeholder={'Seleccione Comuna'}
          inputRegion={inputRegion}
        />
        <Input
          label={'Codigo Postal:'}
          className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
          type={'text'}
          name={'codigoPostal'}
          value={codigoPostal}
          onChange={onInputChange}
          placeholder={'codigo postal'}
          minLength={2}
        />
        <button
          className="transition ease-in-out delay-150 marker px-6 py-3 rounded
           mt-5 shadow-lg shadow-cyan-500/50  bg-cyan-500 hover:-translate-y-1 
           hover:scale-110  text-cyan-50 hover:bg-cyan-600 duration-300"
          type="submit"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
};
