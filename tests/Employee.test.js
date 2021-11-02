const Employee = require("../lib/Employee");
describe("Employee", () => {
    it("should create an object a", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("should return the employee name:'Olsen' ", () => {
        const newName = "Olsen";
        const e = new Employee(newName);
        expect(e.name).toBe(newName);
    })
    it("should return the employee id:'20' ", () => {
        const employeeId = 20;
        const e = new Employee("Olsen", employeeId);
        expect(e.id).toBe(employeeId);
    });
    it("should return the employee email:' leo@gmail.com' ", () => {
        const employeeEmail = "leo@gmail.com";
        const e = new Employee("Olsen", 20, employeeEmail);
        expect(e.email).toBe(employeeEmail);
    });
    describe("getName", () => {
        it("should get name via getName()", () => {
            const newName = "Chris";
            const e = new Employee(newName);
            expect(e.getName()).toBe(newName);
        });
    });


    describe("getId", () => {
        it("should get id via getId()", () => {
            const employeeId = 15;
            const e = new Employee("Chris", employeeId);
            expect(e.getId()).toBe(employeeId);
        });
    });

    describe("getEmail", () => {
        it("should get email via getEmail()", () => {
            const employeeEmail = "chris@gmail.com";
            const e = new Employee("Chris", 15, employeeEmail);
            expect(e.getEmail()).toBe(employeeEmail);
        });
    });
    describe("getRole", () => {
        it("getRole() should return 'Employee' ", () => {
            const employeeRole = "Employee";
            const e = new Employee("Chris", 15, "chrisgmail@gmail.com");
            expect(e.getRole()).toBe(employeeRole);
        });
    }); 

})