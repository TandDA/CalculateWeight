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
    var age = document.querySelector('input[id="age"]').value;
    var height = document.querySelector('input[id="height"]').value;
    var weight = document.querySelector('input[id="weight"]').value;
    var activity = document.querySelector('input[name="activity"]:checked').value;

    alert(activity);
    return false;
  };
