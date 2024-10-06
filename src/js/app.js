//1-ci

function containDuplicate(arr) {
    let number = []
    for (let i = 0; i < arr.length; i++) {
        if (number.includes(arr[i])) {
            return true;
        }
        number.push(arr[i])
    }
    return false;
}


//2-ci
let mainnum = 121
if (
    mainnum < 0 || (mainnum % 10 === 0 && mainnum !== 0)) {
    console.log(false);
}
else {
    let x = mainnum;
    let y =0;
    while (x > 0) {
        let restNumb = x % 10; //121:10=1   12:10 2   1:10 1
        y = y * 10 + restNumb //0 vur 10 +1 1    1*10+2 12  12*10+1 121
        x = Math.floor(x / 10) // 121:10 12    12:10 1  

    }
    console.log(mainnum === y)
}


