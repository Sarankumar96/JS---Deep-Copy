// let firstPerson = {
//     name : 'saran',
//     age : 25,
//     address : {
//         city : 'rajpura',
//         state : 'punjab',
//         country : 'india'
//     }
// } 

// let secondPerson = JSON.parse(JSON.stringify(firstPerson));

// firstPerson.address.city = 'patiala'; 
// console.log(firstPerson); 
// secondPerson.address.city = 'mohali'
// console.log(secondPerson); 

let firstPerson = {
    name : 'saran',
    class : 'bsc',  
    
    address : {
        city : 'rajpura',
        state : 'punjab',
        country : 'india'
    }
} 

let secondPerson= JSON.parse(JSON.stringify(firstPerson)); // Deep copy an object

console.log(firstPerson);
console.log(secondPerson);