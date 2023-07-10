

const input = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output-container");


btn.addEventListener("click", function(){
    
    let task = document.createElement("ul");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${input.value}`;
    task.appendChild(li);

    const chkBtn = document.createElement("i");
    chkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    task.appendChild(chkBtn);
    chkBtn.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
        li.style.textDecorationThickness = "3px";
    });
    
    let delBtn = document.createElement("i");
    delBtn.innerHTML = `</i><i class="fa-solid fa-trash"></i>`;
    task.appendChild(delBtn);
    delBtn.addEventListener("click", function(){
        task.style.display = "none";
    });
    

    if(input.value === ""){
        alert("Please enter a valid task");
    }else{
        output.appendChild(task);
    }
     input.value = "";
});



