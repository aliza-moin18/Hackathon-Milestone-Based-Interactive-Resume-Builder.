var toggledButton = document.getElementById('togglebutton');
var Skill = document.getElementById('skills');
toggledButton.addEventListener('click', function () {
    if (Skill.style.display === 'none') {
        Skill.style.display = 'block';
    }
    else {
        Skill.style.display = 'none';
    }
});
