import { $host } from '../httpCommon';

// const newCustomer = {
// 	firstName: "Customer",
// 	lastName: "Newone",
// 	login: "Customer",
// 	email: "customer@gmail.com",
// 	password: "1111111",
// 	telephone: "+380630000000",
// 	gender: "male",
// 	avatarUrl: "img/customers/023648.png",
// 	isAdmin: true
// },

// const userData = {
//   loginOrEmail: 'customer@gmail.com',
//   password: '1111111',
// };

export default class UserService {
  static signup = async (newCustomer) => {
    const { data } = await $host.post('/customers', newCustomer);

    localStorage.setItem('token', data.token);

    return data;
  };

  static signin = async (userData) => {
    const { data } = await $host.post('/customers/login', userData);

    localStorage.setItem('token', data.token);

    return data;
  };
}
