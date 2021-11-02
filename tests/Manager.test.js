const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return the manager office number", () => {
  const managerOfficeNumber = "123-221-123";
  const manager = new Manager("Chris", 15, "chrisgmail@gmail.com", managerOfficeNumber);
  expect(manager.getOfficeNumber()).toBe(managerOfficeNumber);
})

it("getRole() should return Manager ", () => {
    const managerRole = "Manager";
    const manager = new Manager("Chris", 15, "chrisgmail@gmail.com", "123-221-123");
    expect(manager.getRole()).toBe(managerRole);
  })

});
