
function palin()
{
var a,no,b,temp=0;

no=Number(document.getElementById("no_input").value);

b=no;
while(no>0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
alert(temp);
}