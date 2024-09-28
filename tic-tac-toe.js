console.log('connected!');

var restart = document.querySelector("#rst");

var sq = document.querySelectorAll('td');

function clearboard(){
    for(var i =0;i<sq.length;i++){
        sq[i].textContent=' ';
    }
}
restart.addEventListener('click',clearboard);

function fillX(){
    if(this.textContent===''){
        this.textContent='X';
    }else{
        this.textContent='';
    }
}

function fillO(){
    if(this.textContent===''){
        this.textContent='O';
    }else{
        this.textContent='';
    }
}


for(var i=0;i<sq.length;i++){
    sq[i].addEventListener('click',fillX);
    sq[i].addEventListener('dblclick',fillO);
}