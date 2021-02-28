/*Creates the variables for first name, state, temperature, and message
let name = prompt("Type your first name")
let state = prompt ("Insert your states abbreviation (i.e. NE)")
let temp = prompt("Insert the current temperature in degrees fahrenheit ")
let userMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you wont need a hat, scarf or gloves.","wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]

// these if else statements check to see if the user inputs a temperature in a certain range 
// then the statement will output the message in the console
// in the console.log we use template literal to refrence the persons first name and gets the required message from the array
if ( temp < 32 && state == 'NE')
 console.log(`${name}, ${userMessages[0]}`)
 
 else if (temp>=32 && temp < 50 && state == 'NE')
 
 console.log(`${name}, ${userMessages[1]}`)

else if (temp>=32 && temp < 50 && state == 'FL')

 console.log(`${name}, ${userMessages[2]}`)   
 
else if (temp>=50 && temp < 70 && state == 'FL')
    
 console.log(`${name}, ${userMessages[3]}`)
 */
