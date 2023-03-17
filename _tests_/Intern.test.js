const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, email, and school properties', () => {
      const intern = new Intern('John Doe', 123, 'john.doe@example.com', 'University of Florida');

      expect(intern.name).toEqual('John Doe');
      expect(intern.id).toEqual(123);
      expect(intern.email).toEqual('john.doe@example.com');
      expect(intern.school).toEqual('University of Florida');
    });
  });

  describe('getSchool', () => {
    it('should return the intern\'s school', () => {
      const intern = new Intern('John Doe', 123, 'john.doe@example.com', 'University of Florida');

      expect(intern.getSchool()).toEqual('University of Florida');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const intern = new Intern('John Doe', 123, 'john.doe@example.com', 'University of Florida');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
