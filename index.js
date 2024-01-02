let btn=document.querySelector("button");
let inp=document.querySelector("input");
let div=document.querySelector(".text");
function Add(){
    if(inp.value=="")
    {
        alert("please fill your task ");
    }
    else{
        let cont=document.createElement("div");
        let newul=document.createElement("ul");
        newul.innerHTML=`${inp.value}`;
        let del = document.createElement("button");
        del.innerText ="Delete";
        newul.style.display="inline-block";
        div.appendChild(cont);
        cont.appendChild(newul);
        cont.appendChild(del);
        newul.style.width="250px";
        newul.style.border="1px solid green";
        newul.style.padding="2px";
        newul.style.textAlign="left";
        del.style.marginLeft="5px";
        inp.value="";
       del.onclick = function() {
        cont.remove(); // Remove the div containing both the task and delete button
    };


    }
}