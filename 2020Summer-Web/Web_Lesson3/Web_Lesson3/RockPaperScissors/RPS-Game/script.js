// var equation = document.getElementById("equation");
// var number = document.getElementById("number");
var button = document.getElementsByClassName("button");
var userScore = 0;
var computerScore = 0;
// var elementsArray = [];

// clear();
//
// function clear() {
//     equation.innerHTML = "";
//     number.innerHTML = "";
//     elementsArray = [];
// }
//
// function clearNumber() {
//     number.innerHTML = "";
// };
//
// function equationAdd(a, b) {
//     elementsArray.push(a);
//     elementsArray.push(b);
//     equation.innerHTML += a;
//     equation.innerHTML += b;
// }
//
// function multiply(a, b) {
//     var c = parseInt(elementsArray[a]) * parseInt(elementsArray[b]);
//     elementsArray[a] = c.toString();
//     elementsArray.splice(a + 1, 2);
// }
//
// function divide(a, b) {
//     var c = parseInt(elementsArray[a]) / parseInt(elementsArray[b]);
//     elementsArray[a] = c.toString();
//     elementsArray.splice(a + 1, 2);
// }
//
// function modulo(a, b) {
//     var c = parseInt(elementsArray[a]) % parseInt(elementsArray[b]);
//     elementsArray[a] = c.toString();
//     elementsArray.splice(a + 1, 2);
// }
//
// function add(a, b) {
//     var c = parseInt(elementsArray[a]) + parseInt(elementsArray[b]);
//     elementsArray[a] = c.toString();
//     elementsArray.splice(a + 1, 2);
// }
//
// function substract(a, b) {
//     var c = parseInt(elementsArray[a]) - parseInt(elementsArray[b]);
//     elementsArray[a] = c.toString();
//     elementsArray.splice(a + 1, 2);
// }
//
//
function playGame(user) {
    var computer = Math.floor((Math.random() * 3));
    alert("computer = " + computer)

    if (user = computer) {
    //    Draw
        alert("Draw")
    } else if (user > computer || (user = 2 || computer = 0)) {
    //    user wins
        alert("User Wins")
    } else {
    //    computer wins
        alert("Computer Wins")
    }
 }
};

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        switch (this.innerHTML) {
            case "0":
            {
                playGame(0);
                break;
            }
            case "1":
            {
                playGame(1);
                break;
            }

            case "2":
            {
                playGame(2);
                break;
            }
            // case "/":
            // {
            //     equationAdd(number.innerHTML, "/");
            //     clearNumber();
            //     break;
            // }
            //
            // case "%":
            // {
            //     equationAdd(number.innerHTML, "%");
            //     clearNumber();
            //     break;
            // }
            // case "Clear":
            // {
            //     clear();
            //     break;
            //
            // }
            //
            // case "=":
            // {
            //     equationAdd(number.innerHTML, "=");
            //     elementsArray.pop();
            //     calculate();
            //     number.innerHTML = elementsArray[0];
            //     equation.innerHTML = "";
            //     elementsArray.pop();
            //     break;
            // }
            //
            default:
            // {
            //     number.innerHTML += this.innerHTML;
                break;
            // };
            //
        };
    });
}
