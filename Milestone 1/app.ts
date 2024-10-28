const toggledButton = document.getElementById('togglebutton') as HTMLButtonElement
const Skill = document.getElementById('skills') as HTMLElement

toggledButton.addEventListener('click', ()=> {
    if(Skill.style.display === 'none') {
        Skill.style.display = 'block'
    } else {
        Skill.style.display = 'none'
    }
})
