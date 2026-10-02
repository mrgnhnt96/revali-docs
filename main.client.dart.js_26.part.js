((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,F,I,E,M,G,B={
rf(d,e,f){return new B.cS(d,e,f.h("cS<0>"))},
cm:function cm(d,e,f){this.a=d
this.b=e
this.$ti=f},
cS:function cS(d,e,f){this.a=d
this.b=e
this.$ti=f},
cn:function cn(d,e,f){var _=this
_.a=d
_.b=e
_.c=-1
_.$ti=f},
pj(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
iP:function iP(d,e,f){this.d=d
this.w=e
this.a=f},
iI:function iI(d,e){this.x=d
this.a=e},
fi:function fi(d,e,f,g,h,i,j){var _=this
_.c=d
_.x=e
_.z=f
_.at=g
_.ax=h
_.a=i
_.$ti=j},
iE:function iE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
iN:function iN(d,e){this.w=d
this.a=e},
r1(){return new B.bz(null)},
t8(d){var w
if(d!=null){w=B.oc(d,"HTMLElement")
w=!w}else w=!0
if(w)return!1
return A.aN(d.isContentEditable)||A.q(d.tagName)==="INPUT"||A.q(d.tagName)==="TEXTAREA"||A.q(d.tagName)==="SELECT"},
pm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.length===0)return A.e([new A.Q(d,i)],x.i)
w=d.toLowerCase()
v=d.length
u=A.av(v,!1,!1,x.y)
for(t=e.length,s=0;s<e.length;e.length===t||(0,A.ar)(e),++s){r=e[s]
for(q=r.length,p=0;;){o=C.a.ac(w,r,p)
if(o<0)break
p=o+q
C.b.cS(u,o,p,!0)}}t=x.i
n=A.e([],t)
for(m=0;m<v;m=k){if(!(m>=0))return A.c(u,m)
l=u[m]
k=m
for(;;){if(!(k<v&&u[k]===l))break;++k}j=C.a.p(d,m,k)
C.b.m(n,l?new A.V("mark",i,i,i,i,i,A.e([new A.Q(j,i)],t),i):new A.Q(j,i))}return n},
bz:function bz(d){this.a=d},
eA:function eA(d){var _=this
_.d=null
_.r=_.f=_.e=!1
_.w=null
_.x=""
_.y=0
_.z=!0
_.Q=null
_.as=d
_.c=_.a=null},
l7:function l7(d){this.a=d},
l8:function l8(d){this.a=d},
l6:function l6(d){this.a=d},
kZ:function kZ(d){this.a=d},
l2:function l2(d){this.a=d},
l3:function l3(d,e){this.a=d
this.b=e},
l4:function l4(d,e){this.a=d
this.b=e},
lb:function lb(d,e,f){this.a=d
this.b=e
this.c=f},
l5:function l5(d,e){this.a=d
this.b=e},
lc:function lc(){},
l_:function l_(d){this.a=d},
l0:function l0(d){this.a=d},
l1:function l1(d){this.a=d},
la:function la(d,e){this.a=d
this.b=e},
l9:function l9(d,e){this.a=d
this.b=e},
q4(d){var w=C.a.bw(d.toLowerCase(),A.X("\\s+")),v=A.M(w),u=v.h("bc<1>")
w=A.aC(new A.bc(w,v.h("J(1)").a(new B.mZ()),u),u.h("f.E"))
return w},
vz(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=B.q4(b5)
if(b3.length===0)return H.p
w=C.a.dd(b5).toLowerCase()
v=x.m
u=A.e([],v)
for(t=b4.length,s=x.w,r=x.B,q=0;q<b4.length;b4.length===t||(0,A.ar)(b4),++q){p=b4[q]
o=p.b
n=o.toLowerCase()
m=p.c.toLowerCase()
l=p.d
k=l.toLowerCase()
j=p.a
i=j.toLowerCase()
h=A.e([],v)
for(g=p.e,f=g.length,e=j+"#",d=n==="overview",a0=0;a0<g.length;g.length===f||(0,A.ar)(g),++a0){a1=g[a0]
a2=a1.a
a3=a2==null
a4=a3?null:a2.toLowerCase()
if(a4==null)a4=""
a5=a1.c
a6=a5.toLowerCase()
a8=b3.length
a9=0
b0=0
for(;;){if(!(b0<a8)){a7=!0
break}b1=b3[b0]
if(C.a.C(n,b1))b2=C.a.E(n,b1)?46:30
else b2=0
if(C.a.C(a4,b1))b2+=18
if(C.a.C(m,b1))b2+=10
if(C.a.C(i,b1))b2+=8
if(C.a.C(a6,b1))b2+=6
if(C.a.C(k,b1))b2+=4
if(b2===0){a7=!1
break}a9+=b2;++b0}if(!a7)continue
if(C.a.E(n,w))a9+=70
if(C.a.C(n,w))a9+=40
if(C.a.C(a4,w))a9+=20
if(C.a.C(a6,w))a9+=12
if(a3)a9+=14
if(d)a9-=12
a3=a1.b
a3=a3==null?j:e+a3
C.b.m(h,new B.bu(a3,o,l,a2,B.vB(a5,b3),a9))}if(h.length===0)continue
C.b.ag(h,new B.mX())
o=new A.bG(h,0,3,r)
o.dr(h,0,3,s)
C.b.G(u,o)}C.b.ag(u,new B.mY())
return A.d8(u,0,A.fg(24,"count",x.S),s).c9(0)},
vB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=d.length
if(l===0)return""
w=d.toLowerCase()
for(v=e.length,u=-1,t=0;t<v;++t){s=C.a.ah(w,e[t])
if(s>=0)r=u<0||s<u
else r=!1
if(r)u=s}if(u<0)u=0
q=u-60
if(q<0)q=0
if(q>0){p=C.a.ac(d," ",q)
if(p>=0&&p<u)q=p+1}o=q+190
if(o>l)o=l
n=q>0?"\u2026":""
m=o<l?"\u2026":""
return n+C.a.dd(C.a.p(d,q,o))+m},
rP(d){var w,v,u,t,s,r,q,p,o,n=d.k(0,"u")
n.toString
A.q(n)
w=d.k(0,"t")
w.toString
A.q(w)
v=A.ao(d.k(0,"d"))
if(v==null)v=""
u=A.ao(d.k(0,"g"))
if(u==null)u=""
t=A.e([],x.O)
s=d.k(0,"s")
s.toString
s=J.at(x.j.a(s))
r=x.f
while(s.n()){q=r.a(s.gq())
p=A.ao(q.k(0,"h"))
o=A.ao(q.k(0,"a"))
q=A.ao(q.k(0,"b"))
t.push(new B.hm(p,o,q==null?"":q))}return new B.hl(n,w,v,u,t)},
mZ:function mZ(){},
mX:function mX(){},
mY:function mY(){},
hl:function hl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hm:function hm(d,e,f){this.a=d
this.b=e
this.c=f},
bu:function bu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oc(d,e){var w,v,u,t,s
if(e.length===0)return!1
w=e.split(".")
v=b.G
for(u=w.length,t=0;t<u;++t,v=s){s=v[w[t]]
A.v(s)
if(s==null)return!1}return d instanceof x.g.a(v)}},H,K,L,N
J=c[1]
A=c[0]
C=c[2]
D=c[16]
F=c[12]
I=c[21]
E=c[18]
M=c[19]
G=c[13]
B=a.updateHolder(c[8],B)
H=c[28]
K=c[20]
L=c[22]
N=c[29]
B.cm.prototype={
gl(d){return J.aQ(this.a)},
gW(d){return J.iU(this.a)},
M(d,e){return new A.cF(e+this.b,J.fo(this.a,e))},
C(d,e){return!1},
a2(d,e){A.dC(e,"count",x.S)
A.au(e,"count")
return new B.cm(J.dB(this.a,e),e+this.b,A.i(this).h("cm<1>"))},
gu(d){return new B.cn(J.at(this.a),this.b,A.i(this).h("cn<1>"))}}
B.cS.prototype={
C(d,e){return!1},
a2(d,e){A.dC(e,"count",x.S)
A.au(e,"count")
return new B.cS(J.dB(this.a,e),this.b+e,this.$ti)},
$io:1}
B.cn.prototype={
n(){if(++this.c>=0&&this.a.n())return!0
this.c=-2
return!1},
gq(){var w=this.c
return w>=0?new A.cF(this.b+w,this.a.gq()):A.K(A.cW())},
$iA:1}
B.iP.prototype={
F(d){var w=null
return new A.V("ul",w,this.d,w,w,w,this.w,w)}}
B.iI.prototype={
F(d){var w=null,v=x.N
return new A.V("li",w,w,w,A.F(v,v),w,this.x,w)}}
B.fi.prototype={
F(d){var w,v=this,u=null,t=x.N,s=A.F(t,t)
s.G(0,v.at)
s.i(0,"type",v.c.c)
w=B.pj(u)
if(w!=null)s.i(0,"checked",w)
w=B.pj(u)
if(w!=null)s.i(0,"indeterminate",w)
t=A.F(t,x.v)
t.G(0,v.ax)
t.G(0,L.nG().$1$2$onChange$onInput(u,v.x,v.$ti.c))
return new A.V("input",v.z,u,u,s,t,u,u)}}
B.iE.prototype={
F(d){var w=this,v=x.N
v=A.F(v,v)
v.G(0,w.r)
if(w.c)v.i(0,"open","")
return new A.V("dialog",w.d,w.e,null,v,w.w,w.x,null)}}
B.iN.prototype={
F(d){var w=null
return new A.V("strong",w,w,w,w,w,this.w,w)}}
B.bz.prototype={
aQ(){return new B.eA(H.p)}}
B.eA.prototype={
aT(){var w,v,u,t=this
t.by()
w=A.X("Mac|iPhone|iPad|iPod")
v=b.G
u=A.q(A.h(A.h(v.window).navigator).platform)
t.z=w.b.test(u)
t.d=A.df(A.h(v.window),"keydown",x.x.a(t.gfN()),!1,x.o)},
bW(){var w=this.d
if(w!=null)w.ak()
this.cF(!1)
this.dm()},
fO(d){var w,v,u=A.q(d.key).toLowerCase()
if(this.e){if(u==="escape"){d.preventDefault()
this.bD()}return}if(u==="k")w=A.aN(d.metaKey)||A.aN(d.ctrlKey)
else w=!1
v=A.q(d.key)==="/"&&!B.t8(A.v(d.target))
if(!w&&!v)return
d.preventDefault()
this.dU()},
dU(){var w,v=this
if(v.e)return
v.X(new B.l7(v))
v.cF(!0)
v.bb()
w=v.c.r
w.toString
C.b.m(w.b$,x.M.a(new B.l8(v)))},
bD(){var w,v=this
if(!v.e)return
w=A.v(A.h(b.G.document).getElementById("docs-search-dialog"))
if(w!=null)w.close()
v.X(new B.kZ(v))
v.cF(!1)},
cF(d){var w,v=A.v(A.h(b.G.document).documentElement)
if(v!=null){v=A.h(v.style)
w=d?"hidden":""
v.overflow=w}},
bb(){var w=0,v=A.b2(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$bb=A.b3(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.Q!=null||r.r){w=1
break}r.X(new B.l2(r))
t=4
w=7
return A.aw(F.iL(A.h(A.h(b.G.window).fetch(r.dX("search-index.json"))),x.o),$async$bb)
case 7:q=e
if(!A.aN(q.ok)){o=A.c2("HTTP "+A.n(A.cK(q,"status",x.S)))
throw A.a(o)}k=x.f
g=k
f=C.o
w=8
return A.aw(F.iL(A.h(q.text()),x.N),$async$bb)
case 8:p=g.a(f.bT(e,null))
o=A.e([],x.R)
j=J.nX(p,"docs")
j.toString
j=J.at(x.j.a(j))
while(j.n()){n=j.gq()
J.cN(o,B.rP(k.a(n)))}m=o
if(r.c==null){w=1
break}r.X(new B.l3(r,m))
r.dY(r.x)
t=2
w=6
break
case 4:t=3
h=s.pop()
l=A.a0(h)
if(r.c==null){w=1
break}r.X(new B.l4(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return A.b0(u,v)
case 2:return A.b_(s.at(-1),v)}})
return A.b1($async$bb,v)},
dX(d){var w=F.ep(A.q(A.h(b.G.document).baseURI))
return w.c7(C.a.E(d,"/")?C.a.N(d,1):d).j(0)},
dY(d){var w=this
w.x=d
w.X(new B.lb(w,w.Q,d))},
dP(d){var w=this
if(w.as.length===0)return
w.X(new B.l5(w,d))
w.h2()},
h2(){var w=this.c.r
w.toString
C.b.m(w.b$,x.M.a(new B.lc()))},
fU(){var w,v=this.y,u=this.as,t=u.length
if(v>=t)return
w=A.h(A.h(b.G.window).location)
if(!(v>=0))return A.c(u,v)
w.href=this.dX(u[v].a)},
fQ(d){var w
A.h(d)
w=B.oc(d,"KeyboardEvent")
if(!w)return
switch(A.q(d.key)){case"ArrowDown":d.preventDefault()
this.dP(1)
break
case"ArrowUp":d.preventDefault()
this.dP(-1)
break
case"Enter":d.preventDefault()
this.fU()
break}},
F(d){var w,v=this,u=null,t=x.i,s=A.e([],t),r=x.N
r=A.ai(["aria-label","Search the documentation","type","button"],r,r)
w=E.b4(A.e([new A.Q("Search",u)],t),"search-trigger-label",u)
s.push(K.iA(A.e([new G.bD(y.b,u),w,E.b4(A.e([new A.Q(v.z?"\u2318K":"Ctrl K",u)],t),"search-trigger-keys",u)],t),r,"search-trigger",u,v.gfT(),u))
if(v.e)s.push(v.fz())
return new M.bU(s,u)},
fz(){var w,v=this,u=null,t=v.f,s=x.N,r=A.ai(["aria-label","Search"],s,s),q=x.v,p=A.ai(["click",new B.l_(v),"cancel",new B.l0(v)],s,q),o=A.ai(["placeholder","Search the docs\u2026","autocomplete","off","spellcheck","false","aria-label","Search query"],s,s)
q=A.ai(["keydown",v.gfP()],s,q)
s=A.ai(["type","button","aria-label","Close search"],s,s)
w=x.i
return new B.iE(t,"docs-search-dialog","search-dialog",r,p,A.e([D.bx(A.e([D.bx(A.e([new G.bD(y.b,u),new B.fi(N.J,new B.l1(v),"docs-search-input",o,q,u,x.h),K.iA(A.e([new A.Q("Esc",u)],w),s,"search-dismiss",u,v.gfj(),u)],w),"search-field",u),D.bx(A.e([v.h_()],w),"search-results",u),D.bx(A.e([E.b4(A.e([new G.bD("<kbd>\u2191</kbd><kbd>\u2193</kbd> to navigate",u)],w),u,u),E.b4(A.e([new G.bD("<kbd>\u21b5</kbd> to open",u)],w),u,u),E.b4(A.e([new G.bD("<kbd>esc</kbd> to close",u)],w),u,u)],w),"search-footer",u)],w),"search-panel",u)],w),u)},
h_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="search-empty",a2=d.w
if(a2!=null)return D.bx(A.e([new A.Q(a2,a0)],x.i),a1,a0)
if(d.r&&d.Q==null)return D.bx(A.e([new A.Q("Loading search index\u2026",a0)],x.i),a1,a0)
w=d.x
if(C.a.dd(w).length===0){w=d.Q
w=w==null?a0:w.length
if(w==null)w=0
v=x.i
return D.bx(A.e([new A.Q("Search titles, headings and body text across all ",a0),new B.iN(A.e([new A.Q(""+w,a0)],v),a0),new A.Q(" pages.",a0)],v),a1,a0)}if(d.as.length===0){v=x.i
return D.bx(A.e([new A.Q("No matches for \u201c"+w+"\u201d. ",a0),E.b4(A.e([new A.Q("Every word has to match. Try fewer, or more common, words.",a0)],v),"search-hint",a0)],v),a1,a0)}u=B.q4(w)
w=x.i
v=A.e([],w)
for(t=B.rf(d.as,0,x.w),s=J.at(t.a),r=t.b,t=new B.cn(s,r,A.i(t).h("cn<1>")),q=x.F,p=x.N,o=x.v,n=b.G;t.n();){m={}
l=t.c
l=l>=0?new A.cF(r+l,s.gq()):A.K(A.cW())
m.a=null
k=l.a
m.a=k
j=l.b
l=j.a
i=F.ep(A.q(A.h(n.document).baseURI))
l=i.c7(C.a.E(l,"/")?C.a.N(l,1):l).j(0)
h=A.F(p,p)
if(k===d.y)h.i(0,"data-selected","true")
m=A.ai(["mouseenter",new B.la(m,d)],p,o)
g=A.e([],w)
f=j.c
if(f.length!==0)C.b.G(g,A.e([new E.cM(a0,a0,A.e([new A.Q(f,a0)],w),a0),new E.cM("search-hit-sep",a0,A.e([new A.Q("/",a0)],w),a0)],w))
f=j.b
g.push(new E.cM(a0,a0,A.e([new A.Q(f,a0)],w),a0))
e=j.d
f=A.aC(B.pm(e==null?f:e,u),q)
g=A.e([new D.cI("search-hit-crumb",a0,g,a0),new D.cI("search-hit-heading",a0,f,a0)],w)
f=j.e
if(f.length!==0){f=A.aC(B.pm(f,u),q)
g.push(new D.cI("search-hit-snippet",a0,f,a0))}v.push(new B.iI(A.e([new F.fd(l,a0,"search-hit",h,m,g,a0)],w),a0))}return new B.iP("search-hit-list",v,a0)}}
B.hl.prototype={}
B.hm.prototype={}
B.bu.prototype={}
var z=a.updateTypes(["~(p)","~()","d(bu,bu)"])
B.l7.prototype={
$0(){var w=this.a
w.e=!0
w.f=!1
w.y=0
w.x=""
w.as=H.p},
$S:0}
B.l8.prototype={
$0(){var w,v=b.G,u=A.v(A.h(v.document).getElementById("docs-search-dialog"))
if(u!=null&&!A.aN(u.open)){u.showModal()
w=this.a
w.X(new B.l6(w))}v=A.v(A.h(v.document).getElementById("docs-search-input"))
if(v!=null)v.focus()},
$S:0}
B.l6.prototype={
$0(){return this.a.f=!0},
$S:0}
B.kZ.prototype={
$0(){var w=this.a
w.f=w.e=!1},
$S:0}
B.l2.prototype={
$0(){var w=this.a
w.r=!0
w.w=null},
$S:0}
B.l3.prototype={
$0(){var w=this.a
w.Q=this.b
w.r=!1},
$S:0}
B.l4.prototype={
$0(){var w=this.a
w.r=!1
w.w="Could not load the search index ("+A.n(this.b)+")."},
$S:0}
B.lb.prototype={
$0(){var w,v=this.a
v.y=0
w=this.b
v.as=w==null?H.p:B.vz(w,this.c)},
$S:0}
B.l5.prototype={
$0(){var w=this.a
w.y=C.c.b3(w.y+this.b,w.as.length)},
$S:0}
B.lc.prototype={
$0(){var w,v=A.v(A.h(b.G.document).querySelector(".search-hit[data-selected]"))
if(v!=null){w=x.N
w=F.pU(A.ai(["block","nearest"],w,w))
w.toString
v.scrollIntoView(w)}},
$S:0}
B.l_.prototype={
$1(d){var w=A.v(A.h(d).target)
if((w==null?null:A.q(w.id))==="docs-search-dialog")this.a.bD()},
$S:1}
B.l0.prototype={
$1(d){A.h(d).preventDefault()
this.a.bD()},
$S:1}
B.l1.prototype={
$1(d){return this.a.dY(A.q(d))},
$S:7}
B.la.prototype={
$1(d){var w
A.h(d)
w=this.b
return w.X(new B.l9(this.a,w))},
$S:1}
B.l9.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
B.mZ.prototype={
$1(d){return A.q(d).length!==0},
$S:10}
B.mX.prototype={
$2(d,e){var w=x.w
w.a(d)
return C.c.U(w.a(e).f,d.f)},
$S:z+2}
B.mY.prototype={
$2(d,e){var w=x.w
w.a(d)
return C.c.U(w.a(e).f,d.f)},
$S:z+2};(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u
var u
w(u=B.eA.prototype,"gfN","fO",0)
v(u,"gfT","dU",1)
v(u,"gfj","bD",1)
w(u,"gfP","fQ",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.cm,A.f)
w(B.cS,B.cm)
v(A.j,[B.cn,B.hl,B.hm,B.bu])
v(L.z,[B.iP,B.iI,B.fi,B.iE,B.iN])
w(B.bz,I.a9)
w(B.eA,I.Y)
v(A.aR,[B.l7,B.l8,B.l6,B.kZ,B.l2,B.l3,B.l4,B.lb,B.l5,B.lc,B.l9])
v(A.a1,[B.l_,B.l0,B.l1,B.la,B.mZ])
v(A.bn,[B.mX,B.mY])})()
A.am(b.typeUniverse,JSON.parse('{"cm":{"f":["+(d,1)"],"f.E":"+(d,1)"},"cS":{"cm":["1"],"o":["+(d,1)"],"f":["+(d,1)"],"f.E":"+(d,1)"},"cn":{"A":["+(d,1)"]},"iP":{"z":[],"k":[]},"iI":{"z":[],"k":[]},"fi":{"z":[],"k":[]},"iE":{"z":[],"k":[]},"iN":{"z":[],"k":[]},"bz":{"a9":[],"k":[]},"eA":{"Y":["bz"],"Y.T":"bz"}}'))
var y={b:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'}
var x=(function rtii(){var w=A.u
return{F:w("k"),i:w("t<k>"),R:w("t<hl>"),m:w("t<bu>"),O:w("t<hm>"),o:w("p"),g:w("aU"),j:w("l<@>"),f:w("w<b,j?>"),w:w("bu"),N:w("b"),B:w("bG<bu>"),y:w("J"),h:w("fi<b>"),S:w("d"),x:w("~(p)?"),H:w("~"),M:w("~()"),v:w("~(p)")}})();(function constants(){var w=a.makeConstList
H.p=w([],x.m)})()};
(a=>{a["Tv/xdarv8JPUfMcqu4eTvFbIHUo="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_26.part.js.map
