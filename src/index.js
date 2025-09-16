function integrateRightSum(left, right, func, pointNum) {
    const dx = (right - left) / pointNum
    let sum = 0.0
    for (let i = 1; i < pointNum + 1; i++) {
        sum += func(left + dx * i)
    }
    return sum * dx
}

function getInput(messageStr) {
    let input = prompt(messageStr)
    let val
    while (true) {
        val = parseFloat(input)
        if (!isNaN(val)) {
            break
        }
        else {
            input = prompt("The input was incorrect. Please try again.")
        }
    }
    return val
}

function main() {
    alert("Let's integrate!")
    let func = x => x * x - x + 1
    let left = getInput("Enter left limit:")
    let right = getInput("Enter right limit:")
    if (left > right) {
        [left, right] = [right, left]
    }
    let pointNum = getInput("Enter number of points for integration:")
    if (pointNum <= 0) {
        pointNum = 1000
        alert("Entered incorrect value, 1000 will be used instead.")
    }
    alert("Result: " + integrateRightSum(left, right, func, pointNum))
}

main()