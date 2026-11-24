((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bql(d,e){var x=0,w=A.t(y.f),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j
var $async$bql=A.u(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=b.G
o=new p.Blob(A.b([d],y.l),{type:"application/pdf"})
n=y.k
m={files:A.b([new p.File(A.b([o],n),e,{type:"application/pdf"})],n)}
l=p.window.navigator
k=null
try{k=l.canShare(m)}catch(i){k=!1}x=k?3:4
break
case 3:u=6
x=9
return A.h(A.hz(l.share(m),y.a),$async$bql)
case 9:x=1
break
u=2
x=8
break
case 6:u=5
j=t.pop()
x=1
break
x=8
break
case 5:x=2
break
case 8:case 4:r=p.URL.createObjectURL(o)
q=p.document.createElement("a")
q.href=r
q.download=e
q.click()
p.URL.revokeObjectURL(r)
case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$bql,w)},
Ze(d,e){var x=0,w=A.t(y.f),v,u,t,s
var $async$Ze=A.u(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:t=e.x
if(t.a===0)t=e.giz()
v=e.c
u=e.z
u=u!=null?"Pagamento recebido em "+A.cC(u)+".":"Pagamento recebido."
s=B
x=3
return A.h(C.bKi(d,e.e,v,u,t).ju(),$async$Ze)
case 3:x=2
return A.h(s.bql(g,"Recibo parcela "+v+".pdf"),$async$Ze)
case 2:return A.q(null,w)}})
return A.r($async$Ze,w)}}
A=c[0]
C=c[5]
B=a.updateHolder(c[4],B)
var z=a.updateTypes([])
var y={k:A.ah("y<bM>"),l:A.ah("y<oA>"),a:A.ah("A?"),f:A.ah("~")}};
(a=>{a["K86ivrw3IuKXvyjAUyP2U9Imuxo="]=a.current})($__dart_deferred_initializers__);