const loginData = [
    { username: 'standard_user', password: 'secret_sauce', shouldPass: true },
    { username: 'locked_out_user', password: 'secret_sauce', shouldPass: false },
    { username: 'problem_user', password: 'secret_sauce', shouldPass: true },
    { username: 'invalid_user', password: 'wrong_password', shouldPass: false }
  ];
  
  module.exports = { loginData };