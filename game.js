
let stars=0;
let items=[];

const levels=[
["🌈 Color Forest","What color is the apple? 🍎",["Red","Blue","Green"],"Red"],
["🐾 Animal Park","What is this? 🐱",["Cat","Dog","Bird"],"Cat"],
["🍎 Fruit Island","I like ____",["Banana","Apple","Orange"],"Banana"],
["🔢 Number Castle","How many apples? 🍎🍎🍎",["Two","Three","Five"],"Three"],
["🏫 Sunny School","What's your name?",["My name is Sunny","Goodbye","Good night"],"My name is Sunny"]
];

function showHome(){
document.getElementById("app").innerHTML=`
<h2>🌳 English Forest Map</h2>
<button onclick="play(0)">🌈 Color Forest</button>
<button onclick="play(1)">🐾 Animal Park</button>
<button onclick="play(2)">🍎 Fruit Island</button>
<button onclick="play(3)">🔢 Number Castle</button>
<button onclick="play(4)">🏫 Sunny School</button>
<button onclick="dress()">👕 My Items</button>`;
}

function play(i){
let l=levels[i];
let h=`<h2>${l[0]}</h2><h3>${l[1]}</h3>`;
l[2].forEach(x=>h+=`<button onclick="answer('${x}',${i})">${x}</button>`);
document.getElementById("app").innerHTML=h;
}

function answer(x,i){
if(x==levels[i][3]){
stars++;
document.getElementById("stars").innerHTML=stars;
if(stars==5)items.push("🎩 Rainbow Hat");
document.getElementById("app").innerHTML=`
<div class="reward">🎁</div>
<h2>Great Job!</h2>
<p>Sunny获得英语奖励⭐</p>
<button onclick="showHome()">返回地图</button>`;
}else{
document.getElementById("app").innerHTML=`<h2>Try Again!</h2><button onclick="play(${i})">重新挑战</button>`;
}
}

function dress(){
document.getElementById("app").innerHTML=
"<h2>🎒 Sunny背包</h2><p>"+(items.length?items.join("<br>"):"暂无奖励")+"</p><button onclick='showHome()'>返回</button>";
}

showHome();
