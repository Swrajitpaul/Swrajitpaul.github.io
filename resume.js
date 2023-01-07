$(document).ready(function () {
  $('#navigation').delay(100).fadeIn(100);
  $('#page').delay(100).fadeIn(100);
  $('#footer').delay(100).fadeIn(100);

  setTimeout(
    function(){
      alert("Last updated: Feb 2022 \n \nThe Current resume might not be displayed \n \nPlease contact me for the updated resume\n \nThank you!");
    },
    1000);
});

function download(){
  var answer = confirm("Do you want to download?");
  if(answer == true){
    window.open("myresume.docx","_self")
  }
  else {

  }
}