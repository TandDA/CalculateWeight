var inputs = [].slice.call(document.querySelectorAll('input[type="text"]'));

inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
	var empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length;
  submitButton.disabled = empty !== 0;
}
checkInputs();

submitButton.onclick = function() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    alert(gender);
    return false;
  };
