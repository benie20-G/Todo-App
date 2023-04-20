let input=document.querySelector(".entered-list")
let addBtn=document.querySelector(".add-list")
let tasks=document.querySelector(".tasks")
// let div=document.querySelector(".item")

 input.addEventListener("onmouseover",()=>{
if(input.Value.trim() != 0){
    addBtn.setAttribute('class','active')
}
else{
    addBtn.classList.remove('active')
}
})
addBtn.addEventListener('click',()=>{
     if(input.value.t != 0){
        let newItem=document.createElement('div');
        newItem.innerHTML= `
        <hr>
        <p>${input.value}</p>
     <div class="item-btn">
      <button class="complete">complete</button>
      <button class="remove">remove</buttton>
</div>`
newItem.setAttribute("class","taskTodo")
tasks.insertBefore(newItem,tasks.firstChild);
input.value="";
         }else{
            alert('Please enter the task')
         }
})

tasks.addEventListener('click',(e)=>{
     if(e.target.getAttribute('class')== "remove"){
       e.target.parentElement.parentElement.remove()
     }
     if(e.target.getAttribute("class")=="complete"){
        e.target.parentElement.parentElement.setAttribute('class','completed')
        console.log(e.target.parentElement.parentElement)
        }
    })
     
