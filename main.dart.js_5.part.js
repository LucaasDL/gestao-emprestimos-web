((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
boa(d,e){var x=0,w=A.u(y.f),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j
var $async$boa=A.v(function(f,g){if(f===1){t.push(g)
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
return A.h(A.hu(l.share(m),y.a),$async$boa)
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
case 1:return A.r(v,w)
case 2:return A.q(t.at(-1),w)}})
return A.t($async$boa,w)},
YI(d,e){var x=0,w=A.u(y.f),v,u,t,s
var $async$YI=A.v(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:t=e.x
if(t.a===0)t=e.giu()
v=e.c
u=e.z
u=u!=null?"Pagamento recebido em "+A.cF(u)+".":"Pagamento recebido."
s=B
x=3
return A.h(C.bHM(d,e.e,v,u,t).jo(),$async$YI)
case 3:x=2
return A.h(s.boa(g,"Recibo parcela "+v+".pdf"),$async$YI)
case 2:return A.r(null,w)}})
return A.t($async$YI,w)}}
A=c[0]
C=c[5]
B=a.updateHolder(c[4],B)
var z=a.updateTypes([])
var y={k:A.ah("A<bK>"),l:A.ah("A<or>"),a:A.ah("y?"),f:A.ah("~")}};
(a=>{a["wx0ri8jFA2ezOQ3D4fGUUseCW5I="]=a.current})($__dart_deferred_initializers__);