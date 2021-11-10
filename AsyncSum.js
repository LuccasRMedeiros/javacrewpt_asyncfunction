function PresentResults(res) {
    console.log("My name is: " + res.name);
    console.log(res.greet);
    console.log("The results of the sum were " + res.sum);
    console.log("Thanks!");
}

async function AsyncSum(num1, num2) {
    let asyncSum = await num1 + num2;
    if(asyncSum > 100) {
        console.log("Error, operations that result values greatter than 100 are forbidden!");
        return NaN;
    }

    var dictRet = {
        name : "Vrauu",
        greet : "Hello!",
        sum : asyncSum
    };
    return dictRet;
}

let results;
let receive = AsyncSum(1, 1)
    .then(res => results = PresentResults(res));
console.log("end");