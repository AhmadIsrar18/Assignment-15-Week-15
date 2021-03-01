
 function findOddEven(){
    //get the input value
    var num = document.getElementById('num').value;

    //if the remainder value is 0 then it is an even number
    //we are using % modulus operator to get the remainder value
    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is an Even number';
    }else{
        document.getElementById('result').innerHTML = num + ' is an Odd number';
    }
}