function foo() {
    var num = prompt('Введите число', 0);
    if (num == 0) {
    alert( "Число " + num + " нуль" );
    } else if (num > 0 && num < 10) {
    alert( "Число " + num + " однозначное положительное" );
    } else if (num >= 10 && num < 100) {
    alert( "Число " + num + " двухзначное положительное" );
    } else if (num >= 100) {
    alert( "Число " + num + " положительное трехзначное и более" );
    } else if (num < 0 && num > -10) {
    alert( "Число " + num + " однозначное отрицательное" );
    } else if (num <= -10 && num > -100) {
    alert( "Число " + num + " двухзначное отрицательное" );
    } else {
    alert( "Число " + num + " отрицательное трехзначное и более" );
    
    }
}