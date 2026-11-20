var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i=1e3,a=1001,o=1002,s=1003,c=1004,l=1005,u=1006,d=1007,f=1008,p=1009,m=1010,h=1011,g=1012,_=1013,v=1014,y=1015,b=1016,x=1017,S=1018,C=1020,w=35902,T=35899,E=1021,D=1022,O=1023,k=1026,A=1027,j=1028,M=1029,N=1030,P=1031,F=1033,I=33776,ee=33777,L=33778,te=33779,ne=35840,re=35841,ie=35842,ae=35843,R=36196,oe=37492,se=37496,ce=37488,le=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,z=36285,je=36286,Me=2300,Ne=2301,B=2302,Pe=2303,Fe=2400,Ie=2401,Le=2402,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function $e(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function et(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,$e(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*st}function wt(e){return e*ct}function Tt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:$e(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function At(e,t){if(t.constructor===Float32Array)return e;let n=kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function jt(e,t){if(t.constructor===Float32Array)return e;let n=kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var V={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:ut,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:jt,denormalize:At},H=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:$e(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new U,Pt=new Mt,Ft=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new Ft,Lt=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Je(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return $e(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:($e(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new U,Xt=class e extends it{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=a,i=a,o=u,s=f,c=O,l=p,d=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=lt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?$e(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case i:e.x-=Math.floor(e.x);break;case a:e.x=e.x<0?0:1;break;case o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case i:e.y-=Math.floor(e.y);break;case a:e.y=e.y<0?0:1;break;case o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:u,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Xt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new U,an=new nn,on=new U(0,0,0),sn=new U(1,1,1),cn=new U,ln=new U,un=new U,dn=new nn,fn=new Mt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:$e(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new U,_n=new Mt,vn=new nn,yn=new U,bn=new U,xn=new U,Sn=new Mt,Cn=new U(1,0,0),wn=new U(0,1,0),Tn=new U(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new pn,r=new Mt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new Ft}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(et(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):et(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new U(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var W=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new W,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new W,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new W,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new W;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&$e(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:$e(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);$e(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=Nn[e.toLowerCase()];return n===void 0?$e(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(ut(Ln.r*255,0,255))*65536+Math.round(ut(Ln.g*255,0,255))*256+Math.round(ut(Ln.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ze){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=mt(Pn.h,Fn.h,t),r=mt(Pn.s,Fn.s,t),i=mt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new G;G.NAMES=Nn;var Rn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U,Kn=new U,qn=new U,Jn=new U,Yn=new U,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new U,new U,new U,new U,new U,new U,new U,new U],nr=new U,rr=new er,ir=new U,ar=new U,or=new U,sr=new U,cr=new U,lr=new U,ur=new U,dr=new U,fr=new U,pr=new U;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new U,gr=new H,_r=0,vr=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=y,this.version=0,this._normalizationScale=e===void 0?void 0:kt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?jt(e,this.array):Math.round(e*t)}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},K=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},xr=new er,Sr=new U,Cr=new U,wr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Cr)),this.expandByPoint(Sr.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tr=0,Er=new nn,Dr=new An,Or=new U,kr=new er,Ar=new er,jr=new U,Mr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ft().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new K(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&$e(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)et(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(this.boundingBox.min,kr.min),this.boundingBox.expandByPoint(jr),jr.addVectors(this.boundingBox.max,kr.max),this.boundingBox.expandByPoint(jr)):(this.boundingBox.expandByPoint(kr.min),this.boundingBox.expandByPoint(kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)et(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(kr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(kr.min,Ar.min),kr.expandByPoint(jr),jr.addVectors(kr.max,Ar.max),kr.expandByPoint(jr)):(kr.expandByPoint(Ar.min),kr.expandByPoint(Ar.max))}kr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jr.fromBufferAttribute(a,t),o&&(Or.fromBufferAttribute(e,t),jr.add(Or)),r=Math.max(r,n.distanceToSquared(jr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let l=new U,u=new U,d=new U,f=new H,p=new H,m=new H,h=new U,g=new U;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new U,b=new U,x=new U,S=new U;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jr.fromBufferAttribute(e,t),jr.normalize(),e.setXYZ(t,jr.x,jr.y,jr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return $e(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=lt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Pr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Pr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Pr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=lt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Fr=new U,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:kt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ze(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ze(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?jt(e,this.data.array):Math.round(e*t)}},Lr=new U,Rr=new U,zr=new Ft,Br=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Lr.subVectors(n,t).cross(Rr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zr.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vr=0,Hr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?$e(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ur=class extends Hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Gr=new U,Kr=new U,qr=new U,Jr=new H,Yr=new H,Xr=new nn,Zr=new U,Qr=new U,$r=new U,ei=new H,ti=new H,ni=new H,ri=class extends An{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type=`Sprite`,Wr===void 0){Wr=new Mr;let e=new Nr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute(`position`,new Ir(e,3,0,!1)),Wr.setAttribute(`uv`,new Ir(e,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Kr.setFromMatrixScale(this.matrixWorld),Xr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-qr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ii(Zr.set(-.5,-.5,0),qr,a,Kr,r,i),ii(Qr.set(.5,-.5,0),qr,a,Kr,r,i),ii($r.set(.5,.5,0),qr,a,Kr,r,i),ei.set(0,0),ti.set(1,0),ni.set(1,1);let o=e.ray.intersectTriangle(Zr,Qr,$r,!1,Gr);if(o===null&&(ii(Qr.set(-.5,.5,0),qr,a,Kr,r,i),ti.set(0,1),o=e.ray.intersectTriangle(Zr,$r,Qr,!1,Gr),o===null))return;let s=e.ray.origin.distanceTo(Gr);s<e.near||s>e.far||t.push({distance:s,point:Gr.clone(),uv:$n.getInterpolation(Gr,Zr,Qr,$r,ei,ti,ni,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ii(e,t,n,r,i,a){Jr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Yr.copy(Jr):(Yr.x=a*Jr.x-i*Jr.y,Yr.y=i*Jr.x+a*Jr.y),e.copy(t),e.x+=Yr.x,e.y+=Yr.y,e.applyMatrix4(Xr)}var ai=new U,oi=new U,si=new U,ci=new U,li=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oi.copy(e).add(t).multiplyScalar(.5),si.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(oi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(si),o=ci.dot(this.direction),s=-ci.dot(si),c=ci.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oi).addScaledVector(si,d),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,L=E-F*D,te=O-P*A,ne=k-F*A,re=j-P*N,ie=M-F*N,ae=re*ne-ie*te,R=ee*ie-L*re,oe=te*L-ne*ee;if(r){if(ae<0||R<0||oe<0)return null}else if((ae<0||R<0||oe<0)&&(ae>0||R>0||oe>0))return null;let se=ae+R+oe;if(se===0)return null;let ce=I*(ae*D+R*A+oe*N);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},q=class extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ui=new nn,di=new li,fi=new wr,pi=new U,mi=new U,hi=new U,gi=new U,_i=new U,vi=new U,yi=new U,bi=new U,J=class extends An{constructor(e=new Mr,t=new q){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){vi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(_i.fromBufferAttribute(s,e),a?vi.addScaledVector(_i,r):vi.addScaledVector(_i.sub(t),r))}t.add(vi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fi.copy(n.boundingSphere),fi.applyMatrix4(i),di.copy(e.ray).recast(e.near),fi.containsPoint(di.origin)===!1&&(di.intersectSphere(fi,pi)===null||di.origin.distanceToSquared(pi)>(e.far-e.near)**2)||(ui.copy(i).invert(),di.copy(e.ray).applyMatrix4(ui),(n.boundingBox===null||di.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Si(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Si(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Si(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Si(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;bi.copy(s),bi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(bi);return l<n.near||l>n.far?null:{distance:l,point:bi.clone(),object:e}}function Si(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,mi),e.getVertexPosition(c,hi),e.getVertexPosition(l,gi);let u=xi(e,t,n,r,mi,hi,gi,yi);if(u){let e=new U;$n.getBarycoord(yi,mi,hi,gi,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};$n.getNormal(mi,hi,gi,t.normal),u.face=t,u.barycoord=e}return u}var Ci=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,o,c,l=s,u=s,d,f){super(null,a,o,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wi=new wr,Ti=new H(.5,.5),Ei=new U,Di=class{constructor(e=new Br,t=new Br,n=new Br,r=new Br,i=new Br,a=new Br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476+Ti.distanceTo(e.center),wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ei.x=r.normal.x>0?e.max.x:e.min.x,Ei.y=r.normal.y>0?e.max.y:e.min.y,Ei.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ei)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oi=new nn,ki=class e{constructor(){this.coordinateSystem=Ge,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Oi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Di),n[e].setFromProjectionMatrix(Oi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Di),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ai=class extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ji=new U,Mi=new U,Ni=new nn,Pi=new li,Fi=new wr,Ii=new U,Li=new U,Ri=class extends An{constructor(e=new Mr,t=new Ai){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ji.fromBufferAttribute(t,e-1),Mi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ji.distanceTo(Mi);e.setAttribute(`lineDistance`,new K(n,1))}else $e(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),Fi.radius+=i,e.ray.intersectsSphere(Fi)===!1)return;Ni.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Ni);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=zi(this,e,Pi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=zi(this,e,Pi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=zi(this,e,Pi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=zi(this,e,Pi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function zi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ji.fromBufferAttribute(s,i),Mi.fromBufferAttribute(s,a),n.distanceSqToSegment(ji,Mi,Ii,Li)>r)return;Ii.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ii);if(!(c<t.near||c>t.far))return{distance:c,point:Li.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Bi=new U,Vi=new U,Hi=class extends Ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Bi.fromBufferAttribute(t,e),Vi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Bi.distanceTo(Vi);e.setAttribute(`lineDistance`,new K(n,1))}else $e(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ui=class extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wi=new nn,Gi=new li,Ki=new wr,qi=new U,Ji=class extends An{constructor(e=new Mr,t=new Ui){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=i,e.ray.intersectsSphere(Ki)===!1)return;Wi.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);qi.fromBufferAttribute(l,n),Yi(qi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)qi.fromBufferAttribute(l,a),Yi(qi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Yi(e,t,n,r,i,a,o){let s=Gi.distanceSqToPoint(e);if(s<n){let n=new U;Gi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Xi=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zi=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qi=class extends Xt{constructor(e,t,n=v,r,i,a,o=s,c=s,l,u=k,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$i=class extends Qi{constructor(e,t=v,n=301,r,i,a=s,o=s,c,l=k){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Y=class e extends Mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ta=class e extends Mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`normal`,new K(o,3)),this.setAttribute(`uv`,new K(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},X=class e extends Mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class e extends X{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class e extends Mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new K(i,3)),this.setAttribute(`normal`,new K(i.slice(),3)),this.setAttribute(`uv`,new K(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ia=class e extends ra{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},aa=new U,oa=new U,sa=new U,ca=new $n,la=class extends Mr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(st*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ca;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ca.getNormal(sa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ca[c[e]],o=ca[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(sa.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:sa.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;aa.fromBufferAttribute(a,t),oa.fromBufferAttribute(a,n),d.push(aa.x,aa.y,aa.z),d.push(oa.x,oa.y,oa.z)}this.setAttribute(`position`,new K(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ua=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new nn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ut(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ut(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},da=class extends ua{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends da{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ma=new U,ha=new U,ga=new pa,_a=new pa,va=new pa,ya=class extends ua{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ha.subVectors(r[0],r[1]).add(r[0]),c=ha);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ma.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ma),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ga.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_a.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),va.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ga.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_a.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),va.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ga.calc(s),_a.calc(s),va.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ba(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xa(e,t){let n=1-e;return n*n*t}function Sa(e,t){return 2*(1-e)*e*t}function Ca(e,t){return e*e*t}function wa(e,t,n,r){return xa(e,t)+Sa(e,n)+Ca(e,r)}function Ta(e,t){let n=1-e;return n*n*n*t}function Ea(e,t){let n=1-e;return 3*n*n*e*t}function Da(e,t){return 3*(1-e)*e*e*t}function Oa(e,t){return e*e*e*t}function ka(e,t,n,r,i){return Ta(e,t)+Ea(e,n)+Da(e,r)+Oa(e,i)}var Aa=class extends ua{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends ua{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y),ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends ua{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ua{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends ua{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ua{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y),wa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends ua{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ba(o,s.x,c.x,l.x,u.x),ba(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},La=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:ya,CubicBezierCurve:Aa,CubicBezierCurve3:ja,EllipseCurve:da,LineCurve:Ma,LineCurve3:Na,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Fa,SplineCurve:Ia}),Ra=class extends ua{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new La[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},za=class extends Ra{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pa(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Aa(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ia([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new da(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ba=class extends za{constructor(e){super(e),this.uuid=lt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new za().fromJSON(n))}return this}};function Va(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ya(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wa(a,o,n,s,c,l,0),o}function Ha(e,t,n,r,i){let a;if(i===bo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=_o(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=_o(i/r|0,e[i],e[i+1],a);return a&&co(a,a.next)&&(vo(a),a=a.next),a}function Ua(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(co(n,n.next)||so(n.prev,n,n.next)===0)){if(vo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&eo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ka(e,r,i,a):Ga(e))t.push(c.i,e.i,l.i),vo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=qa(Ua(e),t),Wa(e,t,n,r,i,a,2)):o===2&&Ja(e,t,n,r,i,a):Wa(Ua(e),t,n,r,i,a,1);break}}}function Ga(e){let t=e.prev,n=e,r=e.next;if(so(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ao(i,s,a,c,o,l,m.x,m.y)&&so(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ka(e,t,n,r){let i=e.prev,a=e,o=e.next;if(so(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=no(p,m,t,n,r),v=no(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!co(r,i)&&lo(r,n,n.next,i)&&mo(r,i)&&mo(i,r)&&(t.push(r.i,n.i,i.i),vo(n),vo(n.next),n=e=i),n=n.next}while(n!==e);return Ua(n)}function Ja(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&oo(o,e)){let s=go(o,e);o=Ua(o,o.next),s=Ua(s,s.next),Wa(o,t,n,r,i,a,0),Wa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ya(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ro(o))}i.sort(Xa);for(let e=0;e<i.length;e++)n=Za(i[e],n);return n}function Xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Za(e,t){let n=Qa(e,t);if(!n)return t;let r=go(n,e);return Ua(r,r.next),Ua(n,n.next)}function Qa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(co(e,n))return n;do{if(co(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&io(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);mo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$a(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $a(e,t){return so(e.prev,e,t.prev)<0&&so(t.next,e,e.next)<0}function eo(e,t,n,r){let i=e;do i.z===0&&(i.z=no(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,to(i)}function to(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function no(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ro(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function io(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ao(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&io(e,t,n,r,i,a,o,s)}function oo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!po(e,t)&&(mo(e,t)&&mo(t,e)&&ho(e,t)&&(so(e.prev,e,t.prev)||so(e,t.prev,t))||co(e,t)&&so(e.prev,e,e.next)>0&&so(t.prev,t,t.next)>0)}function so(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function co(e,t){return e.x===t.x&&e.y===t.y}function lo(e,t,n,r){let i=fo(so(e,t,n)),a=fo(so(e,t,r)),o=fo(so(n,r,e)),s=fo(so(n,r,t));return!!(i!==a&&o!==s||i===0&&uo(e,n,t)||a===0&&uo(e,r,t)||o===0&&uo(n,e,r)||s===0&&uo(n,t,r))}function uo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fo(e){return e>0?1:e<0?-1:0}function po(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&lo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mo(e,t){return so(e.prev,e,e.next)<0?so(e,t,e.next)>=0&&so(e,e.prev,t)>=0:so(e,t,e.prev)<0||so(e,e.next,t)<0}function ho(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function go(e,t){let n=yo(e.i,e.x,e.y),r=yo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _o(e,t,n,r){let i=yo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xo=class{static triangulate(e,t,n=2){return Va(e,t,n)}},So=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Co(e),wo(n,e);let a=e.length;t.forEach(Co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,wo(n,t[e]);let o=xo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var To=class e extends Mr{constructor(e=new Ba([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new K(r,3)),this.setAttribute(`uv`,new K(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Eo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!So.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];So.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||et(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=So.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);re(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);re(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=So.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),re(x.x,x.y,x.z)):re(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),re(x.x,x.y,x.z)):re(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);re(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?re(i.x,i.y+g[s-1].y,g[s-1].x+n):re(i.x,i.y,c+n)}}}L(),te();function L(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ie(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ie(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function te(){let e=r.length/3,t=0;ne(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function re(e,t,n){a.push(e),a.push(t),a.push(n)}function ie(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);oe(o[0]),oe(o[1]),oe(o[2])}function ae(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);oe(s[0]),oe(s[1]),oe(s[3]),oe(s[1]),oe(s[2]),oe(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function oe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Do(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new La[i.type]().fromJSON(i)),new e(r,t.options)}},Eo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function Do(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Oo=class e extends ra{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ko=class e extends Mr{constructor(e=[new H(0,-.5),new H(.5,0),new H(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ut(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new U,d=new H,f=new U,p=new U,m=new U,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`uv`,new K(o,2)),this.setAttribute(`normal`,new K(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ao=class e extends ra{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Z=class e extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},jo=class e extends Mr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mo=class e extends Mr{constructor(e=new Ba([new H(0,.5),new H(-.5,-.5),new H(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new K(r,3)),this.setAttribute(`normal`,new K(i,3)),this.setAttribute(`uv`,new K(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;So.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];So.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=So.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return No(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function No(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Po=class e extends Mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fo=class e extends Mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Io=class e extends Mr{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new U,d=new U,f=new U,p=new U,m=new U,h=new U,g=new U;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};function Lo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(zo(i))i.isRenderTargetTexture?($e(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(zo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ro(e){let t={};for(let n=0;n<e.length;n++){let r=Lo(e[n]);for(let e in r)t[e]=r[e]}return t}function zo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Bo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Vo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Ho={clone:Lo,merge:Ro},Uo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Go=class extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uo,this.fragmentShader=Wo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=Bo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ft().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ko=class extends Go{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Q=class extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qo=class extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jo=class extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yo=class extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Zo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Qo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},$o=class extends Qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},es=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ts=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ns=class extends Qo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=as(n,t,g,y,r);i[p]=rs(x,o,_,b,m)}return i}};function rs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function is(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function as(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=rs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=is(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var os=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Zo(e.settings)&&(n.settings={inTangents:Xo(e.settings.inTangents,Array),outTangents:Xo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ns(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case B:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return $e(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return B;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Zo(this.settings)&&(ss(this.settings.inTangents,e),ss(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Zo(this.settings)&&(cs(this.settings.inTangents,e),cs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(et(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){et(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){et(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){et(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===B,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Zo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ss(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function cs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}os.prototype.ValueTypeName=``,os.prototype.TimeBufferType=Float32Array,os.prototype.ValueBufferType=Float32Array,os.prototype.DefaultInterpolation=Ne;var ls=class extends os{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName=`bool`,ls.prototype.ValueBufferType=Array,ls.prototype.DefaultInterpolation=Me,ls.prototype.InterpolantFactoryMethodLinear=void 0,ls.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends os{constructor(e,t,n,r){super(e,t,n,r)}};us.prototype.ValueTypeName=`color`;var ds=class extends os{constructor(e,t,n,r){super(e,t,n,r)}};ds.prototype.ValueTypeName=`number`;var fs=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ps=class extends os{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new fs(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName=`quaternion`,ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends os{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName=`string`,ms.prototype.ValueBufferType=Array,ms.prototype.DefaultInterpolation=Me,ms.prototype.InterpolantFactoryMethodLinear=void 0,ms.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends os{constructor(e,t,n,r){super(e,t,n,r)}};hs.prototype.ValueTypeName=`vector`;var gs=class extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vs=new nn,ys=new U,bs=new U,xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=p,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ys.setFromMatrixPosition(e.matrixWorld),t.position.copy(ys),bs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ss=new U,Cs=new Mt,ws=new U,Ts=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ss,Cs,ws),ws.x===1&&ws.y===1&&ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ss,Cs,ws.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ss,Cs,ws),ws.x===1&&ws.y===1&&ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ss,Cs,ws.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new U,Ds=new H,Os=new H,ks=class extends Ts{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,Ds,Os),t.subVectors(Os,Ds)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=class extends xs{constructor(){super(new ks(90,1,.5,500)),this.isPointLightShadow=!0}},js=class extends gs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new As}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ms=class extends Ts{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=class extends xs{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Ns}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fs=class extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Is=-90,Ls=1,Rs=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ks(Is,Ls,e,t);r.layers=this.layers,this.add(r);let i=new ks(Is,Ls,e,t);i.layers=this.layers,this.add(i);let a=new ks(Is,Ls,e,t);a.layers=this.layers,this.add(a);let o=new ks(Is,Ls,e,t);o.layers=this.layers,this.add(o);let s=new ks(Is,Ls,e,t);s.layers=this.layers,this.add(s);let c=new ks(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},zs=class extends ks{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Bs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vs(){this._document.hidden===!1&&this.reset()}var Hs=`\\[\\]\\.:\\/`,Us=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ws=`[^\\[\\]\\.:\\/]`,Gs=`[^`+Hs.replace(`\\.`,``)+`]`,Ks=`((?:WC+[\\/:])*)`.replace(`WC`,Ws),qs=`(WCOD+)?`.replace(`WCOD`,Gs),Js=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ws),Ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ws),Xs=RegExp(`^`+Ks+qs+Js+Ys+`$`),Zs=[`material`,`materials`,`bones`,`map`],Qs=class{constructor(e,t,n){let r=n||$s.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$s=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Us,``)}static parseTrackName(e){let t=Xs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Zs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$e(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){et(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){et(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){et(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){et(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){et(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){et(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){et(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;et(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){et(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){et(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$s.Composite=Qs,$s.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$s.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$s.prototype.GetterByBindingType=[$s.prototype._getValue_direct,$s.prototype._getValue_array,$s.prototype._getValue_arrayElement,$s.prototype._getValue_toArray],$s.prototype.SetterByBindingTypeAndVersioning=[[$s.prototype._setValue_direct,$s.prototype._setValue_direct_setNeedsUpdate,$s.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_array,$s.prototype._setValue_array_setNeedsUpdate,$s.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_arrayElement,$s.prototype._setValue_arrayElement_setNeedsUpdate,$s.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_fromArray,$s.prototype._setValue_fromArray_setNeedsUpdate,$s.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ec=new nn,tc=class{constructor(e,t,n=0,r=1/0){this.ray=new li(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ec.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ec),this}intersectObject(e,t=!0,n=[]){return rc(e,this,n,t),n.sort(nc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)rc(e[r],this,n,t);return n.sort(nc),n}};function nc(e,t){return e.distance-t.distance}function rc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)rc(r[e],t,n,!0)}}var ic=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ac=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=ut(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var oc=class extends it{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sc(e,t,n,r){let i=cc(r);switch(n){case E:return e*t;case j:return e*t/i.components*i.byteLength;case M:return e*t/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case P:return e*t*2/i.components*i.byteLength;case D:return e*t*3/i.components*i.byteLength;case O:return e*t*4/i.components*i.byteLength;case F:return e*t*4/i.components*i.byteLength;case I:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case ne:case ie:return Math.max(e,8)*Math.max(t,8)/2;case R:case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case z:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function cc(e){switch(e){case p:case m:return{byteLength:1,components:1};case g:case h:case b:return{byteLength:2,components:1};case x:case S:return{byteLength:2,components:4};case v:case _:case y:return{byteLength:4,components:1};case w:case T:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?$e(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function lc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function uc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var dc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},fc={basic:{uniforms:Ro([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:dc.meshbasic_vert,fragmentShader:dc.meshbasic_frag},lambert:{uniforms:Ro([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:dc.meshlambert_vert,fragmentShader:dc.meshlambert_frag},phong:{uniforms:Ro([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dc.meshphong_vert,fragmentShader:dc.meshphong_frag},standard:{uniforms:Ro([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dc.meshphysical_vert,fragmentShader:dc.meshphysical_frag},toon:{uniforms:Ro([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new G(0)}}]),vertexShader:dc.meshtoon_vert,fragmentShader:dc.meshtoon_frag},matcap:{uniforms:Ro([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:dc.meshmatcap_vert,fragmentShader:dc.meshmatcap_frag},points:{uniforms:Ro([$.points,$.fog]),vertexShader:dc.points_vert,fragmentShader:dc.points_frag},dashed:{uniforms:Ro([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dc.linedashed_vert,fragmentShader:dc.linedashed_frag},depth:{uniforms:Ro([$.common,$.displacementmap]),vertexShader:dc.depth_vert,fragmentShader:dc.depth_frag},normal:{uniforms:Ro([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:dc.meshnormal_vert,fragmentShader:dc.meshnormal_frag},sprite:{uniforms:Ro([$.sprite,$.fog]),vertexShader:dc.sprite_vert,fragmentShader:dc.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dc.background_vert,fragmentShader:dc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:dc.backgroundCube_vert,fragmentShader:dc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dc.cube_vert,fragmentShader:dc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dc.equirect_vert,fragmentShader:dc.equirect_frag},distance:{uniforms:Ro([$.common,$.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dc.distance_vert,fragmentShader:dc.distance_frag},shadow:{uniforms:Ro([$.lights,$.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:dc.shadow_vert,fragmentShader:dc.shadow_frag}};fc.physical={uniforms:Ro([fc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:dc.meshphysical_vert,fragmentShader:dc.meshphysical_frag};var pc={r:0,b:0,g:0},mc=new nn,hc=new Ft;hc.set(-1,0,0,0,1,0,0,0,1);function gc(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new J(new Y(1,1,1),new Go({name:`BackgroundCubeMaterial`,uniforms:Lo(fc.backgroundCube.uniforms),vertexShader:fc.backgroundCube.vertexShader,fragmentShader:fc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hc),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Z(2,2),new Go({name:`BackgroundMaterial`,uniforms:Lo(fc.background.uniforms),vertexShader:fc.background.vertexShader,fragmentShader:fc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(pc,Vo(e)),n.buffers.color.setClear(pc.r,pc.g,pc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function _c(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function vc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function yc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&($e(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&$e(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&$e(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function bc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Br,s=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var xc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Y(5,5,5),i=new Go({name:`CubemapFromEquirect`,uniforms:Lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=u),new Rs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Sc=256,Cc=3,wc=20,Tc=256,Ec=16,Dc=3,Oc=new U,kc=new G,Ac=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rs(1,10,null),this._boxMesh=new J(new Y(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Oc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(kc));let h=new Rs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sc,Dt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Sc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=jc(e,!1,!1),n=Math.log2(e)-Cc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ic()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Nc(),this._integrationMaterial=Pc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ec);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Dc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Tc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function jc(e,t,n){return new xc(e,{minFilter:f,generateMipmaps:t,type:b,colorSpace:Be,depthBuffer:n})}function Mc(e,t,n){return new Go({name:e,uniforms:t,vertexShader:dc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Nc(){return Mc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pc(){return Mc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ec}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fc(){return Mc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ic(){return Mc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Lc(){return Mc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new xc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ac(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ac(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function zc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Bc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?br:yr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Vc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Hc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:et(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Uc(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Wc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Gc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Kc(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Mr;u.setAttribute(`position`,new K([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new K([0,2,0,0,2,0],2));let d=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new J(u,d),p=new Ms(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,x=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new $t(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Qi(t,n),a===!0&&(l.format=A,l.type=C)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Bt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Gc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var qc=new Xt,Jc=new Qi(1,1),Yc=new $i(1),Xc=new en,Zc=new tn,Qc=new Xi,$c=[],el=[],tl=new Float32Array(16),nl=new Float32Array(9),rl=new Float32Array(4);function il(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$c[i];if(a===void 0&&(a=new Float32Array(i),$c[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function al(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ol(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function sl(e,t){let n=el[t];n===void 0&&(n=new Int32Array(t),el[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(al(n,t))return;e.uniform2fv(this.addr,t),ol(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(al(n,t))return;e.uniform3fv(this.addr,t),ol(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(al(n,t))return;e.uniform4fv(this.addr,t),ol(n,t)}}function fl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(al(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ol(n,t)}else{if(al(n,r))return;rl.set(r),e.uniformMatrix2fv(this.addr,!1,rl),ol(n,r)}}function pl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(al(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ol(n,t)}else{if(al(n,r))return;nl.set(r),e.uniformMatrix3fv(this.addr,!1,nl),ol(n,r)}}function ml(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(al(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ol(n,t)}else{if(al(n,r))return;tl.set(r),e.uniformMatrix4fv(this.addr,!1,tl),ol(n,r)}}function hl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(al(n,t))return;e.uniform2iv(this.addr,t),ol(n,t)}}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(al(n,t))return;e.uniform3iv(this.addr,t),ol(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(al(n,t))return;e.uniform4iv(this.addr,t),ol(n,t)}}function yl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(al(n,t))return;e.uniform2uiv(this.addr,t),ol(n,t)}}function xl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(al(n,t))return;e.uniform3uiv(this.addr,t),ol(n,t)}}function Sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(al(n,t))return;e.uniform4uiv(this.addr,t),ol(n,t)}}function Cl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function wl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Cl(Jc):qc,n.setTexture2D(t||a,i)}function Tl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zc,i)}function El(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Cl(Yc):Qc,n.setTextureCube(t||a,i)}function Dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xc,i)}function Ol(e){switch(e){case 5126:return cl;case 35664:return ll;case 35665:return ul;case 35666:return dl;case 35674:return fl;case 35675:return pl;case 35676:return ml;case 5124:case 35670:return hl;case 35667:case 35671:return gl;case 35668:case 35672:return _l;case 35669:case 35673:return vl;case 5125:return yl;case 36294:return bl;case 36295:return xl;case 36296:return Sl;case 35678:case 36198:case 36298:case 36306:case 35682:return wl;case 35679:case 36299:case 36307:return Tl;case 35680:case 36300:case 36308:case 36293:return El;case 36289:case 36303:case 36311:case 36292:return Dl}}function kl(e,t){e.uniform1fv(this.addr,t)}function Al(e,t){let n=il(t,this.size,2);e.uniform2fv(this.addr,n)}function jl(e,t){let n=il(t,this.size,3);e.uniform3fv(this.addr,n)}function Ml(e,t){let n=il(t,this.size,4);e.uniform4fv(this.addr,n)}function Nl(e,t){let n=il(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Pl(e,t){let n=il(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fl(e,t){let n=il(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Il(e,t){e.uniform1iv(this.addr,t)}function Ll(e,t){e.uniform2iv(this.addr,t)}function Rl(e,t){e.uniform3iv(this.addr,t)}function zl(e,t){e.uniform4iv(this.addr,t)}function Bl(e,t){e.uniform1uiv(this.addr,t)}function Vl(e,t){e.uniform2uiv(this.addr,t)}function Hl(e,t){e.uniform3uiv(this.addr,t)}function Ul(e,t){e.uniform4uiv(this.addr,t)}function Wl(e,t,n){let r=this.cache,i=t.length,a=sl(n,i);al(r,a)||(e.uniform1iv(this.addr,a),ol(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Cl(Jc):qc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gl(e,t,n){let r=this.cache,i=t.length,a=sl(n,i);al(r,a)||(e.uniform1iv(this.addr,a),ol(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zc,a[e])}function Kl(e,t,n){let r=this.cache,i=t.length,a=sl(n,i);al(r,a)||(e.uniform1iv(this.addr,a),ol(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Cl(Yc):Qc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ql(e,t,n){let r=this.cache,i=t.length,a=sl(n,i);al(r,a)||(e.uniform1iv(this.addr,a),ol(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xc,a[e])}function Jl(e){switch(e){case 5126:return kl;case 35664:return Al;case 35665:return jl;case 35666:return Ml;case 35674:return Nl;case 35675:return Pl;case 35676:return Fl;case 5124:case 35670:return Il;case 35667:case 35671:return Ll;case 35668:case 35672:return Rl;case 35669:case 35673:return zl;case 5125:return Bl;case 36294:return Vl;case 36295:return Hl;case 36296:return Ul;case 35678:case 36198:case 36298:case 36306:case 35682:return Wl;case 35679:case 36299:case 36307:return Gl;case 35680:case 36300:case 36308:case 36293:return Kl;case 36289:case 36303:case 36311:case 36292:return ql}}var Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ol(t.type)}},Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jl(t.type)}},Zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function $l(e,t){e.seq.push(t),e.map[t.id]=t}function eu(e,t,n){let r=e.name,i=r.length;for(Ql.lastIndex=0;;){let a=Ql.exec(r),o=Ql.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$l(n,l===void 0?new Yl(s,e,t):new Xl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Zl(s),$l(n,e)),n=e}}}var tu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);eu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function nu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ru=37297,iu=0;function au(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ou=new Ft;function su(e){Bt._getMatrix(ou,Bt.workingColorSpace,e);let t=`mat3( ${ou.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return $e(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function cu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+au(e.getShaderSource(t),r)}return i}function lu(e,t){let n=su(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var uu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function du(e,t){let n=uu[t];return n===void 0?($e(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fu=new U;function pu(){return Bt.getLuminanceCoefficients(fu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fu.x.toFixed(4)}, ${fu.y.toFixed(4)}, ${fu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function mu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_u).join(`
`)}function hu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _u(e){return e!==``}function vu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bu=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(e){return e.replace(bu,Su)}function Su(e,t){let n=dc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return xu(n)}var Cu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(e){return e.replace(Cu,Tu)}function Tu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Eu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Du={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ou(e){return Du[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ku={302:`ENVMAP_MODE_REFRACTION`};function Au(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ku[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ju={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Mu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ju[e.combine]||`ENVMAP_BLENDING_NONE`}function Nu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ou(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Au(n),d=Mu(n),f=mu(n),p=hu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(_u).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(_u).join(`
`),g.length>0&&(g+=`
`)):(h=[Eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_u).join(`
`),g=[Eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:dc.tonemapping_pars_fragment,n.toneMapping===0?``:du(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,dc.colorspace_pars_fragment,lu(`linearToOutputTexel`,n.outputColorSpace),pu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_u).join(`
`)),o=xu(o),o=vu(o,n),o=yu(o,n),s=xu(s),s=vu(s,n),s=yu(s,n),o=wu(o),s=wu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=nu(i,i.VERTEX_SHADER,v),x=nu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=cu(i,b,`vertex`),n=cu(i,x,`fragment`);et(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):$e(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new tu(i,m),w=gu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,ru)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Pu=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=Pu++,this.code=e,this.usedTimes=0}};function Lu(e){return e===1030||e===37490||e===36285}function Ru(e,t,n,r,i,a){let o=new mn,s=new Fu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&$e(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=fc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,ee=I&&b.isPMREMTexture===!0,L=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,ie=!!i.displacementMap,ae=!!i.emissiveMap,R=!!i.metalnessMap,oe=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.diffuseRoughness>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=se&&!!i.anisotropyMap,ge=ce&&!!i.clearcoatMap,_e=ce&&!!i.clearcoatNormalMap,ve=ce&&!!i.clearcoatRoughnessMap,ye=le&&!!i.diffuseRoughnessMap,be=fe&&!!i.iridescenceMap,xe=fe&&!!i.iridescenceThicknessMap,Se=pe&&!!i.sheenColorMap,Ce=pe&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=me&&!!i.transmissionMap,Oe=me&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let B=ee?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:ee,envMapMaxLod:ee?B.length-1:null,envMapSize:ee?B[0].width:null,aoMap:L,lightMap:te,bumpMap:ne,normalMap:re,displacementMap:ie,emissiveMap:ae,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&Lu(i.normalMap.format),metalnessMap:R,roughnessMap:oe,anisotropy:se,anisotropyMap:he,clearcoat:ce,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,diffuseRoughness:le,diffuseRoughnessMap:ye,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:pe,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:me,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:L&&p(i.aoMap.channel),lightMapUv:te&&p(i.lightMap.channel),bumpMapUv:ne&&p(i.bumpMap.channel),normalMapUv:re&&p(i.normalMap.channel),displacementMapUv:ie&&p(i.displacementMap.channel),emissiveMapUv:ae&&p(i.emissiveMap.channel),metalnessMapUv:R&&p(i.metalnessMap.channel),roughnessMapUv:oe&&p(i.roughnessMap.channel),anisotropyMapUv:he&&p(i.anisotropyMap.channel),clearcoatMapUv:ge&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:we&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:Ee&&p(i.specularIntensityMap.channel),transmissionMapUv:De&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(re||se),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=fc[t];n=Ho.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Nu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function zu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bu),r.length>1&&r.sort(t||Vu),i.length>1&&i.sort(t||Vu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hu,e.set(t,[i])):n>=r.length?(i=new Hu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Gu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ku=0;function qu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ju(e){let t=new Wu,n=Gu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(qu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ku++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Yu(e){let t=new Ju(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Xu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yu(e),t.set(n,[a])):r>=i.length?(a=new Yu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$u=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ed=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],td=new nn,nd=new U,rd=new U;function id(e,t,n){let r=new Di,i=new H,a=new H,o=new Zt,c=new Jo,l=new Yo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Go({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Zu,fragmentShader:Qu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Mr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new J(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&($e(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,d=t.length;l<d;l++){let d=t[l],p=d.shadow;if(p===void 0){$e(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){$e(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:N,type:b,minFilter:u,magFilter:u,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Qi(i.x,i.y,y),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=k,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s}else d.isPointLight?(p.map=new xc(i.x),p.map.depthTexture=new $i(i.x,v)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new Qi(i.x,i.y,v)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=k,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=u,p.map.depthTexture.magFilter=u):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);let S=p.camera.layers.mask&4294967294?p.camera.layers:c.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nd.setFromMatrixPosition(d.matrixWorld),e.position.copy(nd),rd.copy(e.position),rd.add($u[t]),e.up.copy(ed[t]),e.lookAt(rd),e.updateMatrixWorld(),n.makeTranslation(-nd.x,-nd.y,-nd.z),td.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(td,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}r=p.getFrustum(t),T(n,c,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(l,d,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:N,type:b}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ad(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new Zt().fromArray(L),re=new Zt().fromArray(te);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),R(e.CULL_FACE),fe(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(oe(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:et(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:et(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:et(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:et(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?oe(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?oe(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):oe(e.POLYGON_OFFSET_FILL)}function ve(t){t?R(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function be(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function xe(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){et(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){et(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){et(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){et(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){et(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){et(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){et(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){et(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){et(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){et(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function B(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:B,reset:Ie}}function od(e,t,n,r,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Je(`canvas`)}function D(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),$e(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&$e(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];$e(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||$e(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ve:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function N(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,$e(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function P(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ee(e){te(e.target)}function L(e){ne(e.target)}function te(e){e.removeEventListener(`dispose`,ee),I(e),ie(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ne(e){e.removeEventListener(`dispose`,L),I(e),R(e)}function re(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ne(t):te(t))}C.clear(),b.clear()}function ie(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ae(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ae(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function R(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&te(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(a[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&$e(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,i){let a=r.get(t);if(t.isVideoTexture&&Pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)$e(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)$e(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ce(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function me(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ce(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function he(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?we(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ge={[i]:e.REPEAT,[a]:e.CLAMP_TO_EDGE,[o]:e.MIRRORED_REPEAT},_e={[s]:e.NEAREST,[c]:e.NEAREST_MIPMAP_NEAREST,[l]:e.NEAREST_MIPMAP_LINEAR,[u]:e.LINEAR,[d]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},ve={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ye(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&$e(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ge[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ge[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ge[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,_e[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,_e[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ve[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,p.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee),F(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ae(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=xe(n.start,r.width,4),c=xe(t.start,r.width,4);n.start<=i+1&&a===c&&xe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ce(t,i,a){let o=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(o=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(o=e.TEXTURE_3D);let s=be(t,i),c=i.source;n.bindTexture(o,t.__webglTexture,e.TEXTURE0+a);let l=r.get(c);if(c.version!==l.__version||s===!0){if(n.activeTexture(e.TEXTURE0+a),!(typeof ImageBitmap<`u`&&i.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=i.colorSpace===``?null:Bt.getPrimaries(i.colorSpace),a=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);let t=D(i.image,!1,p.maxTextureSize);t=Fe(i,t);let r=m.convert(i.format,i.colorSpace),u=m.convert(i.type),d=M(i.internalFormat,r,u,i.normalized,i.colorSpace,i.isVideoTexture);ye(o,i);let f,h=i.mipmaps,g=i.isVideoTexture!==!0,_=l.__version===void 0||s===!0,v=c.dataReady,y=P(i,t);if(i.isDepthTexture)d=N(i.format===A,i.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,null));else if(i.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data);i.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&Se(i,t,r,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,t.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(f=h[a],i.format!==1023){if(r!==null){if(g){if(v){if(i.layerUpdates.size>0){let t=sc(f.width,f.height,i.format,i.type);for(let o of i.layerUpdates){let i=f.data.subarray(o*t/f.data.BYTES_PER_ELEMENT,(o+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,f.width,f.height,1,r,i)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,f.data,0,0)}else $e(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,r,u,f.data);i.layerUpdates.size>0&&i.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)f=h[t],i.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data):r===null?$e(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(i.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(i.layerUpdates.size>0){let a=sc(t.width,t.height,i.format,i.type);for(let o of i.layerUpdates){let i=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,u,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,r,u,t.data)}else if(i.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,r,u,t.data);else if(i.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,i,a,0,r,u,null),i>>=1,a>>=1}}}else if(i.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(i),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,u,f):n.texImage2D(e.TEXTURE_2D,t,d,r,u,f);i.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,r,u,t);O(i)&&i.mipmapsAutoUpdate===!0&&k(o),l.__version=c.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function we(t,i,a){if(i.image.length!==6)return;let o=be(t,i),s=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+a);let c=r.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+a);let t=Bt.getPrimaries(Bt.workingColorSpace),r=i.colorSpace===``?null:Bt.getPrimaries(i.colorSpace),l=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=D(i.image[e],!0,p.maxCubemapSize):f[e]=d?i.image[e].image:i.image[e],f[e]=Fe(i,f[e]);let h=f[0],g=m.convert(i.format,i.colorSpace),_=m.convert(i.type),v=M(i.internalFormat,g,_,i.normalized,i.colorSpace),y=i.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=P(i,h);ye(e.TEXTURE_CUBE_MAP,i);let C;if(i.isDepthTexture){if(v=N(i.format===A,i.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let a=C[r];i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?$e(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(C=i.mipmaps,y&&b){C.length>0&&S++;let t=Ie(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(i)&&i.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),c.__version=s.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Te(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=M(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),B(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Ne(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=N(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;B(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=M(a.internalFormat,o,s,a.normalized,a.colorSpace);B(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);s.__renderTarget=i;let c=o?i.depthTexture.image[0]:i.depthTexture.image;s.__webglTexture&&c.width===i.width&&c.height===i.height||(c.width=i.width,c.height=i.height,i.depthTexture.needsUpdate=!0),o?he(i.depthTexture,0):fe(i.depthTexture,0);let l=s.__webglTexture,u=Ne(i),d=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,f=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)B(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,f,d,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,f,d,l,0);else if(i.depthTexture.format===1027)B(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,f,d,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,f,d,l,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)De(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?De(i.__webglFramebuffer[0],t,0):De(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ee(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,i){let a=r.get(t);n!==void 0&&Te(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Oe(t)}function Ae(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,L),F(t);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&B(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=M(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),ye(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Te(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Te(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),ye(l,o),Te(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),O(o)&&k(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),ye(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Te(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Te(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Oe(t)}function z(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=j(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let je=[];function Me(t){if(t.samples>0){if(B(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(je.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&je.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function B(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Pe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&$e(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):et(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B,this.dispose=re}function sd(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ld=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Go({vertexShader:cd,fragmentShader:ld,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Z(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,m=null,h=typeof XRWebGLBinding<`u`,g=new ud,_={},y=t.getContextAttributes(),b=null,x=null,S=[],w=[],T=new H,E=null,D=null,j=new ks;j.viewport=new Zt;let M=new ks;M.viewport=new Zt;let N=[j,M],P=new zs,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getHandSpace()};function ee(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,L),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}F=null,I=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,R.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&$e(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&$e(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,L),r.addEventListener(`inputsourceschange`,te),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?A:k,a=y.stencil?C:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $t(d.textureWidth,d.textureHeight,{format:O,type:p,depthTexture:new Qi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $t(f.framebufferWidth,f.framebufferHeight,{format:O,type:p,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),R.setContext(r),R.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ne(P,i);for(let e=0;e<a.length;e++)ne(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),re(e,P,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(e){return _[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=N[n];o===void 0&&(o=new ks,o.layers.enable(n),o.viewport=new Zt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new ea,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let R=new lc;R.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},fd=new nn,pd=new Ft;pd.set(-1,0,0,0,1,0,0,0,1);function md(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Vo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?$e(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):$e(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var gd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_d=null;function vd(){return _d===null&&(_d=new Ci(gd,16,16,N,b),_d.name=`DFG_LUT`,_d.minFilter=u,_d.magFilter=u,_d.wrapS=a,_d.wrapT=a,_d.generateMipmaps=!1,_d.needsUpdate=!0),_d}var yd=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=p}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let _=m,y=new Set([F,P,M]),w=new Set([p,v,g,C,x,S]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],j=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,L=null,te=null,ne=null,re=null;this._outputColorSpace=ze;let ie=0,ae=0,R=null,oe=-1,se=null,ce=new Zt,le=new Zt,ue=null,de=new G(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Zt(0,0,pe,me),ye=new Zt(0,0,pe,me),be=!1,xe=new Di,Se=new ki,Ce=!1,we=!1,Te=new nn,Ee=new U,De=new Zt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return R===null?he:1}let z=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,B,Pe,Fe,Ie,Le,Re,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,tt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),z===null){let t=`webgl2`;if(z=je(t,e),z===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et(`WebGLRenderer: `+e.message),e}function st(){Me=new zc(z),Me.init(),it=new sd(z,Me),Ne=new yc(z,Me,e,it),B=new ad(z,Me),Ne.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),te=z.createFramebuffer(),ne=z.createFramebuffer(),re=z.createFramebuffer(),Pe=new Hc(z),Fe=new zu,Ie=new od(z,Me,B,Fe,Ne,it,Pe),Le=new Rc(I),Re=new uc(z),at=new _c(z,Re),Be=new Bc(z,Re,Pe,at),Ve=new Wc(z,Be,Re,at,Pe),Qe=new Uc(z,Ne,Ie),qe=new bc(Fe),He=new Ru(I,Le,Me,Ne,at,qe),Ue=new md(I,Fe),We=new Uu,Ke=new Xu(Me),Xe=new gc(I,Le,B,Ve,h,s),Je=new id(I,Ve,Ne),ot=new hd(z,Pe,Ne,B),tt=new vc(z,Me,Pe),rt=new Vc(z,Me,Pe),Pe.programs=He.programs,I.capabilities=Ne,I.extensions=Me,I.properties=Fe,I.renderLists=We,I.shadowMap=Je,I.state=B,I.info=Pe}_!==1009&&(N=new Kc(_,t.width,t.height,o,r,i));let ct=new dd(I,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){ct.isPresenting?$e(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009)et(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){$e(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(Ae()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=y.has(t)}if(e){let e=R.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),L=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe.dispose(),We.dispose(),Ke.dispose(),Ie.dispose(),Fe.dispose(),Le.dispose(),Ve.dispose(),Be.dispose(),at.dispose(),ot.dispose(),He.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ee=!0}function ut(){Ze(`WebGLRenderer: Context Restored.`),ee=!1;let e=Pe.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;st(),Pe.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function dt(e){et(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),Fe.remove(e)}function mt(e){let t=Fe.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Re.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=Fe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){L!==null&&e.isNodeMaterial&&L.setObject(r,e),Ce===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),L!==null&&L.renderStart(e,t,n),k=Ke.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),L!==null&&L.updateLights(k.state.lightsArray),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),Ce===!0&&qe.setGlobalState(this.clippingPlanes,t),L!==null&&Je.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),k=j.pop(),L!==null&&L.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Fe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new lc;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){et(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;L!==null&&L.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=N!==null&&(R===null||n)&&N.begin(I,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,R),k=Ke.get(e,j.length),k.init(t),k.state.textureUnits=Ie.getTextureUnits(),j.push(k),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Se.setFromArrayCamera(t):xe.setFromProjectionMatrix(Te,Ge,t.reversedDepth),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),O=We.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,I.sortObjects)}xt(e,t,0,I.sortObjects),O.finish(),L!==null&&L.updateLights(k.state.lightsArray),I.sortObjects===!0&&O.sort(ge,_e),ke=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ke&&Xe.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Je.render(i,e,t),Ce===!0&&qe.endShadows(),(r&&N.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}ke&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),ke&&Xe.render(e),St(O,e,t)}R!==null&&ae===0&&(Ie.updateMultisampleRenderTarget(R),Ie.updateRenderTargetMipmap(R)),r&&N.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),at.resetDefaultState(),oe=-1,se=null,j.pop(),j.length>0?(k=j[j.length-1],Ie.setTextureUnits(k.state.textureUnits),Ce===!0&&qe.setGlobalState(I.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,L!==null&&L.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Ve.update(e),a=e.material;a.visible&&O.push(e,i,a,n,De.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,De.z,s,t)}}else a.visible&&O.push(e,i,a,n,De.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ce===!0&&qe.setGlobalState(I.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?b:p,minFilter:f,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(de),fe=I.getClearAlpha(),fe<1&&I.setClearColor(16777215,.5),I.clear(),ke&&Xe.render(n);let u=I.toneMapping;I.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ce===!0&&qe.setGlobalState(I.clippingPlanes,r),wt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(de,fe),d!==void 0&&(r.viewport=d),I.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){L!==null&&i.isNodeMaterial&&L.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Oe);let r=Fe.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=He.getUniforms(e),L!==null&&e.isNodeMaterial&&L.build(e,n,s),e.onBeforeCompile(s,I),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),At(e,s),r.needsLights=H(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=Fe.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=tu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=Fe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?I.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Fe.get(r),y=k.state.lights;if(Ce===!0&&(we===!0||e!==se)){let t=e===se&&r.id===oe;qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),L&&r.isNodeMaterial&&L.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==oe&&(oe=r.id,w=!0),C||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,Ie));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=vd()),w){if(E.setValue(z,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&V(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,he,me,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}tu.upload(z,kt(v),O,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(tu.upload(z,kt(v),O,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,S),ot.bind(n,S)}}return S}function V(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function H(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=Fe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Fe.get(e.texture).__webglTexture=t,Fe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Fe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=Fe.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,Fe.get(e.texture).__webglTexture,Fe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Fe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Fe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?Fe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=te),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=Fe.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Fe.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Fe.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Mt(e){let t=Fe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){et(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Fe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){et(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){et(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=R===null?null:Fe.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Fe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=R===null?null:Fe.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nt(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Fe.get(e),r=Fe.get(t),h=Fe.get(n.__renderTarget),g=Fe.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Fe.has(e)){let n=Fe.get(e),r=Fe.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,ne),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){Fe.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ie=0,ae=0,R=null,B.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},bd={type:`change`},xd={type:`start`},Sd={type:`end`},Cd=new li,wd=new Br,Td=Math.cos(70*V.DEG2RAD),Ed=new U,Dd=2*Math.PI,Od={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6,Ad=class extends oc{constructor(e,t=null){super(e,t),this.state=Od.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:n.ROTATE,MIDDLE:n.DOLLY,RIGHT:n.PAN},this.touches={ONE:r.ROTATE,TWO:r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Mt,this._lastTargetPosition=new U,this._quat=new Mt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new U,this._rotateStart=new H,this._rotateEnd=new H,this._rotateDelta=new H,this._panStart=new H,this._panEnd=new H,this._panDelta=new H,this._dollyStart=new H,this._dollyEnd=new H,this._dollyDelta=new H,this._dollyDirection=new U,this._mouse=new H,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Md.bind(this),this._onPointerDown=jd.bind(this),this._onPointerUp=Nd.bind(this),this._onContextMenu=Bd.bind(this),this._onMouseWheel=Id.bind(this),this._onKeyDown=Ld.bind(this),this._onTouchStart=Rd.bind(this),this._onTouchMove=zd.bind(this),this._onMouseDown=Pd.bind(this),this._onMouseMove=Fd.bind(this),this._interceptControlDown=Vd.bind(this),this._interceptControlUp=Hd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Od.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bd),this.update(),this.state=Od.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ed.copy(t).sub(this.target),Ed.applyQuaternion(this._quat),this._spherical.setFromVector3(Ed),this.autoRotate&&this.state===Od.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Dd:n>Math.PI&&(n-=Dd),r<-Math.PI?r+=Dd:r>Math.PI&&(r-=Dd),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Ed.setFromSpherical(this._spherical),Ed.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ed),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Ed.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new U(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new U(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Ed.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Cd.origin.copy(this.object.position),Cd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cd.direction))<Td?this.object.lookAt(this.target):(wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cd.intersectPlane(wd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Dd/60/60*this.autoRotateSpeed:Dd/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ed.setFromMatrixColumn(t,0),Ed.multiplyScalar(-e),this._panOffset.add(Ed)}_panUp(e,t){this.screenSpacePanning===!0?Ed.setFromMatrixColumn(t,1):(Ed.setFromMatrixColumn(t,0),Ed.crossVectors(this.object.up,Ed)),Ed.multiplyScalar(e),this._panOffset.add(Ed)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ed.copy(r).sub(this.target);let i=Ed.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Dd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Dd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new H,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function jd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Md(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Nd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Sd),this.state=Od.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Pd(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Od.DOLLY;break;case n.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Od.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Od.ROTATE}break;case n.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Od.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Od.PAN}break;default:this.state=Od.NONE}this.state!==Od.NONE&&this.dispatchEvent(xd)}function Fd(e){switch(this.state){case Od.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Od.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Od.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Id(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Od.NONE&&(e.preventDefault(),this.dispatchEvent(xd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Sd))}function Ld(e){this.enabled!==!1&&this._handleKeyDown(e)}function Rd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case r.ROTATE:if(this.enableRotate===!1){this.state=Od.NONE;break}this._handleTouchStartRotate(e),this.state=Od.TOUCH_ROTATE;break;case r.PAN:if(this.enablePan===!1){this.state=Od.NONE;break}this._handleTouchStartPan(e),this.state=Od.TOUCH_PAN;break;default:this.state=Od.NONE}break;case 2:switch(this.touches.TWO){case r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Od.TOUCH_DOLLY_PAN;break;case r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Od.TOUCH_DOLLY_ROTATE;break;default:this.state=Od.NONE}break;default:this.state=Od.NONE}this.state!==Od.NONE&&this.dispatchEvent(xd)}function zd(e){switch(this._trackPointer(e),this.state){case Od.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Od.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Od.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Od.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Od.NONE}}function Bd(e){this.enabled!==!1&&e.preventDefault()}function Vd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Hd(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Ud=t({biome:()=>Kd,default:()=>Wd,menu:()=>qd,text:()=>Jd,title:()=>Gd}),Wd={title:`3D моделирование`,biome:`snowy`,menu:[`blender`,`blockbench`],text:`Создание трехмерных моделей, окружения, персонажей и игровых ассетов под любые задачи.
`},Gd=Wd.title,Kd=Wd.biome,qd=Wd.menu,Jd=Wd.text,Yd=t({contacts:()=>ef,default:()=>Xd,links:()=>$d,text:()=>Qd,title:()=>Zd}),Xd={title:`Madeas studio`,text:`Креативное агентство, где идеи превращаются в сильные цифровые продукты. Мы помогаем брендам находить свой голос, выделяться среди конкурентов и выстраивать честную коммуникацию с аудиторией. Мы не работаем по шаблонам. Каждый проект начинается с поиска точной концепции и смысла, а затем обретает форму через дизайн, технологии и контент. Для нас важно, чтобы визуал не просто впечатлял с первого взгляда, но и решал бизнес-задачи.

Наши ключевые направления:
● Креатив и концепции. Придумываем идеи для запуска продуктов, спецпроектов и рекламных кампаний.
● Брендинг и дизайн. Создаем визуальную айдентику, дизайн-системы и запоминающиеся веб-интерфейсы.
● Диджитал-разработка. Проектируем и запускаем сайты любой сложности: от имиджевых промо-страниц до масштабных сервисов.
`,links:{title:`Наши работы`,message:`Посмотрите наши проекты и кейсы на внешних площадках.
`,labels:[{label:`Behance`,url:`https://behance.net/andrejsharapov`},{label:`Dribbble`,url:`https://dribbble.com/andrejsharapov`},{label:`Pinterest`,url:`https://ru.pinterest.com/andrejsharapov/`},{label:`Figma`,url:`https://www.figma.com/@andrejsharapov`},{label:`CodePen`,url:`https://codepen.io/andrejsharapov`},{label:`Artstation`,url:`https://www.artstation.com/andrejsharapov`},{label:`GitHub`,url:`https://github.com/andrejsharapov`},{label:`Author Website`,url:`https://sharapov.dev/cases/`},{label:`Fiskania Survival`,url:`https://vk.ru/fiskaniasurvival`},{label:`Minecraft`,url:`https://github.com/andrejsharapov/mctpms`}]},contacts:{title:`Контакты`,labels:[{name:`VK`,type:`link`,link:`https://vk.ru/andrejsharapov`,target:`_blank`},{name:`+7 (964) 788-27-38`,type:`tel`,link:`+79647882738`,target:null},{name:`andrejsharapov@gmail.com`,type:`mailto`,link:`andrejsharapov@gmail.com`,target:null}]}},Zd=Xd.title,Qd=Xd.text,$d=Xd.links,ef=Xd.contacts,tf=t({biome:()=>af,default:()=>nf,menu:()=>of,text:()=>sf,title:()=>rf}),nf={title:`Дизайн и Арт`,biome:`forest`,menu:[`logotype`,`social-media`,`icon`,`illustration`,`merch`,`sticker`],text:`Визуальный контент для соцсетей, брендинга и цифровых площадок.
`},rf=nf.title,af=nf.biome,of=nf.menu,sf=nf.text,cf=t({biome:()=>df,default:()=>lf,menu:()=>ff,text:()=>pf,title:()=>uf}),lf={title:`Дизайн сайтов`,biome:`forest`,menu:[`des-business-card-website`,`des-landing-page`,`des-promo-website`,`des-web-service`,`des-marketplace`],text:`Проектирование и дизайн веб-ресурсов: от промо-страниц до сложных сервисов.
`},uf=lf.title,df=lf.biome,ff=lf.menu,pf=lf.text,mf=t({biome:()=>_f,default:()=>hf,menu:()=>vf,text:()=>yf,title:()=>gf}),hf={title:`Веб-разработка`,biome:`sandy`,menu:[`dev-business-card-website`,`dev-landing-page`,`dev-promo-website`,`dev-web-service`,`dev-marketplace`],text:`Верстка, программирование и запуск веб-проектов любой сложности под ключ.
`},gf=hf.title,_f=hf.biome,vf=hf.menu,yf=hf.text,bf=t({biome:()=>Cf,default:()=>xf,menu:()=>wf,text:()=>Tf,title:()=>Sf}),xf={title:`Разработка игр`,biome:`snowy`,menu:[`minecraft`,`unity`],text:`Создание игровых проектов, модификаций и уникальных серверов с продуманными механиками.
`},Sf=xf.title,Cf=xf.biome,wf=xf.menu,Tf=xf.text,Ef=t({biome:()=>kf,default:()=>Df,menu:()=>Af,text:()=>jf,title:()=>Of}),Df={title:`Продвижение`,biome:`tropical`,menu:[`banner`,`billboard`,`newsletter`,`quiz-design`,`seo`],text:`Инструменты для привлечения трафика, повышения узнаваемости и роста конверсии.
`},Of=Df.title,kf=Df.biome,Af=Df.menu,jf=Df.text,Mf=t({biome:()=>Ff,default:()=>Nf,menu:()=>If,text:()=>Lf,title:()=>Pf}),Nf={title:`Типографика`,biome:`forest`,menu:[`booklet`,`business-card`,`certificate`,`menu`,`packaging`,`poster`],text:`Полиграфия, многостраничная верстка и подготовка макетов к печати.
`},Pf=Nf.title,Ff=Nf.biome,If=Nf.menu,Lf=Nf.text,Rf=t({biome:()=>Vf,default:()=>zf,menu:()=>Hf,text:()=>Uf,title:()=>Bf}),zf={title:`Startup`,biome:`rocky`,menu:[`identity-brand`],text:`Комплексная упаковка новых проектов и разработка фирменного стиля для быстрого выхода на рынок.
`},Bf=zf.title,Vf=zf.biome,Hf=zf.menu,Uf=zf.text,Wf=t({color:()=>Yf,cta:()=>tp,default:()=>Gf,model:()=>Xf,note:()=>ep,price:()=>$f,scope:()=>Qf,slug:()=>qf,text:()=>Zf,title:()=>Kf,updated:()=>Jf}),Gf={title:`Blender`,slug:`blender`,updated:new Date(17947872e5),color:`#ff6f00`,model:`3d-artist`,text:`Высокополигональное и low-poly моделирование, скульптуринг, текстурирование и рендеринг. Подходит для визуализации продуктов, анимации, стилизованной графики и сложных игровых ассетов.
`,scope:{title:`Что входит в услугу`,items:[`Моделирование (low-poly / high-poly).`,`Скульптинг и детализация.`,`Создание UV-развертки и текстурирование.`,`Настройка материалов и рендеринг.`,`Подготовка модели к экспорту в игровые движки.`]},price:{from:15e3,currency:`₽`},note:`Финальная стоимость зависит от этапа: скульптинг, полигонаж, текстуры.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Kf=Gf.title,qf=Gf.slug,Jf=Gf.updated,Yf=Gf.color,Xf=Gf.model,Zf=Gf.text,Qf=Gf.scope,$f=Gf.price,ep=Gf.note,tp=Gf.cta,np=t({color:()=>sp,cta:()=>pp,default:()=>rp,model:()=>cp,note:()=>fp,price:()=>dp,scope:()=>up,slug:()=>ap,text:()=>lp,title:()=>ip,updated:()=>op}),rp={title:`Blockbench`,slug:`blockbench`,updated:new Date(17947872e5),color:`#488eff`,model:`cube`,text:`Создание воксельных и кубоидных low-poly моделей с оптимизированной сеткой и текстурами. Идеально для Minecraft-проектов, модов, ресурспаков и стилизованных инди-игр.
`,scope:{title:`Что входит в услугу`,items:[`Создание 3D-модели в стиле Minecraft.`,`Настройка сетки и текстурирование (пиксель-арт).`,`Подготовка файла под ресурспак или мод.`]},price:{from:5e3,currency:`₽`},note:`Подходит для Minecraft-проектов, модов и ресурспаков.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},ip=rp.title,ap=rp.slug,op=rp.updated,sp=rp.color,cp=rp.model,lp=rp.text,up=rp.scope,dp=rp.price,fp=rp.note,pp=rp.cta,mp=t({color:()=>vp,default:()=>hp,model:()=>yp,text:()=>bp,title:()=>gp,updated:()=>_p}),hp={title:`Дизайн приложений`,updated:new Date(17947008e5),color:`#b8a111`,model:``,text:`Проектирование интуитивно понятных интерфейсов для iOS и Android. Продумываем логику экранов, создаем кликабельные прототипы и готовим UI-кит для передачи в разработку.
`},gp=hp.title,_p=hp.updated,vp=hp.color,yp=hp.model,bp=hp.text,xp=t({color:()=>Ep,cta:()=>Mp,default:()=>Sp,model:()=>Dp,note:()=>jp,price:()=>Ap,scope:()=>kp,slug:()=>wp,text:()=>Op,title:()=>Cp,updated:()=>Tp}),Sp={title:`Иконка`,slug:`icon`,updated:new Date(17947872e5),color:`#159e9c`,model:`icons`,text:`Разработка уникальных векторных иконок в едином стиле для вашего бренда или игры. Помогаем сделать навигацию на сайте, в приложении или презентации наглядной и аккуратной.
`,scope:{title:`Что мы делаем`,items:[`Анализ стиля бренда и подбор сетки для иконок.`,`Отрисовка иконок в единой стилистике.`,`Оптимизация и подготовка к использованию (SVG, PNG).`,`Сборка иконок в шрифт или спрайт (по запросу).`]},price:{from:5e3,currency:`₽`},note:`Стоимость указана за сет из 10-15 иконок. Точная цена зависит от количества и сложности.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Cp=Sp.title,wp=Sp.slug,Tp=Sp.updated,Ep=Sp.color,Dp=Sp.model,Op=Sp.text,kp=Sp.scope,Ap=Sp.price,jp=Sp.note,Mp=Sp.cta,Np=t({cases:()=>Wp,color:()=>Rp,cta:()=>Gp,default:()=>Pp,model:()=>zp,note:()=>Up,price:()=>Hp,scope:()=>Vp,slug:()=>Ip,text:()=>Bp,title:()=>Fp,updated:()=>Lp}),Pp={title:`Иллюстрация и маскот`,slug:`illustration`,updated:new Date(17947872e5),color:`#e05aa0`,model:`easel`,text:`Авторская цифровая графика для сайтов, статей, упаковки и рекламных кампаний. 
Разрабатываем запоминающихся персонажей-маскотов и сюжетные сцены, которые 
выделяют продукт среди конкурентов и формируют узнаваемый визуальный образ бренда.
`,scope:{title:`Что входит в услугу`,items:[`Разработка концепции маскота и поиск визуального стиля.`,`Создание эскизов персонажа и утверждение композиции.`,`Отрисовка финальной иллюстрации и маскота в высоком разрешении.`,`Подготовка маскота в разных позах и эмоциях для дальнейшего использования.`,`Адаптация под нужный формат (горизонтальный, вертикальный, квадрат).`]},price:{from:8e3,currency:`₽`},note:`Стоимость зависит от сложности сцены, количества персонажей и поз маскота, а также прав на использование.`,cases:{title:`Примеры работ`,labels:[{label:`Иллюстрация Altai-Trekking`,url:`https://dribbble.com/shots/22076882-illustration-Altai-Trekking`,created:new Date(16886016e5)},{label:`Cute fishes: «Madeas & Fiska»`,url:`https://ru.pinterest.com/andrejsharapov/cute-fishes-madeas-fiska/`,created:new Date(16876512e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Fp=Pp.title,Ip=Pp.slug,Lp=Pp.updated,Rp=Pp.color,zp=Pp.model,Bp=Pp.text,Vp=Pp.scope,Hp=Pp.price,Up=Pp.note,Wp=Pp.cases,Gp=Pp.cta,Kp=t({cases:()=>rm,color:()=>Zp,cta:()=>im,default:()=>qp,model:()=>Qp,note:()=>nm,price:()=>tm,scope:()=>em,slug:()=>Yp,text:()=>$p,title:()=>Jp,updated:()=>Xp}),qp={title:`Дизайн и редизайн логотипа`,slug:`logotype`,updated:new Date(17947872e5),color:`#5a7ae0`,model:`artist`,text:`Создание выразительного и масштабируемого знака, который одинаково хорошо читается 
на favicon сайта и на уличной вывеске. Обновляем устаревшие логотипы: переводим 
растровые файлы в вектор, чистим геометрию, дорабатываем детали и адаптируем знак 
под современные носители. Передаем исходники во всех нужных форматах и базовые 
правила использования.
`,scope:{title:`Что влияет на цену`,items:[`Простые знаки (геометрия, текст) от 25 000 ₽.`,`Сложные логотипы (с проработкой смыслов, иллюстрацией) от 45 000 ₽.`,`Редизайн и векторизация существующего знака обсуждается отдельно.`,`Разработка фирменного стиля на основе логотипа обсуждается отдельно.`,`Передача исходников (SVG, PDF, AI) и краткий гайд по использованию.`]},price:{from:25e3,currency:`₽`},note:`Финальная стоимость зависит от сложности знака, объёма редизайна и количества вариантов.`,cases:{title:`Примеры работ`,labels:[{label:`Дизайн логотипа «АСУ РВК»`,url:`https://dribbble.com/shots/27891304-Logo-design-ASU-RVK`,created:new Date(17895168e5)},{label:`Дизайн логотипа E'leganto`,url:`https://www.behance.net/gallery/139683899/Eleganto`,created:new Date(16473888e5)},{label:`Дизайн логотипа Photofood`,url:`https://www.behance.net/gallery/139483817/Logo-design-for-cafe-Photofood`,created:new Date(16370208e5)},{label:`Дизайн логотипа и этикетки Winishko`,url:`https://www.behance.net/gallery/139926943/dizajn-logotipa-vinishko-vozmem`,created:new Date(15847488e5)},{label:`Дизайн логотипа BullKing`,url:`https://www.behance.net/gallery/140536441/BullKing-Logo-design-concept`,created:new Date(15650496e5)},{label:`Дизайн логотипа Angel-wings`,url:`https://www.behance.net/gallery/258526059/Logotype-Angel-wings`,created:new Date(16470432e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Jp=qp.title,Yp=qp.slug,Xp=qp.updated,Zp=qp.color,Qp=qp.model,$p=qp.text,em=qp.scope,tm=qp.price,nm=qp.note,rm=qp.cases,im=qp.cta,am=t({cases:()=>gm,color:()=>um,cta:()=>_m,default:()=>om,model:()=>dm,note:()=>hm,price:()=>mm,scope:()=>pm,slug:()=>cm,text:()=>fm,title:()=>sm,updated:()=>lm}),om={title:`Дизайн мерча`,slug:`merch`,updated:new Date(17947872e5),color:`#e05ad0`,model:`merch`,text:`Создание авторских иллюстраций, графики и типографических композиций для одежды и аксессуаров: футболок, худи, шопперов и кружек. В базовую стоимость входит разработка принта без нанесения на изделие.
`,scope:{title:`Что входит в услугу`,items:[`Разработка идеи и визуальной концепции принта.`,`Отрисовка авторской иллюстрации или векторной композиции.`,`Подготовка файлов в печать под нужный способ нанесения (шелкография, вышивка, DTF).`]},price:{from:6e3,currency:`₽`},note:`Стоимость указана за один принт. Создание серии принтов или полноценной коллекции мерча обсуждается отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`Мерч «IT Pandas» для IT-команды`,url:`https://www.behance.net/gallery/258539161/IT-Pandas-serija-illjustracij-i-merch-dlja-IT-komandy`,created:new Date(17295552e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},sm=om.title,cm=om.slug,lm=om.updated,um=om.color,dm=om.model,fm=om.text,pm=om.scope,mm=om.price,hm=om.note,gm=om.cases,_m=om.cta,vm=t({color:()=>Cm,cta:()=>km,default:()=>ym,model:()=>wm,note:()=>Om,price:()=>Dm,scope:()=>Em,slug:()=>xm,text:()=>Tm,title:()=>bm,updated:()=>Sm}),ym={title:`Дизайн для соцсетей`,slug:`media`,updated:new Date(17947872e5),color:`#0c05e8`,model:`social`,text:`Оформление сообществ и создание единого визуального стиля для контента. Делаем шаблоны для постов, каруселей, сторис и обложек с упором на читаемость и вовлечение аудитории.
`,scope:{title:`Что входит в услугу`,items:[`Разработка визуальной концепции для аккаунта.`,`Создание шаблонов для постов, сторис и обложек.`,`Подбор шрифтов и цветовой палитры в рамках бренда.`,`Подготовка файлов в Figma или исходников для работы.`]},price:{from:15e3,currency:`₽`},note:`Стоимость указана за пакет шаблонов. Ведение аккаунта рассчитывается отдельно.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},bm=ym.title,xm=ym.slug,Sm=ym.updated,Cm=ym.color,wm=ym.model,Tm=ym.text,Em=ym.scope,Dm=ym.price,Om=ym.note,km=ym.cta,Am=t({cases:()=>Vm,color:()=>Fm,cta:()=>Hm,default:()=>jm,model:()=>Im,note:()=>Bm,price:()=>zm,scope:()=>Rm,slug:()=>Nm,text:()=>Lm,title:()=>Mm,updated:()=>Pm}),jm={title:`Дизайн стикеров`,slug:`sticker`,updated:new Date(17947872e5),color:`#5f088a`,model:`stickers`,text:`Разработка стикерпаков для Telegram и других мессенджеров. Помогаем бренду общаться с аудиторией на одном языке и повышать органическую узнаваемость.
`,scope:{title:`Что мы делаем`,items:[`Придумываем концепцию персонажа или серии.`,`Рисуем стикеры с разными эмоциями и ситуациями.`,`Оформляем в нужном формате (WebP, PNG) с учетом требований мессенджеров.`,`Готовим анимированную версию при необходимости.`]},price:{from:8e3,currency:`₽`},note:`Стоимость указана за стикерпак из 10-15 штук.`,cases:{title:`Примеры работ`,labels:[{label:`Набор стикеров «DofiDream»`,url:`https://dribbble.com/shots/27421249-illustrations-DofiDream-Stickers`,created:new Date(17793216e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Mm=jm.title,Nm=jm.slug,Pm=jm.updated,Fm=jm.color,Im=jm.model,Lm=jm.text,Rm=jm.scope,zm=jm.price,Bm=jm.note,Vm=jm.cases,Hm=jm.cta,Um=t({cases:()=>eh,color:()=>Jm,cta:()=>th,default:()=>Wm,model:()=>Ym,note:()=>$m,price:()=>Qm,scope:()=>Zm,slug:()=>Km,text:()=>Xm,title:()=>Gm,updated:()=>qm}),Wm={title:`Имиджевый сайт`,slug:`des-business-card-website`,updated:new Date(17947872e5),color:`#e0d05a`,model:`business-card-website`,text:`Лаконичный и аккуратный дизайн небольшого сайта для презентации компании, эксперта или услуги. Делаем упор на понятную структуру, доверие и быстрый доступ к контактам без лишних элементов.
`,scope:{title:`Что входит в услугу`,items:[`Проведение брифа и анализ целевой аудитории.`,`Разработка структуры и прототипа страниц (одностраничный/многостраничный).`,`Создание визуального дизайна (десктоп и мобильная версия).`,`Подготовка макета к верстке и передача разработчику.`]},price:{from:2e4,currency:`₽`},note:`Стоимость зависит от количества блоков и сложности контента.`,cases:{title:`Примеры работ`,labels:[{label:`Сайт-портфолио IT-специалиста`,url:`https://dribbble.com/shots/9012206-Personal-page`,created:new Date(15767136e5)},{label:`Имиджевый сайт для испытательной лаборатории ООО «РИЦ»`,url:`https://dribbble.com/shots/8086461-Concept-of-Promo-Page`,created:new Date(15665184e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Gm=Wm.title,Km=Wm.slug,qm=Wm.updated,Jm=Wm.color,Ym=Wm.model,Xm=Wm.text,Zm=Wm.scope,Qm=Wm.price,$m=Wm.note,eh=Wm.cases,th=Wm.cta,nh=t({cases:()=>ph,color:()=>sh,cta:()=>mh,default:()=>rh,model:()=>ch,note:()=>fh,price:()=>dh,scope:()=>uh,slug:()=>ah,text:()=>lh,title:()=>ih,updated:()=>oh}),rh={title:`Лендинг`,slug:`des-landing-page`,updated:new Date(17948736e5),color:`#8a3313`,model:`landing-page`,text:`Дизайн продающей посадочной страницы под запуск рекламы, конкретного продукта или услуги. Проектируем структуру по маркетинговой модели AIDA, чтобы провести пользователя от первого экрана к целевому действию и максимизировать конверсию в заявки.
`,scope:{title:`Что входит в услугу`,items:[`Проведение брифа, анализ продукта и целевой аудитории.`,`Проектирование продающей структуры и прототипа по модели AIDA.`,`Создание визуального дизайна с акцентом на конверсию (десктоп и мобильная версия).`,`Подготовка макета к верстке и передача разработчику.`]},price:{from:35e3,currency:`₽`},note:`Стоимость зависит от количества блоков и сложности анимации.`,cases:{title:`Примеры работ`,labels:[{label:null,url:null,created:null},{label:`«Black Cloud» — unlimited cloud storage with AI`,url:`https://www.behance.net/gallery/251133147/Black-Cloud-Unlimited-cloud-storage-with-AI`,created:new Date(17814816e5)},{label:`Посадочная страница о петрушке`,url:`https://www.behance.net/gallery/258615591/posadochnaja-stranica-o-petrushke`,created:new Date(17948736e5)},{label:`Лендинг Fat Cat — приют кошек, страдающих лишним весом`,url:`https://www.behance.net/gallery/154367141/Landing-page-Fat-Cat`,created:new Date(16651008e5)},{label:`Лендинг Cactus — Just a cactus in a pot`,url:`https://www.behance.net/gallery/146324283/Just-a-cactus-in-a-pot`,created:new Date(16585344e5)},{label:`Посадочная страница для Инвестиционной академии Alpari`,url:`https://dribbble.com/shots/10489046-Course-landing-page`,created:new Date(15825024e5)},{label:`Лендинг Ho-Ho-Ho — Christmas agency`,url:`https://www.behance.net/gallery/89434415/Christmas-agency-Ho-Ho-Ho`,created:new Date(15761952e5)},{label:`Посадочная страница SK-DESIGN — дизайнерская мебель`,url:`https://www.behance.net/gallery/88087237/SK-DESIGN-factory-of-modern-furniture-for-the-home`,created:new Date(15736032e5)},{label:`Лендинг «Единорожка» — конный клуб`,url:`https://www.behance.net/gallery/87207549/konnyj-klub-edinorozhka`,created:new Date(15717024e5)},{label:`Посадочная страница для iOGO MEDIA`,url:`https://www.behance.net/gallery/86619879/Landing-Page-IOGO-MEDIA-(Concept-Update)`,created:new Date(15705792e5)},{label:`Лендинг экологической конференции «РПН Сфера»`,url:`https://www.behance.net/gallery/76596937/Conference-Landing-page`,created:new Date(15506208e5)},{label:`Лендинг для B2B-продукта «Единая Товарная База»`,url:`https://dribbble.com/shots/17659585-Single-trade-base`,created:new Date(15415488e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},ih=rh.title,ah=rh.slug,oh=rh.updated,sh=rh.color,ch=rh.model,lh=rh.text,uh=rh.scope,dh=rh.price,fh=rh.note,ph=rh.cases,mh=rh.cta,hh=t({color:()=>bh,default:()=>gh,model:()=>xh,note:()=>Th,price:()=>wh,scope:()=>Ch,slug:()=>vh,text:()=>Sh,title:()=>_h,updated:()=>yh}),gh={title:`Интернет-магазин`,slug:`des-marketplace`,updated:new Date(17947872e5),color:`#82105c`,model:`marketplace`,text:`Проектирование удобного каталога, карточек товаров и прозрачного процесса оформления заказа. Помогаем покупателям быстро находить нужное через продуманные фильтры и повышаем средний чек за счет грамотного UX.
`,scope:{title:`Что входит в услугу`,items:[`Анализ ассортимента и конкурентов.`,`Проектирование структуры каталога и фильтров.`,`Дизайн карточек товаров и страницы оформления заказа.`,`Проработка логики корзины и личного кабинета.`,`Подготовка макета к верстке и передача разработчику.`]},price:{from:7e4,currency:`₽`},note:`Стоимость зависит от количества товаров и сложности фильтрации. Верстка и интеграция с CMS рассчитываются отдельно.`},_h=gh.title,vh=gh.slug,yh=gh.updated,bh=gh.color,xh=gh.model,Sh=gh.text,Ch=gh.scope,wh=gh.price,Th=gh.note,Eh=t({color:()=>jh,cta:()=>Lh,default:()=>Dh,model:()=>Mh,note:()=>Ih,price:()=>Fh,scope:()=>Ph,slug:()=>kh,text:()=>Nh,title:()=>Oh,updated:()=>Ah}),Dh={title:`Промо-сайт`,slug:`des-promo-website`,updated:new Date(17947872e5),color:`#821025`,model:`promo-website`,text:`Эффектный имиджевый дизайн для запуска нового продукта, мероприятия или рекламной кампании. Используем нестандартную сетку, выразительную типографику и закладываем анимации для вау-эффекта.
`,scope:{title:`Что входит в услугу`,items:[`Разработка концепции и поиск визуального стиля.`,`Создание структуры и прототипа.`,`Дизайн с нестандартной сеткой и выразительной типографикой.`,`Проработка анимаций и интерактивных элементов.`,`Подготовка макета к верстке.`]},price:{from:5e4,currency:`₽`},note:`Стоимость зависит от сложности анимаций и количества экранов. Верстка рассчитывается отдельно.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Oh=Dh.title,kh=Dh.slug,Ah=Dh.updated,jh=Dh.color,Mh=Dh.model,Nh=Dh.text,Ph=Dh.scope,Fh=Dh.price,Ih=Dh.note,Lh=Dh.cta,Rh=t({cases:()=>Yh,color:()=>Uh,cta:()=>Xh,default:()=>zh,model:()=>Wh,note:()=>Jh,price:()=>qh,scope:()=>Kh,slug:()=>Vh,text:()=>Gh,title:()=>Bh,updated:()=>Hh}),zh={title:`Веб-сервис`,slug:`des-web-service`,updated:new Date(17947872e5),color:`#072370`,model:`web-service`,text:`Глубокое проектирование сложных интерфейсов и личных кабинетов. Прорабатываем пользовательские пути (CJM и User Flow), создаем масштабируемую дизайн-систему и делаем сложный функционал простым в работе.
`,scope:{title:`Что входит в услугу`,items:[`Анализ требований и проработка пользовательских путей (CJM, User Flow).`,`Создание прототипов (wireframes) для ключевых экранов.`,`Разработка визуального дизайна с учетом логики взаимодействия.`,`Создание масштабируемой дизайн-системы и UI-кита.`,`Подготовка макета к верстке и передача разработчику.`]},price:{from:12e4,currency:`₽`},note:`Стоимость зависит от сложности функционала и количества экранов. Точная оценка дается после проработки технического задания.`,cases:{title:`Примеры работ`,labels:[{label:`Редизайн корпоративного сайта «РПН-Сфера»`,url:`https://dribbble.com/shots/7816593-Redesign-Corporate-Website`,created:new Date(15719616e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Bh=zh.title,Vh=zh.slug,Hh=zh.updated,Uh=zh.color,Wh=zh.model,Gh=zh.text,Kh=zh.scope,qh=zh.price,Jh=zh.note,Yh=zh.cases,Xh=zh.cta,Zh=t({cases:()=>cg,color:()=>ng,cta:()=>lg,default:()=>Qh,model:()=>rg,note:()=>sg,price:()=>og,scope:()=>ag,slug:()=>eg,text:()=>ig,title:()=>$h,updated:()=>tg}),Qh={title:`Сайт-визитка`,slug:`dev-business-card-website`,updated:new Date(17947872e5),color:`#e0d05a`,model:`dev-business-card`,text:`Быстрая адаптивная верстка, базовая SEO-оптимизация и размещение сайта на хостинге. Подключаем формы обратной связи, карты и аналитику, чтобы вы могли сразу принимать заявки.
`,scope:{title:`Что входит в услугу`,items:[`Адаптивная верстка по макету (HTML, CSS\\SCSS, JS\\Vue).`,`Подключение форм обратной связи и карт.`,`Базовая SEO-оптимизация (метатеги, скорость загрузки).`,`Установка и настройка аналитики (Яндекс.Метрика).`,`Размещение на хостинге и настройка домена.`]},price:{from:2e4,currency:`₽`},note:`Стоимость указана за верстку без учета дизайна. Если нужен дизайн, смотрите соответствующую услугу.`,cases:{title:`Примеры работ`,labels:[{label:`Сайт-портфолио IT-специалиста`,url:`https://dribbble.com/shots/9012206-Personal-page`,created:new Date(15767136e5)},{label:`Имиджевый сайт для испытательной лаборатории ООО «РИЦ»`,url:`https://dribbble.com/shots/8086461-Concept-of-Promo-Page`,created:new Date(15665184e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},$h=Qh.title,eg=Qh.slug,tg=Qh.updated,ng=Qh.color,rg=Qh.model,ig=Qh.text,ag=Qh.scope,og=Qh.price,sg=Qh.note,cg=Qh.cases,lg=Qh.cta,ug=t({cases:()=>xg,color:()=>hg,cta:()=>Sg,default:()=>dg,model:()=>gg,note:()=>bg,price:()=>yg,scope:()=>vg,slug:()=>pg,text:()=>_g,title:()=>fg,updated:()=>mg}),dg={title:`Лендинг`,slug:`dev-landing-page`,updated:new Date(17947872e5),color:`#8a3313`,model:`dev-landing-page`,text:`Чистая кроссбраузерная верстка с высокой скоростью загрузки по Google PageSpeed. Интегрируем CRM-системы, квизы, цели для рекламных кабинетов и настраиваем удобную админ-панель для правки текстов.
`,scope:{title:`Что входит в услугу`,items:[`Адаптивная верстка по макету (HTML, CSS\\SCSS, JS\\Vue).`,`Настройка форм обратной связи и интеграция с CRM.`,`Подключение аналитики (Яндекс.Метрика, Google Analytics).`,`Оптимизация скорости загрузки и базовая SEO-настройка.`,`Размещение на хостинге и настройка домена.`]},price:{from:4e4,currency:`₽`},note:`Стоимость указана за верстку без учета дизайна. Если нужен дизайн, смотрите соответствующую услугу.`,cases:{title:`Примеры работ`,labels:[{label:`Лендинг экологической конференции «РПН Сфера»`,url:`https://www.behance.net/gallery/76596937/Conference-Landing-page`,created:new Date(15506208e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},fg=dg.title,pg=dg.slug,mg=dg.updated,hg=dg.color,gg=dg.model,_g=dg.text,vg=dg.scope,yg=dg.price,bg=dg.note,xg=dg.cases,Sg=dg.cta,Cg=t({color:()=>Og,default:()=>wg,model:()=>kg,note:()=>Ng,price:()=>Mg,scope:()=>jg,slug:()=>Eg,text:()=>Ag,title:()=>Tg,updated:()=>Dg}),wg={title:`Интернет-магазин`,slug:`dev-marketplace`,updated:new Date(17947872e5),color:`#82105c`,model:`dev-marketplace`,text:`Разработка функциональной площадки с корзиной, фильтрацией товаров и личным кабинетом покупателя на базе WordPress.
`,scope:{title:`Что входит в услугу`,items:[`Установка и настройка CMS (WordPress + WooCommerce).`,`Создание каталога товаров с категориями и фильтрами.`,`Настройка корзины и процесса оформления заказа.`,`Подключение платежных систем и интеграция с CRM.`,`Личный кабинет покупателя и история заказов.`,`Базовая SEO-оптимизация и обучение работе с сайтом.`]},price:{from:8e4,currency:`₽`},note:`Стоимость зависит от количества товаров и сложности функционала. Если требуется нестандартная логика, цена рассчитывается индивидуально.`},Tg=wg.title,Eg=wg.slug,Dg=wg.updated,Og=wg.color,kg=wg.model,Ag=wg.text,jg=wg.scope,Mg=wg.price,Ng=wg.note,Pg=t({color:()=>zg,cta:()=>Gg,default:()=>Fg,model:()=>Bg,note:()=>Wg,price:()=>Ug,scope:()=>Hg,slug:()=>Lg,text:()=>Vg,title:()=>Ig,updated:()=>Rg}),Fg={title:`Промо-сайт`,slug:`dev-promo-website`,updated:new Date(17947872e5),color:`#821025`,model:`dev-promo-website`,text:`Техническая реализация нестандартных визуальных решений, плавной анимации, параллакса и интерактивных элементов. Обеспечиваем стабильную работу сложных сценариев без потери производительности на мобильных устройствах.
`,scope:{title:`Что входит в услугу`,items:[`Верстка по макету с сохранением сложной анимации.`,`Реализация интерактивных элементов.`,`Оптимизация производительности для мобильных устройств.`,`Настройка форм обратной связи и интеграция с CRM.`,`Размещение на хостинге и настройка домена.`]},price:{from:5e4,currency:`₽`},note:`Стоимость зависит от сложности анимации и интерактивных сценариев. Включает только разработку без учета дизайна.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Ig=Fg.title,Lg=Fg.slug,Rg=Fg.updated,zg=Fg.color,Bg=Fg.model,Vg=Fg.text,Hg=Fg.scope,Ug=Fg.price,Wg=Fg.note,Gg=Fg.cta,Kg=t({color:()=>Zg,default:()=>qg,model:()=>Qg,note:()=>n_,price:()=>t_,scope:()=>e_,slug:()=>Yg,text:()=>$g,title:()=>Jg,updated:()=>Xg}),qg={title:`Веб-сервис`,slug:`dev-web-service`,updated:new Date(17947872e5),color:`#072370`,model:`dev-web-service`,text:`Проектирование архитектуры, разработка фронтенда и бэкенда, работа с базами данных и внешними API. Создаем надежные и масштабируемые веб-приложения с разграничением прав доступа и высокой отказоустойчивостью.
`,scope:{title:`Что входит в услугу`,items:[`Проектирование архитектуры и базы данных (PostgreSQL).`,`Разработка фронтенда (Vue, WordPress) и бэкенда (PHP, Laravel).`,`Интеграция с внешними API и платежными системами.`,`Настройка разграничения прав доступа (авторизация, роли).`,`Тестирование, развертывание и настройка хостинга.`,`Техническая поддержка и обновления (по запросу).`]},price:{from:15e4,currency:`₽`},note:`Стоимость зависит от сложности функционала и количества интеграций. Точная оценка дается после проработки технического задания.`},Jg=qg.title,Yg=qg.slug,Xg=qg.updated,Zg=qg.color,Qg=qg.model,$g=qg.text,e_=qg.scope,t_=qg.price,n_=qg.note,r_=t({cases:()=>m_,color:()=>c_,cta:()=>h_,default:()=>i_,model:()=>l_,note:()=>p_,price:()=>f_,scope:()=>d_,slug:()=>o_,text:()=>u_,title:()=>a_,updated:()=>s_}),i_={title:`Minecraft`,slug:`minecraft`,updated:new Date(17947008e5),color:`#40a904`,model:`minecraft`,text:`Разработка кастомных текстур-паков и ресурспаков под стилистику вашего сервера или сборки. Проектируем объемные модели блоков и предметов, прорисовываем текстуры, броню, мобов и уникальный интерфейс (GUI), создавая цельную атмосферу без потери производительности в игре.
`,scope:{title:`Что входит в услугу`,items:[`Разработка концепции и подбор стилистики.`,`Создание кастомных 3D-моделей (JSON) для блоков и предметов.`,`Отрисовка текстур (от 16x до 128x+).`,`Проработка уникального графического интерфейса (GUI).`,`Оптимизация и сборка ресурспака с инструкцией по установке.`]},price:{from:15e3,currency:`₽`},note:`Стоимость зависит от количества ассетов, разрешения текстур и сложности моделей. Ресурспаки под моды оцениваются отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`MCTPMS — база 3D-моделей и аддонов (GitHub)`,url:`https://github.com/andrejsharapov/mctpms`,created:new Date(17882208e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},a_=i_.title,o_=i_.slug,s_=i_.updated,c_=i_.color,l_=i_.model,u_=i_.text,d_=i_.scope,f_=i_.price,p_=i_.note,m_=i_.cases,h_=i_.cta,g_=t({cases:()=>E_,color:()=>x_,default:()=>__,model:()=>S_,note:()=>T_,scope:()=>w_,slug:()=>y_,text:()=>C_,title:()=>v_,updated:()=>b_}),__={title:`Unity`,slug:`unity`,updated:new Date(17947008e5),color:`#e05a5a`,model:`gamedev`,text:`Разработка мобильной 3D игры для Android.
`,scope:{title:`Что влияет на цену`,items:null},note:null,cases:{title:`Примеры работ`,labels:[{label:`Fiskania Survival`,url:`https://vk.ru/fiskaniasurvival`,created:new Date(17717184e5)}]}},v_=__.title,y_=__.slug,b_=__.updated,x_=__.color,S_=__.model,C_=__.text,w_=__.scope,T_=__.note,E_=__.cases,D_=t({cases:()=>R_,color:()=>M_,cta:()=>z_,default:()=>O_,model:()=>N_,note:()=>L_,price:()=>I_,scope:()=>F_,slug:()=>A_,text:()=>P_,title:()=>k_,updated:()=>j_}),O_={title:`HTML5 Баннер`,slug:`banner`,updated:new Date(17947872e5),color:`#e0d05a`,model:`banner`,text:`Разработка анимированных рекламных баннеров, которые привлекают внимание в медийных сетях и повышают CTR. Создаем адаптивные креативы под технические требования конкретных площадок с плавной анимацией и четким призывом к действию.
`,scope:{title:`Что входит в услугу`,items:[`Разработка визуальной концепции и анимации.`,`Создание баннера в HTML5 (с учетом требований площадок).`,`Адаптация под разные размеры (если нужно).`,`Подготовка файлов для загрузки в рекламный кабинет.`]},price:{from:7e3,currency:`₽`},note:`Стоимость указана за один баннер одного размера. Пакет баннеров обсуждается отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`Баннер (728×90) — Alpari`,url:`https://ru.pinterest.com/pin/710231803786015156/`,created:new Date(15713568e5)},{label:`Баннер (240×400) — ГК «РусТехЭксперт»`,url:`https://ru.pinterest.com/pin/710231803786015180/`,created:new Date(15215904e5)},{label:`Баннер (240×400) — uCalc`,url:`https://ru.pinterest.com/pin/710231803786015229/`,created:new Date(15157152e5)},{label:`Баннер (728×90) — uCalc`,url:`https://ru.pinterest.com/pin/710231803786015242/`,created:new Date(15077664e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},k_=O_.title,A_=O_.slug,j_=O_.updated,M_=O_.color,N_=O_.model,P_=O_.text,F_=O_.scope,I_=O_.price,L_=O_.note,R_=O_.cases,z_=O_.cta,B_=t({cases:()=>Z_,color:()=>G_,cta:()=>Q_,default:()=>V_,model:()=>K_,note:()=>X_,price:()=>Y_,scope:()=>J_,slug:()=>U_,text:()=>q_,title:()=>H_,updated:()=>W_}),V_={title:`Дизайн билборда`,slug:`billboard`,updated:new Date(17947872e5),color:`#e0d95a`,model:`billboard`,text:`Дизайн широкоформатной наружной рекламы для трасс и улиц. Выстраиваем крупную, контрастную типографику и визуальные акценты, которые мгновенно считываются с большого расстояния и в потоке движения.
`,scope:{title:`Что входит в услугу`,items:[`Разработка концепции и композиции под задачу.`,`Подбор крупных шрифтов и контрастных цветов для высокой читаемости.`,`Верстка макета под нужный формат (3×6 м, сити-форматы, суперсайты и др.).`,`Подготовка файлов к печати или трансляции (CMYK, вылеты, безопасные зоны, ТЗ оператора).`,`Адаптация одного утвержденного макета под другие размеры.`]},price:{from:8e3,currency:`₽`},note:`Стоимость зависит от формата, количества адаптаций и сложности визуала. Нестандартные конструкции рассчитываются отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`Рекламный щит подземного паркинга`,url:`https://ru.pinterest.com/pin/710231803786015665/`,created:new Date(17598816e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},H_=V_.title,U_=V_.slug,W_=V_.updated,G_=V_.color,K_=V_.model,q_=V_.text,J_=V_.scope,Y_=V_.price,X_=V_.note,Z_=V_.cases,Q_=V_.cta,$_=t({cases:()=>uv,color:()=>iv,cta:()=>dv,default:()=>ev,model:()=>av,note:()=>lv,price:()=>cv,scope:()=>sv,slug:()=>nv,text:()=>ov,title:()=>tv,updated:()=>rv}),ev={title:`Email-маркетинг`,slug:null,updated:new Date(17947872e5),color:`#a05ae0`,model:`newsletter`,text:`Создание отзывчивых и красивых электронных писем, которые помогают бизнесу выделиться и оставаться на вершине клиентской базы.

Email маркетинг — очень эффективный метод взаимодействия с вашей аудиторией. Это доступно и, как правило, имеет хороший ROI (рентабельность инвестиций). Если вы вкладываете время, усилия и финансы, необходимо знать, какую прибыль приносят ваши вложения, и насколько быстро они окупятся. Такой расчет необходим для всех составляющих маркетинга, в том числе и для рассылок по электронной почте.
`,scope:{title:`Что входит в услугу`,items:[`Разработка визуальной концепции письма и адаптация под стиль бренда.`,`Кроссбраузерная и адаптивная верстка (корректное отображение в Gmail, Яндекс.Почте, Mail.ru и на смартфонах).`,`Проработка структуры по модели AIDA.`,`Настройка переменных для персонализации.`,`Подготовка файлов к загрузке в сервис рассылок.`]},price:{from:1e4,currency:`₽`},note:`Стоимость указана за один шаблон письма. Разработка серии писем или настройка сценариев в сервисе рассылок оценивается отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`Акционное предложение для O'stin`,url:`https://ru.pinterest.com/pin/710231803748638291/`,created:new Date(1647216e6)},{label:`Вовлекающее письмо для ImKosmetik`,url:`https://ru.pinterest.com/pin/710231803748612415/`,created:new Date(16429824e5)},{label:`Поздравительное письмо для lamoda`,url:`https://ru.pinterest.com/pin/710231803748607462/`,created:new Date(16322688e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},tv=ev.title,nv=ev.slug,rv=ev.updated,iv=ev.color,av=ev.model,ov=ev.text,sv=ev.scope,cv=ev.price,lv=ev.note,uv=ev.cases,dv=ev.cta,fv=t({cases:()=>Cv,color:()=>_v,cta:()=>wv,default:()=>pv,model:()=>vv,note:()=>Sv,price:()=>xv,scope:()=>bv,slug:()=>hv,text:()=>yv,title:()=>mv,updated:()=>gv}),pv={title:`Квиз-дизайн`,slug:`quiz-design`,updated:new Date(17947872e5),color:`#5ac0d0`,model:`quiz-design`,text:`Создание интерактивных пошаговых опросов и викторин, которые вовлекают посетителя в диалог. Такой формат контента помогает собрать информацию о потенциальных покупателях, заинтересовать старую аудиторию, привлечь трафик из соцсетей и в разы повысить лояльность к бренду, мягко подводя клиента к целевому действию.
`,scope:{title:`Что входит в услугу`,items:[`Разработка логики вопросов, сценария и ветвления.`,`Дизайн экранов квиза (вопросы, подсказки, экран результата).`,`Визуальная упаковка в стиле бренда.`,`Добавление форм для сбора контактов и отправки результатов на email.`,`Подготовка макета к верстке и интеграции.`]},price:{from:15e3,currency:`₽`},note:`Стоимость зависит от количества экранов и сложности логики ветвления. Верстка, интеграция с CRM и настройка аналитики обсуждаются отдельно.`,cases:{title:`Примеры работ`,labels:[{label:`Nuti Travel: Interactive Quiz Design`,url:`https://www.behance.net/gallery/140378841/Quiz-Landing`,created:new Date(16484256e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},mv=pv.title,hv=pv.slug,gv=pv.updated,_v=pv.color,vv=pv.model,yv=pv.text,bv=pv.scope,xv=pv.price,Sv=pv.note,Cv=pv.cases,wv=pv.cta,Tv=t({color:()=>Av,cta:()=>Iv,default:()=>Ev,model:()=>jv,note:()=>Fv,price:()=>Pv,scope:()=>Nv,slug:()=>Ov,text:()=>Mv,title:()=>Dv,updated:()=>kv}),Ev={title:`Продвижение сайтов SEO`,slug:`seo`,updated:new Date(17947872e5),color:`#870e20`,model:`seo`,text:`Комплексная поисковая оптимизация для вывода сайта в топ выдачи и привлечения целевого органического трафика. Проводим технический аудит, собираем семантическое ядро, оптимизируем структуру страниц и метатеги для стабильного роста позиций.
`,scope:{title:`Что входит в услугу`,items:[`Технический аудит сайта.`,`Сбор и кластеризация семантического ядра.`,`Оптимизация структуры страниц и метатегов.`,`Работа с контентом (рекомендации по текстам).`,`Анализ конкурентов и построение стратегии.`,`Ежемесячный отчет и корректировка стратегии.`]},price:{from:25e3,currency:`₽`},note:`Стоимость указана за один месяц ведения. Минимальный срок работы 3 месяца.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Dv=Ev.title,Ov=Ev.slug,kv=Ev.updated,Av=Ev.color,jv=Ev.model,Mv=Ev.text,Nv=Ev.scope,Pv=Ev.price,Fv=Ev.note,Iv=Ev.cta,Lv=t({cases:()=>Jv,color:()=>Hv,cta:()=>Yv,default:()=>Rv,model:()=>Uv,note:()=>qv,price:()=>Kv,scope:()=>Gv,slug:()=>Bv,text:()=>Wv,title:()=>zv,updated:()=>Vv}),Rv={title:`Буклет и флаер`,slug:`booklet`,updated:new Date(17948736e5),color:`#7be05a`,model:`booklet`,text:`Верстка раздаточной полиграфии, лифлетов и многостраничных брошюр. Грамотно структурируем текст, подбираем шрифтовые пары и готовим макет с учетом фальцовки и технических требований типографии.
`,scope:{title:`Что входит в услугу`,items:[`Верстка текста и подбор шрифтовых пар.`,`Создание модульной сетки для многостраничных изданий.`,`Учет фальцовки (сгибов) при подготовке макета.`,`Подготовка файла к печати (CMYK, вылеты, шрифты в кривых).`]},price:{from:6e3,currency:`₽`},note:`Стоимость указана за буклет до 4 полос (сгибов). Многостраничные брошюры считаются постранично.`,cases:{title:`Примеры работ`,labels:[{label:`Дизайн лифлета для АО «ФГК»`,url:`https://www.behance.net/gallery/258527731/Leaflet-Design-Client-Portal-Federal-Freight-Company`,created:new Date(1667952e6)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},zv=Rv.title,Bv=Rv.slug,Vv=Rv.updated,Hv=Rv.color,Uv=Rv.model,Wv=Rv.text,Gv=Rv.scope,Kv=Rv.price,qv=Rv.note,Jv=Rv.cases,Yv=Rv.cta,Xv=t({color:()=>ty,cta:()=>sy,default:()=>Zv,model:()=>ny,note:()=>oy,price:()=>ay,scope:()=>iy,slug:()=>$v,text:()=>ry,title:()=>Qv,updated:()=>ey}),Zv={title:`Визитная карточка`,slug:`business-card`,updated:new Date(17948736e5),color:`#5ae0d0`,model:`business-card`,text:`Разработка стильных деловых и личных визиток, которые работают на первое впечатление о бренде. Подбираем гармоничную композицию, читаемые шрифты и даем рекомендации по выбору бумаги, тиснения или лакировки.
`,scope:{title:`Что входит в услугу`,items:[`Разработка дизайна лицевой и оборотной стороны.`,`Подбор шрифтов и цветовой палитры.`,`Подготовка макета к печати (с учетом вылетов и красок).`,`Рекомендации по выбору бумаги и постпечатной обработки.`]},price:{from:3e3,currency:`₽`},note:null,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Qv=Zv.title,$v=Zv.slug,ey=Zv.updated,ty=Zv.color,ny=Zv.model,ry=Zv.text,iy=Zv.scope,ay=Zv.price,oy=Zv.note,sy=Zv.cta,cy=t({cases:()=>yy,color:()=>py,cta:()=>by,default:()=>ly,model:()=>my,note:()=>vy,price:()=>_y,scope:()=>gy,slug:()=>dy,text:()=>hy,title:()=>uy,updated:()=>fy}),ly={title:`Сертификат и открытка`,slug:`certificate`,updated:new Date(17948736e5),color:`#5a63e0`,model:`certificate`,text:`Оформление подарочных сертификатов, дипломов, пригласительных и фирменных открыток. Создаем аккуратную и статусную типографическую композицию, полностью готовую к цифровой или офсетной печати.
`,scope:{title:`Что входит в услугу`,items:[`Разработка дизайна (лицо и оборот).`,`Создание типографической композиции.`,`Подготовка макета к печати (вылеты, шрифты).`,`Добавление полей для персонализации.`]},price:{from:4e3,currency:`₽`},note:`Стоимость зависит от сложности декора и количества листов.`,cases:{title:`Примеры работ`,labels:[{label:`Подарочный сертификат для СК «Кант»`,url:`https://www.behance.net/gallery/258556225/podarochnyj-sertifikat-dlja-sk-kant`,created:new Date(16989696e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},uy=ly.title,dy=ly.slug,fy=ly.updated,py=ly.color,my=ly.model,hy=ly.text,gy=ly.scope,_y=ly.price,vy=ly.note,yy=ly.cases,by=ly.cta,xy=t({color:()=>Ey,cta:()=>My,default:()=>Sy,model:()=>Dy,note:()=>jy,price:()=>Ay,scope:()=>ky,slug:()=>wy,text:()=>Oy,title:()=>Cy,updated:()=>Ty}),Sy={title:`Меню для кафе`,slug:`menu`,updated:new Date(17948736e5),color:`#895ae0`,model:`menu`,text:`Дизайн и верстка меню для ресторанов, кафе и баров. Прорабатываем удобную рубрикацию, акцентируем внимание на маржинальных позициях и подбираем шрифты, которые легко читаются даже при приглушенном освещении.
`,scope:{title:`Что входит в услугу`,items:[`Разработка структуры и рубрикации.`,`Дизайн и верстка (с учетом освещения и материалов).`,`Акцентирование внимания на ключевых позициях.`,`Подготовка макета к печати или публикации (QR-меню).`]},price:{from:1e4,currency:`₽`},note:`Стоимость зависит от количества разворотов и сложности дизайна.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Cy=Sy.title,wy=Sy.slug,Ty=Sy.updated,Ey=Sy.color,Dy=Sy.model,Oy=Sy.text,ky=Sy.scope,Ay=Sy.price,jy=Sy.note,My=Sy.cta,Ny=t({color:()=>Ry,cta:()=>Wy,default:()=>Py,model:()=>zy,note:()=>Uy,price:()=>Hy,scope:()=>Vy,slug:()=>Iy,text:()=>By,title:()=>Fy,updated:()=>Ly}),Py={title:`Упаковка и этикетки`,slug:`packaging`,updated:new Date(17948736e5),color:`#5ae09f`,model:`packaging`,text:`Разработка дизайна коробок, этикеток и наклеек, выделяющих товар на полке. Продумываем иерархию информации на лицевой стороне, аккуратно верстаем технические блоки с составом и готовим развертку к производству.
`,scope:{title:`Что входит в услугу`,items:[`Анализ конкурентов и целевой аудитории.`,`Разработка концепции упаковки.`,`Создание дизайна и подготовка развертки.`,`Верстка технических блоков (состав, штрихкод, сроки).`,`Подготовка макета к печати и согласование с типографией.`]},price:{from:2e4,currency:`₽`},note:`Стоимость зависит от сложности конструкции упаковки и количества SKU.`,cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},Fy=Py.title,Iy=Py.slug,Ly=Py.updated,Ry=Py.color,zy=Py.model,By=Py.text,Vy=Py.scope,Hy=Py.price,Uy=Py.note,Wy=Py.cta,Gy=t({cases:()=>nb,color:()=>Xy,cta:()=>rb,default:()=>Ky,model:()=>Zy,note:()=>tb,price:()=>eb,scope:()=>$y,slug:()=>Jy,text:()=>Qy,title:()=>qy,updated:()=>Yy}),Ky={title:`Плакат и афиша`,slug:`poster`,updated:new Date(17948736e5),color:`#e05a5a`,model:`poster`,text:`Создание выразительных плакатов для мероприятий, рекламных кампаний и оформления интерьеров. Используем акцидентную типографику, модульные сетки и смелую композицию, чтобы притягивать взгляд с первых секунд.
`,scope:{title:`Что входит в услугу`,items:[`Разработка концепции и поиск визуального образа.`,`Создание макета в нужном формате (A3, A2, A1).`,`Работа с акцидентной типографикой и графикой.`,`Подготовка файла к печати (CMYK, вылеты).`]},price:{from:6e3,currency:`₽`},note:`Стоимость указана за один макет. Серия постеров рассчитывается индивидуально.`,cases:{title:`Примеры работ`,labels:[{label:`Широкоформатный информационный плакат для «МПГУ»`,url:`https://www.behance.net/gallery/258529237/shirokoformatnyj-informacionnyj-plakat-dlja-mpgu`,created:new Date(16497216e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},qy=Ky.title,Jy=Ky.slug,Yy=Ky.updated,Xy=Ky.color,Zy=Ky.model,Qy=Ky.text,$y=Ky.scope,eb=Ky.price,tb=Ky.note,nb=Ky.cases,rb=Ky.cta,ib=t({cases:()=>hb,color:()=>lb,cta:()=>gb,default:()=>ab,model:()=>ub,note:()=>mb,price:()=>pb,scope:()=>fb,slug:()=>sb,text:()=>db,title:()=>ob,updated:()=>cb}),ab={title:`Айдентика бренда`,slug:`identity-brand`,updated:new Date(17947872e5),color:`#a05ae0`,model:`identity-brand`,text:`Создание целостного визуального образа компании с нуля. Разрабатываем логотип, подбираем фирменную цветовую палитру, шрифтовые пары и графические паттерны, а также собираем руководство по стилю, чтобы бренд выглядел единообразно на сайте, в соцсетях и на физических носителях.
`,scope:{title:`Что мы делаем`,items:[`Анализ ниши, конкурентов и целевой аудитории.`,`Разработка логотипа (основная и адаптированные версии).`,`Подбор фирменной цветовой палитры и типографики.`,`Создание графических элементов, иконок и стикерпаков.`,`Дизайн полиграфии (визитки, открытки, сертификаты, баннеры).`,`Оформление соцсетей и мессенджеров (аватары, обложки, меню).`,`Сборка краткого руководства по использованию стиля (гайдлайна).`]},price:{from:6e4,currency:`₽`},note:null,cases:{title:`Примеры работ`,labels:[{label:`Айдентика ателье DofiDream`,url:`https://www.behance.net/gallery/258536129/DofiDream-Brand-Identity-for-Pet-Atelier`,created:new Date(17562528e5)}]},cta:{text:`Обсудить проект`,url:`https://t.me/andrejsharapov`}},ob=ab.title,sb=ab.slug,cb=ab.updated,lb=ab.color,ub=ab.model,db=ab.text,fb=ab.scope,pb=ab.price,mb=ab.note,hb=ab.cases,gb=ab.cta,_b=Object.assign({"./api/3d/about.yaml":Ud,"./api/_company/about.yaml":Yd,"./api/design/about.yaml":tf,"./api/design-website/about.yaml":cf,"./api/development/about.yaml":mf,"./api/games/about.yaml":bf,"./api/marketing/about.yaml":Ef,"./api/print/about.yaml":Mf,"./api/startap/about.yaml":Rf}),vb=Object.assign({"./api/3d/content/blender.yaml":Wf,"./api/3d/content/blockbench.yaml":np,"./api/design/content/application.yaml":mp,"./api/design/content/icon.yaml":xp,"./api/design/content/illustration.yaml":Np,"./api/design/content/logotype.yaml":Kp,"./api/design/content/merch.yaml":am,"./api/design/content/social-media.yaml":vm,"./api/design/content/sticker.yaml":Am,"./api/design-website/content/des-business-card-website.yaml":Um,"./api/design-website/content/des-landing-page.yaml":nh,"./api/design-website/content/des-marketplace.yaml":hh,"./api/design-website/content/des-promo-website.yaml":Eh,"./api/design-website/content/des-web-service.yaml":Rh,"./api/development/content/dev-business-card-website.yaml":Zh,"./api/development/content/dev-landing-page.yaml":ug,"./api/development/content/dev-marketplace.yaml":Cg,"./api/development/content/dev-promo-website.yaml":Pg,"./api/development/content/dev-web-service.yaml":Kg,"./api/games/content/minecraft.yaml":r_,"./api/games/content/unity.yaml":g_,"./api/marketing/content/banner.yaml":D_,"./api/marketing/content/billboard.yaml":B_,"./api/marketing/content/newsletter.yaml":$_,"./api/marketing/content/quiz-design.yaml":fv,"./api/marketing/content/seo.yaml":Tv,"./api/print/content/booklet.yaml":Lv,"./api/print/content/business-card.yaml":Xv,"./api/print/content/certificate.yaml":cy,"./api/print/content/menu.yaml":xy,"./api/print/content/packaging.yaml":Ny,"./api/print/content/poster.yaml":Gy,"./api/startap/content/identity-brand.yaml":ib});function yb(e){return typeof e==`string`?e.trim().toLowerCase():null}var bb={};for(let[e,t]of Object.entries(_b)){let n=e.match(/^\.\/api\/([^/]+)\/about\.yaml$/);if(!n)continue;let[,r]=n;bb[r]||(bb[r]={about:null,content:[]});let i={...t.default};Array.isArray(i.menu)&&(i.menu=i.menu.map(yb).filter(Boolean)),bb[r].about=i}for(let[e,t]of Object.entries(vb)){let n=e.match(/^\.\/api\/([^/]+)\/content\/(.+)\.yaml$/);if(!n)continue;let[,r,i]=n;bb[r]||(bb[r]={about:null,content:[]});let a={...t.default};a.slug=yb(a.slug),a.slug&&bb[r].content.push({file:i,data:a})}for(let e of Object.keys(bb))bb[e].content.sort((e,t)=>e.file.localeCompare(t.file)),bb[e].content=bb[e].content.map(e=>e.data);var xb=2.6;function Sb(e){return 10+e*.75}var Cb={forest:{grassTop:8044672,grassSide:5939296,sand:7040888,rock:7040888,rockDark:4869461,trunk:5914410,leaves:4889146,treeChance:1,rockChance:.5,treeStyle:`oak`,structureStyle:`mountain`,structureMinContent:6,decorStyle:`hut`,bushChance:.8,bushStyle:`green`},rocky:{grassTop:9083534,grassSide:7306612,sand:7306612,rock:5922664,rockDark:3816773,trunk:5917242,leaves:4876874,treeChance:.35,rockChance:2.2,treeStyle:`pine`,structureStyle:`mountain`,structureMinContent:6,decorStyle:`cave`,bushChance:0},sandy:{grassTop:14731658,grassSide:13677688,sand:15259816,rock:12626040,rockDark:10126688,trunk:9072720,leaves:8036432,treeChance:.9,rockChance:1.4,treeStyle:`cactus`,structureStyle:`pyramid`,structureMinContent:4,decorStyle:`desert-hut`,bushChance:0},snowy:{grassTop:15266040,grassSide:13162728,sand:13688040,rock:5923960,rockDark:3818584,trunk:4864554,leaves:14215408,treeChance:.6,rockChance:1.2,treeStyle:`snowpine`,structureStyle:`mountain`,structureMinContent:6,decorStyle:`yurt`,bushChance:.8,bushStyle:`snow`},tropical:{grassTop:7191390,grassSide:5940562,sand:5921370,rock:8026746,rockDark:5921370,trunk:9071178,leaves:4892746,treeChance:.9,rockChance:1,treeStyle:`palm`,structureStyle:`volcano`,structureMinContent:3,decorStyle:`tropical-hut`,bushChance:0}},wb=[`forest`,`rocky`,`sandy`,`tropical`,`snowy`];function Tb(e){return Cb[e]??Cb.forest}function Eb(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Db(e,t){let n=Eb(t*3+1),r=[{k:1,a:.08+n()*.06,p:n()*Math.PI*2},{k:2,a:.05+n()*.04,p:n()*Math.PI*2},{k:3,a:.04+n()*.03,p:n()*Math.PI*2},{k:4,a:.03+n()*.02,p:n()*Math.PI*2},{k:5,a:.02+n()*.02,p:n()*Math.PI*2}];function i(t){let n=1;for(let e of r)n+=e.a*Math.sin(e.k*t+e.p);return e*n}return{radiusAt:i,baseRadius:e}}function Ob(e,t,n=.02,r=0){let i=Eb(r),a=e.attributes.position,o=new Map;for(let e=0;e<a.count;e++){let r=a.getX(e),s=a.getY(e),c=a.getZ(e);if(Math.hypot(r,c)<1e-4)continue;let l=Math.atan2(c,r),u=`${Math.round(Math.cos(l)*100)}|${Math.round(Math.sin(l)*100)}|${Math.round(s*1e3)/1e3}`,d=o.get(u);d===void 0&&(d=1+(i()-.5)*2*n,o.set(u,d));let f=t.radiusAt(l)/t.baseRadius*d;a.setX(e,r*f),a.setZ(e,c*f)}return a.needsUpdate=!0,e.computeVertexNormals(),e}var kb=[16767916,15843965,14724201,13010498,9262372],Ab=[2890520,4861725,9067066,13935449,14211292],jb=new pn,Mb=new Mt,Nb=new U;function Pb(e){return e.getWorldQuaternion(Mb),jb.setFromQuaternion(Mb,`YXZ`),jb.y}function Fb(e,t,n){let r=kb[Math.floor(t()*kb.length)],i=Ab[Math.floor(t()*Ab.length)],a=new Q({color:e,roughness:.75,flatShading:!0}),o=new Q({color:3095372,roughness:.9,flatShading:!0}),s=new Q({color:r,roughness:.85,flatShading:!0}),c=new Q({color:i,roughness:.95,flatShading:!0}),l=.55,u=.85,d=new J(new Y(l,u,l),new q({transparent:!0,opacity:0,depthWrite:!1})),f=new W;f.position.y=-.85/2,f.scale.setScalar(.75),f.rotation.y=t()*Math.PI*2,d.add(f);let p=new W;p.rotation.order=`YXZ`,f.add(p);let m=0,h=.34,g=.11;for(let e of[-1,1]){let t=new J(new Y(g,h,g),o);t.position.set(e*.08,h/2,0),t.castShadow=!0,t.receiveShadow=!0,p.add(t)}let _=new J(new X(.15,.18,.36,6),a);_.scale.set(1.1,1,.7),_.position.y=.52,_.castShadow=!0,_.receiveShadow=!0,p.add(_);let v=[];for(let e of[-1,1]){let t=new W;t.position.set(e*.21,.7-.04,0);let n=new J(new Y(.085,.32,.085),a);n.position.set(0,-.32/2,0),n.castShadow=!0,t.add(n);let r=new J(new Y(.075,.075,.075),s);r.position.set(0,-.34,0),t.add(r),t.rotation.z=e*.14,p.add(t),v.push({shoulder:t,side:e})}let y=.24,b=.84,x=new J(new ia(y*.62,0),s);x.position.y=b,x.castShadow=!0,p.add(x);let S=new q({color:1710618});for(let e of[-1,1]){let t=new J(new Y(.03,.03,.02),S);t.position.set(e*.055,.85,y*.54),p.add(t)}let C=Math.floor(t()*7),w=y*.62;if(C===0){let e=new J(new ia(w*1.06,0),c);e.position.set(0,.881664,-.1488*.18),e.scale.set(1.02,.85,1),e.castShadow=!0,p.add(e)}else if(C===1){let e=new J(new ia(w*1.04,0),c);e.position.set(0,.88464,-.1488*.24),e.scale.set(1.02,.86,.96),e.castShadow=!0,p.add(e);let t=new J(new ia(w*.48,0),c);t.position.set(0,.96648,-.1488*.45),t.scale.set(1.05,.9,1.05),t.castShadow=!0,p.add(t)}else if(C===2){let e=new J(new ia(w*1.08,0),c);e.position.set(0,.881664,-.1488*.18),e.scale.set(1.03,.88,1.02),e.castShadow=!0,p.add(e);let t=new J(new Po(w*.32,6,4),a);t.position.set(0,.86232,-.151776),p.add(t);let n=new J(new X(w*.26,w*.14,w*1.15,6),c);n.position.set(0,b-w*.25,-.1488*1.15),n.rotation.x=.28,n.castShadow=!0,p.add(n)}else if(C===3){let e=new J(new X(w*1.65,w*1.65,.022,8),c);e.position.set(0,.90696,-.1488*.05),e.rotation.x=-.08,e.castShadow=!0,p.add(e);let t=new J(new X(w*.85,w*1.02,w*.75,8),c);t.position.set(0,.962016,-.011904),t.rotation.x=-.08,t.castShadow=!0,p.add(t)}else if(C===4){let e=new J(new ia(w*1.05,0),c);e.position.set(0,.881664,-.1488*.22),e.scale.set(1.02,.85,.96),e.castShadow=!0,p.add(e);for(let e of[-1,1]){let t=new J(new ia(w*.42,0),c);t.position.set(e*w*.85,.956064,-.1488*.22),t.castShadow=!0,p.add(t)}}else if(C===5){let e=new J(new ia(w*1.06,0),c);e.position.set(0,.88464,-.1488*.22),e.scale.set(1.04,.88,.98),e.castShadow=!0,p.add(e);let t=new J(new Y(w*1.85,w*1.15,w*.75),c);t.position.set(0,b-w*.15,-.09672),t.castShadow=!0,p.add(t);for(let e of[-1,1]){let t=new J(new Y(w*.36,w*1.15,w*.65),c);t.position.set(e*w*.88,b-w*.15,-.1488*.22),t.castShadow=!0,p.add(t)}}else{let e=new J(new ia(w*1.03,0),c);e.position.set(0,.8786879999999999,-.1488*.24),e.scale.set(.98,.84,.95),e.castShadow=!0,p.add(e);let t=[{y:w*.96,z:.02,sy:.42},{y:w*.92,z:-.1488*.35,sy:.48},{y:w*.72,z:-.1488*.72,sy:.4}];for(let e of t){let t=new J(new ia(w*.34,0),c);t.scale.set(.55,1.25,1.1),t.position.set(0,b+e.y,e.z),t.castShadow=!0,p.add(t)}}let T=t()*Math.PI*2,E=0,D=0,O=!1,k=.6,A=.65;function j(){E=k}function M(e,t=.016){p.rotation.set(0,p.rotation.y,0);let r=d.userData.hovered,i=0;if(r&&n){d.getWorldPosition(Nb);let e=n.position.x-Nb.x,t=n.position.z-Nb.z;for(i=Math.atan2(e,t)-Pb(f);i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2}let a=i-m;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;if(m+=a*(1-Math.exp(-t*8)),p.rotation.y=m,E>0){E-=t,E<0&&(E=0);let e=1-E/k,n=Math.sin(e*Math.PI)*.55;p.position.y=n;let i=Math.sin(e*Math.PI);for(let{shoulder:e,side:t}of v)e.rotation.z=t*(.14+i*2.45),e.rotation.x=-i*.25;p.rotation.z=Math.sin(e*Math.PI*2)*.06,O=r;return}if(r&&!O&&(D=A),O=r,D>0){D-=t,D<0&&(D=0);let e=1-D/A,n=Math.sin(e*Math.PI),r=Math.sin(e*Math.PI*4)*.32*n;for(let{shoulder:e,side:t}of v)t===1?(e.rotation.z=.14+n*2.35+r,e.rotation.x=-n*.35):(e.rotation.z=-.14-n*.08,e.rotation.x=0);p.rotation.z=-n*.06,p.position.y=n*.07;return}p.position.y+=(0-p.position.y)*.2;let o=Math.sin(e*2.2+T)*.04;p.rotation.z=o;for(let{shoulder:e,side:t}of v)e.rotation.z=t*.14+o*.5,e.rotation.x=0}return{hitbox:d,hitH:u,update:M,triggerJump:j,visual:f,armPivots:v,bodyGroup:p}}function Ib(e,t,n){let r=Fb(e,t,n),i=new Q({color:1711654,roughness:.4,metalness:.3}),a=new W;a.position.set(0,.85,.1488*.96);for(let e of[-1,1]){let t=new J(new Fo(.032,.005,4,4),i);t.rotation.z=Math.PI/4,t.position.x=e*.055,a.add(t)}let o=new J(new Y(.04,.007,.007),i);a.add(o),r.bodyGroup.add(a);let s=new W;r.visual.add(s);let c=new Y(.24,.24,.24),l=new J(c,new Q({color:3900150,roughness:.35,flatShading:!0}));l.position.set(.46,.62,.08),l.rotation.set(.4,.6,.2),l.castShadow=!0;let u=new la(c),d=new Ai({color:16777215}),f=new Hi(u,d);l.add(f);let p=new q({color:16436245}),m=new Y(.025,.025,.025);for(let e of[-.12,.12])for(let t of[-.12,.12])for(let n of[-.12,.12]){let r=new J(m,p);r.position.set(e,t,n),l.add(r)}s.add(l);let h=new Ao(.12,0),g=new J(h,new Q({color:16007006,roughness:.3,flatShading:!0}));g.position.set(-.44,.85,.05);let _=new Hi(new la(h),d);g.add(_),s.add(g);let v=new W;v.position.set(.44,.05,.12);let y=[{color:15680580,rot:[0,0,-Math.PI/2],pos:[.09,0,0]},{color:2278750,rot:[0,0,0],pos:[0,.09,0]},{color:3900150,rot:[Math.PI/2,0,0],pos:[0,0,.09]}];for(let e of y){let t=new q({color:e.color}),n=new J(new X(.008,.008,.18,4),t);n.rotation.set(...e.rot),n.position.set(...e.pos),v.add(n);let r=new J(new na(.02,.05,4),t);r.rotation.set(...e.rot),r.position.set(e.pos[0]*2.1,e.pos[1]*2.1,e.pos[2]*2.1),v.add(r)}s.add(v);let b=r.update;return r.update=function(e,t){b(e,t),l.rotation.y=e*.9,l.rotation.x=.4+Math.sin(e*1.4)*.25,l.position.y=.62+Math.sin(e*2.2)*.05,g.rotation.y=-e*1.3,g.rotation.z=e*.7,g.position.y=.85+Math.cos(e*2)*.05},r}function Lb(e,t,n){let r=Fb(e,t,n),i=new W;r.visual.add(i);let a=.56,o=new Y(a,a,a),s=new J(o,new Q({color:new G(e).lerp(new G(16777215),.15),roughness:.45,metalness:.1,flatShading:!0}));s.position.set(.55,a/2,.08),s.rotation.y=(t()-.5)*.6,s.castShadow=!0,s.receiveShadow=!0;let c=new Hi(new la(o),new Ai({color:16777215,transparent:!0,opacity:.35}));return s.add(c),i.add(s),r}function Rb(e,t,n){let r=Fb(e,t,n),i=.1488;for(;r.bodyGroup.children.length>9;){let e=r.bodyGroup.children[r.bodyGroup.children.length-1];r.bodyGroup.remove(e)}let a=new Q({color:13126449,roughness:.85,flatShading:!0}),o=new W;o.position.set(.02,.947136,-.02),o.rotation.set(-.1,0,-.22);let s=new J(new X(i*1.35,i*.95,.075,8),a);s.castShadow=!0,o.add(s);let c=new J(new X(.012,.015,.04,4),a);c.position.y=.045,o.add(c),r.bodyGroup.add(o);let l=r.armPivots.find(e=>e.side===1)?.shoulder;if(l){let e=new W;e.position.set(0,-.34,.04),e.rotation.x=.65;let t=new J(new X(.008,.012,.34,5),new Q({color:7227179,roughness:.8,flatShading:!0}));t.position.y=.08,t.castShadow=!0,e.add(t);let n=new J(new X(.012,.012,.04,5),new Q({color:13620958,metalness:.6,roughness:.3}));n.position.y=.26,e.add(n);let r=new J(new na(.018,.06,5),new Q({color:3900150,roughness:.5,flatShading:!0}));r.position.y=.31,e.add(r),l.add(e)}let u=r.armPivots.find(e=>e.side===-1)?.shoulder;if(u){let e=new W;e.position.set(-.04,-.33,.08),e.rotation.set(.35,.2,.25);let t=new X(.16,.16,.018,8);t.scale(1.15,1,.85);let n=new J(t,new Q({color:13935449,roughness:.85,flatShading:!0}));n.castShadow=!0,e.add(n);let r=[15680580,2278750,3900150,16436245];for(let t=0;t<r.length;t++){let n=t/r.length*Math.PI*1.4-.5,i=new J(new ia(.026,0),new Q({color:r[t],roughness:.4,flatShading:!0}));i.scale.y=.45,i.position.set(Math.cos(n)*.1,.012,Math.sin(n)*.08),e.add(i)}u.add(e)}return r}function zb(e,t,n){let r=Fb(e,t,n),i=new G(e),[a,o]=r.bodyGroup.children,s=-.23;for(let[e,t]of[[a,-1],[o,1]])e&&(e.rotation.x=-Math.PI/2,e.rotation.z=t*.18,e.position.set(t*.1,.285,.18));let c=new W;c.position.set(.05,.008,.48),c.rotation.y=-.18,r.visual.add(c);let l=new J(new Y(.56,.012,.44),new Q({color:16447214,roughness:.9,flatShading:!0}));l.receiveShadow=!0,c.add(l);let u=[{geo:new ta(.075,8),color:16758531,pos:[-.14,.008,-.08]},{geo:new ta(.11,3),color:i,pos:[-.02,.009,.04]},{geo:new ta(.085,3),color:3900150,pos:[.11,.01,.06]},{geo:new ta(.04,6),color:1096065,pos:[.13,.008,-.09]}];for(let e of u){let t=new J(e.geo,new q({color:e.color}));t.rotation.x=-Math.PI/2,t.position.set(...e.pos),c.add(t)}let d=new W;d.position.set(-.34,.01,.36),d.rotation.y=.4,r.visual.add(d);let f=new X(.13,.13,.014,8);f.scale(1.15,1,.85);let p=new J(f,new Q({color:13935449,roughness:.85,flatShading:!0}));p.castShadow=!0,p.receiveShadow=!0,d.add(p);let m=[15680580,3900150,16436245,1096065];for(let e=0;e<m.length;e++){let t=e/m.length*Math.PI*1.4-.5,n=new J(new ia(.022,0),new q({color:m.at(e)}));n.scale.y=.4,n.position.set(Math.cos(t)*.08,.01,Math.sin(t)*.065),d.add(n)}let h=new W;h.position.set(.38,0,.34),r.visual.add(h);let g=new J(new X(.045,.038,.11,7),new Q({color:6583435,roughness:.6,flatShading:!0}));g.position.y=.055,g.castShadow=!0,h.add(g);for(let[e,t,n,r]of[[-.012,.01,.18,15680580],[.014,-.01,-.22,3900150]]){let i=new J(new X(.006,.009,.22,4),new Q({color:8147762}));i.position.set(e,.11,t),i.rotation.z=n,h.add(i);let a=new J(new na(.012,.035,4),new q({color:r}));a.position.set(e-Math.sin(n)*.11,.22,t),a.rotation.z=n,h.add(a)}let _=r.armPivots.find(e=>e.side===1)?.shoulder,v=r.armPivots.find(e=>e.side===-1)?.shoulder;if(_){let e=new W;e.position.set(0,-.34,.03),e.rotation.x=Math.PI*.78;let t=new J(new X(.008,.011,.28,5),new Q({color:8147762,roughness:.85,flatShading:!0}));t.position.y=.06,t.castShadow=!0,e.add(t);let n=new J(new na(.017,.055,5),new Q({color:i,roughness:.4,flatShading:!0}));n.position.y=.22,e.add(n),_.add(e)}let y=t()*Math.PI*2,b=r.update;return r.update=function(e,t=.016){r.bodyGroup.position.y-=s,b(e,t),r.bodyGroup.position.y+=s,r.hitbox.userData.hovered?r.bodyGroup.rotation.x=0:(r.bodyGroup.rotation.x=.22+Math.sin(e*1.8+y)*.04,_&&(_.rotation.x=-.82+Math.sin(e*4.2+y)*.14,_.rotation.z=.12+Math.cos(e*2.7+y)*.18),v&&(v.rotation.x=-.25,v.rotation.z=-.32))},r}function Bb(e,t,n=1){let r=new W,i=new J(e,new q({color:16777215,side:2}));i.scale.set(1.24,1.24,1),r.add(i);let a=new J(e,new q({color:t,side:2}));return a.position.z=.003,r.add(a),r.scale.setScalar(n),r}function Vb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder,s=new W;s.position.set(.06,0,.44),s.rotation.y=Math.PI-.14,r.visual.add(s);let c=1.06,l=new Q({color:4674921,roughness:.92,flatShading:!0}),u=new J(new Y(.68,c,.09),l);u.position.y=c/2,u.castShadow=!0,u.receiveShadow=!0,s.add(u);let d=new Q({color:3359061,roughness:.85,flatShading:!0}),f=new J(new Y(.7200000000000001,.08,.12),d);f.position.y=.04,f.castShadow=!0,s.add(f);let p=new J(new Y(.7200000000000001,.05,.12),d);p.position.y=1.085,p.castShadow=!0,s.add(p);let m=[{geo:new ta(.065,5),color:16734558,x:-.18,y:.86,rot:.25},{geo:new ta(.06,8),color:16763450,x:.16,y:.88,rot:-.2},{geo:new Z(.11,.11),color:9095462,x:0,y:.92,rot:.75},{geo:new ta(.068,3),color:1671876,x:-.2,y:.42,rot:-.35},{geo:new Z(.14,.07),color:11032055,x:.15,y:.36,rot:.15},{geo:new ta(.055,6),color:16347926,x:.02,y:.24,rot:-.1},{geo:new ta(.062,5),color:440020,x:-.16,y:.64,rot:.4},{geo:new Z(.1,.1),color:15485081,x:.18,y:.62,rot:.6}];for(let e of m){let t=Bb(e.geo,e.color);t.position.set(e.x,e.y,.049),t.rotation.z=e.rot,s.add(t)}let h=[{x:-.02,y:.72,rot:-.18,color:i},{x:.04,y:.54,rot:.22,color:16436245},{x:-.05,y:.46,rot:-.12,color:2278750}],g=h.map((e,t)=>{let n=Bb(t===0?new ta(.072,6):t===1?new Z(.12,.12):new ta(.068,5),e.color);return n.position.set(e.x,e.y,.053000000000000005),n.rotation.z=e.rot,n.visible=!1,s.add(n),n}),_=Bb(new ta(.075,6),i);a&&(_.position.set(0,-.35,.04),_.rotation.x=-.35,a.add(_));let v=t()*6,y=r.update;return r.update=function(e,t=.016){if(y(e,t),r.hitbox.userData.hovered){_.visible=!0,_.material?.color?.set?.(i);return}r.bodyGroup.rotation.y=-.06999999999999999;let n=2.2,s=(e+v)%(n*3)/n,c=Math.floor(s),l=s%1,u=h[c].color;_.children[1].material.color.set(u);for(let e=0;e<g.length;e++)if(e<c)g[e].visible=!0,g[e].scale.setScalar(1);else if(e===c){if(g[e].visible=l>=.55,l>=.55){let t=Math.min(1,(l-.55)/.15);g[e].scale.setScalar(1+Math.sin(t*Math.PI)*.25)}}else g[e].visible=!1;if(l<.35){let e=l/.35;_.visible=!0,a&&(a.rotation.x=V.lerp(-.3,-.65,e),a.rotation.z=.25),o&&(o.rotation.x=V.lerp(-.2,-.6,e),o.rotation.z=-.25)}else if(l<.55){let e=(l-.35)/.2;_.visible=!0,a&&(a.rotation.x=V.lerp(-.65,-1.25,e),a.rotation.z=.12),o&&(o.rotation.x=-.35,o.rotation.z=-.18)}else if(l<.75){let e=(l-.55)/.2;_.visible=!1,a&&(a.rotation.x=-1.25+Math.sin(e*Math.PI*3)*.08,a.rotation.z=.12+Math.cos(e*Math.PI*2)*.12)}else{let e=(l-.75)/.25;_.visible=!1,a&&(a.rotation.x=V.lerp(-1.25,-.3,e),a.rotation.z=.14)}},r}function Hb(e,t,n){let r=Fb(e,t,n),i=r.armPivots.find(e=>e.side===1)?.shoulder;if(i){let e=new J(new X(.01,.004,.28,5),new Q({color:1975344,roughness:.4,metalness:.4}));e.position.set(0,-.33,.04),e.rotation.x=.7,i.add(e)}let a=new W;a.position.set(.54,.68,.1),a.rotation.y=-.35,r.visual.add(a);let o=[{x:-.13,y:.13,bg:3900150,iconColor:16777215,type:`star`},{x:.13,y:.13,bg:16007006,iconColor:16777215,type:`heart`},{x:-.13,y:-.13,bg:1096065,iconColor:16777215,type:`play`},{x:.13,y:-.13,bg:16096779,iconColor:16777215,type:`bolt`}],s=[];for(let e=0;e<o.length;e++){let t=o[e],n=new W;n.position.set(t.x,t.y,0);let r=new J(new Y(.21,.21,.035),new Q({color:t.bg,roughness:.35,flatShading:!0}));r.castShadow=!0,n.add(r);let i=new q({color:t.iconColor}),c;t.type===`star`?c=new J(new Ao(.055,0),i):t.type===`heart`?(c=new J(new Y(.08,.08,.045),i),c.rotation.z=Math.PI/4):t.type===`play`?(c=new J(new na(.055,.09,3),i),c.rotation.z=-Math.PI/2):c=new J(new Fo(.045,.016,4,6),i),c.position.z=.012,n.add(c),a.add(n),s.push(n)}let c=r.update;return r.update=function(e,t){c(e,t),a.position.y=.68+Math.sin(e*2)*.04;for(let t=0;t<s.length;t++)s[t].position.z=Math.sin(e*2.8+t*1.2)*.025},r}function Ub(e,t,n){let r=Fb(e,t,n),i=r.armPivots.find(e=>e.side===1)?.shoulder;if(i){let e=new J(new Y(.08,.14,.015),new Q({color:1975344,roughness:.3,metalness:.5}));e.position.set(0,-.34,.04),e.rotation.x=.6;let t=new J(new Z(.068,.125),new q({color:6333946}));t.position.z=.009,e.add(t),i.add(e)}let a=new W;a.position.set(.56,.66,.1),a.rotation.y=-.38,r.visual.add(a);let o=new J(new Y(.44,.58,.025),new Q({color:16317180,roughness:.85,flatShading:!0}));o.castShadow=!0,o.receiveShadow=!0,a.add(o);let s=new J(new ta(.036,8),new q({color:new G(e)}));s.position.set(-.14,.21,.015),a.add(s);let c=new J(new Z(.18,.022),new q({color:9741240}));c.position.set(.01,.21,.015),a.add(c);let l=new J(new Z(.36,.26),new q({color:9133302}));l.position.set(0,.02,.015),a.add(l);let u=new J(new ta(.055,6),new q({color:16498468}));u.position.set(-.07,.05,.017),a.add(u);let d=new J(new ta(.024,6),new q({color:15680580}));d.position.set(-.15,-.15,.015),a.add(d);let f=new J(new Z(.34,.018),new q({color:13358561}));f.position.set(-.01,-.2,.015),a.add(f);let p=new J(new Z(.24,.018),new q({color:13358561}));p.position.set(-.06,-.235,.015),a.add(p);let m=new W;m.position.set(.2,.28,.04);let h=new J(new X(.075,.075,.022,8),new Q({color:15680580,roughness:.4,flatShading:!0}));h.rotation.x=Math.PI/2,m.add(h);let g=new J(new Y(.055,.055,.03),new q({color:16777215}));g.rotation.z=Math.PI/4,m.add(g),a.add(m);let _=r.update;return r.update=function(e,t){_(e,t),a.position.y=.66+Math.sin(e*1.9)*.035;let n=1+Math.sin(e*3.5)*.1;m.scale.setScalar(n)},r}function Wb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new J(new Y(.14,.09,.012),new Q({color:16777215,roughness:.5}));e.position.set(0,-.34,.05),e.rotation.x=-.35;let t=new J(new Z(.04,.09),new q({color:i}));t.position.set(-.05,0,.007),e.add(t),a.add(e)}let o=new W;o.position.set(.55,0,.12),o.rotation.y=-.4,r.visual.add(o);let s=new Q({color:2962498,roughness:.75,flatShading:!0}),c=new J(new X(.025,.03,.85,6),s);c.position.set(0,.425,-.02),c.castShadow=!0,o.add(c);let l=new J(new X(.14,.16,.03,8),s);l.position.y=.015,o.add(l);let u=new J(new Y(.4,.52,.026),new Q({color:16317180,roughness:.85}));u.position.set(0,.64,.01),u.castShadow=!0,o.add(u);let d=new J(new Z(.4,.05),new q({color:14870768}));d.position.set(0,.235,.014),u.add(d);let f=new J(new ta(.075,10),new q({color:i}));f.position.set(0,.11,.015),u.add(f);let p=new J(new Z(.24,.028),new q({color:3359061}));p.position.set(0,-.01,.015),u.add(p);let m=new J(new Z(.18,.018),new q({color:9741240}));m.position.set(0,-.05,.015),u.add(m);for(let e=-1;e<=1;e++){let t=new J(new ta(.026,8),new q({color:e===0?i:13358561}));t.position.set(e*.08,-.14,.015),u.add(t)}return r}function Gb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(.55,.64,.14),a.rotation.set(-.08,-.38,.06),r.visual.add(a);let o=new Q({color:1975344,roughness:.35,metalness:.55,flatShading:!0}),s=new J(new Y(.42,.78,.032),o);s.castShadow=!0,s.receiveShadow=!0,a.add(s);let c=new la(new Y(.424,.784,.036000000000000004)),l=new Ai({color:i,transparent:!0,opacity:.7});a.add(new Hi(c,l));let u=.725,d=new J(new Z(.375,u),new q({color:16317180}));d.position.z=.018000000000000002,a.add(d);let f=new W;f.position.z=.020000000000000004,a.add(f);let p=new J(new Z(.345,.24),new q({color:14742270}));p.position.set(0,.19,0),f.add(p);let m=new J(new Z(.24,.032),new q({color:988970}));m.position.set(-.04,.25,.002),f.add(m);let h=new J(new Z(.18,.018),new q({color:4674921}));h.position.set(-.07,.21,.002),f.add(h);let g=new J(new Z(.2,.048),new q({color:i}));g.position.set(-.06,.13,.003),f.add(g);let _=.32/2,v=[i,1096065,3900150,16096779],y=0;for(let e of[-.01,-.135])for(let t of[-.16/2-.01,.09]){let n=new J(new Z(_,.105),new q({color:14870768}));n.position.set(t,e,0),f.add(n);let r=new J(new ta(.018,8),new q({color:v[y++]}));r.position.set(t-_*.25,e+.02,.002),f.add(r)}let b=new J(new Z(.345,.14),new q({color:15857145}));b.position.set(0,-.28,0),f.add(b);let x=new J(new Z(.305,.028),new q({color:16777215}));x.position.set(0,-.25,.002),f.add(x);let S=new J(new Z(.305,.038),new q({color:i}));S.position.set(0,-.305,.003),f.add(S);let C=new J(new Z(.11,.018),new q({color:988970}));C.position.set(0,u/2-.022,.026000000000000002),a.add(C);let w=new J(new Z(.14,.01),new q({color:9741240}));w.position.set(0,-.3445,.026000000000000002),a.add(w);let T=t()*Math.PI*2,E=r.update;return r.update=function(e,t=.016){E(e,t);let n=r.hitbox.userData.hovered;a.position.y=.64+Math.sin(e*2.1+T)*.035,a.rotation.z=.06+Math.cos(e*1.6+T)*.03,f.position.y=Math.sin(e*1.4+T)*.022,n?(a.scale.lerp(new U(1.09,1.09,1.09),.15),l.opacity=1):(a.scale.lerp(new U(1,1,1),.15),l.opacity=.7)},r}function Kb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.05),e.rotation.set(.75,0,-.15);let t=new J(new na(.07,.17,8,1,!0),new Q({color:16758531,roughness:.35,side:2,flatShading:!0}));t.position.y=.085,e.add(t);let n=new J(new Y(.024,.06,.035),new Q({color:1976635,roughness:.7}));e.add(n),a.add(e)}let o=new W;o.position.set(.74,0,.12),o.rotation.y=-.38,r.visual.add(o);let s=new J(new X(.36,.42,.06,12),new Q({color:1120295,roughness:.4,metalness:.5,flatShading:!0}));s.position.y=.03,s.castShadow=!0,s.receiveShadow=!0,o.add(s);let c=new J(new jo(.32,.36,16),new q({color:i,side:2}));c.rotation.x=-Math.PI/2,c.position.y=.062,o.add(c);let l=new W;l.position.set(0,.68,.02),l.rotation.x=-.06,o.add(l);let u=.84,d=.58,f=new Q({color:724761,emissive:1973067,emissiveIntensity:.5,transparent:!0,opacity:.65,roughness:.15,side:2,depthWrite:!1}),p=new J(new Z(u,d),f);l.add(p);let m=new Ai({color:i,transparent:!0,opacity:.95}),h=new Hi(new la(new Z(u,d)),m);h.position.z=.003,l.add(h);let g=new Hi(new la(new Z(.89,.63)),new Ai({color:16498468,transparent:!0,opacity:.65}));g.position.z=-.01,l.add(g);let _=new J(new Y(.18,.065,.025),new q({color:15680580}));_.position.set(-.31,d/2-.04,.025),_.rotation.z=.12,l.add(_);let v=new J(new Z(.32,.055),new q({color:16777215}));v.position.set(-.18,.08,.008),l.add(v);let y=new J(new Z(.24,.025),new q({color:9741240}));y.position.set(-.22,.015,.008),l.add(y);let b=new J(new Y(.24,.06,.018),new q({color:16498468}));b.position.set(-.22,-.09,.012),l.add(b);let x=new W;x.position.set(.2,.01,.09),l.add(x);let S=new J(new Ao(.125,0),new Q({color:i,emissive:i,emissiveIntensity:.45,roughness:.25,flatShading:!0}));x.add(S);let C=new J(new Fo(.18,.008,4,16),new q({color:16498468}));C.rotation.x=1.1,x.add(C);let w=new J(new Fo(.21,.006,4,16),new q({color:3718648}));w.rotation.y=1.1,x.add(w);let T=t()*Math.PI*2,E=r.update;return r.update=function(e,t=.016){E(e,t);let n=r.hitbox.userData.hovered;l.position.y=.68+Math.sin(e*1.8+T)*.03,S.rotation.y=e*1.5,S.rotation.z=Math.sin(e*1.2)*.25,C.rotation.z=e*2.1,w.rotation.x=-e*1.8;let i=1+Math.sin(e*3.5+T)*.06;b.scale.set(i,i,1),_.rotation.z=.12+Math.sin(e*4)*.06,n?(l.scale.lerp(new U(1.08,1.08,1.08),.15),f.opacity=V.lerp(f.opacity,.8,.15)):(l.scale.lerp(new U(1,1,1),.15),f.opacity=V.lerp(f.opacity,.65,.15))},r}function qb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(0,.68,.44),a.rotation.x=-.14,r.visual.add(a);let o=.78,s=.54,c=new Q({color:988970,emissive:1976635,emissiveIntensity:.45,transparent:!0,opacity:.52,roughness:.15,metalness:.2,side:2,depthWrite:!1}),l=new J(new Z(o,s),c);a.add(l);let u=new la(new Z(o,s)),d=new Ai({color:i,transparent:!0,opacity:.85}),f=new Hi(u,d);f.position.z=.002,a.add(f);let p=new q({color:593434,transparent:!0,opacity:.68,side:2,depthWrite:!1}),m=new J(new Z(.15,.5),p);m.position.set(-.295,0,.004),a.add(m);let h=[];for(let e=0;e<4;e++){let t=e===1,n=new J(new Z(.10999999999999999,.032),new q({color:t?i:4674921,transparent:!0,opacity:t?.95:.6,side:2,depthWrite:!1}));n.position.set(-.295,.16-e*.065,.008),a.add(n),h.push(n)}let g=[i,1096065,3718648],_=.53/3,v=[];for(let e=0;e<3;e++){let t=-.11666666666666668+e*.19666666666666666,n=new J(new Z(_,.11),new q({color:1976635,transparent:!0,opacity:.65,side:2,depthWrite:!1}));n.position.set(t,.155,.005),a.add(n);let r=new J(new Z(_*.65,.022),new q({color:g[e],transparent:!0,opacity:.95,side:2,depthWrite:!1}));r.position.set(t-_*.1,.175,.009),a.add(r),v.push(n)}let y=new J(new Z(.5700000000000001,.27),new q({color:1976635,transparent:!0,opacity:.6,side:2,depthWrite:!1}));y.position.set(.08,-.085,.005),a.add(y);let b=[],x=[.08,.14,.11,.19,.15,.21];for(let e=0;e<6;e++){let t=x[e],n=new Z(.048,1);n.translate(0,.5,0);let r=new J(n,new q({color:e===3||e===5?i:3718648,transparent:!0,opacity:.9,side:2,depthWrite:!1})),o=-.15000000000000002+.4600000000000001/5*e;r.position.set(o,-.19500000000000003,.01),r.scale.y=t,a.add(r),b.push({mesh:r,baseH:t,phase:e*.9})}let S=new J(new Y(.45,.018,.05),new q({color:i,transparent:!0,opacity:.7}));S.position.set(0,.01,.42),r.visual.add(S);let C=r.armPivots.find(e=>e.side===-1)?.shoulder,w=r.armPivots.find(e=>e.side===1)?.shoulder,T=t()*Math.PI*2,E=r.update;return r.update=function(e,t=.016){E(e,t);let n=r.hitbox.userData.hovered;for(let t of b){let n=Math.sin(e*2.2+t.phase+T)*.035;t.mesh.scale.y=Math.max(.03,t.baseH+n)}if(a.position.y=.68+Math.sin(e*1.8+T)*.02,n){let e=1.08;a.scale.lerp(new U(e,e,e),.15),c.opacity=V.lerp(c.opacity,.72,.15),d.opacity=1;return}a.scale.lerp(new U(1,1,1),.15),c.opacity=V.lerp(c.opacity,.52,.15),d.opacity=.85;let i=Math.sin(e*2.6+T);w&&(w.rotation.x=-.85+i*.16,w.rotation.z=.12+Math.cos(e*1.7+T)*.08),C&&(C.rotation.x=-.55-i*.1,C.rotation.z=-.14)},r}function Jb(e,t,n,r){let i=new W,a=new Q({color:r,roughness:.65,flatShading:!0}),o=new Q({color:16317180,roughness:.5}),s=new J(new Y(e,t,n),a);s.position.y=t/2,s.castShadow=!0,s.receiveShadow=!0,i.add(s);let c=new J(new Y(e+.008,t*.14,n+.008),new Q({color:new G(r).multiplyScalar(.82),roughness:.7,flatShading:!0}));c.position.y=t-t*.14/2+.002,i.add(c);for(let r of[-n*.28,n*.28]){let n=new J(new Fo(e*.24,.007,4,8,Math.PI),o);n.position.set(0,t,r),i.add(n)}return i}function Yb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===-1)?.shoulder;if(a){let e=Jb(.13,.15,.08,i);e.position.set(-.02,-.52,.02),e.rotation.y=.3,a.add(e)}let o=new W;o.position.set(.62,.68,.14),o.rotation.set(-.08,-.42,0),r.visual.add(o);let s=.76,c=.56,l=new Q({color:988970,emissive:1976635,emissiveIntensity:.4,transparent:!0,opacity:.55,roughness:.15,metalness:.2,side:2,depthWrite:!1}),u=new J(new Z(s,c),l);o.add(u);let d=new Ai({color:i,transparent:!0,opacity:.85}),f=new Hi(new la(new Z(s,c)),d);f.position.z=.002,o.add(f);let p=c/2-.055,m=new J(new ta(.026,8),new q({color:i}));m.position.set(-.32,p,.005),o.add(m);let h=new J(new Z(.46,.042),new q({color:16317180,transparent:!0,opacity:.85}));h.position.set(-.02,p,.005),o.add(h);let g=new J(new Z(.075,.042),new q({color:1096065}));g.position.set(s/2-.075,p,.005),o.add(g);let _=.21,v=.19,y=[16096779,3900150,15485081,1096065,9133302,16007006],b=[],x=0;for(let e=0;e<2;e++)for(let t=0;t<3;t++){let n=(t-1)*.238,r=.065-e*.218,a=new W;a.position.set(n,r,.006),o.add(a);let s=new J(new Z(_,v),new q({color:16317180,transparent:!0,opacity:.9}));a.add(s);let c=new J(new Z(.18,v*.48),new q({color:y[x++]}));c.position.set(0,.032,.002),a.add(c);let l=new J(new Z(_*.45,.015),new q({color:3359061}));l.position.set(-.0378,-.032,.002),a.add(l);let u=new J(new Z(.18,.028),new q({color:i}));u.position.set(0,-.068,.002),a.add(u),b.push(a)}let S=new J(new Y(.46,.016,.045),new q({color:i,transparent:!0,opacity:.65}));S.position.set(.62,.008,.14),S.rotation.y=-.42,r.visual.add(S);let C=new W;C.position.set(.38,0,.34),r.visual.add(C);let w=Jb(.2,.23,.12,i);w.position.set(0,0,0),w.rotation.y=-.25,C.add(w);let T=Jb(.16,.19,.1,16096779);T.position.set(.19,0,-.05),T.rotation.y=.35,C.add(T);let E=Jb(.13,.15,.09,3900150);E.position.set(.1,0,.13),E.rotation.y=-.55,C.add(E);let D=t()*Math.PI*2,O=r.update;return r.update=function(e,t=.016){O(e,t);let n=r.hitbox.userData.hovered;o.position.y=.68+Math.sin(e*1.9+D)*.025;for(let t=0;t<b.length;t++)b[t].position.z=.006+Math.max(0,Math.sin(e*2.5-t*.6))*.012;n?(o.scale.lerp(new U(1.07,1.07,1.07),.15),l.opacity=V.lerp(l.opacity,.72,.15),d.opacity=1):(o.scale.lerp(new U(1,1,1),.15),l.opacity=V.lerp(l.opacity,.55,.15),d.opacity=.85)},r}function Xb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.05),e.rotation.x=-.35;let t=new J(new Y(.15,.19,.022),new Q({color:1976635,roughness:.7,flatShading:!0}));t.castShadow=!0,e.add(t);let n=new J(new ta(.032,6),new q({color:i}));n.position.z=.013,e.add(n),a.add(e)}let o=new W;o.position.set(.58,0,.12),o.rotation.y=-.4,r.visual.add(o);let s=new Q({color:2962498,roughness:.75,flatShading:!0}),c=new J(new X(.024,.028,.82,6),s);c.position.y=.41,c.castShadow=!0,o.add(c);let l=new J(new X(.15,.17,.025,8),s);l.position.y=.012,o.add(l);let u=new J(new Y(.48,.5,.026),new Q({color:16317180,roughness:.85,flatShading:!0}));u.position.set(0,.68,.01),u.castShadow=!0,o.add(u);let d=new J(new Z(.22,.22),new q({color:14870768}));d.position.set(-.09,.09,.014),u.add(d);let f=new J(new ta(.068,6),new q({color:i}));f.position.set(-.09,.09,.016),u.add(f);let p=new J(new ta(.028,3),new q({color:16777215}));p.position.set(-.09,.09,.018),u.add(p);let m=[i,i.clone().lerp(new G(16777215),.45),new G(1976635)];for(let e=0;e<m.length;e++){let t=new J(new Z(.14,.06),new q({color:m[e]}));t.position.set(.12,.16-e*.075,.014),u.add(t)}let h=new J(new Z(.38,.03),new q({color:3359061}));h.position.set(0,-.08,.014),u.add(h);let g=new J(new Z(.28,.018),new q({color:9741240}));g.position.set(-.05,-.125,.014),u.add(g);let _=new J(new Y(.18,.16,.14),new Q({color:i,roughness:.55,flatShading:!0}));_.position.set(-.22,.08,.12),_.rotation.y=.35,_.castShadow=!0,o.add(_);let v=new J(new Y(.186,.05,.146),new q({color:16777215}));v.position.set(-.22,.085,.12),v.rotation.y=.35,o.add(v);let y=new W;y.position.set(.08,1.08,.05),y.rotation.z=-.35,o.add(y);let b=new J(new X(.035,.048,.16,6),new Q({color:16777215,roughness:.4,flatShading:!0}));b.castShadow=!0,y.add(b);let x=new J(new na(.036,.075,6),new Q({color:i,roughness:.4,flatShading:!0}));x.position.y=.115,y.add(x);let S=new J(new ta(.016,6),new q({color:3718648}));S.position.set(0,.03,.038),y.add(S);for(let e=0;e<3;e++){let t=new W;t.rotation.y=e/3*Math.PI*2;let n=new J(new Y(.012,.065,.045),new Q({color:i,roughness:.5,flatShading:!0}));n.position.set(0,-.055,.048),t.add(n),y.add(t)}let C=new J(new na(.028,.07,5),new q({color:16752412}));C.rotation.x=Math.PI,C.position.y=-.11,y.add(C);let w=r.update;return r.update=function(e,t){w(e,t),y.position.y=1.08+Math.sin(e*2.6)*.045,y.rotation.y=e*1.1,C.scale.setScalar(.85+Math.sin(e*14)*.2)},r}function Zb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(0,.72,.44),a.rotation.x=-.1,r.visual.add(a);let o=.64,s=.62,c=new Q({color:988970,emissive:1976635,emissiveIntensity:.45,transparent:!0,opacity:.55,roughness:.15,metalness:.2,side:2,depthWrite:!1}),l=new J(new Z(o,s),c);a.add(l);let u=new Ai({color:i,transparent:!0,opacity:.85}),d=new Hi(new la(new Z(o,s)),u);d.position.z=.002,a.add(d);let f=.045,p=new J(new Z(.62,f),new q({color:1976635,transparent:!0,opacity:.9,side:2,depthWrite:!1}));p.position.set(0,s/2-f/2-.01,.006),a.add(p);let m=[15680580,16096779,2278750];for(let e=0;e<3;e++){let t=new J(new ta(.009,6),new q({color:m[e]}));t.position.set(-.64/2+.035+e*.026,p.position.y,.009),a.add(t)}let h=new J(new Z(.014,.575-.05),new q({color:3359061,transparent:!0,opacity:.6,side:2,depthWrite:!1}));h.position.set(o/2-.024,-.02,.007),a.add(h);let g=new J(new Z(.016,.14),new q({color:i,side:2}));g.position.set(o/2-.024,.08,.009),a.add(g);let _=new W;_.position.set(-.01,-.02,.004),a.add(_);let v=.56,y=new J(new Z(v,.17),new q({color:1976635,transparent:!0,opacity:.72,side:2,depthWrite:!1}));y.position.set(0,.14,0),_.add(y);let b=new J(new Z(.24,.028),new q({color:16317180,side:2}));b.position.set(-.12,.18,.003),_.add(b);let x=new J(new Z(.16,.038),new q({color:i,side:2}));x.position.set(-.16,.105,.004),_.add(x);let S=new J(new ta(.052,6),new q({color:3718648,side:2}));S.position.set(.16,.14,.004),_.add(S);let C=.53/3,w=[1096065,16096779,11032055];for(let e=0;e<3;e++){let t=-.1916666666666667+e*.19166666666666665,n=new J(new Z(C,.125),new q({color:1976635,transparent:!0,opacity:.7,side:2,depthWrite:!1}));n.position.set(t,-.025,0),_.add(n);let r=new J(new Z(C*.55,.024),new q({color:w[e],side:2}));r.position.set(t,.005,.003),_.add(r)}let T=new J(new Z(v,.12),new q({color:1976635,transparent:!0,opacity:.72,side:2,depthWrite:!1}));T.position.set(0,-.17,0),_.add(T);let E=new J(new Z(.26,.032),new q({color:16317180,side:2}));E.position.set(-.1,-.17,.003),_.add(E);let D=new J(new Z(.15,.034),new q({color:2278750,side:2}));D.position.set(.14,-.17,.004),_.add(D);let O=new J(new Y(.42,.016,.045),new q({color:i,transparent:!0,opacity:.65}));O.position.set(0,.008,.42),r.visual.add(O);let k=r.armPivots.find(e=>e.side===1)?.shoulder,A=r.armPivots.find(e=>e.side===-1)?.shoulder,j=t()*Math.PI*2,M=r.update;return r.update=function(e,t=.016){M(e,t);let n=r.hitbox.userData.hovered;if(a.position.y=.72+Math.sin(e*1.9+j)*.02,n){a.scale.lerp(new U(1.07,1.07,1.07),.15),c.opacity=V.lerp(c.opacity,.72,.15),u.opacity=1;return}a.scale.lerp(new U(1,1,1),.15),c.opacity=V.lerp(c.opacity,.55,.15),u.opacity=.85;let i=Math.sin(e*2.1+j);k&&(k.rotation.x=-.95+i*.38,k.rotation.z=.1),A&&(A.rotation.x=-.22,A.rotation.z=-.16),_.position.y=-.02-i*.032,g.position.y=-.02+i*.14},r}function Qb(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(.62,0,.12),a.rotation.y=-.45,r.visual.add(a);let o=new Q({color:1316897,roughness:.4,metalness:.5,flatShading:!0}),s=new J(new Y(.08,.68,.06),o);s.position.set(0,.34,-.04),s.castShadow=!0,a.add(s);let c=new J(new Y(.36,.03,.24),o);c.position.y=.015,a.add(c);let l=new W;l.position.set(0,.72,.02),a.add(l);let u=new J(new Y(.36,.38,.026),o);u.castShadow=!0,l.add(u);let d=new J(new Z(.34,.33),new q({color:1120295}));d.position.z=.014,u.add(d);for(let e of[-1,1]){let t=new J(new Y(.24,.38,.026),o);t.position.set(e*.29,0,.035),t.rotation.y=-e*.28,t.castShadow=!0,l.add(t);let n=new J(new Z(.21,.33),new q({color:1976635}));n.position.z=.014,t.add(n);for(let e=0;e<4;e++){let n=new J(new Z(.13,.018),new q({color:e%2==0?i:3718648}));n.position.set(0,.08-e*.05,.016),t.add(n)}}let f=new J(new Io(.075,.022,24,6),new Q({color:i,emissive:i,emissiveIntensity:.4,roughness:.3,flatShading:!0}));f.position.set(0,0,.06),l.add(f);let p=r.update;return r.update=function(e,t){p(e,t),f.rotation.x=e*1.2,f.rotation.y=e*1.6},r}function $b(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(0,.72,.46),a.rotation.x=-.1,r.visual.add(a);let o=.86,s=.56,c=new Q({color:988970,emissive:1976635,emissiveIntensity:.45,transparent:!0,opacity:.55,roughness:.15,metalness:.2,side:2,depthWrite:!1}),l=new J(new Z(o,s),c);a.add(l);let u=new Ai({color:i,transparent:!0,opacity:.88}),d=new Hi(new la(new Z(o,s)),u);d.position.z=.002,a.add(d);let f=.065,p=s/2-f/2-.015,m=new J(new Z(.83,f),new q({color:1976635,transparent:!0,opacity:.85,side:2,depthWrite:!1}));m.position.set(0,p,.004),a.add(m);let h=new J(new ta(.022,10),new q({color:i,side:2}));h.position.set(o/2-.055,p,.008),a.add(h);let g=new J(new ta(.007,6),new q({color:2278750,side:2}));g.position.set(o/2-.04,.21850000000000003,.01),a.add(g);for(let e=0;e<4;e++){let t=new J(new Z(.085,.018),new q({color:e===0?i:9741240,side:2}));t.position.set(-.86/2+.1+e*.11,p,.008),a.add(t)}let _=new J(new Z(.21,.44500000000000006),new q({color:593434,transparent:!0,opacity:.72,side:2,depthWrite:!1}));_.position.set(-.307,-.035,.004),a.add(_);let v=[];for(let e=0;e<5;e++){let t=.13250000000000003-e*.072,n=e===1,r=new J(new Z(.18,.042),new q({color:n?i:1976635,transparent:!0,opacity:n?.9:.75,side:2,depthWrite:!1}));r.position.set(-.307,t,.007),a.add(r),v.push(r)}let y=.565/3,b=[3718648,1096065,16096779];for(let e=0;e<3;e++){let t=-.08833333333333333+e*.2033333333333333,n=new J(new Z(y,.11),new q({color:1976635,transparent:!0,opacity:.78,side:2,depthWrite:!1}));n.position.set(t,.12250000000000003,.005),a.add(n);let r=new J(new Z(y*.55,.022),new q({color:b[e],side:2}));r.position.set(t-y*.12,.14450000000000002,.008),a.add(r)}let x=new J(new Z(.595,.27),new q({color:1976635,transparent:!0,opacity:.72,side:2,depthWrite:!1}));x.position.set(.11499999999999999,-.11250000000000006,.005),a.add(x);let S=[],C=[.08,.15,.11,.19,.14,.21,.17];for(let e=0;e<C.length;e++){let t=new Z(.042,1);t.translate(0,.5,0);let n=new J(t,new q({color:e%2==0?i:3718648,transparent:!0,opacity:.92,side:2,depthWrite:!1})),r=-.1225+e*(.475/(C.length-1));n.position.set(r,-.22250000000000006,.009),n.scale.y=C[e],a.add(n),S.push({mesh:n,baseH:C[e],phase:e*.8})}let w=new J(new Y(.52,.016,.045),new q({color:i,transparent:!0,opacity:.65}));w.position.set(0,.008,.44),r.visual.add(w);let T=r.armPivots.find(e=>e.side===-1)?.shoulder,E=r.armPivots.find(e=>e.side===1)?.shoulder,D=t()*Math.PI*2,O=r.update;return r.update=function(e,t=.016){O(e,t);let n=r.hitbox.userData.hovered;a.position.y=.72+Math.sin(e*1.8+D)*.02;for(let t of S){let n=Math.sin(e*2.3+t.phase+D)*.032;t.mesh.scale.y=Math.max(.03,t.baseH+n)}if(n){a.scale.lerp(new U(1.07,1.07,1.07),.15),c.opacity=V.lerp(c.opacity,.72,.15),u.opacity=1;return}a.scale.lerp(new U(1,1,1),.15),c.opacity=V.lerp(c.opacity,.55,.15),u.opacity=.88;let i=Math.sin(e*2.4+D);E&&(E.rotation.x=-.88+i*.18,E.rotation.z=.14+Math.cos(e*1.6+D)*.1),T&&(T.rotation.x=-.72-i*.15,T.rotation.z=-.14)},r}function ex(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new Q({color:1580585,roughness:.4,metalness:.5,flatShading:!0}),o=new Q({color:2765377,roughness:.75,flatShading:!0}),s=new W;s.position.set(0,0,.48),r.visual.add(s);let c=.92,l=.34,u=.46,d=new J(new Y(c,.032,l),o);d.position.y=u,d.castShadow=!0,d.receiveShadow=!0,s.add(d);for(let e of[-.92/2+.05,c/2-.05])for(let t of[-.13,l/2-.04]){let n=new J(new Y(.028,u,.028),a);n.position.set(e,u/2,t),n.castShadow=!0,s.add(n)}let f=[];for(let e of[-1,1]){let t=new W;t.position.set(e*.225,.71,.06),t.rotation.y=Math.PI+e*.22,s.add(t);let n=new J(new Y(.035,.16,.025),a);n.position.set(0,-.17,-.02),t.add(n);let r=new J(new Y(.14,.012,.1),a);r.position.set(0,-.24,.01),t.add(r);let o=new J(new Y(.42,.32,.024),a);o.castShadow=!0,t.add(o);let c=new J(new Z(.39,.28500000000000003),new q({color:725280}));if(c.position.z=.013,o.add(c),e===-1){let e=[3718648,i,2278750,16096779,11032055];for(let t=0;t<7;t++){let n=.12+t*5%9*.016,r=new J(new Z(n,.016),new q({color:e[t%e.length]}));r.position.set(-.16+n/2,.095-t*.032,.015),o.add(r)}let t=new J(new Z(.11,.18),new q({color:1976635}));t.position.set(.1,0,.015),o.add(t)}else{let e=new J(new Z(.37,.035),new q({color:i}));e.position.set(0,.105,.015),o.add(e);for(let e=0;e<4;e++){let t=new J(new Z(.36,.034),new q({color:e===0?1096065:1976635}));t.position.set(0,.045-e*.048,.015),o.add(t),f.push(t)}}}let p=new W;p.position.set(0,.47600000000000003,-.06),p.rotation.y=Math.PI,s.add(p);let m=new J(new Y(.24,.014,.16),a);m.castShadow=!0,p.add(m);let h=new J(new Y(.24,.15,.012),a);h.position.set(0,.072,-.075),h.rotation.x=-.25,p.add(h);let g=new J(new Z(.21,.125),new q({color:1976635}));g.position.z=.007,h.add(g);let _=r.armPivots.find(e=>e.side===-1)?.shoulder,v=r.armPivots.find(e=>e.side===1)?.shoulder,y=t()*Math.PI*2,b=r.update;return r.update=function(e,t=.016){b(e,t);let n=Math.floor((e*1.4+y)%f.length);for(let e=0;e<f.length;e++)f[e].material.color.setHex(e===n?1096065:1976635);r.hitbox.userData.hovered||(r.bodyGroup.rotation.y=Math.sin(e*.9+y)*.24,_&&(_.rotation.x=-.78+Math.sin(e*11+y)*.07,_.rotation.z=-.18),v&&(v.rotation.x=-.78+Math.cos(e*11+y)*.07,v.rotation.z=.18))},r}function tx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.05),e.rotation.set(.78,0,-.15);let t=new J(new na(.075,.18,8,1,!0),new Q({color:16758531,emissive:14251782,emissiveIntensity:.25,roughness:.35,side:2,flatShading:!0}));t.position.y=.09,e.add(t);let n=new J(new Fo(.075,.008,4,12),new q({color:15680580}));n.rotation.x=Math.PI/2,n.position.y=.18,e.add(n);let r=new J(new Y(.025,.06,.036),new Q({color:1976635,roughness:.7}));e.add(r),a.add(e)}let s=new W;s.position.set(.68,0,.12),r.visual.add(s);let c=new Q({color:1580585,roughness:.4,metalness:.55,flatShading:!0}),l=new J(new X(.28,.34,.14,8),c);l.position.y=.07,l.castShadow=!0,l.receiveShadow=!0,s.add(l);let u=new W;u.position.y=.54,s.add(u);let d=.25,f=new J(new X(d*.94,d*.94,.72,6),c);f.castShadow=!0,u.add(f);let p=[{bg:1976635,badge:i,cta:16436245},{bg:3215426,badge:16007006,cta:3718648},{bg:413243,badge:1096065,cta:16498468}],m=.36,h=.64;for(let e=0;e<3;e++){let t=e/3*Math.PI*2,n=new W;n.rotation.y=t,u.add(n);let r=p[e],i=new J(new Y(m,h,.02),new q({color:r.bg}));i.position.z=d,n.add(i);let a=new Hi(new la(new Z(m,h)),new Ai({color:r.badge}));a.position.z=.262,n.add(a);let o=new J(new ta(.085,6),new q({color:r.badge}));o.position.set(0,.14,.264),n.add(o);let s=new J(new Z(.26,.036),new q({color:16777215}));s.position.set(0,-.02,.264),n.add(s);let c=new J(new Z(.2,.02),new q({color:9741240}));c.position.set(0,-.065,.264),n.add(c);let l=new J(new Z(.22,.055),new q({color:r.cta}));l.position.set(0,-.17,.265),n.add(l)}let g=new J(new X(.29,.27,.08,8),c);g.position.y=.94,g.castShadow=!0,s.add(g);let _=new q({color:16436245}),v=new J(new Ao(.065,0),_);v.position.y=1.06,s.add(v);let y=[];for(let e=0;e<3;e++){let t=new J(new jo(.04,.055,10),new q({color:16436245,transparent:!0,opacity:.8,side:2}));t.visible=!1,r.visual.add(t),y.push({mesh:t,phase:e/3})}let b=t()*Math.PI*2,x=r.update;return r.update=function(e,t=.016){x(e,t);let n=r.hitbox.userData.hovered,i=(e*.45+b)%3,s=Math.floor(i),c=i%1,l=c<.75?0:V.smoothstep((c-.75)/.25,0,1);if(u.rotation.y=(s+l)*Math.PI*2/3,v.rotation.y=e*3,v.scale.setScalar(.9+Math.sin(e*7)*.2),n){for(let e of y)e.mesh.visible=!1;return}r.bodyGroup.rotation.y=Math.sin(e*2.4+b)*.45,r.bodyGroup.position.y=Math.abs(Math.sin(e*5+b))*.035,a&&(a.rotation.x=-1.15+Math.sin(e*5+b)*.25,a.rotation.z=.22),o&&(o.rotation.x=-.65+Math.cos(e*4+b)*.3,o.rotation.z=-.4);let d=r.bodyGroup.rotation.y,f=Math.sin(d),p=Math.cos(d);for(let t of y){let n=(e*1.1+t.phase+b)%1;t.mesh.visible=!0,t.mesh.position.set(.22+f*(.28+n*.45),.88+n*.18,.25+p*(.28+n*.45)),t.mesh.rotation.y=d,t.mesh.scale.setScalar(.6+n*1.8),t.mesh.material.opacity=(1-n)*.85}},r}function nx(e){let t=new W,n=new Q({color:16777215,roughness:.65,flatShading:!0,side:2}),r=new Q({color:14410992,roughness:.75,flatShading:!0,side:2}),i=new Mr;i.setAttribute(`position`,new K([0,0,.14,0,0,-.1,.13,.025,-.1],3)),i.computeVertexNormals();let a=new J(i,n);a.castShadow=!0,t.add(a);let o=new J(i,n);o.scale.x=-1,o.castShadow=!0,t.add(o);let s=new Mr;s.setAttribute(`position`,new K([0,0,.14,0,0,-.1,0,-.045,-.1],3)),s.computeVertexNormals();let c=new J(s,r);t.add(c);let l=new Mr;l.setAttribute(`position`,new K([.02,.006,.06,.02,.006,-.09,.09,.019,-.09],3)),l.computeVertexNormals();let u=new J(l,new q({color:e,side:2}));return t.add(u),t}function rx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=new W;a.position.set(.56,0,.1),a.rotation.y=-.45,r.visual.add(a);let o=new J(new Y(.055,.58,.055),new Q({color:6044964,roughness:.9,flatShading:!0}));o.position.y=.29,o.castShadow=!0,a.add(o);let s=new J(new Y(.22,.14,.34),new Q({color:3900150,roughness:.5,flatShading:!0}));s.position.y=.64,s.castShadow=!0,a.add(s);let c=new J(new X(.11,.11,.34,8,1,!1,0,Math.PI),new Q({color:3900150,roughness:.5,flatShading:!0}));c.rotation.z=Math.PI/2,c.rotation.y=Math.PI/2,c.position.y=.71,a.add(c);let l=new J(new Y(.015,.16,.045),new q({color:15680580}));l.position.set(.12,.74,.04),a.add(l);let u=nx(i),d=r.armPivots.find(e=>e.side===1)?.shoulder,f=new An;f.position.set(0,-.35,.04),d&&d.add(f),r.visual.add(u);let p=new U,m=new U,h=new U,g=t()*5;function _(){r.visual.updateMatrixWorld(!0),f.getWorldPosition(p),r.visual.worldToLocal(p),u.position.copy(p),u.rotation.set(.1,r.bodyGroup.rotation.y,0)}let v=r.update;return r.update=function(e,t=.016){if(v(e,t),r.hitbox.userData.hovered){_();return}let n=5.2,i=(e+g)%n/n;if(i<.35||i>=.92)_();else if(i<.52){let e=(i-.35)/.17,t=e<.45?V.lerp(0,.7,e/.45):V.lerp(.7,-1.45,(e-.45)/.55);d&&(d.rotation.x=t),e<.75?_():(_(),m.copy(u.position))}else{let e=(i-.52)/.4;if(d){let t=Math.max(0,1-e*4);d.rotation.x=-1.45*t}r.visual.updateMatrixWorld(!0),f.getWorldPosition(p),r.visual.worldToLocal(p);let t=r.bodyGroup.rotation.y,n=Math.sin(t),a=Math.cos(t),o=Math.cos(t),s=-Math.sin(t),c=Math.sin(e*Math.PI)*.95,l=Math.sin(e*Math.PI*2)*.38,g=Math.sin(e*Math.PI)*.48;m.copy(u.position),h.set(p.x+n*c+o*l,p.y+g,p.z+a*c+s*l),u.position.copy(h);let _=h.clone().sub(m);if(_.lengthSq()>1e-6){let t=Math.atan2(_.x,_.z),n=Math.hypot(_.x,_.z),r=-Math.atan2(_.y,n),i=Math.cos(e*Math.PI*2)*.45;u.rotation.set(r,t,i,`YXZ`)}}},r}function ix(e,t,n){let r=Fb(e,t,n);new G(e);let i=r.armPivots.find(e=>e.side===1)?.shoulder,a=r.armPivots.find(e=>e.side===-1)?.shoulder;if(i){let e=new W;e.position.set(0,-.34,.05),e.rotation.x=.75;let t=new J(new X(.014,.01,.14,6),new Q({color:1976635,roughness:.5}));t.position.y=.05,e.add(t);let n=new J(new ia(.032,0),new Q({color:16436245,metalness:.5,roughness:.3,flatShading:!0}));n.position.y=.13,e.add(n),i.add(e)}let o=new W;o.position.set(.68,0,.14),o.rotation.y=-.38,r.visual.add(o);let s=new J(new X(.32,.36,.05,10),new Q({color:1120295,roughness:.4,flatShading:!0}));s.position.y=.025,s.castShadow=!0,o.add(s);let c=new W;c.position.set(0,.68,.02),o.add(c);let l=.72,u=.54,d=new Q({color:1249579,emissive:3018853,emissiveIntensity:.45,transparent:!0,opacity:.68,roughness:.15,side:2,depthWrite:!1}),f=new J(new Z(l,u),d);c.add(f);let p=new Hi(new la(new Z(l,u)),new Ai({color:16436245}));p.position.z=.003,c.add(p);let m=new W;m.position.set(0,.38,.02),c.add(m);let h=new J(new Fo(.045,.016,5,10,Math.PI*1.45),new Q({color:16436245,emissive:16096779,emissiveIntensity:.4,flatShading:!0}));h.rotation.z=-.35,h.position.y=.025,m.add(h);let g=new J(new Y(.028,.028,.028),new q({color:16436245}));g.position.y=-.045,m.add(g);let _=new J(new Z(.62,.026),new q({color:1973067,side:2}));_.position.set(0,.2,.006),c.add(_);let v=new Z(.62,.026);v.translate(.62/2,0,0);let y=new J(v,new q({color:2278750,side:2}));y.position.set(-.62/2,.2,.008),c.add(y);let b=new J(new Z(.54,.042),new q({color:16777215,side:2}));b.position.set(0,.115,.006),c.add(b);let x=[],S=[3900150,15485081,1096065];for(let e=0;e<3;e++){let t=.015-e*.1,n=new W;n.position.set(0,t,.008),c.add(n);let r=new q({color:1976635,transparent:!0,opacity:.85,side:2}),i=new J(new Z(.6,.072),r);n.add(i);let a=new Q({color:S[e],emissive:S[e],emissiveIntensity:.2,roughness:.3,flatShading:!0}),o=new J(new X(.024,.026,.022,8),a);o.rotation.x=Math.PI/2,o.position.set(-.23,0,.012),n.add(o);let s=new J(new Z(.36,.022),new q({color:14870768,side:2}));s.position.set(.03,0,.004),n.add(s),x.push({rowGroup:n,cardMat:r,buzzer:o,buzzerMat:a,baseColor:S[e]})}let C=[],w=[16436245,2278750,3718648,16007006,11032055];for(let e=0;e<10;e++){let n=new J(new Y(.028,.028,.01),new q({color:w[e%w.length]}));n.visible=!1,n.userData={vx:(t()-.5)*.9,vy:.55+t()*.5,vz:(t()-.5)*.5,rotSpeed:(t()-.5)*10},c.add(n),C.push(n)}let T=t()*Math.PI*2,E=r.update;return r.update=function(e,t=.016){E(e,t);let n=r.hitbox.userData.hovered;m.rotation.y=e*2.2,m.position.y=.38+Math.sin(e*3.5)*.025;let o=(e*.85+T)%4,s=Math.floor(o),c=o%1,l=s===3?1:(s+c)/3;y.scale.x=Math.max(.05,l);for(let e=0;e<x.length;e++){let t=x[e],n=s===e||s===3,r=s===3&&e===2;if(n){let e=Math.sin(Math.min(1,c*2)*Math.PI)*.018;t.rowGroup.position.z=.022+e,t.cardMat.color.setHex(r?417606:3223169),t.buzzerMat.emissiveIntensity=.85,t.buzzer.scale.setScalar(1.22)}else t.rowGroup.position.z=.008,t.cardMat.color.setHex(1976635),t.buzzerMat.emissiveIntensity=.15,t.buzzer.scale.setScalar(1)}if(s===3)for(let t of C)t.visible=!0,t.position.set(t.userData.vx*c,.18+t.userData.vy*c-.65*c*c,.05+t.userData.vz*c),t.rotation.z=e*t.userData.rotSpeed,t.rotation.x=e*t.userData.rotSpeed*.7,t.scale.setScalar(1-c*.75);else for(let e of C)e.visible=!1;n||(r.bodyGroup.rotation.y=.45+Math.sin(e*2.2+T)*.25,i&&(i.rotation.x=-.95+Math.sin(e*4.5+T)*.15,i.rotation.z=.2),a&&(a.rotation.x=-.75+Math.cos(e*3.2+T)*.25,a.rotation.z=-.35))},r}function ax(e,t,n){let r=Fb(e,t,n);new G(e);let i=r.armPivots.find(e=>e.side===1)?.shoulder,a=r.armPivots.find(e=>e.side===-1)?.shoulder;if(i){let e=new W;e.position.set(0,-.34,.05),e.rotation.x=.72;let t=new J(new X(.011,.014,.13,5),new Q({color:1976635,roughness:.7}));t.position.y=.045,e.add(t);let n=new J(new Fo(.065,.012,6,12),new Q({color:16436245,metalness:.5,roughness:.3,flatShading:!0}));n.position.y=.16,e.add(n);let r=new J(new ta(.06,10),new q({color:12248829,transparent:!0,opacity:.55,side:2}));r.position.y=.16,e.add(r),i.add(e)}let o=new W;o.position.set(.68,0,.14),o.rotation.y=-.38,r.visual.add(o);let s=new J(new X(.3,.35,.06,10),new Q({color:1120295,roughness:.4,flatShading:!0}));s.position.y=.03,s.castShadow=!0,o.add(s);let c=new Q({color:3359061,metalness:.5,roughness:.4});for(let e of[-.24,.24]){let t=new J(new X(.016,.016,.96,6),c);t.position.set(e,.5,-.02),t.castShadow=!0,o.add(t)}let l=new W;l.position.set(0,.96,.01),o.add(l);let u=new J(new Y(.56,.08,.03),new Q({color:16317180,roughness:.5,flatShading:!0}));l.add(u);let d=new J(new Y(.11,.06,.034),new q({color:3900150}));d.position.set(.21,0,.002),l.add(d);let f=new J(new Y(.42,.11,.04),new Q({color:4674921,roughness:.7,flatShading:!0}));f.position.set(0,.76,-.01),f.castShadow=!0,o.add(f);let p=new J(new Y(.42,.11,.04),new Q({color:3359061,roughness:.7,flatShading:!0}));p.position.set(0,.56,-.01),p.castShadow=!0,o.add(p);let m=new W;m.position.set(0,.25,.03),o.add(m);let h=new J(new Y(.48,.14,.055),new Q({color:1096065,emissive:366185,emissiveIntensity:.35,roughness:.3,flatShading:!0}));h.castShadow=!0,m.add(h);let g=new J(new Z(.28,.03),new q({color:16777215}));g.position.set(-.04,.02,.03),m.add(g);let _=new J(new Z(.18,.016),new q({color:13761253}));_.position.set(-.09,-.025,.03),m.add(_);let v=[];for(let e of[-.14,.14]){let t=new J(new na(.032,.11,5),new q({color:16752412}));t.rotation.x=Math.PI,t.position.set(e,-.11,0),m.add(t),v.push(t)}let y=new J(new Ao(.065,0),new Q({color:16436245,emissive:16096779,emissiveIntensity:.45,roughness:.25,flatShading:!0}));y.position.set(0,1.12,.02),o.add(y);let b=[];for(let e=0;e<8;e++){let n=new J(new Y(.024,.024,.024),new q({color:e%2==0?16436245:3718648}));n.visible=!1,n.userData={vx:(t()-.5)*.85,vy:.35+t()*.45,vz:(t()-.5)*.45},o.add(n),b.push(n)}let x=t()*Math.PI*2,S=r.update;return r.update=function(e,t=.016){S(e,t);let n=r.hitbox.userData.hovered;y.rotation.y=e*2.5;let o=4.5,s=(e+x)%o/o,c,l=!1,u=!1;if(s<.35){let e=1-(1-s/.35)**3;c=V.lerp(.24,.78,e),l=!0}else if(s<.85)c=.78+Math.sin(e*6)*.012,u=!0;else{let e=(s-.85)/.15;c=V.lerp(.78,.24,e*e)}m.position.y=c;let d=V.clamp((c-.24)/.54,0,1);f.position.y=V.lerp(.78,.58,d),p.position.y=V.lerp(.58,.38,d);for(let t of v)t.visible=l,l&&t.scale.set(1,.7+Math.sin(e*25)*.4,1);if(u){let t=(s-.35)/.5;if(y.scale.setScalar(1.25+Math.sin(e*8)*.15),t<.45){let e=t/.45;for(let t of b)t.visible=!0,t.position.set(t.userData.vx*e,.85+t.userData.vy*e-.45*e*e,.05+t.userData.vz*e),t.scale.setScalar(1-e*.8)}else for(let e of b)e.visible=!1}else{y.scale.setScalar(.95);for(let e of b)e.visible=!1}n||(r.bodyGroup.rotation.y=.4+Math.sin(e*2+x)*.2,i&&(i.rotation.x=-.85-d*.45,i.rotation.z=.18),a&&(a.rotation.z=u?-1.8+Math.sin(e*10)*.2:-.25,a.rotation.x=u?-.3:-.4))},r}function ox(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.035),e.rotation.set(Math.PI*.45,0,-.15);let t=new Q({color:13751771,metalness:.65,roughness:.28,flatShading:!0}),n=new J(new Y(.022,.24,.012),t);n.position.y=.08,n.castShadow=!0,e.add(n);let r=new J(new X(.02,.02,.012,8),t);r.rotation.x=Math.PI/2,r.position.y=-.04,e.add(r);let i=new W;i.position.y=.205,i.rotation.z=.25,e.add(i);let o=new J(new Y(.056,.024,.015),t);o.castShadow=!0,i.add(o);for(let e of[-.019,.019]){let n=new J(new Y(.018,.036,.015),t);n.position.set(e,.024,0),n.castShadow=!0,i.add(n)}a.add(e)}let s=new W;s.position.set(.62,0,.14),r.visual.add(s);let c=new Q({color:1976635,roughness:.5,metalness:.5,flatShading:!0}),l=new Q({color:16096779,roughness:.6,flatShading:!0}),u=new J(new X(.34,.4,.08,10),c);u.position.y=.04,u.castShadow=!0,u.receiveShadow=!0,s.add(u);let d=new J(new Fo(.16,.018,5,12),new q({color:4674921}));d.rotation.x=Math.PI/2,d.position.y=.085,s.add(d);let f=.22;for(let e of[-.045,.045])for(let t of[-.045,.045]){let n=new J(new Y(.014,.96,.014),l);n.position.set(f+e,.5599999999999999,t),n.castShadow=!0,s.add(n)}for(let e=.25;e<=.95;e+=.22){let t=new J(new Y(.11,.014,.11),l);t.position.set(f,e,0),s.add(t)}let p=new J(new Y(.14,.02,.04),l);p.position.set(.14,.68,0),s.add(p);let m=new W,h=.12;m.position.set(-.02,h,0),s.add(m);let g=new Q({color:16317180,roughness:.35,flatShading:!0}),_=new Q({color:i,roughness:.4,flatShading:!0}),v=new J(new X(.055,.08,.09,8),c);v.position.y=.045,m.add(v);let y=.105,b=new J(new X(y*.92,y,.44,8),g);b.position.y=.31,b.castShadow=!0,m.add(b);let x=new J(new X(y*.96,y*.98,.09,8),_);x.position.y=.22,m.add(x);let S=new J(new na(y*.92,.22,8),_);S.position.y=.64,S.castShadow=!0,m.add(S);let C=new J(new X(.042,.042,.02,8),c);C.rotation.x=Math.PI/2,C.position.set(0,.38,y*.94),m.add(C);let w=new J(new ta(.032,8),new q({color:3718648}));w.position.set(0,.38,.11069999999999999),m.add(w);for(let e=0;e<4;e++){let t=new W;t.rotation.y=e/4*Math.PI*2+.4,m.add(t);let n=new J(new Y(.018,.18,.09),_);n.position.set(0,.14,.135),n.rotation.x=.25,n.castShadow=!0,t.add(n)}let T=new J(new na(.075,.26,7),new q({color:16752412}));T.rotation.x=Math.PI,T.position.y=-.12,T.visible=!1,m.add(T);let E=new J(new na(.042,.16,6),new q({color:16707722}));E.rotation.x=Math.PI,E.position.y=-.07,E.visible=!1,m.add(E);let D=[];for(let e=0;e<10;e++){let n=new J(new ia(.035,0),new q({color:16317180,transparent:!0,opacity:.85}));n.visible=!1,n.userData={angle:e/10*Math.PI*2+t()*.4,speed:.35+t()*.35,lift:.15+t()*.25},s.add(n),D.push(n)}let O=Math.atan2(s.position.x,s.position.z),k=t()*7,A=r.update;return r.update=function(e,t=.016){A(e,t);let n=r.hitbox.userData.hovered,i=7.5,s=(e+k)%i/i;if(s<.45){m.visible=!0,m.position.set(-.02,h,0),m.scale.setScalar(1),T.visible=!1,E.visible=!1;let t=e*3.5%1;for(let e=0;e<4;e++){let n=D[e];n.visible=!0,n.material.color.setHex(e%2==0?16436245:3718648),n.material.opacity=1-t,n.scale.setScalar(.45*(1-t)),n.position.set(-.08+Math.cos(n.userData.angle)*t*.25,.42+Math.sin(t*Math.PI)*.12-t*.2,.12+Math.sin(n.userData.angle)*t*.25)}for(let e=4;e<D.length;e++)D[e].visible=!1;n||(r.bodyGroup.rotation.y=O-.15,a&&(a.rotation.x=-.95+Math.sin(e*9)*.14,a.rotation.z=.15+Math.cos(e*9)*.1),o&&(o.rotation.x=-.5,o.rotation.z=-.2))}else if(s<.58){let t=(s-.45)/.13;m.visible=!0,m.position.set(-.02+Math.sin(e*45)*.008,h,Math.cos(e*45)*.008),T.visible=!0,E.visible=!0,T.scale.setScalar(.5+t*.5),E.scale.setScalar(.5+t*.5);for(let e of D)e.visible=!0,e.material.color.setHex(15857145),e.material.opacity=(1-t*.5)*.85,e.scale.setScalar(.7+t*1.1),e.position.set(Math.cos(e.userData.angle)*(.1+t*e.userData.speed),.1+t*e.userData.lift,Math.sin(e.userData.angle)*(.1+t*e.userData.speed));n||(r.bodyGroup.rotation.y=O-.25,a&&(a.rotation.x=-.35,a.rotation.z=.2))}else if(s<.88){let t=(s-.58)/.3,i=t*t*t;m.position.y=h+i*2.6,m.rotation.y=t*1.5;let c=t>.7?Math.max(.01,1-(t-.7)/.3):1;m.scale.setScalar(c),T.visible=!0,E.visible=!0,T.scale.set(1,.9+Math.sin(e*30)*.35,1);let l=Math.min(1,t*2.2);for(let e of D)e.visible=l<.98,e.material.color.setHex(16317180),e.material.opacity=(1-l)*.85,e.scale.setScalar(1.5+l*1.2),e.position.set(Math.cos(e.userData.angle)*(.35+l*e.userData.speed),.22+l*.25,Math.sin(e.userData.angle)*(.35+l*e.userData.speed));n||(r.bodyGroup.rotation.y=O-.3,o&&(o.rotation.z=-2.2+Math.sin(e*10)*.2,o.rotation.x=-.2),a&&(a.rotation.z=.4,a.rotation.x=-.6))}else{let e=(s-.88)/.12;m.visible=!0,m.position.set(-.02,h,0),m.rotation.y=0,m.scale.setScalar(V.smoothstep(e,0,1)),T.visible=!1,E.visible=!1;for(let e of D)e.visible=!1}},r}function sx(e,t){let n=new W,r=new Q({color:7041664,roughness:.92,flatShading:!0}),i=new Q({color:t,emissive:t,emissiveIntensity:.25,roughness:.35,flatShading:!0}),a=new J(new Y(e,e,e),r);a.castShadow=!0,a.receiveShadow=!0,n.add(a);let o=e*.22,s=new Y(o,o,o),c=e/2,l=[[-e*.2,e*.15,c],[e*.18,-e*.18,c],[c,e*.1,-e*.15],[-c,-e*.1,e*.18],[e*.12,c,e*.12],[-e*.15,c,-e*.15]];for(let[e,t,r]of l){let a=new J(s,i);a.position.set(e,t,r),n.add(a)}return n}function cx(e,t,n){let r=Fb(e,t,n),i=r.armPivots.find(e=>e.side===1)?.shoulder;if(i){let e=new W;e.position.set(0,-.34,.04),e.rotation.set(Math.PI*.42,0,0);let t=new Q({color:7227179,roughness:.9,flatShading:!0}),n=new Q({color:3003583,emissive:889992,emissiveIntensity:.3,roughness:.3,flatShading:!0}),r=new J(new Y(.022,.32,.022),t);r.position.y=.09,r.castShadow=!0,e.add(r);let a=new J(new Y(.028,.034,.12),n);a.position.y=.23,a.castShadow=!0,e.add(a);for(let t of[-1,1]){let r=new J(new Y(.028,.03,.065),n);r.position.set(0,.205,t*.082),r.rotation.x=t*.42,r.castShadow=!0,e.add(r)}i.add(e)}let a=new W;a.position.set(.46,0,.18),r.visual.add(a);let o=sx(.26,3003583);o.position.set(-.08,.13,.04),o.rotation.y=.2,a.add(o);let s=sx(.24,16436245);s.position.set(.14,.12,-.05),s.rotation.y=-.35,a.add(s);let c=sx(.22,16007006);c.position.set(.02,.35,0),c.rotation.y=.45,a.add(c);let l=[],u=[3003583,16436245,16007006,16777215];for(let e=0;e<6;e++){let n=new J(new Y(.024,.024,.024),new q({color:u[e%u.length]}));n.visible=!1,n.userData={vx:(t()-.5)*.55,vy:.45+t()*.45,vz:(t()-.5)*.55},a.add(n),l.push(n)}let d=Math.atan2(a.position.x,a.position.z),f=t()*Math.PI*2,p=r.update;return r.update=function(e,t=.016){if(p(e,t),r.hitbox.userData.hovered){r.bodyGroup.rotation.x=0,c.position.x=.02;for(let e of l)e.visible=!1;return}r.bodyGroup.rotation.y=d;let n=(e*.9+f)%1,a;if(n<.65){let e=n/.65;a=V.lerp(-.65,-2.15,Math.sin(e*Math.PI/2))}else{let e=(n-.65)/.35;a=V.lerp(-2.15,-.65,e*e)}i&&(i.rotation.x=a,i.rotation.z=.12),r.bodyGroup.rotation.x=n>.65?(n-.65)*.45:0;let o=n>=.85?(n-.85)/.4:n<.25?(n+.15)/.4:-1;if(o>=0&&o<=1){let e=Math.sin(o*Math.PI*3)*.018*(1-o);c.position.x=.02+e;for(let e of l)e.visible=!0,e.position.set(e.userData.vx*o,.46+e.userData.vy*o-.5*o*o,e.userData.vz*o),e.scale.setScalar(1-o*.85)}else{c.position.x=.02;for(let e of l)e.visible=!1}},r}function lx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.05),e.rotation.set(-.3,0,.15);let t=new Q({color:1976635,roughness:.45,flatShading:!0}),n=new J(new Y(.14,.075,.025),t);e.add(n);for(let n of[-1,1]){let r=new J(new Y(.036,.06,.024),t);r.position.set(n*.055,-.04,0),r.rotation.z=n*.28,e.add(r)}let r=[2278750,15680580,3900150,16436245],i=[[.035,.015],[.05,0],[.035,-.015],[.02,0]];for(let t=0;t<4;t++){let n=new J(new ta(.007,6),new q({color:r[t]}));n.position.set(i[t][0],i[t][1],.014),e.add(n)}a.add(e)}let o=new W;o.position.set(.64,.02,.14),o.rotation.set(-.22,-.42,0),r.visual.add(o);let s=new J(new Y(.82,.46,.036),new Q({color:1580585,roughness:.35,metalness:.55,flatShading:!0}));s.position.y=.29000000000000004,s.castShadow=!0,s.receiveShadow=!0,o.add(s);let c=.019999999999999997,l=new J(new Z(.75,.41000000000000003),new q({color:1981066}));l.position.z=c,s.add(l);let u=new J(new ta(.012,8),new q({color:593174}));u.position.set(-.82/2+.018,0,c),s.add(u);let d=new W;d.position.set(0,-.02,.045),s.add(d);let f=new J(new Y(.73,.055,.05),new Q({color:2278750,roughness:.8,flatShading:!0}));f.position.set(0,-.16000000000000003,0),d.add(f);let p=[{x:-.2,y:-.06,w:.16,color:16096779},{x:.02,y:.02,w:.16,color:16096779},{x:.24,y:.1,w:.16,color:1096065}];for(let e of p){let t=new J(new Y(e.w,.032,.055),new Q({color:e.color,roughness:.5,flatShading:!0}));t.position.set(e.x,e.y,.005),t.castShadow=!0,d.add(t)}let m=new W;m.position.set(-.2,-.01,.015),d.add(m);let h=new J(new Y(.058,.058,.045),new Q({color:i,roughness:.35,flatShading:!0}));h.castShadow=!0,m.add(h);let g=new J(new Ao(.035,0),new Q({color:16436245,emissive:16096779,emissiveIntensity:.4,roughness:.25,flatShading:!0}));g.position.set(.24,.16,.015),d.add(g);let _=new W;_.position.set(.64,.68,.14),r.visual.add(_);let v=new J(new Y(.13,.13,.13),new Q({color:16777215,roughness:.3,flatShading:!0}));_.add(v);let y=new Hi(new la(new Y(.18,.18,.18)),new Ai({color:3718648}));_.add(y);let b=new W;b.position.set(-.46,0,.22),b.rotation.y=.35,r.visual.add(b);let x=new Q({color:4054148,roughness:.45,flatShading:!0});for(let e of[-.035,.035]){let t=new J(new X(.018,.018,.07,6),x);t.position.set(e,.035,0),b.add(t)}let S=new J(new X(.085,.085,.13,8),x);S.position.y=.13,S.castShadow=!0,b.add(S);let C=new J(new Po(.085,8,5,0,Math.PI*2,0,Math.PI/2),x);C.position.y=.2,C.castShadow=!0,b.add(C);for(let e of[-.032,.032]){let t=new J(new Po(.012,5,4),new q({color:16777215}));t.position.set(e,.235,.072),b.add(t);let n=new J(new X(.004,.005,.045,4),x);n.position.set(e*1.4,.285,0),n.rotation.z=-e*6.5,b.add(n)}for(let e of[-.105,.105]){let t=new J(new X(.016,.016,.09,6),x);t.position.set(e,.14,0),b.add(t)}let w=t()*Math.PI*2,T=r.update;return r.update=function(e,t=.016){T(e,t),_.position.y=.68+Math.sin(e*2.2+w)*.03,v.rotation.set(e*.9,e*1.3,0),y.rotation.set(-e*.7,e*1.1,e*.5);let n=(e*1.35+w)%3,r=Math.floor(n),i=n%1,a=p[r],o=p[(r+1)%p.length];m.position.x=V.lerp(a.x,o.x,i);let s=V.lerp(a.y,o.y,i)+.045;m.position.y=s+Math.sin(i*Math.PI)*.085,m.rotation.z=-i*Math.PI*2,g.rotation.y=e*2.4,b.position.y=Math.abs(Math.sin(e*3+w))*.025,C.rotation.y=Math.sin(e*1.5+w)*.25},r}function ux(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new J(new X(.028,.028,.36,8),new Q({color:16317180,roughness:.6,flatShading:!0}));e.position.set(0,-.34,.05),e.rotation.x=.72,e.castShadow=!0,a.add(e)}let o=new W;o.position.set(.76,0,.1),o.rotation.y=-.36,r.visual.add(o);let s=new Q({color:1976635,roughness:.5,metalness:.5,flatShading:!0}),c=new Q({color:6583435,roughness:.9,flatShading:!0}),l=new J(new Y(.32,.12,.28),c);l.position.y=.06,l.castShadow=!0,l.receiveShadow=!0,o.add(l);let u=new J(new X(.055,.068,.92,8),s);u.position.y=.52,u.castShadow=!0,o.add(u);let d=.52,f=1.04,p=new J(new Y(.96,d,.055),s);p.position.set(0,f,.01),p.castShadow=!0,p.receiveShadow=!0,o.add(p);let m=new J(new Y(1,.02,.12),s);m.position.set(0,f-d/2-.015,.04),o.add(m);let h=.8999999999999999,g=.46,_=new J(new Z(h,g),new q({color:16317180}));_.position.z=.0295,p.add(_);let v=new J(new Z(h*.42,g),new q({color:i}));v.position.set(-.26099999999999995,0,.0315),p.add(v);let y=new J(new ta(.11,8),new q({color:16777215}));y.position.set(-.26099999999999995,.02,.0335),p.add(y);let b=new J(new Z(.42,.068),new q({color:988970}));b.position.set(.16,.09,.0325),p.add(b);let x=new J(new Z(.32,.03),new q({color:4674921}));x.position.set(.11,.015,.0325),p.add(x);let S=new J(new Z(.28,.055),new q({color:16096779}));S.position.set(.09,-.09,.0325),p.add(S);for(let e of[-.3,0,.3]){let t=new J(new Y(.016,.016,.11),s);t.position.set(e,1.32,.04),o.add(t);let n=new J(new Y(.065,.026,.04),new q({color:16707722}));n.position.set(e,1.32,.095),n.rotation.x=.45,o.add(n)}return r}function dx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder,s=new W;s.position.set(0,0,-.34),r.visual.add(s);let c=.34,l=.88,u=.022,d=new Q({color:16317180,roughness:.75,flatShading:!0}),f=new J(new Y(c,l,u),d);f.position.y=l/2,f.castShadow=!0,f.receiveShadow=!0,s.add(f);let p=new J(new Z(.29000000000000004,.2),new q({color:i}));p.position.set(0,.26,.013),f.add(p);for(let e=0;e<5;e++){let t=new J(new Z(.28,.026),new q({color:9741240}));t.position.set(0,.08-e*.085,.013),f.add(t)}let m=[16096779,3900150];for(let e=0;e<2;e++){let t=e===0?-1:1,n=new W;n.position.set(c/2*t,l/2,0),n.rotation.y=-t*.45,s.add(n);let r=new J(new Y(c,l,u),d);r.position.x=c/2*t,r.castShadow=!0,r.receiveShadow=!0,n.add(r);let i=new J(new ta(.085,8),new q({color:m[e]}));i.position.set(0,.2,.013),r.add(i);for(let e=0;e<4;e++){let t=new J(new Z(.28,.024),new q({color:13358561}));t.position.set(0,.02-e*.08,.013),r.add(t)}}if(o){let e=new J(new Y(.11,.03,.15),new Q({color:16777215,roughness:.6}));e.position.set(0,-.34,.04),o.add(e)}let h=new J(new Y(.11,.006,.15),new q({color:i}));a&&(h.position.set(0,-.35,.05),a.add(h));let g=[],_=[i,16436245,3718648,16007006,1096065,16777215];for(let e=0;e<6;e++){let n=new J(new Z(.11,.15),new q({color:_[e%_.length],side:2}));n.visible=!1,n.userData={phase:e/6,dirX:(t()-.5)*1.1,dirZ:.45+t()*.55,spinX:(t()-.5)*8,spinZ:(t()-.5)*8,flutter:1.5+t()*2},r.visual.add(n),g.push(n)}let v=t()*5,y=r.update;return r.update=function(e,t=.016){y(e,t);let n=r.hitbox.userData.hovered;for(let t of g){let n=(e*.35+t.userData.phase+v)%1;t.visible=!0;let r=Math.sin(n*Math.PI*t.userData.flutter)*.14,i=t.userData.dirX*.15,a=t.userData.dirX*.68+r,o=t.userData.dirZ*.72,s=Math.sin(Math.min(1,n*1.4)*Math.PI)*.24,c=V.lerp(.62,.012,n*n)+s*(1-n);t.position.set(V.lerp(i,a,n),c,V.lerp(.25,o,n)),n>.88?t.rotation.set(-Math.PI/2,t.userData.spinZ*.2,0):t.rotation.set(e*t.userData.spinX,e*2,e*t.userData.spinZ)}if(n)return;r.bodyGroup.rotation.y=Math.sin(e*2.1+v)*.35;let i=Math.sin(e*4.5+v);a&&(a.rotation.x=-.85+i*.45,a.rotation.z=.25+Math.cos(e*4.5+v)*.22),o&&(o.rotation.x=-.65,o.rotation.z=-.22)},r}function fx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new J(new Y(.14,.085,.01),new Q({color:16777215,roughness:.5}));e.position.set(0,-.34,.05),e.rotation.x=-.35,a.add(e)}let o=new W;o.position.set(.56,0,.12),o.rotation.y=-.38,r.visual.add(o);let s=new J(new X(.2,.23,.44,8),new Q({color:1976635,roughness:.7,flatShading:!0}));s.position.y=.22,s.castShadow=!0,s.receiveShadow=!0,o.add(s);for(let e=0;e<4;e++){let t=new J(new Y(.24,.014,.14),new Q({color:e===3?16777215:14870768,roughness:.6}));t.position.set(0,.448+e*.015,0),t.rotation.y=(e-1.5)*.14,t.castShadow=!0,o.add(t)}let c=new W;c.position.set(0,.78,.02),c.rotation.z=.08,o.add(c);let l=new J(new Y(.46,.27,.018),new Q({color:988970,roughness:.45,flatShading:!0}));l.castShadow=!0,c.add(l);let u=new Hi(new la(new Z(.42000000000000004,.23)),new Ai({color:16436245}));u.position.z=.011,c.add(u);let d=new J(new ta(.048,6),new q({color:i}));d.position.set(-.12,.01,.012),c.add(d);let f=new J(new Z(.18,.026),new q({color:16436245}));f.position.set(.06,.035,.012),c.add(f);let p=new J(new Z(.15,.015),new q({color:9741240}));p.position.set(.045,-.015,.012),c.add(p);let m=r.update;return r.update=function(e,t=.016){m(e,t),c.position.y=.78+Math.sin(e*2)*.03,c.rotation.y=Math.sin(e*1.4)*.25},r}function px(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new J(new na(.036,.14,7),new Q({color:16436245,roughness:.4,flatShading:!0}));e.position.set(0,-.34,.05),e.rotation.x=.75,a.add(e)}let o=new W;o.position.set(.6,0,.12),o.rotation.y=-.38,r.visual.add(o);let s=.36,c=new J(new X(.28,.32,s,10),new Q({color:16317180,roughness:.6,flatShading:!0}));c.position.y=s/2,c.castShadow=!0,c.receiveShadow=!0,o.add(c);let l=new J(new X(.285,.285,.03,10),new q({color:16436245}));l.position.y=.345,o.add(l);let u=new W;u.position.set(-.04,.62,.02),u.rotation.z=-.06,o.add(u);let d=.46,f=.32,p=new J(new Y(d,f,.022),new Q({color:i,roughness:.45,flatShading:!0}));p.castShadow=!0,u.add(p);let m=new J(new Z(.41000000000000003,.27),new q({color:16776171}));m.position.z=.012,u.add(m);let h=new q({color:16096779}),g=new J(new Z(.036,f),h);g.position.set(-.11,0,.014),u.add(g);let _=new J(new Z(d,.036),h);_.position.set(0,.03,.014),u.add(_);let v=new W;v.position.set(-.11,.03,.024),u.add(v);for(let e of[-1,1]){let t=new J(new Fo(.034,.012,5,8),h);t.position.x=e*.028,t.rotation.y=e*.35,v.add(t)}let y=new J(new Po(.018,6,5),h);v.add(y);for(let e=0;e<3;e++){let t=new J(new Z(.2-e*.03,.018),new q({color:e===0?1976635:9741240}));t.position.set(.07,.07-e*.045,.014),u.add(t)}let b=new W;b.position.set(.16,.435,.1),b.rotation.y=.35,o.add(b);let x=.15,S=new J(new Y(x,x,x),new Q({color:3900150,roughness:.45,flatShading:!0}));S.castShadow=!0,b.add(S);let C=new J(new Y(.158,.158,.026),h);b.add(C);let w=new J(new Y(.026,.158,.158),h);b.add(w);let T=new W;T.position.set(.18,.92,-.04),o.add(T);let E=[{x:-.07,y:.12,z:.02,color:16007006,r:.085},{x:.06,y:.18,z:-.02,color:16436245,r:.09},{x:.01,y:.05,z:.06,color:3718648,r:.08}],D=[];for(let e of E){let t=new W;t.position.set(e.x,e.y,e.z),T.add(t);let n=new J(new ia(e.r,1),new Q({color:e.color,roughness:.3,flatShading:!0}));n.scale.set(.92,1.15,.92),n.castShadow=!0,t.add(n);let r=new J(new X(.003,.003,.45,4),new q({color:14870768}));r.position.y=-.25,t.add(r),D.push({pivot:t,baseY:e.y})}let O=t()*Math.PI*2,k=r.update;return r.update=function(e,t=.016){k(e,t),T.rotation.z=Math.sin(e*1.6+O)*.08;for(let t=0;t<D.length;t++){let n=D[t];n.pivot.position.y=n.baseY+Math.sin(e*2.4+t*1.3+O)*.025}u.position.y=.62+Math.sin(e*2+O)*.018},r}function mx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder;if(a){let e=new J(new Y(.14,.19,.018),new Q({color:8138002,roughness:.7,flatShading:!0}));e.position.set(0,-.34,.05),e.rotation.x=-.35,a.add(e)}let o=new W;o.position.set(.58,0,.14),o.rotation.y=-.4,r.visual.add(o);let s=new Q({color:6044964,roughness:.85,flatShading:!0});for(let e of[-1,1]){let t=new W;t.position.set(0,.66,0),t.rotation.x=-e*.22,o.add(t);let n=new J(new Y(.44,.68,.024),s);if(n.position.y=-.68/2,n.castShadow=!0,n.receiveShadow=!0,t.add(n),e===1){let e=new J(new Z(.38,.56),new q({color:1976635}));e.position.set(0,-.32,.014),t.add(e);let n=new J(new Z(.22,.042),new q({color:16498468}));n.position.set(0,-.11,.016),t.add(n);for(let e=0;e<5;e++){let n=-.2-e*.068,r=new J(new Z(.2,.018),new q({color:16317180}));r.position.set(-.05,n,.016),t.add(r);let a=new J(new Z(.055,.018),new q({color:i}));a.position.set(.11,n,.016),t.add(a)}}}return r}function hx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder;if(a){let e=new W;e.position.set(0,-.35,.04),e.rotation.y=.3;let t=new J(new Fo(.02,.004,4,8,Math.PI*1.3),new q({color:9741240}));e.add(t);let n=new J(new Y(.16,.19,.025),new Q({color:i,roughness:.7,flatShading:!0}));n.position.y=-.11,n.castShadow=!0,e.add(n);let r=new J(new ta(.04,6),new q({color:16777215}));r.position.set(0,-.09,.015),e.add(r),a.add(e)}let s=new W;s.position.set(.68,0,.14),s.rotation.y=-.42,r.visual.add(s);let c=new Q({color:1976635,metalness:.55,roughness:.35,flatShading:!0}),l=.84,u=1.02,d=.28,f=new J(new Y(l,.035,d),new Q({color:3359061,roughness:.8,flatShading:!0}));f.position.y=.05,f.castShadow=!0,f.receiveShadow=!0,s.add(f);for(let e of[-.39,l/2-.03]){let t=new J(new X(.016,.016,u,6),c);t.position.set(e,u/2,0),t.castShadow=!0,s.add(t);for(let t of[-.28/2+.02,d/2-.02]){let n=new J(new X(.022,.022,.016,6),c);n.rotation.z=Math.PI/2,n.position.set(e,.022,t),s.add(n)}}let p=new J(new X(.016,.016,.9199999999999999,6),c);p.rotation.z=Math.PI/2,p.position.y=u,s.add(p);let m=[],h=new W;h.position.set(-.24,1,0),s.add(h),m.push({pivot:h,phase:0});let g=new Q({color:16317180,roughness:.85,flatShading:!0}),_=new J(new Y(.25,.34,.04),g);_.position.y=-.24,_.castShadow=!0,h.add(_);for(let e of[-1,1]){let t=new J(new Y(.09,.11,.038),g);t.position.set(e*.15,-.14,0),t.rotation.z=-e*.4,t.castShadow=!0,h.add(t)}let v=new J(new jo(.045,.072,8),new q({color:i,side:2}));v.position.set(0,-.21,.022),h.add(v);let y=new J(new ta(.035,3),new q({color:16096779}));y.position.set(0,-.21,.024),h.add(y);let b=new W;b.position.set(.04,1,.01),s.add(b),m.push({pivot:b,phase:1.4});let x=new Q({color:1976635,roughness:.85,flatShading:!0}),S=new J(new Y(.27,.38,.055),x);S.position.y=-.26,S.castShadow=!0,b.add(S);let C=new J(new ia(.085,0),x);C.position.set(0,-.06,-.02),C.scale.set(1.2,.85,.9),b.add(C);for(let e of[-1,1]){let t=new J(new Y(.08,.28,.045),x);t.position.set(e*.16,-.22,0),t.rotation.z=-e*.16,t.castShadow=!0,b.add(t)}let w=new J(new Z(.16,.07),new q({color:i}));w.position.set(0,-.2,.03),b.add(w);let T=new W;T.position.set(.28,1,0),s.add(T),m.push({pivot:T,phase:2.7});let E=new J(new Fo(.05,.008,4,8,Math.PI),new q({color:i}));E.position.y=-.07,T.add(E);let D=new J(new Y(.18,.22,.035),new Q({color:16708551,roughness:.9,flatShading:!0}));D.position.y=-.18,D.castShadow=!0,T.add(D);let O=new J(new ta(.045,6),new q({color:i}));O.position.set(0,-.18,.02),T.add(O);let k=new W;k.position.set(-.22,.07,.03),k.rotation.y=.35,s.add(k);let A=new J(new Po(.065,7,5,0,Math.PI*2,0,Math.PI/2),new Q({color:i,roughness:.7,flatShading:!0}));A.castShadow=!0,k.add(A);let j=new J(new X(.06,.065,.01,7,1,!1,-.8,1.6),new Q({color:1976635,roughness:.6}));j.position.set(0,.005,.045),k.add(j);let M=new J(new X(.042,.04,.09,8),new Q({color:16777215,roughness:.4,flatShading:!0}));M.position.set(.02,.115,.04),M.castShadow=!0,s.add(M);let N=new J(new X(.044,.044,.035,8),new q({color:i}));N.position.set(.02,.115,.04),s.add(N);let P=new J(new Y(.18,.11,.14),new Q({color:16096779,roughness:.6,flatShading:!0}));P.position.set(.24,.125,.01),P.rotation.y=-.2,P.castShadow=!0,s.add(P);let F=t()*Math.PI*2,I=r.update;return r.update=function(e,t=.016){I(e,t);let n=r.hitbox.userData.hovered;for(let t of m)t.pivot.rotation.z=Math.sin(e*2.1+t.phase+F)*.045;n||(r.bodyGroup.rotation.y=.35+Math.sin(e*1.6+F)*.25,a&&(a.rotation.x=-.55+Math.sin(e*2.5+F)*.15,a.rotation.z=.22),o&&(o.rotation.x=-.45+Math.cos(e*2.2+F)*.15,o.rotation.z=-.25))},r}function gx(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder,s=new W;s.position.set(0,0,.44),r.visual.add(s);let c=1.05,l=.42,u=.26,d=new Q({color:3359061,roughness:.6,metalness:.4,flatShading:!0}),f=new Q({color:1976635,roughness:.85,flatShading:!0});for(let e of[-.445,c/2-.08])for(let t of[-.1,u/2-.03]){let n=new J(new Y(.03,l,.03),d);n.position.set(e,l/2,t),n.castShadow=!0,s.add(n)}let p=new J(new Y(c,.05,u),d);p.position.y=l,p.castShadow=!0,p.receiveShadow=!0,s.add(p);let m=new J(new Y(1.01,.014,.22),f);m.position.y=.44999999999999996,m.receiveShadow=!0,s.add(m);let h=[];for(let e of[-1.05/2,c/2]){let t=new J(new X(.032,.032,.27,8),new Q({color:9741240,metalness:.6,roughness:.35}));t.rotation.x=Math.PI/2,t.position.set(e,l,0),s.add(t),h.push(t)}let g=.16,_=[i,16096779,3900150],v=[];for(let e=0;e<3;e++){let t=new W;t.position.set(0,.5369999999999999,0),s.add(t);let n=new J(new Y(g,g,g),new Q({color:14262374,roughness:.85,flatShading:!0}));n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=new J(new Z(g,.025),new q({color:12748877}));r.rotation.x=-Math.PI/2,r.position.y=.081,t.add(r);let i=new W;i.position.set(0,.083,0),i.visible=!1,t.add(i);let a=new J(new Z(g*.68,g*.54),new q({color:16777215}));a.rotation.x=-Math.PI/2,i.add(a);let o=new J(new Z(g*.48,g*.22),new q({color:_[e]}));o.rotation.x=-Math.PI/2,o.position.y=.001,i.add(o),v.push({pivot:t,label:i,badgeMat:o.material,phase:e/3})}let y=new W,b=new q({color:i}),x=new J(new Y(.11,.08,.006),new q({color:16777215}));y.add(x);let S=new J(new Z(.08,.035),b);S.position.z=.004,y.add(S),a&&(y.position.set(0,-.34,.04),y.rotation.x=-.4,a.add(y));let C=t()*5,w=r.update;return r.update=function(e,t=.016){w(e,t);let n=r.hitbox.userData.hovered;for(let t of h)t.rotation.y=-e*2.5;let i=null,s=1/0;for(let t of v){let n=(e*.16+t.phase+C)%1,r=V.lerp(-.48,.48,n);t.pivot.position.x=r;let a=Math.min(1,n/.1,(1-n)/.1);t.pivot.scale.setScalar(Math.max(.01,a));let o=r>.02;t.label.visible=o,Math.abs(r)<s&&(s=Math.abs(r),i=t)}if(n){y.visible=!0;return}let c=i?i.pivot.position.x:0;if(r.bodyGroup.rotation.y=V.clamp(c*.8,-.35,.35),i&&b.color.copy(i.badgeMat.color),c>-.18&&c<=.02){let e=(c+.18)/.2;y.visible=!0,a&&(a.rotation.x=V.lerp(-.55,-1.05,e),a.rotation.z=.1),o&&(o.rotation.x=-.65,o.rotation.z=-.15)}else if(c>.02&&c<.15){let e=(c-.02)/.13;y.visible=!1,a&&(a.rotation.x=V.lerp(-1.05,-.45,e),a.rotation.z=.14)}else y.visible=!0,a&&(a.rotation.x=-.45+Math.sin(e*3)*.05,a.rotation.z=.18),o&&(o.rotation.x=-.4,o.rotation.z=-.18)},r}function _x(e,t,n){let r=Fb(e,t,n),i=new G(e),a=r.armPivots.find(e=>e.side===1)?.shoulder,o=r.armPivots.find(e=>e.side===-1)?.shoulder;if(a){let e=new W;e.position.set(0,-.34,.04),e.rotation.x=.78;let t=new J(new X(.01,.012,.28,5),new Q({color:1976635,roughness:.7}));t.position.y=.08,e.add(t);let n=new J(new X(.026,.026,.14,8),new Q({color:16436245,roughness:.5,flatShading:!0}));n.rotation.z=Math.PI/2,n.position.set(0,.23,.02),n.castShadow=!0,e.add(n),a.add(e)}if(o){let e=new J(new X(.024,.024,.3,8),new Q({color:3718648,roughness:.5,flatShading:!0}));e.position.set(0,-.34,.04),e.rotation.x=.5,o.add(e)}let s=new W;s.position.set(.62,0,.14),r.visual.add(s);let c=new Q({color:1976635,roughness:.55,metalness:.35,flatShading:!0}),l=new Q({color:16096779,metalness:.5,roughness:.35,flatShading:!0}),u=new J(new X(.32,.36,.14,10),c);u.position.y=.07,u.castShadow=!0,u.receiveShadow=!0,s.add(u);let d=.29,f=new J(new X(d,d,.78,10),new Q({color:3359061,roughness:.85,flatShading:!0}));f.position.y=.53,f.castShadow=!0,f.receiveShadow=!0,s.add(f);let p=[{bg:16317180,shape:i,bar:988970},{bg:1973067,shape:16436245,bar:3718648},{bg:16776171,shape:15680580,bar:1976635},{bg:413243,shape:3462041,bar:16777215}];for(let e=0;e<4;e++){let t=e/4*Math.PI*2+.35,n=new W;n.position.y=.53,n.rotation.y=t,s.add(n);let r=p[e],i=new J(new Y(.34,.58,.014),new q({color:r.bg}));i.position.z=d,n.add(i);let a=new J(new ta(.095,8),new q({color:r.shape}));a.position.set(0,.04,.3),n.add(a);let o=new J(new Z(.24,.048),new q({color:r.bar}));o.position.set(0,.19,.3),n.add(o);let c=new J(new Z(.22,.032),new q({color:r.shape}));c.position.set(0,-.18,.3),n.add(c)}let m=new J(new X(.35,.31,.07,10),c);m.position.y=.92+.035,m.castShadow=!0,s.add(m);let h=new J(new na(.34,.24,10),c);h.position.y=1.11,h.castShadow=!0,s.add(h);let g=new J(new Ao(.05,0),l);g.position.y=1.26,s.add(g);let _=new J(new X(.065,.052,.13,8),new Q({color:9741240,metalness:.5,roughness:.4,flatShading:!0}));_.position.set(-.28,.065,.22),_.castShadow=!0,s.add(_);let v=Math.atan2(s.position.x,s.position.z),y=t()*Math.PI*2,b=r.update;return r.update=function(e,t=.016){b(e,t);let n=r.hitbox.userData.hovered;if(g.rotation.y=e*1.5,n)return;r.bodyGroup.rotation.y=v-.18;let i=Math.sin(e*4.2+y);a&&(a.rotation.x=-1.05+i*.32,a.rotation.z=.15),o&&(o.rotation.x=-.45,o.rotation.z=-.2)},r}var vx={"3d-artist":Ib,cube:Lb,artist:Rb,easel:zb,stickers:Vb,icons:Hb,social:Ub,"business-card-website":Wb,"landing-page":Gb,"promo-website":Kb,"web-service":qb,marketplace:Yb,"dev-business-card":Xb,"dev-landing-page":Zb,"dev-promo-website":Qb,"dev-web-service":$b,"dev-marketplace":ex,banner:tx,newsletter:rx,"quiz-design":ix,seo:ax,"identity-brand":ox,minecraft:cx,gamedev:lx,billboard:ux,booklet:dx,"business-card":fx,certificate:px,menu:mx,merch:hx,packaging:gx,poster:_x};function yx(e,t,n,r){let i=typeof e==`string`?e.trim().toLowerCase():null;return i&&vx[i]?vx[i](t,n,r):Fb(t,n,r)}function bx(e){return typeof e==`string`?e.trim().toLowerCase():null}function xx(e,t,n,r,i,a=0,o){let s=new W,c=[],l=[],u=e.length,d=Eb(a*11+5),f=[],p=.4;for(let a=0;a<u;a++){let m=e[a],h=bx(m?.slug);if(!h)continue;let g=!1,_=0;for(;!g&&_<300;){_++;let e=d()*Math.PI*2,v=n.radiusAt(e)-p-.3,y=i-p,b=Math.min(v,y);if(b<=r)continue;let x=d(),S=r+(b-r)*x,C=Math.cos(e)*S,w=Math.sin(e)*S,T=!1;for(let e of f){let t=C-e.x,n=w-e.z;if(Math.hypot(t,n)<p*2.2){T=!0;break}}if(T)continue;f.push({x:C,z:w}),g=!0;let E=m?.color?new G(m.color):new G().setHSL(a/Math.max(1,u),.7,.55),{hitbox:D,hitH:O,update:k,triggerJump:A}=yx(m?.model,E,d,o);D.position.set(C,t+O/2,w),D.castShadow=!1,D.receiveShadow=!1,D.userData.baseY=D.position.y,D.userData.hovered=!1,D.userData.bounce=0,D.userData.clickCount=0,D.userData.content=m,D.userData.slug=h,D.userData.dimmed=!1,D.userData.highlighted=!1,D.userData.updatePerson=k,D.userData.triggerJump=A,D.userData.isPerson=!0,D.traverse(e=>{e!==D&&(e.userData.isPersonRoot=D)}),s.add(D),c.push(D),l.push(k)}}function m(e,t){for(let n of l)n(e,t)}return{group:s,cubes:c,update:m}}function Sx(e,t,n,r,i,a=0){let o=new W,s=new J(new X(.14,.2,1.6,6),new Q({color:i.trunk,roughness:1,flatShading:!0}));s.position.y=.8,s.castShadow=!0,o.add(s);let c=new Q({color:i.leaves,roughness:.9,flatShading:!0});for(let e of[{y:1.8,r:1.15,h:1.3},{y:2.5,r:.9,h:1.2},{y:3.2,r:.58,h:1}]){let t=new J(new na(e.r,e.h,7),c);t.position.y=e.y,t.castShadow=!0,o.add(t)}return o.position.set(e,n,t),o.scale.setScalar(r),o}function Cx(e,t,n,r,i,a=0){let o=new W,s=new J(new X(.14,.2,1.6,6),new Q({color:i.trunk,roughness:1,flatShading:!0}));s.position.y=.8,s.castShadow=!0,o.add(s);let c=new Q({color:i.leaves,roughness:.9,flatShading:!0}),l=new Q({color:16777215,roughness:.85,flatShading:!0});for(let e of[{y:1.8,r:1.15,h:1.3,snow:!1},{y:2.5,r:.9,h:1.2,snow:!0},{y:3.2,r:.58,h:1,snow:!0}]){let t=new J(new na(e.r,e.h,7),c);if(t.position.y=e.y,t.castShadow=!0,o.add(t),e.snow){let t=e.h*.35,n=new J(new na(e.r*.75,t,7),l);n.position.y=e.y+e.h/2-t/2,n.castShadow=!0,o.add(n)}}return o.position.set(e,n,t),o.scale.setScalar(r),o}function wx(e,t,n,r,i,a=0){let o=new W,s=Eb(a),c=new Q({color:i.leaves,roughness:.9,flatShading:!0}),l=new Q({color:new G(i.leaves).multiplyScalar(.88),roughness:.95,flatShading:!0}),u=1.5+s()*.5,d=.17+s()*.03,f=new J(new X(d*.92,d,u,7),c);f.position.y=u/2,f.castShadow=!0,f.receiveShadow=!0,o.add(f);let p=new J(new Po(d*.92,7,4,0,Math.PI*2,0,Math.PI/2),c);p.position.y=u,p.castShadow=!0,o.add(p);let m=new J(new X(d*1.02,d*1.18,.18,7),l);m.position.y=.09,m.receiveShadow=!0,o.add(m);let h=s()>.35?2:1,g=s()*Math.PI*2;for(let e=0;e<h;e++){let t=new W;t.rotation.y=g+e*(Math.PI+(s()-.5)*.5);let n=u*(.38+e*.18+s()*.08);t.position.y=n;let r=d*(.62+s()*.1),i=.28+s()*.1,a=.45+s()*.25,l=new J(new X(r,r*1.05,i,6),c);l.rotation.z=-Math.PI/2,l.position.x=d*.6+i/2,l.castShadow=!0,t.add(l);let f=d*.6+i,p=new J(new Oo(r*1.02,0),c);p.position.set(f,.02,0),p.castShadow=!0,t.add(p);let m=new J(new X(r*.92,r,a,6),c);m.position.set(f,a/2,0),m.castShadow=!0,t.add(m);let h=new J(new Po(r*.92,6,3,0,Math.PI*2,0,Math.PI/2),c);h.position.set(f,a,0),h.castShadow=!0,t.add(h),o.add(t)}if(s()>.6){let e=s()>.5?15883384:16107586,t=new J(new ia(.075,0),new Q({color:e,roughness:.6,flatShading:!0}));t.position.set((s()-.5)*.06,u+d*.95,(s()-.5)*.06),o.add(t)}return o.position.set(e,n,t),o.scale.setScalar(r),o}function Tx(e,t,n,r,i,a=0){let o=new W,s=Eb(a),c=new Q({color:i.trunk,roughness:1,flatShading:!0}),l=new Q({color:i.leaves,side:2,roughness:.85,flatShading:!0}),u=new Q({color:4861725,roughness:.9,flatShading:!0}),d=.48,f=(s()-.5)*.4,p=(s()-.5)*.4,m=0,h=0,g=0;for(let e=0;e<5;e++){let t=.16*(1-e/5*.35),n=new J(new X(.16*(1-(e+1)/5*.35),t,d*1.08,6),c),r=p*(e+1)*.14,i=-f*(e+1)*.14;n.rotation.set(r,e*.4,i),n.position.set(m+Math.sin(i)*-.24,h+d*.5*Math.cos(i),g+d*.5*Math.sin(r)),n.castShadow=!0,o.add(n),m+=-.48*.95*Math.sin(i),h+=d*.95*Math.cos(i),g+=d*.95*Math.sin(r)}for(let e=0;e<3;e++){let t=e/3*Math.PI*2+s(),n=new J(new ia(.11,0),u);n.position.set(m+Math.cos(t)*.14,h-.08,g+Math.sin(t)*.14),n.castShadow=!0,o.add(n)}for(let e=0;e<7;e++){let t=e/7*Math.PI*2+(s()-.5)*.25,n=new W;n.position.set(m,h,g),n.rotation.y=t;let r=1.25+s()*.25,i=new Z(.34,r,2,4);i.rotateX(Math.PI/2),i.translate(0,0,r/2);let a=i.attributes.position;for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getZ(e)/r,i=Math.sin(n*Math.PI);a.setX(e,t*i);let o=Math.sin(n*Math.PI)*.28-n*n*.55,s=Math.abs(t)*.22;a.setY(e,o-s)}i.computeVertexNormals();let c=new J(i,l);c.rotation.x=e%2==0?-.15:.15,c.castShadow=!0,n.add(c),o.add(n)}return o.position.set(e,n,t),o.scale.setScalar(r),o}function Ex(e,t,n,r,i,a=0){let o=new W,s=Eb(a),c=new Q({color:i.trunk,roughness:1,flatShading:!0}),l=new G(i.leaves),u=[new Q({color:l.clone().multiplyScalar(.85),roughness:.9,flatShading:!0}),new Q({color:l,roughness:.9,flatShading:!0}),new Q({color:l.clone().lerp(new G(13166197),.16),roughness:.85,flatShading:!0})],d=1.45+s()*.25,f=.18+s()*.04,p=new J(new X(f*.7,f,d,7),c);p.position.y=d/2,p.rotation.z=(s()-.5)*.06,p.rotation.x=(s()-.5)*.06,p.castShadow=!0,p.receiveShadow=!0,o.add(p);let m=new J(new X(f*.95,f*1.5,.28,7),c);m.position.y=.14,m.rotation.y=s()*Math.PI,m.castShadow=!0,m.receiveShadow=!0,o.add(m);let h=s()*Math.PI*2;for(let e=0;e<3;e++){let t=h+e/3*Math.PI*2+(s()-.5)*.3,n=.65+s()*.2,r=.65+s()*.12,i=new W;i.position.y=d*(.64+e*.06),i.rotation.y=t;let a=new J(new X(f*.35,f*.55,n,5),c);a.position.set(n*.45*Math.sin(r),n*.45*Math.cos(r),0),a.rotation.z=-r,a.castShadow=!0,i.add(a),o.add(i)}let g=d+.4,_=.85+s()*.15,v=new J(new Oo(_*.95,1),u[1]);v.position.set(0,g,0),v.rotation.set(s()*3,s()*3,s()*3),v.castShadow=!0,v.receiveShadow=!0,o.add(v);for(let e=0;e<4;e++){let t=h+e/4*Math.PI*2+(s()-.5)*.25,n=_*(.44+s()*.1),r=new J(new Oo(_*(.64+s()*.12),1),u[e%2]);r.position.set(Math.cos(t)*n,g-_*.08+(s()-.5)*.1,-Math.sin(t)*n),r.rotation.set(s()*3,s()*3,s()*3),r.castShadow=!0,r.receiveShadow=!0,o.add(r)}let y=new J(new Oo(_*.72,1),u[2]);return y.position.set((s()-.5)*.12,g+_*.42,(s()-.5)*.12),y.rotation.set(s()*3,s()*3,s()*3),y.castShadow=!0,y.receiveShadow=!0,o.add(y),o.position.set(e,n,t),o.scale.setScalar(r),o}var Dx={pine:Sx,snowpine:Cx,cactus:wx,palm:Tx,oak:Ex};function Ox(e,t,n,r,i,a=`pine`,o=0){return(Dx[a]??Sx)(e,t,n,r,i,o)}function kx(e,t,n,r,i,a,o=0,s=[]){let c=[],l=Math.round(t*.9),u=Math.round(l*r.treeChance),d=[];for(let t=0;t<u;t++){let l=.75+i()*.45;r.treeStyle===`oak`?l*=1.2:(r.treeStyle===`pine`||r.treeStyle===`snowpine`)&&(l*=1.3);let u;u=r.treeStyle===`cactus`?.22*l:r.treeStyle===`palm`?.35*l:r.treeStyle===`oak`?1.3*l:r.treeStyle===`pine`||r.treeStyle===`snowpine`?1.15*l:.9*l;let f=!1,p,m,h=0;for(;!f&&h<30;){h++;let e=i()*Math.PI*2,t=a.radiusAt(e)-u-.5;if(t<=0)continue;let n=t*Math.sqrt(i());p=Math.cos(e)*n,m=Math.sin(e)*n,f=!0;for(let e of s){let t=p-e.x,n=m-e.z,r=u+e.radius+.3;if(Math.hypot(t,n)<r){f=!1;break}}if(f)for(let e of d){let t=p-e.x,n=m-e.z,r=u+e.radius;if(Math.hypot(t,n)<r){f=!1;break}}}if(!f)continue;let g=Ox(p,m,n,l,r,r.treeStyle,o*100+t);e.add(g),c.push(g),d.push({x:p,z:m,radius:u})}return c}function Ax(e,t,n,r=.14){let i=new Oo(e,t),a=i.attributes.position,o=new U,s=n*1.37,c=n*2.91,l=n*4.13;for(let t=0;t<a.count;t++){o.fromBufferAttribute(a,t);let n=o.x/e,i=o.y/e,u=o.z/e,d=1+Math.sin(n*3.1+s)*Math.cos(i*2.7+c)*Math.sin(u*3.3+l)*r;o.multiplyScalar(d),o.y<0&&(o.y*=.78),a.setXYZ(t,o.x,o.y,o.z)}return i.computeVertexNormals(),i}function jx(e,t,n,r,i,a=0){let o=new W,s=Eb(a),c=new G(i.leaves);c.offsetHSL((s()-.5)*.04,0,(s()-.5)*.06);let l=(e=0)=>{let t=c.clone();return t.offsetHSL((s()-.5)*.03,(s()-.5)*.05,e),new Q({color:t,roughness:.88,flatShading:!0})},u=.42+s()*.16,d=new J(Ax(u,1,a+1,.16),l(.02));d.position.y=u*.72,d.scale.set(1+s()*.15,.88+s()*.15,1+s()*.15),d.rotation.y=s()*Math.PI*2,d.castShadow=!0,d.receiveShadow=!0,o.add(d);let f=3+Math.floor(s()*3),p=[{x:0,y:d.position.y,z:0,r:u}];for(let e=0;e<f;e++){let t=e/f*Math.PI*2+(s()-.5)*.6,n=u*(.52+s()*.3),r=u*(.45+s()*.28),i=Math.cos(t)*n,c=Math.sin(t)*n,d=r*.72+s()*.08,m=new J(Ax(r,1,a+10+e,.16),l(-.04+s()*.05));m.position.set(i,d,c),m.rotation.set(s()*.3,s()*Math.PI*2,s()*.3),m.castShadow=!0,m.receiveShadow=!0,o.add(m),p.push({x:i,y:d,z:c,r})}if(s()>.35){let e=[16731482,16758835,16744118,16774064],t=e[Math.floor(s()*e.length)],n=new Q({color:t,roughness:.4,flatShading:!0}),r=new ia(.042,0),i=5+Math.floor(s()*6);for(let e=0;e<i;e++){let e=p[Math.floor(s()*p.length)],t=s()*Math.PI*2,i=s()*Math.PI*.45,a=new J(r,n);a.position.set(e.x+Math.sin(i)*Math.cos(t)*e.r*.92,e.y+Math.cos(i)*e.r*.9,e.z+Math.sin(i)*Math.sin(t)*e.r*.92),a.scale.setScalar(.8+s()*.4),o.add(a)}}return o.position.set(e,n,t),o.scale.setScalar(r),o}function Mx(e,t,n,r=.14){let i=new Oo(e,t),a=i.attributes.position,o=new U,s=n*1.37,c=n*2.91,l=n*4.13;for(let t=0;t<a.count;t++){o.fromBufferAttribute(a,t);let n=o.x/e,i=o.y/e,u=o.z/e,d=1+Math.sin(n*3.1+s)*Math.cos(i*2.7+c)*Math.sin(u*3.3+l)*r;o.multiplyScalar(d),o.y<0&&(o.y*=.78),a.setXYZ(t,o.x,o.y,o.z)}return i.computeVertexNormals(),i}function Nx(e,t,n,r,i,a=0){let o=new W,s=Eb(a),c=new G(i.leaves);c.offsetHSL(0,0,-.04);let l=(e=0)=>{let t=c.clone();return t.offsetHSL((s()-.5)*.02,0,e),new Q({color:t,roughness:.9,flatShading:!0})},u=new Q({color:16054527,roughness:.75,flatShading:!0});function d(e,t,n,r,i,a){let c=new J(Mx(r,1,a,.15),l(i));c.position.set(e,t,n),c.rotation.y=s()*Math.PI*2,c.castShadow=!0,c.receiveShadow=!0,o.add(c);let d=new J(Mx(r*.86,1,a,.12),u);d.position.set(e+(s()-.5)*.03,t+r*.48,n+(s()-.5)*.03),d.scale.set(1.03,.48,1.03),d.rotation.y=c.rotation.y,d.castShadow=!0,d.receiveShadow=!0,o.add(d)}let f=.42+s()*.16;d(0,f*.72,0,f,.02,a+1);let p=4+Math.floor(s()*2);for(let e=0;e<p;e++){let t=e/p*Math.PI*2+(s()-.5)*.5,n=f*(.55+s()*.35),r=f*(.42+s()*.28);d(Math.cos(t)*n,r*.68+s()*.08,Math.sin(t)*n,r,-.03+(s()-.5)*.03,a+10+e)}return o.position.set(e,n,t),o.scale.setScalar(r),o}function Px(e,t,n,r,i,a,o=0,s=[]){let c=[];if(!r.bushChance||r.bushChance<=0)return c;let l=Math.round(t*.6),u=Math.round(l*r.bushChance),d=[];for(let t=0;t<u;t++){let l=.6+i()*.4,u=.85*l,f=!1,p,m,h=0;for(;!f&&h<40;){h++;let e=i()*Math.PI*2,t=a.radiusAt(e)-u-1.6;if(t<=0)continue;let n=t*Math.sqrt(i());p=Math.cos(e)*n,m=Math.sin(e)*n,f=!0;for(let e of s){let t=p-e.x,n=m-e.z,r=u+e.radius+.1;if(Math.hypot(t,n)<r){f=!1;break}}if(f)for(let e of d){let t=p-e.x,n=m-e.z,r=u+e.radius;if(Math.hypot(t,n)<r){f=!1;break}}}if(!f)continue;let g;g=r.bushStyle===`snow`?Nx(p,m,n,l,r,o*200+t):jx(p,m,n,l,r,o*200+t),e.add(g),c.push(g),d.push({x:p,z:m,radius:u})}return c}function Fx(e,t,n,r,i){let a=new J(new ia(r,0),new Q({color:i.rockDark,roughness:1,flatShading:!0}));return a.position.set(e,n+r*.4,t),a.rotation.set(Math.random(),Math.random(),Math.random()),a.castShadow=!0,a.receiveShadow=!0,a}function Ix(e,t,n,r,i,a,o=[]){let s=[],c=Math.round(t*.4),l=Math.round(c*r.rockChance),u=[];for(let t=0;t<l;t++){let t=.15+i()*.17,s=t*1.2,c=!1,l,d,f=0;for(;!c&&f<20;){f++;let e=i()*Math.PI*2,t=a.radiusAt(e)-s-.3;if(t<=0)continue;let n=t*Math.sqrt(i());l=Math.cos(e)*n,d=Math.sin(e)*n,c=!0;for(let e of o){let t=l-e.x,n=d-e.z,r=s+e.radius+.2;if(Math.hypot(t,n)<r){c=!1;break}}if(c)for(let e of u){let t=l-e.x,n=d-e.z,r=s+e.radius;if(Math.hypot(t,n)<r){c=!1;break}}}c&&(e.add(Fx(l,d,n,t,r)),u.push({x:l,z:d,radius:s}))}return s}function Lx(e,t,n,r,i,a){let o=Eb(a),s=new ko([new H(t*1.08,0),new H(t*.72,e*.32),new H(t*.38,e*.68),new H(.02,e)],n),c=s.attributes.position,l=(o()-.5)*t*.28,u=(o()-.5)*t*.28,d=new Map,f=[o()*Math.PI*2,o()*Math.PI*2];for(let t=0;t<c.count;t++){let n=c.getX(t),r=c.getY(t),i=c.getZ(t),a=V.clamp(r/e,0,1);if(Math.hypot(n,i)>.001){let e=Math.atan2(i,n);e<0&&(e+=Math.PI*2),Math.abs(e-Math.PI*2)<.001&&(e=0);let r=Math.round(a*10),s=`${e.toFixed(3)}|${r}`,p=d.get(s);if(p===void 0){let t=0;for(let n of f){let r=Math.abs(e-n);r>Math.PI&&(r=Math.PI*2-r),r<.7&&(t+=(1-r/.7)*.22)}p=1+(o()-.5)*.24+t,d.set(s,p)}c.setX(t,n*p+l*a**1.3),c.setZ(t,i*p+u*a**1.3)}else c.setX(t,l),c.setZ(t,u)}c.needsUpdate=!0,s.computeVertexNormals();let p=new G(r===`tropical`?6846554:i.rock),m=p.clone().multiplyScalar(.76),h=new G(i.grassTop),g=new G(r===`snowy`?i.grassTop:16054268),_=r===`snowy`||r===`forest`||r===`rocky`,v=r===`snowy`?.55:.78,y=[],b=new G,x=o()*Math.PI*2;for(let t=0;t<c.count;t++){let n=c.getX(t),i=c.getY(t),a=c.getZ(t),o=V.clamp(i/e,0,1),s=Math.atan2(a,n),l=Math.sin(s*3+x)*.05+Math.cos(s*2-x)*.03;_&&o>v+l?b.copy(g):r===`tropical`&&o<.42+l?b.lerpColors(h,p,V.clamp(o/.45,0,1)):b.lerpColors(m,p,o),y.push(b.r,b.g,b.b)}s.setAttribute(`color`,new K(y,3));let S=new J(s,new Q({vertexColors:!0,roughness:.95,flatShading:!0}));return S.castShadow=!0,S.receiveShadow=!0,S}function Rx(e,t,n,r,i,a,o,s){let c=new W;c.position.set(e,n,t);let l=Eb(s),u=7+Math.floor(l()*3),d=r*1.6,f=i*1.45,p=Lx(d,f,u,o,a,s);c.add(p);let m=l()>.35?2:1,h=l()*Math.PI*2;for(let e=0;e<m;e++){let t=h+e*(Math.PI*.85+l()*.6),n=d*(.4+l()*.15),r=f*(.45+l()*.12),i=f*(.42+l()*.1),p=Lx(n,r,Math.max(6,u-1),o,a,s+(e+1)*19);p.position.set(Math.cos(t)*i,0,Math.sin(t)*i),c.add(p)}let g=new Q({color:new G(a.rockDark??a.rock).multiplyScalar(.85),roughness:1,flatShading:!0}),_=2+Math.floor(l()*3);for(let e=0;e<_;e++){let e=l()*Math.PI*2,t=f*(.85+l()*.25),n=f*(.08+l()*.06),r=new J(new ia(n,0),g);r.scale.set(1.2,.75,1),r.position.set(Math.cos(e)*t,n*.35,Math.sin(e)*t),r.rotation.set(l()*2,l()*3,l()*2),r.castShadow=!0,r.receiveShadow=!0,c.add(r)}return c}function zx(e,t,n,r,i,a,o){let s=new W;s.position.set(e,n,t);let c=Eb(o),l=4+Math.floor(c()*2),u=r,d=new G(a.sand).multiplyScalar(.9),f=new Q({color:d,roughness:1,flatShading:!0}),p=new Q({color:d.clone().multiplyScalar(.75),roughness:1,flatShading:!0}),m=0,h=i;for(let e=0;e<l;e++){let t=u/l*(1-e*.06),n=h,r=new X(n*.82,n,t,4,1);r.rotateY(Math.PI/4);let i=r.attributes.position,a=new Map;for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getY(e),r=i.getZ(e);if(Math.hypot(t,r)<1e-4)continue;let o=Math.atan2(r,t);o<0&&(o+=Math.PI*2),Math.abs(o-Math.PI*2)<.001&&(o=0);let s=`${o.toFixed(2)}|${n.toFixed(2)}`,l=a.get(s);l===void 0&&(l=1+(c()-.5)*.03,a.set(s,l)),i.setX(e,t*l),i.setZ(e,r*l)}i.needsUpdate=!0,r.computeVertexNormals();let o=new J(r,f);if(o.position.y=m+t/2,o.castShadow=!0,o.receiveShadow=!0,s.add(o),e<l-1){let e=new X(n*.83,n*.83,.08,4,1);e.rotateY(Math.PI/4);let r=new J(e,p);r.position.y=m+t-.02,s.add(r)}m+=t,h*=.72}let g=new X(h*1.02,h*1.05,.1,4,1);g.rotateY(Math.PI/4);let _=new J(g,p);_.position.y=m+.04,_.castShadow=!0,s.add(_);let v=i*Math.SQRT1_2,y=new Q({color:2759184,roughness:1,flatShading:!0}),b=new J(new Y(i*.24,r*.16,.12),p);b.position.set(0,r*.08,v-.02),s.add(b);let x=new J(new Y(i*.15,r*.12,.14),y);return x.position.set(0,r*.06,v-.01),s.add(x),s}function Bx(e,t,n,r,i,a,o){let s=new W;s.position.set(e,n,t);let c=.93+(Eb(o)()-.5)*.06,l=new Q({color:new G(a.sand).multiplyScalar(c),roughness:.95,flatShading:!0}),u=new na(i,r,4,1);u.rotateY(Math.PI/4),u.computeVertexNormals();let d=new J(u,l);d.position.y=r/2,d.castShadow=!0,d.receiveShadow=!0,s.add(d);let f=r*.15,p=new na(i*.15,f,4,1);p.rotateY(Math.PI/4);let m=new J(p,new Q({color:14727232,roughness:.45,metalness:.4,flatShading:!0}));return m.position.y=r-f/2+.01,m.castShadow=!0,s.add(m),s}function Vx(e,t,n,r,i,a,o){let s=new W;s.position.set(e,n,t);let c=Eb(o),l=14+Math.floor(c()*4),u=r*2,d=i*1.5,f=d*.34,p=d*.14,m=u*.18,h=[{r:d*1.05,y:0},{r:d*.82,y:u*.25},{r:d*.56,y:u*.62},{r:f,y:u},{r:f*.72,y:u-m*.55},{r:p,y:u-m},{r:0,y:u-m}],g=new ko(h.map(e=>new H(e.r,e.y)),l),_=new Map,v=g.attributes.position;for(let e=0;e<v.count;e++){let t=v.getX(e),n=v.getY(e),r=v.getZ(e);if(Math.hypot(t,r)<.001)continue;let i=Math.atan2(r,t);i<0&&(i+=Math.PI*2),Math.abs(i-Math.PI*2)<.001&&(i=0);let a=Math.round(n/u*20),o=`${i.toFixed(3)}|${a}`,s=_.get(o);if(s===void 0){let e=Math.abs(n-u)<.05;s={rScale:1+(c()-.5)*.22,yShift:e?(c()-.5)*(u*.09):(c()-.5)*.15},_.set(o,s)}v.setX(e,t*s.rScale),v.setZ(e,r*s.rScale),n>.05&&v.setY(e,n+s.yShift)}v.needsUpdate=!0,g.computeVertexNormals();let y=[],b=new G(4864818),x=new G(3352868),S=new G(1775382),C=new G;for(let e=0;e<v.count;e++){let t=v.getY(e),n=V.clamp(t/u,0,1);n<.5?C.lerpColors(b,x,n*2):C.lerpColors(x,S,(n-.5)*2),y.push(C.r,C.g,C.b)}g.setAttribute(`color`,new K(y,3));let w=new J(g,new Q({vertexColors:!0,roughness:.95,flatShading:!0}));w.castShadow=!0,w.receiveShadow=!0,s.add(w);let T=new Q({color:16738842,emissive:16726784,emissiveIntensity:2.2,roughness:.35,flatShading:!0}),E=u-m*.52,D=new ta(f*.62,l);D.rotateX(-Math.PI/2);let O=D.attributes.position;for(let e=0;e<O.count;e++)O.setY(e,(c()-.5)*.06);D.computeVertexNormals();let k=new J(D,T);k.position.y=E,s.add(k);let A=[],j=Math.floor(l/3),M=Math.floor(c()*l);for(let e=0;e<3;e++){let t=(M+e*j)%l,n=c()>.5?0:1;A.push({seg:t,endRing:n})}let N=g.index,P=g.attributes.position,F=g.attributes.normal,I=[],ee=[];if(N){N.array;let e=new G(16743200),t=new G(12068872);h.length-1;let n=h.length;for(let{seg:r,endRing:i}of A)for(let a=i;a<=2;a++){let o=r*n+a,s=(r+1)*n+a,c=r*n+(a+1),l=(r+1)*n+(a+1),d=3-i,f=(a-i)/d,p=(a+1-i)/d,m=.15+f*.71,h=.15+p*.71;function g(e,t,n){let r=P.getX(e),i=P.getY(e),a=P.getZ(e),o=P.getX(t),s=P.getY(t),c=P.getZ(t),l=(r+o)*.5,u=(i+s)*.5,d=(a+c)*.5,f=l+(r-l)*n,p=u+(i-u)*n,m=d+(a-d)*n,h=(F.getX(e)+F.getX(t))*.5,g=(F.getY(e)+F.getY(t))*.5,_=(F.getZ(e)+F.getZ(t))*.5,v=.035;return{x:f+h*v,y:p+g*v,z:m+_*v}}let _=g(o,s,m),v=g(s,o,m),y=g(c,l,h),b=[_,v,y,v,g(l,c,h),y];for(let n of b){I.push(n.x,n.y,n.z);let r=V.clamp(n.y/u,0,1),i=t.clone().lerp(e,r);ee.push(i.r,i.g,i.b)}}}if(I.length>0){let e=new Mr;e.setAttribute(`position`,new K(I,3)),e.setAttribute(`color`,new K(ee,3)),e.computeVertexNormals();let t=new Q({vertexColors:!0,emissive:16726784,emissiveIntensity:1.6,roughness:.4,flatShading:!0}),n=new J(e,t);s.add(n),T.userData.surfaceMat=t}let L=new Q({color:2827297,roughness:1,flatShading:!0}),te=4+Math.floor(c()*3);for(let e=0;e<te;e++){let e=c()*Math.PI*2,t=d*(.95+c()*.25),n=d*(.08+c()*.07),r=new J(new ia(n,0),L);r.position.set(Math.cos(e)*t,n*.5,Math.sin(e)*t),r.rotation.set(c()*3,c()*3,c()*3),r.castShadow=!0,r.receiveShadow=!0,s.add(r)}let ne=[];for(let e=0;e<7;e++){let t=new J(new ia(d*(.14+c()*.1),0),new Q({color:5591118,transparent:!0,opacity:.45,roughness:1,flatShading:!0,depthWrite:!1}));t.userData={phase:e/7,speed:.22+c()*.08,rotSpeed:(c()-.5)*1.2,wobble:c()*Math.PI*2},s.add(t),ne.push(t)}function re(e){let t=2+Math.sin(e*2.2)*.6;T.emissiveIntensity=t,T.userData.surfaceMat&&(T.userData.surfaceMat.emissiveIntensity=t*.9);for(let t of ne){let{phase:n,speed:r,rotSpeed:i,wobble:a}=t.userData,o=(e*r+n)%1,s=u*.85*o,c=o**1.5*(d*.9);t.position.set(c+Math.sin(e*.8+a)*.25,u-m*.3+s,c*.4+Math.cos(e*.7+a)*.25),t.rotation.y=e*i,t.rotation.x=e*i*.5;let l=.6+o*1.4;t.scale.setScalar(l),t.material.opacity=Math.sin(o*Math.PI)*.45}}return{group:s,update:re}}function Hx(e,{N:t,grassRadius:n,grassTop:r,palette:i,biomeKey:a,rand:o,seed:s}){let c=[],l=[],u=[],d=i.structureStyle??`mountain`;if(t<(i.structureMinContent??5))return{structures:c,spots:l,updaters:u};if(d===`pyramid`){let e=5+(t-5)*.25+o()*1,a=n*.22*(.85+o()*.3);l.push({x:0,z:0,r:a}),c.push(zx(0,0,r,e,a,i,s*31+1));let u=t>=7&&t%2==1?Math.floor((t-5)/2):0;if(u>0){let t=a*.45,n=e*.55,d=a+t+.8;for(let e=0;e<u;e++){let a=e/u*Math.PI*2+o()*.4,f=d+o()*.6,p=Math.cos(a)*f,m=Math.sin(a)*f;l.push({x:p,z:m,r:t}),c.push(Bx(p,m,r,n*(.85+o()*.3),t*(.85+o()*.2),i,s*31+e*7+13))}}}else if(d===`volcano`){let e=6+(t-5)*.3+o()*1.5,a=n*.28*(.9+o()*.2);l.push({x:0,z:0,r:a});let{group:d,update:f}=Vx(0,0,r,e,a,i,s*31+7);c.push(d),u.push(f)}else{let e=Math.min(5,1+Math.floor((t-5)/2)),u=n*.22;for(let d=0;d<e;d++){let f=0,p=0;if(d===0)f=0,p=0;else{let t=(d-1)/Math.max(1,e-1)*Math.PI*2,n=u*(.9+o()*.2);f=Math.cos(t)*n,p=Math.sin(t)*n}let m=d===0,h=(m?5:3.5)+(t-5)*.25+o()*1,g=n*(m?.22:.15)*(.85+o()*.3);l.push({x:f,z:p,r:g}),c.push(Rx(f,p,r,h,g,i,a,s*31+d*7))}}for(let t of c)e.add(t);return{structures:c,spots:l,updaters:u}}function Ux(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=Eb(a),c=new Q({color:6052697,roughness:.95,flatShading:!0}),l=new Q({color:2367518,roughness:1,flatShading:!0}),u=new Q({color:16729360,emissive:16723968,emissiveIntensity:1.8,roughness:.8,flatShading:!0}),d=new G(i.trunk),f=new G(1840660),p=new q({color:16738842,transparent:!0,opacity:.88}),m=new q({color:16758832,transparent:!0,opacity:.92}),h=new q({color:16774592,transparent:!0}),g=new J(new X(.28,.36,.05,8),l);g.position.y=.025,g.receiveShadow=!0,o.add(g);let _=[];for(let e=0;e<6;e++){let e=s()*Math.PI*2,t=s()*.22,n=new J(new ia(.035+s()*.02,0),u);n.position.set(Math.cos(e)*t,.045,Math.sin(e)*t),n.rotation.set(s()*3,s()*3,s()*3),o.add(n),_.push(n)}let v=7+Math.floor(s()*3);for(let e=0;e<v;e++){let t=e/v*Math.PI*2+(s()-.5)*.25,n=.1+s()*.06,r=.36+(s()-.5)*.05,i=new J(new ia(n,0),c);i.scale.set(1.15,.72,.95),i.position.set(Math.cos(t)*r,n*.36,Math.sin(t)*r),i.rotation.set(s()*.5,s()*Math.PI*2,s()*.5),i.castShadow=!0,i.receiveShadow=!0,o.add(i)}let y=4+Math.floor(s()*2);for(let e=0;e<y;e++){let t=e/y*Math.PI*2+(s()-.5)*.35,n=.58+s()*.12,r=new X(.038+s()*.01,.052+s()*.01,n,6,2);r.translate(0,n/2,0);let i=r.attributes.position,a=[],c=new G;for(let e=0;e<i.count;e++){let t=V.clamp(i.getY(e)/n,0,1);c.lerpColors(d,f,t**1.4),a.push(c.r,c.g,c.b)}r.setAttribute(`color`,new K(a,3));let l=new Q({vertexColors:!0,roughness:.95,flatShading:!0}),u=new W;u.rotation.y=t;let p=new J(r,l);p.position.set(.32,.03,0),p.rotation.z=.58+(s()-.5)*.14,p.castShadow=!0,p.receiveShadow=!0,u.add(p),o.add(u)}let b=[];function x(e,t,n,r,i,a){let c=new na(e,t,5);c.translate(0,t/2,0);let l=new J(c,n);l.position.set(r,.08,i),l.userData={phase:s()*Math.PI*2,speed:a,tiltX:(s()-.5)*.15,tiltZ:(s()-.5)*.15,baseOpacity:n.opacity},o.add(l),b.push(l)}x(.11,.34,h,0,0,4.5),x(.15,.52,m,.04,.03,3.6),x(.14,.46,m,-.05,-.02,4.1),x(.19,.68,p,.02,-.04,2.9),x(.17,.62,p,-.04,.04,3.3);let S=[],C=new q({color:16765536});for(let e=0;e<6;e++){let t=new J(new Ao(.018,0),C);t.userData={phase:e/6,speed:.6+s()*.4,angle:s()*Math.PI*2,radius:.08+s()*.14},o.add(t),S.push(t)}let w=[],T=new Q({color:8025716,transparent:!0,opacity:.3,roughness:1,flatShading:!0,depthWrite:!1});for(let e=0;e<4;e++){let t=new J(new ia(.11,0),T.clone());t.userData={phase:e/4,speed:.32+s()*.1,wobble:s()*Math.PI*2},o.add(t),w.push(t)}let E=document.createElement(`canvas`);E.width=64,E.height=64;let D=E.getContext(`2d`),O=D.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,`rgba(255, 190, 90, 0.85)`),O.addColorStop(.45,`rgba(255, 110, 30, 0.28)`),O.addColorStop(1,`rgba(255, 80, 20, 0)`),D.fillStyle=O,D.fillRect(0,0,64,64);let k=new Zi(E);k.colorSpace=ze;let A=new Ur({map:k,color:16754760,transparent:!0,opacity:.55,blending:2,depthWrite:!1}),j=new ri(A);j.scale.setScalar(1.65),j.position.y=.42,o.add(j);let M=new js(16749622,1.4,7,1.2);M.position.y=.55,o.add(M);let N=0,P=0;function F(e){N=V.clamp(e,0,1)}function I(e,t=.016){let n=1-Math.exp(-t*2.5);P+=(N-P)*n;let r=1-P;for(let t of b){let{phase:n,speed:i,tiltX:a,tiltZ:o,baseOpacity:s}=t.userData,c=Math.sin(e*i+n),l=Math.cos(e*i*1.3+n);t.scale.set(1+l*.14,1+c*.28,1-l*.14),t.rotation.x=a+l*.12,t.rotation.z=o+c*.12,t.rotation.y=e*1.2+n,t.visible=r>.02,t.material.opacity=s*r}u.emissiveIntensity=(1.6+Math.sin(e*3.5)*.5)*r;for(let e of _)e.visible=r>.02;for(let t of S){let{phase:n,speed:i,angle:a,radius:o}=t.userData,s=(e*i+n)%1,c=a+s*2.5,l=o*(1+s*.6);t.position.set(Math.cos(c)*l,.25+s*1.15,Math.sin(c)*l),t.scale.setScalar(1-s*.85),t.visible=r>.3}for(let t of w){let{phase:n,speed:i,wobble:a}=t.userData,o=(e*i+n)%1;t.position.set(Math.sin(e*1.2+a)*.14+o*.2,.75+o*1.35,Math.cos(e*1.1+a)*.14),t.rotation.y=e*.8+a,t.scale.setScalar(.6+o*1.3),t.material.opacity=Math.sin(o*Math.PI)*.28*r,t.visible=r>.2}let i=Math.sin(e*7.3)*.15+Math.cos(e*11.1)*.1;A.opacity=(.5+i*.4)*r,j.visible=r>.02,M.intensity=(1.35+i*.8)*r,M.visible=r>.02}return{group:o,update:I,setDaylight:F}}function Wx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=Eb(a),c=new Q({color:i.trunk,roughness:.95,flatShading:!0}),l=new Q({color:new G(i.trunk).multiplyScalar(.82),roughness:.95,flatShading:!0}),u=new Q({color:5124638,roughness:.9,flatShading:!0}),d=new Q({color:3547410,roughness:.95,flatShading:!0}),f=new Q({color:3810068,roughness:.9,flatShading:!0}),p=new Q({color:16769162,emissive:16751931,emissiveIntensity:.85,roughness:.3}),m=new Q({color:6448232,roughness:1,flatShading:!0}),h=.24,g=2.2,_=1.8,v=1.45,y=1.05,b=new J(new Y(2.3800000000000003,h,1.98),m);b.position.y=h/2,b.castShadow=!0,b.receiveShadow=!0,o.add(b);let x=new J(new Y(.95,.16,.55),l);x.position.set(-.25,.08,1.1600000000000001),x.castShadow=!0,x.receiveShadow=!0,o.add(x);let S=new J(new Y(.85,.08,.25),l);S.position.set(-.25,.04,1.52),S.castShadow=!0,S.receiveShadow=!0,o.add(S);let C=new J(new Y(g,v,_),c);C.position.y=.965,C.castShadow=!0,C.receiveShadow=!0,o.add(C);for(let e=0;e<5;e++){let t=.4+v/5*e;for(let e of[-1,1]){let n=new J(new X(.065,.065,2.4400000000000004,6),l);n.rotation.z=Math.PI/2,n.position.set(0,t,_/2*e),n.castShadow=!0,o.add(n)}for(let e of[-1,1]){let n=new J(new X(.065,.065,2.04,6),l);n.rotation.x=Math.PI/2,n.position.set(g/2*e,t+.12,0),n.castShadow=!0,o.add(n)}}let w=new Ba;w.moveTo(-2.2/2,0),w.lineTo(g/2,0),w.lineTo(0,y),w.closePath();let T=new To(w,{depth:_,bevelEnabled:!1});T.translate(0,0,-1.8/2);let E=new J(T,c);E.position.y=1.69,E.castShadow=!0,E.receiveShadow=!0,o.add(E);let D=g/2,O=Math.atan2(y,D),k=Math.hypot(D,y)+.34;for(let e of[-1,1]){let t=new J(new Y(k,.1,2.22),u);t.rotation.z=-e*O;let n=e*.6100000000000001;t.position.set(n,2.235,0),t.castShadow=!0,t.receiveShadow=!0,o.add(t)}let A=new J(new Y(.18,.14,2.2800000000000002),d);A.position.set(0,2.79,0),A.castShadow=!0,o.add(A);let j=-.25,M=new J(new Y(.64,1.02,.06),l);M.position.set(j,.75,.93),o.add(M);let N=new J(new Y(.5,.94,.07),f);N.position.set(j,.72,.9400000000000001),o.add(N);let P=new J(new Po(.035,6,4),new Q({color:14727248,roughness:.4,metalness:.6}));P.position.set(-.09,.72,.9850000000000001),o.add(P);let F=new J(new Y(.85,.06,.45),u);F.rotation.x=.25,F.position.set(j,1.39,1.12),F.castShadow=!0,o.add(F);function I(){let e=new W,t=new J(new Y(.42,.42,.04),p);e.add(t);let n=new J(new Y(.48,.045,.065),l);e.add(n);let r=new J(new Y(.045,.48,.065),l);e.add(r);let i=new J(new Y(.54,.05,.11),l);return i.position.set(0,-.22,.02),e.add(i),e}let ee=I();ee.position.set(.58,1.02,.93),o.add(ee);let L=I();L.rotation.y=Math.PI/2,L.position.set(1.1300000000000001,1.02,0),o.add(L);let te=new W;te.position.set(-2.2/2-.34,0,.1);let ne=new J(new Y(.36,.05,.46),l);ne.position.y=.025,ne.castShadow=!0,ne.receiveShadow=!0,te.add(ne);for(let e=0;e<3;e++){let t=4-e;for(let n=0;n<t;n++){let r=new J(new X(.045,.045,.34,5),e%2==0?c:l);r.rotation.z=Math.PI/2,r.position.set(0,.095+e*.075,(n-(t-1)/2)*.095),r.castShadow=!0,te.add(r)}}o.add(te);let re=-.52,ie=-.35,ae=new J(new Y(.32,.95,.32),m);ae.position.set(re,2.61,ie),ae.castShadow=!0,o.add(ae);let R=new J(new Y(.4,.08,.4),m);R.position.set(re,3.08,ie),R.castShadow=!0,o.add(R);let oe=[];for(let e=0;e<5;e++){let t=new J(new ia(.14+s()*.08,0),new Q({color:14212322,transparent:!0,opacity:.4,roughness:1,flatShading:!0,depthWrite:!1}));t.userData={phase:e/5,speed:.22+s()*.06,wobble:s()*Math.PI*2},o.add(t),oe.push(t)}let se=0,ce=0,le=new G(3817290),ue=new G(16769162);function de(e){se=V.clamp(e,0,1)}function fe(e,t=.016){let n=1-Math.exp(-t*2.5);ce+=(se-ce)*n;let r=1-ce;p.emissiveIntensity=(.75+Math.sin(e*2.4+a)*.18)*r,p.color.copy(ue).lerp(le,ce);for(let t of oe){let{phase:n,speed:i,wobble:a}=t.userData,o=(e*i+n)%1;t.position.set(re+Math.sin(e*.7+a)*.12+o*.35,3.16+o*1.9,ie+Math.cos(e*.6+a)*.12+o*.15),t.rotation.y=e*.6+a,t.scale.setScalar(.55+o*1.35),t.material.opacity=Math.sin(o*Math.PI)*(.15+.3*r)}}return{group:o,update:fe,setDaylight:de}}function Gx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=Eb(a),c=new Q({color:15133938,roughness:.95,flatShading:!0}),l=new Q({color:16251903,roughness:.85,flatShading:!0}),u=new Q({color:13126449,roughness:.8,flatShading:!0}),d=new Q({color:i?.trunk??6044708,roughness:.9,flatShading:!0}),f=new Q({color:new G(i?.trunk??6044708).multiplyScalar(.75),roughness:.95,flatShading:!0}),p=new Q({color:16765565,emissive:16747556,emissiveIntensity:1.4,roughness:.3}),m=1.05,h=.85,g=.34,_=new J(new X(1.4100000000000001,1.6300000000000001,.22,12),l);_.position.y=.11,_.receiveShadow=!0,o.add(_);let v=new J(new X(1.35,1.3800000000000001,m,12),c);v.position.y=.645,v.castShadow=!0,v.receiveShadow=!0,o.add(v);for(let e of[.35,1.17-.08]){let t=new J(new X(1.385,1.385,.09,12),u);t.position.y=e,t.castShadow=!0,o.add(t)}for(let e=0;e<12;e++){let t=e/12*Math.PI*2;if(Math.abs(Math.sin(t)-1)<.08)continue;let n=new J(new Y(.04,m,.04),f);n.position.set(Math.cos(t)*1.37,.645,Math.sin(t)*1.37),n.rotation.y=-t,o.add(n)}let y=new X(g,1.4900000000000002,h,12,2),b=y.attributes.position;for(let e=0;e<b.count;e++){let t=b.getY(e);Math.abs(t)<.05&&(b.setX(e,b.getX(e)*1.07),b.setZ(e,b.getZ(e)*1.07))}y.computeVertexNormals();let x=new J(y,l);x.position.y=1.575,x.castShadow=!0,x.receiveShadow=!0,o.add(x);let S=Math.hypot(1.14,h),C=Math.atan2(1.14,h);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new W;n.rotation.y=t;let r=new J(new X(.016,.016,S,4),u);r.position.set(.9100000000000001,1.595+.015,0),r.rotation.z=C,n.add(r),o.add(n)}let w=new J(new Fo(g,.045,6,12),d);w.rotation.x=Math.PI/2,w.position.y=2.0100000000000002,w.castShadow=!0,o.add(w);let T=new J(new ta(g*.92,12),p);T.rotation.x=-Math.PI/2,T.position.y=1.9900000000000002,o.add(T);for(let e=0;e<4;e++){let t=new J(new Y(g*1.9,.025,.025),f);t.position.y=2.02,t.rotation.y=e*Math.PI/4,o.add(t)}let E=new W;E.position.set(0,.12,1.33);let D=new J(new Y(.76,.96,.24),d);D.position.y=.48,D.castShadow=!0,E.add(D);let O=new J(new Y(.82,.1,.28),l);O.position.y=.98,O.castShadow=!0,E.add(O);for(let e of[-1,1]){let t=new J(new Y(.28,.84,.06),f);t.position.set(e*.15,.44,.11),E.add(t);let n=new J(new Y(.14,.14,.07),u);n.rotation.z=Math.PI/4,n.position.set(e*.15,.52,.115),E.add(n)}let k=new J(new Y(.03,.82,.075),p);k.position.set(0,.44,.115),E.add(k);let A=new J(new Y(.86,.08,.36),f);A.position.set(0,.02,.16),A.receiveShadow=!0,E.add(A),o.add(E);let j=[];for(let e=0;e<5;e++){let t=new J(new ia(.14+s()*.07,0),new Q({color:14870768,transparent:!0,opacity:.45,roughness:1,flatShading:!0,depthWrite:!1}));t.userData={phase:e/5,speed:.24+s()*.06,wobble:s()*Math.PI*2},o.add(t),j.push(t)}let M=0,N=0;function P(e){M=V.clamp(e,0,1)}function F(e,t=.016){let n=1-Math.exp(-t*2.5);N+=(M-N)*n;let r=1-N;p.emissiveIntensity=(1.25+Math.sin(e*3.1+a)*.35)*r,k.visible=r>.05,T.visible=r>.02;for(let t of j){let{phase:n,speed:i,wobble:a}=t.userData,o=(e*i+n)%1;t.position.set(Math.sin(e*.8+a)*.12+o*.3,2.0900000000000003+o*1.85,Math.cos(e*.7+a)*.12+o*.15),t.rotation.y=e*.6+a,t.scale.setScalar(.6+o*1.4),t.material.opacity=Math.sin(o*Math.PI)*(.15+.3*r)}}return{group:o,update:F,setDaylight:P}}function Kx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=Eb(a),c=new Q({color:13939306,roughness:.85,flatShading:!0}),l=new Q({color:10255166,roughness:.9,flatShading:!0}),u=new Q({color:6177060,roughness:.95,flatShading:!0}),d=new Q({color:11897144,roughness:.95,flatShading:!0}),f=new Q({color:9200931,roughness:1,flatShading:!0}),p=new Q({color:16770196,emissive:16751158,emissiveIntensity:.9,roughness:.3}),m=.75,h=2.4,g=2.55,_=1.35,v=1.35,y=[-1.04,0,h/2-.16],b=[-1.115,.15,g/2-.16];for(let e of y)for(let t of b){if(e===0&&t===.15)continue;let n=new J(new X(.075,.09,.8,6),u);n.position.set(e,m/2,t),n.castShadow=!0,n.receiveShadow=!0,o.add(n)}for(let e of[-1.04,h/2-.16]){let t=new J(new Y(.1,.1,g),u);t.position.set(e,.7,0),t.castShadow=!0,o.add(t)}let x=2.4699999999999998/11;for(let e=0;e<11;e++){let t=-1.1227272727272726+e*x,n=new J(new Y(h,.07,x*.88),e%2==0?c:l);n.position.set(0,.77,t),n.castShadow=!0,n.receiveShadow=!0,o.add(n)}let S=new W,C=Math.hypot(m,.65),w=Math.atan2(.65,m);S.position.set(.55,0,1.9249999999999998),S.rotation.x=-w;for(let e of[-.24,.24]){let t=new J(new X(.035,.04,C+.15,6),u);t.position.set(e,C/2,0),t.castShadow=!0,S.add(t)}for(let e=1;e<=4;e++){let t=new J(new X(.025,.025,.48,5),c);t.rotation.z=Math.PI/2,t.position.set(0,e/5*C,0),t.castShadow=!0,S.add(t)}o.add(S);let T=.52,E=g/2-.08;for(let e of[-1.08,h/2-.12]){let t=new J(new X(.055,.065,1.4000000000000001,6),u);t.position.set(e,1.425,E),t.castShadow=!0,o.add(t)}let D=new J(new X(.035,.035,1.25,6),c);D.rotation.z=Math.PI/2,D.position.set(-.45500000000000007,1.27,E),D.castShadow=!0,o.add(D);for(let e=0;e<4;e++){let t=-2.4/2+.3+e*.32,n=new J(new X(.022,.022,T,5),l);n.position.set(t,1.01,E),o.add(n)}for(let e of[-1.08,h/2-.12]){let t=new J(new X(.035,.035,.69,6),c);t.rotation.x=Math.PI/2,t.position.set(e,1.27,.8499999999999999),t.castShadow=!0,o.add(t);for(let t of[.7326999999999999,.9672999999999998]){let n=new J(new X(.022,.022,T,5),l);n.position.set(e,1.01,t),o.add(n)}}let O=new W;O.position.set(0,.8,-.32);let k=new J(new Y(2.1,_,1.65),c);k.position.y=_/2,k.castShadow=!0,k.receiveShadow=!0,O.add(k);let A=.26;for(let e=-2.1/2;e<=1.06;e+=A)for(let t of[-1,1]){let n=new J(new X(.032,.035,_,5),l);n.position.set(e,_/2,t*.835),n.castShadow=!0,O.add(n)}for(let e=-1.65/2;e<=.835;e+=A)for(let t of[-1,1]){let n=new J(new X(.032,.035,_,5),l);n.position.set(t*1.06,_/2,e),n.castShadow=!0,O.add(n)}let j=.45,M=new J(new Y(.64,1.02,.08),u);M.position.set(j,.51,.845),O.add(M);let N=new J(new Y(.52,.94,.09),l);N.position.set(j,.48,.855),O.add(N);function P(){let e=new W,t=new J(new Y(.46,.46,.06),p);e.add(t);for(let t of[-.1,.1]){let n=new J(new X(.015,.015,.48,4),u);n.position.set(t,0,.03),e.add(n)}for(let t of[-1,1]){let n=new J(new Y(.18,.48,.04),l);n.position.set(t*.31,0,.04),n.rotation.y=t*.25,n.castShadow=!0,e.add(n)}return e}let F=P();F.position.set(-.45,.74,.855),O.add(F);let I=P();I.rotation.y=-Math.PI/2,I.position.set(-2.1/2-.03,.74,0),O.add(I),o.add(O);let ee=new W;ee.position.set(0,2.1,.05);let L=new na(1.92,v*.78,10,2);L.scale(1,1,1.08);let te=L.attributes.position;for(let e=0;e<te.count;e++){let t=te.getY(e);if(t<-.405){let n=Math.atan2(te.getZ(e),te.getX(e)),r=Math.sin(n*5)*.07+(s()-.5)*.05;te.setY(e,t+r),te.setX(e,te.getX(e)*(1+(s()-.5)*.04)),te.setZ(e,te.getZ(e)*(1+(s()-.5)*.04))}}L.computeVertexNormals();let ne=new J(L,d);ne.position.y=v*.36,ne.castShadow=!0,ne.receiveShadow=!0,ee.add(ne);let re=new na(1.22,v*.65,10,1);re.scale(1,1,1.06);let ie=new J(re,f);ie.position.y=v*.68,ie.castShadow=!0,ee.add(ie);let ae=new J(new X(.14,.24,.38,7),d);ae.position.y=1.4100000000000001,ae.castShadow=!0,ee.add(ae);let R=new J(new Fo(.17,.025,4,8),u);R.rotation.x=Math.PI/2,R.position.y=1.37,ee.add(R),o.add(ee);let oe=new W;oe.position.set(-.75,2.08,1.1149999999999998);let se=new J(new X(.01,.01,.24,4),u);se.position.y=-.12,oe.add(se);let ce=new J(new X(.09,.07,.18,6),p);ce.position.y=-.32,oe.add(ce);let le=new J(new na(.13,.09,6),u);le.position.y=-.21,oe.add(le),o.add(oe);let ue=0,de=0,fe=new G(3817290),pe=new G(16770196);function me(e){ue=V.clamp(e,0,1)}function he(e,t=.016){let n=1-Math.exp(-t*2.5);de+=(ue-de)*n;let r=1-de;p.emissiveIntensity=(.85+Math.sin(e*2.4+a)*.18)*r,p.color.copy(pe).lerp(fe,de),oe.rotation.z=Math.sin(e*2.1+a)*.09,oe.rotation.x=Math.cos(e*1.7+a)*.06}return{group:o,update:he,setDaylight:me}}function qx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=new Q({color:14267270,roughness:.95,flatShading:!0}),c=new Q({color:11898467,roughness:1,flatShading:!0}),l=new Q({color:15455155,roughness:.95,flatShading:!0}),u=new Q({color:i?.trunk??8018235,roughness:.9,flatShading:!0}),d=new Q({color:5191714,roughness:.95,flatShading:!0}),f=new Q({color:12081722,roughness:.8,flatShading:!0}),p=new Q({color:13193787,roughness:.9,flatShading:!0,side:2}),m=new Q({color:16769162,emissive:16751931,emissiveIntensity:.85,roughness:.3}),h=.16,g=1.7,_=1.35,v=new J(new Y(2.2600000000000002,h,1.8599999999999999),c);v.position.y=h/2,v.castShadow=!0,v.receiveShadow=!0,o.add(v);let y=new J(new Y(2.2600000000000002,h*.8,.65),c);y.position.set(0,h*.4,1.175),y.castShadow=!0,y.receiveShadow=!0,o.add(y);let b=new J(new Y(2.1,_,g),s);b.position.y=.8350000000000001,b.castShadow=!0,b.receiveShadow=!0,o.add(b);for(let e=0;e<4;e++){let t=.38+_/4*e,n=new J(new Y(2.12,.025,1.72),c);n.position.y=t,o.add(n)}for(let e=0;e<4;e++){let t=-1.7*.34+e/3*(g*.68),n=new J(new X(.035,.035,2.42,5),d);n.rotation.z=Math.PI/2,n.position.set(0,1.45,t),n.castShadow=!0,o.add(n)}let x=new J(new Y(2.3200000000000003,.08,1.92),l);x.position.y=1.55,x.castShadow=!0,x.receiveShadow=!0,o.add(x);for(let[e,t]of[[0,-1.7/2-.08],[0,.9299999999999999],[-2.1/2-.08,0],[1.1300000000000001,0]]){let n=e===0,r=new J(new Y(n?2.3200000000000003:.06,.18,n?.06:1.92),c);r.position.set(e,1.68,t),r.castShadow=!0,o.add(r)}let S=new J(new Po(.28,8,6,0,Math.PI*2,0,Math.PI/2),l);S.position.set(.45,1.59,-.25),S.castShadow=!0,o.add(S);let C=new J(new Y(.62,1.02,.06),d);C.position.set(0,.67,.87),o.add(C);let w=new J(new Y(.48,.94,.07),u);w.position.set(0,.64,.88),o.add(w);let T=new J(new Fo(.04,.012,4,6,Math.PI),d);T.rotation.z=Math.PI,T.position.set(.15,.66,.9199999999999999),o.add(T);function E(){let e=new W,t=new J(new Y(.22,.48,.04),d);e.add(t);let n=new J(new Y(.14,.4,.05),m);e.add(n);let r=new J(new Y(.16,.025,.06),d);return e.add(r),e}for(let e of[-.68,.68]){let t=E();t.position.set(e,.98,.87),o.add(t)}let D=E();D.rotation.y=Math.PI/2,D.position.set(1.07,.98,0),o.add(D);for(let e of[-.48,.48]){let t=new J(new X(.03,.035,1.142,5),d);t.position.set(e,.699,1.4),t.castShadow=!0,o.add(t)}let O=new J(new Y(1.12,.025,.62),p);O.rotation.x=.22,O.position.set(0,1.33,1.13),O.castShadow=!0,o.add(O);for(let[e,t]of[[-.78,1],[-.62,.72],[.75,.9]]){let n=new W;n.position.set(e,.128,1.13),n.scale.setScalar(t);let r=new J(new X(.08,.11,.24,6),f);r.position.y=.12,r.castShadow=!0,n.add(r);let i=new J(new X(.045,.055,.08,6),f);i.position.y=.28,n.add(i),o.add(n)}let k=0,A=0,j=new G(3814704),M=new G(16769162);function N(e){k=V.clamp(e,0,1)}function P(e,t=.016){let n=1-Math.exp(-t*2.5);A+=(k-A)*n;let r=1-A;m.emissiveIntensity=(.8+Math.sin(e*2.4+a)*.16)*r,m.color.copy(M).lerp(j,A),O.rotation.x=.22+Math.sin(e*2.5+a)*.025}return{group:o,update:P,setDaylight:N}}function Jx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r),Eb(a);let s=new Q({color:14264179,roughness:.95,flatShading:!0}),c=new Q({color:12092498,roughness:.95,flatShading:!0}),l=new Q({color:10256997,roughness:1,flatShading:!0}),u=new Q({color:i?.trunk??7228720,roughness:.95,flatShading:!0}),d=new Q({color:11883320,roughness:.75,flatShading:!0}),f=new Q({color:13191736,roughness:.9,flatShading:!0,side:2}),p=new Q({color:16770196,emissive:16751158,emissiveIntensity:.9,roughness:.3}),m=.2,h=2.2,g=1.85,_=new J(new Y(2.3600000000000003,m,2.0100000000000002),l);_.position.y=m/2,_.castShadow=!0,_.receiveShadow=!0,o.add(_);let v=new J(new Y(.85,.12,.42),l);v.position.set(-.3,.06,1.165),v.castShadow=!0,v.receiveShadow=!0,o.add(v);let y=new Y(h,1.45,g),b=y.attributes.position;for(let e=0;e<b.count;e++)b.getY(e)>0&&(b.setX(e,b.getX(e)*.95),b.setZ(e,b.getZ(e)*.95));y.computeVertexNormals();let x=new J(y,s);x.position.y=.925,x.castShadow=!0,x.receiveShadow=!0,o.add(x);let S=.22,C=g*.95;for(let e of[-1,1]){let t=new J(new Y(2.15,S,.12),c);t.position.set(0,1.76,e*(C/2-.03)),t.castShadow=!0,o.add(t)}for(let e of[-1,1]){let t=new J(new Y(.12,S,1.5975000000000001),c);t.position.set(e*(2.09/2-.03),1.76,0),t.castShadow=!0,o.add(t)}for(let e=0;e<4;e++){let t=-.59755+e/3*(C*.68),n=new J(new X(.04,.04,2.4699999999999998,5),u);n.rotation.z=Math.PI/2,n.position.set(0,1.5699999999999998,t),n.castShadow=!0,o.add(n)}let w=.38,T=-.25,E=new J(new Y(1.05,.85,.95),s);E.position.set(w,2.0749999999999997,T),E.castShadow=!0,E.receiveShadow=!0,o.add(E);let D=new J(new Po(.42,8,5,0,Math.PI*2,0,Math.PI*.5),c);D.scale.set(1.05,.85,.95),D.position.set(w,2.5,T),D.castShadow=!0,o.add(D);let O=-.3,k=new J(new Y(.68,1.05,.12),c);k.position.set(O,.7250000000000001,.915),o.add(k);let A=new J(new Y(.5,.92,.14),u);A.position.set(O,.66,.925),o.add(A);let j=new J(new Y(.95,.03,.62),f);j.rotation.x=.24,j.position.set(O,1.3499999999999999,1.235),j.castShadow=!0,o.add(j);for(let e of[-.4,.4]){let t=new J(new X(.022,.025,1.2699999999999998,5),u);t.position.set(O+e,1.2699999999999998/2,1.475),t.castShadow=!0,o.add(t)}function M(e=.38,t=.44){let n=new W,r=new J(new Y(e+.08,t+.08,.06),c);n.add(r);let i=new J(new Y(e,t,.07),p);n.add(i);for(let r of[-e*.22,e*.22]){let e=new J(new Y(.022,t,.08),u);e.position.x=r,n.add(e)}let a=new J(new Y(e,.022,.08),u);return n.add(a),n}let N=M(.4,.44);N.position.set(.55,.98,g/2-.01),o.add(N);let P=M(.32,.36);P.position.set(w,2.1,.235),o.add(P);let F=M(.4,.44);F.rotation.y=Math.PI/2,F.position.set(h/2-.01,.98,.1),o.add(F);function I(e=1){let t=new W,n=new J(new ko([new H(0,0),new H(.11,.02),new H(.17,.16),new H(.14,.3),new H(.07,.38),new H(.09,.43)],7),d);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),t.scale.setScalar(e),t}let ee=I(1);ee.position.set(.32,m,1.085),o.add(ee);let L=I(.75);L.position.set(.54,m,1.045),o.add(L);let te=0,ne=0,re=new G(3814704),ie=new G(16770196);function ae(e){te=V.clamp(e,0,1)}function R(e,t=.016){let n=1-Math.exp(-t*2.5);ne+=(te-ne)*n;let r=1-ne;p.emissiveIntensity=(.85+Math.sin(e*2.3+a)*.16)*r,p.color.copy(ie).lerp(re,ne),j.rotation.x=.24+Math.sin(e*2.6+a)*.03}return{group:o,update:R,setDaylight:ae}}function Yx(e,t,n,r,i,a=0){let o=new W;o.position.set(e,n,t),o.scale.setScalar(r);let s=Eb(a),c=new Q({color:i.rock??7040888,roughness:.92,flatShading:!0}),l=new Q({color:i.rockDark??4540498,roughness:.96,flatShading:!0}),u=new Q({color:1776932,roughness:1,flatShading:!0}),d=new q({color:592398}),f=new Q({color:i.trunk??5914410,roughness:.9,flatShading:!0}),p=new q({color:16738842}),m=new q({color:16769126}),h=new Ba;h.moveTo(-2.3,0),h.lineTo(-2.1,1.35),h.lineTo(-1.45,2.35),h.lineTo(-.35,2.85),h.lineTo(.85,2.65),h.lineTo(1.85,1.85),h.lineTo(2.25,.8),h.lineTo(2.35,0),h.closePath();let g=new za;g.moveTo(-.78,0),g.lineTo(-.82,.72),g.lineTo(-.52,1.28),g.lineTo(.02,1.48),g.lineTo(.56,1.24),g.lineTo(.8,.68),g.lineTo(.76,0),g.closePath(),h.holes.push(g);let _=new To(h,{depth:2.1,bevelEnabled:!0,bevelSegments:1,steps:2,bevelSize:.14,bevelThickness:.18});_.translate(0,0,-2.1/2);let v=new Map,y=_.attributes.position;for(let e=0;e<y.count;e++){let t=y.getX(e),n=y.getY(e),r=y.getZ(e);if(n<.05)continue;let i=`${t.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=v.get(i);if(!a){let e=r<0?.88:1;a={dx:(s()-.5)*.16,dy:(s()-.5)*.14,dz:(s()-.5)*.14,backTaper:e},v.set(i,a)}y.setX(e,t*a.backTaper+a.dx),y.setY(e,Math.max(.05,n*a.backTaper+a.dy)),y.setZ(e,r+a.dz)}y.needsUpdate=!0,_.computeVertexNormals();let b=new J(_,c);b.castShadow=!0,b.receiveShadow=!0,o.add(b);let x=new J(new Y(1.75,.08,2.45),u);x.position.set(0,.04,.05),x.receiveShadow=!0,o.add(x);let S=new J(new Y(2.6,2.2,.6),d);S.position.set(0,1.05,-.9),o.add(S);let C=new J(new ia(1.65,1),l);C.scale.set(1.25,1.15,.95),C.position.set(0,1.1,-2.1/2-.35),C.castShadow=!0,C.receiveShadow=!0,o.add(C);for(let e of[{x:-1.85,y:.65,z:.35,r:.95,sx:1.1,sy:.85,sz:1.2},{x:1.9,y:.6,z:.25,r:.9,sx:1.15,sy:.8,sz:1.1},{x:-1.35,y:1.65,z:-.25,r:.85,sx:1,sy:1,sz:1},{x:1.4,y:1.55,z:-.35,r:.8,sx:1,sy:.95,sz:1}]){let t=new J(new ia(e.r,0),l);t.scale.set(e.sx,e.sy,e.sz),t.position.set(e.x,e.y,e.z),t.rotation.set(s()*2,s()*3,s()*2),t.castShadow=!0,t.receiveShadow=!0,o.add(t)}for(let e=0;e<3;e++){let t=-.38+e*.38,n=.24+s()*.14,r=new J(new na(.08+s()*.03,n,4),l);r.rotation.x=Math.PI,r.position.set(t,1.42-n/2,.95+(s()-.5)*.15),r.castShadow=!0,o.add(r)}let w=new J(new Y(1.55,.1,.65),l);w.position.set(0,.05,1.32),w.castShadow=!0,w.receiveShadow=!0,o.add(w);let T=new W;T.position.set(1.12,0,1.25);let E=new J(new ia(.22,0),l);E.scale.set(1.2,.65,1.2),E.position.y=.1,E.castShadow=!0,T.add(E);let D=new W;D.position.y=.15,D.rotation.z=-.14,D.rotation.x=.12;let O=new J(new X(.032,.045,.95,5),f);O.position.y=.475,O.castShadow=!0,D.add(O);let k=new J(new X(.11,.06,.14,6),l);k.position.y=.96,D.add(k);let A=new na(.11,.34,5);A.translate(0,.17,0);let j=new J(A,p);j.position.y=1,D.add(j);let M=new na(.06,.2,5);M.translate(0,.1,0);let N=new J(M,m);N.position.y=1.01,D.add(N);let P=new js(16750648,1.8,6.5,1.4);P.position.set(-.1,1.25,.15),D.add(P),T.add(D),o.add(T);for(let e of[{x:-1.15,z:1.35,r:.18},{x:-1.45,z:1.05,r:.24},{x:1.42,z:1.45,r:.16},{x:.92,z:1.65,r:.13}]){let t=new J(new ia(e.r,0),l);t.scale.set(1.15,.75,1),t.position.set(e.x,e.r*.35,e.z),t.rotation.set(s()*3,s()*3,s()*3),t.castShadow=!0,t.receiveShadow=!0,o.add(t)}let F=0,I=0;function ee(e){F=V.clamp(e,0,1)}let L=s()*Math.PI*2;function te(e,t=.016){let n=1-Math.exp(-t*2.5);I+=(F-I)*n;let r=1-I,i=Math.sin(e*14+L)*.12+Math.cos(e*8.5+L)*.08;j.scale.set(1+i*.6,1+i*1.4,1+i*.6),j.rotation.y=e*2+L,N.scale.set(1-i*.4,1+i*1.1,1-i*.4);let a=.65+.35*r;D.children[2].scale.multiplyScalar(a),D.children[3].scale.multiplyScalar(a),P.intensity=(1.9+i*2.2)*(.25+.75*r)}return{group:o,update:te,setDaylight:ee}}function Xx(e,{N:t,grassRadius:n,grassTop:r,palette:i,rand:a,seed:o,structureSpots:s=[]}){let c=[],l=[],u=[],d=[],f=i.decorStyle;if(![`hut`,`yurt`,`tropical-hut`,`desert-hut`,`cave`].includes(f))return{structures:c,updaters:l,daylightSetters:u,decorDist:0,decorRadius:0,blockedSpots:d};let p=s.length>0,m=Math.max(1,t),h=.7,g=.6*h,_=p?n*.68:n*.6,v=a()*Math.PI*2,y=Math.PI*2/Math.max(1,m),b=0;for(let t=0;t<m;t++){let s=v+t*y+(a()-.5)*.2,p,m,x;f===`desert-hut`?t%2==0?(p=`desertHut`,m=.65,x=1.6):(p=`desertHouse`,m=.65,x=2):f===`cave`?(p=`cave`,m=.8,x=1.8):f===`yurt`?(p=`yurt`,m=.6,x=1.6):f===`tropical-hut`?(p=`tropicalHut`,m=.65,x=1.6):(p=`hut`,m=.65,x=1.6);let S=x*m;b=Math.max(b,S);let C=Math.cos(s)*_,w=Math.sin(s)*_,T=n*.92,E=Math.hypot(C,w);if(E+S>T){let e=(T-S)/E;C*=e,w*=e}let D=o*41+7+t*13,O;O=p===`yurt`?Gx(C,w,r,m,i,D):p===`tropicalHut`?Kx(C,w,r,m,i,D):p===`desertHut`?qx(C,w,r,m,i,D):p===`desertHouse`?Jx(C,w,r,m,i,D):p===`cave`?Yx(C,w,r,m,i,D):Wx(C,w,r,m,i,D),O.group.rotation.y=a()*Math.PI*2,e.add(O.group),c.push(O.group),l.push(O.update),u.push(O.setDaylight),d.push({x:C,z:w,radius:S});let k=-Math.cos(s),A=-Math.sin(s),j=(a()>.5?1:-1)*(Math.PI/3),M=k*Math.cos(j)-A*Math.sin(j),N=k*Math.sin(j)+A*Math.cos(j),P=C+M*2,F=w+N*2,I=n*.92-g,ee=Math.hypot(P,F);if(ee>I){let e=I/ee;P*=e,F*=e}let L=Ux(P,F,r,h,i,o*43+11+t*17);e.add(L.group),c.push(L.group),l.push(L.update),u.push(L.setDaylight),d.push({x:P,z:F,radius:g})}return{structures:c,updaters:l,daylightSetters:u,decorDist:_,decorRadius:b||1.04,blockedSpots:d}}function Zx({x:e=0,z:t=0,contents:n=[],seed:r=0,rotationY:i=0,biome:a,camera:o}){let s=new W;s.position.set(e,0,t),s.rotation.y=i;let c=window.innerWidth<768,l=Eb(r*7+11),u=a??wb[r%wb.length],d=Tb(u),f=n.length,p=Sb(f),m=Db(p,r),h=p+1,g=p+.3,_=p*1.35,v=6.5+p*.35,y=Math.max(8,Math.min(14,Math.round(8+f*.4))),b=c?Math.max(6,Math.round(y*.7)):y,x=new X(g,_,v,b,1);Ob(x,m,.06,r*13+1);let S=new J(x,c?new qo({color:d.rock,flatShading:!0}):new Q({color:d.rock,roughness:.95,flatShading:!0})),C=xb-.5-2;S.position.y=C-v/2+.2,S.castShadow=!0,S.receiveShadow=!0,s.add(S);let w=xb-.5,T=new X(h,h+.4,2,b,1);Ob(T,m,.04,r*17+2);let E=new J(T,c?new qo({color:d.sand,flatShading:!0}):new Q({color:d.sand,roughness:1,flatShading:!0}));E.position.y=w-1,E.castShadow=!0,E.receiveShadow=!0,s.add(E);let D=.6,O=xb,k=new X(p,p+.2,D,b,1);Ob(k,m,.02,r*19+3);let A=new J(k,c?new qo({color:d.grassTop,flatShading:!0}):new Q({color:d.grassTop,roughness:.9,flatShading:!0}));A.position.y=O-D/2,A.castShadow=!0,A.receiveShadow=!0,s.add(A);let{structures:j,spots:M,updaters:N}=Hx(s,{N:f,grassRadius:p,grassTop:O,palette:d,biomeKey:u,rand:l,seed:r}),P=M.map(e=>({x:e.x,z:e.z,radius:e.r})),{structures:F,updaters:I,daylightSetters:ee,decorDist:L=0,decorRadius:te=0,blockedSpots:ne=[]}=Xx(s,{N:f,grassRadius:p,grassTop:O,palette:d,rand:l,seed:r,structureSpots:P}),re=[...P,...ne],ie=kx(s,p,O,d,l,m,r,re),ae=ie.map(e=>({x:e.position.x,z:e.position.z,radius:.8})),R=Px(s,p,O,d,l,m,r,[...re,...ae]),oe=R.map(e=>({x:e.position.x,z:e.position.z,radius:.6})),se=Ix(s,p,O,d,l,m,[...re,...ae,...oe]),ce=M.length>0,le=F.length>0,ue=0;ce&&(ue=d.structureStyle===`volcano`?p*.5:(d.structureStyle,p*.42)),le&&L>0&&(ue=Math.max(ue,L+te));let de=p*.95,{group:fe,cubes:pe,update:me}=xx(n,O,m,ue,de,r,o);s.add(fe);let he=[...N,...I];return me&&he.push(me),{group:s,cubes:pe,radius:p,shape:m,biome:u,updaters:he,daylightSetters:ee,parts:{rock:S,sand:E,grass:A,trees:ie,bushes:R,rocks:se,structures:j,decor:F}}}function Qx({gtmId:e,metrikaId:t}){function n(){return localStorage.getItem(`cookie_consent`)===`true`}function r(e,t){let n=document.createElement(`script`);n.src=e,n.async=!0,n.onload=t,document.head.appendChild(n)}function i(e){e&&!window.dataLayer&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":new Date().getTime(),event:`gtm.js`}),r(`https://www.googletagmanager.com/gtm.js?id=${e}`))}let a=!1;function o(e){e&&!a&&(window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments)},window.ym.l=new Date().getTime(),r(`https://mc.yandex.ru/metrika/tag.js`,()=>{window.ym(e,`init`,{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0}),a=!0}))}function s(){n()&&(o(t),window.dataLayer&&window.dataLayer.push({event:`cookie_consent_granted`}))}return i(e),n()&&s(),{start:s,hasConsent:n}}function $x({pixelRatio:e=Math.min(window.devicePixelRatio,2),enableShadows:t=!0,shadowMapSize:n=2048}={}){let r=new zn;r.background=new G(1710120),r.fog=new Rn(1710120,.0015);let i=new ks(55,window.innerWidth/window.innerHeight,.1,1e3);i.position.set(0,30,55);let a=new yd({antialias:e<1.5});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(e),a.shadowMap.enabled=t,a.shadowMap.type=1,a.toneMapping=4,a.toneMappingExposure=1,document.body.appendChild(a.domElement);let o=[];function s(){let e=window.innerWidth,t=window.innerHeight;i.aspect=e/t,i.updateProjectionMatrix(),a.setSize(e,t);for(let n of o)n(e,t)}window.addEventListener(`resize`,s);function c(e){o.push(e)}function l(){window.removeEventListener(`resize`,s),a.dispose(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement)}return{scene:r,camera:i,renderer:a,addResizeListener:c,destroy:l}}function eS(e,t,n){return Math.sin(e*.18+n*.9)*.35+Math.cos(t*.22+n*.7)*.3+Math.sin((e+t)*.11+n*1.3)*.25+Math.cos((e-t*1.3)*.31-n*1.6)*.12}function tS(e,t,n,r=.9){return r+eS(e,t,n)}function nS(e,{size:t=1200,segments:n=180,level:r=.9,color:i=1723758,deepTint:a=.5,crestTint:o=5424342,crestAmount:s=.55,foamTint:c=15136762,foamAmount:l=.6,enableWaves:u=!0}={}){let d=t/2,f=new jo(.001,d,n,Math.floor(n*.65)),p=f.attributes.position;for(let e=0;e<p.count;e++){let t=e*3,n=p.array[t],r=p.array[t+1],i=Math.hypot(n,r);if(i>1e-4){let e=(i/d)**1.55*d/i;p.array[t]=n*e,p.array[t+1]=r*e}}let m=new Float32Array(p.count*3);f.setAttribute(`color`,new vr(m,3));let h=new G(i),g=new G(o),_=new G(c),v=new G,y={uHorizonColor:{value:new G(1713218)},uSunGlowColor:{value:new G(16739125)},uSunDirXZ:{value:new H(0,-1)},uGlowStrength:{value:0}};function b({horizonColor:e,sunGlowColor:t,sunPos:n,glowStrength:r}){if(e&&y.uHorizonColor.value.copy(e),t&&y.uSunGlowColor.value.copy(t),r!==void 0&&(y.uGlowStrength.value=r),n){let e=Math.hypot(n.x,n.z);e>.001&&y.uSunDirXZ.value.set(n.x/e,n.z/e)}}let x=new Q({color:h.clone(),vertexColors:!0,metalness:.08,roughness:.24,flatShading:!0,transparent:!0,depthWrite:!1,opacity:.95});x.onBeforeCompile=e=>{e.uniforms.uHorizonColor=y.uHorizonColor,e.uniforms.uSunGlowColor=y.uSunGlowColor,e.uniforms.uSunDirXZ=y.uSunDirXZ,e.uniforms.uGlowStrength=y.uGlowStrength,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         varying vec3 vWaterWorldPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
         vWaterWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
         varying vec3 vWaterWorldPos;`).replace(`#include <fog_fragment>`,`#include <fog_fragment>
         // Считаем дистанцию от камеры, чтобы горизонт растворялся равномерно при любом зуме
         float dist = length(vWaterWorldPos.xz - cameraPosition.xz);
         float edgeFade = smoothstep(140.0, 380.0, dist);
         if (edgeFade >= 0.995) discard;

         // Плавно уводим прозрачность воды в ноль — сквозь неё проявится само небо
         gl_FragColor.a *= (1.0 - edgeFade);`)};let S=new J(f,x);S.rotation.x=-Math.PI/2,S.position.y=r,S.receiveShadow=!0,e.add(S);let C=p.array.slice(),w=0;function T(e){if(!u)return;let t=x.color;for(let n=0;n<p.count;n++){let r=n*3,i=C[r],o=-C[r+1],c=Math.hypot(i,o),u=1-V.clamp((c-220)/300,0,1),d=eS(i,o,e)*u;if(p.array[r+2]=C[r+2]+d,d<0){let e=V.clamp(-d/.9,0,1);v.copy(t).multiplyScalar(1-e*(1-a))}else if(d<.65){let e=d/.65;v.copy(t).lerp(g,e*s)}else{let e=V.clamp((d-.65)/.35,0,1);v.copy(t).lerp(g,s).lerp(_,e*l)}m[r]=v.r,m[r+1]=v.g,m[r+2]=v.b}p.needsUpdate=!0,f.attributes.color.needsUpdate=!0,w++,w%4==0&&f.computeVertexNormals()}function E(){e.remove(S),f.dispose(),x.dispose()}return{water:S,updateWater:T,setHorizonGlow:b,destroy:E}}function rS(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function iS(e,t,n,r,i){let a=n*1.35;for(let n of r){let r=n.r*1.35,o=e-n.x,s=t-n.z;if(Math.hypot(o,s)<a+r+i)return!1}return!0}function aS(e,{bounds:t=90,gap:n=14,candidatesFactor:r=400,maxExpand:i=6,seed:a=42}={}){let o=e.length;if(o===0)return[];let s=rS(a),c=e.map((e,t)=>({r:e,i:t}));c.sort((e,t)=>t.r-e.r);let l=Array(o),u=t,d=[...c];for(let e=0;e<=i&&d.length>0;e++){let e=d.length*r,t=[];for(let n=0;n<e;n++)t.push({x:(s()-.5)*u*2,z:(s()-.5)*u*2});for(let e=t.length-1;e>0;e--){let n=Math.floor(s()*(e+1));[t[e],t[n]]=[t[n],t[e]]}let i=l.filter(e=>e!=null),a=[];for(let e of d){let r=!1;for(let a of t)if(iS(a.x,a.z,e.r,i,n)){let t={x:a.x,z:a.z,r:e.r};i.push(t),l[e.i]=t,r=!0;break}r||a.push(e)}d=a,u*=1.4}if(d.length>0){let t=l.filter(e=>e!=null),r=Math.max(...e),i=0;for(let e of t)i=Math.max(i,Math.hypot(e.x,e.z)+e.r*1.35);i+=r*2+n*2;let a=d.reduce((e,t)=>e+t.r,0);2*Math.PI*i<a*2.7&&(i=a*2.7/(2*Math.PI));let o=0;for(let e of d){let t=o,n=Math.cos(t)*i,r=Math.sin(t)*i;l[e.i]={x:n,z:r,r:e.r},o+=e.r*2.7/i}}return l.map(e=>{if(!e)return{x:0,z:0,rotationY:0};let t=Math.atan2(e.z,e.x);return{x:e.x,z:e.z,rotationY:-t+(s()-.5)*.6}})}function oS(e,t,n=40){let r=e.map((e,n)=>({...e,radius:t[n]}));for(let e=0;e<n;e++){let e=!1;for(let t=0;t<r.length;t++)for(let n=t+1;n<r.length;n++){let i=r[t],a=r[n],o=i.radius*1.35,s=a.radius*1.35,c=a.x-i.x,l=a.z-i.z,u=Math.hypot(c,l),d=o+s+4;if(u<d&&u>.001){let t=(d-u)/2,n=c/u,r=l/u;i.x-=n*t,i.z-=r*t,a.x+=n*t,a.z+=r*t,e=!0}else u<=.001&&(--i.x,a.x+=1,e=!0)}if(!e)break}return r}function sS(e,{byCategory:t,camera:n,layoutOpts:r={}}){let i=Object.keys(t).filter(e=>(t[e].content??[]).length>0),a=i.map(e=>Sb(t[e].content.length)),o=oS(aS(a,{bounds:90,gap:14,seed:42,...r}),a),s=[],c=[],l=[];i.forEach((r,i)=>{let a=o[i],u=t[r].about,d=u?.biome,f=t[r].content,p=(u?.menu??[]).map(e=>typeof e==`string`?e.trim().toLowerCase():null),m=[...f].sort((e,t)=>{let n=p.indexOf(e.slug),r=p.indexOf(t.slug);return n===-1&&r===-1?0:n===-1?1:r===-1?-1:n-r}),{group:h,cubes:g,radius:_,updaters:v,shape:y,daylightSetters:b}=Zx({x:a.x,z:a.z,rotationY:a.rotationY,contents:m,seed:i,biome:d,camera:n});e.add(h),s.push({group:h,cubes:g,radius:_,shape:y,about:u,center:new U(a.x,xb,a.z),category:r,x:a.x,z:a.z,updaters:v??[]}),c.push(...g),b&&l.push(...b)});function u(e,t=.016){for(let n=0;n<s.length;n++){let r=s[n],i=r.group;i.position.y=Math.sin(e*.6+n)*.04,i.rotation.z=Math.sin(e*.4+n*1.7)*.012;for(let n of r.updaters)n(e,t)}}function d(){for(let t of s)e.remove(t.group),t.group.traverse(e=>{if(e.isMesh){e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t?.dispose()}});s.length=0,c.length=0,l.length=0}return{islands:s,allCubes:c,allDaylightSetters:l,update:u,destroy:d}}function cS(e,{bounds:t=120,mapSize:n=2048}={}){let r=new Fs(8952268,.45);e.add(r);let i=new Ps(16771264,2.2);i.position.set(30,45,25),i.castShadow=!0,i.shadow.mapSize.set(n,n),i.shadow.camera.left=-t,i.shadow.camera.right=t,i.shadow.camera.top=t,i.shadow.camera.bottom=-t,i.shadow.camera.near=50,i.shadow.camera.far=1200,i.shadow.bias=-15e-5,i.shadow.normalBias=.008,i.shadow.radius=2,e.add(i),e.add(i.target);let a=new _s(5605631,1718874,.9);e.add(a);function o(){e.remove(r,i,i.target,a),i.shadow.map?.dispose(),i.dispose(),a.dispose(),r.dispose()}return{ambient:r,sun:i,rim:a,destroy:o}}var lS=350,uS={dawn:{zenith:new G(1449272),horizon:new G(2635353),sunGlow:new G(16749645),glowStrength:.45,water:new G(1715271),ambient:{color:new G(7373480),intensity:.45},sun:{color:new G(16758906),intensity:1.1,elevation:18,azimuth:90},rim:{color:new G(4875944),intensity:.7}},day:{zenith:new G(1788794),horizon:new G(5080243),sunGlow:new G(16770736),glowStrength:.15,water:new G(1723758),ambient:{color:new G(11189213),intensity:.65},sun:{color:new G(16773328),intensity:2.1,elevation:60,azimuth:180},rim:{color:new G(5605631),intensity:.9}},dusk:{zenith:new G(725028),horizon:new G(1713218),sunGlow:new G(16739125),glowStrength:.55,water:new G(1187123),ambient:{color:new G(6057625),intensity:.4},sun:{color:new G(16749662),intensity:1.15,elevation:16,azimuth:270},rim:{color:new G(3822218),intensity:.65}},night:{zenith:new G(198159),horizon:new G(594726),sunGlow:new G(2242662),glowStrength:.1,water:new G(662058),ambient:{color:new G(4872842),intensity:.35},sun:{color:new G(9085152),intensity:.55,elevation:45,azimuth:180},rim:{color:new G(2767498),intensity:.25}}};function dS(e){let t=[{h:0,phase:`night`},{h:5,phase:`dawn`},{h:8,phase:`day`},{h:18,phase:`day`},{h:21,phase:`dusk`},{h:24,phase:`night`}];for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(e>=r.h&&e<=i.h){let t=(e-r.h)/(i.h-r.h);return{from:r.phase,to:i.phase,t}}}return{from:`night`,to:`night`,t:0}}function fS(e,t,n,r){let i=V.degToRad(90-t),a=V.degToRad(n);return r.setFromSphericalCoords(e,i,a)}function pS(e,t={}){let{scene:n,sky:r,water:i,setHorizonGlow:a,ambient:o,sun:s,rim:c,stars:l,celestial:u,allDaylightSetters:d}=e,{smooth:f=!0,smoothMs:p=15e3}=t,m={zenith:new G,horizon:new G,sunGlow:new G,glowStrength:0,water:new G,ambient:new G,ambientI:0,sun:new G,sunI:0,sunPos:new U,rim:new G,rimI:0},h={zenith:new G,horizon:new G,sunGlow:new G,glowStrength:0,water:new G,ambient:new G,ambientI:0,sun:new G,sunI:0,sunPos:new U,rim:new G,rimI:0},g=`day`,_=0;function v(e=!1){let t=new Date,n=new URLSearchParams(window.location.search).get(`hour`),r=dS(n===null?t.getHours()+t.getMinutes()/60:parseFloat(n)),i=uS[r.from]??uS.day,a=uS[r.to]??uS.day,o=r.t;h.zenith.copy(i.zenith).lerp(a.zenith,o),h.horizon.copy(i.horizon).lerp(a.horizon,o),h.sunGlow.copy(i.sunGlow).lerp(a.sunGlow,o),h.glowStrength=V.lerp(i.glowStrength,a.glowStrength,o),h.water.copy(i.water).lerp(a.water,o),h.ambient.copy(i.ambient.color).lerp(a.ambient.color,o),h.ambientI=i.ambient.intensity+(a.ambient.intensity-i.ambient.intensity)*o,h.sun.copy(i.sun.color).lerp(a.sun.color,o),h.sunI=i.sun.intensity+(a.sun.intensity-i.sun.intensity)*o,h.rim.copy(i.rim.color).lerp(a.rim.color,o),h.rimI=i.rim.intensity+(a.rim.intensity-i.rim.intensity)*o,fS(lS,V.lerp(i.sun.elevation,a.sun.elevation,o),V.lerp(i.sun.azimuth,a.sun.azimuth,o),h.sunPos),g=o<.5?r.from:r.to,u&&u.setPhase(g),e&&(m.zenith.copy(h.zenith),m.horizon.copy(h.horizon),m.sunGlow.copy(h.sunGlow),m.glowStrength=h.glowStrength,m.water.copy(h.water),m.ambient.copy(h.ambient),m.ambientI=h.ambientI,m.sun.copy(h.sun),m.sunI=h.sunI,m.sunPos.copy(h.sunPos),m.rim.copy(h.rim),m.rimI=h.rimI,y())}function y(){n.background&&n.background.copy(m.horizon),n.fog&&n.fog.color.copy(m.horizon),r&&r.update({zenithColor:m.zenith,horizonColor:m.horizon,sunGlowColor:m.sunGlow,sunPos:m.sunPos,glowStrength:m.glowStrength}),a&&a({horizonColor:m.horizon,sunGlowColor:m.sunGlow,sunPos:m.sunPos,glowStrength:m.glowStrength}),i?.material?.color&&i.material.color.copy(m.water),o&&(o.color.copy(m.ambient),o.intensity=m.ambientI),s&&(s.color.copy(m.sun),s.intensity=m.sunI,s.position.copy(m.sunPos)),c&&(c.color.copy(m.rim),c.intensity=m.rimI),l&&l.setVisibility(_)}function b(e){let t=1-Math.exp(-e*.8);m.zenith.lerp(h.zenith,t),m.horizon.lerp(h.horizon,t),m.sunGlow.lerp(h.sunGlow,t),m.glowStrength+=(h.glowStrength-m.glowStrength)*t,m.water.lerp(h.water,t),m.ambient.lerp(h.ambient,t),m.ambientI+=(h.ambientI-m.ambientI)*t,m.sun.lerp(h.sun,t),m.sunI+=(h.sunI-m.sunI)*t,m.sunPos.lerp(h.sunPos,t),m.rim.lerp(h.rim,t),m.rimI+=(h.rimI-m.rimI)*t;let n=0;g===`night`?n=1:g===`dusk`?n=.4:g===`dawn`&&(n=.3),_+=(n-_)*t;let r=0;g===`day`?r=1:(g===`dawn`||g===`dusk`)&&(r=.5);for(let e of d??[])e(r);u&&u.update(e),y()}v(!0);let x=null;return f&&(x=setInterval(()=>v(!1),p)),{update:b,refresh:()=>v(!1),getPhase:()=>g,destroy:()=>{x&&clearInterval(x)}}}function mS(e,{radius:t=500}={}){let n=new Po(t,32,20),r=new Go({uniforms:{uZenithColor:{value:new G(1718874)},uHorizonColor:{value:new G(4881054)},uSunGlowColor:{value:new G(16751186)},uSunDir:{value:new U(0,1,0)},uSunGlowStrength:{value:.25}},vertexShader:`
      varying vec3 vWorldDir;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 uZenithColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunGlowColor;
      uniform vec3 uSunDir;
      uniform float uSunGlowStrength;
      varying vec3 vWorldDir;

      void main() {
        vec3 dir = normalize(vWorldDir);

        // Плавный переход через линию горизонта без резкого излома на dir.y = 0
        float h = smoothstep(-0.06, 0.48, dir.y);
        float horizonFactor = pow(1.0 - h, 2.2);
        vec3 sky = mix(uZenithColor, uHorizonColor, horizonFactor);

        // Зарево вокруг солнца
        float sunAlignment = max(dot(dir, normalize(uSunDir)), 0.0);
        float glowMask = pow(sunAlignment, 24.0) * (0.2 + 0.8 * horizonFactor);

        sky += uSunGlowColor * glowMask * uSunGlowStrength;
        sky = min(sky, vec3(0.82));

        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }

    `,side:1,depthWrite:!1,fog:!1}),i=new J(n,r);i.frustumCulled=!1,i.renderOrder=-10,e.add(i);function a({zenithColor:e,horizonColor:t,sunGlowColor:n,sunPos:i,glowStrength:a}){e&&r.uniforms.uZenithColor.value.copy(e),t&&r.uniforms.uHorizonColor.value.copy(t),n&&r.uniforms.uSunGlowColor.value.copy(n),i&&i.lengthSq()>1e-4&&r.uniforms.uSunDir.value.copy(i).normalize(),a!==void 0&&(r.uniforms.uSunGlowStrength.value=a)}function o(){e.remove(i),n.dispose(),r.dispose()}return{mesh:i,update:a,destroy:o}}var hS={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},gS=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},_S=new Ms(-1,1,1,-1,0,1),vS=new class extends Mr{constructor(){super(),this.setAttribute(`position`,new K([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new K([0,2,0,0,2,0],2))}},yS=class{constructor(e){this._mesh=new J(vS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_S)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},bS=class extends gS{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Go?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ho.clone(e.uniforms),this.material=new Go({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yS(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},xS=class extends gS{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},SS=class extends gS{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},CS=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:b}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bS(hS),this.copyPass.material.blending=0,this.timer=new Bs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}xS!==void 0&&(r instanceof xS?n=!0:r instanceof SS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},wS=class extends gS{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},TS={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ES=class e extends gS{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new G(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(i,a,{type:b,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new $t(i,a,{type:b,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new $t(i,a,{type:b,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=TS;this.highPassUniforms=Ho.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Go({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ho.clone(hS.uniforms),this.blendMaterial=new Go({uniforms:this.copyUniforms,vertexShader:hS.vertexShader,fragmentShader:hS.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new G,this._oldClearAlpha=1,this._basic=new q,this._fsQuad=new yS(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Go({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Go({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ES.BlurDirectionX=new H(1,0),ES.BlurDirectionY=new H(0,1);var DS={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},OS=class extends gS{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ho.clone(DS.uniforms),this.material=new Ko({name:DS.name,uniforms:this.uniforms,vertexShader:DS.vertexShader,fragmentShader:DS.fragmentShader}),this._fsQuad=new yS(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function kS(e,t,n,{strength:r=.6,radius:i=.4,threshold:a=.85}={}){if(r<=0)return null;let o=new CS(e),s=new wS(t,n);o.addPass(s);let c=new ES(new H(window.innerWidth,window.innerHeight),r,i,a);o.addPass(c);let l=new OS;o.addPass(l);function u(e,t){o.setSize(e,t),c&&c.resolution.set(e,t)}function d(e,t){o.render(t)}function f(){o.dispose(),c?.dispose(),l.dispose()}return{composer:o,bloomPass:c,render:d,resize:u,destroy:f}}function AS(e,{count:t=1200,radius:n=400,seed:r=42,minY:i=.02}={}){let a=Eb(r),o=new Float32Array(t*3),s=new Float32Array(t),c=new Float32Array(t),l=new Float32Array(t),u=new Float32Array(t),d=Math.PI*(3-Math.sqrt(5));for(let e=0;e<t;e++){let r=(e+.5)/t,f=i+(1-i)*r,p=Math.sqrt(Math.max(0,1-f*f)),m=e*d,h=Math.cos(m)*p,g=Math.sin(m)*p;o[e*3]=h*n,o[e*3+1]=f*n,o[e*3+2]=g*n,s[e]=1+a()*2,c[e]=a()*Math.PI*2,l[e]=.3+a()*.9,u[e]=.5+a()*.5}let f=new Mr;f.setAttribute(`position`,new vr(o,3)),f.setAttribute(`size`,new vr(s,1)),f.setAttribute(`phase`,new vr(c,1)),f.setAttribute(`speed`,new vr(l,1)),f.setAttribute(`baseAlpha`,new vr(u,1));let p=new Go({uniforms:{uTime:{value:0},uVisibility:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uColor:{value:new G(16777215)}},vertexShader:`
      attribute float size;
      attribute float phase;
      attribute float speed;
      attribute float baseAlpha;
      varying float vAlpha;
      uniform float uTime;
      uniform float uVisibility;
      uniform float uPixelRatio;
      void main() {
        float twinkle = 0.6 + 0.4 * sin(uTime * speed + phase);
        vAlpha = baseAlpha * twinkle * uVisibility;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vAlpha;
      uniform vec3 uColor;
      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;
        float softness = smoothstep(0.5, 0.0, d);
        float core = smoothstep(0.3, 0.0, d);
        float intensity = softness * 0.6 + core * 0.4;
        gl_FragColor = vec4(uColor, vAlpha * intensity);
      }
    `,transparent:!0,depthWrite:!1,blending:2}),m=new Ji(f,p);m.frustumCulled=!1,m.renderOrder=-1,e.add(m);function h(e){p.uniforms.uTime.value=e}function g(e){p.uniforms.uVisibility.value=V.clamp(e,0,1)}function _(){e.remove(m),f.dispose(),p.dispose()}return{points:m,update:h,setVisibility:g,destroy:_}}function jS(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function MS(e,t,{duration:n=1.3,distance:r=22,height:i=16,followY:a=3.6}={}){let o={active:!1,fromPos:new U,toPos:new U,fromTarget:new U,toTarget:new U,progress:0,duration:n},s=null,c=new H,l=new U;function u(r,i,a){o.fromPos.copy(e.position),o.toPos.copy(r),o.fromTarget.copy(t.target),o.toTarget.copy(i),o.progress=0,o.active=!0,o.duration=a??n,t.autoRotate=!1}function d(t,n,a={}){s&&p();let o=a.distance??r,c=a.height??i,l=e.position.clone().sub(t).setY(0);l.lengthSq()<.001&&l.set(0,0,1),l.normalize();let d=l.multiplyScalar(o).add(new U(0,c,0));u(t.clone().add(d),t.clone(),n)}function f(e,{back:n=10,up:r=5}={}){s={ship:e,back:n,up:r},o.active=!1,t.autoRotate=!1,t.enabled=!1;let i=e.getPos(),u=e.getDir();c.copy(u),l.set(i.x,a,i.y)}function p(){s=null,t.enabled=!0}function m(){return s!==null}function h(n){if(s){let{ship:r,back:i,up:o}=s,u=r.getPos(),d=r.getDir(),f=1-Math.exp(-n*4);c.x+=(d.x-c.x)*f,c.y+=(d.y-c.y)*f,c.lengthSq()>1e-4&&c.normalize();let p=1-Math.exp(-n*12);l.x+=(u.x-l.x)*p,l.y+=(a-l.y)*p,l.z+=(u.y-l.z)*p;let m=l.x-c.x*i,h=l.z-c.y*i,g=a+o,_=1-Math.exp(-n*6);e.position.x+=(m-e.position.x)*_,e.position.y+=(g-e.position.y)*_,e.position.z+=(h-e.position.z)*_,t.target.copy(l),e.lookAt(t.target);return}if(!o.active)return;o.progress+=n/o.duration,o.progress>=1&&(o.progress=1,o.active=!1);let r=jS(o.progress);e.position.lerpVectors(o.fromPos,o.toPos,r),t.target.lerpVectors(o.fromTarget,o.toTarget,r)}return{focus:d,follow:f,stopFollow:p,update:h,isActive:()=>o.active||!!s,isFollowing:m,destroy:()=>{o.active=!1,s=null,t.enabled=!0}}}var NS={hull:9067066,hullDark:5913130,sail:15788248,sailAccent:14178906,mast:4864554};function PS(){let e=new W,t=new Q({color:NS.hull,roughness:.85,flatShading:!0}),n=new Q({color:NS.hullDark,roughness:.9,flatShading:!0}),r=new Q({color:NS.mast,roughness:1,flatShading:!0}),i=new Q({color:NS.sail,side:2,roughness:.9,flatShading:!0}),a=new Q({color:NS.sailAccent,side:2,roughness:.9,flatShading:!0}),o=new Ba;o.moveTo(-1.1,-.35),o.lineTo(.1,-.52),o.quadraticCurveTo(.95,-.45,1.55,0),o.quadraticCurveTo(.95,.45,.1,.52),o.lineTo(-1.1,.35),o.closePath();let s=new To(o,{depth:.38,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.08,bevelThickness:.14});s.rotateX(Math.PI/2);let c=s.attributes.position;for(let e=0;e<c.count;e++)c.getY(e)<-.1&&(c.setZ(e,c.getZ(e)*.5),c.getX(e)>.8&&c.setX(e,c.getX(e)-.22));s.computeVertexNormals();let l=new J(s,t);l.position.y=.36,l.castShadow=!0,l.receiveShadow=!0,e.add(l);let u=new Mo(o);u.rotateX(-Math.PI/2);let d=new J(u,n);d.scale.set(.88,1,.85),d.position.y=.34,d.receiveShadow=!0,e.add(d);for(let n of[-.55,.15]){let r=new J(new Y(.18,.04,.82),t);r.position.set(n,.38,0),r.castShadow=!0,e.add(r)}let f=new J(new X(.03,.045,2,6),r);f.position.set(.15,1.3,0),f.castShadow=!0,e.add(f);let p=new J(new X(.02,.02,1.15,6),r);p.rotation.x=Math.PI/2,p.position.set(.18,2.15,0),e.add(p);let m=new J(new X(.02,.02,1.35,6),r);m.rotation.x=Math.PI/2,m.position.set(.18,.65,0),e.add(m);let h=new Z(1.2,1.45,3,3),g=h.attributes.position;for(let e=0;e<g.count;e++){let t=g.getX(e)/.6,n=g.getY(e)/.725,r=(1-t*t*.7)*(1-n*n*.8)*.24;g.setZ(e,r)}h.computeVertexNormals(),h.rotateY(Math.PI/2);let _=new J(h,i);_.position.set(.18,1.4,0),_.castShadow=!0,_.receiveShadow=!0,e.add(_);let v=new Mr;v.setAttribute(`position`,new K([0,0,0,0,.16,0,-.35,.08,.05],3)),v.computeVertexNormals();let y=new J(v,a);return y.position.set(.15,2.25,0),e.add(y),e}function FS(){let e=new W,t=new Q({color:5913130,roughness:.9,flatShading:!0}),n=new Q({color:8018490,roughness:.9,flatShading:!0}),r=new Q({color:11569240,roughness:1,flatShading:!0}),i=new Q({color:9071168,roughness:1,flatShading:!0}),a=new Q({color:4864554,roughness:1,flatShading:!0}),o=new Q({color:15788248,side:2,roughness:.9,flatShading:!0}),s=new Q({color:14178906,side:2,roughness:.9,flatShading:!0}),c=new Q({color:2759184,roughness:1,flatShading:!0}),l=new Ba;l.moveTo(-2.1,-.65),l.lineTo(.4,-.85),l.quadraticCurveTo(1.8,-.7,2.7,0),l.quadraticCurveTo(1.8,.7,.4,.85),l.lineTo(-2.1,.65),l.closePath();let u=new To(l,{depth:.75,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.15,bevelThickness:.25});u.rotateX(Math.PI/2);let d=u.attributes.position;for(let e=0;e<d.count;e++)d.getY(e)<-.2&&(d.setZ(e,d.getZ(e)*.55),d.getX(e)>1.5&&d.setX(e,d.getX(e)-.35));u.computeVertexNormals();let f=new J(u,t);f.position.y=.65,f.castShadow=!0,f.receiveShadow=!0,e.add(f);let p=new Mo(l);p.rotateX(-Math.PI/2);let m=new J(p,r);m.position.y=.66,m.receiveShadow=!0,e.add(m);for(let t=0;t<5;t++){let n=-1.4+t*.65,r=new J(new Y(.06,.02,n>.8?1:1.45),i);r.position.set(n,.67,0),e.add(r)}let h=new To(l,{depth:.12,bevelEnabled:!1});h.rotateX(Math.PI/2);let g=new J(h,n);g.scale.set(1.02,1,1.04),g.position.y=.76,g.castShadow=!0,e.add(g);let _=new J(new X(.03,.06,1.4,6),a);_.rotation.z=-Math.PI/3,_.position.set(2.8,.95,0),_.castShadow=!0,e.add(_);let v=new J(new Y(1.1,.55,1.15),n);v.position.set(-1.45,.92,0),v.castShadow=!0,v.receiveShadow=!0,e.add(v);let y=new J(new Y(1.25,.08,1.28),i);y.position.set(-1.45,1.22,0),y.castShadow=!0,e.add(y);let b=new Q({color:16765056,emissive:16752704,emissiveIntensity:1.8,roughness:.4});for(let t of[-.3,.3]){let n=new J(new Y(.04,.18,.22),b);n.position.set(-.89,.95,t),e.add(n)}let x=new J(new X(.05,.08,3.2,6),a);x.position.set(.35,2.2,0),x.castShadow=!0,e.add(x);let S=new J(new X(.04,.06,2.1,6),a);S.position.set(-1.45,2.2,0),S.castShadow=!0,e.add(S);let C=new J(new X(.03,.03,2.2,6),a);C.rotation.x=Math.PI/2,C.position.set(.35,3.35,0),e.add(C);let w=new J(new X(.03,.03,1.7,6),a);w.rotation.x=Math.PI/2,w.position.set(.35,2.15,0),e.add(w);function T(e,t,n){let r=new Z(e,t,4,4),i=r.attributes.position;for(let r=0;r<i.count;r++){let a=i.getX(r)/(e/2),o=i.getY(r)/(t/2),s=(1-a*a*.7)*(1-o*o*.8)*n;i.setZ(r,s)}return r.computeVertexNormals(),r.rotateY(Math.PI/2),r}let E=new J(T(1.9,1.05,.35),o);E.position.set(.38,2.8,0),E.castShadow=!0,e.add(E);let D=new J(T(1.91,.22,.36),s);D.position.set(.39,2.8,0),e.add(D);let O=new J(T(1.5,.95,.3),o);O.position.set(.38,1.65,0),O.castShadow=!0,e.add(O);let k=new Mr;k.setAttribute(`position`,new K([0,0,0,0,1.5,0,-.95,.15,.12],3)),k.computeVertexNormals();let A=new J(k,s);A.position.set(-1.45,1.4,0),A.castShadow=!0,e.add(A);let j=new Mr;j.setAttribute(`position`,new K([.35,3.3,0,.45,1.2,.1,3.1,1.15,0],3)),j.computeVertexNormals();let M=new J(j,o);M.castShadow=!0,e.add(M);for(let t of[{from:[.35,3.6,0],to:[.2,.75,.8]},{from:[.35,3.6,0],to:[.2,.75,-.8]},{from:[.35,2.2,0],to:[.5,.75,.8]},{from:[.35,2.2,0],to:[.5,.75,-.8]},{from:[-1.45,3.1,0],to:[-1.5,1.25,.55]},{from:[-1.45,3.1,0],to:[-1.5,1.25,-.55]},{from:[.35,3.6,0],to:[3.2,1.2,0]},{from:[-1.45,3.1,0],to:[.35,3.5,0]}]){let n=new U(...t.from),r=new U(...t.to),i=r.clone().sub(n),a=new J(new X(.012,.012,i.length(),4),c);a.position.copy(n.clone().add(r).multiplyScalar(.5)),a.quaternion.setFromUnitVectors(new U(0,1,0),i.normalize()),e.add(a)}let N=new Mr;N.setAttribute(`position`,new K([0,0,0,0,.28,0,-.55,.14,.08],3)),N.computeVertexNormals();let P=new J(N,s);P.position.set(.35,3.55,0),e.add(P);let F=new W;F.position.set(-.75,.92,0),F.rotation.y=Math.PI/2;let I=new J(new Fo(.18,.025,4,8),a);F.add(I);for(let e=0;e<4;e++){let t=new J(new X(.015,.015,.38,4),a);t.rotation.z=e*Math.PI/4,F.add(t)}e.add(F);let ee=new J(new X(.16,.16,.32,8),n);ee.position.set(1.1,.82,.3),ee.castShadow=!0,e.add(ee);let L=new W;L.position.set(1.85,.55,.62),L.rotation.set(.2,-.4,.15);let te=new Q({color:3815994,roughness:.7,metalness:.6,flatShading:!0}),ne=new J(new X(.025,.025,.42,4),te);L.add(ne);let re=new J(new X(.02,.02,.25,4),te);re.rotation.z=Math.PI/2,re.position.y=.14,L.add(re);let ie=new J(new Fo(.14,.022,4,6,Math.PI),te);return ie.rotation.z=Math.PI,ie.position.y=-.08,L.add(ie),e.add(L),e}function IS(){let e=new W,t=new Q({vertexColors:!0,roughness:.75,flatShading:!0}),n=new Q({color:2900567,roughness:.8,flatShading:!0}),r=new q({color:1119773}),i=new Q({color:14414847,transparent:!0,opacity:.75,roughness:.2,flatShading:!0}),a=new ko([new H(.01,-2.2),new H(.28,-2.1),new H(.55,-1.2),new H(.95,-.2),new H(1.02,.8),new H(.88,1.65),new H(.48,2.15),new H(.01,2.3)],10);a.rotateZ(-Math.PI/2);let o=a.attributes.position,s=[],c=new G(2834774),l=new G(4152181),u=new G(13162724),d=new G;for(let e=0;e<o.count;e++){let t=o.getX(e),n=o.getY(e),r=o.getZ(e);r*=.88,n*=n>0?1.05:.82;let i=Math.cos(t/2.3*(Math.PI/2))*.14;n+=i,o.setXYZ(e,t,n,r),n<-.12&&t>-1?(d.copy(u),Math.abs(Math.sin(r*18))>.75&&d.multiplyScalar(.88)):n<.15?d.lerpColors(u,l,(n+.12)/.27):d.lerpColors(l,c,V.clamp(n/.9,0,1)),s.push(d.r,d.g,d.b)}a.setAttribute(`color`,new K(s,3)),a.computeVertexNormals();let f=new J(a,t);f.castShadow=!0,f.receiveShadow=!0,e.add(f);let p=new Mr;p.setAttribute(`position`,new K([-.55,.72,0,-1.05,.58,0,-.98,1.02,0],3)),p.computeVertexNormals();let m=n.clone();m.side=2;let h=new J(p,m);h.castShadow=!0,e.add(h);for(let t of[-1,1]){let n=new J(new Po(.085,6,4),r);n.position.set(1.42,.02,t*.78),e.add(n)}let g=[];for(let t of[-1,1]){let r=new W;r.position.set(.65,-.32,t*.78);let i=new Y(.55,.08,1.45),a=i.attributes.position;for(let e=0;e<a.count;e++){let n=a.getZ(e);Math.sign(n)===t&&Math.abs(n)>.2&&(a.setX(e,a.getX(e)*.35-.38),a.setY(e,a.getY(e)*.4))}i.computeVertexNormals();let o=new J(i,n);o.position.set(-.1,-.05,t*.65),o.rotation.x=t*.22,o.castShadow=!0,r.add(o),e.add(r),g.push({pivot:r,side:t})}let _=new W;_.position.set(-2.05,.02,0),e.add(_);let v=new X(.16,.3,.95,7);v.rotateZ(Math.PI/2),v.scale(1,1.15,.75);let y=new J(v,n);y.position.set(-.42,0,0),y.castShadow=!0,_.add(y);let b=new W;b.position.set(-.85,0,0),_.add(b);for(let e of[-1,1]){let t=new Y(.68,.07,1.25),r=t.attributes.position;for(let t=0;t<r.count;t++){let n=r.getZ(t);Math.sign(n)===e&&Math.abs(n)>.15&&(r.setX(t,r.getX(t)*.3-.32),r.setY(t,r.getY(t)*.35))}t.computeVertexNormals();let i=new J(t,n);i.position.set(-.18,0,e*.55),i.castShadow=!0,b.add(i)}let x=new U(1.15,.92,0),S=[];for(let t=0;t<12;t++){let n=new J(new ia(.08+Math.random()*.07,0),i.clone());n.userData={phase:t/12,spreadX:(Math.random()-.5)*.7,spreadZ:(Math.random()-.5)*.9,maxH:1.8+Math.random()*.9},n.visible=!1,e.add(n),S.push(n)}let C=Math.random()*Math.PI*2;function w(t,n){let r=Math.sin(t*2.2+C),i=Math.sin(t*2.2+C-.65);_.rotation.z=r*.26,b.rotation.z=i*.34;for(let{pivot:e,side:n}of g)e.rotation.x=n*(.1+Math.sin(t*1.6+C)*.12);e.rotation.z=-r*.05,e.rotation.x=Math.sin(t*.9+C)*.04;let a=t*.22%1,o=a<.25;for(let e of S){let{phase:t,spreadX:n,spreadZ:r,maxH:i}=e.userData;if(o){let o=a/.25,s=V.clamp((o-t*.35)/.65,0,1);if(s>0&&s<1){e.visible=!0;let t=Math.sin(s*Math.PI*.85)*i;e.position.set(x.x+n*s-s*.25,x.y+t,x.z+r*s),e.material.opacity=Math.sin(s*Math.PI)*.75,e.scale.setScalar(.6+s*1.1)}else e.visible=!1}else e.visible=!1}}function T(t){e.visible=t>.01}return e.userData.updateWhale=w,{group:e,update:w,setVisibility:T}}function LS(e,t,n,r,i=72){if(e.length<2)throw Error(`buildOuterRoute: нужно минимум 2 острова`);let a=e.reduce((e,t)=>e+t.x,0)/e.length,o=e.reduce((e,t)=>e+t.z,0)/e.length,s=0;for(let t of e){let e=Math.hypot(t.x-a,t.z-o),n=(t.radius??6)+r;s=Math.max(s,e+n)}let c=s+r+n,l=[];for(let s=0;s<i;s++){let u=s/i*Math.PI*2,d=a+Math.cos(u)*c,f=o+Math.sin(u)*c;for(let t of e){let e=d-t.x,i=f-t.z,s=Math.hypot(e,i),c=(t.radius??6)+r+n;if(s<c&&s>1e-4)d=t.x+e/s*c,f=t.z+i/s*c;else if(s<=1e-4){let e=a-t.x,n=o-t.z,r=Math.hypot(e,n)||1;d=t.x-e/r*c,f=t.z-n/r*c}}l.push(new U(d,t,f))}return new ya(l,!0,`catmullrom`,.5)}function RS(e,t,n=6,r=6,i=140){if(e.length<3)throw Error(`buildBetweenRoute: нужно минимум 3 острова`);let a=e.reduce((e,t)=>e+t.x,0)/e.length,o=e.reduce((e,t)=>e+t.z,0)/e.length,s=[...e].sort((e,t)=>Math.atan2(e.z-o,e.x-a)-Math.atan2(t.z-o,t.x-a)),c=[],l=s.length;for(let e=0;e<l;e++){let t=s[e],n=s[(e+1)%l],i=(t.x+n.x)/2,u=(t.z+n.z)/2,d=i-a,f=u-o,p=Math.hypot(d,f);p>.001&&(i+=d/p*r,u+=f/p*r),c.push(new H(i,u))}let u=new ya(c.map(e=>new U(e.x,t,e.y)),!0,`catmullrom`,.35),d=new U,f=[];for(let e=0;e<i;e++){let t=e/i;u.getPoint(t,d),f.push({x:d.x,z:d.z})}for(let t=0;t<2;t++){for(let t of f)for(let r of e){let e=t.x-r.x,i=t.z-r.z,s=Math.hypot(e,i),c=(r.radius??6)*1.35+n;if(s<c&&s>1e-4)t.x=r.x+e/s*c,t.z=r.z+i/s*c;else if(s<=1e-4){let e=a-r.x,n=o-r.z,i=Math.hypot(e,n)||1;t.x=r.x-e/i*c,t.z=r.z-n/i*c}}if(t===0){let e=[];for(let t=0;t<f.length;t++){let n=f[(t-1+f.length)%f.length],r=f[t],i=f[(t+1)%f.length];e.push({x:n.x*.25+r.x*.5+i.x*.25,z:n.z*.25+r.z*.5+i.z*.25})}f=e}}return new ya(f.map(e=>new U(e.x,t,e.z)),!0,`catmullrom`,.4)}var zS=new H;function BS({islands:e,clearance:t=2.5,speed:n=3.5,turnRate:r=1.1,startPos:i,startDir:a}){let o=new H(i?i.x:0,i?i.y:0),s=new H(a?a.x:-1,a?a.y:0).normalize(),c=!1,l=0,u=0,d=0,f=0,p=e.reduce((e,t)=>e+t.x,0)/Math.max(1,e.length),m=e.reduce((e,t)=>e+t.z,0)/Math.max(1,e.length),h=e.reduce((e,t)=>Math.max(e,Math.hypot(t.x-p,t.z-m)+(t.radius??6)),40)+16,g=1,_=0,v=0,y=Math.atan2(s.y,s.x);function b(e){c=e,e?(d=n*.4,f=0):(l=0,u=0,d=0,f=0)}function x({forward:e=0,turn:t=0}={}){l=Math.max(-1,Math.min(1,e)),u=Math.max(-1,Math.min(1,t))}function S(){return c}function C(i,a,b=[]){if(c){let a=n*l,c=l===0?1.1:2.2;d=V.damp(d,a,c,i);let p=r*u;f=V.damp(f,p,4.5,i);let m=Math.atan2(s.y,s.x)+f*i;s.set(Math.cos(m),Math.sin(m)),o.x+=s.x*d*i,o.y+=s.y*d*i;for(let n of e){let e=o.x-n.x,r=o.y-n.z,i=Math.hypot(e,r),a=(n.radius??6)+t;if(i<a&&i>1e-4){let t=e/i,s=r/i;o.x=n.x+t*a,o.y=n.z+s*a,d*=.6}}return{x:o.x,z:o.y,dirX:s.x,dirZ:s.y,angle:Math.atan2(s.y,s.x)}}zS.set(s.x,s.y);let x=null,S=1/0,C=0,w=0;for(let n of e){let e=n.x-o.x,r=n.z-o.y,i=Math.hypot(e,r);if(i>=(n.radius??6)+t+6)continue;let a=e/(i||1),c=r/(i||1),l=s.x*a+s.y*c,u=i<(n.radius??6)+t+1.5;l<-.2&&!u||i<S&&(S=i,x=n,C=e,w=r)}let T=s.x,E=s.y;if(x){let e=-C/S,n=-w/S,r=s.x*-e+s.y*-n,a=-n*g,o=e*g,c=(x.radius??6)+t+6,l=Math.max(0,1-S/c),u=.35,d=1+r*.7;T=e*u+a*d,E=n*u+o*d,T*=.7+l*1.5,E*=.7+l*1.5,l>.6?(_+=i,_>2&&(g*=-1,_=0)):_=Math.max(0,_-i*.5)}else{let e=p-o.x,t=m-o.y,n=Math.hypot(e,t);n>h?(T=e/n,E=t/n,y=Math.atan2(E,T)):(v-=i,v<=0&&(v=2+Math.random()*3,y=Math.atan2(s.y,s.x)+(Math.random()-.5)*.7),T=Math.cos(y),E=Math.sin(y))}for(let e of b){let n=e.x-o.x,r=e.z-o.y,i=Math.hypot(n,r),a=(e.radius??2.5)+t+5.5;if(i<a&&i>.001){let t=n/i,o=r/i;if(s.x*t+s.y*o>-.1||i<(e.radius??2.5)+3){let e=s.x*o-s.y*t>=0?-1:1,n=-o*e,r=t*e,c=(1-i/a)**1.3*2.4;T+=(-t*.4+n)*c,E+=(-o*.4+r)*c}}}let D=Math.hypot(T,E)||1;T/=D,E/=D;let O=Math.atan2(s.y,s.x),k=Math.atan2(E,T)-O;for(;k>Math.PI;)k-=Math.PI*2;for(;k<-Math.PI;)k+=Math.PI*2;let A=r*i,j=O+Math.max(-A,Math.min(A,k));s.set(Math.cos(j),Math.sin(j));let M=x&&S<x.radius+t+3?1.1:1;o.x+=s.x*n*M*i,o.y+=s.y*n*M*i;for(let n of e){let e=o.x-n.x,r=o.y-n.z,i=Math.hypot(e,r),a=(n.radius??6)+t;if(i<a&&i>1e-4){let t=e/i,c=r/i;o.x=n.x+t*a,o.y=n.z+c*a,s.x*-t+s.y*-c>0&&s.set(-c*g,t*g)}}return{x:o.x,z:o.y,dirX:s.x,dirZ:s.y,angle:Math.atan2(s.y,s.x)}}return{update:C,setManualMode:b,setManualInput:x,isManual:S,getPos:()=>o.clone(),getDir:()=>s.clone()}}function VS({maxPoints:e=120,lifetime:t=2.5,spawnRate:n=30,size:r=.25,color:i=15136762,waterLevel:a=.9,startWidth:o=2.5}={}){let s=new Float32Array(e*3),c=new Float32Array(e),l=new Float32Array(e),u=new Mr;u.setAttribute(`position`,new vr(s,3)),u.setAttribute(`alpha`,new vr(c,1)),u.setAttribute(`size`,new vr(l,1));let d=new Go({uniforms:{uColor:{value:new G(i)},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float alpha;
      attribute float size;
      varying float vAlpha;
      uniform float uPixelRatio;
      void main() {
        vAlpha = alpha;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vAlpha;
      uniform vec3 uColor;
      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;
        float softness = smoothstep(0.5, 0.2, d);
        gl_FragColor = vec4(uColor, vAlpha * softness);
      }
    `,transparent:!0,depthWrite:!1,blending:1}),f=new Ji(u,d);f.frustumCulled=!1,f.renderOrder=10;let p=[];for(let t=0;t<e;t++)p.push({x:0,z:0,offsetX:0,offsetZ:0,age:0,life:0,phase:0,active:!1});let m=0,h=0;function g(n,r,i,a){let s=p[m],c=-a,l=i,u=(Math.random()-.5)*o;s.x=n,s.z=r,s.offsetX=c*u,s.offsetZ=l*u,s.age=0,s.life=t*(.8+Math.random()*.4),s.phase=Math.random()*Math.PI*2,s.active=!0,m=(m+1)%e}function _(t,i,o,d,f,m){for(h+=i*n;h>=1;)g(o,d,f,m),--h;let _=0;for(let n=0;n<e;n++){let e=p[n];if(!e.active)continue;if(e.age+=i,e.age>=e.life){e.active=!1;continue}let o=e.age/e.life,u=1-o,d=e.x+e.offsetX*u,f=e.z+e.offsetZ*u,m=tS(d,f,t,a);s[_*3]=d,s[_*3+1]=m+.05,s[_*3+2]=f,c[_]=Math.sin(o*Math.PI)*.6,l[_]=r*(1+o*1.5),_++}for(let t=_;t<e;t++)c[t]=0;u.attributes.position.needsUpdate=!0,u.attributes.alpha.needsUpdate=!0,u.attributes.size.needsUpdate=!0,u.setDrawRange(0,_)}function v(){for(let e of p)e.active=!1}function y(){u.dispose(),d.dispose()}return{points:f,update:_,reset:v,destroy:y}}function HS(e,{islands:t=[],boatCount:n=2,shipCount:r=1,whaleCount:i=1,waterLevel:a=.9,baseSpeed:o=.005,radiusStep:s=6,clearance:c=8,shipClearance:l=2.5,shipSpeed:u=3.5,wakeLifetime:d=2.5,wakeSpawnRate:f=30,wakeSize:p=.25}={}){let m=[],h=[],g=[];if(t.length<3)return{boats:[],shipMeshes:[],whaleMeshes:[],update:()=>{},destroy:()=>{}};let _=new U,v=new U,y=[];function b(){let t=VS({lifetime:d,spawnRate:f,size:p,waterLevel:a});return e.add(t.points),t}function x(t,n,r,i,a,o){e.add(t),m.push({type:`boat`,mesh:t,curve:n,t:r,speed:i,clockwise:a,bobPhase:o,wake:b()})}function S(t,n,r){t.userData.isShipRoot=!0,t.traverse(e=>{e.isMesh&&(e.userData.isShip=!0)}),e.add(t),h.push(t),m.push({type:`ship`,mesh:t,steering:n,bobPhase:r,wake:b()})}function C(t,n,r,i,a,o){t.userData.isWhaleRoot=!0,t.traverse(e=>{e.isMesh&&(e.userData.isWhale=!0)}),e.add(t);let s={_pos:new H,_dir:new H(1,0),getPos(){return this._pos},getDir(){return this._dir}};g.push(t),m.push({type:`whale`,mesh:t,curve:n,t:r,speed:i,clockwise:a,bobPhase:o,steering:s})}for(let e=0;e<n;e++){let r=PS();r.scale.setScalar(.85+Math.random()*.15);let i=RS(t,a,5.5+e*2,4.5+e*4.5,140),s=e%2==0;x(r,i,(e/Math.max(1,n)+Math.random()*.25)%1,o*(1.25+Math.random()*.35),s,Math.random()*Math.PI*2)}for(let e=0;e<r;e++){let e=FS();e.scale.setScalar(1+Math.random()*.1);let n=t.reduce((e,t)=>e+t.x,0)/t.length,r=t.reduce((e,t)=>e+t.z,0)/t.length,i=Math.random()*Math.PI*2;S(e,BS({islands:t.map(e=>({x:e.x,z:e.z,radius:e.radius??6})),waterLevel:a,clearance:l,speed:u,turnRate:1.05,startPos:new H(n+Math.cos(i)*32,r+Math.sin(i)*32),startDir:new H(-Math.sin(i),Math.cos(i))}),Math.random()*Math.PI*2)}for(let e=0;e<i;e++){let{group:n}=IS();n.scale.setScalar(1.5+Math.random()*.5);let r=LS(t,a,s+1+e*2,c+2,72),i=e%2==0,l=o*.8;C(n,r,Math.random(),l,i,Math.random()*Math.PI*2)}function w(e,t){y.length=0;for(let n of m)if(n.type===`boat`){let r=n.speed*t*(n.clockwise?1:-1);n.t=(n.t+r+1)%1,n.curve.getPointAt(n.t,_);let i=(n.t+(n.clockwise?.003:-.003)+1)%1;n.curve.getPointAt(i,v);let o=tS(_.x,_.z,e,a),s=Math.sin(e*1.2+n.bobPhase)*.06,c=Math.sin(e*.9+n.bobPhase)*.05;n.mesh.position.set(_.x,o+s-.15,_.z);let l=v.clone().sub(_);if(l.lengthSq()>1e-4){let t=Math.atan2(l.x,l.z);n.mesh.rotation.set(Math.sin(e*1.5+n.bobPhase)*.03,t-Math.PI/2,c)}let u=Math.hypot(l.x,l.z)||1,d=l.x/u,f=l.z/u,p=_.x-d*1.1,m=_.z-f*1.1;n.wake.update(e,t,p,m,d,f),y.push({x:_.x,z:_.z,radius:2.2})}else if(n.type===`whale`){let r=n.speed*t*(n.clockwise?1:-1);n.t=(n.t+r+1)%1,n.curve.getPointAt(n.t,_);let i=(n.t+(n.clockwise?.005:-.005)+1)%1;n.curve.getPointAt(i,v),n.steering._pos.set(_.x,_.z);let o=v.x-_.x,s=v.z-_.z,c=Math.hypot(o,s)||1;n.steering._dir.set(o/c,s/c);let l=tS(_.x,_.z,e,a),u=Math.sin(e*.4+n.bobPhase),d=u>0?u*1.5:0;n.mesh.position.set(_.x,l-1.2+d,_.z);let f=v.clone().sub(_);if(f.lengthSq()>1e-4){let t=Math.atan2(f.x,f.z);n.mesh.rotation.set(Math.sin(e*1+n.bobPhase)*.05,t-Math.PI/2,0)}n.mesh.userData.updateWhale&&n.mesh.userData.updateWhale(e,t)}for(let n of m)if(n.type===`ship`){let r=n.steering.update(t,e,y),i=tS(r.x,r.z,e,a),o=Math.sin(e*1.2+n.bobPhase)*.06,s=Math.sin(e*.9+n.bobPhase)*.05;n.mesh.position.set(r.x,i+o-.15,r.z);let c=Math.atan2(r.dirX,r.dirZ)-Math.PI/2;n.mesh.rotation.set(Math.sin(e*1.5+n.bobPhase)*.03,c,s);let l=r.x-r.dirX*1.8,u=r.z-r.dirZ*1.8;n.wake.update(e,t,l,u,r.dirX,r.dirZ),y.push({x:r.x,z:r.z,radius:3.5})}}function T(){for(let t of m)e.remove(t.mesh),t.mesh.traverse(e=>{if(e.isMesh){e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t?.dispose()}}),t.wake&&(e.remove(t.wake.points),t.wake.destroy());m.length=0,h.length=0,g.length=0}return{boats:m,shipMeshes:h,whaleMeshes:g,update:w,destroy:T}}function US(e=0){let t=new W,n=new Q({color:16054008,roughness:.85,flatShading:!0}),r=new Q({color:13620958,roughness:.85,flatShading:!0,side:2}),i=new Q({color:2237998,roughness:.9,flatShading:!0,side:2}),a=new Q({color:15239722,roughness:.7,flatShading:!0}),o=new Ao(.11,1);o.scale(.85,.75,2.3);let s=new J(o,n);s.castShadow=!0,t.add(s);let c=new J(new Ao(.08,0),n);c.position.set(0,.04,.24),t.add(c);let l=new J(new na(.028,.12,4),a);l.rotation.x=Math.PI/2,l.position.set(0,.03,.34),t.add(l);let u=new Mr;u.setAttribute(`position`,new K([0,.02,-.2,-.09,.03,-.4,.09,.03,-.4],3)),u.computeVertexNormals();let d=new J(u,n);t.add(d);function f(e){let t=new W;t.position.set(e*.06,.03,.04);let n=new Mr;n.setAttribute(`position`,new K([0,0,.08,0,0,-.09,e*.26,.04,.04,0,0,-.09,e*.26,.04,-.08,e*.26,.04,.04],3)),n.computeVertexNormals();let a=new J(n,r);a.castShadow=!0,t.add(a);let o=new W;o.position.set(e*.26,.04,0);let s=new Mr;s.setAttribute(`position`,new K([0,0,.04,0,0,-.08,e*.28,-.02,-.14],3)),s.computeVertexNormals();let c=new J(s,i);return c.castShadow=!0,o.add(c),t.add(o),{rootPivot:t,outerPivot:o}}let p=f(1),m=f(-1);t.add(p.rootPivot),t.add(m.rootPivot);let h=e*1.1;function g(e,t=1){let n=Math.sin(e*7.5*t+h),r=n*.45,i=Math.sin(e*7.5*t+h-.6)*.35;p.rootPivot.rotation.z=r,p.outerPivot.rotation.z=i,m.rootPivot.rotation.z=-r,m.outerPivot.rotation.z=-i,s.position.y=-n*.02}return{group:t,update:g,phase:h}}function WS(e,{islands:t=[],count:n=10,seed:r=42}={}){if(t.length===0)return{birds:[],update:()=>{},destroy:()=>{}};let i=t.reduce((e,t)=>e+t.x,0)/t.length,a=t.reduce((e,t)=>e+t.z,0)/t.length,o=Eb(r),s=[];for(let t=0;t<n;t++){let n=US(t),r=30+o()*40,i=18+o()*20,a=.15+o()*.15,c=o()>.5,l=o()*Math.PI*2,u=.8+o()*.6;n.group.scale.setScalar(u),e.add(n.group),s.push({bird:n,orbitR:r,height:i,speed:a,clockwise:c,startAngle:l,phase:o()*Math.PI*2})}function c(e,t){for(let t of s){let n=t.clockwise?1:-1,r=t.startAngle+e*t.speed*n,o=i+Math.cos(r)*t.orbitR,s=a+Math.sin(r)*t.orbitR,c=t.height+Math.sin(e*.5+t.phase)*2;t.bird.group.position.set(o,c,s);let l=Math.atan2(-Math.sin(r)*n,Math.cos(r)*n),u=n*.28+Math.sin(e*1.5+t.phase)*.05;t.bird.group.rotation.set(0,l,u,`YXZ`),t.bird.update(e,.8+t.speed*2)}}function l(){for(let t of s)e.remove(t.bird.group),t.bird.group.traverse(e=>{if(e.isMesh){e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t?.dispose()}});s.length=0}return{birds:s,update:c,destroy:l}}function GS(e=`rgba(255,255,255,1)`,t=`rgba(255,220,150,0)`){let n=document.createElement(`canvas`);n.width=128,n.height=128;let r=n.getContext(`2d`),i=r.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,e),i.addColorStop(.25,`rgba(255, 245, 210, 0.55)`),i.addColorStop(.6,`rgba(255, 210, 130, 0.15)`),i.addColorStop(1,t),r.fillStyle=i,r.fillRect(0,0,128,128);let a=new Zi(n);return a.colorSpace=ze,a}function KS(e){let t=new Oo(e,2),n=t.attributes.position,r=new U,i=[{dir:new U(.5,.4,.7).normalize(),r:.45,depth:.06},{dir:new U(-.4,.6,.6).normalize(),r:.35,depth:.05},{dir:new U(.2,-.5,.8).normalize(),r:.4,depth:.05},{dir:new U(-.6,-.3,.7).normalize(),r:.3,depth:.04},{dir:new U(.7,-.2,-.6).normalize(),r:.42,depth:.05}];for(let t=0;t<n.count;t++){r.fromBufferAttribute(n,t).normalize();let a=1;for(let e of i){let t=r.distanceTo(e.dir);if(t<e.r){let n=t/e.r;a-=Math.cos(n*Math.PI*.5)*e.depth}}r.multiplyScalar(e*a),n.setXYZ(t,r.x,r.y,r.z)}return t.computeVertexNormals(),t}function qS(e,t,{distance:n=350,sunSize:r=14,moonSize:i=10}={}){let a=new W,o=new W,s=GS(),c=new q({color:16775382,transparent:!0,opacity:1,fog:!1}),l=new J(new Po(r,24,16),c);a.add(l);let u=new Ur({map:s,color:16770206,transparent:!0,opacity:.75,blending:2,depthWrite:!1,fog:!1}),d=new ri(u);d.scale.setScalar(r*4.5),a.add(d);let f=new Ur({map:s,color:16758876,transparent:!0,opacity:.35,blending:2,depthWrite:!1,fog:!1}),p=new ri(f);p.scale.setScalar(r*9),a.add(p);let m=new Q({color:14477047,emissive:4873602,emissiveIntensity:.45,roughness:.95,metalness:0,flatShading:!0,transparent:!0,opacity:1,fog:!1}),h=new J(KS(i),m);o.add(h);let g=new Ur({map:s,color:10139391,transparent:!0,opacity:.4,blending:2,depthWrite:!1,fog:!1}),_=new ri(g);_.scale.setScalar(i*5),o.add(_),[a,o].forEach(t=>{t.traverse(e=>{e.castShadow=!1,e.receiveShadow=!1}),t.frustumCulled=!1,t.renderOrder=0,e.add(t)});let v={sunAlpha:1,moonAlpha:0,sunScale:1,sunColor:new G(16774864),sunGlowColor:new G(16764016),moonColor:new G(14477047)},y={sunAlpha:1,moonAlpha:0,sunScale:1,sunColor:new G(16774864),sunGlowColor:new G(16764016),moonColor:new G(14477047)};function b(e){e===`day`?(y.sunAlpha=1,y.moonAlpha=0,y.sunScale=1,y.sunColor.set(16775388),y.sunGlowColor.set(16766597)):e===`dawn`?(y.sunAlpha=.95,y.moonAlpha=0,y.sunScale=1.25,y.sunColor.set(16768944),y.sunGlowColor.set(16752222)):e===`dusk`?(y.sunAlpha=.95,y.moonAlpha=0,y.sunScale=1.3,y.sunColor.set(16757880),y.sunGlowColor.set(16739133)):e===`night`&&(y.sunAlpha=0,y.moonAlpha=1,y.sunScale=1,y.moonColor.set(14477047))}let x=0;function S(e){x+=e;let i=1-Math.exp(-e*1.4);v.sunAlpha+=(y.sunAlpha-v.sunAlpha)*i,v.moonAlpha+=(y.moonAlpha-v.moonAlpha)*i,v.sunScale+=(y.sunScale-v.sunScale)*i,v.sunColor.lerp(y.sunColor,i),v.sunGlowColor.lerp(y.sunGlowColor,i),v.moonColor.lerp(y.moonColor,i);let s=t.position.clone();s.lengthSq()<1e-4&&s.set(0,1,0),s.normalize();let h=s.multiplyScalar(n);v.sunAlpha>v.moonAlpha?(a.position.copy(h),o.position.copy(h).negate()):(o.position.copy(h),a.position.copy(h).negate());let _=1+Math.sin(x*1.8)*.04;l.scale.setScalar(v.sunScale),d.scale.setScalar(r*4.5*v.sunScale*_),p.scale.setScalar(r*9*v.sunScale*_),c.opacity=v.sunAlpha,u.opacity=.75*v.sunAlpha,f.opacity=.35*v.sunAlpha,c.color.copy(v.sunColor),u.color.copy(v.sunGlowColor),f.color.copy(v.sunGlowColor),m.opacity=v.moonAlpha,g.opacity=.42*v.moonAlpha,m.color.copy(v.moonColor),o.lookAt(0,0,0),a.visible=v.sunAlpha>.01,o.visible=v.moonAlpha>.01}function C(){e.remove(a),e.remove(o),l.geometry.dispose(),h.geometry.dispose(),s.dispose(),c.dispose(),u.dispose(),f.dispose(),m.dispose(),g.dispose()}return{sunGroup:a,moonGroup:o,setPhase:b,update:S,destroy:C}}function JS(e,t){let{camera:n,renderer:r,cubes:i,ships:a=[]}=e,{onHoverChange:o,onCubeClick:s,onShipClick:c,isPopupOpen:l,onSceneClickWhenPopupOpen:u}=t,d=new tc,f=new H,p=null;function m(e){f.x=e.clientX/window.innerWidth*2-1,f.y=-(e.clientY/window.innerHeight)*2+1}function h(e){let t=e;for(;t&&!t.userData.isShipRoot;)t=t.parent;return t?.userData.isShipRoot?t:null}function g(e){let t=e;for(;t&&!t.userData.isPersonRoot;)t=t.parent;return t?.userData.isPersonRoot??null}function _(e){for(let t of e){let e=g(t.object);if(e)return e;if(t.object.userData.isPerson)return t.object}return null}let v=0;function y(e){let t=performance.now();if(t-v<100)return;if(v=t,m(e),d.setFromCamera(f,n),d.intersectObjects(a,!0).length>0){p&&(p.userData.hovered=!1,p=null,o?.(null)),r.domElement.style.cursor=`pointer`;return}let s=_(d.intersectObjects(i,!1));s!==p&&(p&&(p.userData.hovered=!1),p=s,p&&(p.userData.hovered=!0),o?.(p)),r.domElement.style.cursor=p?`pointer`:`default`}function b(e){m(e),d.setFromCamera(f,n);let t=d.intersectObjects(a,!0);if(t.length>0){let e=h(t[0].object);e&&c?.(e);return}if(l()){u?.();return}let r=_(d.intersectObjects(i,!1));r&&s?.(r)}return r.domElement.addEventListener(`pointermove`,y),r.domElement.addEventListener(`pointerdown`,b),{getHovered:()=>p,destroy:()=>{r.domElement.removeEventListener(`pointermove`,y),r.domElement.removeEventListener(`pointerdown`,b)}}}function YS({el:e,camera:t,renderer:n}){let r=new U,i=!1,a=null,o=null;function s(t,n){e&&n&&t&&(a=t,o=null,e.textContent=n,e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),i=!0,u())}function c(t,n){e&&n&&t&&(o=t,a=null,e.textContent=n,e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),i=!0,u())}function l(){e&&i&&(e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),i=!1,a=null,o=null)}function u(){if(!i||!e)return;let s=n.domElement.getBoundingClientRect(),c,l,u=!1;if(a){if(a.getWorldPosition(r),r.y+=1,r.project(t),r.z>1){e.classList.add(`hidden`);return}e.classList.remove(`hidden`),c=(r.x*.5+.5)*s.width+s.left,l=(-r.y*.5+.5)*s.height+s.top}else if(o){let e=o.getBoundingClientRect();c=e.left,l=e.top+e.height/2,u=!0}else return;let d=e.getBoundingClientRect(),f,p;u?(f=c-d.width-8,p=l-d.height/2):(f=c-d.width/2,p=l-d.height-12),f=Math.max(8,Math.min(f,window.innerWidth-d.width-8)),p=Math.max(8,Math.min(p,window.innerHeight-d.height-8)),e.style.left=`${f}px`,e.style.top=`${p}px`}function d(){i&&u()}return{show:s,showAtElement:c,hide:l,update:d,isVisible:()=>i}}function XS(){let e=document.documentElement,t=document.getElementById(`theme-toggle`),n=t?.querySelector(`.navbar-theme-icon`);function r(){return e.classList.contains(`light-theme`)}function i(){n&&(n.innerHTML=r()?`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6518 13.7866 21 12.79Z"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
    </svg>
  `:`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20ZM4.93262 17.6533C5.32313 17.2628 5.95615 17.2628 6.34668 17.6533C6.73714 18.0438 6.73718 18.6769 6.34668 19.0674L4.92676 20.4873C4.53623 20.8775 3.90312 20.8777 3.5127 20.4873C3.12231 20.0969 3.12249 19.4638 3.5127 19.0732L4.93262 17.6533ZM17.6533 17.6533C18.0438 17.2628 18.6769 17.2628 19.0674 17.6533L20.4873 19.0732C20.8775 19.4638 20.8777 20.0969 20.4873 20.4873C20.0969 20.8777 19.4638 20.8775 19.0732 20.4873L17.6533 19.0674C17.2628 18.6769 17.2628 18.0438 17.6533 17.6533ZM12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM3 11C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3ZM23 11C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23ZM3.5127 3.5127C3.90314 3.12225 4.53621 3.12242 4.92676 3.5127L6.34668 4.93262C6.7372 5.32314 6.7372 5.95616 6.34668 6.34668C5.95616 6.7372 5.32314 6.7372 4.93262 6.34668L3.5127 4.92676C3.12242 4.53621 3.12225 3.90314 3.5127 3.5127ZM19.0732 3.5127C19.4638 3.12249 20.0969 3.12231 20.4873 3.5127C20.8777 3.90312 20.8775 4.53623 20.4873 4.92676L19.0674 6.34668C18.6769 6.73718 18.0438 6.73714 17.6533 6.34668C17.2628 5.95615 17.2628 5.32313 17.6533 4.93262L19.0732 3.5127ZM12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
       fill="currentColor" />
    </svg>
  `)}function a(t){t?e.classList.add(`light-theme`):e.classList.remove(`light-theme`),i()}function o(){let e=localStorage.getItem(`theme`);if(e===`light`)a(!0);else if(e===`dark`)a(!1);else{let e=window.matchMedia(`(prefers-color-scheme: light)`).matches;a(e)}}function s(){let e=!r();a(e),localStorage.setItem(`theme`,e?`light`:`dark`)}return t?.addEventListener(`click`,s),o(),{toggle:s,isLight:r}}function ZS({hudEl:e,wheelEl:t,canvasEl:n}){let r=!1,i=0,a=n?.getContext(`2d`),o=new U;function s(){e&&e.classList.remove(`hidden`),r=!0}function c(){e&&e.classList.add(`hidden`),r=!1,i=0,t&&(t.style.transform=`rotate(0deg)`)}function l(e,n){r&&t&&(i+=(e-i)*Math.min(1,n*10),t.style.transform=`rotate(${i}deg)`)}function u(e,t){if(!r||!a||!n||!e?.mesh)return;(n.width!==n.clientWidth||n.height!==n.clientHeight)&&(n.width=n.clientWidth,n.height=n.clientHeight);let i=n.width,s=n.height;if(i===0||s===0)return;let c=i/2,l=s/2;a.clearRect(0,0,i,s);let u=e.mesh.position.x,d=e.mesh.position.z;e.mesh.getWorldDirection(o);let f=Math.atan2(o.x,o.z);a.save(),a.translate(c,l),a.rotate(f-Math.PI/2),a.fillStyle=`rgba(46, 123, 255, 0.3)`,a.strokeStyle=`rgba(46, 123, 255, 0.8)`,a.lineWidth=1.5;let p=Math.hypot(i,s)*.5;for(let e of t){let t=(e.x-u)*1,n=(e.z-d)*1,r=e.radius*1;Math.abs(t)-r>p||Math.abs(n)-r>p||(a.beginPath(),a.arc(t,n,r,0,Math.PI*2),a.fill(),a.stroke())}a.restore(),a.fillStyle=`#e8eaf2`,a.beginPath(),a.moveTo(c,l-7),a.lineTo(c+5,l+6),a.lineTo(c,l+3),a.lineTo(c-5,l+6),a.closePath(),a.fill()}return{show:s,hide:c,updateWheel:l,updateMinimap:u,isVisible:()=>r}}function QS({cameraFly:e,camera:t,renderer:n,getBoats:r,islands:i}){let a={w:!1,a:!1,s:!1,d:!1},o=null,s=!1,c=null,l=null,u=0,d=0,f=ZS({hudEl:document.getElementById(`boat-hud`),wheelEl:document.getElementById(`boat-wheel`),canvasEl:document.getElementById(`minimap-canvas`)});function p(e){if(!s||!o)return;let t=e.beta,n=e.gamma;if(t===null||n===null)return;if(c===null){c=t,l=n;return}let r=t-c,i=n-l;Math.abs(r)<5&&(r=0),Math.abs(i)<5&&(i=0);let a=Math.max(-1,Math.min(1,-r/30)),f=Math.max(-1,Math.min(1,i/30));u+=(a-u)*.1,d+=(f-d)*.1}async function m(){if(!window.DeviceOrientationEvent)return!1;if(s)return!0;if(typeof DeviceOrientationEvent.requestPermission==`function`)try{if(await DeviceOrientationEvent.requestPermission()!==`granted`)return!1}catch(e){return console.warn(`Гироскоп недоступен:`,e),!1}return window.addEventListener(`deviceorientation`,p),s=!0,c=null,l=null,!0}function h(){s&&(window.removeEventListener(`deviceorientation`,p),s=!1,c=null,l=null,u=0,d=0)}window.addEventListener(`keydown`,e=>{let t=!1;switch(e.code){case`KeyW`:case`ArrowUp`:a.w=!0,t=!0;break;case`KeyA`:case`ArrowLeft`:a.a=!0,t=!0;break;case`KeyS`:case`ArrowDown`:a.s=!0,t=!0;break;case`KeyD`:case`ArrowRight`:a.d=!0,t=!0}t&&o&&e.preventDefault()}),window.addEventListener(`keyup`,e=>{switch(e.code){case`KeyW`:case`ArrowUp`:a.w=!1;break;case`KeyA`:case`ArrowLeft`:a.a=!1;break;case`KeyS`:case`ArrowDown`:a.s=!1;break;case`KeyD`:case`ArrowRight`:a.d=!1}});function g(){o&&(o.steering.setManualMode(!1),o.steering.setManualInput({forward:0,turn:0}),o=null,e.stopFollow(),e.focus(new U(0,2.6,0),1.2),f.hide(),h())}function _(){o&&(o.steering.setManualMode(!1),o.steering.setManualInput({forward:0,turn:0}),o=null,f.hide(),h())}function v(t){_(),o=t,t.steering.setManualMode(!0),t.steering.setManualInput({forward:0,turn:0}),e.follow(t.steering,{back:10,up:5}),f.show(),window.matchMedia(`(pointer: coarse)`).matches&&m()}function y(e){if(!o)return;let t=0,n=0;a.w||a.s||a.a||a.d?(t=a.w?1:a.s?-.6:0,n=a.d?1:a.a?-1:0):s&&(t=u,n=d),o.steering.setManualInput({forward:t,turn:n});let r=n*45;f.updateWheel(r,e),f.updateMinimap(o,i)}function b(){return o?(g(),!0):!1}return{takeControl:v,exitManualControl:g,releaseBoat:_,update:y,handleEscape:b,enableGyro:m,disableGyro:h,isControlling:()=>!!o,getControlledBoat:()=>o}}var $S={activeCubeState:null,activeIsland:null,activeServiceSlug:null};function eC({cameraFly:e,boatControl:t,popup:n,aboutPopup:r,navbar:i,islands:a,allCubes:o,sidePopups:s}){let c=i;function l(e){c=e}function u(e){return typeof e==`string`?e.trim().toLowerCase():null}function d(e){let t=new URL(window.location);e?t.searchParams.set(`service`,e):t.searchParams.delete(`service`),window.history.replaceState({},``,t);let n=document.querySelector(`link[rel="canonical"]`);if(n){let r=new URL(t.origin+t.pathname);e&&r.searchParams.set(`service`,e),n.setAttribute(`href`,r.toString())}}function f(){s.contacts&&s.contacts.hide(),s.links&&s.links.hide(),s.skills&&s.skills.hide()}function p(e){return(e.about?.menu??[]).map(u).filter(Boolean).map(t=>{let n=e.cubes.find(e=>e.userData.slug===t);return n?{slug:t,title:n.userData.content?.title??t}:null}).filter(Boolean)}function m(i,{closePopup:a=!0}={}){i&&(t.releaseBoat(),e.isFollowing()&&e.stopFollow(),e.focus(i.center),a&&n.hide(),f(),$S.activeIsland=i,c?.setActive(i.category),i.about?r.show({title:i.about.title,text:i.about.text,menu:p(i)}):r.hide())}function h(i,a){if(!i||!a)return;let s=i.cubes.indexOf(a);if(s<0)return;t.releaseBoat(),r.isOpen()&&$S.activeIsland===i||(e.isFollowing()&&e.stopFollow(),$S.activeIsland=i,c?.setActive(i.category),f(),i.about?r.show({title:i.about.title,text:i.about.text,menu:p(i)}):r.hide()),$S.activeCubeState={island:i,index:s},n.show(a,{index:s,total:i.cubes.length}),d(a.userData.slug);let l=new U;if(a.getWorldPosition(l),l.y+=.8,e.focus(l,.8,{distance:6,height:3.5}),r.isOpen()&&$S.activeIsland===i){let e=u(a.userData.slug);if($S.activeServiceSlug=e,r.setActiveService(e),e)for(let t of o)t.userData.dimmed=t.userData.slug!==e;else for(let e of o)e.userData.dimmed=!1}}function g(e){let t=a.find(t=>t.cubes.indexOf(e)>=0);t&&h(t,e)}function _(e){for(let t of o)t.userData.highlighted=e?t.userData.slug===e:!1}function v(e){if(!$S.activeCubeState)return;let{island:t,index:n}=$S.activeCubeState,r=t.cubes.length,i=(n+e+r)%r,a=t.cubes[i];a.userData.triggerJump?.(),h(t,a)}function y(e){$S.activeServiceSlug=e;for(let t of o){let n=!e||t.userData.slug===e;t.userData.dimmed=e?!n:!1,n&&e&&t.userData.triggerJump?.()}if(!e||!$S.activeIsland){n.hide();return}let t=$S.activeIsland.cubes.find(t=>t.userData.slug===e);t&&h($S.activeIsland,t)}return{setNavbar:l,selectIsland:m,showCube:g,showCubeInIsland:h,highlightService:_,navigateCube:v,activateService:y,updateUrl:d,normalizeSlug:u}}function tC({allCubes:e,navigation:t,docModal:n,showCompanyInfo:r}){function i(e){let t=document.querySelector(`meta[name="robots"]`);t||(t=document.createElement(`meta`),t.name=`robots`,document.head.appendChild(t)),t.content=e?`noindex, nofollow`:`index, follow`}function a(){i(!0);let e=document.getElementById(`not-found-modal`);e&&(e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`))}function o(){let n=new URLSearchParams(window.location.search).get(`service`);if(n){let r=t.normalizeSlug(n),o=e.find(e=>t.normalizeSlug(e.userData.slug)===r);return o?(i(!1),t.showCube(o),!0):(a(),!0)}return!1}function s(){let e=new URLSearchParams(window.location.search).get(`doc`);return e?e===`privacy`||e===`consent`?(i(!1),n.open(e),!0):(a(),!0):!1}function c(){let e=document.getElementById(`not-found-home`);e&&e.addEventListener(`click`,()=>{window.location.href=window.location.pathname})}function l(){c();let e=s(),t=o();!e&&!t&&(i(!1),r())}return{check:l,handleDeepLink:o,handleDocDeepLink:s,showNotFound:a}}function nC({aboutPopup:e,skillsPopup:t,contactsPopup:n,linksPopup:r,companyAbout:i,skillsetData:a}){function o(){i&&(e.show({title:i.title,text:i.text,menu:[]}),a?.data&&t.show(a.data),i.contacts&&n.show(i.contacts,`contacts`),i.links&&r.show(i.links,`links`))}function s(){e.hide(),n.hide(),r.hide(),t.hide()}return{show:o,hide:s}}function rC(){let e=`device_perf_tier`,t=localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){console.warn(`Не удалось распарсить кэш производительности:`,e)}let n=navigator.connection,r=n&&(n.saveData||[`slow-2g`,`2g`,`3g`].includes(n.effectiveType)),i=navigator.deviceMemory,a=i&&i<4,o=navigator.userAgent.match(/Android\s([0-9\.]+)/),s=o&&parseFloat(o[1])<8,c=!1;try{let e=document.createElement(`canvas`),t=e.getContext(`webgl`)||e.getContext(`experimental-webgl`);if(t){let e=t.getExtension(`WEBGL_debug_renderer_info`);if(e){let n=t.getParameter(e.UNMASKED_RENDERER_WEBGL);/(intel|hd graphics|mali-4|mali-t|adreno [2-5]|powervr|swiftshader)/i.test(n)&&(c=!0)}}}catch(e){console.warn(`Не удалось проверить GPU:`,e)}let l=window.innerWidth<768,u=window.devicePixelRatio>2,d=`high`;r||a||s||c?d=`low`:(l||u)&&(d=`medium`);let f={tier:d,enablePostprocessing:d===`high`,enableShadows:d!==`low`,enableWaterWaves:d!==`low`,waterSegments:d===`high`?180:d===`medium`?120:60,enableBloom:d===`high`,pixelRatio:d===`high`?Math.min(window.devicePixelRatio,2):d===`medium`?1.25:1,shadowMapSize:d===`high`?2048:d===`medium`?1024:512};return localStorage.setItem(e,JSON.stringify(f)),f}function iC({container:e,islands:t,onSelect:n,onBrandClick:r}){let i=new Map;function a(e){let t=i.get(e);t&&t.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`})}function o(e){for(let[t,n]of i)n.classList.toggle(`active`,t===e);e&&a(e)}let s=document.querySelector(`.navbar-brand`),c=null,l=null;s&&r&&(s.setAttribute(`role`,`button`),s.setAttribute(`tabindex`,`0`),s.style.cursor=`pointer`,s.title=`Показать весь архипелаг`,c=()=>{r()},l=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),c())},s.addEventListener(`click`,c),s.addEventListener(`keydown`,l));let u=!1,d=0,f=0,p=!1,m=t=>{t.pointerType===`mouse`&&(u=!0,p=!1,d=t.pageX-e.offsetLeft,f=e.scrollLeft)},h=t=>{if(!u||t.pointerType!==`mouse`)return;let n=t.pageX-e.offsetLeft,r=(n-d)*1.5;Math.abs(n-d)>5&&(p=!0,e.classList.add(`is-dragging`),e.scrollLeft=f-r)},g=()=>{u&&(u=!1,e.classList.remove(`is-dragging`),requestAnimationFrame(()=>{p=!1}))},_=e=>{p&&=(e.preventDefault(),e.stopPropagation(),!1)};e.addEventListener(`pointerdown`,m),e.addEventListener(`pointermove`,h),e.addEventListener(`pointerup`,g),e.addEventListener(`pointerleave`,g),e.addEventListener(`pointercancel`,g),e.addEventListener(`click`,_,!0),t.forEach(t=>{let r=document.createElement(`li`),a=document.createElement(`button`);a.className=`navbar-btn`,a.dataset.category=t.category,a.textContent=t.about?.title??t.category,a.addEventListener(`click`,()=>{o(t.category),n(t.category)}),r.appendChild(a),e.appendChild(r),i.set(t.category,a)});function v(){e.innerHTML=``,i.clear(),s&&c&&(s.removeEventListener(`click`,c),s.removeEventListener(`keydown`,l)),e.removeEventListener(`pointerdown`,m),e.removeEventListener(`pointermove`,h),e.removeEventListener(`pointerup`,g),e.removeEventListener(`pointerleave`,g),e.removeEventListener(`pointercancel`,g),e.removeEventListener(`click`,_,!0),c=null,l=null}return{setActive:o,destroy:v}}function aC({container:e,onClick:t}){let n=document.createElement(`button`);n.className=`target-toggle`,n.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M23 12C23 12.5523 22.5523 13 22 13C21.9833 13 21.9667 12.9979 21.9502 12.9971C21.4823 17.7234 17.7243 21.4808 12.998 21.9492C12.9989 21.9661 13 21.983 13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.9829 11.0021 21.9661 11.0029 21.9492C6.27629 21.4812 2.51875 17.7237 2.05078 12.9971C2.03393 12.9979 2.01706 13 2 13C1.44772 13 0.999999 12.5523 1 12C1 11.4477 1.44772 11 2 11C2.01704 11 2.03395 11.0011 2.05078 11.002C2.51917 6.27574 6.27657 2.5177 11.0029 2.0498C11.0021 2.03328 11 2.01673 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2C13 2.01671 12.9989 2.03329 12.998 2.0498C17.724 2.51812 21.4819 6.27602 21.9502 11.002C21.9667 11.0011 21.9833 11 22 11C22.5523 11 23 11.4477 23 12ZM20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12Z"
      fill="currentColor" />
    </svg>
  `;function r(){t?.()}return n.addEventListener(`click`,r),e.appendChild(n),{element:n,destroy:()=>{n.removeEventListener(`click`,r),n.remove()}}}function oC({bannerEl:e,acceptBtn:t,privacyLink:n,onPrivacyClick:r,onAccept:i}){let a=`cookie_consent`;function o(){e&&(e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`))}function s(){e&&(e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`))}function c(){localStorage.setItem(a,`true`),s(),i&&i()}function l(){localStorage.getItem(a)||setTimeout(o,1500)}return t?.addEventListener(`click`,c),n&&r&&n.addEventListener(`click`,e=>{e.preventDefault(),r()}),{check:l,show:o,hide:s}}function sC({modalEl:e,inputEl:t,resultsEl:n,closeEl:r,backdropEl:i},{onSelect:a}={}){let o=!1,s=[];function c(e){s=[];for(let t of e){let e=t.about?.title||t.category;for(let n of t.cubes){let t=n.userData.content;t&&t.title&&s.push({cube:n,title:t.title,categoryTitle:e})}}}function l(){e&&(e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),t.value=``,d(``),o=!0,setTimeout(()=>t.focus(),50))}function u(){e&&(e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),o=!1)}function d(e){if(!n)return;n.innerHTML=``;let t=e.trim().toLowerCase();if(!t)return;let r=s.filter(e=>e.title.toLowerCase().includes(t)||e.categoryTitle.toLowerCase().includes(t));if(r.length===0){let e=document.createElement(`li`);e.className=`search-empty`,e.textContent=`Ничего не найдено`,n.appendChild(e)}else for(let e of r){let t=document.createElement(`li`),r=document.createElement(`button`);r.className=`search-result-btn`,r.innerHTML=`
        <span class="search-result-title">${e.title}</span>
        <span class="search-result-category">${e.categoryTitle}</span>
      `,r.addEventListener(`click`,()=>{u(),a?.(e.cube)}),t.appendChild(r),n.appendChild(t)}}function f(e){d(e.target.value)}function p(e){if(!o)return;let r=Array.from(n.querySelectorAll(`.search-result-btn`)),i=document.activeElement;if(e.key===`Escape`)u();else if(e.key===`ArrowDown`&&r.length>0){e.preventDefault();let t=r.indexOf(i);t<r.length-1?r[t+1].focus():t===-1&&r[0].focus()}else if(e.key===`ArrowUp`&&r.length>0){e.preventDefault();let n=r.indexOf(i);n>0?r[n-1].focus():n===0&&t.focus()}else e.key===`Enter`&&(i&&i.classList.contains(`search-result-btn`)?i.click():r.length>0&&(e.preventDefault(),r[0].click()))}t?.addEventListener(`input`,f),t?.addEventListener(`keydown`,p),r?.addEventListener(`click`,u),i?.addEventListener(`click`,u);function m(e){(e.ctrlKey||e.metaKey)&&e.code===`KeyK`&&(e.preventDefault(),e.stopPropagation(),o?u():l())}return document.addEventListener(`keydown`,m,{capture:!0}),{indexServices:c,open:l,close:u,isOpen:()=>o,destroy:()=>{document.removeEventListener(`keydown`,m,{capture:!0}),t?.removeEventListener(`input`,f),t?.removeEventListener(`keydown`,p),r?.removeEventListener(`click`,u),i?.removeEventListener(`click`,u)}}}function cC({popupEl:e,titleEl:t,textEl:n,closeEl:r,backdropEl:i,prevEl:a,nextEl:o,counterEl:s,priceEl:c,noteEl:l,scopeEl:u,scopeTitleEl:d,scopeListEl:f,casesEl:p,casesTitleEl:m,casesListEl:h,ctaEl:g},{onNavigate:_}={}){let v=[],y=null;function b(){return e&&!e.classList.contains(`hidden`)}function x(e){return!e||!e.from?``:`от ${String(e.from).replace(/\B(?=(\d{3})+(?!\d))/g,` `)} ${e.currency||``}`.trim()}function S(e){return e?e instanceof Date?e.toISOString().slice(0,10):String(e):``}function C(r,{index:i=0,total:_=1}={}){let v=r.userData?.content;if(!v||!e)return;if(y=r,t.textContent=v.title??`Без названия`,n.textContent=v.text??``,c){let e=x(v.price);e?(c.textContent=e,c.classList.remove(`popup-price--empty`)):(c.textContent=`Цена по запросу`,c.classList.add(`popup-price--empty`)),c.classList.remove(`hidden`)}if(l&&(v.note&&typeof v.note==`string`&&v.note.trim()!==``?(l.textContent=v.note.trim(),l.classList.remove(`hidden`)):l.classList.add(`hidden`)),u&&d&&f){if(f.innerHTML=``,v.scope&&v.scope.items&&v.scope.items.length>0){d.textContent=v.scope.title||`Что входит в услугу`;for(let e of v.scope.items){if(!e)continue;let t=document.createElement(`li`);t.textContent=e,f.appendChild(t)}u.classList.remove(`hidden`)}else u.classList.add(`hidden`)}if(p&&m&&h){if(h.innerHTML=``,v.cases&&v.cases.labels&&v.cases.labels.length>0){m.textContent=v.cases.title||`Примеры работ`;let e=[...v.cases.labels].sort((e,t)=>{let n=S(e.created),r=S(t.created);return!n&&!r?0:n?r?r.localeCompare(n):-1:1});for(let t of e){if(!t.url||!t.label)continue;let e=document.createElement(`li`),n=document.createElement(`a`);n.href=t.url,n.textContent=t.label,n.target=`_blank`,n.rel=`noopener noreferrer`,n.className=`side-popup-item`,e.appendChild(n),h.appendChild(e)}p.classList.remove(`hidden`)}else p.classList.add(`hidden`)}if(g){let e=document.getElementById(`popup-cta-text`);v.cta&&v.cta.url&&v.cta.text&&e?(g.href=v.cta.url,e.textContent=v.cta.text,g.classList.remove(`hidden`)):g.classList.add(`hidden`)}s&&(s.textContent=_>1?`${i+1} / ${_}`:``);let b=_>1;a&&(a.style.display=b?``:`none`),o&&(o.style.display=b?``:`none`),e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`)}function w(){if(!e)return;e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`);let t=y;y&&=(y.userData.clickCount=0,y.userData.bounce=0,null),v.forEach(e=>e(t))}function T(e){v.push(e)}function E(e){e.stopPropagation(),w()}function D(){w()}function O(e){e.stopPropagation(),_?.(-1)}function k(e){e.stopPropagation(),_?.(1)}r?.addEventListener(`click`,E),i?.addEventListener(`click`,D),a?.addEventListener(`click`,O),o?.addEventListener(`click`,k);function A(e){b()&&(e.key===`Escape`&&w(),e.key===`ArrowLeft`&&_?.(-1),e.key===`ArrowRight`&&_?.(1))}return window.addEventListener(`keydown`,A),{show:C,hide:w,isOpen:b,onClose:T,getActiveCube:()=>y,destroy:()=>{window.removeEventListener(`keydown`,A),r?.removeEventListener(`click`,E),i?.removeEventListener(`click`,D),a?.removeEventListener(`click`,O),o?.removeEventListener(`click`,k),v.length=0}}}function lC(e){return typeof e==`string`?e.trim().toLowerCase():null}function uC({popupEl:e,titleEl:t,textEl:n,menuEl:r,closeEl:i,contactsEl:a,linksEl:o},{onServiceClick:s,onServiceHover:c}={}){let l=!1,u=null,d=[];function f(){return l}function p(){if(u&&r){let e=r.querySelector(`[data-slug="${u}"]`);e&&e.classList.remove(`active`)}u=null}function m(e){let t=lC(e);u!==t&&(u&&r&&r.querySelector(`[data-slug="${u}"]`)?.classList.remove(`active`),u=t,u&&r&&r.querySelector(`[data-slug="${u}"]`)?.classList.add(`active`))}function h(e){if(r){r.innerHTML=``,u=null;for(let t of e){let e=lC(t.slug);if(!e)continue;let n=document.createElement(`li`),i=document.createElement(`button`);i.type=`button`,i.className=`about-menu-btn`,i.dataset.slug=e,i.textContent=t.title??e,i.addEventListener(`click`,()=>{u===e?(u=null,i.classList.remove(`active`),s?.(null)):(u&&r.querySelector(`[data-slug="${u}"]`)?.classList.remove(`active`),u=e,i.classList.add(`active`),s?.(e))}),i.addEventListener(`mouseenter`,()=>c?.(e)),i.addEventListener(`mouseleave`,()=>c?.(null)),n.appendChild(i),r.appendChild(n)}}}function g(e){if(a){if(a.innerHTML=``,!e||Object.keys(e).length===0)a.classList.add(`hidden`);else{if(a.classList.remove(`hidden`),e.email){let t=document.createElement(`a`);t.href=`mailto:${e.email}`,t.textContent=e.email,t.className=`about-contact-item`,a.appendChild(t)}if(e.phone){let t=document.createElement(`a`);t.href=`tel:${e.phone.replace(/[^\d+]/g,``)}`,t.textContent=e.phone,t.className=`about-contact-item`,a.appendChild(t)}if(e.telegram){let t=document.createElement(`a`);t.href=`https://t.me/${e.telegram.replace(`@`,``)}`,t.textContent=e.telegram,t.target=`_blank`,t.rel=`noopener noreferrer`,t.className=`about-contact-item`,a.appendChild(t)}}}}function _(e){if(o){if(o.innerHTML=``,!e||e.length===0)o.classList.add(`hidden`);else{o.classList.remove(`hidden`);for(let t of e){if(!t.url||!t.label)continue;let e=document.createElement(`li`),n=document.createElement(`a`);n.href=t.url,n.textContent=t.label,n.target=`_blank`,n.rel=`noopener noreferrer`,n.className=`about-link-item`,e.appendChild(n),o.appendChild(e)}}}}function v(r){e&&r&&(t.textContent=r.title??`Остров`,n.textContent=r.text??``,g(r.contacts),_(r.links),h(r.menu??[]),e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),l=!0)}function y(){e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),l=!1,u=null,s?.(null),c?.(null),d.forEach(e=>e()))}function b(e){d.push(e)}function x(e){e.stopPropagation(),y()}i?.addEventListener(`click`,x);function S(){i?.removeEventListener(`click`,x),d.length=0,l=!1,u=null}return{show:v,hide:y,isOpen:f,onClose:b,destroy:S,resetActiveService:p,setActiveService:m}}function dC({popupEl:e,titleEl:t,listEl:n,closeEl:r,textEl:i}){let a=!1;function o(){return a}function s(e){return e?e.startsWith(`@`)?`https://t.me/${e.replace(`@`,``)}`:/^https?:\/\//i.test(e)?e:`https://${e}`:``}function c(e,t){navigator.clipboard.writeText(e).then(()=>{let e=t.innerHTML;t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,t.classList.add(`copied`),setTimeout(()=>{t.innerHTML=e,t.classList.remove(`copied`)},2e3)}).catch(e=>{console.error(`Не удалось скопировать: `,e)})}function l(e){if(n){n.innerHTML=``;for(let t of e){if(!t.link)continue;let e=document.createElement(`li`);e.className=`contact-item-wrapper`;let r=document.createElement(`a`);if(r.className=`side-popup-item`,r.textContent=t.name||t.link,t.type===`mailto`?r.href=`mailto:${t.link}`:t.type===`tel`?r.href=`tel:${t.link.replace(/[^\d+]/g,``)}`:(r.href=s(t.link),t.target&&(r.target=t.target,r.rel=`noopener noreferrer`)),e.appendChild(r),t.type===`mailto`||t.type===`tel`){let n=document.createElement(`button`);n.className=`copy-btn`,n.type=`button`,n.title=`Скопировать`,n.setAttribute(`aria-label`,`Скопировать`),n.innerHTML=`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `,n.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),c(t.link,n)}),e.appendChild(n)}n.appendChild(e)}}}function u(e){if(n){n.innerHTML=``;for(let t of e){if(!t.url||!t.label)continue;let e=document.createElement(`li`),r=document.createElement(`a`);r.href=s(t.url),r.textContent=t.label,r.target=`_blank`,r.rel=`noopener noreferrer`,r.className=`side-popup-item`,e.appendChild(r),n.appendChild(e)}}}function d(n,r=`contacts`){e&&(t&&n.title&&(t.textContent=n.title),r===`contacts`?l(n.labels||[]):r===`links`&&(i&&n.message?(i.textContent=n.message,i.classList.remove(`hidden`)):i&&i.classList.add(`hidden`),u(n.labels||[])),e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),a=!0)}function f(){e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),a=!1)}function p(e){e.stopPropagation(),f()}r?.addEventListener(`click`,p);function m(){r?.removeEventListener(`click`,p),a=!1}return{show:d,hide:f,isOpen:o,destroy:m}}function fC({modalEl:e,titleEl:t,contentEl:n,closeEl:r,backdropEl:i},a){let o=!1;function s(r){let i=a?.[r];if(!i||!e)return;t.textContent=i.title,n.innerHTML=i.content,e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),o=!0;let s=new URL(window.location);s.searchParams.set(`doc`,r),window.history.replaceState({},``,s)}function c(){if(!e)return;e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),o=!1;let t=new URL(window.location);t.searchParams.delete(`doc`),window.history.replaceState({},``,t)}function l(){c()}return r?.addEventListener(`click`,l),i?.addEventListener(`click`,l),{open:s,close:c,isOpen:()=>o}}var pC={title:`Политика конфиденциальности`,content:`<p>Редакция от 15.11.2026</p>
<p>Настоящая Политика конфиденциальности описывает, какие данные собираются на сайте https://madeas.github.io/ (далее — Сайт) и как они используются. Используя Сайт, вы соглашаетесь с настоящей Политикой.</p>

<h2>1. Какие данные собираются</h2>
<p>Сайт не содержит форм обратной связи и не собирает персональные данные (имя, телефон, email) напрямую.</p>
<p>Для анализа посещаемости используются обезличенные данные: файлы cookie, IP-адрес, тип устройства и браузера, просмотренные страницы. Эти данные используются исключительно для улучшения работы Сайта и не позволяют идентифицировать конкретного пользователя.</p>

<h2>2. Как используются данные</h2>
<p>Обезличенные данные используются только для статистики. Мы не передаем их третьим лицам, кроме сервисов аналитики (Яндекс.Метрика, Google Tag Manager), которые обрабатывают их согласно своим политикам конфиденциальности.</p>

<h2>3. Cookie</h2>
<p>Файлы cookie используются для корректной работы аналитики. Вы можете отключить cookie в настройках браузера, но это может повлиять на работу отдельных функций Сайта.</p>

<h2>4. Ваши права</h2>
<p>Вы можете в любой момент:</p>
<ul>
  <li>отключить cookie в настройках вашего браузера (это остановит передачу данных в аналитику);</li>
  <li>очистить cookie и данные сайта в настройках браузера (это удалит сохраненное согласие);</li>
</ul>
<p>Обратите внимание: данные, уже собранные сервисами Яндекс.Метрика и Google Tag Manager, хранятся на их серверах. Для их удаления необходимо обратиться в поддержку этих сервисов напрямую.</p>

<h2>5. Изменения</h2>
<p>Мы можем обновлять настоящую Политику. Актуальная версия всегда доступна на этой странице.</p>
`};pC.title,pC.content;var mC={title:`Согласие на обработку данных`,content:`<p>Продолжая использовать сайт https://madeas.github.io/, вы даете согласие на обработку обезличенных данных (файлы cookie, IP-адрес, данные о посещениях) в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>

<h2>1. Какие данные собираются</h2>
<p>Сайт не содержит форм ввода персональных данных. Автоматически собираются только обезличенные данные (cookie, данные о браузере и устройстве), необходимые для аналитики.</p>

<h2>2. Цели обработки</h2>
<p>Анализ поведения посетителей для улучшения работы Сайта. Данные не используются для идентификации конкретных лиц.</p>

<h2>3. Срок действия</h2>
<p>Согласие действует до момента его отзыва. Вы можете отозвать согласие, отключив cookie в настройках браузера.</p>
`};mC.title,mC.content;var hC={data:[{alt:`Project Management`,set:[{value:`Redmine`,low:!1},{value:`GitHub Projects`,low:!1},{value:`Scrum (Agile)`,low:!1},{value:`Kanban (Agile)`,low:!1}],color:`brown`,icon:`$mdiAccountGroup`},{alt:`Design`,set:[{value:`Figma`,low:!1},{value:`Pixso`,low:!1},{value:`Krita`,low:!1},{value:`CorelDRAW`,low:!0},{value:`Ps`,low:!1},{value:`Ai`,low:!0},{value:`Google Web Designer`,low:!0}],color:`pink`,icon:`$mdiPalette`},{alt:`Version Control`,set:[{value:`Git`,low:!1},{value:`GitHub`,low:!1},{value:`CI/CD (GitHub Actions)`,low:!0},{value:`GitLab`,low:!1},{value:`Bitbucket`,low:!0}],color:`red`,icon:`$mdiGit`},{alt:`HTML`,set:[{value:`Pug`,low:!1},{value:`HTML5`,low:!1},{value:`HAML`,low:!0}],color:`orange`,icon:`$mdiLanguageHtml5`},{alt:`CSS`,set:[{value:`CSS3+`,low:!1},{value:`Flex/Grid`,low:!1},{value:`Sass/SCSS`,low:!1},{value:`Stylus`,low:!0},{value:`PostCSS`,low:!0}],color:`blue`,icon:`$mdiLanguageCss3`},{alt:`JavaScript`,set:[{value:`Vue 3`,low:!0},{value:`Vue 2`,low:!1},{value:`TypeScript`,low:!0},{value:`Babel`,low:!0},{value:`jQuery`,low:!0}],color:`amber`,icon:`$mdiCodeJson`},{alt:`IDE`,set:[{value:`VS Code`,low:!1},{value:`Cursor`,low:!1},{value:`PhpStorm`,low:!0},{value:`Sublime Text`,low:!1},{value:`Notepad++`,low:!0}],color:`cyan`,icon:`$mdiMicrosoftVisualStudioCode`},{alt:`UI Frameworks`,set:[{value:`Vuetify`,low:!1},{value:`Tailwind CSS`,low:!1},{value:`Material Design`,low:!1},{value:`Element`,low:!0},{value:`Ant Design`,low:!0},{value:`Bootstrap 4/5`,low:!1}],color:`purple`,icon:`$mdiVuetify`},{alt:`Build & Tools`,set:[{value:`Nuxt 3`,low:!0},{value:`Vite`,low:!1},{value:`Nuxt 2`,low:!1},{value:`VuePress`,low:!1},{value:`Vue CLI`,low:!0},{value:`Gulp`,low:!0}],color:`teal`,icon:`$mdiNuxt`},{alt:`CMS`,set:[{value:`WordPress`,low:!1},{value:`Tilda`,low:!0},{value:`Joomla!`,low:!0},{value:`1C Bitrix`,low:!0},{value:`WIX`,low:!0},{value:`uKit`,low:!0},{value:`uCoz`,low:!0}],color:`indigo`,icon:`$mdiWordpress`},{alt:`Backend & Logs`,set:[{value:`Laravel`,low:!0},{value:`PHP`,low:!1},{value:`Kibana`,low:!0},{value:`Postman`,low:!1},{value:`REST API`,low:!1}],color:`deep-purple`,icon:`$mdiLanguagePhp`},{alt:`Databases`,set:[{value:`PostgreSQL`,low:!1},{value:`MySQL`,low:!0},{value:`DBeaver`,low:!1}],color:`blue-grey`,icon:`$mdiDatabaseCheckOutline`},{alt:`Web analytics`,set:[{value:`Я.Метрика`,low:!1},{value:`Я.Вебмастер`,low:!1},{value:`GTM`,low:!1},{value:`Google Analytics`,low:!1}],color:`light-green`,icon:`$mdiGoogleAnalytics`},{alt:`3D Modelling`,set:[{value:`Blender`,low:!1},{value:`AI 3D`,low:!1},{value:`Substance 3D`,low:!1},{value:`AccuRIG`,low:!1},{value:`Blockbench`,low:!1}],color:`deep-orange`,icon:`$mdiCube`},{alt:`Game Dev`,set:[{value:`Unity 6`,low:!1},{value:`C#`,low:!1},{value:`JSON Geometry`,low:!1},{value:`Minecraft Resource Pack`,low:!1}],color:`green`,icon:`$mdiController`},{alt:`AI Assistants`,set:[{value:`DeepSeek`,low:!1},{value:`Minimax`,low:!1},{value:`Perplexity`,low:!1}],color:`light-blue`,icon:`$mdiBrain`},{alt:`Local LLM`,set:[{value:`Ollama`,low:!1},{value:`Open WebUI`,low:!1}],color:`grey`,icon:`$mdiServerNetwork`}]},gC=hC,hC=hC.data;function _C({popupEl:e,listEl:t,closeEl:n}){let r=!1;function i(){return r}function a(e){if(t){t.innerHTML=``;for(let n of e){let e=document.createElement(`div`);e.className=`skills-group`;let r=document.createElement(`h3`);r.textContent=n.alt,e.appendChild(r);let i=document.createElement(`div`);i.className=`skills-tags`;for(let e of n.set){let t=document.createElement(`span`);t.className=`skill-tag`,e.low&&t.classList.add(`skill-tag--low`),t.textContent=e.value,i.appendChild(t)}e.appendChild(i),t.appendChild(e)}}}function o(t){e&&(a(t),e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),r=!0)}function s(){e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),r=!1)}function c(e){e.stopPropagation(),s()}n?.addEventListener(`click`,c);function l(){n?.removeEventListener(`click`,c),r=!1}return{show:o,hide:s,isOpen:i,destroy:l}}var vC=rC(),{scene:yC,camera:bC,renderer:xC,addResizeListener:SC}=$x({pixelRatio:vC.pixelRatio,enableShadows:vC.enableShadows,shadowMapSize:vC.shadowMapSize}),{ambient:CC,sun:wC,rim:TC}=cS(yC,{bounds:200,mapSize:vC.shadowMapSize}),EC=mS(yC,{radius:500}),{water:DC,updateWater:OC,setHorizonGlow:kC}=nS(yC,{segments:vC.waterSegments,enableWaves:vC.enableWaterWaves}),AC=AS(yC,{count:1200,radius:400,seed:17}),jC=qS(yC,wC,{distance:350,sunSize:14,moonSize:10}),MC=new URLSearchParams(location.search).get(`seed`),{islands:NC,allCubes:PC,allDaylightSetters:FC,update:IC}=sS(yC,{byCategory:bb,camera:bC,layoutOpts:{bounds:80,gap:14,seed:MC?parseInt(MC,10):Math.floor(Math.random()*100)+1,candidatesFactor:400}}),{update:LC}=WS(yC,{islands:NC.map(e=>({x:e.x,z:e.z})),count:10,seed:17}),RC=vC.enableBloom?kS(xC,yC,bC,{strength:.6,radius:.4,threshold:.85}):null;RC&&(SC((e,t)=>RC.resize(e,t)),RC.render(0,0));var zC=new Ad(bC,xC.domElement);zC.target.set(0,xb,0),zC.enableDamping=!0,zC.dampingFactor=.07,zC.enablePan=!1,zC.minDistance=8,zC.maxDistance=160,zC.minPolarAngle=Math.PI*.15,zC.maxPolarAngle=Math.PI*.46,zC.autoRotate=!1,zC.autoRotateSpeed=.35;var BC=MS(bC,zC,{duration:1.3,distance:26,height:20}),{boats:VC,shipMeshes:HC,whaleMeshes:UC,update:WC}=HS(yC,{islands:NC.map(e=>({x:e.x,z:e.z,radius:e.radius})),boatCount:2,shipCount:1,whaleCount:1,waterLevel:.9,speed:.012,clearance:8,shipClearance:2.5}),GC=QS({cameraFly:BC,camera:bC,renderer:xC,getBoats:()=>VC,islands:NC}),KC=cC({popupEl:document.getElementById(`popup`),titleEl:document.getElementById(`popup-title`),textEl:document.getElementById(`popup-text`),closeEl:document.querySelector(`#popup .popup-close`),backdropEl:document.querySelector(`.popup-backdrop`),prevEl:document.querySelector(`.popup-nav-prev`),nextEl:document.querySelector(`.popup-nav-next`),counterEl:document.getElementById(`popup-counter`),priceEl:document.getElementById(`popup-price`),noteEl:document.getElementById(`popup-note`),scopeEl:document.getElementById(`popup-scope`),scopeTitleEl:document.getElementById(`popup-scope-title`),scopeListEl:document.getElementById(`popup-scope-list`),casesEl:document.getElementById(`popup-cases`),casesTitleEl:document.getElementById(`popup-cases-title`),casesListEl:document.getElementById(`popup-cases-list`),ctaEl:document.getElementById(`popup-cta`)},{onNavigate:e=>QC.navigateCube(e)}),qC=uC({popupEl:document.getElementById(`about-popup`),titleEl:document.getElementById(`about-title`),textEl:document.getElementById(`about-text`),menuEl:document.getElementById(`about-menu`),closeEl:document.querySelector(`#about-popup .popup-close`)},{onServiceClick:e=>QC.activateService(e),onServiceHover:e=>QC.highlightService(e)}),JC=dC({popupEl:document.getElementById(`contacts-popup`),titleEl:document.getElementById(`contacts-title`),listEl:document.getElementById(`contacts-list`),closeEl:document.querySelector(`#contacts-popup .popup-close`)}),YC=dC({popupEl:document.getElementById(`links-popup`),titleEl:document.getElementById(`links-title`),listEl:document.getElementById(`links-list`),textEl:document.getElementById(`links-text`),closeEl:document.querySelector(`#links-popup .popup-close`)}),XC=_C({popupEl:document.getElementById(`skills-popup`),listEl:document.getElementById(`skills-list`),closeEl:document.querySelector(`#skills-popup .popup-close`)}),ZC=nC({aboutPopup:qC,skillsPopup:XC,contactsPopup:JC,linksPopup:YC,companyAbout:bb._company?.about??null,skillsetData:gC}),QC=eC({cameraFly:BC,boatControl:GC,popup:KC,aboutPopup:qC,navbar:null,islands:NC,allCubes:PC,sidePopups:{contacts:JC,links:YC,skills:XC}}),$C=iC({container:document.getElementById(`navbar-menu`),islands:NC,onSelect:e=>{let t=NC.find(t=>t.category===e);t&&QC.selectIsland(t,{closePopup:!0})},onBrandClick:()=>{GC.releaseBoat(),$S.activeIsland=null,$C.setActive(null),KC.hide(),ZC.hide(),ZC.show();let e=VC.find(e=>e.type===`whale`);if(e&&e.steering)BC.isFollowing()&&BC.stopFollow(),BC.follow(e.steering,{back:18,up:8});else{let e=new U(0,xb,0);BC.isFollowing()&&BC.stopFollow(),BC.focus(e,1.2)}}});QC.setNavbar($C);var ew=QC.normalizeSlug(new URLSearchParams(window.location.search).get(`service`)),tw=ew&&PC.some(e=>QC.normalizeSlug(e.userData.slug)===ew);(tw||!ew)&&QC.updateUrl(tw?ew:null),KC.onClose(()=>{if($S.activeCubeState=null,QC.updateUrl(null),qC&&$S.activeServiceSlug){$S.activeServiceSlug=null,qC.resetActiveService?.();for(let e of PC)e.userData.dimmed=!1,e.userData.highlighted=!1}}),qC.onClose(()=>{$S.activeServiceSlug=null,$S.activeIsland=null,QC.activateService(null),QC.highlightService(null)});var nw=fC({modalEl:document.getElementById(`doc-modal`),titleEl:document.getElementById(`doc-title`),contentEl:document.getElementById(`doc-content`),closeEl:document.getElementById(`doc-close`),backdropEl:document.getElementById(`doc-backdrop`)},{privacy:pC,consent:mC}),rw=document.getElementById(`link-privacy`);rw&&rw.addEventListener(`click`,e=>{e.preventDefault(),nw.open(`privacy`)});var iw=document.getElementById(`link-consent`);iw&&iw.addEventListener(`click`,e=>{e.preventDefault(),nw.open(`consent`)});var aw=YS({el:document.getElementById(`cube-tooltip`),camera:bC,renderer:xC}),ow=aC({container:document.body,onClick:()=>{GC.releaseBoat(),$S.activeIsland=null,$C.setActive(null),KC.hide(),ZC.hide(),ZC.show();let e=new U(0,xb,0);BC.isFollowing()&&BC.stopFollow(),BC.focus(e,1.2)}});ow.element&&(ow.element.addEventListener(`mouseenter`,()=>{aw.showAtElement(ow.element,`В центр`)}),ow.element.addEventListener(`mouseleave`,()=>{aw.hide()}));var sw=pS({scene:yC,sky:EC,water:DC,setHorizonGlow:kC,ambient:CC,sun:wC,rim:TC,stars:AC,celestial:jC,allDaylightSetters:FC},{smoothMs:15e3});function cw(e){return VC.find(t=>t.type===`ship`&&t.mesh===e)}JS({camera:bC,renderer:xC,cubes:PC,ships:HC},{onHoverChange:e=>{if(BC.isActive()||(xC.domElement.style.cursor=e?`pointer`:`default`),e){let t=e.userData.content?.title;t&&aw.show(e,t)}else aw.hide()},onCubeClick:e=>{e.userData.isPerson?e.userData.triggerJump?.():(e.userData.bounce=1,e.rotation.x+=Math.PI/2,e.rotation.y+=Math.PI/2),KC.isOpen()&&$S.activeCubeState&&$S.activeCubeState.island.cubes[$S.activeCubeState.index]===e?KC.hide():QC.showCube(e)},onShipClick:e=>{let t=cw(e);t&&(GC.getControlledBoat()===t?GC.exitManualControl():(GC.releaseBoat(),KC.hide(),qC.hide(),ZC.hide(),$C.setActive(null),xC.domElement.style.cursor=`default`,GC.takeControl(t)))},isPopupOpen:()=>KC.isOpen(),onSceneClickWhenPopupOpen:()=>KC.hide()});var lw=sC({modalEl:document.getElementById(`search-modal`),inputEl:document.getElementById(`search-input`),resultsEl:document.getElementById(`search-results`),closeEl:document.getElementById(`search-close`),backdropEl:document.querySelector(`.search-backdrop`)},{onSelect:e=>{KC.hide(),ZC.hide(),QC.showCube(e)}});XS(),lw.indexServices(NC);var uw=document.getElementById(`navbar-search-trigger`);uw&&uw.addEventListener(`click`,()=>{lw.open()});function dw(e,t){for(let n of PC){if(n.userData.isPerson)continue;let r=1;n.userData.hovered?r=1.25:n.userData.highlighted?r=1.15:n.userData.dimmed&&(r=.85);let i=V.damp(n.scale.x,r,8,t);n.scale.setScalar(i);let a=n.material,o=n.userData.dimmed?.35:1,s=o<1;if(a&&(a.transparent!==s&&(a.transparent=s,a.needsUpdate=!0),a.opacity=V.damp(a.opacity??1,o,8,t)),n.userData.bounce>0){n.userData.bounce-=t*3.5,n.userData.bounce<0&&(n.userData.bounce=0);let e=Math.sin(n.userData.bounce*Math.PI)*1.2;n.position.y=n.userData.baseY+e}else n.position.y=n.userData.baseY+Math.sin(e*1.5+n.position.x)*.05;n.userData.hovered||(n.rotation.y+=t*.3)}}window.addEventListener(`keydown`,e=>{if(e.key===`Escape`){if(GC.handleEscape())return;BC.isFollowing()&&(BC.stopFollow(),BC.focus(new U(0,xb,0),1.2))}});var fw=document.getElementById(`footer-year`);fw&&(fw.textContent=new Date().getFullYear());var pw=new ic,mw=0,hw=!1,gw=0,_w=5;function vw(){requestAnimationFrame(vw);let e=Math.min(pw.getDelta(),.05),t=pw.getElapsedTime();if(GC.update(e),mw++,mw%2==0&&OC(t),dw(t,e),IC(t,e),WC(t,e),BC.update(e),sw.update(e),LC(t,e),AC.update(t),aw.update(),zC.autoRotate=!1,BC.isFollowing()||zC.update(),RC?RC.render(t,e):xC.render(yC,bC),!hw){gw++;let e=Math.min(100,Math.round(gw/_w*100)),t=document.querySelector(`.loader-text-inner`);t&&(t.textContent=`Загрузка... ${e}%`),gw>=_w&&(hw=!0,Sw())}}var yw=tC({allCubes:PC,navigation:QC,docModal:nw,showCompanyInfo:ZC.show}),bw=Qx({gtmId:`GTM-574JN769`,metrikaId:`48938060`}),xw=oC({bannerEl:document.getElementById(`cookie-banner`),acceptBtn:document.getElementById(`cookie-accept`),privacyLink:document.getElementById(`cookie-privacy-link`),onPrivacyClick:()=>{nw.open(`privacy`)},onAccept:()=>{bw.start()}});function Sw(){let e=document.getElementById(`loader`),t=()=>{yw.check(),xw.check(),bw.start(),setTimeout(()=>{!$S.activeCubeState&&!nw.isOpen()&&ZC.show()},400)};if(!e){document.querySelector(`.navbar`)?.classList.add(`loaded`),t();return}let n=!1,r=()=>{n||(n=!0,e.remove(),document.querySelector(`.navbar`)?.classList.add(`loaded`),t())};window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?r():(e.addEventListener(`transitionend`,t=>{t.target===e&&r()},{once:!0}),setTimeout(r,700),requestAnimationFrame(()=>{e.classList.add(`hidden`)}))}vw();