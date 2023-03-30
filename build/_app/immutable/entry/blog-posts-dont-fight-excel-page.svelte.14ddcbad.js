import{S as _e,i as Ie,s as Ue,k as n,q as l,a as h,l as i,m as s,r as u,h as a,c,n as d,b as A,D as e,H as le}from"../chunks/index.ea893c82.js";function Te(Se){let p,F,D,f,L,H,t,y,W,Y,g,j,q,w,z,B,b,M,G,x,N,O,v,R,C,k,V,J,E,K,Q,S,X,Z,_,$,ee,I,te,oe,U,ae,re,T,ne,ie,P,se;return{c(){p=n("h1"),F=l("Don't Fight Excel - You Won't Win"),D=h(),f=n("h2"),L=l("Notes on building software for spreadsheet-dominated domains"),H=h(),t=n("div"),y=n("p"),W=l(`Microsoft Excel is arguably the most influential piece of business software ever written. At
		nearly 40 years old, Excel plays a crucial role in every industry. It is globally recognizable,
		extensible, shareable, and performant; yet, many software engineers would accuse you of being a
		Luddite for not switching to a SaaS solution for your business.`),Y=h(),g=n("p"),j=l(`There are reasons legacy industries like Insurance prefer the simple spreadsheet - and if you
		don’t account for them your product will be doomed from the get-go. At Shepherd, we’ve been
		building internal software for underwriting insurance products for almost two years and have
		learned plenty of lessons from Excel. Instead of fighting Excel, we’ve borrowed many of the
		powerful features our users love and integrated them into our platform. By making our platform
		explainable and extensible, and keeping the UI familiar, we’ve built an internal product our
		Underwriters are happy to use every day.`),q=h(),w=n("h2"),z=l("Lesson 1 - Explainability"),B=h(),b=n("p"),M=l(`Spreadsheets are inherently explainable. Formulas that drive calculations are visible, which
		allows the user to poke and prod the spreadsheet with an almost instant response. Building
		intuition for the expected behavior of your system is a key step in your user's journey to
		trusting it. Humans hate reading documentation, they like to click around and see what happens.`),G=h(),x=n("p"),N=l(`At Shepherd, we faced this problem when migrating actuarial models from spreadsheets into our
		platform. Traditionally for an Underwriter to price a deal they would enter their inputs into a
		spreadsheet with an actuarial model. Our platform hid those models in our backend and exposed
		forms as inputs. Though we could now validate inputs and test our models much more rigorously
		than we could have in Excel, the raw iteration time from an input change to pricing had
		increased. The added delay to this feedback loop made it harder for our Underwriting team to
		reason with the pricing logic.`),O=h(),v=n("p"),R=l(`To combat this, we started by prioritizing “time to pricing” as a key metric – measuring
		precisely how long it takes an underwriter to go from initial submission to initial output of
		premium to charge. Then we exposed the intermediate state of the pricing model to our
		Underwriters, allowing them to gain more insight from each input change. Speeding up this
		feedback loop led to massive increases in trust in the platform.`),C=h(),k=n("h2"),V=l("Lesson 2 - User Interface"),J=h(),E=n("p"),K=l(`Excel is just awesome when it comes to interacting with tabular data. Filtering, sorting, and
		pivoting are built in. Data visualization is easy — every chart imaginable is ready to go with a
		couple of clicks. If your users are migrating to your product from Excel, a simple HTML table
		won’t cut it. But trying to replicate all of the UI of Excel could take years. Paying for a
		feature-rich data grid solution is a worthwhile investment you can make early on. Products, such
		as Ag Grid and Handsontable, are excellent examples. Your engineers should focus on building
		your core product, not a performant data grid that struggles to get to parity with Excel.`),Q=h(),S=n("p"),X=l(`At Shepherd, we saw huge productivity gains from our underwriters when we moved to a data grid
		vendor. Regaining just a subset of Excel's UI functionality in our platform reduced the time of
		a common auto-exposure workflow by 33 percent.`),Z=h(),_=n("h2"),$=l("Lesson 3 - Extensibility"),ee=h(),I=n("p"),te=l(`Although a first-year analyst can rewrite an Excel workbook in one night - it is much harder to
		rebuild a software platform. Excel sticks around because it's easy to change. You can make a
		copy and completely rework your model for a single deal. When translating a business process
		from Excel to code be careful not to dig yourself into a rabbit hole of overly explicit schema
		and tightly coupled code. Double-check your user interviews - are you only building the most
		common use case? If your users have been using Excel for this process for the last 20 years,
		there are probably many outlier cases where the flexibility of Excel allows for easy one-off
		analysis. Your platform should be flexible enough so that it's not blindsided by a new
		requirement.`),oe=h(),U=n("p"),ae=l(`At Shepherd, we started by building the 80th percentile of use cases and expanded outward from
		there. We don’t overfit our code to the first set of requirements and we build in levers to let
		our users tweak the system. When interfacing with our pricing models, for example, our
		Underwriters can override some of the derived input pricing fields to quickly adapt to an edge
		case submission. The Underwriters know their common workflows and they can deviate from the
		happy path without needing to leave the Shepherd platform`),re=h(),T=n("h2"),ne=l("Final Thoughts"),ie=h(),P=n("p"),se=l(`Your relationship with Excel should be symbiotic, not competitive. Done correctly, Excel can be
		a massive asset to how you think about your SaaS solution. Spreadsheets are familiar to your
		users and copying their best features will lead to large productivity gains. Don’t make the
		mistake of building too much rigidity into your system, be adaptable - just like Excel. Finally,
		let your users know what's happening inside your platform. If your platform can’t do these
		things, there's a reason your users would rather stick to a spreadsheet. Don’t fight Excel: it’s
		a losing game.`),this.h()},l(r){p=i(r,"H1",{class:!0});var m=s(p);F=u(m,"Don't Fight Excel - You Won't Win"),m.forEach(a),D=c(r),f=i(r,"H2",{class:!0});var ue=s(f);L=u(ue,"Notes on building software for spreadsheet-dominated domains"),ue.forEach(a),H=c(r),t=i(r,"DIV",{class:!0});var o=s(t);y=i(o,"P",{class:!0});var de=s(y);W=u(de,`Microsoft Excel is arguably the most influential piece of business software ever written. At
		nearly 40 years old, Excel plays a crucial role in every industry. It is globally recognizable,
		extensible, shareable, and performant; yet, many software engineers would accuse you of being a
		Luddite for not switching to a SaaS solution for your business.`),de.forEach(a),Y=c(o),g=i(o,"P",{class:!0});var he=s(g);j=u(he,`There are reasons legacy industries like Insurance prefer the simple spreadsheet - and if you
		don’t account for them your product will be doomed from the get-go. At Shepherd, we’ve been
		building internal software for underwriting insurance products for almost two years and have
		learned plenty of lessons from Excel. Instead of fighting Excel, we’ve borrowed many of the
		powerful features our users love and integrated them into our platform. By making our platform
		explainable and extensible, and keeping the UI familiar, we’ve built an internal product our
		Underwriters are happy to use every day.`),he.forEach(a),q=c(o),w=i(o,"H2",{class:!0});var ce=s(w);z=u(ce,"Lesson 1 - Explainability"),ce.forEach(a),B=c(o),b=i(o,"P",{class:!0});var pe=s(b);M=u(pe,`Spreadsheets are inherently explainable. Formulas that drive calculations are visible, which
		allows the user to poke and prod the spreadsheet with an almost instant response. Building
		intuition for the expected behavior of your system is a key step in your user's journey to
		trusting it. Humans hate reading documentation, they like to click around and see what happens.`),pe.forEach(a),G=c(o),x=i(o,"P",{class:!0});var me=s(x);N=u(me,`At Shepherd, we faced this problem when migrating actuarial models from spreadsheets into our
		platform. Traditionally for an Underwriter to price a deal they would enter their inputs into a
		spreadsheet with an actuarial model. Our platform hid those models in our backend and exposed
		forms as inputs. Though we could now validate inputs and test our models much more rigorously
		than we could have in Excel, the raw iteration time from an input change to pricing had
		increased. The added delay to this feedback loop made it harder for our Underwriting team to
		reason with the pricing logic.`),me.forEach(a),O=c(o),v=i(o,"P",{class:!0});var fe=s(v);R=u(fe,`To combat this, we started by prioritizing “time to pricing” as a key metric – measuring
		precisely how long it takes an underwriter to go from initial submission to initial output of
		premium to charge. Then we exposed the intermediate state of the pricing model to our
		Underwriters, allowing them to gain more insight from each input change. Speeding up this
		feedback loop led to massive increases in trust in the platform.`),fe.forEach(a),C=c(o),k=i(o,"H2",{class:!0});var ye=s(k);V=u(ye,"Lesson 2 - User Interface"),ye.forEach(a),J=c(o),E=i(o,"P",{class:!0});var ge=s(E);K=u(ge,`Excel is just awesome when it comes to interacting with tabular data. Filtering, sorting, and
		pivoting are built in. Data visualization is easy — every chart imaginable is ready to go with a
		couple of clicks. If your users are migrating to your product from Excel, a simple HTML table
		won’t cut it. But trying to replicate all of the UI of Excel could take years. Paying for a
		feature-rich data grid solution is a worthwhile investment you can make early on. Products, such
		as Ag Grid and Handsontable, are excellent examples. Your engineers should focus on building
		your core product, not a performant data grid that struggles to get to parity with Excel.`),ge.forEach(a),Q=c(o),S=i(o,"P",{class:!0});var we=s(S);X=u(we,`At Shepherd, we saw huge productivity gains from our underwriters when we moved to a data grid
		vendor. Regaining just a subset of Excel's UI functionality in our platform reduced the time of
		a common auto-exposure workflow by 33 percent.`),we.forEach(a),Z=c(o),_=i(o,"H2",{class:!0});var be=s(_);$=u(be,"Lesson 3 - Extensibility"),be.forEach(a),ee=c(o),I=i(o,"P",{class:!0});var xe=s(I);te=u(xe,`Although a first-year analyst can rewrite an Excel workbook in one night - it is much harder to
		rebuild a software platform. Excel sticks around because it's easy to change. You can make a
		copy and completely rework your model for a single deal. When translating a business process
		from Excel to code be careful not to dig yourself into a rabbit hole of overly explicit schema
		and tightly coupled code. Double-check your user interviews - are you only building the most
		common use case? If your users have been using Excel for this process for the last 20 years,
		there are probably many outlier cases where the flexibility of Excel allows for easy one-off
		analysis. Your platform should be flexible enough so that it's not blindsided by a new
		requirement.`),xe.forEach(a),oe=c(o),U=i(o,"P",{class:!0});var ve=s(U);ae=u(ve,`At Shepherd, we started by building the 80th percentile of use cases and expanded outward from
		there. We don’t overfit our code to the first set of requirements and we build in levers to let
		our users tweak the system. When interfacing with our pricing models, for example, our
		Underwriters can override some of the derived input pricing fields to quickly adapt to an edge
		case submission. The Underwriters know their common workflows and they can deviate from the
		happy path without needing to leave the Shepherd platform`),ve.forEach(a),re=c(o),T=i(o,"H2",{class:!0});var ke=s(T);ne=u(ke,"Final Thoughts"),ke.forEach(a),ie=c(o),P=i(o,"P",{});var Ee=s(P);se=u(Ee,`Your relationship with Excel should be symbiotic, not competitive. Done correctly, Excel can be
		a massive asset to how you think about your SaaS solution. Spreadsheets are familiar to your
		users and copying their best features will lead to large productivity gains. Don’t make the
		mistake of building too much rigidity into your system, be adaptable - just like Excel. Finally,
		let your users know what's happening inside your platform. If your platform can’t do these
		things, there's a reason your users would rather stick to a spreadsheet. Don’t fight Excel: it’s
		a losing game.`),Ee.forEach(a),o.forEach(a),this.h()},h(){d(p,"class","text-4xl mb-2 text-amber-600 font-extrabold font-serif"),d(f,"class","text-xl text-slate-700 font-semibold mb-2"),d(y,"class","mb-2 "),d(g,"class","mb-4"),d(w,"class","text-xl text-slate-700 font-semibold mb-2"),d(b,"class","mb-2"),d(x,"class","mb-2"),d(v,"class","mb-4"),d(k,"class","text-xl text-slate-700 font-semibold mb-2"),d(E,"class","mb-2"),d(S,"class","mb-4"),d(_,"class","text-xl text-slate-700 font-semibold mb-2"),d(I,"class","mb-2"),d(U,"class","mb-4"),d(T,"class","text-xl text-slate-700 font-semibold mb-2"),d(t,"class","leading-7 text-slate-700 font-extralight text-lg")},m(r,m){A(r,p,m),e(p,F),A(r,D,m),A(r,f,m),e(f,L),A(r,H,m),A(r,t,m),e(t,y),e(y,W),e(t,Y),e(t,g),e(g,j),e(t,q),e(t,w),e(w,z),e(t,B),e(t,b),e(b,M),e(t,G),e(t,x),e(x,N),e(t,O),e(t,v),e(v,R),e(t,C),e(t,k),e(k,V),e(t,J),e(t,E),e(E,K),e(t,Q),e(t,S),e(S,X),e(t,Z),e(t,_),e(_,$),e(t,ee),e(t,I),e(I,te),e(t,oe),e(t,U),e(U,ae),e(t,re),e(t,T),e(T,ne),e(t,ie),e(t,P),e(P,se)},p:le,i:le,o:le,d(r){r&&a(p),r&&a(D),r&&a(f),r&&a(H),r&&a(t)}}}class Ae extends _e{constructor(p){super(),Ie(this,p,null,Te,Ue,{})}}export{Ae as default};
