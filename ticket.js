let count=0;
let a=[];
let totalPrice1=0;
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
function totalPrice(ticket){
     totalPrice1=ticket*550;
    const cost=document.getElementById("total-cost");
    cost.innerText=totalPrice1;
    return totalPrice1;
}



function information(button){
    
    
     
    
    if((count<4)&&(!a.includes(button.textContent))){
        let seatname=button.textContent;
        button.classList.add("b");
        button.classList.remove("bg-slate-200");
        a.push(seatname);
    console.log(seatname);
    create_element(seatname)
    count++
    }
    c=totalPrice(count);
   return c;

}
function discount1(){
    let couponInput=document.getElementById("coupon");
    const c=couponInput.value;
    let finalCost;
    const i=information(this);
    if(c==="news15")
    {
     finalCost=i-(i*15)/100;
    }
    else if(c==="couple20")
    {
     finalCost=i-(i*20)/100
    }
    else{
     finalCost=i;
    }
    finalCostElement=document.getElementById("final-cost");
    finalCostElement.innerText=finalCost;
}
function hide(){
    const main=document.getElementById("main");
    main.classList.add("hidden");
    const header=document.getElementById("header");
    header.classList.add("hidden");
}
