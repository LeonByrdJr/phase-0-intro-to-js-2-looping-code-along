// Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event){
    const thankYou = []
    for(let i = 0; i < names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        
    }
    return thankYou;
}
writeCards(names, "surprise");

function countDown(){
    let number = 10
    while (number >= 0)
        console.log(number--)
}