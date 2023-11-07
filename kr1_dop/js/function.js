// const item = document.getElementsByTagName('p')[1]
// console.log(item.innerHTML)
// item.innerHTML = 'новое значение'
// console.log(item.innerHTML)

const node_for_click = document.getElementById("for_click")

function find_edit(){
    const secondName = document.getElementsByTagName('span')[0]
    console.log(secondName.innerText)
    secondName.innerText = ' Lumbova'

    const firstName = document.getElementsByTagName('span')[1]
    console.log(firstName.innerText)
    firstName.innerText = ' Sofia'

}

node_for_click.addEventListener("click",find_edit)