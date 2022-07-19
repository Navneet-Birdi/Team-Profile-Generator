const Employee = require("../src/employees/Employee")


describe("Employee Test", () => {




  test("getName() will return the name property", () => {

    // Arrange -- prepare the env
    const name = 'Nav';

    const dummy = new Employee(1, 'nav@nav.com', name);

    // act
    const result =dummy.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})