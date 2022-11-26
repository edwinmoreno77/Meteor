import React from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
export const App = () => (
  <div className="m-5 p-5">
    <h1 className="text-center mt-5">Registro de Usuarios</h1>
    <Form />
    <Table />
  </div>
);
