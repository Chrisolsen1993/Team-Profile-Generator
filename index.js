const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
function init(){
console.log("let's build your Team profile by starting with your team manager")
    teamMenbers();
    // generateHtml();
}
let employeeArray=[]
const questions =[

{
    type: "input",
    message: "What is the Team Menber's name?",
    name: "name",
    },
    {
    type: "number",
    message: "The is the Team Menber's employee ID?",
    name: "id",
    },
    {
    type: "input",
    message: "What is the Team Menber's email address?",
    name: "email",
    }
    
]
const commonQuestions =[...questions]
const managerQuestion = [
    commonQuestions,
{
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "officeNumber",
    }, 
         
{
type: "list",
message: "Would you like to add another team member?",
choices: ["Engineer", "Intern", "Finished"],
name: "employee_type",
}        
]
const engineerQuestions =[
commonQuestions,
{
    type: "input",
    message: "What is your Engineer's GitHub username?",
    name: "github",
},
{
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "Finished"],
    name: "employee_type",
}

]
const internQuestions=[
    commonQuestions,
{
    
    type: "input",
    message: "What is your Intern's school?",
    name: "school",
            
},
{
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "Finished"],
    name: "employee_type",
}


]

function teamMenbers(){
inquirer.prompt(managerQuestion).then((answer)=> {
    console.log (answer)
    let newManager;
    newManager =new Manager(name, id, email, officeNumber);
    employeeArray.push(newManager);

})


}
init()