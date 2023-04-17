const fu = function (arr) {
    return arr.filter(element => element.length <= 3)
}

console.log(fu(["hello", "2", "world", "-)"]))
console.log(fu(["1234", "1567", "-2", "computer science"]))
console.log(fu(["Russia", "Denmark", "Kazan"]))