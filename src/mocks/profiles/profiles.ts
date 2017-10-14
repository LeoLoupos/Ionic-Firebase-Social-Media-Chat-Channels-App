import {Profile} from "../../models/profile/profile.interface";

const userList: Profile[] = [
  {firstName: 'Paul', lastName: 'Halliday',email: 'paul@paul.com', avatar: 'assets/avatar.png',dateOfBirth: new Date},
  {firstName: 'nixk', lastName: 'Halliday',email: 'kixk@paul.com', avatar: 'assets/avatar.png',dateOfBirth: new Date},
  {firstName: 'sara', lastName: 'Halliday',email: 'paul@paul.com', avatar: 'assets/avatar.png',dateOfBirth: new Date},
  {firstName: 'Paul', lastName: 'Halliday',email: 'paul@paul.com', avatar: 'assets/avatar.png',dateOfBirth: new Date}
]

export const USER_LIST = userList;
