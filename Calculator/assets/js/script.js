window.onload = function () {
    let elements = document.getElementsByTagName("li");
    let screen = document.querySelectorAll(' p')[0];
    let clear = document.getElementsByClassName('clear')[0];

    for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].innerHTML === '=') {
            elements[i].addEventListener("click", calculate(i));
        } else {
            elements[i].addEventListener("click", addtocurrentvalue(i));
        }
    }




    function addtocurrentvalue(i) {
        return function () {
            if (elements[i].innerHTML === "÷") {
                screen.innerHTML += "/ ";
            } else if (elements[i].innerHTML === "x") {
                screen.innerHTML += "*";
            } else {
                screen.innerHTML += elements[i].innerHTML;
            }
        };
    }



    clear.onclick = function () {
        screen.innerHTML = '';
    };

    function calculate(i) {
        return function () {
            screen.innerHTML = eval(screen.innerHTML);
        };
    }
};