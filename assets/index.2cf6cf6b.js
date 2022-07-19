const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))v(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&v(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function v(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};w();const h=document.querySelector("#app");h.innerHTML=`
<div class="layout">
  <div class="section-stick" style="opacity: 0%;">
    <div class="stick active"></div>
  </div>
  <section class="s1">
    <div id="landingPage"></div>
  </section>
</div>
`;const f=document.querySelector("body"),a=document.querySelectorAll("section").length,u=document.querySelector(".section-stick"),y=600;let d=!0,m=window.scrollY,i=1,l=null,o=null;Array(a).forEach(()=>{u.innerHTML=u.innerHTML+'<div class="stick"></div>'});window.onscroll=()=>{if(d){const r=window.scrollY>=m;if((i>=1&&i<=a)==!0){f.style.overflowY="hidden",r&&i<a?(l=document.querySelector(`section.s${i}`),o=document.querySelector(`section.s${i+1}`),l.style.transform="translateY(-100vh)",o.style.transform="translateY(0)",i++):!r&&i>1&&(l=document.querySelector(`section.s${i-1}`),o=document.querySelector(`section.s${i}`),l.style.transform="translateY(0)",o.style.transform="translateY(100vh)",i--);const n=document.querySelector(".section-stick .stick.active");n.style.top=(62+30)*(i-1)+"px"}setTimeout(()=>{m=window.scrollY,d=!0,f.style.overflowY="scroll"},y),d=!1}window.scroll(0,window.screen.height)};const g=document.querySelector("#landingPage");g.innerHTML=`
<div class="flex flex-wrap overflow-hidden">
    <div class="w-full ">
        <div id="navbar"></div>
    </div>
    <div class="my-2 px-2 w-full">
        <div class=" h-15">
            <div class="pkzFont">PKZ</div>
            <h4 class="wordCarousel">
                <ul class="flip">
                <li>Swift</li>
                <li>C#</li>
                <li>Typescript</li>
                <li>Angular</li>
                </ul>
            </h4>
        </div>
    </div>
    <div class="my-2 px-2 w-full overflow-hidden">
        <div class="flex flex-wrap overflow-hidden w-full">
            <div class="w-1/4 overflow-hidden"></div>
            <div class="w-1/4 overflow-hidden">
                <div class="justify-center content-center grid">
                    <img src="./images/iphone1.png" style=" width: auto; max-height: 70vh;" class="imageShadow"/> 
                </div>
            </div>
            <div class="w-1/4 overflow-hidden">
                <div class="justify-center content-center grid">
                    <img src="./images/iphone2.png" style=" width: auto; max-height: 70vh;" class="imageShadow"/> 

                </div>
            </div>

            <div class="w-1/4 overflow-hidden"></div>
        </div>
    </div>
    <div class="w-full overflow-hidden">
        <div class="justify-center content-center grid">
            <svg class="animate-bounce pb-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                <path d="M5 6l5 5l5-5l2 1l-7 7l-7-7z" fill="#fff"/>
                <rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
            </svg>
        </div>
    </div>
</div>
`;const p=document.querySelector("#navbar");p.innerHTML=`
<nav class="bg-ms-lightgrey boxShadow">
    <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8" style="width: 100vw;">
        <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center nv-pkzFont">
                   PKZ
                </div>
            </div>
        </div>
    </div>
</nav>
`;
