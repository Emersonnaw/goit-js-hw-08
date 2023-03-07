


import throttle from 'lodash.throttle';
const formRef = document.querySelector(".feedback-form");
const textareaRef = document.querySelector(".feedback-form textarea");
const inputRef = document.querySelector(".feedback-form input");
const STORAGE_KEY = "feedback-form-state";
const formData = {};
checkingTheRepository();


formRef.addEventListener('input', throttle(onFormInput,500));


function onFormInput(e){
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset(); 
 localStorage.removeItem(STORAGE_KEY);
 }





// textareaRef.addEventListener('input', onTextareaInput);
// function onTextareaInput(e){


// }


// inputRef.addEventListener('input',);


  




function checkingTheRepository(){
 const savedData = localStorage.getItem(STORAGE_KEY);
 const parseData = JSON.parse(savedData);

 if(parseData){
  
   textareaRef.value = parseData.message;
   inputRef.value = parseData.email;
 };

    
  };

