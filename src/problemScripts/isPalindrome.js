export function isPalindrome(x){
    let reverse = 0;
    let copy = x;

    while (copy > 0){
        const digit = copy % 10;
        reverse = reverse*10 + digit;
        copy = Math.floor(copy/10);

        //console.log(`digit ${digit} reverse ${reverse} copy ${copy}`);
    }

    return reverse === x;
}