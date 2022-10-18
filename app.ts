/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World";
};

/**
 * turns demo red
 */
 function turnRed() {
    if(document != null){
        let c = document.getElementById("demo").style.color;
        if(c === 'red'){
            document.getElementById("demo").style.color = "black";
        }else{
            document.getElementById("demo").style.color = "red";
        }
    }    
}

/**
 * changes the party square to a random color
 */
 function partyTime() {
    //0-8
    let colors = ["red","blue","green","purple","orange","yellow","teal","pink","magenta","lightblue"];
    let colorId = Math.floor(Math.random() * 10);
    document.getElementById("partySquare").style.setProperty("background-color",colors[colorId]);
 }

export {hello, turnRed, partyTime}
