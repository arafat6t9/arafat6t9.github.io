/* NAV SMOOTH SCROLL */

document.querySelectorAll(".nav-link").forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute("href"));
target.scrollIntoView({behavior:"smooth"});
});
});

/* ACTIVE NAV */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
const sectionTop=section.offsetTop;
if(pageYOffset>=sectionTop-120){
current=section.getAttribute("id");
}
});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});

/* REVEAL */

function revealSections(){
document.querySelectorAll(".reveal").forEach(section=>{
if(section.getBoundingClientRect().top < window.innerHeight-120){
section.classList.add("active");
}
});
}

window.addEventListener("scroll",revealSections);
revealSections();

/* CARD ANIMATION */

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
cards.forEach(card=>{
if(card.getBoundingClientRect().top < window.innerHeight-100){
card.classList.add("show");
}
});
});

/* TYPING */

const roles=["Senior Electrical Engineer","Photographer","Web Developer"];
let roleIndex=0,charIndex=0;
const typing=document.querySelector(".typing");

function type(){
if(charIndex<roles[roleIndex].length){
typing.textContent+=roles[roleIndex].charAt(charIndex++);
setTimeout(type,80);
}else setTimeout(erase,1500);
}

function erase(){
if(charIndex>0){
typing.textContent=roles[roleIndex].substring(0,--charIndex);
setTimeout(erase,40);
}else{
roleIndex=(roleIndex+1)%roles.length;
setTimeout(type,200);
}
}

type();

/* PARTICLES */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*2;
this.vx=Math.random()*0.5-0.25;
this.vy=Math.random()*0.5-0.25;
}

update(){
this.x+=this.vx;
this.y+=this.vy;
}

draw(){
ctx.fillStyle="#38bdf8";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();
}
}

for(let i=0;i<100;i++) particles.push(new Particle());

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{p.update();p.draw();});
requestAnimationFrame(animate);
}

animate();

/* FLICKR */

function jsonFlickrFeed(data){
const gallery=document.getElementById("flickr-gallery");

data.items.slice(0,12).forEach(photo=>{
const img=document.createElement("img");
const large=photo.media.m.replace("_m.","_b.");
img.src=photo.media.m;
img.onclick=()=>openLightbox(large);
gallery.appendChild(img);
});
}

/* LIGHTBOX */

function openLightbox(src){
document.getElementById("lightbox-img").src=src;
document.getElementById("lightbox").style.display="flex";
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

/* HAMBURGER MENU */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");
hamburger.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");
hamburger.classList.remove("active");

});

});

/*Animated Navbar Background*/

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 60){
nav.classList.add("nav-scrolled");
}else{
nav.classList.remove("nav-scrolled");
}

});