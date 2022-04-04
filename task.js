let n=10;
//Even Number
for(let i=0;i<n;i++)
{
    if(i%2==0)
    console.log(i);
}
//Multiplication Table
n=3;
for(let i=1 ; i<=10; i++)
{
     console.log(`${i} * ${n} = ${i*n}`);
}

//Meter to Centimeter
 n=5;
function MtoCm()
{
    console.log(`${n*100} CM`);
}
MtoCm(); // calling a Function

//Sum of Array Value
let sumArr=[1,9,4,5,7,8]
let sum=0;
for(let val of sumArr)
{
  sum=val+sum;
}
console.log(sum);

//reverse a Array
function rev()
{
   for(let i=sumArr.length ;i>=0;i--)
   console.log(sumArr[i]);
}
rev() //reverse function
//Sorting the Array 
for(let i=0;i<sumArr.length;i++)
{
    for(let j=i;j<sumArr.length;j++)
    {
      if(sumArr[i]>sumArr[j])
      {
          let temp=sumArr[i]
          sumArr[i]=sumArr[j]
          sumArr[j]=temp;
      }
    }
}
console.log(sumArr);
//printing a Negative Value
let NegativeArr=[1,-9,4,5,-7,8]
function findNegative()
{
for(let val of NegativeArr)
{
    if(val < 0)
    console.log(val);}
}
findNegative()
//Removing a Space by Replace
let RemoveSpace= 'Hi Hello  I am From Puliangudi';
RemoveSpace = RemoveSpace.replace(/ /g,''); // g is global
console.log(RemoveSpace);
//if Number is Divisible by 10
let UserValue = 56;
if(UserValue%10==0)
{
    console.log(true);
}
else
console.log(false);
var Vowel='aeiou';
var CheckVowel='Hi How are you'
var count=0;
for(let i=0;i<CheckVowel.length;i++)
{
    if(Vowel.includes(CheckVowel[i]))
    count++;
}
console.log(count);

var func=function(a,b=-9)
{
console.log(a,b);
}
func(1,89)