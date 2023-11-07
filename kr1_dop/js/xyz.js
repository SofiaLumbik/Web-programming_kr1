function verify() {
    console.log("x, y, z")
    let x = parseInt(elementA.value);
    let y = parseInt(elementB.value);
    let z = parseInt(elementC.value);
    console.log(x, y, z)

    let high= x
    if (y > high) {
        high = y};
    if (z > high) {
        high = z};
    if (high == z) {
        //z = Math.round( Math.pow(x * x + y * y,0.5))
        console.log(z * z, x * x + y * y)
        s1 = x * x + y * y
        summa1 = Math.pow(s1,0.5)
        console.log(s1, z, summa1)
        if (z ==  Math.pow(x * x + y * y,0.5)) {
            result = "Прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = true;
        } else {
            result = "Не прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = false;

        }
    }

    let high1 = y
    if (z > high1) {
        high1 = z};
    if (x > high1) {
        high1 = x};
    if (high1 == x) {
        console.log(x * x, y * y + z * z)
         s2 = y * y + z * z
        summa2 = Math.pow(s2,0.5)
        console.log(s2, x, summa2)
        if (x == Math.pow(y * y + z * z,0.5)) {
            result = "Прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = true;
        } else {
            result = "Не прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = false;

        }
    }

    let high2 = z
    if (x > high2) {
        high2 = x};
    if (y > high2) {
        high2 = y};
    if (high2 == y) {
        console.log(y * y, x * x + z * z)
        s3 = x * x + z * z
        summa3 = Math.pow(s3,0.5)
        console.log(s3, y, summa3)
        if (y = Math.pow(x * x + z * z,0.5)) {
            result = "Прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = true;
        } else {
            result = "Не прямоугольный"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = false;

        }
    }


    console.log(result)
    document.getElementById('result').innerHTML = result
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}


let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("x");
elementA.addEventListener('input', verify)

const elementB = document.getElementById("y");
elementB.addEventListener('keyup', verify)

const elementC = document.getElementById("z");
elementC.addEventListener('keyup', verify)

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)

