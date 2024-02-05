let word = "testing";

function reverseStr(str: string) {
    let reverse = "";
    for (let idx = str.length - 1; idx >= 0; idx--) {
        reverse += str[idx];
    }
    return reverse;
}

console.log("reverseStr", reverseStr(word));
