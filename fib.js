// 1) WAP to print the nth Fibonacci number based on the user input:

// input: Enter fib position: 7
// output: 8 

num = +prompt("Enter fib position: ") //7
a=0,b=1,i=1
while(i<=num){
if(i==num){
console.log(a)
break
}
c=a+b
a=b
b=c
i++
}
