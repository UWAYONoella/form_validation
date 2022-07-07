let body=document.getElementsByTagName("body")[0];
console.log(body);

let form=document.createElement("form");
form.classList.add("form");
form.setAttribute("id","form");
body.appendChild(form);

let input=document.createElement("input");
form.appendChild(input);
input.setAttribute("type","text");
input.setAttribute("placeholder","Add  What to do");
input.id="input";
input.classList.add("todo");
input.addEventListener("keyup",(e)=>{
    console.log(e);
    if(e.target!=undefined){
      e.target.value=e.target.value.toUpperCase();
    }
  })

let button=document.createElement("button");
form.appendChild(button);
button.setAttribute("type","text");
button.textContent="+"
button.classList.add("btn");
let br1=document.createElement("br");
form.appendChild(br1);
let br2=document.createElement("br");
form.appendChild(br2);

button.addEventListener("click",function(e){
e.preventDefault();
let info=document.createElement("info");
info.classList.add("down");
form.appendChild(info);
e.target.style.backgroundColor="yellow";
   info.textContent=text.value;
   text.value="";
   info.style.backgroundColor="rgb(135,144,144";
   let br3=document.createElement("br");
   form.appendChild(br3);
        let done=document.createElement("button");
         done.setAttribute("type","submit");
        done.classList.add("done");
        info.appendChild(done);
        done.textContent="Done";
        done.style.color="green";

        let deleto=document.createElement("button");
        deleto.setAttribute("type","submit");
        deleto.classList.add("deleto");
        info.appendChild(done);
        deleto.textContent="deleto";
        deleto.style.color="red";
        done.addEventListener("click",function(e){
        
            info.style.textDecoration="line-through";
            e.target.style.backgroundColor="blue";
        })
    
        deleto.addEventListener("click",function(e){
            e.target.style.backgroundColor="blue";
           if(confirm("Do you want to delete this"+paragraph.innerText+"???")){
            form.removeChild(info);
           }
            

        
        })

    


    })








