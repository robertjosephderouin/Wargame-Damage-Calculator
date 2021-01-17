attacks x hitpercentage x woundpercentage x save percentage modified by rend x damage

To hit, to wound, to save d1 d2 d3 d4 d5 d6

Rend -1 -2 -3 -100 -10000 infinite

Damage 1 2 3 100 1000 infinite

Create an array of 1 - 6

Relate each integer of that array to equal a percent
6 = 16.6666% 5 = 33.2222% 4 = 50% 3 = 66.6666 2 = 83.3333

(7 - inputHit)/6) (7 - inputWound)/6 (7 - (inputSave - inputRend))/6 x damage
