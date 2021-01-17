function averageDamage(inputAttack, inputHit, inputWound, inputRend, inputSave, inputDamage) {
  var outputHit = ((7 - inputHit) / 6);
  var outputWound = ((7 - inputWound) / 6);
  var outputSave = ((7 - ( inputSave - inputRend)) / 6);
  return inputAttack * outputHit * outputWound * outputSave * inputDamage;
}

console.log(averageDamage(1, 4, 4, 0, 4, 1));
