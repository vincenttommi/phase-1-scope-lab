// Write your solution in this file!

var  customerName = "bob";
// /  Declare customerName in global scope and set its value to "bob"

function upperCaseCustomerName(){
// //  Modifies the customerName variable by setting it to its uppercase version
    customerName = customerName.toUpperCase();


}
function setBestCustomer(){
 
    //Set the value of bestCustomer to be the value of customerName
     bestCustomer = 'not bob';
}
function overwriteBestCustomer(){

 bestCustomer = "maybe bob";



}


function changeLeastFavoriteCustomer() {


    //Tries to reassign the value of leastFavoriteCustomer, but fails because it is declared with const


    const leastFavoriteCustomer = "original  least customer";

    leastFavoriteCustomer = "new least favorite customer";


}