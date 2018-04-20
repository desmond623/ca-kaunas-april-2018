alert("alah ahk bar")



function test() {
let item = new Array();

item.push(item);

let JSONreadyItem = JSON.stringify(item);

localStorage.setItem('item', JSONreadyItem);
}
console.log(JSON.parse(localstorage['item']));
