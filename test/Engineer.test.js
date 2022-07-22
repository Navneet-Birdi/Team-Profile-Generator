const Engineer = require("../src/employees/Engineer")


describe("Engineer Test", () => {




  test("getName() will return the name property", () => {

    // Arrange -- prepare the env
    const name = 'ABC';

    const addEngineer = new Engineer(1, 'nav@nav.com', name, 'github.com');

    // act
    const result =addEngineer.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})