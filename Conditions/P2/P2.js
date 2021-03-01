

function maxNum(num1, num2, num3){
    var max = 0;
    if(num1 > num2){
        if(num1 > num3){
            num1 = max;
        }
        else{
            num3 = max;
        }
    }
    else{
        if(num2 > num3){
            num2 = max;
        }
    }
return max;
}

for(i=0;i<3;i++){
    parseInt(prompt("Enter a number"));
}
document.write(maxNum());