var stocksInfo = document.querySelectorAll("#stock")
var calcBtn = document.querySelector("#calc-btn")
var output = document.querySelector(".output")

function handleClick(){
    var stockArr = [];
    for(var index = 0; index < stocksInfo.length; index++){
        if(stocksInfo[index].value){
            stockArr[index] = Number(stocksInfo[index].value);
        } else {
            showMessage("If you have'nt invested anything, why are you here?");
            return;
        }
    }
    if(checkValues(stockArr)){
        calculateProfitOrLoss(stockArr)
    } else {
        showMessage("Don't play around, this is *YOUR* investment we are checking!")
    }
}

function checkValues(stockArr){
    return stockArr.every((val) => val > 0);
}

function calculateProfitOrLoss(stockArr){
    if(stockArr[0] < stockArr[2]){
        var profit = (stockArr[2] - stockArr[0]) * stockArr[1];
        var profitPercentage = profit/stockArr[0] * 100;

        showMessage(`Congrats!! You made a profit of Rs. ${profit.toFixed(2)} and an overall profit of ${profitPercentage.toFixed(2)}%`)
        document.body.style.backgroundColor = "rgba(0, 150, 0, 0.801)"

    } else if(stockArr[0] > stockArr[2]){
        var loss = (stockArr[0] - stockArr[2]) * stockArr[1];
        var lossPercentage = loss/stockArr[0] * 100;

        showMessage(`Oh no no!! You made a loss of Rs. ${loss.toFixed(2)} and an overall loss of ${lossPercentage.toFixed(2)}%`)

        document.body.style.backgroundColor = "rgba(255, 0, 0, 0.76)"
    } else {
        showMessage("No risk, No pleasure :)")
        document.body.style.backgroundColor = "rgba(0, 183, 255, 0.5)"

    }
}

function showMessage(message){
    output.innerText = message;
}


calcBtn.addEventListener("click", handleClick)