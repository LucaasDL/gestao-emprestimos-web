((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var E,F,A={
bID(d,e,f,g,h){var x=null,w=B.bCw(),v=B.bwm("#6B3FA0"),u=B.bwm("#6E6E80"),t=B.bUj(!1,x,x,D.bbk.gafH(),x,x)
w.ab_(new B.EL(t,new A.bnA(v,d,h,f,e,g,u)))
return w},
byF(d,e,f,g,h){return A.bID(d,f,g,"Pagamento recebido em "+E.cA(e)+".",h).jp()},
bnA:function bnA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a8J:function a8J(d,e){this.a=d
this.b=e},
atY:function atY(){},
atX:function atX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0g:function a0g(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.b=j
_.a=null},
yy:function yy(){},
ab2:function ab2(d,e,f){var _=this
_.d=d
_.e=e
_.b=f
_.a=null}},D,B,C
E=c[0]
F=c[2]
A=a.updateHolder(c[5],A)
D=c[11]
B=c[7]
C=c[9]
A.a8J.prototype={}
A.atY.prototype={
j(d){var x,w,v,u=this,t="BorderRadius.only(",s=u.a,r=u.b
if(s===r){x=u.c
x=r===x&&x===u.d}else x=!1
if(x)if(s!==D.ne){r=s.a
w=r===s.b?"BorderRadius.circular("+F.p.ah(r,1)+")":"BorderRadius.all("+s.j(0)+")"}else w=null
else{v=s!==D.ne
s=v?t+("topLeft: "+s.j(0)):t
if(r!==D.ne){if(v)s+=", "
r=s+("topRight: "+r.j(0))
s=r
v=!0}r=u.c
if(r!==D.ne){if(v)s+=", "
r=s+("bottomLeft: "+r.j(0))
s=r
v=!0}r=u.d
if(r!==D.ne){if(v)s+=", "
r=s+("bottomRight: "+r.j(0))
s=r}s+=")"
w=s.charCodeAt(0)==0?s:s}if(w!=null)return w
return"BorderRadius.zero"}}
A.atX.prototype={
aO(d,e){var x,w,v,u,t=this,s=d.b,r=e.a,q=e.b,p=t.c,o=p.b,n=q+o
s.lp(r,n)
p=p.a
s.t7(r,q-0.551784*o+o,r-0.551784*p+p,q,r+p,q)
p=e.c
o=r+p
x=t.d
w=x.a
s.kj(o-w,q)
x=x.b
s.t7(r+0.551784*w+p-w,q,o,q-0.551784*x+x,o,q+x)
x=e.d
w=q+x
v=t.b
u=v.b
s.kj(o,w-u)
v=v.a
s.t7(o,q+0.551784*u+x-u,r+0.551784*v+p-v,w,o-v,w)
v=t.a
o=v.a
s.kj(r+o,w)
v=v.b
s.t7(r-0.551784*o+o,w,r,q+0.551784*v+x-v,r,w-v)
s.kj(r,n)},
Z(d){return this}}
A.a0g.prototype={}
A.yy.prototype={
i8(d){this.o2(d)
this.Mz(d)}}
A.ab2.prototype={}
var z=a.updateTypes(["Dh(lK)"])
A.bnA.prototype={
$1(d){var x=this,w=null,v=x.a,u=new B.Kl(v,2,C.jy),t=new A.a8J(12,12)
t=B.bBy(new B.Ki(u,u,u,u),new A.atX(t,t,t,t),w)
u=x.r
return B.buZ(w,new A.a0g(C.o1,C.b6q,C.Cz,C.GA,C.Es,new B.Mc(),E.b([B.qt("RECIBO DE PAGAMENTO",B.AO(w,v,w,w,w,w,w,w,w,C.fs,w,w,18,w,C.fk,w,!0,w,w,w,w),w,w),new B.mm(w,20,w),B.qt("Recebemos de "+x.b+" a quantia de",D.a79,w,w),new B.mm(w,8,w),B.qt($.aX().U(x.c.a/100),B.AO(w,w,w,w,w,w,w,w,w,C.fs,w,w,26,w,C.fk,w,!0,w,w,w,w),w,w),new B.mm(w,8,w),B.qt("referente \xe0 parcela "+x.d+", com vencimento em "+E.cA(x.e)+".",D.a79,w,w),new B.mm(w,4,w),B.qt(x.f,B.AO(w,u,w,w,w,w,w,w,w,C.fs,w,w,11,w,w,w,!0,w,w,w,w),w,w),new A.ab2(1,C.ah5,new B.mm(0,0,w)),B.qt("Emitido em "+E.cA(new E.W(Date.now(),0,!1)),B.AO(w,u,w,w,w,w,w,w,w,C.fs,w,w,10,w,w,w,!0,w,w,w,w),w,w)],y.a)),w,t,D.ags)},
$S:z+0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.bnA,E.mN)
w(E.A,[A.a8J,A.atY])
x(A.atX,A.atY)
x(A.a0g,B.Mb)
x(A.yy,B.Qc)
x(A.ab2,A.yy)})()
E.apm(b.typeUniverse,JSON.parse('{"a0g":{"fB":[],"eY":[]},"yy":{"fB":[],"eY":[]},"ab2":{"yy":[],"fB":[],"eY":[]}}'))
var y={a:E.ag("y<eY>")};(function constants(){D.ags=new B.o6(24,24,24,24)
D.bbk=new E.vC(419.5275590551181,595.275590551181,56.69291338582677,56.69291338582677,56.69291338582677,56.69291338582677)
D.ne=new A.a8J(0,0)
D.a79=new B.wn(!0,null,null,null,null,null,C.fs,12,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["jbZmMZ/eZzPr3YDvWRPC2C9gf+s="]=a.current})($__dart_deferred_initializers__);