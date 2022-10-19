// Toggling Orders Popup
const orderNav = document.querySelector(".orderNav");
const closeOrderBtn = document.querySelector(".closeOrderPopUp");
let checkOrderNav = 0;
function toggleOrder(){
    let target = document.querySelector(".ordersContainer");
    if(checkOrderNav === 0){
        target.classList.add("showOrders");
        checkOrderNav ++;
    }else{
        target.classList.remove('showOrders');
        checkOrderNav --;
    }
}
orderNav.addEventListener("click", toggleOrder);
closeOrderBtn.addEventListener("click", toggleOrder);




// **************************************************************************************************************************************************************************************************************************8




