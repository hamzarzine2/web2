const dateTimeNow=new Date()
let message="This is the best moment to have a look at this website !"

console.log(dateTimeNow.toLocaleDateString());

addDateTime(message)

function  addDateTime (message) {
    alert(dateTimeNow.toLocaleDateString () + " : " +message)
}
