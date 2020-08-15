/* If we code like this which mean the variable only take 1 number 

const number_0 = document.getElementById("zero");
..
const number_9 = document.getElementById("nine");

and when we want to log it with 
Ex: number_0.addEvenListener("click", function (){
    console.log("0");
})
As you can see this method didn't work
*/

/* Instead we declaire each number an element of number then we JqueryElement
** to get the full number 
 * 
 */

var btns = document.getElementsByTagName("button");
var calc = document.getElementById("result");
            for (var thisBtn of btns) {
                thisBtn.addEventListener('click', function() {
                    if (this.innerHTML == "=")
                    result.value = eval(calc.value);
                    else if (this.innerHTML == "C")
                        result.value = "";
                    else
                    result.value += this.innerHTML;
                })
            }