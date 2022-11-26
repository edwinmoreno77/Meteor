import { Meteor } from 'meteor/meteor';
import { User } from '../imports/api/users';
import { UsersCollection } from '/imports/api/users';

const insertUser = (user: User) => UsersCollection.insert(user);

Meteor.startup(() => {
  if (UsersCollection.find().count() === 0) {
    [].forEach(insertUser);
  }
});
