let addbtn=document.getElementById("addbtn")
let textwork=document.getElementById("textwork")
//let textlist=document.getElementsByClassName("textlist")
let add=document.getElementById("adding");
let divlist=document.getElementsByClassName("divlist");
let textlistii=document.getElementById("textlistii");
let take=JSON.parse(localStorage.getItem('todoList'))||[];
// let ls=localStorage.getItem('todo');
// let todo=ls ? JSON.parse(ls) : [];

function display() {   
  for(const item of take){
    let li=document.createElement("li")
      li.innerHTML=`
                    ${item}
                    <i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-sharp fa-solid fa-xmark cross"></i>
                    `;
      li.setAttribute("class","textlist");

      textlistii.appendChild(li);
      li.lastElementChild.addEventListener("click",function(){
        const index = take.indexOf(li.innerText) 
        take.splice(index,1)
        console.log(take);
        li.remove();
        setCrudData(take)
        textwork.value="";
        })
  }
}

display();

function addtask(item){
    if(item==""){
      alert("Enter anything!")
      return;
    }
    take.push(item);
    setCrudData(take);
    
    let li=document.createElement("li")
      li.innerHTML=`
                    ${item}
                    <i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-sharp fa-solid fa-xmark cross"></i>
                    `;
      li.setAttribute("class","textlist");

      textlistii.appendChild(li);
      li.lastElementChild.addEventListener("click",function(){
          const index = take.indexOf(li.innerText) 
          take.splice(index,1)
          console.log(take);
          li.remove();
          setCrudData(take)
          textwork.value="";
          })
}
    
addbtn.addEventListener('click',()=>{
  
  addtask(textwork.value);
  textwork.value="";
})

function setCrudData(arr){
	localStorage.setItem('todoList',JSON.stringify(arr));
}