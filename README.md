# 10 Object-Oriented Programming: Team Profile Generator


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## About Profile Generator app
This is command line application, which genertaes profiles for employees by storing their information based on user input. In this app a user will be prompted to enter employee name, ID, email,office number, or github profile based on what you selected like if you select to enter manager's profile then it will ask you manager's name, id, email and office number. And if you select engineer option then user will be prompted by engineer's name,id,email,github profile. So with this employees profile will be generated.

## Prerequisites: Node.js, Inquirer

## Link to video:https://drive.google.com/file/d/1UM-JXMoXpaS34FkpUFfjY2H33k7n3XeR/view

