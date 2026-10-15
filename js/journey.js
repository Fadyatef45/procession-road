// ==== حركة العريس ولوحة الطقس والآية ====
function show(inst) {
  const g=$('gr'),pt=cur<0?P[0]:P[cur+1],r=cur<0?0:Number(getComputedStyle(cv).getPropertyValue('--d').replace('px',''))/2+26;
  g.style.transition=inst?'none':'';
  g.style.left=pt.x+'px';
  g.style.top=(pt.y-r+(cur<0?30:0))+'px';
  g.classList.remove('go');
  void g.offsetWidth;
  if(!inst)g.classList.add('go');
  cv.querySelectorAll('.st').forEach((e,n)=> {
    e.classList.toggle('vis',n<=cur);e.classList.toggle('cur',n==cur)
  });
  sc.scrollTo({left:pt.x-sc.clientWidth/2,behavior:inst?'auto':'smooth'});
  const pn=$('pn');
  if(cur<0) {
    pn.className='one';
    pn.innerHTML='<div class="hint">🏡 العريس في بيت أبيه... اضغط لينطلق الموكب</div>';
    return
  }
  const d=D[cur];
  pn.className=d[6]?'two':'';
  const v2=d[6]?'<div class="v" id="vv2">'+(d[5]?'<b>'+d[5]+'</b>':'')+d[6]+'</div>':'';
  pn.innerHTML='<div><div class="t">'+(cur+1)+'. '+d[0]+'<small>'+d[1]+'</small></div><div class="rit">'+d[2]+'</div></div><div class="vs"><div class="v" id="vv"><b>'+d[3]+'</b>'+d[4]+'</div>'+v2+'</div>';
}
// ضغطة بعد ضغطة: الآية الأولى، ثم الآية الثانية (لو موجودة)، ثم المحطة اللي بعدها
function adv() {
  const v=$('vv'),v2=$('vv2');
  if(cur>=0&&v&&!v.classList.contains('on'))v.classList.add('on');
  else if(v2&&!v2.classList.contains('on'))v2.classList.add('on');
  else go(cur+1)
}
