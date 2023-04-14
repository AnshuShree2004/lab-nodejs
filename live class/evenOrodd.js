//check even or odd using bitwise operator
//if last bit is 0 -> even and 1 -> odd
let x = 3
if ((x & 1) == 1) {
    console.log("odd")
} else {
    console.log("even")
}