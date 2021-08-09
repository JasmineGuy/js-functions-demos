// function greeting(){
//     let message = 'Hello John'
// }

// greeting('')
// console.log(message)


//^^gets a reference error in the console "message is not defined" because message variable is out of scope



let message = 'Hello'

if(message ==='Hello'){
    let message ="Inside of if block"
    console.log(message)
}
console.log(message)

//Block scope example above. Block = anything contained in the curly braces of  an if statment, a while or a for loop, or any set of curly braces other than a function