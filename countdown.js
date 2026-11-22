// 23 November 2026, 12:00 AM India Standard Time (UTC+05:30).
// Equivalent UTC instant: 22 November 2026, 18:30:00Z.
const target=new Date('2026-11-22T18:30:00Z').getTime();
const ids={days:document.getElementById('days'),hours:document.getElementById('hours'),minutes:document.getElementById('minutes'),seconds:document.getElementById('seconds')};
const note=document.getElementById('countdownNote');
function tick(){const left=target-Date.now();if(left<=0){Object.values(ids).forEach(el=>el.textContent='00');note.textContent="It's your day, Kirtika! Happy Birthday! 🎂💗";document.title='Happy Birthday, Kirtika! ♡';return}
const d=Math.floor(left/86400000),h=Math.floor(left%86400000/3600000),m=Math.floor(left%3600000/60000),s=Math.floor(left%60000/1000);
ids.days.textContent=String(d).padStart(2,'0');ids.hours.textContent=String(h).padStart(2,'0');ids.minutes.textContent=String(m).padStart(2,'0');ids.seconds.textContent=String(s).padStart(2,'0')}
tick();setInterval(tick,1000);
const layer=document.getElementById('floatingLayer');if(layer)setInterval(()=>{if(document.hidden)return;const p=document.createElement('span');p.className='float-piece';p.textContent=Math.random()>.5?'♡':'✦';p.style.left=Math.random()*100+'%';p.style.animationDuration=9+Math.random()*6+'s';p.style.fontSize=12+Math.random()*14+'px';layer.appendChild(p);setTimeout(()=>p.remove(),16000)},1500);
