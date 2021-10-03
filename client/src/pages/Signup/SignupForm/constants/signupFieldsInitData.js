export const signupFormFieldsData = [
  {
    name: 'firstName',
    label: 'Имя',
  },
  {
    name: 'lastName',
    label: 'Фамилия',
  },
  {
    name: 'username',
    label: 'Логин',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    helperText: 'ivan@gmail.com',
  },
  {
    name: 'phoneNumber',
    label: 'Номер телефона',
    helperText: '+38 (0XX) XXX XX XX',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    helperText: 'Должен содержать 8 символов, заглавную букву и цифру',
  },
  {
    name: 'repeatPassword',
    label: 'Повторите пароль',
    type: 'password',
  },
];
