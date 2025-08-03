/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
for ( i = 1 ; i <=  experience  ; i++){
 startingSalary = startingSalary + startingSalary*5/100
}
 startingSalary=startingSalary.toFixed(2);
 var presentSalary = startingSalary;
console.log(presentSalary)