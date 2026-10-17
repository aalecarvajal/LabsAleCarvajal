const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('identify new user is not previously registered in UserController then add it', () => {
    let user = new User(5678, "Ricardo", "ricardo@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);               
});

test('remove non existing user from userController', () => {    
    let user = new User(9101, "Mario", "mario@generation.org");
    let numberUsers = userController.getUsers().length
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
    expect(userController.getUsers()).toHaveLength(numberUsers);
    console.log(numberUsers)
});