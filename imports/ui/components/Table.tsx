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
    <div className="container m-auto mt-28">
      <h2 className="text-3xl font-bold underline text-center text-cyan-500">PACIENTES</h2>
      <div className="grid grid-cols-1 text-center">
        <table className="border-2 shadow-2xl border-sky-200 lg:text-2xl p-4 mt-5 mb-7 m-auto">
          <thead>
            <tr className="bg-cyan-400 text-white border-2 border-sky-300">
              <th className="border-2 p-1 border-sky-200">Nombres</th>
              <th className="border-2 p-1 border-sky-200">Apellido Paterno</th>
              <th className="border-2 p-1 border-sky-200">Apellido Materno</th>
              <th className="border-2 p-1 border-sky-200">Rut</th>
              <th className="border-2 p-1 border-sky-200">Código Postal</th>
              <th className="border-2 p-1 border-sky-200">Región</th>
              <th className="border-2 p-1 border-sky-200">Comuna</th>
              <th className="border-2 p-1 border-sky-200">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="bg-sky-50 border-2 border-sky-200" key={user._id}>
                  <td className="border-2 p-1 border-sky-200">{user.name}</td>
                  <td className="border-2 p-1 border-sky-200">{user.lastNameP}</td>
                  <td className="border-2 p-1 border-sky-200">{user.lastNameM}</td>
                  <td className="border-2 p-1 border-sky-200">{user.rut}</td>
                  <td className="border-2 p-1 border-sky-200">{user.codigoPostal}</td>
                  <td className="border-2 p-1 border-sky-200">{user.Region}</td>
                  <td className="border-2 p-1 border-sky-200">{user.comuna}</td>
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
