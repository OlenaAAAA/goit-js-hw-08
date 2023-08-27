
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");


let formData = { email: "", message: "" };




const onLoadingPage = () => {
    if (formData) {
    emailEl.value = formData.email || '';
    textareaEl.value = formData.message || '';
  }
};

onLoadingPage();

const onInput = (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};


const onSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
    console.log(formData);
};





formEl.addEventListener("input", throttle(onInput, 500));
formEl.addEventListener("submit", onSubmit);



