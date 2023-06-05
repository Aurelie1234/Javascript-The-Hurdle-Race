function hurdleRace(k, height) {
    // Write your code here


let max = Math.max(...height);
let sum = 0;


if ( k < max ) {
    sum += max - k
    return sum
}
else {
    return 0
}
}
