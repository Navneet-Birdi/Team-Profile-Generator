const inquirer = require('inquirer');



//function to extract promise
async function main(){
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role?',
            name: 'role',
            choices: [
                'manager',
                'engineer',
                'intern',
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
            when: (answers) => answers.role === 'manager',
            },
        
            {
                type: 'input',
                message: 'What is the github username?',
                name: 'github',
                when: (answers) => answers.role === 'engineer',
                },
                {
                    type: 'input',
                    message: 'What is the school?',
                    name: 'school',
                    when: (answers) => answers.role === 'intern',
                    },
                    {
                        type: 'confirm',
                        message: 'Would you like to add another employee?',
                        name: 'add another',
                        
                        }
    ]);

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







