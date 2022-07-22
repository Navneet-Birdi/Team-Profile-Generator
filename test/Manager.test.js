const Manager = require("../src/employees/Manager");



describe("Manager Test", () => {




  test("getName() will return the name property", () => {

    // Arrange -- prepare the env
    const name = 'XYZ';

    const addManager = new Manager(1, "xyz@xyz.com", name, 123456);

    // act
    const result =addManager.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})