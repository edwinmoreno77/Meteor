import { Mongo } from 'meteor/mongo';

export interface User {
  _id?: string;
  validName?: boolean | void;
  name: string;
  lastNameM: string;
  lastNameP: string;
  rut: string;
  Region: string;
  comuna: string;
  codigoPostal: string;
  createdAt: Date;
}

export const UsersCollection = new Mongo.Collection<User>('User');
