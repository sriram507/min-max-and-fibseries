// 2) WAP to print the reverse of a number

// Test Case-1
// input: Enter a number: 872
// output: 278

// Test Case-2
// input: Enter a number: 240
// output: 42

// Test Case-3
// input: Enter a number: -920
// output: -29


num = prompt("Enter a number: ") //
rev="", str=""
if(num[0]=="-"){
for(i=num.length-1;i>=1;i--){
rev=rev+num[i]
}
rev="-"+rev
console.log(Number(rev))
}
else{
for(i=num.length-1;i>=0;i--){
rev=rev+num[i]
}
console.log(Number(rev))
}
