let body=document.getElementsByTagName("body")[0];
console.log(body);

let form=document.createElement("form");
form.classList.add("form");
form.setAttribute("id","form");
body.appendChild(form);

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
form.appendChild(input);
input.setAttribute("placeholder","Add  What to do");

let button=document.createElement("button");
button.setAttribute("id","button");
button.setAttribute("type","text");
button.textContent="+"
form.appendChild(button);

function Myinfo(input){
this.input=input;
}
button.addEventListener("click",function(e){
e.preventDefault();
let info=new Myinfo(input.value);
for(let id in info){
    input.innerHTML =input.value;
    input.value="";

    button.addEventListener("click",function(e){
        e.preventDefault();
        let displaz=document.createElement("displaz");
        displaz.classList.add("displaz");
        displaz.textContent=input.value;
        form.appendChild(displaz);
        input.value="";
        displaz.style.backgroundColor="grey";
        let br1=document.createElement("br");
        form.appendChild(br1);
        let done=document.createElement("button");
        
        
        done.setAttribute("type","submit");
        done.classList.add("done");
        displaz.appendChild(done);
        done.textContent="Done";
        done.style.color="green";

        let deleto=document.createElement("button");
        deleto.setAttribute("type","submit");
        deleto.classList.add("deleto");
        displaz.appendChild(done);
        deleto.textContent="deleto";
        deleto.style.color="red";
        done.addEventListener("click",function(e){
        
            displaz.style.textDecoration="line-through";


            
        })
    
        deleto.addEventListener("click",function(e){
           if(confirm("Do you want to delete this course ???")){
            displaz.removeChild(deleto);
           }
            

        
        })

    


    })
}
})

var x=5;
var y=10;
document.getElementById("demo").innerHTML=x+y;









