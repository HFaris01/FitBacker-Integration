const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
  ];
  
  const getUserByEmail = (email) => {
    return users.find(user => user.email === email);
  };
  
  export default getUserByEmail;
  