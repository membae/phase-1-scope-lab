var customerName="bob";
var bestCustomer=undefined;
const leastFavoriteCustomer="mem";

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
    return customerName;
}
function setBestCustomer(){
    bestCustomer="not bob";
}
function overwriteBestCustomer(){
    bestCustomer="maybe bob"
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="phil"
}