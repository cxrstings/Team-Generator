const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and github username', () => {
      const engineer = new Engineer('John Doe', 123, 'jdoe@gmail.com', 'jdoe123');

      expect(engineer).toEqual({
        name: 'John Doe',
        id: 123,
        email: 'jdoe@gmail.com',
        github: 'jdoe123'
      });
    });
  });

  describe('getGithub', () => {
    it('should return the engineer\'s github username', () => {
      const engineer = new Engineer('John Doe', 123, 'jdoe@gmail.com', 'jdoe123');

      expect(engineer.getGithub()).toEqual('jdoe123');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer('John Doe', 123, 'jdoe@gmail.com', 'jdoe123');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});