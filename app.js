const inquirer = require('inquirer');

const employees = [];

//function to extract promise
async function main(){
    const managerRole = 'manager';
    const engineerRole = 'engineer';
    const internRole = 'intern';
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role?',
            name: 'role',
            choices: [
                'managerRole',
                'engineerRole',
                'internRole',
            ]
        //store all the info we got 


//once we stop adding new employee, will ge nerate html based on employees collected
        },
        
         
        
        //questions
        {
            type: 'input',
            message: 'What is the ID of the employee?',
            name: 'id',
        
        },
        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'email',
        
        },
        
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name',
        
        },
        //options when user selects manager
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'office number',
            when: (answers) => answers.role === 'managerRole',
            },
        
            {
                type: 'input',
                message: 'What is the github username?',
                name: 'github',
                when: (answers) => answers.role === 'engineerRole',
                },
                {
                    type: 'input',
                    message: 'What is the school?',
                    name: 'school',
                    when: (answers) => answers.role === 'internRole',
                    },
                    {
                        type: 'confirm',
                        message: 'Would you like to add another employee?',
                        name: 'add another',
                        
                        }
    ]);

//once we got an employee, store it
//check for the role
//for manager role
if (answers.role === 'managerRole'){
    employees.push(new manager(answers.id, answers.email, answers.name, answers.office_number));
}

//for engineer role
if (answers.role === 'engineerRole'){
    employees.push(new engineer(answers.id, answers.email, answers.name, answers.github));
}

//for intern role
if (answers.role === 'internRole'){
    employees.push(new intern(answers.id, answers.email, answers.name, answers.school));
}

console.log(employees);
//create the employee object based on the role


//add to the employee arrayt






if (!answers.add_another){
    //generating html

}else{
    await main();
}
}

main();
//questions to generate a team profile



//to add new employee until its enough
//ID,name email for employee










//for manager office number



//for engineer github



//for intern, school







