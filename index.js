const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
function init(){
console.log("let's build your Team profile by starting with your team manager")
    teamMenbers();
    startHtml();
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
    ...commonQuestions,
{
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "officeNumber",
    }, 
                
]
const engineerQuestions =[
...commonQuestions,
{
    type: "input",
    message: "What is your Engineer's GitHub username?",
    name: "github",
},


]
const internQuestions=[
    ...commonQuestions,
{
    
    type: "input",
    message: "What is your Intern's school?",
    name: "school",
            
}

]
const decisionQuestion=[
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
    newManager =new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
    employeeArray.push(newManager);
    console.log(employeeArray)
    makeDecision()
})
function makeDecision(){
inquirer.prompt(decisionQuestion).then((response)=>{
console.log(response.employee_type)
if (response.employee_type==="Engineer"){
engineerPrompt()
}
else if(response.employee_type==="Intern"){
    internPrompt()
}
else{
    generateManagerHtml()
    finishHtml()
}
})

     }
function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then((answer)=> {
        console.log (answer)
        let newEngineer;
        newEngineer =new Engineer(answer.name, answer.id, answer.email, answer.github);
        employeeArray.push(newEngineer);
        console.log(employeeArray)
        makeDecision()
    })
   }

   function internPrompt(){
    inquirer.prompt(internQuestions).then((answer)=> {
        console.log (answer)
        let newIntern;
        newIntern =new Intern(answer.name, answer.id, answer.email, answer.school);
        employeeArray.push(newIntern);
        console.log(employeeArray)
        makeDecision()
    })
   }
}
function startHtml(){
    const html = ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                   `
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
        else{
            console.log("succes")
        }
    });
                }
   function generateManagerHtml() {
       const name = Manager.getName();
       const role = Manager.getRole();
       const id = Manager.getId();
       const email = Manager.getEmail();
       const officeNumber = Manager.getOfficeNumber();
       const managerHtml = `<div class="card employee-card">
       <div class="card-header">
           <h2 class="card-title">${ name }</h2>
           <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ role }</h3>
       </div>
       <div class="card-body">
           <ul class="list-group">
               <li class="list-group-item">ID: ${ id }</li>
               <li class="list-group-item">Email: <a href="mailto:${ email }>${ email }</a></li>
               <li class="list-group-item">Office number: ${ officeNumber }</li>
           </ul>
       </div>
   </div>`
   fs.appendFile("./dist/team.html", managerHtml, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("success")
    };
   })}


   function finishHtml(){
    const html1 = 
            ` </div>
            </div>
            </div>
        </body>
        </html>`;

    fs.appendFile("./dist/team.html", html1, function (err) {
        if (err) {
            console.log(err);
        };
    });
  
}
   
               


init()