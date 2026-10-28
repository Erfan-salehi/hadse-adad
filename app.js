const shans = document.querySelector("#shans")
const button = document.querySelector("button")
const input = document.querySelector("input")

let gamestart=false
let random;
let hads=0;


button.onclick = function(){
    if(gamestart===false){
    alert('بازی شروع شد\n یک عدد بین ۱ تا ۱۰۰ وارد کن \n فقط ۱۰ بار فرصت داری که عدد رو پیدا کنی')
    gamestart=true

     random = Math.floor(Math.random() * 100) + 1;
 
    }else{
        hads++
        let guess = Number(input.value);
        shans.innerHTML = 10 - hads + " حدس باقی مانده";

        if(random>guess){
            alert('عدد بزرگتراست')
        }else if(random<guess){
            alert('عدد کوچکتر است')
        }else{
            alert('شما برنده شدید');
            gamestart=false

        }
        if (hads === 10 && guess !== random) {
    alert("باختی! عدد درست " + random + " بود");
    gamestart = false;
}
 
    }
    button.innerHTML = "ثبت عدد"
    button.id="btn2"
    
}