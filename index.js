// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(listOfNames,emotion){
    let message = []
    for (let i = 0; i < listOfNames.length; i++) {
        const element = listOfNames[i];
        message[i] = `Thank you, ${element}, for the wonderful ${emotion} gift!`
    }
    return message
}
// console.log(writeCards(names,"surpise"))
function countDown(number){
   while(number > 0 -1) {
       console.log(number)
       number--
   }
}
console.log(countDown(10))