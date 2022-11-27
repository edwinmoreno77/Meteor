import React from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
export const App = () => (
  <div className="italic">
    <h1 className="text-3xl shadow-2xl md:text-4xl lg:text-5xl font-bold  bg-cyan-400 text-center m-auto text-gray-50 p-7 mb-28">
      DOCMOVI
    </h1>
    <Form />
    <Table />
  </div>
);
