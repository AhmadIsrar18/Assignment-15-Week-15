
var salaries = [10000, 20000, 30000, 40000] // sums to 100000
var totalSalary = 0;
for (var i = 0; i < salaries.length; i++) {
totalSalary += salaries[i] }
document.getElementById("demo").innerHTML = totalSalary;