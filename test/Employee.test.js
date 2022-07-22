const Employee = require("../src/employees/Employee")


describe("Employee Test", () => {




  test("getName() will return the name property", () => {

    // Arrange -- prepare the env
    const name = 'Nav';

    const moreEmployee = new Employee(1, 'nav@nav.com', name);

    // act
    const result =moreEmployee.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})