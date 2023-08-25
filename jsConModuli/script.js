import { Action, Character } from "./modules/Character.js";

const imgSfondo = document.getElementById("imgSfondo");
const player1Image = document.getElementById("player1Image");
const player2Image = document.getElementById("player2Image");
let stileImgSfondo = window.getComputedStyle(imgSfondo);
let larghezzaSfondo = stileImgSfondo.getPropertyValue("width").split("px")[0];
let lastLarghezzaSfondo = larghezzaSfondo;
let altezzaSfondo = stileImgSfondo.getPropertyValue("height").split("px")[0];


const imgGoku = [ "../img/goku/stasiSinistra/1.png","../img/goku/stasiSinistra/2.png","../img/goku/stasiSinistra/3.png","../img/goku/stasiSinistra/4.png","../img/goku/stasiSinistra/5.png","../img/goku/stasiSinistra/6.png","../img/goku/stasiSinistra/7.png",
        "../img/goku/stasiSinistra/8.png","../img/goku/stasiSinistra/9.png","../img/goku/camminata/a1.png","../img/goku/camminata/a2.png","../img/goku/camminata/a3.png","../img/goku/camminata/a4.png","../img/goku/camminata/a5.png",
        "../img/goku/camminata/a6.png","../img/goku/camminata/a7.png","../img/goku/camminata/a8.png","../img/goku/camminata/a9.png","../img/goku/camminata/a10.png","../img/goku/camminata/a11.png","../img/goku/camminata/a12.png",
        "../img/goku/camminata/a13.png","../img/goku/camminata/a14.png","../img/goku/camminata/a15.png","../img/goku/camminata/a16.png","../img/goku/camminata/a17.png","../img/goku/camminata/a18.png","../img/goku/camminata/a19.png",
        "../img/goku/camminata/a20.png","../img/goku/camminata/a21.png","../img/goku/camminata/a22.png","../img/goku/salto/1.png","../img/goku/salto/2.png","../img/goku/salto/3.png","../img/goku/salto/4.png","../img/goku/salto/5.png","../img/goku/salto/6.png",
        "../img/goku/salto/7.png","../img/goku/salto/8.png","../img/goku/salto/9.png","../img/goku/salto/10.png","../img/goku/salto/11.png","../img/goku/salto/12.png","../img/goku/salto/13.png","../img/goku/salto/14.png","../img/goku/salto/15.png",
        "../img/goku/salto/16.png","../img/goku/salto/17.png","../img/goku/salto/18.png","../img/goku/salto/19.png","../img/goku/salto/20.png","../img/goku/salto/21.png","../img/goku/salto/22.png","../img/goku/salto/23.png","../img/goku/salto/24.png",
        "../img/goku/salto/25.png","../img/goku/salto/26.png","../img/goku/salto/27.png","../img/goku/salto/28.png","../img/goku/salto/29.png","../img/goku/salto/30.png","../img/goku/salto/31.png",
        "../img/goku/pugno/1.png","../img/goku/pugno/2.png","../img/goku/pugno/3.png","../img/goku/pugno/4.png","../img/goku/pugno/5.png","../img/goku/pugno/6.png","../img/goku/pugno/7.png","../img/goku/pugno/8.png","../img/goku/pugno/9.png",
        "../img/goku/pugno/10.png", "../img/goku/pugno/11.png", "../img/goku/ki/1.png", "../img/goku/ki/2.png", "../img/goku/ki/3.png", "../img/goku/ki/4.png", "../img/goku/ki/5.png", "../img/goku/ki/6.png", "../img/goku/ki/7.png", "../img/goku/ki/8.png",
        "../img/goku/ki/9.png", "../img/goku/ki/10.png", "../img/goku/ki/11.png", "../img/goku/ki/12.png", "../img/goku/ki/13.png", "../img/goku/ki/14.png", "../img/goku/ki/15.png", "../img/goku/ki/16.png", "../img/goku/ki/17.png", "../img/goku/ki/18.png", 
        "../img/goku/ki/19.png", "../img/goku/ki/20.png", "../img/goku/ki/21.png", "../img/goku/ki/22.png", "../img/goku/ki/23.png", "../img/goku/ki/24.png", "../img/goku/ki/25.png", "../img/goku/ki/26.png", "../img/goku/ki/27.png", "../img/goku/ki/28.png",
        "../img/goku/ki/29.png", "../img/goku/ki/30.png", "../img/goku/ki/31.png", "../img/goku/ki/32.png", "../img/goku/ki/33.png", "../img/goku/ki/34.png", "../img/goku/ki/35.png", "../img/goku/ki/36.png", "../img/goku/ki/37.png", "../img/goku/ki/38.png",
        "../img/goku/ki/39.png", "../img/goku/carica/1.png", "../img/goku/carica/2.png", "../img/goku/carica/3.png", "../img/goku/carica/4.png", "../img/goku/carica/5.png", "../img/goku/carica/6.png", "../img/goku/carica/7.png", "../img/goku/carica/8.png",
        "../img/goku/carica/9.png", "../img/goku/carica/10.png", "../img/goku/carica/11.png", "../img/goku/carica/12.png", "../img/goku/carica/13.png", "../img/goku/carica/14.png", "../img/goku/carica/15.png", "../img/goku/carica/16.png", "../img/goku/carica/17.png"
        , "../img/goku/carica/18.png", "../img/goku/carica/19.png", "../img/goku/kame/1.png", "../img/goku/kame/2.png", "../img/goku/kame/3.png", "../img/goku/kame/4.png", "../img/goku/kame/5.png", "../img/goku/kame/6.png", "../img/goku/kame/7.png", 
        "../img/goku/kame/8.png", "../img/goku/kame/9.png", "../img/goku/kame/10.png", "../img/goku/kame/11.png", "../img/goku/kame/12.png", "../img/goku/kame/13.png", "../img/goku/kame/14.png", "../img/goku/kame/15.png", "../img/goku/kame/16.png", "../img/goku/kame/17.png"
        , "../img/goku/kame/18.png", "../img/goku/kame/19.png", "../img/goku/kame/20.png", "../img/goku/kame/21.png", "../img/goku/kame/22.png", "../img/goku/kame/23.png", "../img/goku/kame/24.png", "../img/goku/kame/25.png", "../img/goku/kame/26.png", "../img/goku/kame/27.png"
        , "../img/goku/kame/28.png", "../img/goku/kame/29.png", "../img/goku/kame/30.png", "../img/goku/kame/31.png", "../img/goku/kame/32.png", "../img/goku/kame/33.png", "../img/goku/kame/34.png", "../img/goku/kame/35.png", "../img/goku/kame/36.png", "../img/goku/kame/37.png"
        , "../img/goku/kame/38.png", "../img/goku/kame/39.png", "../img/goku/kame/40.png", "../img/goku/kame/41.png", "../img/goku/kame/42.png", "../img/goku/kame/43.png", "../img/goku/kame/44.png", "../img/goku/kame/45.png"
    ];
const azioniGoku = [ new Action("rest",0,9), new Action("walk",9,31), new Action("reverseWalk",30,9), new Action("jump",31,63), new Action("punch",63,73), new Action("kiBlast",73,112), new Action("carica",112,131), new Action("kame",131,176) ];
const goku = new Character("Goku",imgGoku,azioniGoku,Math.round(altezzaSfondo * 0.55),Math.round(altezzaSfondo * 0.40));

const players = [ goku ];
const playerImages = [ player1Image, player2Image];

let animationFunction = null;
let animationCounter = 0;
const FRAME_DELAY = 50; 
let animationHandler = setInterval(
    ()=>{
        animate(playerImages[0],players[0],animationFunction);
    }    ,FRAME_DELAY);

reloadCharacterData();
player1Image.style.display = "inline-block";

window.addEventListener('resize', function(event) {
    reloadSfondoData();
    reloadCharacterData();
}, true);


let keyPressed = false;
window.addEventListener("keydown", (event) => {
    switch(event.key){
        case "a":{
            if(!players[0].blocked){                
                if(players[0].currentAction!="reverseWalk"){
                    players[0].changeState("reverseWalk");             
                }  
                players[0].walk("left",0);  
                keyPressed = true;
            }    
            break;
        }
        case "d":{            
            if(!players[0].blocked){
                if(players[0].currentAction!="walk"){
                    players[0].changeState("walk");                                
                }
                let max = larghezzaSfondo - playerImages[0].width;
                players[0].walk("right",max);
                keyPressed = true;
            }                
            break;
        }
        case "w":{
            if(!players[0].blocked){  
                              
                if(players[0].currentAction!="jump"){
                    clearInterval(animationHandler);                    
                    players[0].changeState("jump");
                    players[0].blocked = true;
                    animationCounter = 32;
                    let totalJump;                    
                    if(altezzaSfondo<250){
                        totalJump = 50;
                    }else{
                        if(altezzaSfondo<700){
                            totalJump = 100;
                        }else{
                            totalJump = 200;
                        }
                    }

                    const JUMP_FOR_FRAME = totalJump/10;
                    const FALL_FOR_FRAME = -(JUMP_FOR_FRAME-1);
                    const FALL_ADJUST = - ((totalJump + (FALL_FOR_FRAME*10)) / 2);
                    
                    /*
                        10 frame up and 12 down, adjust needed
                    */

                    let animationParam = [0,0,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,JUMP_FOR_FRAME,
                        FALL_ADJUST,FALL_ADJUST,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,FALL_FOR_FRAME,
                        0,0,0,0,0,0,0,0];
                    animationFunction = () => {
                        players[0].jump(animationParam); 
                    };
                    animationHandler = setInterval(
                        ()=>{
                            animate(playerImages[0],players[0],animationFunction);
                        }    ,35);
                }                              
            }
            break;    
        }  
        case "i":{            
            if(!players[0].blocked){
                if(players[0].currentAction!="punch"){
                    players[0].changeState("punch");                                
                }
                              
                keyPressed = true;
            }                
            break;
        }          
        case "o":{            
            if(!players[0].blocked){
                if(players[0].currentAction!="kiBlast"){
                    players[0].changeState("kiBlast");   
                    players[0].blocked = true;                             
                }
                              
                keyPressed = true;
            }                
            break;
        }    
        case "e":{            
            if(!players[0].blocked){
                if(players[0].currentAction!="carica"){
                    players[0].charging = true;
                    players[0].changeState("carica",118,127);                                               
                }
                              
                keyPressed = true;
            }                
            break;
        }   
        case "p":{            
            if(!players[0].blocked){
                if(players[0].currentAction!="kame"){
                    players[0].changeState("kame");   
                    players[0].blocked = true;                  
                }
                              
                keyPressed = true;
            }                
            break;
        }     
    }
  });

  window.addEventListener("keyup", (event) => {
    switch(event.key){
        case "a":{
            players[0].rest();
            keyPressed = false;
            break;
        }
        case "d":{
            players[0].rest();
            keyPressed = false;
            break;
        }
        case "e":{
            players[0].charging = false;
            break;
        }        
    }
  });

function reloadSfondoData(){
    stileImgSfondo = window.getComputedStyle(imgSfondo);
    larghezzaSfondo = stileImgSfondo.getPropertyValue("width").split("px")[0];
    altezzaSfondo = stileImgSfondo.getPropertyValue("height").split("px")[0];
    
}

function reloadCharacterData(){
    playerImages[0].height = Math.round(altezzaSfondo * 0.40) ;
    let newX = Math.round(players[0].x * larghezzaSfondo / lastLarghezzaSfondo);
    players[0].x = newX;
    playerImages[0].style.left = newX + "px";
    lastLarghezzaSfondo = larghezzaSfondo;
    players[0].startY = Math.round(altezzaSfondo * 0.55);
    playerImages[0].style.top = (players[0].startY + players[0].y) + "px";
}
    
function animate(playerImg,character,func=null){
    if(func != null){        
        func();
        if(animationCounter==0){
            clearInterval(animationHandler);
            animationHandler = setInterval(
                    ()=>{
                        animate(playerImages[0],players[0],null);
                    }    ,FRAME_DELAY);
            players[0].rest();
        }         
    }
    if(animationCounter>0){
        --animationCounter;
        if(animationCounter==0){
            func = null;            
        players[0].blocked = false;  
        }
    }  

    playerImg.src = character.images[character.animationFrameCurrent];
    playerImg.style.top = character.startY + character.y + "px";
    playerImg.style.left = character.x + "px";
    console.log("Action: " + character.currentAction + "  Current frame: " + character.animationFrameCurrent + " starting frame: " + character.animationFrameStart + " ending frame: " + character.animationFrameEnd + " X: " + character.x + " Y: " + character.y + " Start Y: " + character.startY + " Counter: " + animationCounter);
    character.nextAnimation();
    
}


