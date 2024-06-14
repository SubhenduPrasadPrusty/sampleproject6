const ullist = document.getElementById("list");

const input = document.getElementById("to");            //=document.getElementById

const button = document.getElementById("but");

function todo(){

    //get input value
    const  input2 = input.value;
    input.value =" ";



    //create a list item
    const list2 = document.createElement("li");         //=document.createElement
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const dltbtn = document.createElement("button");

    checkbox.type = "CheckBox";
    span.textContent = input2;
    dltbtn.textContent = "Delete";



    //add a ul
    list2.appendChild(checkbox);
    list2.appendChild(span);
    list2.appendChild(dltbtn);

    ullist.appendChild(list2);                          //.appendChild 
     //ullist.appendChild = list2;  // Incorrect
     //ullist.appendChild(list2);  // Correct
     

     //remove or delete function
    dltbtn.addEventListener("click" , function () {     //.addEventListener
    ullist.removeChild(list2);                          //.removeChild
    })

    checkbox.addEventListener("change" , function (){    //.addEventListener
    if (checkbox.checked) {
        // add a class
        list2.classList.add("completed");                //.classList.add("completed")
    } else {
        // remove a class
        list2.classList.remove("completed");             //.classList.remove("completed")
    }
    })

    input.focus();
    
}

button.addEventListener("click",todo);                     //.addEventListener
 //but.addEventListener("click", todo);  // Incorrect
 //button.addEventListener("click", todo);  // Correct (const button = document.getElementById("but");)



