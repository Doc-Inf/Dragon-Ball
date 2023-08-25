class Action{
    constructor(name,start,end){
        this.name = name;
        this.start = start;
        this.end = end;
    }
}

const REST = "rest";
const CHARGE = "carica";

class Character{
    name;   
    x;
    y;
    startY;
    height;
    images;
    currentAction;
    animationFrameStart;
    animationFrameEnd;
    animationFrameCurrent;
    intervalHandler;
    frameDuration;
    actions;
    blocked;
    restFrameStart;
    restFrameEnd;
    yDirection;

    charging;
    chargeState;
    chargeFrameStart;
    chargeFrameEnd;

    constructor(name,images,actions,startY,height){
        this.name = name;
        this.images = images;
        this.actions = actions;
        this.startY = startY;        
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.currentAction = REST;
        this.frameDuration = 50;        
        this.blocked = false;
        this.yDirection = "up";
        this.charging = false;
        this.chargeState = -1;
        this.rest();
    }

    nextAnimation(){
        if(this.currentAction==CHARGE){
            ++this.animationFrameCurrent;   
            if( (this.animationFrameCurrent >= this.chargeFrameStart) && this.charging){
                if(this.animationFrameCurrent >= this.chargeFrameEnd){
                    this.animationFrameCurrent = this.chargeFrameStart;
                }    
            }else{
                if(this.animationFrameCurrent>=this.animationFrameEnd){
                    this.animationFrameStart = this.restFrameStart;
                    this.animationFrameCurrent = this.restFrameStart;
                    this.animationFrameEnd = this.restFrameEnd;
                    this.currentAction = REST;
                    this.charging = false;
                }            
            }
        }else{
            if(this.animationFrameEnd>this.animationFrameStart){
                ++this.animationFrameCurrent;        
                if(this.currentAction==REST){
                    if(this.animationFrameCurrent>=this.restFrameEnd){
                        this.animationFrameCurrent = this.restFrameStart;
                    }
                }else{
                    if(this.animationFrameCurrent>=this.animationFrameEnd){
                        this.animationFrameStart = this.restFrameStart;
                        this.animationFrameCurrent = this.restFrameStart;
                        this.animationFrameEnd = this.restFrameEnd;
                        this.currentAction = REST;
                    }
                }    
                if( (this.animationFrameCurrent+1) == this.animationFrameEnd){
                    this.blocked = false;
                }  
            }else{
                --this.animationFrameCurrent;        
                if(this.animationFrameCurrent<this.animationFrameEnd){
                    this.animationFrameStart = this.restFrameStart;
                    this.animationFrameEnd = this.restFrameEnd;
                    this.animationFrameCurrent = this.restFrameStart;
                    this.currentAction = REST;
                }  
                if(this.animationFrameCurrent==this.animationFrameEnd){
                    this.blocked = false;
                }    
            }
        }
        
             
    }

    changeState(action,startLoop=-1,endLoop=-1){
        if(!this.blocked){
            for(let i=0; i<this.actions.length;++i){
                if(action==this.actions[i].name){                    
                    this.currentAction = action;
                    this.animationFrameStart = this.actions[i].start;
                    this.animationFrameCurrent = this.actions[i].start;
                    this.animationFrameEnd = this.actions[i].end;
                    if(startLoop!=-1){
                        this.chargeFrameStart = startLoop;
                        this.chargeFrameEnd = endLoop;
                    }
                    break;
                }
            }
        }        
    }

    rest(){
        for(let i=0; i<this.actions.length;++i){
            if(this.actions[i].name==REST){
                this.currentAction = REST;
                this.animationFrameCurrent = this.actions[i].start;
                this.restFrameStart = this.actions[i].start;
                this.restFrameEnd = this.actions[i].end;
                this.animationFrameStart = this.restFrameStart;
                this.animationFrameEnd = this.restFrameEnd;
                break;
            }
        }
    }

    walk(direction,limit){
        const WALK_DISTANCE = 3;
        if(direction=="left"){
            if(this.x>0){
                this.x -= WALK_DISTANCE;
            }
        }else{            
            if(direction=="right"){                
                if(this.x<limit){
                    this.x+=WALK_DISTANCE;
                }
            }else{
                console.log("wrong direction of walk");
            }
        }
    }

    jump(animationParam){
        if(animationParam==null){
            const JUMP_FOR_FRAME = 5;
            const MAX_JUMP = - (JUMP_FOR_FRAME*15);
            if(this.yDirection == "up"){
                console.log("Up!");
                this.y -= JUMP_FOR_FRAME; 
            }else{
                if(this.yDirection == "down"){
                    console.log("Down!");
                    this.y += JUMP_FOR_FRAME;
                }else{
                    console.log("Invalid jump direction");
                }           
            }
            if(this.y<=MAX_JUMP){
                console.log("Reverse!");
                this.yDirection = "down";
                this.y += JUMP_FOR_FRAME;
            }
            if(this.y>=0){
                this.yDirection = "up";            
            }
        }else{
            this.y -= animationParam[this.animationFrameCurrent-this.animationFrameStart];
        } 
        
    }
}

export { Action, Character };