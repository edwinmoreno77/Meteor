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
    <div className="flex justify-around items-center mx-5 my-10">
      <div className="shadow-2xl rounded-lg w-auto p-32">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold underline bg-cyan-400 text-center m-auto text-gray-50 p-4 rounded-lg  mx-8 mb-7">
          Registro
        </h1>
        <form
          className="columns-1 items-center w-full box-border h-auto mx-auto drop-shadow-md"
          onSubmit={handleSubmit}
        >
          <Input
            label={'Nombres:'}
            className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
            type={'text'}
            name={'name'}
            value={name}
            onChange={onInputChange}
            placeholder={'Ingrese nombres'}
            minLength={2}
          />
          <Input
            label={'Apellido Paterno:'}
            className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
            type={'text'}
            name={'lastNameP'}
            value={lastNameP}
            onChange={onInputChange}
            placeholder={'Ingrese apellido paterno'}
            minLength={2}
          />
          <Input
            label={'Apellido Materno:'}
            className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
            type={'text'}
            name={'lastNameM'}
            value={lastNameM}
            onChange={onInputChange}
            placeholder={'Ingrese apellido materno'}
            minLength={2}
          />
          <SelectRegion
            label={'Región:'}
            placeholder={'Seleccione una Región'}
            name={'inputRegion'}
            value={inputRegion}
            onChange={onInputChange}
            regiones={regiones}
          />
          <SelectComuna
            label={'Comuna:'}
            name={'comuna'}
            value={comuna}
            onChange={onInputChange}
            regiones={regiones}
            placeholder={'Seleccione una Comuna'}
            inputRegion={inputRegion}
          />
          <Input
            label={'Rut:'}
            className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
            type={'text'}
            name={'rut'}
            value={rut}
            onChange={onInputChange}
            placeholder={'Ingrese su rut'}
            minLength={2}
          />
          <Input
            label={'Código Postal:'}
            className={'rounded-md p-4 m-1 w-full block bg-cyan-50'}
            type={'text'}
            name={'codigoPostal'}
            value={codigoPostal}
            onChange={onInputChange}
            placeholder={'Ingrese código postal'}
            minLength={2}
          />
          <button
            className="transition ease-in-out delay-150 marker px-6 py-3 rounded
           mt-5 shadow-lg shadow-cyan-500/50  bg-cyan-500 hover:-translate-y-1 
           hover:scale-110  text-cyan-50 hover:bg-cyan-600 duration-300"
            type="submit"
          >
            Crear Paciente
          </button>
        </form>
      </div>
      <div className="mx-8 text-center hidden md:block md:text-4xl max-w-full font-bold underline text-cyan-500">
        <p>Ingrese los datos del paciente</p>
      </div>
    </div>
  );
};
