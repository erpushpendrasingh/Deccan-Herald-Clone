
document.querySelector('.view').addEventListener('mouseover',enter)

function enter(){
     
    let para=document.querySelector('.view');
    para.style.textDecoration='underline';
}

document.querySelector('.view').addEventListener('mouseout',remove)

function remove(){

    let text=document.querySelector('.view');
    text.style.textDecoration='none';
}

 

 