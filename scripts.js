let click = 0
let clickNum = 'project-'
const addBtn = document.getElementById('add')
const projectContainer = document.getElementById('projects')
const selectProject = document.getElementsByClassName('project-name')
const userInput = document.getElementById('userInput')

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
    let projectInfoDiv = document.createElement('div')
    document.body.append(projectInfoDiv)

projectContainer.addEventListener('click', (e)=>{

    projectInfoDiv.setAttribute('id','projectInfoDiv')

    projectInfoDiv.textContent = `${e.target.id}`   
    console.log(e.target.id)
    
})
