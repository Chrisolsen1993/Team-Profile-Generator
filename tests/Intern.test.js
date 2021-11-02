const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the intern school name:", () => {
  const schoolName = "Georgia Tech";
  const intern = new Intern("Chris", 15, "chrisgmail@gmail.com", schoolName);
  expect(intern.getSchool()).toBe(schoolName);
})

it("getRole() should return 'Engineer' ", () => {
    const internRole = "Intern";
    const intern = new Intern("Chris", 15, "chrisgmail@gmail.com", "Georgia Tech");
    expect(intern.getRole()).toBe(internRole);
  })

});
