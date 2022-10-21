import { spawnSync } from "child_process";

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

 /**
  * Changes the entire document to use comic sans
  */
 function comicSans() {
    document.querySelector("body").style.setProperty("font-family","Comic Sans MS"); 
    document.getElementById("comic").textContent = "Trolled !";
 }

export {hello, turnRed, partyTime, comicSans}
