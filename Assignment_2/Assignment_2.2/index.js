function checkPalindrome() {
    var inputNumber = document.getElementById('inputNumber').value;
    var reversedNumber = inputNumber.split('').reverse().join('');
    if(inputNumber === reversedNumber) {
        document.getElementById('result').innerHTML = "It's a palindrome.";
    } else {
        document.getElementById('result').innerHTML = "It's not a palindrome.";
    }
}
