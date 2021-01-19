function averageDamage(inputAttack, inputHit, inputWound, inputRend, inputSave, inputDamage) {
  var outputHit = ((7 - inputHit) / 6);
  var outputWound = ((7 - inputWound) / 6);
  var outputSave =  ((7 - ( inputSave - inputRend)) / 6);
  return inputAttack * outputHit * outputWound * outputSave * inputDamage;
}

var form = document.getElementById('input-fields')
form.addEventListener("submit", function(e){
  e.preventDefault();
  var data = new FormData(form);
  var attacks = Number(data.get("inputAttack"));
  var hits = Number(data.get("inputHit"));
  var wound = Number(data.get("inputWound"));
  var rend = Number(data.get("inputRend"));
  var save = Number(data.get("inputSave"));
  var damage = Number(data.get("inputDamage"));
  var result = averageDamage(attacks, hits, wound, rend, save, damage);
  document.getElementById("result").innerText = "Result: " + result;
})
