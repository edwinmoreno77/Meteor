import { useEffect, useState } from 'react';
import { validateRut } from 'rutlib/lib';
import { User, UsersCollection } from '../api/users';

type Form = {
  name: string;
  lastNameM: string;
  lastNameP: string;
  rut: string;
  inputRegion: string;
  comuna: string;
  codigoPostal: string;
};

export const useForm = (initialForm: Form) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = (user: User) => {
    const validName = user.name.length > 2 ? true : alert('Ingrese un nombre');
    const validLastNameM = user.lastNameM.length > 2 ? true : alert('Ingrese un apellido materno');
    const validLastNameP = user.lastNameP.length > 2 ? true : alert('Ingrese un apellido paterno');
    const validRegion = user.Region != 'seleccione' && user.Region.length > 3 ? true : alert('Ingrese una region');
    const validComuna = user.comuna != 'seleccione' && user.comuna.length > 3 ? true : alert('Ingrese una comuna');
    const validCodigoPostal = user.codigoPostal > 2 ? true : alert('Ingrese un codigo postal');

    if (validName && validLastNameM && validLastNameP && validRegion && validComuna && validCodigoPostal === true) {
      validateRut(user.rut)
        ? UsersCollection.find({ rut: user.rut }).fetch().length === 0
          ? ( user.createdAt = new Date(), UsersCollection.insert(user), onResetForm(), alert('Usuario agregado'))
          : alert('El rut ya existe')
        : alert('Rut invalido');
    }
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
