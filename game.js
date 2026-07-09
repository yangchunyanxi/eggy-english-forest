
let stars=0;
const lessons=[
["三上 Lesson 1 Hello","hello","你好","Hello! What's your name?","Hello"],
["三上 Lesson 2 School","book","书","What is this?","Book"],
["三上 Lesson 3 Color","red","红色","What color is it?","Red"],
["三上 Lesson 4 Number","three","三","How many?","Three"],
["三上 Lesson 5 Body","nose","鼻子","Touch your nose","Nose"],
["三下 Animals","cat","猫","What is this?","Cat"],
["三下 Food","apple","苹果","I like ____","Apple"],
["三下 Clothes","shirt","衬衫","What is this?","Shirt"],
["三下 Family","mother","妈妈","This is my ____","Mother"]
];

function home(){
let h='<div class="card"><h2>🗺闯关地图</h2>';
lessons.forEach((x,i)=>h+=`<button onclick="play(${i})">⭐ ${x[0]}</button>`);
h+='</div>';
document.getElementById('app').innerHTML=h;
}
function play(i){
let x=lessons[i];
let h=`<div class="card"><h3>${x[0]}</h3><h1>${x[1]}</h1><p>${x[2]}</p><button onclick="speak('${x[1]}')">🔊 发音</button><p>${x[3]}</p>`;
["A","B","C"].forEach(()=>{});
h+=`<button onclick="answer('${x[4]}',${i})">${x[4]}</button>`;
h+=`<button onclick="wrong(${i})">其他答案</button></div>`;
document.getElementById('app').innerHTML=h;
}
function speak(t){
let u=new SpeechSynthesisUtterance(t);u.lang='en-US';speechSynthesis.speak(u);
}
function answer(a,i){
stars++;document.getElementById('app').innerHTML=`<h2>🎉 Great!</h2><p>⭐+1</p><button onclick="home()">下一关</button>`;
}
function wrong(i){document.getElementById('app').innerHTML=`<h2>Try Again!</h2><button onclick="play(${i})">重新挑战</button>`;}
home();
