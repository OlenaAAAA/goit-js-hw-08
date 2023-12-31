
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");


let formData = { email: "", message: "" };


onLoadingPage();

function onLoadingPage() {
  const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (savedMessage === null) {
    return;
  }

  textareaEl.value = savedMessage.message || '';
  emailEl.value = savedMessage.email || '';
  formData.email = savedMessage.email || '';
  formData.message = savedMessage.message || '';
}



const onInput = (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};


const onSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
    console.log(formData);
    formData = {};
};





formEl.addEventListener("input", throttle(onInput, 500));
formEl.addEventListener("submit", onSubmit);



