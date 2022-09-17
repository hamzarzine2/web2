const dateTimeNow=new Date()
let message="This is the best moment to have a look at this website !"

addDateTime(message)
console.log(dateTimeNow.toLocaleDateString());


function  addDateTime (message) {
    alert(dateTimeNow.toLocaleDateString () + " : " +message)
}
