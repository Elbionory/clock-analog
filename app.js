
setInterval(ration,1000);
let btn=document.querySelector("#btn")
let audio= new Audio('audio.mp3');
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
const hour=document.querySelector("#hour")
function ration(){
    const currentDate =new Date()
    console.log(currentDate.getHours())
const ratiosec=currentDate.getSeconds()/60;
const ratiomin=(ratiosec+currentDate.getMinutes())/60;
const ratiohour=(ratiomin+currentDate.getHours())/12;
style(sec,ratiosec);
play();
style(min,ratiomin);
style(hour,ratiohour);
}
function play(){
  audio.play();
}
function style(element,ratio){
element.style.setProperty('--rotate',ratio*360);
}
ration();

const hands=document.querySelectorAll(".hand")
 const nums=document.querySelectorAll(".number");
 console.log(nums)

function delay(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })

}
async function animation (delly){
for(let i=0;i<nums.length;i++){
    await delay(delly/2)
    nums[i].style.opacity="1"
    nums[i].classList.add(`number${i+1}`)
    await delay(delly)
}
await delay(delly)
for(let j=0;j<hands.length;j++){
    await delay(delly)
    hands[j].style.opacity="1"
    hands[j].classList.add(`h${j}`)
    hands[j].style.transition="none"
}
}
animation(1000);









