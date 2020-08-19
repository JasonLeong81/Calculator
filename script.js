const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(let i =0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        let number = btns[i].getAttribute('data-num');
        // let number = btns[i].innerHTML;
        screen.value += number;
    });
}

equalBtn.addEventListener('click',()=>{
    if(screen.value ===''){
        alert('Input is empty!')
    }
    else{
    let value = eval(screen.value); // this is the part doing most of the stuff
    screen.value = value;}
})

clearBtn.addEventListener('click',()=>{
    screen.value = '';
})