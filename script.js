const music = document.getElementById("bgMusic");
const tap = document.getElementById("tap");
const textEl = document.getElementById("text");
const hearts = document.querySelector(".hearts");
const flowers = document.querySelector(".flowers");
const bigFlowers = document.querySelector(".big-flowers");

const HER_NAME = "MESYA SALSA BILLA 💖";

// 🔐 KODE BERUBAH TIAP HARI
function todayCode(){
  const d=new Date();
  return "LOVE"+d.getDate()+d.getMonth();
}

function unlock(){
  if(codeInput.value===todayCode()){
    lock.style.display="none";
  }else alert("Kode salah 💔");
}

let started=false;
function startAll(){
  if(started) return;
  started=true;
  tap.style.display="none";
  music.volume=0;
  music.play();
  fadeIn();
  typing();
  spawnHearts();
  spawnFlowers();
  spawnBigFlowers();
  setInterval(spawnRose,6000);
}

function fadeIn(){
  const f=setInterval(()=>{
    music.volume+=0.02;
    if(music.volume>=0.7) clearInterval(f);
  },120);
}

/* TEXT BERGANTI */
const messages=[
  "Aku selalu sayang kamu 🤍",
  "Terima kasih sudah hadir 🌸",
  "Setiap hari bersamamu itu hadiah 💖",
  "Aku cinta kamu 🌹"
];
let mi=0,ci=0;
function typing(){
  if(ci<messages[mi].length){
    textEl.textContent+=messages[mi][ci++];
    setTimeout(typing,80);
  }else{
    setTimeout(()=>{
      textEl.textContent="";
      ci=0;mi=(mi+1)%messages.length;
      typing();
    },2000);
  }
}

/* EFEK */
function spawnHearts(){
  setInterval(()=>{
    const h=document.createElement("span");
    h.textContent="💖";
    h.style.left=Math.random()*100+"vw";
    hearts.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },300);
}
function spawnFlowers(){
  setInterval(()=>{
    const f=document.createElement("span");
    f.textContent="🌸";
    f.style.left=Math.random()*100+"vw";
    flowers.appendChild(f);
    setTimeout(()=>f.remove(),8000);
  },500);
}
function spawnBigFlowers(){
  setInterval(()=>{
    const b=document.createElement("span");
    b.textContent="🌺";
    b.style.left=20+Math.random()*60+"vw";
    b.style.top=20+Math.random()*60+"vh";
    bigFlowers.appendChild(b);
    setTimeout(()=>b.remove(),6000);
  },3000);
}
function spawnRose(){
  const r=document.createElement("div");
  r.className="rose";
  r.textContent="🌹";
  const c=[
    {top:"-30px",left:"-30px"},
    {top:"-30px",right:"-30px"},
    {bottom:"-30px",left:"-30px"},
    {bottom:"-30px",right:"-30px"}
  ];
  Object.assign(r.style,c[Math.floor(Math.random()*4)]);
  document.body.appendChild(r);
  setTimeout(()=>r.remove(),8000);
}

/* FOTO FULLSCREEN + SWIPE */
const photos=["photo1.jpg","photo2.jpg"];
let current=0,auto;
function openZoom(img){
  current=photos.indexOf(img.src.split("/").pop());
  fullImg.src=img.src;
  fullscreen.style.display="flex";
  auto=setInterval(nextPhoto,3000);
}
function closeFull(){
  fullscreen.style.display="none";
  clearInterval(auto);
}
function nextPhoto(){
  current=(current+1)%photos.length;
  fullImg.src=photos[current];
}

/* PAUSE SLIDE */
function toggleSlide(){
  track.classList.toggle("pause");
}

/* ENDING ABSOLUTE */
setTimeout(()=>{
  loveText.innerText="I LOVE YOU "+DEDEKUU;
  ending.style.display="flex";
  for(let i=0;i<20;i++) setTimeout(spawnRose,i*200);
},45000);

/* QR */
new QRious({
  element:document.getElementById("qrcode"),
  size:180,
  value:"https://USERNAME.github.io/love"
});
