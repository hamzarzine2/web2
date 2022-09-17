const dateTimeNow=new Date()
let message="tuturu"

console.log(dateTimeNow.toLocaleDateString());

addDateTime(message)

function  addDateTime (message) {
    alert(dateTimeNow.toLocaleDateString () + " : " +message)
}
