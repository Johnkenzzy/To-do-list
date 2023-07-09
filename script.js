

const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const outputCon = document.querySelector(".output-container");


btn.addEventListener("click", function(){
    let ul = document.createElement("ul");
    outputCon.appendChild(ul)

    let li = document.createElement("li");
    li.innerText = `${input.value}`;
    ul.appendChild(li);

    if (input.value === ""){
        alert("Please enter a valid task");
    }else {
        ul.appendChild(li);
    }

});