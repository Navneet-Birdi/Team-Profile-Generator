
const fs = require('fs');
const path = require('path');
const cardTemplatePath = path.join( __dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html');


function createCard(employee){
    //read card.html template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8');

    //replace placeholders(articles) with actual data
    let replaced = cardTemplate.replace('{{name}}', employee.getName())
    
    //replace placeholder id with employee id
    .replace('{{id}}', employee.getId())
    
    //replace placeholder email with employee email
    .replace('{{email}}', employee.getEmail());

//to check for row according to value
//checking for manager
if(employee.getRole() === 'Manager'){
    replaced = replaced.replace('{{attr_key}}', 'Office Number')
      .replace('{{attr_value}}', employee.getOfficeNumber())
  }

  //checking for Engineer
  if (employee.getRole() === 'Engineer') {
    replaced = replaced.replace('{{attr_key}}', 'Github')
      .replace('{{attr_value}}', employee.getGithub())
  }
  
  //checking for Intern
  if (employee.getRole() === 'Intern') {
    replaced = replaced.replace('{{attr_key}}', 'School')
      .replace('{{attr_value}}', employee.getSchool())
  }

  return replaced;

}

function generateHtml(employees){

const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
//to convert each of these employees into card we can use map function
//loop each employee
const cards = employees.map(createCard).join('')

//now joining all cards together into string
//and replace the {{body}} with a card string
return mainTemplate.replace('{{body}}', cards);

}

module.exports = generateHtml;