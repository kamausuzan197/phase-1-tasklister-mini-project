//arrow function
 
//as user to input a function .
//should be able to click some form of submit button
//....Haha ..i was looking for a submit button and i noted its in the create 
// new todo-list

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault()
    handleToDo(e.target["new-task-description"].value)
    e.target.reset() //resets the form
  })
});
const priority = {high:'red', medium:'yellow', low:'green'}
const handleToDo = (todo) => {
const li = document.createElement('li')
const btn = document.createElement('button')
btn.textContent = 'X'
btn.addEventListener('click', handleDelete)
li.textContent = todo
li.append(btn,priorityEl())
document.querySelector('#tasks').append(li)
}
const handleDelete = (e) => {
e.target.parentNode.remove()
}

const priorityEl = () =>{
  const select = document.createElement('select')
  select.addEventListener('change',(e) => {
    sortList()
    let prEl = select.value
    if (prEl === 'high'){
      e.target.parentNode.id = 0
      e.target.parentNode.style.color=priority.high
    } else if (prEl === 'medium') {
      e.target.parentNode.id = 1
      e.target.parentNode.style.color=priority.medium
    } else {
      e.target.parentNode.id = 2
      e.target.parentNode.style.color=priority.low
    }
  })
  for (x in priority){
    let option = document.createElement('option')
    option.id='priority'
    option.textContent = x
    select.appendChild(option)
  }
  return select
}

const sortList = () => {
  const list = document.querySelectorAll('li')
  const sortedList = [...list]
  const newList = sortedList.map((x)=> {
    return ({id:x.id, value:x})
  })
  newList.sort((a,b) => {
    return a.id - b.id
  })
  //Create an empty element node
// without an ID, any attributes, or any content
  let liArr = []
  for (x in newList) {
    liArr.push(newList[x].value)
    // console.log(sp1)
    // const sp2 = document.querySelector('li')
    // const parentLi = sp2.parentNode
    // parentLi.replaceChild(sp1,sp2)
    // console.log(sp2)
  }
  newList.forEach(x=>document.querySelector('#tasks').appendChild(x.value))

}

