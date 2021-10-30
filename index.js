const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
function init(){
    teamMenbers();
    generateHtml();
}
function teamMenbers(){
inquirer.prompt([{
     type: "input",
     message: "Please enter team menber's name",
     name:"name",
    },
    {
     type:"list",
     message:" Please choose team menber's role",
     name: "role",
     choices:[
         "Manager",
         "Engenieer",
         "Intern"
     ],
      },
    {
        type: "input",
        message:" Menber's id",
        name: "id"
    },
    { 
       type:"input", 
       message: "Menber's email address",
       name: "email",
    }
    
])


}
init()