import React from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
export const App = () => (
  <div className="italic ">
    <h1 className="text-3xl font-bold underline bg bg-cyan-400 text-center text-gray-50 p-5">Registro de Usuarios</h1>
    <Form />
    <Table />
  </div>
);
