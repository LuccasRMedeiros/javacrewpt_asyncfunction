async function AsyncSum(num1, num2) {
    let asyncSum = await num1 + num2;
    if(asyncSum > 100) {
        console.log("Error, operations that cause great values are forbidden!");
        return NaN;
    }

    dictRet = {
        name : "Promisse",
        greet : "Hello!",
        sum : asyncSum
    };
    return dictRet;
}