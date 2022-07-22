const Intern = require("../src/employees/Intern")
describe("Intern Test", () => {
test("getSchool() will return the school name property", () => {

    // Arrange -- prepare the env
    const name = 'XYZ';

    const addIntern = new Intern(1, "xyz@xyz.com", name, " abc-school");

    // act
    const result =addIntern.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})