// let body=document.getElementsByTagName("body")[0];
// console.log(body);

// let form=document.createElement("form");
// form.classList.add("form");
// form.setAttribute("id","form");
// body.appendChild(form);

// let input=document.createElement("input");
// form.appendChild(input);
// input.setAttribute("type","text");
// input.setAttribute("placeholder","Add  What to do");
// input.id="input";
// input.classList.add("todo");
// input.addEventListener("keyup",(e)=>{
//     console.log(e);
//     if(e.target!=undefined){
//       e.target.value=e.target.value.toUpperCase();
//     }
//   })

// let button=document.createElement("button");
// form.appendChild(button);
// button.setAttribute("type","text");
// button.textContent="+"
// button.classList.add("btn");
// let br1=document.createElement("br");
// form.appendChild(br1);
// let display=document.createElement("display");
// display.classList.add("display");
// form.appendChild(display);

// button.addEventListener("click",function(e){
//   e.target.style.backgroudColor="yellow";
// })

let container=document.getElementById("container");
let inputf=document.getElementById("inputf");
let addbut=document.getElementById("addbut")
let display=document.getElementById("display");

inputf.addEventListener("keyup",(e)=>{
  console.log(e);
  if(e.target!=undefined){
    e.target.value=e.target.value.toUpperCase();
  }
})

addbut.addEventListener("click",function(e){
e.target.style.backgroundColor="yellow";
let label=document.createElement("label");
label.classList.add("label");
display.appendChild(label);
label.innerText=inputf.value;
inputf.value="";
display.style.overflow="scroll";
let done=document.createElement("button");
done.classList.add("done");

done.innerHTML="Done";
label.appendChild(done);

let delet=document.createElement("button");
label.appendChild(delet);
delet.innerHTML="Delete";

let br1=document.createElement("br");
br1.classList.add("br1");
display.appendChild(br1);
done.addEventListener("click",function(e){
  e.target.style.backgroundColor="red";
  label.style.textDecoration="line-through";
  label.style.color="blue";
  label.style.backgroundColor="white";
  delet.style.backgroundColor="blue";
  
})

delet.addEventListener("click",function(e){
  delet.innerHTML="Delete";
  if(confirm("Delete ")){
    
    display.removeChild(label);
  }else{

  }
})




})







