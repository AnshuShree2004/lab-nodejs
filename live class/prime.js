// check n is prime or not
// first method
let n = 8
let ans = true
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        // not a prime
        ans = false
        break
    }
}
    if(ans == true){
        console.log('yes')
    }
    else{
        console.log('no')
    }

    // second method
    for (let i = 2; i*i <= n; i++) {
        if (n % i == 0) {
            // not a prime
            ans = false
            break
        }
    }
        if(ans == true){
            console.log('yes')
        }
        else{
            console.log('no')
        }   