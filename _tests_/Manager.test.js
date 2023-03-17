const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email and officeNumber if provided valid arguments', () => {
      const manager = new Manager('Alice', 123, 'alice@test.com', 456);

      expect(manager.name).toEqual('Alice');
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual('alice@test.com');
      expect(manager.officeNumber).toEqual(456);
    });
  });

  describe('getOfficeNumber', () => {
    it('should return the office number of the manager', () => {
      const manager = new Manager('Alice', 123, 'alice@test.com', 456);
      const officeNumber = manager.getOfficeNumber();

      expect(officeNumber).toEqual(456);
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      const manager = new Manager('Alice', 123, 'alice@test.com', 456);
      const role = manager.getRole();

      expect(role).toEqual('Manager');
    });
  });
});