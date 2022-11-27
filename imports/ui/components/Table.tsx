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
    <div className="m-8">
      <h2 className="text-3xl font-bold underline text-center text-cyan-500">USUARIOS</h2>
      <div className="grid grid-cols-1  text-center">
        <table className="border-4 border-sky-900 p-4 mt-7 mb-4">
          <thead>
            <tr className="bg-cyan-100 border-4 border-sky-900">
              <th className="border-2 border-sky-900">Nombres</th>
              <th className="border-2 border-sky-900">Apellido Paterno</th>
              <th className="border-2 border-sky-900">Apellido Materno</th>
              <th className="border-2 border-sky-900">Rut</th>
              <th className="border-2 border-sky-900">Codigo Postal</th>
              <th className="border-2 border-sky-900">Region</th>
              <th className="border-2 border-sky-900">Comuna</th>
              <th className="border-2 border-sky-900">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="bg-sky-50 border-4 border-sky-900" key={user._id}>
                  <td className="border-2 border-sky-900">{user.name}</td>
                  <td className="border-2 border-sky-900">{user.lastNameP}</td>
                  <td className="border-2 border-sky-900">{user.lastNameM}</td>
                  <td className="border-2 border-sky-900">{user.rut}</td>
                  <td className="border-2 border-sky-900">{user.codigoPostal}</td>
                  <td className="border-2 border-sky-900">{user.Region}</td>
                  <td className="border-2 border-sky-900">{user.comuna}</td>
                  <td
                    role="button"
                    className="bg-red-600 hover:bg-red-800"
                    onClick={() => deleteUser({ _id: user._id, user })}
                  >
                    &times;
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
