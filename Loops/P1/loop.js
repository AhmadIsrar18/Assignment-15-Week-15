
var num = window.prompt("Enter the number:","");
var n = parseInt(num);
result = sumnaturalno(n);
window.alert("The sum of " + n + "natural number is" + result);
function sumnaturalno(n)
{
    var i;
    var sum = 0;
    for(i = 1;i <= n; i++){
        sum = sum + i;}
    return (sum);
}