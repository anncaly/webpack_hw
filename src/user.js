import './user.scss';

export default class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello, ${this.firstName} ${this.lastName}`
  }
} 
