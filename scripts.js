let click = 0
let clickNum = 'project-'
const addBtn = document.getElementById('add')
const projectContainer = document.getElementById('projects')
const selectProject = document.getElementsByClassName('project-name')
const userInput = document.getElementById('userInput')
const projectNames = document.querySelectorAll('id[id^=project-]')

addBtn.addEventListener('click', ()=>{
 
    if(userInput.value !== ""){
    click++
    let nameDiv = document.createElement('div')
    let projectName = document.createElement('p')
    projectName.setAttribute('id',`${clickNum+click}`)
    projectName.setAttribute('class', 'project-name')
    projectName.textContent = `${userInput.value}`
    projectContainer.append(nameDiv)
    nameDiv.append(projectName)
    userInput.value = ''
    console.log(projectName)}
})

