var screen=document.querySelectorAll(".screen");
var stbt=document.querySelector("#start");
var nam=document.querySelector(".name input")
var ag=document.querySelector(".age input");
var change=document.querySelectorAll("#left h4")
var que=document.querySelector(".ques h1");
var opt=document.querySelectorAll(".options h4");
var submit=document.querySelector("#submit");
var candi=document.querySelector("#candi");
var finalscore=document.querySelector("#finalscore");
var line=document.querySelector("#line")
var select;
var a=0;
var answer=0;
var neg=0;
var namm;
var flag=true





var arr=[
    {
        Question:"1.What is the correct way to declare a variable in JavaScript?",
        option1:"a) var x;",
        option2:"b) variable x;",
        option3:"c) let x;",
        option4:"d) const x;",
        ans:"2",
    },
    {
        Question:"2. How do you comment a single line in JavaScript?",
        option1:"a) /This is a comment",
        option2:"b) //This is a comment",
        option3:"c) --This is a comment--> ",
        option4:"d) This is a comment",
        ans:"1",
    },
    {
        Question:"3. What does the === operator do in JavaScript?",
        option1:"a) Assigns a value",
        option2:"b) Compares values for equality without type coercion",
        option3:"c) Compares values for equality with type coercion ",
        option4:"d) Performs a logical AND operation",
        ans:"1",
    },
    {
        Question:"4.Which function is used to print to the console in JavaScript?",
        option1:"a) print()",
        option2:"b) console.log()",
        option3:"c) log() ",
        option4:"d) write()",
        ans:"1",
    },
    {
        Question:"5.What is the purpose of the setTimeout function in JavaScript?",
        option1:"a) Pauses the execution of the code",
        option2:"b) Sets a timer for executing a function after a specified time",
        option3:"c) Delays the loading of the webpage ",
        option4:"d) Defines the duration of an animation",
        ans:"3",
    },
]






stbt.addEventListener("click",function(){
     namm=nam.value;
    var agee=ag.value;
    screen[1].style.transform="translateY(-100%)"
    change[0].innerHTML=`Name: ${namm}`
    change[1].innerHTML=`Age: ${agee} years`;
    que.innerHTML=`${arr[a].Question}`;
   opt[0].innerHTML=`${arr[a].option1}`;
   opt[1].innerHTML=`${arr[a].option2}`;
   opt[2].innerHTML=`${arr[a].option3}`;
   opt[3].innerHTML=`${arr[a].option4}`;
  
  
   opt.forEach(function(elem,idx){
         elem.addEventListener("click",function(){
            select=idx;
           elem.style.backgroundColor="green"
         
           if(select==arr[a].ans){
               console.log("Right ans");
               answer+=1;
             }
           else{
               console.log("wrong");
               neg++;
               
            
           }
   
   
   
       })
   })

   })

   

submit.addEventListener("click",function(){
    
        console.log("kasjfd"+(answer))
        console.log("slfdha"+neg)
        a++;

    if(a<5){
        
 que.innerHTML=`${arr[a].Question}`;
   opt[0].innerHTML=`${arr[a].option1}`;
   opt[1].innerHTML=`${arr[a].option2}`;
   opt[2].innerHTML=`${arr[a].option3}`;
   opt[3].innerHTML=`${arr[a].option4}`;
  
   opt.forEach(function(elem,idx){
       
    elem.addEventListener("click",function(){
            
            select=idx;
           
            elem.style.backgroundColor="green"
        

           if(select==arr[a].ans){
               console.log("Right ans");
               answer++;
              

               
           }
           else{
               console.log("wrong")
               neg++;
               
            
           }
           
   
   
       })
   })
   
 
   opt[select].style.backgroundColor="#F4EAE0"

    }
    else{
        screen[2].style.transform="translateY(-200%)"
        
        candi.innerHTML=`Congrates! <span>${namm}</span> `;
        finalscore.innerHTML=`${((ans)/5)*100} % Score..`
        line.innerHTML=`You attempt 5 questions and <br> from that you <span> ${(ans)} answer</span> is correct`

    }
})       
    



  