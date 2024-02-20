function create_element(){
    let ParentDiv=document.getElementById('information');
    let new_element=document.createElement('div');
    new_element.id='newDiv';
    new_element.classList.add("flex","justify-between","w-60","my-10")
    ParentDiv.appendChild(new_element);
    let parentInfonmation=document.getElementById('newDiv');
}
function information(){
    let information=document.getElementsByClassName('a');
    let seatname=information.innerText();
    create_element(seatname);
}
