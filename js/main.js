var myModal;
window.onload = function() {
  var myModal = document.getElementById('modalForm');
	setTimeout(function() {
    myModal.className = "on";
  }, 3000);
};

var submit
	, exitButton
	, myModal;
document.addEventListener("DOMContentLoaded", function(){
	submit = document.querySelector("#submitButton");
	exitButton = document.querySelector("#stupidButton");
	myModal = document.getElementById('modalForm');
	exitButton.addEventListener("click", function(){
		myModal.className = "off";
	});
	submit.addEventListener("click", function(){
		myModal.className = "off";
	})
});