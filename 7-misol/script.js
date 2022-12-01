// 7. Standart oylik 300$. Undan kam yoki ko'p berilsa, xabar chiqarish //

let a = +prompt("Moashingizni kiriting!", "0$");

if(a > 300) {
    alert('Siz standart oylik maoshdan ko\'p topasiz!');
} else if(a == 300) {
    alert('Siz standart oylikdasiz!');
} else {
    alert('Siz Standart oylik maoshdan kam topasiz!');
}