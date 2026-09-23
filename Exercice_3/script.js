let labelKeyPress = document.getElementById('lastname')

labelKeyPress.addEventListener('keyup' , pressed)

function pressed (){
    alert(this.value)
}