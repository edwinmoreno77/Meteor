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
    createdAt: new Date(),
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    isFormValid(user);
  };

  return (
    <div className='p-5 m-5'>
      <form className="m-5 p-5 form--user" onSubmit={handleSubmit}>
        <Input
          label={'Nombres:'}
          type={'text'}
          name={'name'}
          value={name}
          onChange={onInputChange}
          placeholder={'nombres'}
          minLength={2}
          className={'form-control mb-2'}
        />
        <Input
          label={'Apellido Paterno:'}
          type={'text'}
          name={'lastNameP'}
          value={lastNameP}
          onChange={onInputChange}
          placeholder={'apellido paterno'}
          minLength={2}
          className={'form-control mb-2'}
        />
        <Input
          label={'Apellido Materno:'}
          type={'text'}
          name={'lastNameM'}
          value={lastNameM}
          onChange={onInputChange}
          placeholder={'apellido materno'}
          minLength={2}
          className={'form-control mb-2'}
        />
        <Input
          label={'Rut:'}
          type={'text'}
          name={'rut'}
          value={rut}
          onChange={onInputChange}
          placeholder={'rut'}
          minLength={2}
          className={'form-control mb-2'}
        />
        <SelectRegion
          name={'inputRegion'}
          label={'Region'}
          value={inputRegion}
          onChange={onInputChange}
          regiones={regiones}
          placeholder={'Seleccione Region'}
        />
        <SelectComuna
          name={'comuna'}
          label={'comuna'}
          value={comuna}
          onChange={onInputChange}
          regiones={regiones}
          placeholder={'Seleccione Comuna'}
          inputRegion={inputRegion}
        />
        <Input
          label={'Codigo Postal:'}
          type={'text'}
          name={'codigoPostal'}
          value={codigoPostal}
          onChange={onInputChange}
          placeholder={'codigo postal'}
          minLength={2}
          className={'form-control mb-2'}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};
