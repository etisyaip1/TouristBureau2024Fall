document.addEventListener("DOMContentLoaded" , ()=> {

    for (c of categories){
    //categorySelect.innerHTML += `<option> ${c}"</option";
    // += append/concatenate(not replace)
    categorySelect.appendChild(new Option (c));
}

categorySelect.addEventListener("change" , ()=>{
    activitySelect.innerHTML = "";
    activitySelect.appendChild(new Option("Select an Activity"));
    for(a of activities){
        if(a.category === categorySelect.value){
            activitySelect.appendChild(new Option(a.name));
        }
    }
});

activitySelect.addEventListener("change" , ()=>{
    detailTable.innerHTML = "";
    for(a of activities){
        if(a.name === activitySelect.value){
            for(key in a){
                detailTable.innerHTML +=`
                <tr><th> ${key} </th><td>${a[key]} </td> </tr>
                `;
            }
        }
    }
})

});