var from=document.querySelector("#form");
var ntext=document.querySelector("#nt");
var mcon=document.querySelector(".main-con");

from.addEventListener("submit",(e)=>{
    e.preventDefault();
    var txt=ntext.value;
    if(!txt){
        alert("enter the task");
        return;
    }

    const taskcon=document.createElement("div");
    taskcon.classList.add("list-con");

    const taskinp=document.createElement("input");
    // taskinp.classList.add("linput");
    taskinp.type="text";
    taskinp.value=txt;
    taskinp.setAttribute("readonly","readonly")



   


    let btncon=document.createElement("div");
    btncon.classList.add("btn-con");
    // btncon.style.di

    let edit=document.createElement("button");
    edit.classList.add("editt")
    edit.innerHTML="EDIT";

    let del=document.createElement("button");
    del.classList.add("dell")
    del.innerHTML="Delete";

   
    mcon.appendChild(taskcon);
    taskcon.appendChild(taskinp);
    btncon.appendChild(edit);
    btncon.appendChild(del);
    taskcon.appendChild(btncon);

    edit.addEventListener("click",()=>{
        if(edit.innerHTML=="EDIT"){
            edit.innerHTML="SAVE";
            taskinp.removeAttribute("readonly","readonly");
            taskinp.focus();
        }
        else{
            edit.innerHTML="EDIT";
            taskinp.setAttribute("readonly","readonly")
        }
    })

    del.addEventListener("click",()=>{
        var a=confirm("you want to delete that task");
        console.log(a)
        if(a==true){
            mcon.removeChild(taskcon)
        }
    })
})


