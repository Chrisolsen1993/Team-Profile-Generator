const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the engineer github username name:", () => {
  const githubUserName = "chrisolsen";
  const engineer = new Engineer("Chris", 15, "chrisgmail@gmail.com", githubUserName);
  expect(engineer.getGithub()).toBe(githubUserName);
})

it("getRole() should return 'Engineer' ", () => {
    const engineerRole = "Engineer";
    const engineer = new Engineer("Chris", 15, "chrisgmail@gmail.com", "chrisolsen");
    expect(engineer.getRole()).toBe(engineerRole);
  })

});




