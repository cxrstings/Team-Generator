const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties when called with the "new" keyword', () => {
      const employee = new Employee('John Doe', 1, 'johndoe@example.com');

      expect(employee.name).toEqual('John Doe');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('johndoe@example.com');
    });
  });

  describe('getName', () => {
    it('should return the employee name', () => {
      const employee = new Employee('John Doe', 1, 'johndoe@example.com');

      expect(employee.getName()).toEqual('John Doe');
    });
  });

  describe('getId', () => {
    it('should return the employee id', () => {
      const employee = new Employee('John Doe', 1, 'johndoe@example.com');

      expect(employee.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the employee email', () => {
      const employee = new Employee('John Doe', 1, 'johndoe@example.com');

      expect(employee.getEmail()).toEqual('johndoe@example.com');
    });
  });

  describe('getRole', () => {
    it('should return "Employee"', () => {
      const employee = new Employee('John Doe', 1, 'johndoe@example.com');

      expect(employee.getRole()).toEqual('Employee');
    });
  });
});