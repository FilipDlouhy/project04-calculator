let numbers = document.querySelectorAll("#number");
let numberText = document.querySelector("#number-text");
let displayText = document.querySelector("#display-text")
let plusBTN = document.querySelector("#plus");
let minusBTN =document.querySelector("#minus");
let multipleBTN = document.querySelector("#multiple");
let equalBTN = document.querySelector("#equal");
let divideBTN = document.querySelector("#divide");
let clearBTN = document.querySelector("#clear");
let deleteBTN = document.querySelector("#delete");
let teckaBTN = document.querySelector("#eltecko");
clickCount = 1;
let numberOne = "";
let numberTwo = 0;
let buttonValue;
let total = 0;
let operation;
numbers.forEach((item)=>{
item.addEventListener("click",(e)=>{
  

  if(clickCount === 0){
    numberText.textContent = " ";
  

    numberText.textContent = numberText.textContent + e.target.value ;
   }
   else{

    numberText.textContent = numberText.textContent + e.target.value ;
   }
})
})


plusBTN.addEventListener("click", ()=>{
   if(clickCount === 0){
    numberText.textContent = " ";
    displayText.textContent= total + " " + "+";
    clickCount++;
    clickCount++;
    operation ="+";
   }
     else if (clickCount === 1 ){
             total = parseFloat( numberText.textContent);
             numberText.textContent = " ";
             displayText.textContent= total + " " + "+";
             clickCount++;
             operation ="+";
    }
    else{
        if(numberText.textContent===" "){
            operation = "+";
            displayText.textContent= total + " " + operation;
        }else{
            numberTwo = 0;
                numberTwo = parseFloat(numberText.textContent);


            if(operation== "+"){
                   total= total + numberTwo;
         
            }
            if(operation== "-"){
                total =total - numberTwo;
              
            }
            if(operation== "*"){
                total =total * numberTwo;
                
            }
            if(operation== "/"){
                total =total / numberTwo;
               
            }
            numberTwo = 0;
      

        }
        
    }

    operation = "+";
    displayText.textContent= total + " "+ operation;
    numberText.textContent = " ";
})

minusBTN.addEventListener("click",()=>{
    if(clickCount === 0){
        numberText.textContent = " ";
        displayText.textContent= total + " " + "-";
        clickCount++;
        clickCount++;
        operation ="-";
       }
    if (clickCount === 1 ){
        total = parseFloat( numberText.textContent);
        numberText.textContent = " ";
        displayText.textContent= total + " " + "-";
        clickCount++;
        operation ="-";
}
else{
   if(numberText.textContent===" "){
       operation = "-";
       displayText.textContent= total + " " + operation;
   }else{
    numberTwo = 0;
           numberTwo = parseFloat(numberText.textContent);


       if(operation== "+"){
              total= total + numberTwo;
          
       }
       if(operation== "-"){
           total =total - numberTwo;
         
       }
       if(operation== "*"){
           total =total * numberTwo;
         
       }
       if(operation== "/"){
           total =total / numberTwo;
        
       }
       numberTwo = 0;
   

   }
   
}
operation = "-";
displayText.textContent= total + " "+ operation;
   numberText.textContent = " ";
})
 
multipleBTN.addEventListener("click",()=>{
    if(clickCount === 0){
        numberText.textContent = " ";
        displayText.textContent= total + " " + "*";
        clickCount++;
        clickCount++;
        operation ="*";
       }
    if (clickCount === 1 ){
        total = parseFloat( numberText.textContent);
        numberText.textContent = " ";
        displayText.textContent= total + " " + "*";
        clickCount++;
        operation ="*";
}
else{
   if(numberText.textContent===" "){
       operation = "*";
       displayText.textContent= total + " " + operation;
   }else{
           numberTwo = parseFloat(numberText.textContent);


       if(operation== "+"){
              total= total + numberTwo;
          
       }
       if(operation== "-"){
           total =total - numberTwo;
         
       }
       if(operation== "*"){
           total =total * numberTwo;
         
       }
       if(operation== "/"){
           total =total / numberTwo;
        
       }
       numberTwo = 0;
   

   }
   
}
operation = "*";
   displayText.textContent= total + " "+ operation;
   numberText.textContent = " ";
}
)

divideBTN.addEventListener("click",()=>{
    if(clickCount === 0){
        numberText.textContent = " ";
        displayText.textContent= total + " " + "/";
        clickCount++;
        clickCount++;
        operation ="/";
       }
    if (clickCount === 1 ){
        total = parseFloat( numberText.textContent);
        numberText.textContent = " ";
        displayText.textContent= total + " " + "/";
        clickCount++;
        operation ="/";
}
else{
   if(numberText.textContent===" "){
       operation = "/";
       displayText.textContent= total + " " + operation;
   }else{
    numberTwo = 0;
           numberTwo = parseFloat(numberText.textContent);


       if(operation== "+"){
              total= total + numberTwo;
          
       }
       if(operation== "-"){
           total =total - numberTwo;
         
       }
       if(operation== "*"){
           total =total * numberTwo;
         
       }
       if(operation== "/"){
           total =total / numberTwo;
        
       }
       numberTwo = 0;
   

   }
   
}
operation = "/";
   displayText.textContent= total + " "+ operation;
   numberText.textContent = " ";
}
)



equalBTN.addEventListener("click",()=>{
    let oldTotal = total;
    numberTwo = parseFloat(numberText.textContent);
    if(  numberText.textContent === " "  || numberTwo === 0){
        console.log("nešlo nic");
    } else{
        displayText.textContent=" ";
        if(operation== "+"){
            total= total + numberTwo;
            numberText.textContent=  `${oldTotal} ${operation} ${numberTwo} = ${total} `;
        
     }
     if(operation== "-"){
         total =total - numberTwo;
         numberText.textContent=  `${oldTotal} ${operation} ${numberTwo} = ${total} `;
       
     }
     if(operation== "*"){
         total =total * numberTwo;
         numberText.textContent=  `${oldTotal} ${operation} ${numberTwo} = ${total} `;
       
     }
     if(operation== "/"){
         total =total / numberTwo;
         numberText.textContent=  `${oldTotal} ${operation} ${numberTwo} = ${total} `;
      
    }
    clickCount =0;
    
 }
 numberTwo = 0;
  
})
clearBTN.addEventListener("click",()=>{
    total=0;
    numberTwo=0;
    numberOne = 0;
    displayText.textContent=" ";
    numberText.textContent =" ";
})
deleteBTN.addEventListener("click",()=>{
    let textOne = numberText.textContent;
    let textTwo = textOne.slice(0, -1);
    numberText.textContent= textTwo;
})
teckaBTN.addEventListener("click",()=>{
if(numberText.textContent==" "){
    numberText.textContent += "0.";    
}
else if (numberText.textContent.includes(".")){
    console.log("neslo nic");
}
else{
    numberText.textContent += "."; 
}
})