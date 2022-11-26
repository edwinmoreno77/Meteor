import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '../../api/users';

const deleteUser = ({ _id, user }) => {
  UsersCollection.remove(_id);
  alert(`Usuario ${user.name}, eliminado`);
};

export const Table = () => {
  const users = useTracker(() => {
    return UsersCollection.find().fetch();
  });

  return (
    <div className="m-5">
      <h2 className="text-center">Usuarios</h2>
      <table className="table table-striped table-bordered table-hover table-sm text-center p-1">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Rut</th>
            <th>Codigo Postal</th>
            <th>Region</th>
            <th>Comuna</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.lastNameP}</td>
                <td>{user.lastNameM}</td>
                <td>{user.rut}</td>
                <td>{user.codigoPostal}</td>
                <td>{user.Region}</td>
                <td>{user.comuna}</td>
                <td role="button" className="bg-danger text-white" onClick={() => deleteUser({ _id: user._id, user })}>
                  &times;
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
