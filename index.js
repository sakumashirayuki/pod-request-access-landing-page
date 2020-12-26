function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //console.log(inputText);
  if (!inputText) {
    alert("Oops! Please add your email");
  } else if (!inputText.match(mailformat)){ //don't match
    alert("Oops! Please check your email");
  }
  else{
    alert("Submit success!")
  }
}
var submitButton = document.querySelector("button");
submitButton.addEventListener('click', function(){
    var inputValue = document.getElementsByClassName("c-form__input")[0].value;
    console.log(inputValue);
    ValidateEmail(inputValue);
});
