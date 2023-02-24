 
 //get the element in my html

const inputValue = document.querySelector("#todos input");
const todoform = document.querySelector("#todos");
const myButton = document.querySelector("#myButton");
const myCard = document.querySelector("#cards"); 
const total = document.querySelector("#Total-task");
const remaining = document.querySelector("#Remaining-task");
const completed = document.querySelector("#Completed-task");
const box = document.querySelector(".box");
const cont = document.querySelector(".ul-cont");



//check in the local storage if we have anything like tasks otherwise create and empty array []
let key = JSON.parse(localStorage.getItem("key")) || [];


if (localStorage.getItem("key")) {
    key.filter(e => createtask(e));
    }

    
    


// add an event listener to the form 
todoform.addEventListener("submit" , (e) => {
    e.preventDefault();
     const mainValue = inputValue.value;

     if(mainValue == ''){
        return
     }
   const task  = {
        id: new Date().getTime(),
        inputVal:  mainValue,
        isCompleted: false
    }
key.unshift(task)
    localStorage.setItem("key", JSON.stringify(key));


    createtask(task);
    
    todoform.reset();
    inputValue.focus();
    

})

function createtask(task){
let create = document.createElement("li");
create.setAttribute("id" , task.id);
cont.appendChild(create);
if (task.isCompleted){
    create.classList.add("successfull");
}

const markup = `
<div class = "card" id ="cards"> 
<input type = "checkbox" class = "mycheck" id = "${task.id}" name="checkbox"> <span class="text" id = "task"> ${task.inputVal} </span>
<span id = "closebtn" style = "margin-left: auto"> &times; </span>
</div>
 `

create.innerHTML = markup;

 

}

if(localStorage.getItem("key")){
    total.textContent = key.length;
}

      
myButton.addEventListener("click", (e) => {
    e.preventDefault();
     const mainValue = inputValue.value;

     if(mainValue == ''){
        return
     }
   const task  = {
        id: new Date().getTime(),
        inputVal:  mainValue,
        isCompleted: false
    }
key.unshift(task)
    localStorage.setItem("key", JSON.stringify(key));
    createtask(task);
    total.textContent = key.length;
    
    todoform.reset();
    inputValue.focus();

});



// function callback(item, index) {
//     item.addEventListener("click", (e) =>{
//     tasks = tasks.slice(index) 
//     localStorage.setItem("tasks", JSON.stringify(tasks));   
//     let li = e.target.parentElement.parentElement
//     li.remove();
//     } )
    
//     }
//     const close = document.querySelectorAll("#closebtn");
//       close.forEach(callback);
  
// const close = document.querySelectorAll("#closebtn");
// close.forEach(callback);

// function callback(item,index){
//     item.addEventListener("click", (e)=> {
//         tasks = tasks.slice(index);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         let get = e.target.closest("li");
//         get.remove();
//     })
// }

const close = document.querySelectorAll("#closebtn");
close.forEach(callback)
function callback(item, index){
    item.addEventListener("click" , (e) => {
      
        let get =  e.target.closest("li");
        get.remove();
            key = key.splice(index); 
         localStorage.setItem("key", JSON.stringify(key));
        
         total.textContent = key.length;
    })
}



