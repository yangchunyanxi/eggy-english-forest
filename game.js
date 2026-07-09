
let stars=0;
let lessons=[
["三上 Lesson 1 Hello","Hello! What's your name?",["Hello","Goodbye","Thanks"],"Hello"],
["三上 Colors","What colour is the apple?",["Red","Blue","Green"],"Red"],
["三上 Numbers","How many apples?",["Two","Three","Five"],"Three"],
["三上 Body","Touch your nose.",["Nose","Book","Dog"],"Nose"],
["三下 Animals","What is this?",["Cat","Dog","Bird"],"Cat"],
["三下 Food","I like ____.",["Apple","Book","Pen"],"Apple"],
["三下 Clothes","What is this?",["Hat","Fish","Milk"],"Hat"],
["三下 Family","This is my ____.",["Mother","Apple","Pencil"],"Mother"]
];

function home(){
let h="<h2>🌳 English Forest Map</h2>";
lessons.forEach((x,i)=>{
h+=`<button onclick="play(${i})">${x[0]}</button>`;
});
document.getElementById("app").innerHTML=h;
}
function play(i){
let l=lessons[i];
let h=`<h3>${l[0]}</h3><p>${l[1]}</p>`;
l[2].forEach(a=>h+=`<button onclick="answer('${a}',${i})">${a}</button>`);
document.getElementById("app").innerHTML=h;
}
function answer(a,i){
if(a===lessons[i][3]){
stars++;
document.getElementById("stars").innerHTML=stars;
document.getElementById("app").innerHTML="<h2>🎉 Great Job!</h2><p>获得英语星星⭐</p><button onclick='home()'>返回地图</button>";
}else{
document.getElementById("app").innerHTML="<h2>Try Again!</h2><button onclick='play("+i+")'>重新挑战</button>";
}
}
home();
