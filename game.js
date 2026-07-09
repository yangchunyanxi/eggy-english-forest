let stars=0;
let lessons=[
['Lesson 1 Hello Sunny','hello','Hello! What is your name?','Hello'],
['Lesson 2 Sunny School','book','What is this?','Book'],
['Lesson 3 Color Forest','red','What color is it?','Red'],
['Lesson 4 Number Castle','three','How many apples?','Three'],
['Lesson 5 Sunny Body','nose','Touch your nose','Nose']
];
function home(){app.innerHTML='<h2>🗺 闯关地图</h2>'+lessons.map((x,i)=>`<button onclick="play(${i})">${x[0]}</button>`).join('')}
function play(i){let x=lessons[i];app.innerHTML=`<h2>${x[0]}</h2><h1>${x[1]}</h1><p>${x[2]}</p><button onclick="speak('${x[1]}')">🔊 发音</button><button onclick="ok()">${x[3]}</button>`}
function speak(t){let u=new SpeechSynthesisUtterance(t);u.lang='en-US';speechSynthesis.speak(u)}
function ok(){stars++;document.getElementById('stars').innerHTML=stars;app.innerHTML='<h2>🎉 Great!</h2><button onclick="home()">下一关</button>'}
home();