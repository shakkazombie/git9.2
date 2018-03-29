// scripts.js 

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek', 'Marek', 'Marian'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    var z = allNames.push(newName);
    document.write(allNames);

} else {
    document.write('Imię ' + (newName) + '  znajduje sie już w tablicy ');
}









/*
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania', 'Jadwiga', 'Ola'];
var namesWithoutOla = names.filter(function(name) {
    document.write('name in filter: ' + name + "<br/>");
    return name != 'Ola';
});

document.write(namesWithoutOla);
document.write("<br/>" + allNames + "<br/>");
*/