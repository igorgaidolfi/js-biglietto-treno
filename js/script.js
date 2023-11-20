const price_distance = 0.21
let ticket
let age = prompt('Inserisci la tua eta\'')
let distance = prompt('Inserisci la distanza del tuo viaggio in km')
ticket = distance * price_distance
if (age<18) {
    ticket -= ticket * 0.2
} else if(age>=65){
    ticket -= ticket * 0.4
}
ticketRounded = ticket.toFixed(2)
console.log(ticketRounded)

