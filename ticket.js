
function create_element(seatname){
    let ParentDiv = document.getElementById('information');
    let new_element=document.createElement('div');
    
    new_element.classList.add("flex","justify-between","w-60","my-10")
    ParentDiv.appendChild(new_element);

    let seat_information_element=document.createElement("p");
    seat_information_element.innerText=seatname;
    let class_information_element=document.createElement("p");
    class_information_element.innerText="Business class";
    let price_inforamtion_element=document.createElement("p");
    price_inforamtion_element.innerText="550TK"
    new_element.appendChild(seat_information_element);
    new_element.appendChild(class_information_element);
    new_element.appendChild(price_inforamtion_element);
    
}
function count(zero){
    
}

function information(button){
    let check=0;
     let count;
    if(check==0){
      count=0;

    }
    
    if(count<4){
        let seatname=button.textContent;
    console.log(seatname);
    create_element(seatname)
    
    }
    check++;
    count++;
    console.log(count);
    
    
}
