
function generateExercise() {

    let c = 0;
    let exArray = [];

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            for (let k = 1; k < 9; k++) {
                if (i === j || i === k || j === k) {
                    continue;
                }
                if (i + j - k > 0 && i + j - k < 10) {
                    exArray.push({
                        display: `${i} + ${j} - ${k}`,
                        result: i + j - k
                    });
                }
                if (i - j + k > 0 && i - j + k < 10) {
                    exArray.push({
                        display: `${i} - ${j} + ${k}`,
                        result: i - j + k
                    });
                }
            }    
        }    
    }    

    return exArray;

}

exArray = generateExercise();
let len = exArray.length;
console.log(len);
for (let i = 0; i < 10; i++) {
    let r = Math.round(Math.random() * len);
    console.log(exArray[r]);
}