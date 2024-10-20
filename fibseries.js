// 3) WAP to print the Fibonacci series based on the user input

// Test Case-1
// input: Enter number: 5
// output: 0 1 1 2 3 5

// Test Case-2
// input: Enter a number: 20
// output: 0 1 1 2 3 5 8 13

num = +prompt("Enter a number: ")
a=0, b=1, nonFib=0
while(nonFib!=num){
for(i=a+1;i<b;i++){
console.log(i)
nonFib++
if(nonFib==num)
break
}
c=a+b
a=b
b=c
}