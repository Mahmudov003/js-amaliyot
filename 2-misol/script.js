// 2. NTga kelish kunlari //

let day = prompt('Hafta kunini yozing!!!');

if(day == duyshanba || day == chorshanba || day == juma) {
    alert('Bugun dars bor!');
} else if(day == seshanba || day == payshanba || day == shanba || day == yakshanba) {
    alert('Bugun dasr yoq!');
} else {
    alert('Bunday hafta kuni yoq!!!');
}