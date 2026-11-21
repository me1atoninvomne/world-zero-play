import{$ as e,At as t,Bt as n,Et as r,Ft as i,I as a,It as o,J as s,L as c,Lt as l,Ot as u,Pt as d,Q as f,R as p,Rt as m,St as h,Tt as g,Vt as _,X as v,Y as y,_t as b,a as x,at as S,bt as ee,c as te,ct as ne,d as re,dt as ie,et as ae,ft as oe,g as C,gt as se,h as ce,ht as le,i as ue,it as de,jt as fe,kt as pe,lt as me,m as he,mt as ge,n as _e,nt as ve,o as w,ot as ye,p as be,pt as xe,r as Se,rt as Ce,s as T,st as we,t as Te,tt as E,u as Ee,ut as De,vt as Oe,wt as ke,x as Ae,xt as D,yt as O,z as k,zt as je}from"./index-DFTwIOTn.js";import{$ as A,A as Me,B as Ne,C as Pe,D as Fe,E as Ie,F as Le,G as Re,H as ze,I as Be,J as Ve,K as He,L as Ue,O as We,Q as Ge,R as Ke,S as qe,T as Je,X as Ye,Y as Xe,a as Ze,b as Qe,f as j,g as $e,j as M,k as N,l as P,q as et,s as tt,t as nt,u as rt,w as it,x as at,y as ot,z as st}from"./three-Dlb25Upi.js";import{a as ct,c as lt,i as ut,l as dt,n as ft,o as pt,r as F,s as mt,t as ht}from"./panels-CPTeLiyo.js";var I=81,gt=.02,_t=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,vt=e=>{let t=parseInt(e.slice(1),16);return[_t((t>>16&255)/255),_t((t>>8&255)/255),_t((t&255)/255)]},yt=D.map(e=>vt(h[e].color)),L=vt(`#7fd0ff`),bt=vt(`#1d5aa6`),xt=vt(`#d4f1ff`),St=D.indexOf(`lava`)+1,Ct=1;function wt(e,t,n){let r=n??{height:new Float32Array(I*I),wet:new Float32Array(I*I),color:new Float32Array(I*I*3),glow:new Float32Array(I*I),still:new Float32Array(I*I)};for(let n=0;n<I;n++)for(let i=0;i<I;i++){let a=n*I+i,o=0,s=0,c=0,l=1/0,u=0,d=0,f=0,p=0,m=0;for(let r=0;r<4;r++){let a=i-1+(r&1),h=n-1+(r>>1);if(a<0||h<0||a>=80||h>=80)continue;let g=h*80+a;o++;let _=t[g]===-1e9?0:t[g];_<l&&(l=_);let v=e.depth[g],y=e.kind[g];if(v<gt||!y)continue;s++,c+=_+v;let b,x,S;if(y===ee)b=xt[0],x=xt[1],S=xt[2],m++;else if(y===Ct){let e=Math.min(1,v/1.2);b=L[0]+(bt[0]-L[0])*e,x=L[1]+(bt[1]-L[1])*e,S=L[2]+(bt[2]-L[2])*e}else{let e=yt[y-1];b=e[0],x=e[1],S=e[2]}y===St&&p++,u+=b,d+=x,f+=S}r.wet[a]=s?Math.max(.5,s/o):0,r.height[a]=s?c/s:(l===1/0?0:l)-.05,r.color[a*3]=s?u/s:0,r.color[a*3+1]=s?d/s:0,r.color[a*3+2]=s?f/s:0,r.glow[a]=s?p/s:0,r.still[a]=s?m/s:0}return r}var Tt=.02,Et=48,Dt=D.indexOf(`lava`)+1,Ot=class{group=new qe;geo=new rt;surface;mat;time={value:0};data=null;box=new tt(1,1,1);snow;grid=null;version=-1;lavaCells=[];embers;emberLife=new Float32Array(Et);shown=0;lastBuild=-1e9;tmpPos=new A;tmpScale=new A;reduceMotion=!1;constructor(){let e=new Float32Array(I*I*3);for(let t=0;t<I;t++)for(let n=0;n<I;n++)e.set([-20+n*O,0,-20+t*O],(t*I+n)*3);let t=[];for(let e=0;e<80;e++)for(let n=0;n<80;n++){let r=e*I+n,i=r+1,a=r+I,o=a+1;t.push(r,a,i,i,a,o)}this.geo.setIndex(t),this.geo.setAttribute(`position`,new P(e,3)),this.geo.setAttribute(`color`,new P(new Float32Array(I*I*3),3)),this.geo.setAttribute(`info`,new P(new Float32Array(I*I*3),3)),this.geo.boundingSphere=new Ve(new A(0,0,0),40),this.mat=new M({vertexColors:!0,transparent:!0,opacity:.86,roughness:.12,metalness:.05,side:2,depthWrite:!1}),this.mat.onBeforeCompile=e=>{e.uniforms.time=this.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float time;
attribute vec3 info;
varying vec3 vInfo;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInfo = info;
float waves = info.x * (1.0 - info.z) * (1.0 - info.y);
transformed.y += waves * (0.025 * sin(position.x * 2.1 + time * 1.7) + 0.02 * sin(position.z * 2.7 - time * 1.3));`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float time;
varying vec3 vInfo;`).replace(`#include <color_fragment>`,`#include <color_fragment>
if (vInfo.x < 0.5) discard;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vInfo.y * (0.9 + 0.25 * sin(time * 3.0 + vViewPosition.x));`)},this.surface=new N(this.geo,this.mat),this.surface.visible=!1,this.surface.receiveShadow=!0,this.surface.renderOrder=1,this.snow=new Je(this.box,new M({color:16777215,roughness:.95,flatShading:!0}),6400),this.snow.count=0,this.snow.frustumCulled=!1,this.snow.castShadow=this.snow.receiveShadow=!0;let n=new rt;n.setAttribute(`position`,new P(new Float32Array(144),3)),this.embers=new Ke(n,new st({color:16752704,size:.12,transparent:!0,opacity:.9,depthWrite:!1})),this.embers.frustumCulled=!1,this.embers.visible=!1,this.group.add(this.surface,this.snow,this.embers)}get drawn(){return this.shown+this.snow.count}sync(e){let t=e.liquid??null;if(!t){this.surface.visible=!1,this.snow.count=0,this.embers.visible=!1,this.grid=null,this.shown=0;return}if(t===this.grid&&t.version===this.version)return;let n=performance.now();if(t===this.grid&&n-this.lastBuild<100)return;this.lastBuild=n,this.grid=t,this.version=t.version;let r=t.terrain??=ke(e);this.data=wt(t,r,this.data??void 0);let i=this.geo.getAttribute(`position`),a=this.geo.getAttribute(`info`);for(let e=0;e<I*I;e++)i.setY(e,this.data.height[e]+.01),a.setXYZ(e,this.data.wet[e],this.data.glow[e],this.data.still[e]);this.geo.getAttribute(`color`).copyArray(this.data.color),i.needsUpdate=a.needsUpdate=!0,this.geo.getAttribute(`color`).needsUpdate=!0,this.geo.computeVertexNormals();let o=new We,s=new Ne,c=0,l=0;this.lavaCells.length=0;for(let e=0;e<6400;e++){let n=t.depth[e];n>Tt&&t.kind[e]&&(l++,t.kind[e]===Dt&&this.lavaCells.push(e));let i=t.snow[e];if(i>Tt){let a=r[e]===-1e9?0:r[e],[l,u]=g(e),d=a+(t.kind[e]===ee||n>Tt?n:0);o.compose(this.tmpPos.set(l,d+i/2,u),s,this.tmpScale.set(O,i,O)),this.snow.setMatrixAt(c++,o)}}this.shown=l,this.surface.visible=l>0,(c||this.snow.count)&&(this.snow.instanceMatrix.needsUpdate=!0),this.snow.count=c,this.embers.visible=this.lavaCells.length>0&&!this.reduceMotion}animate(e){if(this.time.value+=this.reduceMotion?0:e,!this.embers.visible||!this.grid?.terrain)return;let t=this.embers.geometry.getAttribute(`position`);for(let n=0;n<Et;n++)if(this.emberLife[n]-=e,this.emberLife[n]<=0){let e=this.lavaCells[Math.floor(Math.random()*this.lavaCells.length)],[r,i]=g(e);t.setXYZ(n,r+(Math.random()-.5)*O,this.grid.terrain[e]+this.grid.depth[e],i+(Math.random()-.5)*O),this.emberLife[n]=.6+Math.random()*1.2}else t.setY(n,t.getY(n)+e*.8);t.needsUpdate=!0}dispose(){this.geo.dispose(),this.mat.dispose(),this.box.dispose(),this.snow.material.dispose(),this.snow.dispose(),this.embers.geometry.dispose(),this.embers.material.dispose()}},kt=class{group=new qe;dome;domeMat;ocean;beach;oceanMat;constructor(){this.domeMat=new He({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:new j},horizon:{value:new j},bottom:{value:new j},sunDir:{value:new A(0,1,0)},sunColor:{value:new j}},vertexShader:`varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vDir;
        void main() {
          float h = vDir.y;
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.4));
          float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
          c += sunColor * (pow(s, 600.0) * 1.5 + pow(s, 12.0) * 0.18);
          gl_FragColor = vec4(c, 1.0);
        }`}),this.dome=new N(new Xe(900,32,16),this.domeMat),this.dome.renderOrder=-10,this.oceanMat=new M({color:2785225,roughness:.25,metalness:.1,flatShading:!0});let e=new Ue(1600,1600,1,1);e.rotateX(-Math.PI/2),this.ocean=new N(e,this.oceanMat),this.ocean.position.y=-.7,this.ocean.receiveShadow=!0;let t=new et,n=22.5;t.moveTo(-19.5,-22.5),t.lineTo(19.5,-22.5),t.quadraticCurveTo(n,-22.5,n,-19.5),t.lineTo(n,19.5),t.quadraticCurveTo(n,n,19.5,n),t.lineTo(-19.5,n),t.quadraticCurveTo(-22.5,n,-22.5,19.5),t.lineTo(-22.5,-19.5),t.quadraticCurveTo(-22.5,-22.5,-19.5,-22.5);let r=new ot(t,{depth:1,bevelEnabled:!0,bevelSize:1.2,bevelThickness:.4,bevelSegments:2});r.rotateX(-Math.PI/2),this.beach=new N(r,new M({color:15784090,roughness:.95,flatShading:!0})),this.beach.position.y=-1.6,this.beach.receiveShadow=!0,this.group.add(this.dome,this.ocean,this.beach)}set(e,t){this.group.visible=e!==`space`,this.ocean.visible=this.beach.visible=e===`island`;let n=this.domeMat.uniforms;n.top.value.setHex(t.top),n.horizon.value.setHex(t.horizon),n.bottom.value.setHex(e===`island`?1920890:t.ground),n.sunDir.value.set(...t.sunDir),n.sunColor.value.setHex(t.sunColor)}follow(e){this.dome.position.copy(e.position)}dispose(){for(let e of[this.dome,this.ocean,this.beach])e.geometry.dispose(),e.material.dispose()}},At=.32,jt=e=>((e/600+At)%1+1)%1,R=[{at:0,top:396068,horizon:1581903,sun:8425727,sunI:.15,hemiSky:4872872,hemiGround:1712192,hemiI:.8,stars:1},{at:.2,top:726072,horizon:2830186,sun:8425727,sunI:.2,hemiSky:5267632,hemiGround:1843780,hemiI:.85,stars:1},{at:.26,top:4020904,horizon:16753516,sun:16757370,sunI:.9,hemiSky:10466559,hemiGround:5913642,hemiI:.9,stars:.2},{at:.33,top:5941488,horizon:13625599,sun:16773336,sunI:1.8,hemiSky:13625087,hemiGround:6969914,hemiI:1.2,stars:0},{at:.5,top:4167663,horizon:14217215,sun:16774888,sunI:2.2,hemiSky:14085375,hemiGround:7299136,hemiI:1.3,stars:0},{at:.67,top:5941488,horizon:13625599,sun:16773336,sunI:1.8,hemiSky:13625087,hemiGround:6969914,hemiI:1.2,stars:0},{at:.74,top:4870048,horizon:16747100,sun:16751200,sunI:.9,hemiSky:11574527,hemiGround:5911592,hemiI:.9,stars:.2},{at:.8,top:726072,horizon:2830186,sun:8425727,sunI:.2,hemiSky:5267632,hemiGround:1843780,hemiI:.85,stars:1},{at:1,top:396068,horizon:1581903,sun:8425727,sunI:.15,hemiSky:4872872,hemiGround:1712192,hemiI:.8,stars:1}],z=(e,t,n)=>e+(t-e)*n;function B(e,t,n){let r=(e,t)=>e>>t&255;return Math.round(z(r(e,16),r(t,16),n))<<16|Math.round(z(r(e,8),r(t,8),n))<<8|Math.round(z(r(e,0),r(t,0),n))}function Mt(e){let t=(e%1+1)%1,n=0;for(;n<R.length-2&&R[n+1].at<=t;)n++;let r=R[n],i=R[n+1],a=(t-r.at)/(i.at-r.at),o=a*a*(3-2*a),s=(t-.25)*Math.PI*2,c=[Math.cos(s)*.8,Math.sin(s),.45],l=B(r.horizon,i.horizon,o);return{top:B(r.top,i.top,o),horizon:l,ground:B(l,1911354,.6),fog:l,sunColor:B(r.sun,i.sun,o),sunIntensity:z(r.sunI,i.sunI,o),sunDir:c,hemiSky:B(r.hemiSky,i.hemiSky,o),hemiGround:B(r.hemiGround,i.hemiGround,o),hemiIntensity:z(r.hemiI,i.hemiI,o),stars:z(r.stars,i.stars,o)}}var Nt=.8;function Pt(e,t,n,r,i){let a=[e[0],e[1]+.6,e[2]],o=[-Math.cos(t)*Math.cos(n),Math.sin(n),Math.sin(t)*Math.cos(n)],s=r;for(let e of i){let t=It(a,o,e.min,e.max);t!==null&&t<s&&(s=Math.max(Nt,t-.3))}return{target:a,pos:[a[0]+o[0]*s,a[1]+o[1]*s,a[2]+o[2]*s]}}var Ft=(e,t)=>1-Math.exp(-e*Math.max(0,t));function It(e,t,n,r){let i=0,a=1/0;for(let o=0;o<3;o++){if(Math.abs(t[o])<1e-9){if(e[o]<n[o]||e[o]>r[o])return null;continue}let s=(n[o]-e[o])/t[o],c=(r[o]-e[o])/t[o];if(s>c&&([s,c]=[c,s]),i=Math.max(i,s),a=Math.min(a,c),i>a)return null}return i>0?i:null}var Lt=new A(9,7,12),Rt=13.4,zt=21,Bt=new A(0,0,0),Vt=class{host;canvas;renderer;scene=new Re;camera;controls;helpers=new qe;stars;zeroPulse;resizeObserver;frame=0;lastTime=performance.now();fly=null;walkBlockers=null;walkBip=null;walkLook=``;camYaw=0;camPitch=.35;walkAt=[0,0,0];walkSize=1;walkCamPos=new A;walkTarget=new A;stepPhase=0;objects=new te;liquids=new Ot;scenery=new kt;sun;hemi;env=`space`;simTime=0;raycaster=new ze;down=null;onFrame=null;onContextChange=null;get renderStats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}}onCameraMove=null;onPick=null;constructor(e){this.host=e,this.canvas=document.createElement(`canvas`),this.canvas.className=`world-canvas`,e.appendChild(this.canvas),this.renderer=new Ze({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.camera=new Le(50,1,.1,2e3),this.camera.position.copy(Lt),this.controls=new nt(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=2,this.controls.maxDistance=300,this.controls.touches={ONE:Ye.ROTATE,TWO:Ye.DOLLY_PAN},this.controls.target.copy(Bt),this.controls.addEventListener(`start`,()=>{this.fly=null,this.onCameraMove?.()}),this.hemi=new Pe(12572927,2758720,1.4),this.scene.add(this.hemi);let t=new $e(16773597,1.6);t.position.set(6,12,8),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:120}),t.shadow.bias=-8e-4,t.shadow.normalBias=.03,this.sun=t,this.scene.add(t,t.target),this.scene.add(this.scenery.group),this.scene.add(this.objects.group),this.scene.add(this.liquids.group),this.canvas.addEventListener(`pointerdown`,this.onPointerDown),this.canvas.addEventListener(`webglcontextlost`,()=>this.onContextChange?.(!1)),this.canvas.addEventListener(`webglcontextrestored`,()=>this.onContextChange?.(!0)),this.canvas.addEventListener(`pointerup`,this.onPointerUp),this.stars=Ht(),this.scene.add(this.stars),this.zeroPulse=Ut(this.helpers),this.helpers.add(Wt()),this.scene.add(this.helpers),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.loop()}setQuality(e){let t=e===`low`?1:e===`medium`?1.5:2;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t)),this.resize(),this.renderer.shadowMap.enabled=e!==`low`,this.sun.shadow.mapSize.set(e===`high`?2048:1024,e===`high`?2048:1024),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.objects.setOutlines(e===`high`);let n=this.stars.geometry.getAttribute(`position`).count;this.stars.geometry.setDrawRange(0,e===`low`?Math.floor(n/3):e===`medium`?Math.floor(n*2/3):n)}setSensitivity(e){this.controls.rotateSpeed=e,this.controls.zoomSpeed=e,this.controls.panSpeed=e}reduceMotion=!1;setReduceMotion(e){this.reduceMotion=e,this.objects.reduceMotion=e,this.liquids.reduceMotion=e}setEnvironment(e,t){this.env=e,this.simTime=t}applySky(){if(this.env===`space`){this.renderer.setClearColor(659504,1),this.scenery.set(`space`,Mt(.5)),this.scene.fog=null,this.stars.material.opacity=.9,this.hemi.color.setHex(12572927),this.hemi.groundColor.setHex(2758720),this.hemi.intensity=1.4,this.sun.color.setHex(16773597),this.sun.intensity=1.6,this.sun.position.set(6,12,8);return}this.renderer.setClearColor(0,0);let e=Mt(jt(this.simTime));this.scenery.set(this.env,e),(this.scene.fog??(this.scene.fog=new Qe(e.fog,60,260))).color.setHex(e.fog),this.stars.material.opacity=.9*e.stars,this.hemi.color.setHex(e.hemiSky),this.hemi.groundColor.setHex(e.hemiGround),this.hemi.intensity=e.hemiIntensity;let t=e.sunDir[1]>=0,n=t?e.sunDir:[-e.sunDir[0],-e.sunDir[1],-e.sunDir[2]];this.sun.position.set(n[0]*40,Math.max(4,n[1]*40),n[2]*40),this.sun.color.setHex(t?e.sunColor:10465535),this.sun.intensity=t?e.sunIntensity:.6}setHelpersVisible(e){this.helpers.visible=e}resetCamera(){this.flyTo(Lt.clone(),Bt.clone())}focusObject(e){let t=this.objects.positionOf(e);if(!t)return;let n=this.camera.position.clone().sub(this.controls.target).normalize();this.flyTo(t.clone().add(n.multiplyScalar(8)),t)}syncObjects(e,t){this.objects.sync(e,t),this.liquids.sync(e)}flyTo(e,t){this.fly={t:0,fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:e,toTarget:t}}onPointerDown=e=>{this.down=e.isPrimary?{x:e.clientX,y:e.clientY,t:performance.now(),id:e.pointerId}:null};onPointerUp=e=>{let t=this.down;if(this.down=null,!t||t.id!==e.pointerId||Math.hypot(e.clientX-t.x,e.clientY-t.y)>8||performance.now()-t.t>450)return;let n=this.canvas.getBoundingClientRect(),r=new Ge((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let i=new A,a=this.raycaster.ray.intersectPlane(new Be(new A(0,1,0),0),i);this.onPick?.(this.objects.pick(this.raycaster),a?{x:Math.round(i.x),z:Math.round(i.z)}:null)};startWalk(e){this.stopWalk(),this.walkLook=`${e.color}|${e.hat}`,this.walkBip=ut(e),this.walkBip.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.scene.add(this.walkBip),this.controls.enabled=!1,this.fly=null}stopWalk(){this.walkBip&&(this.disposeBip(this.walkBip),this.walkBip=null,this.objects.setFaded(new Set),this.controls.enabled=!0,this.resetCamera())}setWalkPose(e,t,n,r,i,a,o){if(!this.walkBip)return;let s=i*1.2;this.stepPhase=a?this.stepPhase+zt*Math.min(o,.1):0,this.walkBip.position.set(e,t-.6*i+Math.abs(Math.sin(this.stepPhase))*.06*s,n),this.walkBip.rotation.y=r,this.walkBip.scale.setScalar(s),this.walkAt[0]=e,this.walkAt[1]=t,this.walkAt[2]=n,this.walkSize=i}setWalkLook(e){let t=`${e.color}|${e.hat}`;if(!this.walkBip||t===this.walkLook)return;this.walkLook=t;let n=this.walkBip;this.walkBip=ut(e),this.walkBip.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.walkBip.position.copy(n.position),this.walkBip.rotation.copy(n.rotation),this.walkBip.scale.copy(n.scale),this.disposeBip(n),this.scene.add(this.walkBip)}turnCamera(e,t){this.camYaw+=e,this.camPitch=Math.min(1.2,Math.max(.05,this.camPitch+t))}get cameraYaw(){return this.camYaw}disposeBip(e){this.scene.remove(e),e.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}dispose(){cancelAnimationFrame(this.frame),this.stopWalk(),this.resizeObserver.disconnect(),this.controls.dispose(),this.canvas.removeEventListener(`pointerdown`,this.onPointerDown),this.canvas.removeEventListener(`pointerup`,this.onPointerUp),this.objects.dispose(),this.liquids.dispose(),this.scenery.dispose(),this.scene.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n?.dispose()}),this.renderer.dispose(),this.canvas.remove()}resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loop=()=>{this.frame=requestAnimationFrame(this.loop);let e=performance.now(),t=(e-this.lastTime)/1e3;if(this.lastTime=e,this.fly){let e=this.fly;e.t=this.reduceMotion?1:Math.min(1,e.t+t/.8);let n=1-(1-e.t)**3;this.camera.position.lerpVectors(e.fromPos,e.toPos,n),this.controls.target.lerpVectors(e.fromTarget,e.toTarget,n),e.t>=1&&(this.fly=null)}this.reduceMotion||(this.stars.rotation.y+=t*.004);let n=1+.25*Math.sin(e/600);if(this.zeroPulse.scale.setScalar(n),this.onFrame?.(t),this.applySky(),this.scenery.follow(this.camera),this.objects.animate(Math.min(t,.1)),this.liquids.animate(Math.min(t,.1)),this.walkBip){let e=this.walkSize,[n,r,i]=this.walkAt,a=Pt([n,r+.6*e-.6,i],this.camYaw,this.camPitch,6*Math.max(1,e),this.walkBlockers?.()??[]);this.camera.position.lerp(this.walkCamPos.set(...a.pos),Ft(Rt,Math.min(t,.1))),this.camera.lookAt(...a.target),this.objects.setFaded(this.objects.between(this.camera.position,this.walkTarget.set(...a.target)))}else this.controls.update();this.renderer.render(this.scene,this.camera)}};function Ht(){let e=1800,t=new Float32Array(e*3),n=new Float32Array(e*3),r=[new j(16777215),new j(10475775),new j(16766624),new j(13219583)];for(let i=0;i<e;i++){let e=Math.random()*2-1,a=Math.random()*Math.PI*2,o=500+Math.random()*300,s=Math.sqrt(1-e*e);t.set([o*s*Math.cos(a),o*e,o*s*Math.sin(a)],i*3);let c=r[i%r.length].clone().multiplyScalar(.5+Math.random()*.5);n.set([c.r,c.g,c.b],i*3)}let i=new rt;i.setAttribute(`position`,new P(t,3)),i.setAttribute(`color`,new P(n,3));let a=new st({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,fog:!1});return new Ke(i,a)}function Ut(e){let t=new N(new it(.12,1),new Me({color:16777215})),n=new N(new it(.3,2),new Me({color:8188880,transparent:!0,opacity:.25,depthWrite:!1}));e.add(t,n);let r=[[new A(1,0,0),16739194],[new A(0,1,0),8188832],[new A(0,0,1),7059711]];for(let[t,n]of r){let r=new rt().setFromPoints([new A,t.clone().multiplyScalar(2)]);e.add(new Ie(r,new Fe({color:n,transparent:!0,opacity:.85})))}return n}function Wt(){let e=new at(40,40,3820170,1975888),t=e.material;return t.transparent=!0,t.opacity=.45,t.depthWrite=!1,e}var Gt=e=>typeof e==`number`&&Number.isFinite(e)?e:null,Kt=e=>e.objects.filter(e=>e.id!==v),qt=new Set([`x`,`y`,`z`,`vx`,`vy`,`vz`,`ax`,`ay`,`az`,`rx`,`ry`,`rz`,`rotation`]);function Jt(e,n){let r=n.get(`pos`)??new Map,i=new Map,a=!1;for(let n of Kt(e.world)){if(!t(n))continue;let o=d(e.world,n);i.set(n.id,o);let s=r.get(n.id);s&&Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])>.01&&(a=!0)}return n.set(`pos`,i),a}function Yt(e,t){let n=t.get(`vals`)??new Map,r=t.get(`streak`)??new Map,i=new Map,a=!1;return Kt(e.world).forEach(e=>{for(let[t,o]of Object.entries(e.values)){let s=Gt(o);if(s===null||qt.has(t))continue;let c=`${e.id}.${t}`;i.set(c,s);let l=n.get(c);if(l!==void 0&&s>l){let e=(r.get(c)??0)+1;r.set(c,e),e>=2&&(a=!0)}else l!==void 0&&s!==l&&r.set(c,0)}}),t.set(`vals`,i),t.set(`streak`,r),a}var V=[{id:`move`,hints:3,example:`Ball = create_type("Ball")
ball = Ball(x=-3, y=1, z=0, shape="sphere", color="orange")
on tick:
    ball.x += 1 * dt
`,check:Jt},{id:`grow`,hints:3,example:`Sprout = create_type("Sprout")
Sprout.add_property("height", 0.5)
s = Sprout(x=0, y=0, z=0, shape="cone", color="green")
every 1 seconds:
    s.height += 0.2
`,check:Yt},{id:`interact`,hints:3,example:`Floor = create_type("Floor")
floor = Floor(x=0, y=-0.5, z=0, width=6, height=1, depth=6, solid=true)
Drop = create_type("Drop")
d = Drop(x=0, y=4, z=0, mass=1, solid=true, shape="sphere", color="skyblue")
physics.gravity = 9.8
when Drop touches Floor:
    b.color = "deepskyblue"
`,check:({world:e,handlers:t})=>t.some(e=>e.kind===`touch`&&e.fired>0)||e.relations.length>0},{id:`law`,hints:3,example:`physics.gravity = -2
physics.wind = 3
Leaf = create_type("Leaf")
leaf = Leaf(x=0, y=0, z=0, mass=1, shape="plane", color="yellowgreen")
on tick:
    leaf.vx = physics.wind
`,check:({world:e})=>{let t=e.physics,n=ve(),r=e.settings.laws===`standard`?9.8:0,i={temperature:15,evaporation:5e-4};return Object.entries(t.custom).some(([e,t])=>!(e in i)||i[e]!==t)||t.gravity!==r||t.friction!==n.friction||t.airResistance!==n.airResistance}},{id:`ecosystem`,hints:3,example:`Grass = create_type("Grass")
Grass.add_property("shape", "cone")
Grass.add_property("color", "green")
Rabbit = create_type("Rabbit")
Rabbit.add_property("hunger", 0)
Rabbit.add_property("color", "white")
Sun = create_type("Sun")
sun = Sun(x=0, y=8, z=0, shape="sphere", color="gold", material="glow")
r = Rabbit(x=0, y=0.5, z=0)
every 2 seconds:
    Grass(x=random(-4, 4), y=0, z=random(-4, 4), size=0.5)
every 3 seconds:
    grass = all(Grass)
    if len(grass) > 0:
        grass[0].destroy()
        r.hunger = 0
    else:
        r.hunger += 1
`,check:({world:e,handlers:t})=>{let n=Kt(e),r=new Set(n.map(e=>e.typeId)),i=t.filter(e=>e.kind!==`create`).length;return r.size>=3&&i>=2&&n.some(e=>e.origin===`event`)}}],Xt=class{done;memory=new Map;constructor(e){this.done=e}observe(e){let t=[];for(let n of V){if(this.done.has(n.id))continue;let r=this.memory.get(n.id);r||(r=new Map,this.memory.set(n.id,r)),n.check(e,r)&&(this.done.add(n.id),t.push(n.id))}return t}isDone(e){return this.done.has(e)}},Zt=[{id:`start`,examples:[`Rock = create_type("Rock")
rock = Rock(x=0, y=1, z=0, shape="sphere", color="orange")`]},{id:`types`,examples:[`Tree = create_type("Tree")
Tree.add_property("height", 2)
oak = Tree(x=2, y=1, z=0, shape="cone", color="green")
birch = Tree(x=-2, y=1, z=0, shape="cone", color="white")`]},{id:`properties`,examples:[`oak.height = 5
say(oak.height)
Tree.add_property("age", 0)`]},{id:`look`,examples:[`Star = create_type("Star")
s = Star(x=0, y=4, z=0, shape="sphere", size=0.6, color="gold", material="glow")`]},{id:`functions`,examples:[`def grow(self):
    self.height += 1
Tree.add_action("grow", grow)
oak.grow()`]},{id:`conditions`,examples:[`if oak.height > 3:
    say("big tree")
else:
    say("small tree")`,`for t in all(Tree):
    t.height += 1`]},{id:`events`,examples:[`every 2 seconds:
    oak.height += 0.5`,`on tap Tree:
    self.color = "red"`,`when oak.height > 6:
    say("so tall!")`]},{id:`physics`,examples:[`physics.gravity = 9.8
Ball = create_type("Ball")
b = Ball(x=0, y=5, z=0, mass=1, solid=true, bounce=0.6, shape="sphere")
Floor = create_type("Floor")
f = Floor(x=0, y=-0.5, z=0, width=8, height=1, depth=8, solid=true)`]},{id:`relationships`,examples:[`relate(oak, "shades", birch)
say(oak.related("shades"))`,`nest = Tree(x=0, y=3, z=0, size=0.3)
nest.parent = oak`]},{id:`lists`,examples:[`colors = ["red", "green", "blue"]
colors.append("gold")
stock = {"apples": 3}
stock["apples"] += 1
say(colors[0], stock["apples"])`]},{id:`errors`,examples:[]},{id:`debugger`,examples:[]},{id:`blocks`,examples:[]}];function Qt(e){let t=T(`div`,{class:`learn`});t.append(T(`section`,{class:`learn-tour`},T(`p`,{},C(`learn.tourText`)),T(`button`,{type:`button`,class:`btn primary`,onclick:()=>e.startTour()},`🧭 ${C(`learn.tour`)}`)));let n=V.filter(t=>e.isDone(t.id)).length;t.append(T(`h3`,{},`${C(`learn.challenges`)} · ${n}/${V.length}`),T(`p`,{class:`hint`},C(`learn.challengesText`)));for(let n of V){let r=e.isDone(n.id),i=e.hintsShown(n.id),a=T(`article`,{class:`challenge${r?` done`:``}`},T(`div`,{class:`challenge-head`},T(`strong`,{},`${r?`✅`:`⭐`} ${C(`ch.${n.id}.title`)}`),T(`span`,{class:`muted`},C(r?`learn.done`:`learn.watching`))),T(`p`,{},C(`ch.${n.id}.goal`)));for(let e=1;e<=i;e++)a.append(T(`p`,{class:`challenge-hint`},`💡 ${C(`ch.${n.id}.hint${e}`)}`));a.append(T(`div`,{class:`challenge-actions`},i<n.hints?T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>e.showHint(n.id)},C(`learn.hint`,{n:i+1,total:n.hints})):``,i>=n.hints?T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>e.useExample(n.id)},`📄 ${C(`learn.example`)}`):``)),t.append(a)}t.append(T(`h3`,{},C(`learn.help`)));for(let n of Zt){let r=e.openTopic===n.id,i=T(`button`,{type:`button`,class:`help-head${r?` open`:``}`,"aria-expanded":r,onclick:()=>e.setOpenTopic(r?null:n.id)},`${r?`▾`:`▸`} ${C(`help.${n.id}.title`)}`),a=T(`section`,{class:`help-topic`},i);if(r){for(let e of C(`help.${n.id}.text`).split(`
`))a.append(T(`p`,{},e));for(let t of n.examples)a.append(T(`pre`,{class:`help-code`},t),T(`button`,{type:`button`,class:`btn small`,onclick:()=>e.tryCode(t)},`＋ ${C(`learn.tryIt`)}`))}t.append(a)}return t}var $t=[`space`,`nature`,`animals`,`people`,`buildings`,`vehicles`,`weather`,`movement`,`looks`,`events`,`games`,`ideas`,`tools`],en={space:`🪐`,nature:`🌳`,animals:`🐇`,people:`🧑`,buildings:`🏠`,vehicles:`🚗`,weather:`🌦`,movement:`🏃`,looks:`🎨`,events:`⚡`,games:`🎮`,ideas:`🧠`,tools:`🛠`},H=(e,t,n,r,i)=>({id:e,section:t,kind:n,keywords:r,code:i.replace(/^\n/,``)}),tn=[H(`planet`,`space`,`thing`,{en:[`planet`,`earth`,`globe`],de:[`planet`,`erde`,`weltkugel`],uk:[`планет`,`земл`],ru:[`планет`,`земл`]},`
Planet = create_type("Planet")
Planet.add_property("shape", "sphere")
Planet.add_property("material", "shiny")
earth = Planet(x=0, y=2, z=0, size=3, color="royalblue")
`),H(`sun`,`space`,`thing`,{en:[`sun`,`star`],de:[`sonne`,`stern`],uk:[`сонц`,`зірк`,`зоря`],ru:[`солнц`,`звезд`]},`
Star = create_type("Star")
sun = Star(x=-8, y=5, z=-8, shape="sphere", size=4, color="gold", material="glow")
`),H(`moon`,`space`,`thing`,{en:[`moon`],de:[`mond`],uk:[`місяц`,`луна`,`супутник`],ru:[`лун`,`спутник`,`месяц`]},`
Planet = create_type("Planet")
earth = Planet(x=0, y=2, z=0, shape="sphere", size=3, color="royalblue")
Moon = create_type("Moon")
moon = Moon(x=3, y=0, z=0, shape="sphere", size=0.8, color="lightgray")
moon.parent = earth
`),H(`orbit`,`space`,`action`,{en:[`orbit`,`around`,`circle`],de:[`umlauf`,`kreis`,`herum`,`umkreis`],uk:[`орбіт`,`навколо`,`коло`,`кружл`],ru:[`орбит`,`вокруг`,`круг`,`кружит`]},`
Planet = create_type("Planet")
earth = Planet(x=0, y=2, z=0, shape="sphere", size=3, color="royalblue")
Moon = create_type("Moon")
moon = Moon(x=4, y=2, z=0, shape="sphere", size=0.7, color="lightgray")
on tick:
    angle = time() * 0.8
    moon.x = earth.x + 4 * cos(angle)
    moon.z = earth.z + 4 * sin(angle)
`),H(`stars_sky`,`space`,`thing`,{en:[`stars`,`sky`,`space`,`galaxy`],de:[`sterne`,`himmel`,`weltall`,`galaxie`],uk:[`зорі`,`небо`,`космос`,`галакт`],ru:[`звёзды`,`звезды`,`небо`,`космос`,`галакт`]},`
Star = create_type("Star")
for i in range(40):
    Star(x=random(-20, 20), y=random(3, 15), z=random(-20, 20), shape="sphere", size=0.2, color="white", material="glow")
`),H(`rocket`,`space`,`thing`,{en:[`rocket`,`launch`],de:[`rakete`,`start`],uk:[`ракет`,`запуск`],ru:[`ракет`,`запуск`]},`
physics.gravity = 9.8
Pad = create_type("Pad")
pad = Pad(x=0, y=-0.25, z=0, width=4, height=0.5, depth=4, solid=true, color="gray", shape="box")
Rocket = create_type("Rocket")
rocket = Rocket(x=0, y=1.5, z=0, shape="cone", width=1, height=2.5, depth=1, color="white", mass=1, solid=true)
on tap Rocket:
    self.push(0, 25, 0)
`),H(`asteroid`,`space`,`thing`,{en:[`asteroid`,`meteor`],de:[`asteroid`,`meteor`],uk:[`астероїд`,`метеор`],ru:[`астероид`,`метеор`]},`
physics.gravity = 9.8
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=20, height=1, depth=20, solid=true, color="dimgray", shape="box")
Asteroid = create_type("Asteroid")
every 2 seconds:
    Asteroid(x=random(-6, 6), y=12, z=random(-6, 6), shape="sphere", size=0.8, color="sienna", mass=1, solid=true, bounce=0.3)
`),H(`alien`,`space`,`thing`,{en:[`alien`,`ufo`],de:[`alien`,`außerirdisch`,`ausserirdisch`,`ufo`],uk:[`прибульц`,`інопланет`,`нло`],ru:[`пришел`,`инопланет`,`нло`]},`
Alien = create_type("Alien")
zork = Alien(x=0, y=1, z=0, shape="capsule", size=1.2, color="lime", material="glow")
on tick:
    zork.y = 1 + abs(sin(time() * 3))
`),H(`comet`,`space`,`thing`,{en:[`comet`],de:[`komet`],uk:[`комет`],ru:[`комет`]},`
Comet = create_type("Comet")
comet = Comet(x=-15, y=8, z=-5, shape="sphere", size=0.6, color="lightcyan", material="glow")
on tick:
    comet.x += 4 * dt
    if comet.x > 15:
        comet.x = -15
`),H(`tree`,`nature`,`thing`,{en:[`tree`],de:[`baum`],uk:[`дерев`],ru:[`дерев`]},`
Trunk = create_type("Trunk")
Crown = create_type("Crown")
trunk = Trunk(x=0, y=1, z=0, shape="cylinder", width=0.5, height=2, depth=0.5, color="saddlebrown")
crown = Crown(x=0, y=1.6, z=0, shape="sphere", size=2, color="forestgreen")
crown.parent = trunk
`),H(`forest`,`nature`,`thing`,{en:[`forest`,`woods`,`many trees`],de:[`wald`],uk:[`ліс`],ru:[`лес`]},`
Tree = create_type("Tree")
for i in range(25):
    Tree(x=random(-12, 12), y=1.5, z=random(-12, 12), shape="cone", width=1.5, height=3, depth=1.5, color="darkgreen")
`),H(`flower`,`nature`,`thing`,{en:[`flower`,`rose`,`blossom`],de:[`blume`,`rose`,`blüte`,`blute`],uk:[`квіт`,`троянд`],ru:[`цвет`,`роз`]},`
Stem = create_type("Stem")
Blossom = create_type("Blossom")
stem = Stem(x=0, y=0.5, z=0, shape="cylinder", width=0.1, height=1, depth=0.1, color="green")
blossom = Blossom(x=0, y=0.6, z=0, shape="sphere", size=0.5, color="hotpink")
blossom.parent = stem
`),H(`grass`,`nature`,`thing`,{en:[`grass`,`lawn`,`meadow`,`ground`,`floor`],de:[`gras`,`wiese`,`rasen`,`boden`],uk:[`трав`,`газон`,`лук`,`підлог`,`землю`],ru:[`трав`,`газон`,`луг`,`пол`,`почв`]},`
Ground = create_type("Ground")
meadow = Ground(x=0, y=-0.25, z=0, width=30, height=0.5, depth=30, shape="box", color="mediumseagreen", solid=true)
`),H(`mushroom`,`nature`,`thing`,{en:[`mushroom`],de:[`pilz`],uk:[`гриб`],ru:[`гриб`]},`
Stalk = create_type("Stalk")
Cap = create_type("Cap")
stalk = Stalk(x=0, y=0.4, z=0, shape="cylinder", width=0.3, height=0.8, depth=0.3, color="beige")
cap = Cap(x=0, y=0.5, z=0, shape="sphere", width=1.2, height=0.6, depth=1.2, color="red")
cap.parent = stalk
`),H(`rock`,`nature`,`thing`,{en:[`rock`,`stone`,`boulder`],de:[`stein`,`fels`],uk:[`камін`,`камен`,`скел`],ru:[`камен`,`камн`,`скал`]},`
Rock = create_type("Rock")
Rock.add_property("shape", "sphere")
Rock.add_property("color", "gray")
rock = Rock(x=2, y=0.5, z=1, size=1)
`),H(`mountain`,`nature`,`thing`,{en:[`mountain`,`hill`],de:[`berg`,`hügel`,`hugel`],uk:[`гор`,`пагорб`],ru:[`гор`,`холм`]},`
Mountain = create_type("Mountain")
Snow = create_type("Snow")
mountain = Mountain(x=0, y=3, z=-8, shape="cone", width=10, height=6, depth=10, color="slategray")
peak = Snow(x=0, y=2.2, z=0, shape="cone", width=3, height=1.6, depth=3, color="white")
peak.parent = mountain
`),H(`water`,`nature`,`thing`,{en:[`water`,`lake`,`sea`,`ocean`,`river`],de:[`wasser`,`see`,`meer`,`ozean`,`fluss`],uk:[`вод`,`озер`,`мор`,`океан`,`річк`],ru:[`вод`,`озер`,`мор`,`океан`,`рек`]},`
physics.gravity = 9.8
Water = create_type("Water")
Stone = create_type("Stone")
lake = Water(x=0, y=-0.25, z=0, width=12, height=0.5, depth=12, color="sienna", solid=true)
for s in [-1, 1]:
    Stone(x=6 * s, y=0.5, z=0, width=0.5, height=1.5, depth=12, color="gray", pattern="stones", solid=true)
    Stone(x=0, y=0.5, z=6 * s, width=12, height=1.5, depth=0.5, color="gray", pattern="stones", solid=true)
# only when empty: running the code again doesn't pour more
if liquid_depth(0, 0) < 0.1:
    pour("water", 0, 0, 40)
`),H(`island`,`nature`,`thing`,{en:[`island`,`palm`,`beach`],de:[`insel`,`palme`,`strand`],uk:[`остр`,`пальм`,`пляж`],ru:[`остров`,`пальм`,`пляж`]},`
Water = create_type("Water")
Sand = create_type("Sand")
Palm = create_type("Palm")
sea = Water(x=0, y=0, z=0, shape="plane", width=30, height=0.1, depth=30, color="dodgerblue", material="glass")
island = Sand(x=0, y=0.2, z=0, shape="cylinder", width=6, height=0.5, depth=6, color="khaki")
palm = Palm(x=0, y=1.8, z=0, shape="cylinder", width=0.3, height=3, depth=0.3, color="peru")
palm.parent = island
`),H(`waves`,`nature`,`action`,{en:[`wave`,`bob`,`float up and down`],de:[`welle`,`wellen`,`schaukel`],uk:[`хвил`,`гойда`],ru:[`волн`,`качает`]},`
Water = create_type("Water")
sea = Water(x=0, y=0, z=0, shape="plane", width=20, height=0.1, depth=20, color="dodgerblue", material="glass")
on tick:
    sea.y = 0.3 * sin(time() * 2)
`),H(`plant_grow`,`nature`,`thing`,{en:[`plant`,`carrot`,`seed`,`vegetable`],de:[`pflanze`,`karotte`,`möhre`,`mohre`,`samen`,`gemüse`,`gemuse`],uk:[`рослин`,`морк`,`насін`,`овоч`],ru:[`растен`,`морков`,`семечк`,`семен`,`овощ`]},`
Plant = create_type("Plant")
Plant.add_property("height", 0.3)
Plant.add_property("shape", "cone")
Plant.add_property("color", "orange")
carrot = Plant(x=0, y=0, z=0)
every 1 seconds:
    if carrot.height < 3:
        carrot.height += 0.2
`),H(`animal`,`animals`,`thing`,{en:[`animal`,`rabbit`,`bunny`,`pet`],de:[`tier`,`hase`,`kaninchen`,`haustier`],uk:[`тварин`,`кроли`,`заєць`,`зайц`,`звір`],ru:[`животн`,`кролик`,`заяц`,`зайц`,`звер`,`питом`]},`
Animal = create_type("Animal")
Animal.add_property("legs", 4)
Animal.add_property("hunger", 0)
bunny = Animal(x=0, y=0.4, z=0, shape="sphere", size=0.8, color="white")
ears = Animal(x=0, y=0.6, z=0, shape="capsule", width=0.2, height=0.6, depth=0.2, color="pink")
ears.parent = bunny
`),H(`fish`,`animals`,`thing`,{en:[`fish`,`swim`],de:[`fisch`,`schwimm`],uk:[`риб`,`плав`],ru:[`рыб`,`плава`,`плыв`]},`
Fish = create_type("Fish")
Fish.add_property("speed", 2)
nemo = Fish(x=0, y=0.5, z=0, shape="capsule", width=1, height=0.5, depth=0.4, rz=90, color="orange")
on tick:
    nemo.x += nemo.speed * dt
    if abs(nemo.x) > 5:
        nemo.speed = -nemo.speed
`),H(`bird`,`animals`,`thing`,{en:[`bird`],de:[`vogel`],uk:[`птах`,`птиц`,`пташ`],ru:[`птиц`,`птичк`]},`
Bird = create_type("Bird")
bird = Bird(x=5, y=5, z=0, shape="cone", width=0.6, height=0.4, depth=1, color="skyblue")
on tick:
    bird.x = 5 * cos(time())
    bird.z = 5 * sin(time())
    bird.ry = -time() * 57
`),H(`dog_follow`,`animals`,`thing`,{en:[`dog`,`puppy`,`pet follows`],de:[`hund`,`welpe`],uk:[`соба`,`песик`,`цуцен`],ru:[`собак`,`щен`,`пёс`,`пес`]},`
Person = create_type("Person")
Dog = create_type("Dog")
Dog.add_property("speed", 1.5)
kid = Person(x=-4, y=0.9, z=0, shape="capsule", size=1, color="tomato")
dog = Dog(x=4, y=0.3, z=2, shape="box", width=0.8, height=0.5, depth=0.4, color="peru")
on tick:
    if not dog.near(kid, 1.2):
        dog.move_toward(kid)
`),H(`butterfly`,`animals`,`thing`,{en:[`butterfly`,`insect`,`bee`],de:[`schmetterling`,`insekt`,`biene`],uk:[`метелик`,`комах`,`бджол`],ru:[`бабочк`,`насеком`,`пчел`]},`
Butterfly = create_type("Butterfly")
fly = Butterfly(x=0, y=2, z=0, shape="plane", width=0.6, height=0.05, depth=0.4, color="violet")
every 0.5 seconds:
    fly.x += random(-1, 1) * 0.5
    fly.y = 2 + random(0, 2) * 0.3
    fly.z += random(-1, 1) * 0.5
`),H(`snail`,`animals`,`thing`,{en:[`snail`,`slow`],de:[`schnecke`,`langsam`],uk:[`равлик`,`повільн`],ru:[`улитк`,`медлен`]},`
Snail = create_type("Snail")
Snail.add_property("speed", 0.2)
Leaf = create_type("Leaf")
leaf = Leaf(x=5, y=0.05, z=0, shape="plane", width=1, height=0.1, depth=1, color="green")
snail = Snail(x=-5, y=0.3, z=0, shape="sphere", size=0.6, color="tan")
on tick:
    snail.move_toward(leaf)
`),H(`dragon`,`animals`,`thing`,{en:[`dragon`,`monster`,`creature`,`fantasy`],de:[`drache`,`monster`,`fabelwesen`],uk:[`дракон`,`монстр`,`чудовис`,`істот`],ru:[`дракон`,`монстр`,`чудовищ`,`существ`]},`
Dragon = create_type("Dragon")
Dragon.add_property("fire", 100)
smaug = Dragon(x=0, y=4, z=0, shape="capsule", width=1.5, height=3, depth=1.5, rz=90, color="crimson", material="glow")
on tick:
    smaug.y = 4 + sin(time() * 1.5)
on tap Dragon:
    self.fire -= 10
    say("Fire left:", self.fire)
`),H(`herd`,`animals`,`thing`,{en:[`herd`,`sheep`,`flock`,`many animals`],de:[`herde`,`schaf`,`schafe`],uk:[`стад`,`овц`,`отар`],ru:[`стад`,`овц`,`отар`]},`
Sheep = create_type("Sheep")
for i in range(10):
    Sheep(x=random(-6, 6), y=0.4, z=random(-6, 6), shape="sphere", size=0.8, color="whitesmoke")
`),H(`hunger`,`animals`,`action`,{en:[`hungry`,`hunger`,`eat`,`food`,`feed`],de:[`hunger`,`hungrig`,`essen`,`fressen`,`futter`,`füttern`,`futtern`],uk:[`голод`,`їсти`,`їж`,`корм`,`годув`],ru:[`голод`,`есть`,`еда`,`корм`,`кормит`]},`
Cow = create_type("Cow")
Cow.add_property("hunger", 0)
bella = Cow(x=0, y=0.6, z=0, shape="box", width=1.4, height=1, depth=0.7, color="white")
every 2 seconds:
    bella.hunger += 1
when bella.hunger > 5:
    say("Moo! I am hungry!")
on tap Cow:
    self.hunger = 0
    say("Yummy!")
`),H(`person`,`people`,`thing`,{en:[`person`,`human`,`man`,`woman`,`boy`,`girl`,`people`],de:[`mensch`,`person`,`mann`,`frau`,`junge`,`mädchen`,`madchen`,`leute`],uk:[`людин`,`людей`,`чолові`,`жінк`,`хлопч`,`дівчин`],ru:[`человек`,`люд`,`мужч`,`женщ`,`мальчик`,`девочк`]},`
Human = create_type("Human")
Human.add_property("name", "Max")
Human.add_property("age", 9)
alex = Human(x=0, y=0.9, z=0, shape="capsule", size=1, color="tomato")
on tap Human:
    say("Hi, I am", self.name)
`),H(`walker`,`people`,`action`,{en:[`walk`,`go`,`patrol`,`between`],de:[`laufen`,`gehen`,`spazier`,`zwischen`],uk:[`ходи`,`гуля`,`між`],ru:[`ходит`,`гуля`,`идти`,`между`]},`
Human = create_type("Human")
Human.add_property("speed", 2)
Flag = create_type("Flag")
a = Flag(x=-5, y=0.5, z=0, shape="cylinder", width=0.2, height=1, depth=0.2, color="red")
b = Flag(x=5, y=0.5, z=0, shape="cylinder", width=0.2, height=1, depth=0.2, color="blue")
walker = Human(x=0, y=0.9, z=0, shape="capsule", color="orange")
goal = b
on tick:
    walker.move_toward(goal)
    if walker.near(goal, 0.1):
        if goal == a:
            goal = b
        else:
            goal = a
`),H(`jumper`,`people`,`action`,{en:[`jump`,`hop`],de:[`spring`,`hüpf`,`hupf`],uk:[`стриб`,`скач`],ru:[`прыг`,`скач`]},`
physics.gravity = 9.8
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=12, height=1, depth=12, solid=true, color="olivedrab", shape="box")
Human = create_type("Human")
hopper = Human(x=0, y=1, z=0, shape="capsule", color="gold", mass=1, solid=true)
on tap Human:
    self.push(0, 7, 0)
`),H(`talker`,`people`,`action`,{en:[`talk`,`speak`,`say`,`message`,`hello`],de:[`sprech`,`sagen`,`reden`,`nachricht`,`hallo`],uk:[`говор`,`сказа`,`казати`,`повідом`,`привіт`],ru:[`говор`,`сказа`,`сообщ`,`привет`,`разговар`]},`
Robot = create_type("Robot")
robo = Robot(x=0, y=1, z=0, shape="box", color="silver", material="metal")
on create Robot:
    say("Beep! A robot was made.")
on tap Robot:
    say("Hello! Time in my world:", round(time()))
`),H(`farmer`,`people`,`thing`,{en:[`farmer`,`farm`,`garden`,`bed`],de:[`bauer`,`bäuer`,`bauer`,`farm`,`garten`,`beet`],uk:[`фермер`,`ферм`,`город`,`грядк`,`сад`],ru:[`фермер`,`ферм`,`огород`,`грядк`,`сад`]},`
Bed = create_type("Bed")
Bed.add_property("planted", false)
Plant = create_type("Plant")
Farmer = create_type("Farmer")
Farmer.add_property("speed", 2)
def plant(self, bed):
    Plant(x=bed.x, y=0.6, z=bed.z, shape="cone", size=0.5, color="green")
    bed.planted = true
Farmer.add_action("plant", plant)
bed = Bed(x=4, y=0.1, z=0, shape="box", width=2, height=0.2, depth=2, color="saddlebrown")
farmer = Farmer(x=-4, y=0.9, z=0, shape="capsule", color="steelblue")
on tick:
    if not bed.planted:
        farmer.move_toward(bed)
        if farmer.near(bed, 0.5):
            farmer.plant(bed)
`),H(`family`,`people`,`idea`,{en:[`family`,`friend`,`parent`,`mother`,`father`,`child`],de:[`familie`,`freund`,`eltern`,`mutter`,`vater`,`kind`],uk:[`сім`,`родин`,`друг`,`друз`,`мама`,`тато`,`батьк`,`дитин`],ru:[`семь`,`друг`,`друз`,`мама`,`папа`,`родител`,`ребён`,`ребен`]},`
Human = create_type("Human")
mom = Human(x=-2, y=0.9, z=0, shape="capsule", color="orchid")
dad = Human(x=0, y=0.9, z=0, shape="capsule", color="steelblue")
kid = Human(x=2, y=0.6, z=0, shape="capsule", size=0.6, color="gold")
relate(mom, "loves", kid)
relate(dad, "loves", kid)
say(len(kid.related_by("loves")), "people love the kid")
`),H(`dancer`,`people`,`action`,{en:[`dance`,`dancing`,`party`],de:[`tanz`,`party`],uk:[`танц`,`вечірк`],ru:[`танц`,`вечеринк`]},`
Dancer = create_type("Dancer")
Dancer.add_property("ry", 0)
star = Dancer(x=0, y=1, z=0, shape="capsule", color="magenta", material="shiny")
on tick:
    star.ry += 180 * dt
    star.y = 1 + 0.3 * abs(sin(time() * 4))
`),H(`house`,`buildings`,`thing`,{en:[`house`,`home`,`building`,`roof`],de:[`haus`,`gebäude`,`gebaude`,`dach`,`zuhause`],uk:[`будин`,`хат`,`дім`,`дах`,`будівл`],ru:[`дом`,`здани`,`крыш`,`хат`]},`
House = create_type("House")
Roof = create_type("Roof")
Door = create_type("Door")
house = House(x=0, y=1, z=0, shape="box", width=3, height=2, depth=3, color="wheat")
roof = Roof(x=0, y=1.6, z=0, shape="pyramid", width=4.2, height=1.4, depth=4.2, ry=45, color="firebrick")
roof.parent = house
door = Door(x=0, y=-0.4, z=1.52, shape="box", width=0.8, height=1.2, depth=0.05, color="saddlebrown")
door.parent = house
`),H(`tower`,`buildings`,`thing`,{en:[`tower`,`stack`,`pile`],de:[`turm`,`stapel`],uk:[`веж`,`башт`,`стос`,`купк`],ru:[`башн`,`стопк`,`стек`,`куч`]},`
Block = create_type("Block")
for i in range(8):
    Block(x=0, y=0.5 + i, z=0, shape="box", size=1, color="sandybrown")
`),H(`wall`,`buildings`,`thing`,{en:[`wall`,`fence`,`row`,`bricks`],de:[`mauer`,`wand`,`zaun`,`reihe`,`ziegel`],uk:[`стін`,`паркан`,`ряд`,`цегл`],ru:[`стен`,`забор`,`ряд`,`кирпич`]},`
Brick = create_type("Brick")
for row in range(3):
    for i in range(10):
        Brick(x=i - 5, y=0.25 + row * 0.5, z=0, shape="box", width=0.95, height=0.45, depth=0.5, color="firebrick")
`),H(`bridge`,`buildings`,`thing`,{en:[`bridge`],de:[`brücke`,`brucke`],uk:[`міст`,`мост`],ru:[`мост`]},`
Pillar = create_type("Pillar")
Deck = create_type("Deck")
left = Pillar(x=-5, y=1, z=0, shape="box", width=1, height=2, depth=2, color="gray")
right = Pillar(x=5, y=1, z=0, shape="box", width=1, height=2, depth=2, color="gray")
deck = Deck(x=0, y=2.1, z=0, shape="box", width=11, height=0.2, depth=2, color="burlywood", solid=true)
`),H(`door`,`buildings`,`thing`,{en:[`door`,`open`,`close`],de:[`tür`,`tur`,`öffn`,`offn`,`schließ`,`schliess`],uk:[`двер`,`відкри`,`закри`],ru:[`двер`,`откры`,`закры`]},`
Door = create_type("Door")
Door.add_property("open", false)
Door.add_property("ry", 0)
door = Door(x=0, y=1, z=0, shape="box", width=1, height=2, depth=0.1, color="saddlebrown")
on tap Door:
    self.open = not self.open
    if self.open:
        self.ry = 90
    else:
        self.ry = 0
`),H(`lamp`,`buildings`,`thing`,{en:[`lamp`,`light`,`switch`,`on off`],de:[`lampe`,`licht`,`schalter`,`an aus`],uk:[`ламп`,`світл`,`вимика`,`вмика`],ru:[`ламп`,`свет`,`выключ`,`включ`]},`
Lamp = create_type("Lamp")
Lamp.add_property("lit", false)
lamp = Lamp(x=0, y=2, z=0, shape="sphere", size=0.8, color="gray", material="matte")
on tap Lamp:
    self.lit = not self.lit
    if self.lit:
        self.color = "yellow"
        self.material = "glow"
    else:
        self.color = "gray"
        self.material = "matte"
`),H(`city`,`buildings`,`thing`,{en:[`city`,`town`,`street`,`village`],de:[`stadt`,`dorf`,`straße`,`strasse`],uk:[`міст`,`село`,`вулиц`],ru:[`город`,`деревн`,`улиц`,`посёл`,`посел`]},`
Building = create_type("Building")
for gx in range(5):
    for gz in range(5):
        h = random(1, 6)
        Building(x=gx * 3 - 6, y=h / 2, z=gz * 3 - 6, shape="box", width=2, height=h, depth=2, color="lightsteelblue")
`),H(`ball`,`buildings`,`thing`,{en:[`ball`,`football`,`soccer`],de:[`ball`,`fußball`,`fussball`],uk:[`м'яч`,`мяч`,`футбол`],ru:[`мяч`,`футбол`]},`
physics.gravity = 9.8
Floor = create_type("Floor")
floor = Floor(x=0, y=-0.5, z=0, width=12, height=1, depth=12, solid=true, color="seagreen", shape="box")
Ball = create_type("Ball")
ball = Ball(x=0, y=5, z=0, shape="sphere", size=1, color="white", mass=1, solid=true, bounce=0.7)
`),H(`chest`,`buildings`,`thing`,{en:[`chest`,`treasure`,`box`,`inventory`,`items`],de:[`truhe`,`schatz`,`kiste`,`inventar`],uk:[`скрин`,`скарб`,`ящик`,`інвентар`,`предмет`],ru:[`сундук`,`клад`,`сокровищ`,`ящик`,`инвентар`,`предмет`]},`
Chest = create_type("Chest")
Chest.add_property("items", [])
chest = Chest(x=0, y=0.5, z=0, shape="box", width=1.4, height=1, depth=1, color="goldenrod")
chest.items.append("gold coin")
chest.items.append("magic stone")
on tap Chest:
    say("Inside:", self.items)
`),H(`car`,`vehicles`,`thing`,{en:[`car`,`drive`,`truck`,`vehicle`],de:[`auto`,`fahr`,`lastwagen`,`fahrzeug`,`wagen`],uk:[`машин`,`авто`,`їзд`,`вантаж`],ru:[`машин`,`авто`,`ехат`,`езд`,`грузов`]},`
Car = create_type("Car")
Car.add_property("speed", 3)
car = Car(x=-8, y=0.5, z=0, shape="box", width=2, height=0.8, depth=1, color="red")
on tick:
    if car.x < 8:
        car.x += car.speed * dt
`),H(`train`,`vehicles`,`thing`,{en:[`train`,`railway`,`wagon`],de:[`zug`,`eisenbahn`,`wagen`],uk:[`потяг`,`поїзд`,`вагон`],ru:[`поезд`,`вагон`,`паровоз`]},`
Engine = create_type("Engine")
Wagon = create_type("Wagon")
engine = Engine(x=-6, y=0.6, z=0, shape="box", width=2, height=1.2, depth=1, color="darkred")
last = engine
for i in range(3):
    w = Wagon(x=-2.2, y=0, z=0, shape="box", width=2, height=1, depth=1, color="navy")
    w.parent = last
    last = w
on tick:
    engine.x += 2 * dt
    if engine.x > 10:
        engine.x = -6
`),H(`boat`,`vehicles`,`thing`,{en:[`boat`,`ship`,`sail`],de:[`boot`,`schiff`,`segel`],uk:[`човен`,`човн`,`корабл`,`вітрил`],ru:[`лодк`,`корабл`,`парус`]},`
Water = create_type("Water")
Boat = create_type("Boat")
sea = Water(x=0, y=0, z=0, shape="plane", width=30, height=0.1, depth=30, color="dodgerblue", material="glass")
boat = Boat(x=-8, y=0.3, z=0, shape="box", width=2, height=0.5, depth=1, color="sienna")
on tick:
    boat.x += 1.5 * dt
    boat.y = 0.3 + 0.15 * sin(time() * 3)
    if boat.x > 8:
        boat.x = -8
`),H(`airplane`,`vehicles`,`thing`,{en:[`airplane`,`plane`,`jet`,`helicopter`],de:[`flugzeug`,`jet`,`hubschrauber`],uk:[`літак`,`гелікоптер`,`вертоліт`],ru:[`самолёт`,`самолет`,`вертолёт`,`вертолет`]},`
Plane = create_type("Plane")
plane = Plane(x=-10, y=1, z=0, shape="capsule", width=0.6, height=3, depth=0.6, rz=90, color="silver", material="metal")
on tick:
    plane.x += 4 * dt
    if plane.y < 8:
        plane.y += 1 * dt
    if plane.x > 12:
        plane.x = -10
        plane.y = 1
`),H(`cloud`,`weather`,`thing`,{en:[`cloud`],de:[`wolke`],uk:[`хмар`],ru:[`облак`,`туч`]},`
Cloud = create_type("Cloud")
cloud = Cloud(x=0, y=6, z=0, shape="sphere", size=2, color="white")
part1 = Cloud(x=1.2, y=-0.2, z=0, shape="sphere", size=1.6, color="white")
part2 = Cloud(x=-1.2, y=-0.3, z=0.3, shape="sphere", size=1.4, color="white")
part1.parent = cloud
part2.parent = cloud
on tick:
    cloud.x += 0.5 * dt
`),H(`rain`,`weather`,`thing`,{en:[`rain`,`drop`],de:[`regen`,`regn`,`tropfen`],uk:[`дощ`,`крапл`,`дощик`],ru:[`дожд`,`капл`,`дождик`]},`
physics.gravity = 9.8
Drop = create_type("Drop")
every 0.3 seconds:
    Drop(x=random(-5, 5), y=10, z=random(-5, 5), shape="sphere", size=0.15, color="deepskyblue", mass=1)
every 1 seconds:
    for d in all(Drop):
        if d.y < 0:
            d.destroy()
# the cloud really rains: water collects on the ground under it
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=12, height=1, depth=12, color="yellowgreen", solid=true)
Cloud = create_type("Cloud")
cloud = Cloud(x=0, y=9, z=0, shape="sphere", width=6, height=1.5, depth=6, color="gray", rain=0.5)
`),H(`snow`,`weather`,`thing`,{en:[`snow`,`winter`,`flake`],de:[`schnee`,`winter`,`flocke`],uk:[`сніг`,`снігу`,`зима`,`сніжин`],ru:[`снег`,`зим`,`снежин`]},`
Flake = create_type("Flake")
for i in range(30):
    Flake(x=random(-8, 8), y=random(1, 10), z=random(-8, 8), shape="sphere", size=0.2, color="white")
on tick:
    for f in all(Flake):
        f.y -= 0.8 * dt
        if f.y < 0:
            f.y = 10
# real snow lies on the ground while it is cold
physics.temperature = -5
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=16, height=1, depth=16, color="yellowgreen", solid=true)
Cloud = create_type("Cloud")
cloud = Cloud(x=0, y=10, z=0, shape="sphere", width=8, height=1.5, depth=8, color="white", snowfall=0.6)
`),H(`day_night`,`weather`,`thing`,{en:[`day`,`night`,`sunrise`,`sunset`],de:[`tag`,`nacht`,`sonnenaufgang`,`sonnenuntergang`],uk:[`день`,`ніч`,`світан`,`захід`],ru:[`день`,`ночь`,`рассвет`,`закат`]},`
Star = create_type("Star")
sun = Star(x=10, y=0, z=0, shape="sphere", size=2, color="gold", material="glow")
on tick:
    angle = time() * 0.3
    sun.x = 10 * cos(angle)
    sun.y = 10 * sin(angle)
    if sun.y > 0:
        sun.color = "gold"
    else:
        sun.color = "midnightblue"
`),H(`rainbow`,`weather`,`thing`,{en:[`rainbow`],de:[`regenbogen`],uk:[`веселк`],ru:[`радуг`]},`
Arc = create_type("Arc")
colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
for c in range(len(colors)):
    for i in range(13):
        angle = pi * i / 12
        radius = 6 - c * 0.3
        Arc(x=radius * cos(angle), y=radius * sin(angle), z=-5, shape="sphere", size=0.35, color=colors[c], material="glow")
`),H(`wind`,`weather`,`thing`,{en:[`wind`,`storm`,`blow`],de:[`wind`,`sturm`,`blasen`,`pusten`],uk:[`вітер`,`вітр`,`бур`,`дму`],ru:[`ветер`,`ветр`,`бур`,`дует`]},`
physics.wind = 2
Leaf = create_type("Leaf")
for i in range(8):
    Leaf(x=random(-6, 0), y=random(1, 4), z=random(-3, 3), shape="plane", width=0.4, height=0.05, depth=0.3, color="orange")
on tick:
    for leaf in all(Leaf):
        leaf.x += physics.wind * dt
        if leaf.x > 8:
            leaf.x = -8
`)],nn=[H(`move`,`movement`,`action`,{en:[`move`,`moving`,`forward`,`travel`],de:[`beweg`,`vorwärts`,`vorwarts`,`fahren`],uk:[`рух`,`руш`,`вперед`,`пересув`],ru:[`двига`,`движ`,`вперёд`,`вперед`,`перемещ`]},`
Thing = create_type("Thing")
Thing.add_property("speed", 2)
box = Thing(x=-5, y=0.5, z=0, shape="box", color="orange")
on tick:
    box.x += box.speed * dt
`),H(`spin`,`movement`,`action`,{en:[`spin`,`rotate`,`turn`,`twirl`],de:[`dreh`,`rotier`,`wirbel`],uk:[`оберт`,`крути`,`поверт`,`кружл`],ru:[`враща`,`крути`,`поворач`,`вертит`]},`
Thing = create_type("Thing")
Thing.add_property("ry", 0)
top = Thing(x=0, y=1, z=0, shape="box", color="mediumpurple")
on tick:
    top.ry += 90 * dt
`),H(`fall`,`movement`,`action`,{en:[`fall`,`drop`,`gravity`,`heavy`,`weight`],de:[`fall`,`schwerkraft`,`schwer`,`gewicht`],uk:[`пада`,`впас`,`гравітац`,`важк`,`вага`,`вагу`],ru:[`пада`,`упас`,`гравитац`,`тяжел`,`вес`]},`
physics.gravity = 9.8
Stone = create_type("Stone")
stone = Stone(x=0, y=8, z=0, shape="sphere", color="gray", mass=1)
`),H(`land`,`movement`,`action`,{en:[`land`,`stand`,`solid`,`collide`,`stop falling`],de:[`landen`,`stehen`,`fest`,`aufprall`],uk:[`призем`,`стоя`,`тверд`,`зіткн`],ru:[`призем`,`стоят`,`тверд`,`столкн`]},`
physics.gravity = 9.8
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=12, height=1, depth=12, solid=true, color="olivedrab", shape="box")
Box = create_type("Box")
box = Box(x=0, y=6, z=0, shape="box", color="orange", mass=1, solid=true)
`),H(`bounce`,`movement`,`action`,{en:[`bounce`,`bouncy`,`rebound`],de:[`abprall`,`hüpf`,`hupf`,`federn`,`springball`],uk:[`відскак`,`відскок`,`пружин`],ru:[`отскак`,`отскок`,`пружин`,`попрыг`]},`
physics.gravity = 9.8
Floor = create_type("Floor")
floor = Floor(x=0, y=-0.5, z=0, width=12, height=1, depth=12, solid=true, color="teal", shape="box")
Ball = create_type("Ball")
ball = Ball(x=0, y=6, z=0, shape="sphere", color="red", mass=1, solid=true, bounce=0.85)
`),H(`fly`,`movement`,`action`,{en:[`fly`,`flying`,`float up`,`rise`,`up`],de:[`flieg`,`schweb`,`steig`,`hoch`],uk:[`літа`,`літає`,`полет`,`вгору`,`підніма`],ru:[`лета`,`летит`,`полет`,`вверх`,`подним`]},`
Balloon = create_type("Balloon")
balloon = Balloon(x=0, y=0.5, z=0, shape="sphere", color="crimson", mass=1, ay=12)
# ay pushes it up a little more than gravity pulls it down — even when gravity is 9.8
`),H(`zero_g`,`movement`,`action`,{en:[`zero gravity`,`weightless`,`float`,`drift`],de:[`schwerelos`,`treiben`,`schweben`],uk:[`невагом`,`дрейф`,`плава`],ru:[`невесом`,`дрейф`,`парит`]},`
physics.gravity = 0
physics.air_resistance = 0
Crate = create_type("Crate")
crate = Crate(x=0, y=2, z=0, shape="box", color="tan", mass=1)
crate.push(1, 0.5, 0)
`),H(`slide`,`movement`,`action`,{en:[`slide`,`ice`,`slippery`,`friction`],de:[`rutsch`,`eis`,`glatt`,`reibung`],uk:[`ковза`,`лід`,`слизьк`,`тертя`],ru:[`скольз`,`лёд`,`лед`,`трени`]},`
physics.gravity = 9.8
Ice = create_type("Ice")
ice = Ice(x=0, y=-0.5, z=0, width=30, height=1, depth=6, solid=true, color="lightcyan", shape="box", friction=0.02)
Puck = create_type("Puck")
puck = Puck(x=-10, y=0.25, z=0, shape="cylinder", width=0.8, height=0.3, depth=0.8, color="black", mass=1, solid=true)
puck.push(8, 0, 0)
`),H(`push`,`movement`,`action`,{en:[`push`,`kick`,`throw`,`shoot`],de:[`schub`,`stoß`,`stoss`,`kick`,`werf`,`schieß`,`schiess`],uk:[`штовх`,`пхн`,`удар`,`кида`,`кину`],ru:[`толк`,`пинок`,`удар`,`кида`,`брос`]},`
physics.gravity = 9.8
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=20, height=1, depth=20, solid=true, color="olivedrab", shape="box")
Ball = create_type("Ball")
ball = Ball(x=-6, y=0.5, z=0, shape="sphere", color="white", mass=1, solid=true, bounce=0.5)
on tap Ball:
    self.push(5, 6, 0)
`),H(`go_to`,`movement`,`action`,{en:[`go to`,`reach`,`target`,`towards`],de:[`hingeh`,`ziel`,`erreich`,`richtung`],uk:[`дійти`,`ціль`,`до мети`,`напрям`],ru:[`дойти`,`цель`,`к цели`,`направ`]},`
Runner = create_type("Runner")
Runner.add_property("speed", 2)
Goal = create_type("Goal")
goal = Goal(x=6, y=0.5, z=4, shape="cylinder", width=0.3, height=1, depth=0.3, color="gold")
runner = Runner(x=-6, y=0.5, z=-4, shape="capsule", color="dodgerblue")
on tick:
    runner.move_toward(goal)
`),H(`follow`,`movement`,`action`,{en:[`follow`,`chase`,`after`],de:[`folg`,`verfolg`,`hinterher`],uk:[`слід`,`перслід`,`догоня`,`за ним`],ru:[`след`,`преслед`,`догоня`,`за ним`]},`
Leader = create_type("Leader")
Follower = create_type("Follower")
Follower.add_property("speed", 1.5)
leader = Leader(x=0, y=0.5, z=0, shape="sphere", color="gold")
duck = Follower(x=-4, y=0.4, z=-4, shape="sphere", size=0.6, color="yellow")
on tick:
    leader.x = 4 * cos(time() * 0.5)
    leader.z = 4 * sin(time() * 0.5)
    if not duck.near(leader, 1):
        duck.move_toward(leader)
`),H(`random_walk`,`movement`,`action`,{en:[`random walk`,`wander`,`roam`,`here and there`],de:[`herumlauf`,`umherwander`,`zufällig lauf`,`zufallig lauf`],uk:[`блука`,`безлад`,`туди-сюди`],ru:[`блужда`,`бродит`,`туда-сюда`]},`
Bug = create_type("Bug")
Bug.add_property("speed", 1)
Spot = create_type("Spot")
bug = Bug(x=0, y=0.2, z=0, shape="sphere", size=0.4, color="black")
target = Spot(x=0, y=0, z=0, visible=false)
every 2 seconds:
    target.x = random(-5, 5)
    target.z = random(-5, 5)
on tick:
    bug.move_toward(target)
`),H(`patrol`,`movement`,`action`,{en:[`back and forth`,`patrol`,`left and right`,`swing`],de:[`hin und her`,`pendel`,`patrouill`],uk:[`туди і назад`,`патрул`,`вліво-вправо`,`гойд`],ru:[`туда и обратно`,`патрул`,`влево-вправо`,`качел`]},`
Guard = create_type("Guard")
Guard.add_property("speed", 2)
guard = Guard(x=0, y=0.9, z=0, shape="capsule", color="navy")
on tick:
    guard.x += guard.speed * dt
    if guard.x > 5 or guard.x < -5:
        guard.speed = -guard.speed
`),H(`teleport`,`movement`,`action`,{en:[`teleport`,`jump to`,`appear somewhere`],de:[`teleport`,`beam`],uk:[`телепорт`],ru:[`телепорт`]},`
Magic = create_type("Magic")
cube = Magic(x=0, y=0.5, z=0, shape="box", color="violet", material="glow")
on tap Magic:
    self.x = random(-6, 6)
    self.z = random(-6, 6)
`),H(`color`,`looks`,`action`,{en:[`color`,`colour`,`paint`,`red`,`blue`,`green`],de:[`farbe`,`färb`,`farb`,`rot`,`blau`,`grün`,`grun`],uk:[`колір`,`колор`,`фарб`,`червон`,`синій`,`зелен`],ru:[`цвет`,`краси`,`красн`,`синий`,`зелен`]},`
Box = create_type("Box")
box = Box(x=0, y=0.5, z=0, shape="box", color="tomato")
on tap Box:
    if self.color == "tomato":
        self.color = "royalblue"
    else:
        self.color = "tomato"
`),H(`random_color`,`looks`,`action`,{en:[`random color`,`rainbow colors`,`disco`,`blink`],de:[`zufallsfarbe`,`disko`,`blink`],uk:[`випадков колір`,`диско`,`блима`],ru:[`случайн цвет`,`диско`,`мига`]},`
Light = create_type("Light")
colors = ["red", "orange", "yellow", "lime", "cyan", "magenta"]
bulb = Light(x=0, y=1, z=0, shape="sphere", color="white", material="glow")
every 0.5 seconds:
    bulb.color = colors[random(0, len(colors) - 1)]
`),H(`glow`,`looks`,`action`,{en:[`glow`,`shine`,`bright`,`neon`],de:[`leucht`,`glüh`,`gluh`,`hell`,`neon`],uk:[`світи`,`сяй`,`яскрав`,`неон`],ru:[`свети`,`сия`,`ярк`,`неон`]},`
Gem = create_type("Gem")
gem = Gem(x=0, y=1, z=0, shape="sphere", size=1.2, color="cyan", material="glow")
`),H(`materials`,`looks`,`action`,{en:[`material`,`glass`,`metal`,`shiny`,`matte`],de:[`material`,`glas`,`metall`,`glänz`,`glanz`,`matt`],uk:[`матеріал`,`скло`,`метал`,`блиск`,`матов`],ru:[`материал`,`стекл`,`метал`,`блест`,`матов`]},`
Sample = create_type("Sample")
kinds = ["matte", "shiny", "metal", "glass", "glow"]
for i in range(len(kinds)):
    Sample(x=i * 2 - 4, y=0.6, z=0, shape="sphere", size=1.2, color="steelblue", material=kinds[i])
`),H(`patterns`,`looks`,`action`,{en:[`pattern`,`texture`,`brick`,`wood`,`stripe`,`spots`,`scales`],de:[`muster`,`textur`,`ziegel`,`holz`,`streif`,`schupp`],uk:[`візерун`,`узор`,`текстур`,`цегл`,`дерев`,`смуж`,`плям`,`луск`],ru:[`узор`,`текстур`,`кирпич`,`дерев`,`полос`,`пятн`,`чешу`]},`
Tile = create_type("Tile")
kinds = ["bricks", "wood", "tiles", "stones", "grass", "scales", "stripes", "spots", "windows", "stars"]
for i in range(len(kinds)):
    Tile(x=i * 1.6 - 7, y=0.7, z=0, shape="box", size=1.4, color="orange", pattern=kinds[i])
`),H(`liquids`,`weather`,`thing`,{en:[`liquid`,`lava`,`honey`,`milk`,`juice`,`oil`,`pour`,`flow`,`fountain`],de:[`flüssig`,`flussig`,`lava`,`honig`,`milch`,`saft`,`öl`,`gieß`,`giess`,`brunnen`,`wasserhahn`],uk:[`рідин`,`лав`,`мед`,`молок`,`сік`,`олі`,`лити`,`налий`,`тече`,`фонтан`,`кран`],ru:[`жидк`,`лав`,`мед`,`мёд`,`молок`,`сок`,`масл`,`налей`,`лить`,`течёт`,`течет`,`фонтан`,`кран`]},`
physics.gravity = 9.8
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=30, height=1, depth=30, color="yellowgreen", solid=true)
kinds = ["water", "milk", "juice", "oil", "honey", "lava"]
for i in range(len(kinds)):
    pour(kinds[i], i * 4 - 10, -6, 3)
Tap = create_type("Tap")
tap1 = Tap(x=0, y=2, z=4, shape="cylinder", size=0.4, color="silver", material="metal", liquid="water", flow=1)
`),H(`floating`,`looks`,`idea`,{en:[`float`,`sink`,`swim`,`density`],de:[`schwimm`,`sink`,`untergeh`,`dichte`],uk:[`плава`,`тоне`,`потон`,`густин`],ru:[`плава`,`тонет`,`утон`,`плотн`]},`
physics.gravity = 9.8
Stone = create_type("Stone")
floor = Stone(x=0, y=-0.25, z=0, width=8, height=0.5, depth=8, color="sienna", solid=true)
for s in [-1, 1]:
    Stone(x=4 * s, y=1, z=0, width=0.5, height=2.5, depth=8, color="gray", solid=true)
    Stone(x=0, y=1, z=4 * s, width=8, height=2.5, depth=0.5, color="gray", solid=true)
if liquid_depth(0, 0) < 0.1:
    pour("water", 0, 0, 30)
Thing = create_type("Thing")
ball = Thing(x=-1, y=2, z=0, shape="sphere", size=0.8, color="orange", mass=1, solid=true)
rock = Thing(x=1, y=2, z=0, size=0.6, color="gray", mass=1, solid=true, density=3)
`),H(`temperature`,`weather`,`idea`,{en:[`temperature`,`melt`,`freeze`,`ice`,`warm`,`cold`,`hot`],de:[`temperatur`,`schmilz`,`schmelz`,`gefrier`,`eis`,`warm`,`kalt`,`heiß`,`heiss`],uk:[`температур`,`тане`,`розтан`,`замерз`,`лід`,`льод`,`тепл`,`холод`,`спек`],ru:[`температур`,`тает`,`растаял`,`замерз`,`лёд`,`лед`,`тепл`,`холод`,`жар`]},`
physics.gravity = 9.8
physics.temperature = 25
Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=20, height=1, depth=20, color="yellowgreen", solid=true)
Snowman = create_type("Snowman")
body = Snowman(x=0, y=0.7, z=0, shape="sphere", size=1.4, color="white", melts=true)
head = Snowman(x=0, y=1, z=0, shape="sphere", size=0.9, color="white", parent=body)
`),H(`min_height`,`movement`,`action`,{en:[`not lower`,`min height`,`minimum height`,`hover`,`min_y`],de:[`nicht tiefer`,`mindesthöhe`,`mindesthohe`,`schweb`],uk:[`не нижче`,`мінімальн`,`зависа`,`висить`],ru:[`не ниже`,`минимальн`,`зависа`,`висит`]},`
physics.gravity = 9.8
Box = create_type("Box")
box = Box(x=0, y=8, z=0, size=1, color="orange", mass=1, min_y=2)
`),H(`grow_size`,`looks`,`action`,{en:[`grow`,`bigger`,`larger`,`size`],de:[`wachs`,`größer`,`grosser`,`groß`,`gross`],uk:[`рост`,`рости`,`більш`,`розмір`,`збільш`],ru:[`раст`,`рост`,`больш`,`размер`,`увелич`]},`
Balloon = create_type("Balloon")
Balloon.add_property("size", 0.5)
b = Balloon(x=0, y=1.5, z=0, shape="sphere", color="hotpink")
every 1 seconds:
    if b.size < 3:
        b.size += 0.25
`),H(`shrink`,`looks`,`action`,{en:[`shrink`,`smaller`,`melt`],de:[`schrumpf`,`kleiner`,`schmelz`],uk:[`зменш`,`менш`,`тане`,`тан`],ru:[`уменьш`,`меньш`,`тает`,`таят`]},`
Ice = create_type("Ice")
Ice.add_property("size", 2)
cube = Ice(x=0, y=1, z=0, shape="box", color="lightcyan", material="glass")
every 1 seconds:
    cube.size -= 0.2
    if cube.size < 0.3:
        cube.destroy()
`),H(`hide_show`,`looks`,`action`,{en:[`hide`,`show`,`invisible`,`visible`,`vanish`],de:[`verstecken`,`zeigen`,`unsichtbar`,`sichtbar`],uk:[`схова`,`показ`,`невидим`,`видим`,`зникн`],ru:[`спрят`,`показ`,`невидим`,`видим`,`исчез`]},`
Ghost = create_type("Ghost")
Button = create_type("Button")
ghost = Ghost(x=2, y=1, z=0, shape="capsule", color="white", material="glass")
button = Button(x=-2, y=0.25, z=0, shape="cylinder", width=1, height=0.5, depth=1, color="red")
on tap Button:
    ghost.visible = not ghost.visible
`),H(`shapes`,`looks`,`idea`,{en:[`shape`,`cube`,`sphere`,`cone`,`cylinder`,`pyramid`],de:[`form`,`würfel`,`wurfel`,`kugel`,`kegel`,`zylinder`,`pyramide`],uk:[`форм`,`куб`,`куля`,`конус`,`циліндр`,`пірамід`],ru:[`форм`,`куб`,`шар`,`конус`,`цилиндр`,`пирамид`]},`
Shape = create_type("Shape")
shapes = ["box", "sphere", "cone", "cylinder", "capsule", "torus", "plane", "pyramid"]
for i in range(len(shapes)):
    Shape(x=i * 1.8 - 6.3, y=0.6, z=0, shape=shapes[i], color="orange")
`),H(`tilt`,`looks`,`action`,{en:[`tilt`,`lean`,`angle`,`upside down`,`rotation`],de:[`neig`,`kipp`,`schräg`,`schrag`,`kopfüber`,`kopfuber`],uk:[`нахил`,`кут`,`догори ногами`,`поворот`],ru:[`наклон`,`угол`,`вверх ногами`,`поворот`]},`
Board = create_type("Board")
board = Board(x=0, y=1, z=0, shape="box", width=3, height=0.2, depth=1, color="peru", rz=20)
Tree = create_type("Tree")
upside = Tree(x=3, y=1.5, z=0, shape="cone", width=1, height=2, depth=1, color="green", rx=180)
`),H(`attach`,`looks`,`action`,{en:[`attach`,`stick`,`hat`,`on top`,`together`,`parent`],de:[`befestig`,`anhäng`,`anhang`,`hut`,`oben drauf`,`zusammen`],uk:[`прикріп`,`причеп`,`капелюх`,`зверху`,`разом`],ru:[`прикреп`,`прицеп`,`шляп`,`сверху`,`вместе`]},`
Snowman = create_type("Snowman")
Hat = create_type("Hat")
body = Snowman(x=0, y=0.8, z=0, shape="sphere", size=1.6, color="white")
head = Snowman(x=0, y=1.2, z=0, shape="sphere", size=1, color="white")
hat = Hat(x=0, y=0.7, z=0, shape="cylinder", width=0.6, height=0.5, depth=0.6, color="black")
head.parent = body
hat.parent = head
on tick:
    body.x = 2 * sin(time())
`),H(`on_tap`,`events`,`idea`,{en:[`tap`,`click`,`touch it`,`press`],de:[`tipp`,`klick`,`antipp`,`drück`,`druck`],uk:[`натис`,`тиск`,`клац`,`торкн`],ru:[`нажм`,`нажат`,`клик`,`тапн`,`тыкн`]},`
Button = create_type("Button")
Button.add_property("presses", 0)
button = Button(x=0, y=0.25, z=0, shape="cylinder", width=1.5, height=0.5, depth=1.5, color="red")
on tap Button:
    self.presses += 1
    say("Pressed", self.presses, "times")
`),H(`on_create`,`events`,`idea`,{en:[`on create`,`when created`,`new object`,`born`],de:[`erschaffen`,`entsteht`,`neues objekt`,`geboren`],uk:[`створен`,`новий об`,`народж`],ru:[`создан`,`новый объ`,`рожд`]},`
Bubble = create_type("Bubble")
on create Bubble:
    self.color = ["pink", "skyblue", "lightgreen"][random(0, 2)]
    say("A new bubble!")
for i in range(3):
    Bubble(x=i * 2 - 2, y=1, z=0, shape="sphere", material="glass")
`),H(`on_destroy`,`events`,`idea`,{en:[`destroy`,`delete`,`remove`,`disappear`,`die`],de:[`zerstör`,`zerstor`,`lösch`,`losch`,`entfern`,`verschwind`,`stirb`],uk:[`знищ`,`видал`,`прибра`,`зник`,`помир`],ru:[`уничтож`,`удал`,`убра`,`исчез`,`умир`]},`
Balloon = create_type("Balloon")
on destroy Balloon:
    say("Pop!")
balloon = Balloon(x=0, y=1, z=0, shape="sphere", color="red")
on tap Balloon:
    self.destroy()
`),H(`repeat`,`events`,`idea`,{en:[`every`,`repeat`,`again and again`,`each second`],de:[`jede`,`wiederhol`,`immer wieder`],uk:[`кожн`,`повтор`,`знову і знову`],ru:[`кажд`,`повтор`,`снова и снова`]},`
count = 0
every 1 seconds:
    count += 1
    say("Tick number", count)
`),H(`timer`,`events`,`idea`,{en:[`after`,`later`,`wait`,`timer`,`delay`],de:[`nach`,`später`,`spater`,`warte`,`timer`,`verzöger`,`verzoger`],uk:[`через`,`пізніш`,`чека`,`таймер`,`затрим`],ru:[`через`,`позже`,`подожд`,`таймер`,`задерж`]},`
Bomb = create_type("Bomb")
bomb = Bomb(x=0, y=0.5, z=0, shape="sphere", color="black")
after 3 seconds:
    bomb.color = "orange"
    bomb.material = "glow"
    say("Boom!")
`),H(`touches`,`events`,`idea`,{en:[`touch`,`touches`,`hit`,`collision`,`bump`,`meet`],de:[`berühr`,`beruhr`,`treff`,`zusammenstoß`,`zusammenstoss`,`kollision`],uk:[`торка`,`зіткн`,`вдаря`,`зустріч`,`колізі`],ru:[`каса`,`столкн`,`ударя`,`встреча`,`коллиз`]},`
physics.gravity = 9.8
Floor = create_type("Floor")
floor = Floor(x=0, y=-0.5, z=0, width=10, height=1, depth=10, solid=true, color="slategray", shape="box")
Drop = create_type("Drop")
drop = Drop(x=0, y=5, z=0, shape="sphere", color="skyblue", mass=1, solid=true)
when Drop touches Floor:
    a.color = "navy"
    say("Splash!")
`),H(`changes`,`events`,`idea`,{en:[`changes`,`when it changes`,`react`,`watch`],de:[`ändert`,`andert`,`reagier`,`beobacht`],uk:[`змінюєт`,`змін`,`реагу`,`стеж`],ru:[`меняет`,`изменя`,`реагир`,`следит`]},`
Plant = create_type("Plant")
Plant.add_property("height", 1)
Plant.add_property("size", 0.5)
p = Plant(x=0, y=0.5, z=0, shape="cone", color="green")
when Plant.height changes:
    self.size = self.height / 2
every 1 seconds:
    p.height += 0.5
`),H(`condition_rule`,`events`,`idea`,{en:[`when`,`as soon as`,`becomes`,`reaches`],de:[`wenn`,`sobald`,`erreicht`],uk:[`коли`,`щойно`,`досягн`,`стане`],ru:[`когда`,`как только`,`достиг`,`станет`]},`
water = 0
every 1 seconds:
    water += 1
when water >= 5:
    say("The bucket is full!")
`),H(`spawn`,`events`,`action`,{en:[`spawn`,`create many`,`more and more`,`appear`,`multiply`,`reproduce`],de:[`erzeug`,`immer mehr`,`erschein`,`vermehr`],uk:[`з'являт`,`зявля`,`все більше`,`розмнож`,`багато створ`],ru:[`появля`,`всё больше`,`все больше`,`размнож`,`много созд`]},`
Stone = create_type("Stone")
first = Stone(x=0, y=0.5, z=0, shape="sphere", size=0.5, color="gray")
every 2 seconds:
    if len(all(Stone)) < 30:
        Stone(x=random(-6, 6), y=0.5, z=random(-6, 6), shape="sphere", size=0.5, color="gray")
`),H(`explosion`,`events`,`action`,{en:[`explode`,`explosion`,`burst`,`boom`],de:[`explodier`,`explosion`,`platz`,`bumm`],uk:[`вибух`,`лопн`,`бум`],ru:[`взрыв`,`лопн`,`бум`,`взорв`]},`
physics.gravity = 9.8
Box = create_type("Box")
Piece = create_type("Piece")
box = Box(x=0, y=1, z=0, shape="box", color="orange")
on tap Box:
    for i in range(8):
        piece = Piece(x=self.x, y=self.y, z=self.z, shape="box", size=0.3, color="red", mass=1)
        piece.push(random(-4, 4), random(3, 8), random(-4, 4))
    self.destroy()
`),H(`score`,`games`,`idea`,{en:[`score`,`points`,`count`],de:[`punkte`,`punktestand`,`zählen`,`zahlen`],uk:[`бал`,`очк`,`рахун`,`лічиль`],ru:[`очк`,`балл`,`счёт`,`счет`,`счётчик`]},`
score = 0
Star = create_type("Star")
star = Star(x=0, y=1, z=0, shape="sphere", color="gold", material="glow")
on tap Star:
    score += 1
    say("Score:", score)
`),H(`collect`,`games`,`idea`,{en:[`collect`,`coin`,`pick up`,`gather`],de:[`sammel`,`münze`,`munze`,`aufheb`],uk:[`збира`,`монет`,`підбира`],ru:[`собира`,`монет`,`подбира`]},`
Robot = create_type("Robot")
Robot.add_property("speed", 3)
Coin = create_type("Coin")
coins = 0
robot = Robot(x=0, y=0.9, z=0, shape="capsule", color="dodgerblue")
for i in range(5):
    Coin(x=random(-6, 6), y=0.5, z=random(-6, 6), shape="cylinder", width=0.6, height=0.1, depth=0.6, rx=90, color="gold", material="metal")
on tick:
    left = all(Coin)
    if len(left) > 0:
        robot.move_toward(left[0])
        if robot.near(left[0], 0.6):
            left[0].destroy()
            coins += 1
`),H(`walk_coins`,`games`,`idea`,{en:[`walk`,`coin`,`collect`,`player`],de:[`laufen`,`münze`,`sammel`,`spieler`],uk:[`гуля`,`монет`,`збира`,`грав`],ru:[`гуля`,`монет`,`собира`,`игрок`]},`
score = 0
Coin = create_type("Coin")
for i in range(5):
    Coin(x=i * 3 - 6, y=0.5, z=4, size=0.6, shape="cylinder", color="gold", material="glow")
when Player touches Coin:
    b.destroy()
    score += 1
    say("Coins:", score)
`),H(`walk_trampoline`,`games`,`idea`,{en:[`trampoline`,`jump`,`bounce`,`player`],de:[`trampolin`,`spring`,`hüpf`],uk:[`батут`,`стриб`],ru:[`батут`,`прыг`]},`
Trampoline = create_type("Trampoline")
t = Trampoline(x=0, y=0.15, z=-4, width=3, height=0.3, depth=3, color="hotpink", solid=true)
when Player touches Trampoline:
    player.vy = 15
`),H(`walk_door`,`games`,`idea`,{en:[`door`,`secret`,`open`,`player`],de:[`tür`,`geheim`,`öffnen`],uk:[`двер`,`таємн`,`відчин`],ru:[`двер`,`секрет`,`открыв`]},`
Door = create_type("Door")
door = Door(x=8, y=1.5, z=0, width=0.4, height=3, depth=2, color="brown", solid=true)
when player and player.x > 5:
    door.y = 5
    say("The door opens!")
`),H(`win`,`games`,`idea`,{en:[`win`,`winner`,`victory`,`goal reached`],de:[`gewinn`,`sieg`],uk:[`перемог`,`виграш`,`виграв`],ru:[`побед`,`выигр`]},`
score = 0
Target = create_type("Target")
target = Target(x=0, y=1, z=0, shape="torus", color="red")
on tap Target:
    score += 1
when score >= 5:
    say("You win! 🎉")
    target.color = "gold"
`),H(`lives`,`games`,`idea`,{en:[`lives`,`health`,`game over`,`lose`],de:[`leben`,`gesundheit`,`verlier`,`game over`],uk:[`житт`,`здоров`,`програш`,`кінець гри`],ru:[`жизн`,`здоров`,`проигр`,`конец игры`]},`
lives = 3
Spike = create_type("Spike")
spike = Spike(x=0, y=0.5, z=0, shape="pyramid", color="crimson")
on tap Spike:
    lives -= 1
    say("Ouch! Lives:", lives)
when lives <= 0:
    say("Game over")
`),H(`enemy`,`games`,`thing`,{en:[`enemy`,`monster chase`,`zombie`,`bad guy`],de:[`gegner`,`feind`,`zombie`,`bösewicht`,`bosewicht`],uk:[`ворог`,`зомбі`,`зомби`,`лиходій`],ru:[`враг`,`зомби`,`злодей`,`противник`]},`
Hero = create_type("Hero")
Enemy = create_type("Enemy")
Enemy.add_property("speed", 1)
hero = Hero(x=0, y=0.9, z=0, shape="capsule", color="dodgerblue")
zombie = Enemy(x=6, y=0.9, z=6, shape="capsule", color="olivedrab")
on tick:
    zombie.move_toward(hero)
when zombie.near(hero):
    say("Run!")
on tap Hero:
    self.x = random(-8, 8)
    self.z = random(-8, 8)
`),H(`dice`,`games`,`thing`,{en:[`dice`,`die`,`roll`,`chance`],de:[`würfel`,`wurfel`,`würfeln`,`wurfeln`,`zufall`],uk:[`кубик`,`кидати кубик`,`шанс`,`випадков`],ru:[`кубик`,`кость`,`бросить`,`шанс`,`случайн`]},`
Dice = create_type("Dice")
dice = Dice(x=0, y=0.5, z=0, shape="box", color="white")
on tap Dice:
    number = random(1, 6)
    say("You rolled", number)
`),H(`countdown`,`games`,`idea`,{en:[`countdown`,`count down`,`clock`,`seconds left`],de:[`countdown`,`herunterzähl`,`herunterzahl`,`uhr`,`sekunden übrig`],uk:[`зворотн`,`відлік`,`годинник`,`секунд залиш`],ru:[`обратн`,`отсчёт`,`отсчет`,`часы`,`секунд остал`]},`
seconds_left = 5
every 1 seconds:
    if seconds_left > 0:
        say(seconds_left)
        seconds_left -= 1
when seconds_left == 0:
    say("Go!")
`),H(`levels`,`games`,`idea`,{en:[`level`,`harder`,`next level`],de:[`level`,`stufe`,`schwieriger`],uk:[`рів`,`склад`,`наступний рів`],ru:[`уров`,`сложн`,`следующий уров`]},`
level = 1
score = 0
Star = create_type("Star")
star = Star(x=0, y=1, z=0, shape="sphere", color="gold", material="glow")
on tap Star:
    score += 1
    self.x = random(-5, 5)
when score >= level * 3:
    level += 1
    say("Level", level)
`)],rn=[H(`variable`,`ideas`,`idea`,{en:[`variable`,`remember`,`name for`],de:[`variable`,`merken`],uk:[`змінн`,`запам`],ru:[`переменн`,`запомн`]},`
apples = 3
apples = apples + 2
say("I have", apples, "apples")
`),H(`math`,`ideas`,`idea`,{en:[`math`,`plus`,`minus`,`times`,`divide`,`calculate`],de:[`mathe`,`rechnen`,`plus`,`minus`,`mal`,`geteilt`],uk:[`математ`,`плюс`,`мінус`,`помнож`,`поділ`,`обчисл`,`рахува`],ru:[`математ`,`плюс`,`минус`,`умнож`,`дели`,`вычисл`,`посчит`]},`
a = 7
b = 3
say(a + b, a - b, a * b, a / b)
say("whole part:", a // b, "rest:", a % b, "power:", a ** 2)
`),H(`text`,`ideas`,`idea`,{en:[`text`,`string`,`words`,`join`],de:[`text`,`wort`,`zeichenkette`,`verbind`],uk:[`текст`,`рядок`,`слова`,`з'єдн`],ru:[`текст`,`строк`,`слова`,`соедин`]},`
name = "Luna"
greeting = "Hello, " + name + "!"
say(greeting)
say(name, "has", len(name), "letters")
`),H(`if_else`,`ideas`,`idea`,{en:[`if`,`else`,`otherwise`,`decide`,`condition`],de:[`wenn`,`sonst`,`falls`,`entscheid`,`bedingung`],uk:[`якщо`,`інакше`,`умов`,`виріш`],ru:[`если`,`иначе`,`услов`,`решит`]},`
temperature = 25
if temperature > 30:
    say("Hot!")
elif temperature > 15:
    say("Nice and warm")
else:
    say("Cold!")
`),H(`compare`,`ideas`,`idea`,{en:[`compare`,`equal`,`bigger than`,`smaller than`,`and`,`or`,`not`],de:[`vergleich`,`gleich`,`größer als`,`kleiner als`,`und`,`oder`,`nicht`],uk:[`порівн`,`дорівн`,`більше ніж`,`менше ніж`],ru:[`сравн`,`равн`,`больше чем`,`меньше чем`]},`
age = 9
has_ticket = true
if age >= 6 and has_ticket:
    say("You may ride!")
if age == 9 or age == 10:
    say("Nine or ten")
if not has_ticket:
    say("No ticket")
`),H(`for_loop`,`ideas`,`idea`,{en:[`loop`,`repeat`,`for`,`times`,`many`],de:[`schleife`,`wiederhol`,`für`,`fur`,`mal`,`viele`],uk:[`цикл`,`повтор`,`разів`,`багато`],ru:[`цикл`,`повтор`,`раз`,`много`]},`
Ball = create_type("Ball")
for i in range(5):
    Ball(x=i * 2 - 4, y=0.5, z=0, shape="sphere", color="orange")
for b in all(Ball):
    b.y += 1
`),H(`while_loop`,`ideas`,`idea`,{en:[`while`,`until`,`as long as`],de:[`solange`,`bis`,`während`,`wahrend`],uk:[`поки`,`доки`,`до тих пір`],ru:[`пока`,`до тех пор`]},`
n = 1
while n < 100:
    n = n * 2
say("First power of two above 100:", n)
`),H(`list`,`ideas`,`idea`,{en:[`list`,`array`,`several`,`collection`],de:[`liste`,`mehrere`,`sammlung`],uk:[`список`,`масив`,`кілька`,`колекц`],ru:[`список`,`массив`,`несколько`,`коллекц`]},`
fruits = ["apple", "banana", "cherry"]
fruits.append("kiwi")
say("First:", fruits[0], "Last:", fruits[-1], "Count:", len(fruits))
for f in fruits:
    say(f)
`),H(`dictionary`,`ideas`,`idea`,{en:[`dictionary`,`dict`,`key`,`lookup`,`table`],de:[`wörterbuch`,`worterbuch`,`schlüssel`,`schlussel`,`tabelle`],uk:[`словник`,`ключ`,`таблиц`],ru:[`словар`,`ключ`,`таблиц`]},`
stock = {"apples": 3, "pears": 1}
stock["apples"] += 2
stock["kiwis"] = 4
for fruit in stock:
    say(fruit, stock[fruit])
`),H(`function`,`ideas`,`idea`,{en:[`function`,`def`,`reuse`,`return`],de:[`funktion`,`def`,`wiederverwend`,`zurückgeb`,`zuruckgeb`],uk:[`функці`,`def`,`повтор використ`,`поверн`],ru:[`функци`,`def`,`вернуть`,`возвращ`]},`
def double(n):
    return n * 2
def make_tower(height):
    for i in range(height):
        Block(x=0, y=0.5 + i, z=0, shape="box", color="sandybrown")
Block = create_type("Block")
say(double(21))
make_tower(4)
`),H(`action`,`ideas`,`idea`,{en:[`action`,`ability`,`can do`,`skill`,`method`],de:[`aktion`,`fähigkeit`,`fahigkeit`,`kann`,`methode`],uk:[`дія`,`дію`,`вмінн`,`здатн`,`метод`,`вміє`],ru:[`действи`,`умени`,`способн`,`метод`,`умеет`]},`
Robot = create_type("Robot")
Robot.add_property("energy", 10)
def wave(self):
    self.energy -= 1
    say("Hello! Energy:", self.energy)
Robot.add_action("wave", wave)
Robot.add_action("fly")
robo = Robot(x=0, y=1, z=0, shape="box", color="silver")
robo.wave()
robo.fly()
# fly has no instructions yet — the log explains that
`),H(`types`,`ideas`,`idea`,{en:[`type`,`object`,`create_type`,`kind of thing`,`class`,`property`],de:[`typ`,`objekt`,`art von`,`klasse`,`eigenschaft`],uk:[`тип`,`об'єкт`,`обєкт`,`вид`,`клас`,`властив`],ru:[`тип`,`объект`,`вид`,`класс`,`свойств`]},`
Car = create_type("Car")
Car.add_property("color", "red")
Car.add_property("speed", 0)
racer = Car(x=-2, y=0.5, z=0, shape="box", width=2)
taxi = Car(x=2, y=0.5, z=0, shape="box", width=2, color="gold")
racer.speed = 10
say(racer.color, racer.speed, taxi.color, taxi.speed)
`),H(`inheritance`,`ideas`,`idea`,{en:[`inherit`,`inheritance`,`child type`,`kind of`,`special`],de:[`erb`,`vererb`,`unterart`,`spezial`],uk:[`успадк`,`нащад`,`різновид`,`особлив`],ru:[`наслед`,`потом`,`разновид`,`особ`]},`
Animal = create_type("Animal")
Animal.add_property("legs", 4)
Bird = create_type("Bird", Animal)
Bird.add_property("legs", 2)
Bird.add_property("wings", 2)
dog = Animal(x=-2, y=0.5, z=0, shape="box")
crow = Bird(x=2, y=0.5, z=0, shape="cone", color="black")
say("dog legs:", dog.legs, "crow legs:", crow.legs, "crow is an animal:", is_a(crow, Animal))
`),H(`relate`,`ideas`,`idea`,{en:[`relationship`,`relate`,`owns`,`belongs`,`connect`],de:[`beziehung`,`gehört`,`gehort`,`besitzt`,`verbind`],uk:[`зв'яз`,`звяз`,`належ`,`володі`,`поєдн`],ru:[`связ`,`принадлеж`,`владе`,`соедин`]},`
Person = create_type("Person")
Dog = create_type("Dog")
anna = Person(x=-2, y=0.9, z=0, shape="capsule", color="orchid")
rex = Dog(x=1, y=0.3, z=0, shape="box", color="peru")
relate(anna, "owns", rex)
say("Anna owns:", anna.related("owns"))
say("Rex belongs to:", rex.related_by("owns"))
`),H(`count_objects`,`ideas`,`idea`,{en:[`how many`,`count objects`,`number of`],de:[`wie viele`,`anzahl`,`zähle`,`zahle`],uk:[`скільки`,`кількість`,`порахув`],ru:[`сколько`,`количеств`,`посчита`]},`
Tree = create_type("Tree")
for i in range(7):
    Tree(x=i * 2 - 6, y=1, z=0, shape="cone", color="green")
say("There are", len(all(Tree)), "trees")
`),H(`random`,`ideas`,`idea`,{en:[`random`,`chance`,`surprise`,`lucky`],de:[`zufall`,`zufällig`,`zufallig`,`glück`,`gluck`],uk:[`випадков`,`рандом`,`шанс`,`удач`],ru:[`случайн`,`рандом`,`шанс`,`удач`]},`
Box = create_type("Box")
for i in range(10):
    Box(x=random(-8, 8), y=random(1, 5), z=random(-8, 8), shape="box", size=random(1, 3) * 0.3, color="teal")
say("A random number from 1 to 100:", random(1, 100))
`),H(`comments`,`ideas`,`idea`,{en:[`comment`,`note`,`explain my code`],de:[`kommentar`,`notiz`],uk:[`коментар`,`нотатк`,`примітк`],ru:[`комментар`,`заметк`,`примечан`]},`
# Everything after # is a note for people — the world ignores it.
# region: my first group
size = 2   # how big my things are
# endregion
`),H(`own_law`,`ideas`,`idea`,{en:[`law`,`physics`,`rule of nature`,`own gravity`],de:[`gesetz`,`physik`,`naturgesetz`],uk:[`закон`,`фізик`,`природ`],ru:[`закон`,`физик`,`природ`]},`
physics.gravity = -2
physics.magnetism = 3
Iron = create_type("Iron")
nail = Iron(x=0, y=0, z=0, shape="cylinder", width=0.1, height=0.8, depth=0.1, color="gray", material="metal", mass=1)
on tick:
    nail.x += physics.magnetism * 0.1 * dt
`),H(`errors`,`tools`,`idea`,{en:[`error`,`mistake`,`bug`,`wrong`,`red`,`does not work`],de:[`fehler`,`falsch`,`geht nicht`,`funktioniert nicht`],uk:[`помилк`,`неправильн`,`не працю`,`баг`],ru:[`ошибк`,`неправильн`,`не работа`,`баг`]},``),H(`debugger`,`tools`,`idea`,{en:[`debug`,`step by step`,`breakpoint`],de:[`untersuch`,`schritt für schritt`,`schritt fur schritt`,`haltepunkt`],uk:[`налагод`,`крок за кроком`,`точк зупин`],ru:[`отлад`,`шаг за шагом`,`точк останов`]},``),H(`blocks`,`tools`,`idea`,{en:[`blocks`,`drag`,`puzzle`],de:[`blöcke`,`blocke`,`ziehen`,`puzzle`],uk:[`блок`,`перетяг`,`пазл`],ru:[`блок`,`перетаск`,`пазл`]},``),H(`inspector`,`tools`,`idea`,{en:[`inspector`,`look inside`,`change value`,`select object`],de:[`inspektor`,`hineinschau`,`wert änder`,`wert ander`],uk:[`інспектор`,`зазирн`,`змінити значен`],ru:[`инспектор`,`заглян`,`изменить значен`]},``),H(`saving`,`tools`,`idea`,{en:[`save`,`export`,`backup`,`import`,`file`],de:[`speicher`,`export`,`sicher`,`import`,`datei`],uk:[`збереж`,`експорт`,`резерв`,`імпорт`,`файл`],ru:[`сохран`,`экспорт`,`резерв`,`импорт`,`файл`]},``),H(`start_zero`,`tools`,`idea`,{en:[`start over`,`reset`,`from zero`,`clear everything`],de:[`neu anfang`,`zurücksetz`,`zurucksetz`,`bei null`],uk:[`спочатку`,`з нуля`,`скину`,`очист`],ru:[`сначала`,`с нуля`,`сбрось`,`очист`]},``)],U=[...tn,...nn,...rn],an={planet:{type:`Planet`,v:`earth`},sun:{type:`Star`,v:`sun`},moon:{type:`Moon`,v:`moon`},rocket:{type:`Rocket`,v:`rocket`},alien:{type:`Alien`,v:`zork`},comet:{type:`Comet`,v:`comet`},tree:{type:`Trunk`,v:`trunk`},flower:{type:`Stem`,v:`stem`},mushroom:{type:`Stalk`,v:`stalk`},rock:{type:`Rock`,v:`rock`},mountain:{type:`Mountain`,v:`mountain`},island:{type:`Sand`,v:`island`},plant_grow:{type:`Plant`,v:`carrot`},animal:{type:`Animal`,v:`bunny`},fish:{type:`Fish`,v:`nemo`},bird:{type:`Bird`,v:`bird`},dog_follow:{type:`Dog`,v:`dog`},butterfly:{type:`Butterfly`,v:`fly`},snail:{type:`Snail`,v:`snail`},dragon:{type:`Dragon`,v:`smaug`},person:{type:`Human`,v:`alex`},farmer:{type:`Farmer`,v:`farmer`},house:{type:`House`,v:`house`},door:{type:`Door`,v:`door`},lamp:{type:`Lamp`,v:`lamp`},ball:{type:`Ball`,v:`ball`},chest:{type:`Chest`,v:`chest`},car:{type:`Car`,v:`car`},train:{type:`Engine`,v:`engine`},boat:{type:`Boat`,v:`boat`},airplane:{type:`Plane`,v:`plane`},cloud:{type:`Cloud`,v:`cloud`},enemy:{type:`Enemy`,v:`zombie`},dice:{type:`Dice`,v:`dice`},water:{type:`Water`,v:`lake`},day_night:{type:`Star`,v:`sun`}},on=`Ground = create_type("Ground")
ground = Ground(x=0, y=-0.5, z=0, width=16, height=1, depth=16, solid=true, color="olivedrab", shape="box")
`,sn={move:(e,t)=>`${t}.speed = 2\non tick:\n    ${t}.x += ${t}.speed * dt\n`,spin:(e,t)=>`${t}.ry = 0\non tick:\n    ${t}.ry += 90 * dt\n`,orbit:(e,t)=>`on tick:\n    ${t}.x = 6 * cos(time() * 0.5)\n    ${t}.z = 6 * sin(time() * 0.5)\n`,fall:(e,t)=>`physics.gravity = 9.8\n${t}.parent = none\n${t}.y = 6\n${t}.mass = 1\n`,land:(e,t)=>`physics.gravity = 9.8\n${on}${t}.parent = none\n${t}.y = 6\n${t}.mass = 1\n${t}.solid = true\n`,bounce:(e,t)=>`physics.gravity = 9.8\n${on}${t}.parent = none\n${t}.y = 6\n${t}.mass = 1\n${t}.solid = true\n${t}.bounce = 0.8\n`,jumper:(e,t)=>`physics.gravity = 9.8\n${on}${t}.parent = none\n${t}.y = 2\n${t}.mass = 1\n${t}.solid = true\non tap ${e}:\n    self.push(0, 7, 0)\n`,fly:(e,t)=>`${t}.parent = none\n${t}.mass = 1\n${t}.ay = 12\n`,zero_g:(e,t)=>`physics.gravity = 0\n${t}.parent = none\n${t}.mass = 1\n${t}.push(1, 0.5, 0)\n`,push:(e,t)=>`physics.gravity = 9.8\n${on}${t}.parent = none\n${t}.y = 1\n${t}.mass = 1\n${t}.solid = true\non tap ${e}:\n    self.push(4, 5, 0)\n`,patrol:(e,t)=>`${t}.speed = 2\non tick:\n    ${t}.x += ${t}.speed * dt\n    if ${t}.x > 5 or ${t}.x < -5:\n        ${t}.speed = -${t}.speed\n`,teleport:e=>`on tap ${e}:\n    self.x = random(-6, 6)\n    self.z = random(-6, 6)\n`,waves:(e,t)=>`${t}.y = 1\non tick:\n    ${t}.y = 1 + 0.3 * sin(time() * 2)\n`,dancer:(e,t)=>`${t}.ry = 0\non tick:\n    ${t}.ry += 180 * dt\n`,color:e=>`on tap ${e}:\n    if self.color == "tomato":\n        self.color = "royalblue"\n    else:\n        self.color = "tomato"\n`,random_color:(e,t)=>`colors = ["red", "orange", "yellow", "lime", "cyan", "magenta"]\nevery 0.5 seconds:\n    ${t}.color = colors[random(0, len(colors) - 1)]\n`,glow:(e,t)=>`${t}.material = "glow"\n`,materials:(e,t)=>`${t}.material = "metal"\n`,patterns:(e,t)=>`${t}.pattern = "stripes"\n`,min_height:(e,t)=>`physics.gravity = 9.8\n${t}.parent = none\n${t}.y = 6\n${t}.mass = 1\n${t}.min_y = 2\n`,grow_size:(e,t)=>`${t}.size = 1\nevery 1 seconds:\n    if ${t}.size < 4:\n        ${t}.size += 0.25\n`,shrink:(e,t)=>`${t}.size = 2\nevery 1 seconds:\n    ${t}.size -= 0.2\n    if ${t}.size < 0.3:\n        ${t}.destroy()\n`,hide_show:e=>`on tap ${e}:\n    self.visible = not self.visible\n`,tilt:(e,t)=>`${t}.rz = 20\n`,talker:e=>`on tap ${e}:\n    say("Hello! I am", self.name)\n`,hunger:(e,t)=>`${t}.hunger = 0\nevery 2 seconds:\n    ${t}.hunger += 1\nwhen ${t}.hunger > 5:\n    say("I am hungry!")\non tap ${e}:\n    self.hunger = 0\n`,explosion:e=>`physics.gravity = 9.8\nPiece = create_type("Piece")\non tap ${e}:\n    for i in range(8):\n        piece = Piece(x=self.x, y=self.y, z=self.z, shape="box", size=0.3, color="orange", mass=1)\n        piece.push(random(-4, 4), random(3, 8), random(-4, 4))\n    self.destroy()\n`,spawn:e=>`every 2 seconds:\n    if len(all(${e})) < 20:\n        ${e}(x=random(-6, 6), y=1, z=random(-6, 6))\n`,on_tap:e=>`on tap ${e}:\n    say("You tapped", self.name)\n`,random_walk:(e,t)=>`${t}.speed = 1\nSpot = create_type("Spot")\nspot = Spot(x=0, y=0, z=0, visible=false)\nevery 2 seconds:\n    spot.x = random(-5, 5)\n    spot.z = random(-5, 5)\non tick:\n    ${t}.move_toward(spot)\n`},cn=[`en`,`de`,`uk`,`ru`];function ln(e){return e.toLowerCase().replace(/ß/g,`ss`).replace(/ё/g,`е`).replace(/[’`ʼ]/g,`'`).replace(/[^\p{L}\p{N}' -]+/gu,` `).replace(/\s+/g,` `).trim()}var un={en:[`how`,`do`,`i`,`make`,`a`,`the`,`can`,`to`,`add`,`create`,`what`,`is`,`my`,`it`,`that`,`with`],de:[`wie`,`ich`,`mache`,`machen`,`einen`,`eine`,`ein`,`der`,`die`,`das`,`und`,`ist`,`kann`,`man`,`mein`,`meine`,`erstellen`,`hinzufügen`,`hinzufugen`,`dass`,`mit`,`sich`,`soll`],uk:[`як`,`що`,`чому`,`мені`,`зробити`,`додати`,`створити`,`щоб`,`мій`,`моя`,`це`,`який`,`яка`,`можна`,`треба`,`і`,`та`],ru:[`как`,`что`,`почему`,`мне`,`сделать`,`добавить`,`создать`,`чтобы`,`мой`,`моя`,`это`,`какой`,`какая`,`можно`,`надо`,`и`,`нужно`]};function dn(e){let t=ln(e),n=t.split(` `);if(/[ґєії]/.test(t))return`uk`;if(/[ыэъ]/.test(t))return`ru`;let r=/[а-я]/.test(t);if(/[äöü]/.test(e.toLowerCase())||e.includes(`ß`))return`de`;let i={en:0,de:0,uk:0,ru:0};for(let e of cn){for(let t of n)un[e].includes(t)&&(i[e]+=2);for(let r of U)for(let a of r.keywords[e])fn(a,t,n)&&(i[e]+=1)}return(r?[`uk`,`ru`]:[`en`,`de`]).sort((e,t)=>i[t]-i[e])[0]}function fn(e,t,n){let r=ln(e);return r.includes(` `)?` ${t} `.includes(` ${r} `)||t.includes(r):r.length<=3?n.includes(r):n.some(e=>e.startsWith(r))}var pn={thing:3,action:2,idea:1.5};function mn(e){let t=ln(e),n=t.split(` `),r=[];for(let e of U){let i=0;for(let r of cn)for(let a of e.keywords[r])fn(a,t,n)&&(i+=a.includes(` `)?2:1);i&&r.push({recipe:e,score:i*pn[e.kind]})}return r.sort((e,t)=>t.score-e.score)}var hn=[`planet`,`move`,`tree`];function gn(e){let t=dn(e),n=mn(e);if(!n.length)return{recipes:[],suggestions:hn.map(e=>U.find(t=>t.id===e)),lang:t};let r=n[0].recipe,i=[r];if(r.kind===`thing`||r.kind===`action`){let e=r.kind===`thing`?`action`:`thing`,t=n.find(t=>t.recipe.kind===e&&t.recipe.code)?.recipe;t&&(i=r.kind===`thing`?[r,t]:[t,r])}let a=new Set(i.map(e=>e.id)),o=n.map(e=>e.recipe).filter(e=>!a.has(e.id)).slice(0,3);return{recipes:i,suggestions:o,lang:t}}function _n(e){return e.map(e=>e.code.trim()).filter(Boolean).join(`

`)+`
`}function vn(e){if(e.length===2&&e[0].kind===`thing`&&e[1].kind===`action`){let t=an[e[0].id],n=sn[e[1].id];if(t&&n)return`${e[0].code.trim()}\n\n# ${e[1].id}\n${n(t.type,t.v)}`}return _n(e.filter(e=>e.code))}var W={windowMs:6e5,free:3,warnUntil:5,pauseMs:12e4};function yn(e,t){let n=e.filter(e=>t-e<W.windowMs&&e<=t);if(n.length<W.free)return{state:`free`};if(n.length<W.warnUntil)return{state:`warn`};let r=Math.max(...n)+W.pauseMs-t;return r>0?{state:`pause`,waitMs:r}:{state:`warn`}}function bn(e,t){return[...e.filter(e=>t-e<W.windowMs),t]}function xn(){let e=window;return e.SpeechRecognition??e.webkitSpeechRecognition??null}function Sn(){return xn()!==null}var Cn=[{code:`de`,bcp:`de-DE`,label:`Deutsch`},{code:`uk`,bcp:`uk-UA`,label:`Українська`},{code:`en`,bcp:`en-US`,label:`English`},{code:`ru`,bcp:`ru-RU`,label:`Русский`}];function wn(e,t){let n=xn();if(!n)return t.failed(`other`),()=>void 0;let r=new n;r.lang=Cn.find(t=>t.code===e).bcp,r.interimResults=!0,r.continuous=!1,r.maxAlternatives=1;let i=``,a=!1;r.onresult=e=>{i=Array.from(e.results).map(e=>e[0].transcript).join(` `).trim(),t.partial(i)},r.onerror=e=>{a=!0,t.failed(e.error===`not-allowed`||e.error===`service-not-allowed`?`denied`:e.error===`no-speech`?`nothing`:`other`)},r.onend=()=>{a||(a=!0,i?t.done(i):t.failed(`nothing`))};try{r.start()}catch{a=!0,t.failed(`other`)}return()=>{try{r.stop()}catch{}}}function Tn(e,t){let n=T(`div`,{class:`modal-backdrop helper-backdrop`}),r=T(`div`,{class:`modal helper`,role:`dialog`,"aria-label":C(`helper.title`)});n.append(r),document.body.append(n);let i={kind:`home`},a=null,o=!1,s=0,c=()=>{a?.(),window.clearInterval(s),n.remove()};n.addEventListener(`pointerdown`,e=>{e.target===n&&c()});let l=T(`input`,{class:`text-input helper-input`,type:`search`,placeholder:C(`helper.placeholder`),enterkeyhint:`search`,autocomplete:`off`,"aria-label":C(`helper.placeholder`)});l.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),p(l.value))});let u=()=>e.settings.speechLang??he(),d=e=>ce(e)?e:he(),f=t=>{let n=yn(e.settings.helperAsks,Date.now());if(n.state===`pause`){i={kind:`pause`},v();return}let r=()=>{e.updateSettings({helperAsks:bn(e.settings.helperAsks,Date.now())}),t()};n.state===`warn`?(i={kind:`warn`,then:r},v()):r()};function p(e,t){let n=e.trim();if(!n)return;let r=gn(n),a=d(t??r.lang);r.recipes.length?f(()=>{i={kind:`answer`,recipes:r.recipes,suggestions:r.suggestions,lang:a},v()}):(i={kind:`unknown`,suggestions:r.suggestions,lang:a},v())}function m(e,t=he()){f(()=>{i={kind:`answer`,recipes:[e],suggestions:[],lang:t},v()})}function h(){if(o){a?.();return}o=!0,v();let e=u();a=wn(e,{partial:e=>{l.value=e},done:t=>{o=!1,l.value=t,p(t,e)},failed:e=>{o=!1,v(),g.textContent=C(e===`denied`?`helper.voiceDenied`:`helper.voiceError`)}})}let g=T(`p`,{class:`hint helper-note`}),_=T(`div`,{class:`helper-body`});function v(){w(r),window.clearInterval(s);let n=Sn()?T(`button`,{type:`button`,class:`btn icon-btn mic${o?` listening`:``}`,"aria-label":C(`helper.mic`),title:C(`helper.mic`),onclick:h},o?`■`:`🎤`):null;if(r.append(T(`div`,{class:`helper-head`},T(`h2`,{},`🤖 ${C(`helper.title`)}`),T(`button`,{type:`button`,class:`btn icon-btn small-icon`,"aria-label":C(`inspector.close`),onclick:c},`✕`)),T(`div`,{class:`helper-ask`},l,n??``,T(`button`,{type:`button`,class:`btn primary`,onclick:()=>p(l.value)},C(`helper.ask`)))),o&&r.append(T(`p`,{class:`helper-listening`},`🎙 ${C(`helper.listening`)}`)),Sn()){let t=T(`div`,{class:`choice-row helper-langs`},T(`span`,{class:`muted`},C(`helper.speechLang`)));for(let n of Cn){let r=u()===n.code;t.append(T(`button`,{type:`button`,class:`chip small${r?` active`:``}`,"aria-pressed":r,onclick:()=>{e.updateSettings({speechLang:n.code}),v()}},n.label))}r.append(t),g.textContent=C(`helper.voiceNote`)}else g.textContent=C(`helper.noVoice`);switch(r.append(g),w(_),r.append(_),i.kind){case`home`:{_.append(T(`div`,{class:`muted`},C(`helper.examples`)));let e=T(`div`,{class:`choice-row`});for(let t of[`helper.ex1`,`helper.ex2`,`helper.ex3`,`helper.ex4`])e.append(T(`button`,{type:`button`,class:`chip small`,onclick:()=>{l.value=C(t),p(C(t))}},C(t)));_.append(e,T(`button`,{type:`button`,class:`btn helper-browse`,onclick:()=>{i={kind:`browse`,section:null},v()}},`📚 ${C(`helper.browse`)}`));break}case`browse`:if(i.section===null){let e=T(`div`,{class:`helper-sections`});for(let t of $t){let n=U.filter(e=>e.section===t).length;e.append(T(`button`,{type:`button`,class:`helper-section`,onclick:()=>{i={kind:`browse`,section:t},v()}},T(`span`,{class:`helper-icon`},en[t]),T(`span`,{},C(`helper.section.${t}`)),T(`small`,{},String(n))))}_.append(y(()=>({kind:`home`})),e)}else{let e=T(`div`,{class:`choice-row`});for(let t of U.filter(e=>e.section===i.section))e.append(T(`button`,{type:`button`,class:`chip`,onclick:()=>m(t)},C(`recipe.${t.id}.title`)));_.append(y(()=>({kind:`browse`,section:null})),T(`h3`,{},`${en[i.section]} ${C(`helper.section.${i.section}`)}`),e)}break;case`unknown`:_.append(T(`p`,{},C(`helper.notUnderstood`,void 0,i.lang)),b(i.suggestions,i.lang)),_.append(T(`button`,{type:`button`,class:`btn helper-browse`,onclick:()=>{i={kind:`browse`,section:null},v()}},`📚 ${C(`helper.browse`)}`));break;case`warn`:{let e=i.then;_.append(T(`div`,{class:`helper-warn`},T(`strong`,{},`✋ ${C(`helper.warnTitle`)}`),T(`p`,{},C(`helper.warnText`)),T(`button`,{type:`button`,class:`btn small`,onclick:e},C(`helper.showAnyway`))));break}case`pause`:{let t=T(`div`,{class:`helper-warn pause`}),n=()=>{let n=yn(e.settings.helperAsks,Date.now());if(n.state!==`pause`){i={kind:`home`},v();return}let r=Math.ceil(n.waitMs/1e3);t.textContent=`⏳ ${C(`helper.pause`,{time:`${Math.floor(r/60)}:${String(r%60).padStart(2,`0`)}`})}`};n(),s=window.setInterval(n,1e3),_.append(t);break}case`answer`:{let{recipes:e,lang:n}=i,r=(e,t)=>C(e,t,n);e.length>1&&_.append(T(`p`,{class:`muted`},r(`helper.combined`,{a:r(`recipe.${e[0].id}.title`),b:r(`recipe.${e[1].id}.title`)})));for(let t of e)_.append(T(`article`,{class:`helper-answer`},T(`h3`,{},`${en[t.section]} ${r(`recipe.${t.id}.title`)}`),T(`div`,{class:`helper-label`},r(`helper.what`)),T(`p`,{},r(`recipe.${t.id}.what`)),T(`div`,{class:`helper-label`},r(`helper.why`)),T(`p`,{},r(`recipe.${t.id}.why`))));let a=vn(e);a.trim()?_.append(T(`pre`,{class:`help-code helper-code`},a),T(`button`,{type:`button`,class:`btn primary`,onclick:()=>{t(a),c()}},`＋ ${r(`helper.insert`)}`)):_.append(T(`p`,{class:`hint`},r(`helper.noCode`))),i.suggestions.length&&_.append(T(`div`,{class:`muted`},r(`helper.related`)),b(i.suggestions,n));break}}}function y(e){return T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>{i=e(),v()}},`‹ ${C(`helper.back`)}`)}function b(e,t){let n=T(`div`,{class:`choice-row`});for(let r of e)n.append(T(`button`,{type:`button`,class:`chip small`,onclick:()=>m(r,t)},C(`recipe.${r.id}.title`,void 0,t)));return n}v(),queueMicrotask(()=>l.focus())}function En(e){let t=0,n=null,r=[];for(let i=0;i<e.length;i++){let a=e[i];if(n)a===`\\`?i++:a===n&&(n=null);else if(a===`#`){let t=e.indexOf(`
`,i);if(t<0)break;i=t}else a===`"`||a===`'`?n=a:a===`(`?(r.push(i),t++):a===`)`&&(r.pop(),t=Math.max(0,t-1))}let i=r[r.length-1];if(i===void 0)return null;let a=/([A-Za-z_À-￿][\wÀ-￿]*(?:\.[A-Za-z_À-￿][\wÀ-￿]*)*)\s*$/.exec(e.slice(0,i));return a?{callee:a[1],inside:e.slice(i+1)}:null}function Dn(e,t){let n=new Set(e.types.map(e=>e.name));for(let e of t.matchAll(/^\s*([A-Za-z_]\w*)\s*=\s*create_type\(/gm))n.add(e[1]);return n}var On=[[/^create_type$/,`hint.createType`],[/\.add_property$/,`hint.addProperty`],[/\.remove_property$/,`hint.removeProperty`],[/\.add_action$/,`hint.addAction`],[/^say$/,`hint.say`],[/^(relate|unrelate)$/,`hint.relate`],[/\.push$/,`hint.push`],[/\.move_toward$/,`hint.moveToward`],[/\.near$/,`hint.near`],[/^range$/,`hint.range`],[/^random$/,`hint.random`],[/^all$/,`hint.all`],[/^len$/,`hint.len`]],kn=[[/^(if|elif)\b/,`hint.if`],[/^else\b/,`hint.else`],[/^while\b/,`hint.while`],[/^for\b/,`hint.for`],[/^def\b/,`hint.def`],[/^every\b/,`hint.every`],[/^on\b/,`hint.on`],[/^when\b/,`hint.when`],[/^after\b/,`hint.after`],[/^return\b/,`hint.return`]];function An(e,t,n=e){let r=e.lastIndexOf(`
`)+1,i=e.slice(r),a=i.trimStart();if(/^\s*#/.test(i))return{key:`hint.comment`};if(!n.trim())return{key:`hint.start`};if(/\bcolor\s*=\s*"?[\w#]*$/.test(i))return{key:`hint.colorValues`};if(/\bshape\s*=\s*"?\w*$/.test(i))return{key:`hint.shapeValues`};if(/\bmaterial\s*=\s*"?\w*$/.test(i))return{key:`hint.materialValues`};if(/\bpattern\s*=\s*"?\w*$/.test(i))return{key:`hint.patternValues`};if(/\bliquid\s*=\s*"?\w*$/.test(i)||/\bpour\(\s*"\w*$/.test(i))return{key:`hint.liquidValues`};let o=En(e.slice(Math.max(0,e.length-2e3)));if(o){for(let[e,t]of On)if(e.test(o.callee))return{key:t};if(/^[A-Z]/.test(o.callee)&&!o.callee.includes(`.`)&&Dn(t,n).has(o.callee)){let e=t.types.find(e=>e.name===o.callee),r=new Set(e?pe(t,e.id).map(e=>e.name):[]),i=RegExp(`\\b${o.callee}\\.add_property\\(\\s*["']([^"']+)["']`,`g`);for(let e of n.matchAll(i))r.add(e[1]);let a=[...r].join(`, `);return{key:t.physics.gravity===0?`hint.newObject`:`hint.newObjectGravity`,params:{type:o.callee,props:a||`—`}}}}if(/\bphysics\.\w*$/.test(i))return{key:`hint.physics`};let s=/([A-Za-z_]\w*)\.\w*$/.exec(i);if(s){let e=s[1];if(Dn(t,n).has(e))return{key:`hint.typeDot`,params:{type:e}};let r=t.globals[e];if(typeof r==`object`&&r&&!Array.isArray(r)&&r.kind===`obj`)return{key:`hint.objectDot`,params:{name:e}}}for(let[e,t]of kn)if(e.test(a))return{key:t};if(!a){let t=e.slice(0,r).replace(/\n+$/,``);if(t.slice(t.lastIndexOf(`
`)+1).replace(/#.*$/,``).trimEnd().endsWith(`:`))return{key:`hint.blockBody`}}return/^[A-Za-z_]\w*\s*=\s*$/.test(a)?{key:`hint.assign`}:null}var jn=[{id:`look`,target:`.stage`,check:e=>e.cameraMoved},{id:`code`,target:`.tab[data-tab="code"]`,check:e=>e.tab===`code`},{id:`write`,target:`.editor-host, .block-editor`,insert:`Rock = create_type("Rock")
rock = Rock(x=0, y=1, z=0, shape="sphere", color="orange")
`,check:e=>/create_type/.test(e.code)},{id:`run`,target:`.btn.run`,check:e=>e.objects>0},{id:`tap`,target:`.stage`,check:e=>e.selected},{id:`time`,target:`.btn.play`,check:e=>e.running},{id:`done`,target:`.tab[data-tab="learn"]`,check:null}],Mn=class{host;index=0;bubble=T(`div`,{class:`tut-bubble`,role:`dialog`,"aria-live":`polite`});marked=null;constructor(e){this.host=e,e.root.append(this.bubble),this.render()}get step(){return jn[this.index]}update(){let e=this.step.check;e&&e(this.host.state())&&this.index<jn.length-1&&(this.index++,this.render()),this.place()}render(){let e=this.step;this.bubble.replaceChildren(T(`div`,{class:`tut-count`},C(`tut.progress`,{step:this.index+1,total:jn.length})),T(`p`,{},C(`tut.${e.id}`)),T(`div`,{class:`tut-actions`},e.insert?T(`button`,{type:`button`,class:`btn small primary`,onclick:()=>{this.host.insertCode(e.insert),this.update()}},C(`tut.insert`)):``,e.check===null?T(`button`,{type:`button`,class:`btn small primary`,onclick:()=>this.close()},C(`tut.finish`)):``,e.check===null?``:T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>this.close()},C(`tut.skip`)))),this.place()}place(){let e=document.querySelector(this.step.target);e!==this.marked&&(this.marked?.classList.remove(`tut-target`),e?.classList.add(`tut-target`),this.marked=e);let t=this.bubble,n=Math.min(340,innerWidth-24);if(t.style.width=`${n}px`,!e){t.style.left=`${(innerWidth-n)/2}px`,t.style.top=`30%`;return}let r=e.getBoundingClientRect(),i=t.offsetHeight||140,a;a=r.height>innerHeight*.4?r.top+80:r.bottom+i+16<innerHeight?r.bottom+12:Math.max(12,r.top-i-12);let o=Math.min(innerWidth-n-12,Math.max(12,r.left+r.width/2-n/2));t.style.left=`${o}px`,t.style.top=`${a}px`}close(){this.marked?.classList.remove(`tut-target`),this.bubble.remove(),this.host.finish()}},Nn=[`add_property`,`remove_property`,`add_action`],Pn=[`name`,`parent`,`properties`,`actions`],Fn=[`destroy`,`related`,`related_by`,`near`,`distance_to`,`push`,`move_toward`],In=[`type`,`name`,`children`],Ln=[`gravity`,`friction`,`air_resistance`],Rn=[`append`,`pop`,`remove`],zn=[`keys`,`values`,`items`,`get`,`remove`],Bn=new Set(pt.filter(e=>![`physics`,`self`,`dt`,`pi`].includes(e))),Vn=(e,t)=>typeof e==`object`&&!!e&&!Array.isArray(e)&&e.kind===t;function G(e){return{label:e,kind:`method`,apply:`${e}(`}}function K(e,t=`property`){return{label:e,kind:t}}function Hn(e,t,n){let r=n.slice(n.lastIndexOf(`
`)+1);if(/#/.test(r.replace(/"[^"]*"|'[^']*'/g,``))||(r.match(/"/g)?.length??0)%2==1||(r.match(/'/g)?.length??0)%2==1)return null;let i=/([A-Za-z_À-￿][\wÀ-￿]*)\.([\wÀ-￿]*)$/.exec(n);if(i){let[,t,r]=i;return{from:n.length-r.length,items:Gn(Un(e,t),r)}}let a=/[A-Za-z_À-￿][\wÀ-￿]*$/.exec(n)?.[0]??``;if(!a)return null;let o=[...lt.map(e=>K(e,`keyword`)),...mt.filter(e=>e===e.toLowerCase()).map(e=>K(e,`constant`)),...pt.map(e=>Bn.has(e)?{label:e,kind:`function`,apply:`${e}(`}:K(e,`variable`)),...e.types.map(e=>({label:e.name,kind:`type`,detail:`type`})),...t.map(e=>({label:e,kind:`function`,apply:`${e}(`})),...Object.entries(e.globals).filter(([,e])=>!Vn(e,`type`)).map(([e])=>K(e,`variable`))];return{from:n.length-a.length,items:Gn(Wn(o),a)}}function Un(e,t){if(t===`physics`)return[...Ln,...Object.keys(e.physics.custom)].map(e=>K(e));let n=e.types.find(e=>e.name===t)??(Vn(e.globals[t],`type`)?e.types.find(n=>n.id===e.globals[t].id):void 0);if(n)return[...Nn.map(G),...Pn.map(e=>K(e)),...pe(e,n.id).map(e=>({...K(e.name),detail:n.name}))];let r=e.globals[t];if(Vn(r,`obj`)){let t=e.objects.find(e=>e.id===r.id);if(t)return[...Object.keys(t.values).map(e=>K(e)),...u(e,t.typeId).map(e=>({...G(e.name),detail:e.fn?`→ ${e.fn}()`:`—`})),...Fn.map(G),...In.map(e=>K(e))]}if(Array.isArray(r))return Rn.map(G);if(Vn(r,`dict`))return zn.map(G);let i=new Set,a=new Set;for(let t of e.types){for(let n of pe(e,t.id))i.add(n.name);for(let n of u(e,t.id))a.add(n.name)}return[...[...i].map(e=>K(e)),...[...a].map(G),...Fn.map(G),...In.map(e=>K(e))]}function Wn(e){let t=new Set;return e.filter(e=>!t.has(e.label)&&(t.add(e.label),!0))}function Gn(e,t){let n=t.toLowerCase();return Wn(e).filter(e=>e.label.toLowerCase().startsWith(n)&&e.label!==t)}function Kn(e,t){let n=new Map,r=new Map,i=new Set;e.forEach((e,a)=>{for(let o of e.changes)o.target!==`say`&&(a<=t?(n.set(o.target,o.after),a===t&&i.add(o.target)):!r.has(o.target)&&!n.has(o.target)&&r.set(o.target,o.before))});let a=[];for(let[e,t]of n)a.push({target:e,value:t,changedHere:i.has(e)});for(let[e,t]of r)!n.has(e)&&t!==`—`&&a.push({target:e,value:t,changedHere:!1});return a.sort((e,t)=>Number(t.changedHere)-Number(e.changedHere)||e.target.localeCompare(t.target))}function qn(e,t,n,r){for(let i=t+r;i>=0&&i<e.length;i+=r)if(n.has(e[i].line))return i;return-1}function Jn(e,t){let n=[];for(let r=0;r<=t&&r<e.length;r++)for(let t of e[r].changes)t.target===`say`&&n.push(t.after);return n}function Yn(e){if(e.allOpen)return 4;let t=e.counts;return t.placed>=3&&t.behaviours>=2&&t.props>=2?4:t.placed>=3&&t.behaviours>=2?3:t.placed>=3?2:1}var Xn=(e,t)=>{let n=[];for(let r=e+1;r<=t;r++)n.push(r);return n};function Zn(e,t,n,r){if(e-t<3e4||e-n<6e4)return null;if(!r.items.length)return`place`;let i=Yn(r);return i>=3&&!r.items.some(e=>e.props.length)?`prop`:i>=2&&!r.items.some(e=>e.behaviours.length)?`behaviour`:`change`}var Qn={red:`#ff4d4d`,orange:`#ff9f1c`,gold:`#ffd700`,yellow:`#ffef5a`,lime:`#9dff3a`,green:`#2fbf4a`,skyblue:`#87ceeb`,royalblue:`#4169e1`,purple:`#9b59d0`,hotpink:`#ff69b4`,white:`#ffffff`,sienna:`#a0522d`,gray:`#9a9a9a`,black:`#1b1b1b`},$n=class{host;el=T(`div`,{class:`beginner`});group=`space`;selected=null;placingKind=null;hintEl=T(`div`,{class:`beginner-hint`,"aria-live":`polite`});nameMistakes=0;errors=new Map;scrolledTo=null;drafts=new Map;undo=null;constructor(e){this.host=e,this.render()}get placing(){return this.placingKind}picture(e,t){let n=this.host.thumbs.get(e);return n?T(`img`,{class:`beginner-thumb`,src:n,alt:``}):T(`span`,{class:`beginner-emoji`},t)}thumbReady(e,t){for(let n of document.querySelectorAll(`.beginner-card[data-kind="${e}"]`)){let e=n.querySelector(`.beginner-emoji`);e&&e.replaceWith(T(`img`,{class:`beginner-thumb`,src:t,alt:``}))}}placeAt(e,t){if(!this.placingKind)return!1;let r=oe(this.host.model,this.placingKind,e,t);return this.placingKind=null,this.selected=r.id,this.host.sound(n(r.kind)?.group??`success`),this.host.puff(r.x,r.z),this.host.changed(),this.render(),!0}select(e){this.selected=e,this.render()}showHint(e){this.hintEl.textContent=`💡 ${C(`beginner.hint.${e}`)}`,this.hintEl.classList.add(`show`);let t=this.el.querySelector(`[data-hint="${e}"]`);t&&(t.classList.add(`pulse`),window.setTimeout(()=>t.classList.remove(`pulse`),3e3))}showStep(e){let t=T(`div`,{class:`modal-backdrop`}),n=()=>t.remove();t.append(T(`div`,{class:`modal beginner-step`,role:`dialog`},T(`div`,{class:`beginner-step-icon`},`🎉`),T(`h2`,{},C(`beginner.step${e}.title`)),T(`p`,{},C(`beginner.step${e}.text`)),T(`div`,{class:`modal-actions`},T(`button`,{type:`button`,class:`btn primary`,onclick:n},C(`beginner.ok2`))))),t.addEventListener(`pointerdown`,e=>{e.target===t&&n()}),document.body.append(t),this.host.sound(`success`)}render(){let e=this.el.parentElement,t=e?.scrollTop??0,n=document.activeElement,r=n instanceof HTMLInputElement&&this.el.contains(n)?n.dataset.key:void 0;w(this.el);let i=this.host.model;this.selected&&!se(i,this.selected)&&(this.selected=null),this.el.append(this.hintEl,this.shelf(),this.list());let a=T(`div`,{class:`beginner-footer`});if(Yn(i)>=4?a.append(T(`button`,{type:`button`,class:`btn`,"data-action":`show-code`,onclick:()=>this.showCode()},C(`beginner.showCode`)),T(`button`,{type:`button`,class:`btn`,"data-action":`to-free`,onclick:()=>void this.host.toFree()},C(`beginner.toFree`))):a.append(T(`button`,{type:`button`,class:`btn ghost small`,"data-action":`open-all`,onclick:()=>{i.allOpen=!0,this.host.changed(),this.render()}},C(`beginner.openAll`))),this.el.append(a),e&&(e.scrollTop=t),r){let e=this.el.querySelector(`input[data-key="${r}"]`);e?.focus({preventScroll:!0}),e?.setSelectionRange(e.value.length,e.value.length)}this.selected&&this.selected!==this.scrolledTo&&(this.scrolledTo=this.selected,requestAnimationFrame(()=>this.el.querySelector(`.beginner-row.open`)?.scrollIntoView({block:`start`,behavior:`smooth`}))),this.selected||(this.scrolledTo=null)}shelf(){let e=T(`div`,{class:`beginner-groups`,role:`tablist`});for(let t of m)e.append(T(`button`,{type:`button`,role:`tab`,class:`chip small${t===this.group?` active`:``}`,"aria-selected":t===this.group,"aria-label":C(`beginner.group.${t}`),title:C(`beginner.group.${t}`),onclick:()=>{this.group=t,this.render()}},`${je[t]} ${C(`beginner.group.${t}`)}`));let t=T(`div`,{class:`beginner-cards`}),n=!0;for(let e of _(this.group,this.host.islandDone)){let r=this.placingKind===e.id;t.append(T(`button`,{type:`button`,class:`beginner-card${r?` active`:``}`,"data-kind":e.id,"aria-pressed":r,...n?{"data-hint":`place`}:{},onclick:()=>{this.host.sound(`tap`),r?(this.placingKind=e.id,this.placeAt(0,0)):(this.placingKind=e.id,this.host.toast(C(`beginner.tapGround`)),this.render())}},this.picture(e.id,e.emoji),T(`span`,{},C(`beginner.obj.${e.id}`)))),n=!1}this.host.thumbs.request(_(this.group,this.host.islandDone).map(e=>e.id));let r=this.placingKind?T(`h3`,{class:`beginner-placing`},`👆 ${C(`beginner.placing`)}`):T(`h3`,{},C(`beginner.shelf`));return T(`section`,{class:`beginner-shelf`},r,e,t)}list(){let e=this.host.model,t=T(`section`,{class:`beginner-list`},T(`h3`,{},C(`beginner.myWorld`)));if(t.append(T(`div`,{class:`beginner-temp`},q(`🌡 ${C(`beginner.temperature`)}`,J(``,e.temperature,ie,t=>{e.temperature=t,this.host.sound(`tap`),this.host.changed(),this.render()},5),T(`span`,{class:`muted`},`°C`)))),this.undo&&t.append(T(`button`,{type:`button`,class:`btn small beginner-undo`,"data-action":`undo`,onclick:()=>{this.undo&&(window.clearTimeout(this.undo.timer),Oe(e,this.undo.items),this.undo=null,this.host.sound(`success`),this.host.changed(),this.render())}},`↶ ${C(`beginner.undo`)}`)),!e.items.length)return t.append(T(`p`,{class:`muted`},C(`beginner.empty`))),t;for(let r of e.items){let e=n(r.kind),i=r.id===this.selected;t.append(T(`button`,{type:`button`,class:`beginner-row${i?` open`:``}`,"aria-expanded":i,onclick:()=>{this.selected=i?null:r.id,this.render()}},T(`span`,{class:`beginner-emoji`},e.emoji),T(`strong`,{},r.name),T(`span`,{class:`muted`},C(`beginner.obj.${r.kind}`)))),i&&t.append(this.block(r))}return t}block(e){let t=this.host.model,r=Yn(t),i=n(e.kind),a=e=>{e(),this.host.sound(`tap`),this.host.changed(),this.render()},o=T(`div`,{class:`beginner-block`}),s=`name-${e.id}`,c=this.input(s,e.name,`text-input`,C(`beginner.field.name`));return c.dataset.hint=`name`,c.addEventListener(`change`,()=>{let n=xe(c.value,t,e.id);n===`ok`?(this.errors.delete(`name`),this.drafts.delete(s),e.name=c.value.trim(),this.host.changed(),this.later()):(this.errors.set(`name`,C(`beginner.err.${n}`)),this.host.sound(`error`),++this.nameMistakes>=2&&(this.nameMistakes=0,this.showHint(`name`)),this.later())}),o.append(q(C(`beginner.field.name`),c),this.error(`name`)),o.append(q(C(`beginner.field.place`),J(C(`beginner.field.left`),e.x,ne,t=>a(()=>{e.x=t})),J(C(`beginner.field.forward`),e.z,ne,t=>a(()=>{e.z=t}))),q(C(`beginner.field.size`),J(``,e.size,De,t=>a(()=>{e.size=t}))),q(C(`beginner.field.height`),J(``,e.height,S,t=>a(()=>{e.height=t}))),q(C(`beginner.field.color`),er(e.color,t=>a(()=>{e.color=t}),`change`))),i.model||o.append(q(C(`beginner.field.look`),Y(ye,e.look,`look`,t=>a(()=>{e.look=t}))),q(C(`beginner.field.pattern`),Y(we,e.pattern??i.main.pattern??`none`,`pattern`,t=>a(()=>{e.pattern=t})))),i.source&&o.append(q(C(`beginner.field.liquid`),Y(D,e.liquid??i.source,`liquid`,t=>a(()=>{e.liquid=t}))),q(C(`beginner.field.flow`),J(``,e.flow,de,t=>a(()=>{e.flow=t})))),i.weather&&o.append(q(C(`beginner.field.strength`),J(``,e.flow,de,t=>a(()=>{e.flow=t})))),i.shapeable&&o.append(q(C(`beginner.field.shape`),Y(me,e.shape??i.main.shape,`shape`,t=>a(()=>{e.shape=t})))),r>=2&&o.append(this.behaviours(e,r,a)),r>=3&&o.append(this.props(e,a)),o.append(T(`button`,{type:`button`,class:`btn ghost small beginner-remove`,onclick:()=>{this.undo&&window.clearTimeout(this.undo.timer);let n=b(t,e.id);this.host.puff(e.x,e.z),this.host.sound(`tap`),this.undo={items:n,timer:window.setTimeout(()=>{this.undo=null,this.render()},1e4)},this.selected=null,this.host.changed(),this.render()}},`🗑 ${C(`beginner.remove`)}`)),o}behaviours(e,t,n){let r=this.host.model,i=T(`div`,{class:`beginner-sub`});for(let t of e.behaviours){let a=l(t.id);if(!a)continue;let o=T(`div`,{class:`beginner-beh`},T(`span`,{class:`beginner-beh-name`},`${a.emoji} ${C(`beginner.beh.${t.id}`)}`));if(a.param===`number`)o.append(J(C(`beginner.behParam.${t.id}`),Number(t.value),a.range,e=>n(()=>{t.value=e})));else if(a.param===`color`)o.append(er(String(t.value),e=>n(()=>{t.value=e})));else if(a.param===`target`){let i=r.items.filter(t=>t.id!==e.id);o.append(i.length?Y(i.map(e=>e.id),String(t.value),null,e=>n(()=>{t.value=e}),e=>r.items.find(t=>t.id===e)?.name??e):T(`span`,{class:`muted`},C(`beginner.nobody`)))}else if(a.param===`word`){let n=`say-${e.id}`,r=this.input(n,String(t.value??``),`text-input small`,C(`beginner.behParam.${t.id}`));r.addEventListener(`change`,()=>{let e=le(r.value);e.ok&&typeof e.value==`string`?(this.errors.delete(n),this.drafts.delete(n),t.value=e.value,this.host.changed(),this.later()):(this.errors.set(n,C(`beginner.err.${e.ok?`onlyLetters`:e.reason}`)),this.host.sound(`error`),this.later())}),o.append(r,this.error(n))}o.append(T(`button`,{type:`button`,class:`btn icon-btn small-icon`,"aria-label":C(`beginner.remove`),onclick:()=>n(()=>{e.behaviours=e.behaviours.filter(e=>e!==t)})},`✕`)),i.append(o)}let a=o.filter(n=>n.step<=t&&n.fits(e,r)&&!e.behaviours.some(e=>e.id===n.id));if(a.length){let t=T(`div`,{class:`choice-row beginner-add`,"data-hint":`behaviour`},T(`span`,{class:`beginner-label`},C(`beginner.addBehaviour`)));for(let i of a)t.append(T(`button`,{type:`button`,class:`chip small`,onclick:()=>n(()=>{let t=r.items.find(t=>t.id!==e.id),n=i.param===`number`?i.range.def:i.param===`color`?`red`:i.param===`word`?`hello`:i.param===`target`?t?.id??null:null;e.behaviours.push({id:i.id,value:n}),r.counts.behaviours++})},`${i.emoji} ${C(`beginner.beh.${i.id}`)}`));i.append(t)}return i}props(e,t){let n=this.host.model,r=T(`div`,{class:`beginner-sub`});for(let n of e.props)r.append(T(`div`,{class:`beginner-prop`},T(`code`,{},`${n.name} = ${typeof n.value==`number`?n.value:`"${n.value}"`}`),T(`button`,{type:`button`,class:`btn icon-btn small-icon`,"aria-label":C(`beginner.remove`),onclick:()=>t(()=>{e.props=e.props.filter(e=>e!==n)})},`✕`)));let i=this.input(`propName-${e.id}`,``,`text-input small`,C(`beginner.propName`),C(`beginner.propName`)),a=this.input(`propValue-${e.id}`,``,`text-input small`,C(`beginner.propValue`),C(`beginner.propValue`)),o=()=>{let r=ge(i.value,e);if(r!==`ok`){this.errors.set(`prop`,C(`beginner.err.${r}`)),this.host.sound(`error`),this.render();return}let o=le(a.value);o.ok?(this.errors.delete(`prop`),this.drafts.delete(`propName-${e.id}`),this.drafts.delete(`propValue-${e.id}`),t(()=>{e.props.push({name:i.value.trim(),value:o.value}),n.counts.props++})):(this.errors.set(`prop`,C(`beginner.err.${o.reason}`)),this.host.sound(`error`),this.render())};return a.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),o())}),r.append(T(`div`,{class:`beginner-prop-add`,"data-hint":`prop`},i,T(`span`,{},`=`),a,T(`button`,{type:`button`,class:`btn small`,onclick:o},C(`beginner.addProp`))),this.error(`prop`)),r}input(e,t,n,r,i){let a=T(`input`,{class:n,type:`text`,value:this.drafts.get(e)??t,maxlength:16,autocomplete:`off`,autocapitalize:`off`,spellcheck:`false`,enterkeyhint:`done`,"aria-label":r,placeholder:i,"data-key":e});return a.addEventListener(`input`,()=>this.drafts.set(e,a.value)),a}later(){window.setTimeout(()=>this.render(),0)}error(e){let t=this.errors.get(e);return t?T(`p`,{class:`beginner-error`,role:`alert`},`🙂 ${t}`):``}showCode(){let e=Ee(this.host.model),t=this.selected?e.ranges[this.selected]:void 0,n=T(`pre`,{class:`beginner-code`});e.source.trimEnd().split(`
`).forEach((e,r)=>{let i=r+1,a=`${e}\n`;n.append(t&&i>=t[0]&&i<=t[1]?T(`mark`,{},a):a)});let r=T(`div`,{class:`modal-backdrop`}),i=()=>r.remove();r.append(T(`div`,{class:`modal beginner-code-modal`,role:`dialog`},T(`h2`,{},C(`beginner.codeTitle`)),T(`p`,{class:`muted`},C(`beginner.codeText`)),n,T(`div`,{class:`modal-actions`},T(`button`,{type:`button`,class:`btn primary`,onclick:i},C(`beginner.ok2`))))),r.addEventListener(`pointerdown`,e=>{e.target===r&&i()}),document.body.append(r),n.querySelector(`mark`)?.scrollIntoView({block:`center`})}};function q(e,...t){return T(`div`,{class:`beginner-field`},T(`span`,{class:`beginner-label`},e),...t)}function J(e,t,n,r,i=1){let a=e=>{let a=Math.min(n.max,Math.max(n.min,t+e*i));a!==t&&r(a)};return T(`div`,{class:`stepper`},e?T(`span`,{class:`muted`},e):``,T(`button`,{type:`button`,class:`btn`,"aria-label":`${e} −`,disabled:t<=n.min,onclick:()=>a(-1)},`−`),T(`output`,{class:`stepper-value`},String(t)),T(`button`,{type:`button`,class:`btn`,"aria-label":`${e} +`,disabled:t>=n.max,onclick:()=>a(1)},`+`))}function er(e,t,n){let r=T(`div`,{class:`swatches`,"data-hint":n});for(let n of Ce){let i=T(`button`,{type:`button`,class:`swatch${n===e?` active`:``}`,"data-color":n,"aria-pressed":n===e,"aria-label":C(`beginner.color.${n}`),title:C(`beginner.color.${n}`),onclick:()=>t(n)});i.style.setProperty(`--c`,Qn[n]),r.append(i)}return r}function Y(e,t,n,r,i){let a=T(`div`,{class:`choice-row`});for(let o of e)a.append(T(`button`,{type:`button`,class:`chip small${o===t?` active`:``}`,"aria-pressed":o===t,"data-value":o,onclick:()=>r(o)},i?i(o):C(`beginner.${n}.${o}`)));return a}var X={speed:4,run:1.75,jump:7.5,gravity:20,stepUp:.45,swimDepth:.6,fallY:-20,ground:22,body:[.6,1.2,.6]},tr={id:``,min:[-X.ground,-10,-X.ground],max:[X.ground,0,X.ground],solid:!0,hard:!0,dynamic:!1},Z=1e-4,Q=.05,nr=e=>X.body[1]*e/2;function rr(e,t,n){return{x:e,y:t,z:n,vx:0,vy:0,vz:0,yaw:0,onGround:!1,swimming:!1,groundId:null,groundAt:null}}function ir(e,n){let r=[];for(let a of e.objects){if(a.id===n||!t(a))continue;let[o,s,c]=d(e,a),[l,u,f]=i(e,a),p=a.values.solid===!0;r.push({id:a.id,hard:p,solid:p||a.values.solid!==!1&&ar(l,u,f),dynamic:typeof a.values.mass==`number`&&a.values.mass>0,min:[o-l/2,s-u/2,c-f/2],max:[o+l/2,s+u/2,c+f/2]})}return r}var ar=(e,t,n)=>t>=.5&&Math.max(e,n)>=.5,or=e=>[(e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2];function sr(e,t,n,r,i,a){let o=Math.min(3,Math.max(.5,n.size)),s=[X.body[0]*o/2,X.body[1]*o/2,X.body[2]*o/2],c=[tr,...r.filter(e=>e.solid)],l={touching:[],pushes:[],fell:!1};if(e.groundId!==null&&e.groundAt){let t=c.find(t=>t.id===e.groundId);if(t){let n=or(t);e.x+=n[0]-e.groundAt[0],e.y+=n[1]-e.groundAt[1],e.z+=n[2]-e.groundAt[2]}}for(let t of c){let n={min:[e.x-s[0],e.y-s[1],e.z-s[2]],max:[e.x+s[0],e.y+s[1],e.z+s[2]]};if(!(n.min[0]<t.max[0]-Z&&n.max[0]>t.min[0]+Z&&n.min[1]<t.max[1]-Z&&n.max[1]>t.min[1]+Z&&n.min[2]<t.max[2]-Z&&n.max[2]>t.min[2]+Z))continue;let[r,i]=[[t.max[0]-n.min[0],`x+`],[n.max[0]-t.min[0],`x-`],[t.max[2]-n.min[2],`z+`],[n.max[2]-t.min[2],`z-`],[t.max[1]-n.min[1],`up`]].reduce((e,t)=>t[0]<e[0]?t:e);i===`x+`?(e.x+=r+Z,e.vx=Math.max(0,e.vx)):i===`x-`?(e.x-=r+Z,e.vx=Math.min(0,e.vx)):i===`z+`?(e.z+=r+Z,e.vz=Math.max(0,e.vz)):i===`z-`?(e.z-=r+Z,e.vz=Math.min(0,e.vz)):(e.y+=r+Z,e.vy=Math.max(0,e.vy))}if(!e.onGround&&e.vy<=0){let t=e.y-s[1];e.onGround=c.some(n=>Math.abs(t-n.max[1])<.01&&e.x+s[0]>n.min[0]&&e.x-s[0]<n.max[0]&&e.z+s[2]>n.min[2]&&e.z-s[2]<n.max[2])}let u=Math.min(1,Math.hypot(t.mx,t.mz)),d=i(e.x,e.z);e.swimming=d!==null&&d-(e.y-s[1])>X.swimDepth*o;let f=Math.max(0,n.speed)*(t.run?X.run:1)*(e.swimming?.5:1)*Math.sqrt(o),p=Math.hypot(t.mx,t.mz)||1,m=t.mx/p*u*f,h=t.mz/p*u*f,g=Math.min(1,a*12);e.vx+=(m-e.vx)*g,e.vz+=(h-e.vz)*g,u>.1&&(e.yaw=Math.atan2(-t.mz,t.mx)),e.swimming?(e.vy-=X.gravity*.25*a,e.vy*=Math.max(0,1-3*a),t.jump&&(e.vy=3)):(t.jump&&e.onGround&&(e.vy=Math.max(0,n.jump)),e.vy-=X.gravity*a);let _=()=>({min:[e.x-s[0],e.y-s[1],e.z-s[2]],max:[e.x+s[0],e.y+s[1],e.z+s[2]]}),v=(e,t)=>e.min[0]<t.max[0]-Z&&e.max[0]>t.min[0]+Z&&e.min[1]<t.max[1]-Z&&e.max[1]>t.min[1]+Z&&e.min[2]<t.max[2]-Z&&e.max[2]>t.min[2]+Z,y=e.onGround;for(let t of[0,2]){let n=t===0?`x`:`z`,r=t===0?e.vx:e.vz;if(r){e[n]+=r*a;for(let i of c){let a=_();if(!v(a,i))continue;let u=i.max[1]-a.min[1];y&&u>0&&u<=X.stepUp*o&&!c.some(e=>e!==i&&v({min:[a.min[0],i.max[1],a.min[2]],max:[a.max[0],i.max[1]+2*s[1],a.max[2]]},e))?e.y+=u+Z:(e[n]=r>0?i.min[t]-s[t]:i.max[t]+s[t],i.dynamic&&l.pushes.push({id:i.id,vx:t===0?r*.8:0,vz:t===2?r*.8:0}),t===0?e.vx=0:e.vz=0)}}}e.y+=e.vy*a,e.onGround=!1,e.groundId=null,e.groundAt=null;for(let t of c)v(_(),t)&&(e.vy<=0?(e.y=t.max[1]+s[1],e.vy=0,e.onGround=!0,e.groundId=t.id,e.groundAt=or(t)):(e.y=t.min[1]-s[1],e.vy=0));if(!e.onGround){let t=_();for(let n of c)if(Math.abs(t.min[1]-n.max[1])<.01&&t.min[0]<n.max[0]&&t.max[0]>n.min[0]&&t.min[2]<n.max[2]&&t.max[2]>n.min[2]&&e.vy<=0){e.onGround=!0,e.vy=0,e.groundId=n.id,e.groundAt=or(n);break}}e.groundId===``&&(e.groundAt=null),e.groundId===``&&(e.groundId=null);let b=_();for(let e of r)b.min[0]-Q<e.max[0]&&b.max[0]+Q>e.min[0]&&b.min[1]-Q<e.max[1]&&b.max[1]+Q>e.min[1]&&b.min[2]-Q<e.max[2]&&b.max[2]+Q>e.min[2]&&l.touching.push(e.id);return l.fell=e.y<X.fallY,l}var $=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,cr=2.5,lr=1,ur=e=>Number(e.params?.times??1)||1;function dr(e){let t=e[e.length-1];return t?{seq:t.seq,times:ur(t)}:{seq:0,times:1}}function fr(e,t){return e.filter(e=>(e.kind===`say`||e.kind===`error`)&&(e.seq>t.seq||e.seq===t.seq&&ur(e)>t.times))}function pr(e,t,n){let r=(t.yaw-e.yaw)%(2*Math.PI);return r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI),{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n,yaw:e.yaw+r*n}}var mr=e=>({x:e.x,y:e.y,z:e.z,yaw:e.yaw}),hr=class{world;runtime;walker;input={mx:0,mz:0,run:!1,jump:!1};onRespawn=null;acc=0;prev;touching=new Set;written={x:0,y:0,z:0,vy:0};constructor(t,n){this.world=t,this.runtime=n;let[r,i,a]=e(t);this.walker=rr(r,i+nr(1)+.01,a),this.prev=mr(this.walker),this.write()}update(e){for(this.acc=Math.min(this.acc+e,k*5);this.acc>=k;)this.acc-=k,this.step()}renderPose(){return pr(this.prev,mr(this.walker),Math.min(1,this.acc/k))}step(){let t=this.walker,n=f(this.world);n||=(this.write(),f(this.world));let i=n.values;($(i.x,t.x)!==this.written.x||$(i.y,t.y)!==this.written.y||$(i.z,t.z)!==this.written.z)&&(t.x=$(i.x,t.x),t.y=$(i.y,t.y),t.z=$(i.z,t.z),t.vx=0,t.vz=0,t.groundId=null,t.groundAt=null),this.prev=mr(t),$(i.vy,0)!==this.written.vy&&(t.vy=$(i.vy,0));let a={speed:$(i.speed,4),jump:$(i.jump,7.5),size:$(i.size,1)},o=sr(t,this.input,a,ir(this.world,v),(e,t)=>r(this.world,e,t)?.surface??null,k);if(this.input.jump=!1,o.fell){let[n,r,i]=e(this.world);Object.assign(t,{x:n,y:r+nr(a.size)+.01,z:i,vx:0,vy:0,vz:0,groundId:null,groundAt:null}),this.prev=mr(t),this.touching.clear(),this.onRespawn?.()}this.write();for(let e of o.pushes)this.runtime.nudge(e.id,e.vx*k*3,e.vz*k*3);let s=new Set(o.touching);for(let e of s)this.touching.has(e)||this.runtime.playerTouched(e);this.touching=s}write(){let e=this.walker,t=this.runtime.putPlayer(e.x,e.y,e.z);t.values.vy=e.vy,t.values.ry=e.yaw*180/Math.PI,this.written={x:e.x,y:e.y,z:e.z,vy:e.vy}}press(){let e=this.walker,t=Math.min(3,Math.max(.5,$(f(this.world)?.values.size,1))),n=[X.body[0]*t/2,X.body[1]*t/2,X.body[2]*t/2],r={min:[e.x-n[0],e.y-n[1],e.z-n[2]],max:[e.x+n[0],e.y+n[1],e.z+n[2]]},i=Math.cos(e.yaw),a=-Math.sin(e.yaw),o=null,s=cr,c=-1/0;for(let t of ir(this.world,v)){if(t.id===e.groundId||t.max[1]<=r.min[1]+.05||t.min[1]>r.max[1]+lr||t.max[1]<r.min[1]-lr)continue;let n=e=>Math.max(t.min[e]-r.max[e],0,r.min[e]-t.max[e]),l=Math.hypot(n(0),n(1),n(2)),u=((t.min[0]+t.max[0])/2-e.x)*i+((t.min[2]+t.max[2])/2-e.z)*a;u<=-.2||l>s+1e-6||(l<s-1e-6||u>c)&&(o=t.id,s=l,c=u)}return o&&this.runtime.playerPressed(o),o}stop(){this.runtime.removePlayer()}},gr=.15;function _r(e,t,n){let r=Math.hypot(e,t);if(r<n*gr)return{x:0,y:0,run:!1};let i=Math.min(1,r/n)/r;return{x:e*i,y:t*i,run:r>n*1.2}}function vr(e,t,n){let r=-t,i=e,a=Math.cos(n),o=Math.sin(n);return{mx:r*a+i*o,mz:-r*o+i*a}}var yr=[`KeyA`,`ArrowLeft`],br=[`KeyD`,`ArrowRight`],xr=[`KeyW`,`ArrowUp`],Sr=[`KeyS`,`ArrowDown`],Cr=[`ShiftLeft`,`ShiftRight`],wr=new Set([...yr,...br,...xr,...Sr,...Cr]),Tr=e=>wr.has(e);function Er(e){let t=t=>t.some(t=>e.has(t)),n=+!!t(br)-!!t(yr),r=+!!t(Sr)-!!t(xr),i=Math.hypot(n,r)||1;return{x:n/i,y:r/i,run:t(Cr)}}var Dr=class{hd;el;keys=new Set;stickId=null;lookId=null;origin={x:0,y:0};last={x:0,y:0};knob;base;offKeys;msg=T(`div`,{class:`walk-msg`,role:`status`,"aria-live":`polite`});msgTimer=0;constructor(e,t){this.hd=t,this.knob=T(`div`,{class:`walk-knob`}),this.base=T(`div`,{class:`walk-stick`,hidden:!0},this.knob);let n=T(`div`,{class:`walk-pad`},this.base),r=T(`button`,{type:`button`,class:`btn walk-btn walk-jump`,"aria-label":C(`walk.jump`),onpointerdown:e=>{e.stopPropagation(),t.jump()}},`⤴ ${C(`walk.jump`)}`),i=T(`button`,{type:`button`,class:`btn walk-btn walk-press`,"aria-label":C(`walk.press`),onpointerdown:e=>{e.stopPropagation(),t.press()}},`✋ ${C(`walk.press`)}`);this.el=T(`div`,{class:`walk-overlay`},n,this.msg,T(`div`,{class:`walk-buttons`},r,i)),n.addEventListener(`pointerdown`,e=>this.down(e,n)),n.addEventListener(`pointermove`,e=>this.moveP(e));for(let e of[`pointerup`,`pointercancel`])n.addEventListener(e,e=>this.up(e));e.append(this.el);let a=e=>{e.target?.closest?.(`input, textarea, .cm-editor`)||(e.code===`Space`&&(e.preventDefault(),e.repeat||t.jump()),e.code===`KeyE`&&!e.repeat&&t.press(),Tr(e.code)&&!this.keys.has(e.code)&&(this.keys.add(e.code),this.keyMove()))},o=e=>{this.keys.delete(e.code)&&this.keyMove()},s=()=>{this.keys.size&&(this.keys.clear(),this.keyMove())};window.addEventListener(`keydown`,a),window.addEventListener(`keyup`,o),window.addEventListener(`blur`,s),this.offKeys=()=>{window.removeEventListener(`keydown`,a),window.removeEventListener(`keyup`,o),window.removeEventListener(`blur`,s)}}down(e,t){let n=t.getBoundingClientRect();if(e.clientX<n.left+n.width/2&&this.stickId===null)this.stickId=e.pointerId,this.origin={x:e.clientX,y:e.clientY},this.base.hidden=!1,Object.assign(this.base.style,{left:`${e.clientX-n.left}px`,top:`${e.clientY-n.top}px`});else if(this.lookId===null)this.lookId=e.pointerId,this.last={x:e.clientX,y:e.clientY};else return;t.setPointerCapture(e.pointerId)}moveP(e){if(e.pointerId===this.stickId){let t=_r(e.clientX-this.origin.x,e.clientY-this.origin.y,60);this.knob.style.transform=`translate(${t.x*40}px, ${t.y*40}px)`,this.hd.move(t.x,t.y,t.run)}else e.pointerId===this.lookId&&(this.hd.look((e.clientX-this.last.x)*.008,(e.clientY-this.last.y)*.005),this.last={x:e.clientX,y:e.clientY})}up(e){e.pointerId===this.stickId&&(this.stickId=null,this.base.hidden=!0,this.knob.style.transform=``,this.hd.move(0,0,!1)),e.pointerId===this.lookId&&(this.lookId=null)}keyMove(){let e=Er(this.keys);this.hd.move(e.x,e.y,e.run)}showMessage(e){this.msg.textContent=e,this.msg.classList.add(`show`),window.clearTimeout(this.msgTimer),this.msgTimer=window.setTimeout(()=>this.msg.classList.remove(`show`),4e3)}dispose(){window.clearTimeout(this.msgTimer),this.offKeys(),this.el.remove()}},Or=1500,kr=[1,8,24,72],Ar=[[`⇥`,`    `],[`(`,`(`],[`)`,`)`],[`:`,`:`],[`=`,`=`],[`"`,`"`],[`.`,`.`],[`,`,`,`],[`[`,`[`],[`]`,`]`],[`+`,`+`],[`-`,`-`],[`*`,`*`],[`/`,`/`],[`<`,`<`],[`>`,`>`],[`_`,`_`],[`#`,`#`]],jr=class{app;world;el=T(`div`,{class:`world-screen`});stage=T(`div`,{class:`stage`});view;runtime;chrome=T(`div`,{class:`chrome`});tab=`code`;panelOpen=!0;saveState=`saved`;dirty=!1;liquidVersion=-1;shownSecond=-1;renderedLogSeq=-1;autosaveTimer;codeTimer=0;toastTimer=0;runNote=null;selectedId=null;emptyEl=null;inspectorStale=!1;editErrors=new Map;clockEl=null;saveEl=null;panelBody=null;editor=null;editorHost=T(`div`,{class:`editor-host`});hintEl=T(`div`,{class:`hint-bar`,"aria-live":`polite`});hintTimer=0;codeMode=`text`;blocks=null;codePanelEl=null;noteEl=null;debugEl=null;showDetails=!1;trace=null;traceStep=0;seenTrace=null;toastEl=T(`div`,{class:`toast`,role:`status`});tracker;challengeTimer=0;hints=new Map;openTopic=null;tutorial=null;cameraMoved=!1;lastTutorialCheck=0;beginner=null;applyTimer=0;beginnerHintTimer=0;lastActionAt=Date.now();lastHintAt=0;walk=null;walkControls=null;stick={x:0,y:0,run:!1};walkSolids=null;walkLogMark={seq:0,times:1};constructor(e,t,n,r=!1){this.app=e,this.world=t,this.runtime=new p(t),this.runtime.link(),n&&this.catchUp(n,!1),this.view=new Vt(this.stage),this.view.setHelpersVisible(e.settings.showGrid),this.view.onFrame=e=>this.frame(e),this.view.onPick=(e,t)=>this.pick(e,t),this.view.onCameraMove=()=>{this.cameraMoved=!0},this.tracker=new Xt(new Set(e.settings.completedChallenges)),this.challengeTimer=window.setInterval(()=>this.watchChallenges(),1e3),r&&queueMicrotask(()=>this.startTour()),t.settings.mode===`beginner`&&t.beginner&&this.startBeginner(),this.applyPanelSize(),this.applyViewSettings(),this.offSettings=e.onSettingsChange(()=>{this.applyViewSettings(),this.restartAutosave()}),this.el.append(this.stage,this.chrome,this.toastEl,this.perfEl),this.perfEl.hidden=!0,this.view.onContextChange=e=>{this.toast(C(e?`world.contextRestored`:`world.contextLost`)),e&&this.view.syncObjects(this.world,{all:!0,dirty:new Set,removed:new Set,created:new Set})},this.markDirty(),this.render(),this.autosaveTimer=0,this.restartAutosave(),document.addEventListener(`visibilitychange`,this.onVisibility),window.addEventListener(`pagehide`,this.onPageHide)}offSettings;applyViewSettings(){let e=this.app.settings;this.view.setQuality(e.quality),this.view.setSensitivity(e.cameraSensitivity),this.view.setReduceMotion(e.reduceMotion)}restartAutosave(){window.clearInterval(this.autosaveTimer),this.autosaveTimer=window.setInterval(()=>{this.dirty&&this.save()},this.app.settings.autosaveSeconds*1e3)}async saveNow(){await this.save(),this.toast(C(this.saveState===`saved`?`world.savedNow`:`error.saveFailed`))}refreshTexts(){this.codePanelEl=null,this.blocks?.refreshTexts(),this.render()}async dispose(){this.stopWalk(),window.clearInterval(this.autosaveTimer),window.clearInterval(this.challengeTimer),window.clearTimeout(this.codeTimer),window.clearTimeout(this.applyTimer),window.clearInterval(this.beginnerHintTimer),this.offSettings(),this.tutorial?.close(),document.removeEventListener(`visibilitychange`,this.onVisibility),window.removeEventListener(`pagehide`,this.onPageHide),await this.save(),this.editor?.destroy(),this.blocks?.destroy(),this.view.dispose()}perfEl=T(`div`,{class:`perf`,"aria-hidden":`true`});perfStats={frames:0,since:performance.now(),simMs:0,maxSimMs:0,saveMs:0,saveKB:0};updatePerf(e){let t=this.perfStats;t.frames++,t.simMs+=e,t.maxSimMs=Math.max(t.maxSimMs,e);let n=performance.now();if(n-t.since<500)return;let r=this.app.settings.showPerf;if(this.perfEl.hidden=!r,r){let e=t.frames*1e3/(n-t.since),r=this.view.renderStats,i=performance.memory;this.perfEl.textContent=[`FPS ${e.toFixed(0)}   frame ${((n-t.since)/t.frames).toFixed(1)} ms`,`sim ${(t.simMs/t.frames).toFixed(2)} ms (max ${t.maxSimMs.toFixed(1)})`,`objects ${this.world.objects.length}   drawn ${this.view.objects.count}`,`draw calls ${r.calls}   triangles ${r.triangles}`,`rules ${this.runtime.handlers.length}   timers ${this.runtime.timers.length}`,`save ${t.saveMs.toFixed(1)} ms   ${t.saveKB.toFixed(0)} KB`,i?`JS heap ${(i.usedJSHeapSize/1048576).toFixed(0)} MB`:`JS heap n/a (Safari)`].join(`
`)}t.frames=0,t.simMs=0,t.maxSimMs=0,t.since=n}frame(e){let t=performance.now();this.frameInner(e),this.updatePerf(performance.now()-t)}frameInner(e){let t=this.world.clock.simTime;if(_e(this.world.clock,e)>0){this.dirty=!0;let e=this.runtime.advance(t,this.world.clock.simTime);e.skippedSeconds>0&&E(this.world,`sim`,`log.catchUpSkipped`,{skippedMs:e.skippedSeconds*1e3})}this.runtime.lastTrace!==this.seenTrace&&(this.seenTrace=this.runtime.lastTrace,this.seenTrace?.kind===`rule`&&(this.tab=`code`,this.panelOpen=!0,this.render(),this.openTrace(this.seenTrace)));let n=this.runtime.takeEffects();if(n.length){this.view.objects.playEffects(n);for(let e of n)this.app.sound.play(e.kind===`spark`?`collide`:e.kind===`splash`?`splash`:e.good?`success`:`fail`)}this.walk&&(this.stepWalk(e),this.showWalkMessages());let r=this.runtime.takeChanges();r.created.size&&this.app.sound.play(`create`),this.walkSolids&&(r.all||r.removed.size||[...r.dirty].some(e=>e!==`player-1`))&&(this.walkSolids=null),(r.all||r.dirty.size||r.removed.size)&&(this.view.syncObjects(this.world,r),this.inspectorStale=!0,this.dirty=!0,this.emptyEl&&(this.emptyEl.hidden=this.view.objects.count>0));let i=this.world.settings.mode===`beginner`?`island`:this.world.settings.laws===`standard`?`sky`:`space`;this.view.setEnvironment(i,this.world.clock.simTime);let a=this.world.liquid?.version??-1;a!==this.liquidVersion&&(this.liquidVersion=a,this.dirty=!0),this.view.liquids.sync(this.world),this.tutorial&&performance.now()-this.lastTutorialCheck>250&&(this.lastTutorialCheck=performance.now(),this.tutorial.update());let o=Math.floor(this.world.clock.simTime);(o!==this.shownSecond||this.inspectorStale&&this.tab===`inspector`)&&(this.shownSecond=o,this.clockEl&&(this.clockEl.textContent=Se(this.world.clock.simTime)),this.panelOpen&&(this.tab===`inspector`||this.tab===`log`)&&this.renderPanel())}startWalk(){if(this.walk)return;this.walk=new hr(this.world,this.runtime),this.walk.onRespawn=()=>this.app.sound.play(`fail`),this.walkLogMark=dr(this.world.log),this.stick={x:0,y:0,run:!1};let e=this.app.settings.academy;this.view.startWalk({color:e.bipColor,hat:e.bipHat}),this.walkSolids=null,this.view.walkBlockers=()=>this.walkSolids??=ir(this.world,v).filter(e=>e.hard),this.el.classList.add(`walking`),this.walkControls=new Dr(this.stage,{move:(e,t,n)=>{this.stick={x:e,y:t,run:n}},look:(e,t)=>this.view.turnCamera(e,t),jump:()=>{this.walk&&(this.walk.input.jump=!0)},press:()=>{this.walk?.press()&&(this.app.sound.play(`create`),this.markDirty())}}),this.walkControls.el.append(T(`button`,{type:`button`,class:`btn walk-btn walk-home`,"aria-label":C(`walk.stop`),title:C(`walk.stop`),onclick:()=>this.stopWalk()},`🏠`)),this.measureTopbar(),window.addEventListener(`resize`,this.measureTopbar)}stopWalk(){let e=this.walk;e&&(this.walk=null,e.stop(),this.walkControls?.dispose(),this.walkControls=null,this.walkSolids=null,this.view.walkBlockers=null,this.view.stopWalk(),this.el.classList.remove(`walking`),window.removeEventListener(`resize`,this.measureTopbar))}showWalkMessages(){let e=dr(this.world.log);if(e.seq===this.walkLogMark.seq&&e.times===this.walkLogMark.times)return;let t=fr(this.world.log,this.walkLogMark);this.walkLogMark=e,t.length&&this.walkControls?.showMessage(t.slice(-2).map(e=>`${e.kind===`error`?`⚠️`:`💬`} ${F(e)}`).join(`
`))}measureTopbar=()=>{let e=this.chrome.querySelector(`.topbar`);e&&this.el.style.setProperty(`--topbar-h`,`${e.offsetHeight}px`)};stepWalk(e){let t=this.walk,n=vr(this.stick.x,this.stick.y,this.view.cameraYaw);t.input.mx=n.mx,t.input.mz=n.mz,t.input.run=this.stick.run,t.update(e);let r=t.walker,i=t.renderPose(),a=f(this.world)?.values??{},o=Number(a.size??1)||1,s=this.app.settings.academy;this.view.setWalkLook({color:typeof a.color==`string`?a.color:s.bipColor,hat:typeof a.hat==`string`?a.hat:s.bipHat}),this.view.setWalkPose(i.x,i.y,i.z,i.yaw,Math.min(3,Math.max(.5,o)),Math.hypot(r.vx,r.vz)>.3,e)}watchChallenges(){let e=this.tracker.observe({world:this.world,handlers:this.runtime.handlers});if(e.length){for(let t of e)E(this.world,`info`,`log.challengeDone`,{title:`@ch.${t}.title`}),this.toast(`🎉 ${C(`learn.reached`,{title:C(`ch.${t}.title`)})}`),this.app.sound.play(`success`);this.app.updateSettings({completedChallenges:V.map(e=>e.id).filter(e=>this.tracker.isDone(e))}),this.markDirty(),this.tab===`learn`&&this.renderPanelForce()}}appendCode(e){if(this.beginner)return;let t=this.editor,n=t?.value??this.world.program.source,r=n.trim()?`${n.replace(/\n*$/,``)}\n\n${e.replace(/\n*$/,``)}\n`:`${e.replace(/\n*$/,``)}\n`;t?t.setValue(r):this.world.program.source=r,this.world.program.source=r,this.markDirty(),this.tab=`code`,this.panelOpen=!0,this.codePanelEl=null,this.render(),this.toast(C(`learn.added`))}async useExample(e){let t=V.find(t=>t.id===e);t&&await x(C(`learn.exampleTitle`),C(`learn.exampleText`),C(`learn.exampleConfirm`))&&this.appendCode(t.example)}startTour(){this.beginner||(this.tutorial?.close(),this.tab=this.tab===`learn`?`inspector`:this.tab,this.render(),this.tutorial=new Mn({root:this.el,state:()=>({cameraMoved:this.cameraMoved,tab:this.tab,code:this.editor?.value??this.world.program.source,objects:this.world.objects.length,selected:this.selectedId!==null,running:this.world.clock.running}),insertCode:e=>{this.tab!==`code`&&(this.tab=`code`,this.render()),this.appendCode(e)},finish:()=>{this.tutorial=null,this.app.settings.tutorialDone||this.app.updateSettings({tutorialDone:!0})}}),this.cameraMoved=!1)}pick(e,t=null){this.beginner?this.pickBeginner(e,t):(e&&(this.app.sound.play(`tap`),this.runtime.tap(e)&&this.markDirty()),this.select(e))}startBeginner(){let e=this.world.beginner;this.tab=`build`,this.beginner=new $n({world:this.world,model:e,changed:()=>this.beginnerChanged(),toast:e=>this.toast(e),toFree:()=>this.beginnerToFree(),sound:e=>this.app.sound.play(e),puff:(e,t)=>this.view.objects.puff([e,.1,t]),thumbs:this.app.thumbnails,islandDone:e=>Ae(this.app.settings.academy,e)}),this.app.thumbnails.onReady=(e,t)=>this.beginner?.thumbReady(e,t),this.world.program.source||this.applyBeginner(),this.beginnerHintTimer=window.setInterval(()=>{if(!this.world.beginner)return;let e=Zn(Date.now(),this.lastActionAt,this.lastHintAt,this.world.beginner);e&&(this.lastHintAt=Date.now(),this.beginner?.showHint(e))},5e3)}beginnerChanged(){this.lastActionAt=Date.now(),window.clearTimeout(this.applyTimer),this.applyTimer=window.setTimeout(()=>this.applyBeginner(),250)}applyBeginner(){let e=this.world.beginner;if(!e)return;let t=Ee(e);this.world.program.source=t.source;let n=this.runtime.reset(t.source,!0);this.world.clock.running=!0,n.ok||this.setRunNote(n),this.markDirty();let r=e.step;e.step=Yn(e);for(let t of Xn(r,e.step))this.beginner?.showStep(t);this.beginner?.render(),this.emptyEl&&(this.emptyEl.hidden=!0)}pickBeginner(e,t){this.lastActionAt=Date.now();let n=this.beginner;if(n.placing&&t&&n.placeAt(t.x,t.z)){this.toastEl.classList.remove(`show`),this.panelOpen&&this.tab===`build`||(this.tab=`build`,this.panelOpen=!0,this.render());return}e&&(this.app.sound.play(`tap`),this.runtime.tap(e)&&this.markDirty());let r=e?re(this.world,this.world.beginner,e):null;r&&(n.select(r.id),this.panelOpen&&this.tab===`build`||(this.tab=`build`,this.panelOpen=!0,this.render()))}async beginnerToFree(){await x(C(`beginner.toFreeTitle`),C(`beginner.toFreeText`),C(`beginner.toFreeConfirm`))&&(window.clearTimeout(this.applyTimer),this.world.beginner&&(this.world.program.source=Ee(this.world.beginner).source),window.clearInterval(this.beginnerHintTimer),this.world.settings.mode=`free`,delete this.world.beginner,this.beginner=null,this.tab=`code`,this.editor?.setValue(this.world.program.source),this.markDirty(),this.save(),this.render())}select(e){e!==this.selectedId&&this.editErrors.clear(),this.selectedId=e,this.view.objects.select(e),e&&(this.tab=`inspector`,this.panelOpen=!0),this.render()}inspectorContext(){return{world:this.world,rt:this.runtime,selectedId:this.selectedId,select:e=>this.select(e),focus:e=>this.view.focusObject(e),destroy:e=>void this.destroyObject(e),edit:(e,t,n)=>{let r=this.runtime.setPropertyFromText(e,t,n),i=`${e}.${t}`;if(r){let e=F({key:r.key,params:r.params,kind:`info`});return this.editErrors.set(i,{text:e,typed:n}),e}return this.editErrors.delete(i),this.markDirty(),null},editError:(e,t)=>this.editErrors.get(`${e}.${t}`)}}async destroyObject(e){let t=this.world.objects.find(t=>t.id===e);t&&await x(C(`inspector.destroyTitle`,{obj:fe(this.world,t)}),C(`inspector.destroyText`),C(`inspector.destroy`))&&(this.runtime.destroyFromUi(e),this.selectedId===e&&(this.selectedId=null),this.markDirty(),this.render())}applyPanelSize(){let{panelWidth:e,panelHeight:t}=this.app.settings;e&&this.el.style.setProperty(`--panel-w`,`${e}px`),t&&this.el.style.setProperty(`--panel-h`,`${t}px`)}resizer(){let e=T(`div`,{class:`panel-resizer`,role:`separator`,"aria-label":C(`world.resizePanel`)},T(`span`,{}));return e.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId);let n=matchMedia(`(orientation: portrait), (max-width: 900px)`).matches,r=e=>{if(n){let t=Math.round(Math.min(innerHeight*.75,Math.max(180,innerHeight-e.clientY)));this.el.style.setProperty(`--panel-h`,`${t}px`)}else{let t=Math.round(Math.min(innerWidth*.65,Math.max(300,innerWidth-e.clientX)));this.el.style.setProperty(`--panel-w`,`${t}px`)}},i=()=>{e.removeEventListener(`pointermove`,r),e.removeEventListener(`pointerup`,i),e.removeEventListener(`pointercancel`,i);let t=parseInt(this.el.style.getPropertyValue(`--panel-w`))||null,n=parseInt(this.el.style.getPropertyValue(`--panel-h`))||null;this.app.updateSettings({panelWidth:t,panelHeight:n})};e.addEventListener(`pointermove`,r),e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i)}),e}catchUp(e,t){let n=this.world.clock.simTime;if(s(this.world,e),e.reason===`apply`){let e=this.runtime.advance(n,this.world.clock.simTime,a,120,c);e.skippedSeconds>0&&E(this.world,`sim`,`log.catchUpSkipped`,{skippedMs:e.skippedSeconds*1e3}),e.physicsSkippedSeconds>1&&E(this.world,`sim`,`log.physicsCatchUpLimited`,{skippedMs:e.physicsSkippedSeconds*1e3,limitMs:12e4})}this.reportCatchUp(e,t)}toggleRunning(){let e=this.world.clock;e.running=!e.running,E(this.world,`sim`,e.running?`log.timeStarted`:`log.timePaused`),this.markDirty(),this.save(),this.render()}changeSpeed(e){ue(this.world.clock,e)&&(E(this.world,`sim`,`log.speedChanged`,{speed:Mr(e).slice(1)}),this.markDirty(),this.render())}reportCatchUp(e,t=!1){if(e.awayMs<6e4||t&&e.reason!==`apply`)return;let n={apply:e.capped?`log.awayCapped`:`log.awayApplied`,paused:`log.awayPaused`,disabled:`log.awayDisabled`}[e.reason];if(!n)return;let r=E(this.world,`sim`,n,{awayMs:e.awayMs,appliedMs:e.simSeconds*1e3});this.toast(F(r))}onVisibility=()=>{document.visibilityState===`hidden`?this.save():(this.catchUp(y(this.world,Date.now()),!0),this.markDirty(),this.render())};onPageHide=()=>{this.save()};async runCode(e,t=!1){let n=this.editor?.value??this.world.program.source;if(this.world.program.source=n,e&&!await x(C(`code.resetTitle`),C(`code.resetText`),C(`code.resetConfirm`)))return;let r=e?this.runtime.reset(n):t?this.runtime.debugRun(n):this.runtime.run(n);this.setRunNote(r),this.app.sound.play(r.ok?`success`:`error`),t&&this.openTrace(this.runtime.lastTrace),r.leftovers.length&&await this.askLeftovers(r.leftovers);for(let e of r.removedProps){let t=this.world.types.find(t=>t.id===e.typeId)?.name??`?`;await x(C(`code.removedPropTitle`,{type:t,prop:e.prop}),C(`code.removedPropText`,{count:e.count,prop:e.prop}),C(`code.removedPropDrop`),C(`code.removedPropKeep`))&&this.runtime.dropRemovedProperty(e)}this.markDirty(),this.save(),this.renderPanelForce()}setRunNote(e){if(e.ok)this.runNote={kind:`ok`,text:C(`code.ok`),line:0};else if(e.error){let t=this.world.log[this.world.log.length-1];this.runNote={kind:e.error.kind,text:F({...t,kind:`info`}),line:e.error.line,details:{kind:e.error.kind,key:e.error.key,params:e.error.params,frames:[...e.error.frames]}}}this.updateNote()}async askLeftovers(e){let t=e.slice(0,6).map(e=>{let t=this.world.objects.find(t=>t.id===e);return this.runtime.interp.objName(t)}).join(`, `)+(e.length>6?`, …`:``);await x(C(`code.leftoversTitle`,{count:e.length}),C(`code.leftoversText`,{names:t}),C(`code.leftoversRemove`),C(`code.leftoversKeep`))&&this.runtime.removeObjects(e)}markDirty(){this.dirty=!0,this.setSaveState(`unsaved`)}async save(){this.dirty=!1,this.setSaveState(`saving`);try{let e=performance.now(),t=await this.app.repo.save(this.world);this.perfStats.saveMs=performance.now()-e,this.perfStats.saveKB=t/1024,this.dirty||this.setSaveState(`saved`)}catch{this.dirty=!0,this.setSaveState(`failed`)}}setSaveState(e){this.saveState=e,this.saveEl&&(this.saveEl.textContent=C(`world.${e===`failed`?`saveFailed`:e}`),this.saveEl.className=`save-state ${e}`)}render(){w(this.chrome);let e=this.world.clock,n=T(`div`,{class:`speed-group`,role:`group`,"aria-label":C(`world.speed`)});for(let t of ae)n.append(T(`button`,{type:`button`,class:`chip small${e.speed===t?` active`:``}`,"aria-pressed":e.speed===t,onclick:()=>this.changeSpeed(t)},Mr(t)));this.clockEl=T(`span`,{class:`clock`,"aria-label":C(`world.time`)},Se(e.simTime)),this.saveEl=T(`span`,{class:`save-state`});let r=T(`header`,{class:`topbar`},T(`button`,{type:`button`,class:`btn ghost back`,onclick:()=>this.app.showHome()},`‹ ${C(`world.back`)}`),T(`div`,{class:`world-title`},this.world.meta.name),T(`div`,{class:`time-controls`},T(`button`,{type:`button`,class:`btn play ${e.running?`running`:``}`,"aria-label":C(e.running?`world.pause`:`world.run`),title:C(e.running?`world.pause`:`world.run`),onclick:()=>this.toggleRunning()},e.running?`❚❚`:`▶`),this.clockEl,n),this.saveEl,T(`button`,{type:`button`,class:`btn icon-btn`,"aria-label":C(`world.saveNow`),title:C(`world.saveNow`),onclick:()=>void this.saveNow()},`💾`),T(`button`,{type:`button`,class:`btn icon-btn music-btn${this.app.settings.music?` on`:``}`,"aria-label":C(`world.music`),"aria-pressed":this.app.settings.music,onclick:()=>{this.app.updateSettings({music:!this.app.settings.music}).then(()=>this.render())}},this.app.settings.music?`🎵`:`🔇`),T(`button`,{type:`button`,class:`btn icon-btn`,"aria-label":C(`home.settings`),onclick:()=>this.openSettings()},`⚙`));this.setSaveState(this.saveState);let i=T(`div`,{class:`empty-hint`},T(`strong`,{},C(`world.emptyTitle`)),T(`span`,{},C(`world.emptyHint`)));i.hidden=this.world.objects.some(t),this.emptyEl=i;let a=T(`div`,{class:`view-tools`},T(`button`,{type:`button`,class:`btn tool walk-toggle`,onclick:()=>this.startWalk()},`🚶 ${C(`walk.start`)}`),T(`button`,{type:`button`,class:`btn tool`,onclick:()=>this.view.resetCamera()},`◎ ${C(`world.cameraReset`)}`),T(`button`,{type:`button`,class:`btn tool${this.app.settings.showGrid?` active`:``}`,"aria-pressed":this.app.settings.showGrid,onclick:()=>this.setGrid(!this.app.settings.showGrid)},`▦ ${C(`world.grid`)}`),T(`button`,{type:`button`,class:`btn tool${this.panelOpen?` active`:``}`,"aria-pressed":this.panelOpen,onclick:()=>{this.panelOpen=!this.panelOpen,this.render()}},`▤ ${C(`world.panel`)}`)),o=T(`nav`,{class:`tabs`,role:`tablist`}),s=this.beginner?[`build`,`inspector`,`log`]:[`code`,`inspector`,`log`,`learn`];for(let e of s)o.append(T(`button`,{type:`button`,role:`tab`,"data-tab":e,class:`tab${this.tab===e?` active`:``}`,"aria-selected":this.tab===e,onclick:()=>{this.tab=e,this.render()}},C(e===`build`?`beginner.tab`:`tab.${e}`)));this.panelBody=T(`div`,{class:`panel-body tab-${this.tab}`});let c=T(`aside`,{class:`panel`},this.resizer(),o,this.panelBody);this.el.classList.toggle(`panel-closed`,!this.panelOpen),this.chrome.append(r,i,a,this.panelOpen?c:``),this.renderPanelForce()}renderPanelForce(){this.renderedLogSeq=-1,this.renderPanel()}renderPanel(){let e=this.panelBody;if(e&&this.panelOpen){if(this.tab===`build`&&this.beginner)this.beginner.el.parentElement!==e&&(w(e),e.append(this.beginner.el));else if(this.tab===`code`){let t=this.codePanel();t.parentElement!==e&&(w(e),e.append(t)),this.updateNote()}else if(this.tab===`inspector`){let t=document.activeElement;if(t instanceof HTMLInputElement&&e.contains(t))return;let n=e.scrollTop;w(e),e.append(ht(this.inspectorContext())),e.scrollTop=n,this.inspectorStale=!1}else if(this.tab===`learn`){let t=e.scrollTop;w(e),e.append(Qt({isDone:e=>this.tracker.isDone(e),hintsShown:e=>this.hints.get(e)??0,showHint:e=>{this.hints.set(e,(this.hints.get(e)??0)+1),this.renderPanelForce()},useExample:e=>void this.useExample(e),startTour:()=>this.startTour(),tryCode:e=>this.appendCode(e),openTopic:this.openTopic,setOpenTopic:e=>{this.openTopic=e,this.renderPanelForce()}})),e.scrollTop=t}else{if(this.renderedLogSeq===this.world.logSeq)return;this.renderedLogSeq=this.world.logSeq,w(e),e.append(ft(this.world))}}}codePanel(){if(this.codePanelEl)return this.codePanelEl;this.editor||=new ct(this.editorHost,{value:this.world.program.source,placeholder:C(`code.placeholder`),onChange:e=>{this.world.program.source=e,this.markDirty(),window.clearTimeout(this.codeTimer),this.codeTimer=window.setTimeout(()=>void this.save(),Or)},onRun:()=>void this.runCode(!1),complete:e=>Hn(this.world,[...this.runtime.interp.fns.keys()],e),onCursor:(e,t)=>{window.clearTimeout(this.hintTimer),this.hintTimer=window.setTimeout(()=>this.showHint(e,t),120)}});let e=this.editor,t=this.codeMode===`blocks`;t&&(this.blocks?this.blocks.setSource(e.value):this.blocks=new dt({source:e.value,onChange:t=>e.setValue(t),names:()=>this.worldNames(),errorText:e=>F({key:e.key,params:e.params,kind:`info`})}));let n=(e,t)=>T(`button`,{type:`button`,role:`tab`,class:`chip small${this.codeMode===e?` active`:``}`,"aria-selected":this.codeMode===e,onclick:()=>{this.codeMode!==e&&(this.codeMode=e,this.codePanelEl=null,this.fitPanelForMode(),this.renderPanelForce())}},t),r=T(`div`,{class:`symbol-bar`});for(let[t,n]of Ar){let i=T(`button`,{type:`button`,class:`sym`},t);i.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.insert(n)}),r.append(i)}let i=(e,t,n)=>{let r=T(`button`,{type:`button`,class:`btn tool-icon`,title:t,"aria-label":t},e);return r.addEventListener(`pointerdown`,e=>e.preventDefault()),r.addEventListener(`click`,n),r};return this.noteEl=T(`div`,{class:`run-note`}),this.debugEl=T(`div`,{class:`debugger`}),this.updateNote(),this.updateDebugger(),this.codePanelEl=T(`div`,{class:`code-panel mode-${this.codeMode}`},T(`div`,{class:`code-toolbar`},T(`div`,{class:`mode-switch`,role:`tablist`},n(`text`,`✎ ${C(`code.modeText`)}`),n(`blocks`,`▦ ${C(`code.modeBlocks`)}`)),T(`button`,{type:`button`,class:`btn primary run`,onclick:()=>void this.runCode(!1)},`▶ ${C(`code.run`)}`),T(`button`,{type:`button`,class:`btn small`,onclick:()=>void this.runCode(!1,!0)},`🐞 ${C(`code.debug`)}`),T(`button`,{type:`button`,class:`btn small helper-btn`,onclick:()=>Tn(this.app,e=>this.appendCode(e))},`🤖 ${C(`helper.button`)}`),t?``:i(`↶`,C(`code.undo`),()=>e.undo()),t?``:i(`↷`,C(`code.redo`),()=>e.redo()),t?``:i(`🔍`,C(`code.search`),()=>e.toggleSearch()),T(`button`,{type:`button`,class:`btn ghost small`,onclick:()=>void this.runCode(!0)},`↺ ${C(`code.reset`)}`)),t?this.blocks.el:this.editorHost,t||!this.app.settings.showHints?``:this.hintEl,t?``:r,t?``:T(`p`,{class:`hint small-hint`},C(`code.breakpointHint`)),this.noteEl,this.debugEl),this.codePanelEl}fitPanelForMode(){let e=matchMedia(`(orientation: portrait), (max-width: 900px)`).matches;if(this.codeMode===`blocks`&&!e){let e=this.app.settings.panelWidth??400,t=Math.round(Math.min(innerWidth*.62,700));e<t&&this.el.style.setProperty(`--panel-w`,`${t}px`)}else if(this.codeMode===`blocks`&&e){let e=this.app.settings.panelHeight??innerHeight*.44,t=Math.round(innerHeight*.62);e<t&&this.el.style.setProperty(`--panel-h`,`${t}px`)}else this.el.style.removeProperty(`--panel-w`),this.el.style.removeProperty(`--panel-h`),this.applyPanelSize()}showHint(e,t){let n=An(e,this.world,t);this.hintEl.textContent=n?`💡 ${C(n.key,n.params)}`:``,this.hintEl.classList.toggle(`empty`,!n)}worldNames(){let e=this.world,t=new Set;for(let n of e.types){t.add(n.name);for(let r of pe(e,n.id))t.add(r.name)}for(let n of Object.keys(e.globals))t.add(n);for(let e of this.runtime.interp.fns.keys())t.add(e);for(let e of[`self`,`a`,`b`,`dt`,`physics`,`true`,`false`,`none`])t.add(e);return[...t]}updateNote(){let e=this.noteEl;if(!e)return;w(e);let t=this.runNote;if(e.className=`run-note ${t?t.kind:`none`}`,this.editor?.setMarks(t&&t.kind!==`ok`&&t.line>0?t.line:null,this.debugLine()),!t)return;t.kind!==`ok`&&e.append(T(`strong`,{},C(t.kind===`syntax`?`code.syntaxTitle`:`code.runtimeTitle`))),e.append(T(`span`,{},t.text));let n=T(`div`,{class:`note-actions`});if(t.line>0&&n.append(T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>this.editor?.showLine(t.line)},`${C(`code.showLine`)} ${t.line}`)),t.details&&n.append(T(`button`,{type:`button`,class:`btn small ghost`,onclick:()=>{this.showDetails=!this.showDetails,this.updateNote()}},`${this.showDetails?`▾`:`▸`} ${C(`code.details`)}`)),e.append(n),t.details&&this.showDetails){let n=t.details;e.append(T(`dl`,{class:`details`},T(`dt`,{},C(`code.detailCategory`)),T(`dd`,{},C(n.kind===`syntax`?`code.categorySyntax`:`code.categoryExecution`)),T(`dt`,{},C(`code.detailLine`)),T(`dd`,{},String(t.line||`—`)),T(`dt`,{},C(`code.detailCode`)),T(`dd`,{class:`code`},n.key),n.frames.length?T(`dt`,{},C(`code.detailFrames`)):null,n.frames.length?T(`dd`,{class:`code`},n.frames.map(e=>`${e.name}()  ·  ${C(`code.line`,{line:e.line})}`).join(`  ←  `)):null,Object.keys(n.params).length?T(`dt`,{},C(`code.detailValues`)):null,Object.keys(n.params).length?T(`dd`,{class:`code`},Object.entries(n.params).map(([e,t])=>`${e} = ${t}`).join(`, `)):null))}}debugLine(){return this.trace&&this.trace.steps.length?this.trace.steps[this.traceStep]?.line??null:null}openTrace(e){this.trace=e,this.traceStep=0,this.updateDebugger(),this.updateNote()}moveTrace(e){!this.trace||e<0||e>=this.trace.steps.length||(this.traceStep=e,this.updateDebugger(),this.editor?.setMarks(this.runNote&&this.runNote.kind!==`ok`&&this.runNote.line||null,this.debugLine()))}updateDebugger(){let e=this.debugEl;if(!e)return;w(e);let t=this.trace,n=this.runtime.traceNextRule,r=T(`button`,{type:`button`,class:`btn small${n?` active`:``}`,onclick:()=>{this.runtime.traceNextRule=!this.runtime.traceNextRule,this.updateDebugger()}},n?`⏺ ${C(`debug.waiting`)}`:`⏺ ${C(`debug.recordRule`)}`);if(!t){e.className=`debugger idle`,e.append(r);return}e.className=`debugger`;let i=t.steps.length,a=this.traceStep,o=t.steps[a],s=this.editor?.breakpoints()??new Set,c=(e,t,n,r)=>T(`button`,{type:`button`,class:`btn tool-icon`,title:t,"aria-label":t,disabled:!r,onclick:()=>this.moveTrace(n)},e),l=qn(t.steps,a,s,1),u=qn(t.steps,a,s,-1);if(e.append(T(`div`,{class:`debug-head`},T(`strong`,{},t.kind===`run`?C(`debug.titleRun`):C(`debug.titleRule`,{line:t.line})),T(`button`,{type:`button`,class:`btn icon-btn small-icon`,"aria-label":C(`inspector.close`),onclick:()=>this.openTrace(null)},`✕`)),i===0?T(`p`,{class:`hint`},C(`debug.empty`)):T(`div`,{class:`debug-controls`},c(`⏮`,C(`debug.first`),0,a>0),c(`⏪`,C(`debug.prevBreakpoint`),u,u>=0),c(`◀`,C(`debug.back`),a-1,a>0),T(`span`,{class:`debug-pos`},C(`debug.position`,{step:a+1,total:i,line:o?.line??0})),c(`▶`,C(`debug.forward`),a+1,a<i-1),c(`⏩`,C(`debug.nextBreakpoint`),l,l>=0),c(`⏭`,C(`debug.last`),i-1,a<i-1)),t.truncated?T(`p`,{class:`hint warn`},C(`debug.truncated`,{count:i})):``),o){let n=o.changes.filter(e=>e.target!==`say`);n.length&&e.append(T(`div`,{class:`debug-section`},T(`h4`,{},C(`debug.thisStep`)),...n.map(e=>T(`div`,{class:`debug-row changed code`},`${e.target}: ${e.before} → ${e.after}`))));let r=Object.entries(o.locals);r.length&&e.append(T(`div`,{class:`debug-section`},T(`h4`,{},C(`debug.locals`)),...r.map(([e,t])=>T(`div`,{class:`debug-row code`},`${e} = ${t}`))));let i=Kn(t.steps,a);i.length&&e.append(T(`div`,{class:`debug-section`},T(`h4`,{},C(`debug.world`)),...i.slice(0,40).map(e=>T(`div`,{class:`debug-row code${e.changedHere?` changed`:``}`},`${e.target} = ${e.value}`))));let s=Jn(t.steps,a);s.length&&e.append(T(`div`,{class:`debug-section`},T(`h4`,{},C(`debug.output`)),...s.slice(-8).map(e=>T(`div`,{class:`debug-row`},`💬 ${e}`))))}e.append(r)}setGrid(e){this.app.updateSettings({showGrid:e}),this.view.setHelpersVisible(e),this.render()}openSettings(){this.app.openSettings((e,t)=>{let n=this.world.settings;if(e.append(T(`h3`,{},`${C(`settings.world`)}: ${this.world.meta.name}`)),e.append(Te(C(`settings.keepLiving`),n.keepLivingWhileAway,e=>{n.keepLivingWhileAway=e,E(this.world,`info`,e?`log.awayOn`:`log.awayOff`),this.markDirty(),t()},C(`settings.keepLivingHelp`))),n.keepLivingWhileAway){let r=T(`div`,{class:`choice-row`});for(let e of kr){let i=n.maxCatchUpHours===e;r.append(T(`button`,{type:`button`,class:`chip${i?` active`:``}`,"aria-pressed":i,onclick:()=>{n.maxCatchUpHours=e,this.markDirty(),t()}},be(e*36e5)))}e.append(T(`div`,{class:`sub-label`},C(`settings.maxCatchUp`)),r)}},()=>{this.view.setHelpersVisible(this.app.settings.showGrid),this.save(),this.render()})}toast(e){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`show`),6e3)}};function Mr(e){return e===.25?`×¼`:e===.5?`×½`:`×${e}`}export{jr as WorldScreen};