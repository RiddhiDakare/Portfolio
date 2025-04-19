document.addEventListener("DOMContentLoaded", function () {

document.queryselector("#home").addEventListener("click",function(){
    window.location.href = "index.html";
})
document.querySelector("#ab").addEventListener("click", function() {
    window.location.href = "about_me.html";
  });
 
  document.querySelector("#bc").addEventListener("click", function() {
    window.location.href = "skills.html";
  });
  document.querySelector("#cd").addEventListener("click", function() {
    window.location.href = "contact.html";
  });
 
});