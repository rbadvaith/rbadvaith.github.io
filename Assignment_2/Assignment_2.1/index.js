function reverseString() {
    var inputString = document.getElementById('inputString').value;
    var reversedString = inputString.split('').reverse().join('');
    document.getElementById('result').innerHTML = reversedString;
}
