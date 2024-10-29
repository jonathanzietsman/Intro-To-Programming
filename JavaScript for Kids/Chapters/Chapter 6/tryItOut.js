// Try It Out : Page 96
var me = 'Jonathan';
var dad = 'DADS NAME'
var mom = 'MOMS NAME'
var name = 'Jonathan';
if (name ===  me) {
    console.log(`Hello ${me}!`);
}
else if ( name === dad) {
    console.log(`Hello ${dad}!`)
}
else if ( name === mom) {
    console.log(`Hello ${mom}!`)
}
else {
    console.log('Hello, stranger!');
}

// Try It Out : Page 102
for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
    }