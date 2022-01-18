document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit",(e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
  })
})
function buildToDo(todo)
{
  const p = document.createElement("p")
  const btn = document.createElement("button")
  btn.addEventListener("click",handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
  addMenu(p)
}
function handleDelete(e)
{
  e.target.parentNode.remove()
}
// function addMenu(e)
// {
//   const menu = document.createElement("select")
//   menu.className = "DropDown"
//   menu.innerHTML = 
//   `<option value="high">High</option>
//   <option value="medium">Medium</option>
//   <option value="low">Low</option>`
//   e.append(menu)
// }
// document.getElementsByClassName(".DropDown").addEventListener("change",() => {
//   const p  = document.querySelector("#tasks").querySelector('p')
//   console.log("pool")
// })