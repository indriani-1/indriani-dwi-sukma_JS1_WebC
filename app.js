//if,else
let x = 2;

if (x > 5) {
    console.log("x lebih besar dari 5");
} else {
    console.log("x tidak lebih besar dari 5");
}
//nested if

//switch case
const fruit='jambu';
switch (fruit) {
    case 'pisang':
        console.log('ini adalah pisang')
        break;
    case 'jambu':
        console.log('ini adalah jambu')
        break; 
    default:
        console.log('other')
        break;
}

//for statement
for (let i = 1; i < 6; i++) {
    console.log("Nomor ke-" + i);
}

//while
let i = 1;

while (i < 6) {
    console.log("anak ke-" + i);
    i++;
}

//Do while
let bilangan =1;
do{
    console.log("menampilkan bilangan:" + bilangan);
bilangan++
}while(bilangan<6)

//function
function addname(firstname, lastname){
    console.log(firstname + lastname)
}
addname('indriani', 'dwisukma')