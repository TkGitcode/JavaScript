
// --> js Code <-- //
/*JS is Case Sensitive
Dynamic Type Language */

/**
 * Type of Variables in JS *
   * var - Old Update
   * let - New Update(can edit or Update) //Best practice to use (let)
   * const - is Fixed Value
 */
var message="Hi Hello"; 
var myname="Kumar"
let value; //Default value of let is undefined

        alert("I am "+ myname +","+ message);
        alert(09+999);
        console.log(value); //To print in Console

        let vla1=23,val2=56; 
        console.log(vla1+val2); 
        const c="Im Const";
        console.log(c);
        // c="I am Updated Const"; //Const value cannot be Edit or modified

        /* Primitive Types - String,Integer/Number,Boolean,Undefied,null*/ 
         /* Refrence Types - Object,Array,Function*/

         let isPass=true; //Boolean
         let age=25; //Integer
         let firstname="Tk"; //String
         let lastname; //undefined
         let logincount=null; //null
         let subobject;
         let sub1,sub2;
                          /*Object( {} )*/
         let profile = {isPass: false,age : 78,firstname:"kumar",
         subobject:{ 
             sub1:"I am Sub 1",sub2:"I am Sub 2"
         }
        }
         /*Printing a Whole Object value*/
         console.log(profile)
         /* changing a value by . notaion*/
         profile.isPass=true;
         console.log(profile.isPass);
         /* printing, using a Bracket Notation*/
         console.log(profile['firstname'])
          /* printing, SubObject value*/
          console.log(profile.subobject.sub1)

                           /*js Array( [] )*/
          let Arr = [] //Empty Array
           Arr = ["Apple","Orange","Mango"]
          console.log(Arr[1]) //Printing a Array value
          Arr[0]="green apple" //changing a value in Array and We can insert any datatype value to Array 
          console.log(Arr[0])
          console.log(Arr.length);//length of array

                            /*Function*/
                           
            function user(fnc) //fnc is parameter
            {
                console.log(fnc)
            }
            user("hii I am function")
            user("Hi Hloo I am Second function")
            function add(val1,val2)
            {
                console.log(val1 + val2)
            }
            add(23,45)
            let val1=23;
            val2=66;

                        /*Operators*/
            console.log(5 ** 2) //5 power 2
            console.log(val1 > val2) 
            console.log(val1 <= val2);
            console.log(val1 == val2);
            console.log(val1 === val2) //Equality operator
            console.log(val1 !== val2); //Not Equal
            val1="Hello"
            val2="Kumar"
            /*String Compare*/
            console.log(val1 > val2); //dictionary format(H > K)
            console.log("1" < 5) // Here JS first check Number in the String 
            console.log(true == 1); //true = 1 ,false = 0

                   /*Terinary Operator*/
            age=20;
            console.log(age >=18 ? "Above or Equal to  18" : "Below 18"); 

            console.log(false || "Hii"); // truty() and falsy() logic will work here
            /* falsy() */
            // undefine
            // null
            // 0
            // false
            // '' and "" or both String
            // NaN

            /* truty() */
            // Which is Not in falsy() are truty()

            console.log(true || 9); // here it is falsy() because there is a Number in condition
            console.log(true && true && false); //first two condition is true and last condition + 1st two codition result is final output

            let time = new Date(); //Object

            console.log(time.getMinutes()); //getting a Current Minute


                                   /* for in */
            let Student = { name : 'Tk' , Branch : 'CSE' , Gender : 'Male'};
            for( let detail in Student)
            {
                console.log("Name of Object ",detail) //Name of Object value inside the value
                console.log("Value of Object ",Student[detail]) //Value of Object using BRACKET
            }
            let ar=['Tamil','English','Maths'];
            for(let va in ar)
            {
                  console.log(va); //Position Of array will be display
                  console.log(ar[va]);
            }
            /* For of */
            for(let va of ar)
            {
                console.log(va); //For of loop prints VALUE of 
            }
            /* OOPS */
            let fun_in_arr ={
                msg : function()
                {
                    let msgg = `My name is, ${Student.name}`;
                    console.log(msgg);
                },name : "Tk",
             };
             fun_in_arr.msg()

             /* Return function (or) factory function*/

             function retFunction(name) //Camelcase
             {
                return { //Return type
                    msg : function() // we don't need to write a funtion()(key word) here 
                                     // because we writting a function inside a function
                    {
                        let msgg = `My name is, ${Student.name}`;
                        console.log(msgg);
                    },name : name // if your key value and parameter value are same then 
                                   //we can give just key value 
                    // like name
                 };
             }
             let Tk = retFunction("tk"); //Calling a function
             console.log(Tk.name); //Returns a value of msg() function

                       /* Constructor */ 
                       
            function Person(name)//Pascal case
            {
                this.name = this.name;
                this.msg = function() //Override a Method
                {
                    console.log(`My name is ${name}`);
                }
            }
            let person = new Person("Tk(from Constructor)");
            person.msg();
            console.log(person.name); 

            /* Dynamic Object*/
    const DynamicObj = {
        name : "Kumar"
    }
    DynamicObj.age = 34; //  Adding Variable to Object
    DynamicObj.msg = function()
    { }
    console.log(DynamicObj);
    delete DynamicObj.age; //Deleting a value from the Object
    console.log(DynamicObj);

            
