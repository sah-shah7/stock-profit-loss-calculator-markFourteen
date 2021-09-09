let form = document.getElementById("form");

let purchasePrice = document.getElementById("purchasePrice");

let quantity = document.getElementById("quantity");

let currentPrice = document.getElementById("currPrice");

let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.body.style.backgroundColor = "white";

    let difference = parseFloat(currentPrice.value) - parseFloat(purchasePrice.value);
    let out1 = "earned", out2 = "profit",out3="+";

    if (difference < 0) {
        out1 = "lost";
        out2 = "loss";
        out3="-";
        difference = Math.abs(difference);
    }

    let percent = (difference / parseFloat(purchasePrice.value)) * 100;

    difference = difference * parseFloat(quantity.value);

    percent = percent.toFixed(2);
    difference = difference.toFixed(2);

    if (percent >= 50) {
        if (out2 === "profit") {
            document.body.style.backgroundColor = "#f8d664";
            let res = "You " + out1 + " "+ out3 +" "+ percent + "%. Your " + out2 + " is of ₹" + difference;
            result.innerHTML = res;
        }
        else {
            document.body.style.backgroundColor = "#DC143C";
            let res = "You " + out1 + " "+ out3 +" "+ percent + "%. Your " + out2 + " is of ₹" + difference;
            result.innerHTML = res;
        }
    } else {
        document.body.style.backgroundColor = "#FF7D00";
        let res = "You " + out1 + " "+ out3 +" "+ percent + "%. Your " + out2 + " is of ₹" + difference;
        result.innerHTML = res;
    }
})