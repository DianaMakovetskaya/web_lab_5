//-----------------------------------------------------task1------------------------------------------
//В текстовий рядок вводиться серія чисел розділених комою. При
// натисненні кнопки, числа у рядку мають бути розвернути. Окрім цього
// занести у абзац суму чисел та середнє значення цього масиву.

let array=[];
let text=document.getElementById('someText');
let button= document.getElementById('btn');
let res=document.getElementById('result');

button.onclick=(ev)=>{
    task1();
    ev.preventDefault();
}

function task1(){
    array=makeReverseArray(array,text).map(value => +value);
    let sum=(array.reduce( (accumulator, currentValue)=> accumulator + currentValue));
    let avg= sum/array.length;
    res.textContent=array+' Sum:'+sum+' Avg:'+avg;
}


//---------------------------------------------------task2------------------------------------------------
//В текстовий рядок вводяться серія значень, розділених комою (значення
// можуть бути числові та рядкові). При натисканні на кнопку має
// виконатись функція. Функція перетворює в масив введене в текстовий
// рядок значення та повертає введений масив у зворотному порядку.
// Окрім цього у абзац вивести кількість чисел, які були ведені у рядок.


let array2=[];
let text2=document.getElementById('someText2');
let button2= document.getElementById('btn2');
let res2=document.getElementById('result2');

button2.onclick=(ev)=>{
    task2();
    ev.preventDefault();
}
function task2(){
    array2= makeReverseArray(array2,text2);
    let numbers=array2;
    numbers = numbers.filter((v)=> v == +v);
    res2.textContent=array2+' Numbers amount:'+numbers.length;
}

//----------------------------------------------------task3--------------------------------------------------
//В текстовий рядок вводяться серія значень (чисел), розділених комою
// (значення можуть бути числові та рядкові). При натисканні на кнопку
// має виконатись функція. Функція перетворює в масив введене в
// текстовий рядок значення та створює новий масив, який сформовано з
// введених елементів які більші за 10. Вивести новий масив в абзаці.
// Якщо новий масив містить 0 елементів – вивести напис «Таких
// елементів немає».

let array3=[];
let text3=document.getElementById('someText3');
let button3= document.getElementById('btn3');
let res3=document.getElementById('result3');

button3.onclick=(ev)=>{
    task3();
    ev.preventDefault();
}

function task3(){
    array3 = text3.value.split(',');
    array3 = array3.filter((v)=> (v == +v && +v>10));
    if(array3.length) {
        res3.textContent=array3;
    }else{
        res3.textContent='Таких елементів немає!';
    }
}


//----------------------------------------------------task4--------------------------------------------------
//На сторінці розміщено 5+ блоків, які складаються з текстового поля та
// поля вводу типу checkbox. В текстові поля вводити виключно числа.
// При натисненні кнопки, перевірити коректність введених даних, якщо є
// помилки повідомити користувача через alert. Окрім цього сформувати
// масив з числових значень, з умовою, якщо у відповідному блоці
// checkbox активний, у масив записується число у двічі менше за вхідне.
// Вивести сформований масив у абзац.

let makeArrayFromInputsButton= document.getElementById('makeArrayFromInputsButton');
let inputs= document.getElementsByClassName('block')
let blocks=document.getElementsByClassName('ggg');
let allValues=[];


makeArrayFromInputsButton.onclick=()=>{
    findMistakes();
    makeArrayFromInputs();
}

findMistakes=()=>{
    for (let block of inputs) {
        let values=block.value.split(',');
        allValues=allValues.concat(values);
    }

    let numbers= allValues.filter((v)=> v == +v);
    if(numbers.length!=allValues.length){
        alert('Ви зробили помилки при введені данних. Вводити можно виключно числа!!!')
    }
}
makeArrayFromInputs=()=>{
    let array=[];
    for (let block of blocks) {
        if(block.children[1].checked===true){
            array= array.concat(block.children[0].value.split(','));
        }

    }
    array=array.filter((v)=> v == +v).map(value => value/2);
    document.getElementById('result4').textContent = array;

}


//----------------------------------------------------task5--------------------------------------------------
//В текстовий рядок вводяться серія значень, розділених комою (значення
// можуть бути числові та рядкові). При натисканні на кнопку має
// виконатись функція. Функція формує масив з введених даних та
// викликає getFirst(array, n) та результату виводить у абзац. Написати
// іншу getFirst, яка повертає перших n символів масиву. Якщо n від'ємне
// то повертає length-n елементів.

let array5=[];
let text5=document.getElementById('someText5');
let number5=document.getElementById('number5');
let button5= document.getElementById('btn5');
let res5=document.getElementById('result5');

button5.onclick=(ev)=>{
    task5();
    ev.preventDefault();
}

function task5(){
    array5 = text5.value.split(',');
    if(number5.value<0||number5.value>array5.length){
        alert("n must be > 0 and  array length!!");
        res5.textContent = '';
        return;
    }
    array5=getFirst(array5,number5.value);
    res5.textContent = array5;
}

getFirst=(array,n)=>{
    array= array.slice(0, n);
    return array;
}



//----------------------------------------------------------------------------------------------------------------------
makeReverseArray=(array,text)=>{
    array= text.value.split(',');
    return array.reverse();
}







