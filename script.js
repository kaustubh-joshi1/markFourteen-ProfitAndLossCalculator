var stocksInfo = document.querySelectorAll("#stock")
var calcBtn = document.querySelector("#calc-btn")
var output = document.querySelector(".output")

function handleClick(){
    var stockArr = [];
    
    // check if input field is empty
    for(var index = 0; index < stocksInfo.length; index++){
        if(stocksInfo[index].value){
            stockArr[index] = Number(stocksInfo[index].value);
        } else {
            showMessage("Please enter the values in the input field");
            return;
        }
    }
    if(checkValues(stockArr)){
        calculateProfitOrLoss(stockArr)
    } else {
        showMessage("Let us check this quickly for you!")
    }
}

// check for negative values 
function checkValues(stockArr){
    return stockArr.every((val) => val > 0);
}

function calculateProfitOrLoss(stockArr){
    if(stockArr[0] < stockArr[2]){
        var profit = (stockArr[2] - stockArr[0]) * stockArr[1];
        var profitPercentage = profit/stockArr[0] * 100;

        showMessage(`Heyy!! You have made a profit of ${profit.toFixed(2)} and the percentage of profit is ${profitPercentage.toFixed(2)}%`)

    } else if(stockArr[0] > stockArr[2]){
        var loss = (stockArr[0] - stockArr[2]) * stockArr[1];
        var lossPercentage = loss/stockArr[0] * 100;

        showMessage(`You have incurred a loss of ${loss.toFixed(2)} and the percentage of loss of is ${lossPercentage.toFixed(2)}%`)

    } else {
        showMessage("No pain, No gain!)")
    }
}

function showMessage(message){
    output.innerText = message;
}


calcBtn.addEventListener("click", handleClick)