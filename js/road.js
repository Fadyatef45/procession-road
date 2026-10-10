// ==== رسم الطريق والمحطات والبيوت ====
const $=x=>document.getElementById(x),N=D.length,SP=270,PAD=250;
let cur=-1,P=[];
const cv=$('cv'),sc=$('sc');
function build() {
  const h=sc.clientHeight,W=PAD*2+SP*(N-1)+160;
  cv.style.width=W+'px';
  const d=Math.max(70,Math.min(h*.36,150));
  cv.style.setProperty('--d',d+'px');
  P=[{x:W-PAD+60,y:h*.5}];
  for(let n=0;n<N;n++)P.push({x:W-PAD-80-n*SP,y:h*(n%2?.7:.34)});
  P.push({x:PAD-130,y:h*.5});
  let p='M'+P[0].x+' '+P[0].y;
  for(let i=1;i<P.length;i++) {
    const a=P[i-1],b=P[i],m=(a.x+b.x)/2;
    p+=' C'+m+' '+a.y+' '+m+' '+b.y+' '+b.x+' '+b.y
  }
  $('rd0').setAttribute('d',p);
  $('rd1').setAttribute('d',p);
  cv.querySelectorAll('.st,.hs').forEach(e=>e.remove());
  const hs=(pt,e,t)=> {
    const x=document.createElement('div');
    x.className='hs';
    x.style.left=pt.x+'px';
    x.style.top=pt.y+'px';
    x.innerHTML='<i>'+e+'</i>'+t;
    cv.appendChild(x)
  };
  hs(P[0],'🏡','بيت الأب');
  hs(P[N+1],'🏠','بيت العروس');
  D.forEach((s,n)=> {
    const e=document.createElement('div');e.className='st';e.style.left=P[n+1].x+'px';e.style.top=P[n+1].y+'px';   e.innerHTML='<div class="c"><span class="n">'+(n+1)+'</span>'+(IMG[n].startsWith("assets")?'<img src="'+IMG[n]+'">':'<span class="em">'+IMG[n]+'</span>')+'</div><div class="l">'+s[0]+'</div>';   e.onclick=ev=> {
      ev.stopPropagation();go(n)
    };cv.appendChild(e)
  });
  show(true)
}
