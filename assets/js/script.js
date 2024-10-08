let day = Number(prompt('Bir sayı giriniz :'))

switch (day) {
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
  case  7:
    day = "Pazar";
  default:
    day = 'Lütfen 1 ile 7 arasında bir değer giriniz'
}
alert(day);