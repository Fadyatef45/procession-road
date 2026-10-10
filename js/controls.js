// ==== التحكم: الضغط والأزرار والكيبورد ====
function go(n) {
  cur=Math.max(-1,Math.min(N-1,n));
  show(false)
}
document.body.onclick=e=> {
  if(!e.target.closest('button'))adv()
};
$('nx').onclick=adv;
$('pv').onclick=()=>go(cur-1);
document.onkeydown=e=> {
  if(e.key=='ArrowLeft'||e.key==' '||e.key=='Enter') {
    e.preventDefault();
    adv()
  } else if(e.key=='ArrowRight')go(cur-1)
};
$('fs').onclick=()=> {
  try {
    document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()
  } catch(x){}
};
