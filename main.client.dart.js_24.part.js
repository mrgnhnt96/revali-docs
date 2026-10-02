((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,F,G,H,K,A={
bQ(d){var x=$.o0.k(0,d)
if(x==null){x=new A.fu(d,B.e([],y.C))
$.o0.i(0,d,x)}return x},
fv:function fv(d,e){this.a=d
this.b=e},
dD:function dD(d,e){this.c=d
this.a=e},
hQ:function hQ(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
bl:function bl(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.z=f
_.d=$
_.c=_.b=_.a=null},
fu:function fu(d,e){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=!0},
iY:function iY(){},
iB:function iB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.a=h},
jf:function jf(d,e){this.a=d
this.b=e},
h_:function h_(d,e){this.c=d
this.a=e},
hB:function hB(d,e){this.c=d
this.a=e},
rZ(){return new A.bI(null)},
bI:function bI(d){this.a=d},
hE:function hE(){this.d=!1
this.c=this.a=null},
ky:function ky(d){this.a=d},
kx:function kx(d){this.a=d},
ru(d){var x,w,v=y.w,u=B.F(v,v)
for(x=0;x<B.Z(d.length);++x){w=B.v(d.item(x))
u.i(0,B.q(w.name),B.q(w.value))}return u}},E,L,M,I,D
B=c[0]
C=c[2]
F=c[11]
G=c[21]
H=c[18]
K=c[19]
A=a.updateHolder(c[7],A)
E=c[27]
L=c[20]
M=c[22]
I=c[10]
D=c[15]
A.fv.prototype={
aB(){return"AttachTarget."+this.b}}
A.dD.prototype={
ab(){var x=B.cl(y.b),w=($.a2+1)%16777215
$.a2=w
return new A.hQ(null,!1,!1,x,w,this,C.f)}}
A.hQ.prototype={
aN(){var x=this.f
x.toString
y.h.a(x)
return E.at},
an(){var x,w,v=this.f
v.toString
y.h.a(v)
x=this.e
x.toString
x=new A.bl(B.e([],y.k),E.u,x)
x.bG("")
w=A.bQ(x.x)
C.b.m(w.f,x)
w.r=!0
x.seh(v.c)
return x},
ae(d){var x
y.n.a(d)
x=this.f
x.toString
y.h.a(x)
d.sil(E.u)
d.seh(x.c)},
bf(){var x,w
this.dh()
x=this.d$
x.toString
y.n.a(x)
w=this.e
w.toString
x.shz(w)},
aD(){var x,w
this.f4()
x=this.d$
x.toString
y.n.a(x)
w=A.bQ(x.x)
C.b.J(w.f,x)
w.b_()}}
A.bl.prototype={
sil(d){var x=this,w=x.x
if(w===d)return
w=A.bQ(w)
C.b.J(w.f,x)
w.b_()
x.x=d
w=A.bQ(d)
C.b.m(w.f,x)
w.r=!0
A.bQ(x.x).b_()},
seh(d){y.f.a(d)
if(this.y===d)return
this.y=d
A.bQ(this.x).b_()},
shz(d){if(this.z===d)return
this.z=d
A.bQ(this.x).eH(!0)},
au(d,e){var x,w,v,u,t=this
d.a=t
try{x=d.gO()
w=e==null?null:e.gO()
if(w==null&&C.b.C(t.w,x))return
if(w!=null&&!C.b.C(t.w,w))w=null
v=t.w
C.b.J(v,x)
u=w!=null?C.b.ah(v,w)+1:0
C.b.eq(v,u,x)
A.bQ(t.x).b_()}finally{d.ao()}},
J(d,e){C.b.J(this.w,e.gO())
e.a=null
A.bQ(this.x).b_()}}
A.fu.prototype={
gel(){var x,w=this,v=w.b
if(v===$){x=B.v(B.h(b.G.document).querySelector(w.a.b))
x.toString
w.b!==$&&B.fl()
w.b=x
v=x}return v},
eH(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(d||m.r){C.b.ag(m.f,new A.iY())
m.r=!1}x=m.c
if(x===$){w=A.ru(B.h(m.gel().attributes))
m.c!==$&&B.fl()
m.c=w
x=w}for(v=m.f,u=v.length,t=0;t<v.length;v.length===u||(0,B.ar)(v),++t){s=v[t].y
if(s!=null)x.G(0,s)}r=B.nd(y.w)
for(q=0;v=m.gel(),q<B.Z(B.h(v.attributes).length);++q)r.m(0,B.q(B.v(B.h(v.attributes).item(q)).name))
if(x.a!==0)for(u=new B.aJ(x,B.i(x).h("aJ<1,2>")).gu(0);u.n();){p=u.d
o=p.a
B.fw(v,o,p.b)
r.J(0,o)}if(r.a!==0)for(u=B.oK(r,r.r,r.$ti.c),o=u.$ti.c;u.n();){n=u.d
if(n==null)n=o.a(n)
v.removeAttribute(n)}},
b_(){return this.eH(!1)}}
A.iB.prototype={
F(d){var x=this,w=null,v=y.w
v=B.F(v,v)
v.i(0,"cx",x.c)
v.i(0,"cy",x.d)
v.i(0,"r",x.e)
return new B.V("circle",w,w,w,v,w,x.at,w)}}
A.jf.prototype={
aB(){return"Display."+this.b}}
A.h_.prototype={
F(d){var x=y.F
return new I.cC(this.c,B.e([D.bj(B.e([],x),"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z")],x),null)}}
A.hB.prototype={
F(d){var x=y.F
return new I.cC(this.c,B.e([new A.iB("12","12","4",B.e([],x),null),D.bj(B.e([],x),"M12 4h.01"),D.bj(B.e([],x),"M20 12h.01"),D.bj(B.e([],x),"M12 20h.01"),D.bj(B.e([],x),"M4 12h.01"),D.bj(B.e([],x),"M17.657 6.343h.01"),D.bj(B.e([],x),"M17.657 17.657h.01"),D.bj(B.e([],x),"M6.343 17.657h.01"),D.bj(B.e([],x),"M6.343 6.343h.01")],x),null)}}
A.bI.prototype={
aQ(){return new A.hE()}}
A.hE.prototype={
aT(){this.by()
this.d=B.ao(B.v(B.h(b.G.document).documentElement).getAttribute("data-theme"))==="dark"},
F(d){var x,w=this,v=null,u=y.F,t=B.e([],u),s=w.d?"dark":"light",r=y.w
t.push(new A.dD(B.ai(["data-theme",s],r,r),v))
r=B.ai(["aria-label","Theme Toggle"],r,r)
s=F.lC(w.d?E.z:v,v,v,v,v,v,v)
s=H.b4(B.e([new A.h_(20,v)],u),v,s)
x=F.lC(w.d?v:E.z,v,v,v,v,v,v)
t.push(L.iA(B.e([s,H.b4(B.e([new A.hB(20,v)],u),v,x)],u),r,"theme-toggle",v,new A.ky(w),v))
return new K.bU(t,v)}}
var z=a.updateTypes(["d(bl,bl)"])
A.iY.prototype={
$2(d,e){var x=y.n
x.a(d)
x.a(e)
return d.z-e.z},
$S:z+0}
A.ky.prototype={
$0(){var x,w=this.a
w.X(new A.kx(w))
x=B.h(B.h(b.G.window).localStorage)
w=w.d?"dark":"light"
x.setItem("jaspr:theme",w)},
$S:0}
A.kx.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.cy,[A.fv,A.jf])
w(A.dD,B.k)
w(A.hQ,B.bY)
w(A.bl,B.dN)
w(A.fu,B.j)
w(A.iY,B.bn)
x(M.z,[A.iB,A.h_,A.hB])
w(A.bI,G.a9)
w(A.hE,G.Y)
x(B.aR,[A.ky,A.kx])})()
B.am(b.typeUniverse,JSON.parse('{"bl":{"aA":[],"nh":[],"c0":[]},"dD":{"k":[]},"hQ":{"al":[],"m":[],"a5":[]},"iB":{"z":[],"k":[]},"h_":{"z":[],"k":[]},"hB":{"z":[],"k":[]},"bI":{"a9":[],"k":[]},"hE":{"Y":["bI"],"Y.T":"bI"}}'))
var y={h:B.u("dD"),n:B.u("bl"),b:B.u("m"),C:B.u("t<bl>"),F:B.u("t<k>"),k:B.u("t<p>"),w:B.u("b"),f:B.u("w<b,b>?")};(function constants(){var x=a.makeConstList
E.u=new A.fv(0,"html")
E.z=new A.jf(0,"none")
E.at=x([],y.F)})();(function staticFields(){$.o0=B.F(B.u("fv"),B.u("fu"))})()};
(a=>{a["InaB7H52Ik1JVHwCXEySRA82qF8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_24.part.js.map
