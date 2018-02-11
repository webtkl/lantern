var Oath = "In brightest day, in blackest night, No evil shall escape my sight. Let those who worship evil's might, Beware my power...Green Lantern's light!"
var progress = []

console.log('------------------------------------');
console.log(Oath.length);
console.log('------------------------------------');

function setProgress(number, progress) {
    progress.numeric = number
    progress.passage = number > Oath.length ? Oath : Oath.substring(0, number);
    progress.bonus = number > Oath.length ? number - Oath.length : 0;
}