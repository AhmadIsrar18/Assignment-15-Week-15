
function fab(){
    var A = 0;
    var B = 1;
    var C;
    var N = document.getElementById("number").value;
    document.write(A+"<br />");
    document.write(B+"<br />");
    for(var i=3; i <= N;i++)
    {
    C = A + B;
    A = B;
    B = C;
    document.write(C+"<br />");
    }
    }