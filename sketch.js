let windowRatio;

let cols;
let rows;
let spacing; // 그리드 간격
let circles = [];
let sizes = [];
let ratio;
let polySynth;

let f_circle_x;
let f_circle_y;
let f_circle_radius;


let s_circle_x;
let s_circle_y;
let s_circle_radius;


let angles;
let lf_point_xy=[];
let lf_circles=[];
let lf_sizes=[];

let ls_point_xy=[];
let ls_circles=[];
let ls_sizes=[];


let cutoffFreq = 0;
let cutoffFreq2 = 0;

let pad_osc=[];
let pad_frq=[261.6,440.0,659.26]
let pad_pitchs = ['G', 'D', 'G', 'C'];
let pad_oct = [2,3,4];





function setup() {
  Tone.start();
  cols = 8;
  rows = 14;
  spacing = windowWidth/cols; // 그리드 간격
  windowRatio = windowWidth/750
  ratio = spacing/2;

  f_circle_radius = spacing*2.5*2

  s_circle_radius = spacing*2.5*2
  
  angleMode(DEGREES)
  
  createCanvas(windowWidth, windowWidth);

  console.log("하이"+pad_osc)
  sizes[0] = 12;
  sizes[1] = 8;
  sizes[2] = 6;
  sizes[3] = 6;
  sizes[4] = 10;
  sizes[5] = 10;
  sizes[6] = 6;
  sizes[7] = 16;
  sizes[8] = 10;
  sizes[9] = 4;
  sizes[10] = 8;
  sizes[11] = 8;
  sizes[12] = 10;
  sizes[13] = 20;
  sizes[14] = 8;
  sizes[15] = 14;
  sizes[16] = 8;
  sizes[17] = 8;
  sizes[18] = 10;
  sizes[19] = 10;
  sizes[20] = 10;
  sizes[21] = 10;
  sizes[22] = 10;
  sizes[23] = 12;
  sizes[24] = 6;
  sizes[25] = 16;
  sizes[26] = 12;
  sizes[27] = 12;
  sizes[28] = 10;
  sizes[29] = 4;
  sizes[30] = 12;
  sizes[31] = 10;
  sizes[32] = 4;
  sizes[33] = 20;
  sizes[34] = 14;
  sizes[35] = 14;
  sizes[36] = 10;
  sizes[37] = 10;
  sizes[38] = 14;
  sizes[39] = 8;
  sizes[40] = 6;
  sizes[41] = 16;
  sizes[42] = 16;
  sizes[43] = 16;
  sizes[44] = 10;
  sizes[45] = 20;
  sizes[46] = 16;
  sizes[47] = 6;
  sizes[48] = 8;
  sizes[49] = 8;
  sizes[50] = 20;
  sizes[51] = 20;
  sizes[52] = 10;
  sizes[53] = 10;
  sizes[54] = 20;
  sizes[55] = 4;
  sizes[56] = 10;
  sizes[57] = 4;
  //첫번째 원 
  sizes[58] = 6;
  sizes[59] = 16;
  sizes[60] = 10;
  sizes[61] = 4;
  sizes[62] = 16;
  sizes[63] = 6;
  sizes[64] = 12;
  sizes[65] = 8;
  sizes[66] = 8;
  sizes[67] = 14;
  sizes[68] = 10;
  sizes[69] = 10;
  sizes[70] = 14;
  sizes[71] = 8;
  sizes[72] = 14;
  sizes[73] = 16;
  sizes[74] = 10;
  sizes[75] = 12;
  sizes[76] = 10;
  sizes[77] = 20;
  sizes[78] = 12;
  sizes[79] = 10;
  sizes[80] = 16;
  sizes[81] = 20;
  sizes[82] = 12;
  sizes[83] = 10;
  sizes[84] = 10;
  sizes[85] = 10;
  sizes[86] = 10;
  sizes[87] = 12;
  sizes[88] = 20;
  sizes[89] = 16;
  sizes[90] = 14;
  sizes[91] = 8;
  sizes[92] = 10;
  sizes[93] = 4;
  sizes[94] = 8;
  sizes[95] = 14;
  sizes[96] = 16;
  sizes[97] = 8;
  sizes[98] = 16;
  sizes[99] = 6;
  sizes[100] = 10;
  sizes[101] = 10;
  sizes[102] = 6;
  sizes[103] = 16;
  sizes[104] = 14;
  sizes[105] = 4;
  sizes[106] = 20;
  sizes[107] = 4;
  sizes[108] = 10;
  sizes[109] = 20;
  sizes[110] = 4;
  sizes[111] = 20;
  // sizes[112] = 4;
  // sizes[113] = 8;
  // sizes[114] = 20;
  // sizes[115] = 10;
  // sizes[116] = 10;
  // sizes[117] = 20;
  // sizes[118] = 20;
  // sizes[119] = 4;
  // sizes[120] = 10;
  // sizes[121] = 4;
  // sizes[122] = 6;
  // sizes[123] = 16;
  // sizes[124] = 16;
  // sizes[125] = 10;
  // sizes[126] = 4;
  // sizes[127] = 16;
  // sizes[128] = 16;
  // sizes[129] = 6;
  // sizes[130] = 12;
  // //두번째 원
  // sizes[131] = 8;
  // sizes[132] = 8;
  // sizes[133] = 8;
  // sizes[134] = 14;
  // sizes[135] = 10;
  // sizes[136] = 10;
  // sizes[137] = 10;
  // sizes[138] = 14;
  // sizes[139] = 8;
  // sizes[140] = 14;
  // sizes[141] = 16;
  // sizes[142] = 10;
  // sizes[143] = 14;
  // sizes[144] = 12;
  // sizes[145] = 10;
  // sizes[146] = 20;
  // sizes[147] = 4;
  // sizes[148] = 12;
  // sizes[149] = 10;
  // sizes[150] = 16;
  // sizes[151] = 20;
  // sizes[152] = 12;
  // sizes[153] = 8;
  // sizes[154] = 10;
  // sizes[155] = 10;
  // sizes[156] = 10;
  // sizes[157] = 20;
  // sizes[158] = 10;
  // sizes[159] = 12;
  // sizes[160] = 20;
  // sizes[161] = 16;
  // sizes[162] = 14;
  // sizes[163] = 16;
  // sizes[164] = 8;
  // sizes[165] = 10;
  // sizes[166] = 4;
  // sizes[167] = 16;
  // sizes[168] = 8;
  // sizes[169] = 14;
  // sizes[170] = 16;
  // sizes[171] = 8;
  // sizes[172] = 16;
  // sizes[173] = 8;
  // sizes[174] = 6;
  // sizes[175] = 10;
  // sizes[176] = 10;
  // sizes[177] = 10;
  // sizes[178] = 6;
  // sizes[179] = 16;
  // sizes[180] = 14;
  // sizes[181] = 4;
  // sizes[182] = 20;
  // sizes[183] = 14;
  // sizes[184] = 4;
  // sizes[185] = 10;
  // sizes[186] = 20;
  // sizes[187] = 4;
  // sizes[188] = 4;
  // sizes[189] = 20;

  for (let i = 0; i < 190; i++) {
    
    let x = i % cols;

    let y = int(i / cols);

    let cx = x * spacing + spacing/2;
    let cy = (y * ratio + ratio);

    
    if (i === 39){
      s_circle_x = cx;
      s_circle_y = cy;
    }
    
    if (i === 72){
      f_circle_x = cx;
      f_circle_y = cy;
    }
    circles.push(new P_circle(cx, cy, sizes[i]));
  }
  
  
  //원에 들어가는 포인트들 관리
  angles = [0, 11, 23, 35, 47, 58, 68]
  lf_sizes = [6,8,8,10,10,12,12,14,14,16,16,20,20]
  
  for (i in angles){
    if (angles[i] === 0){
      lf_point_xy.push(
        [f_circle_x + sin(90)*(f_circle_radius/2),
         f_circle_y + cos(90)*(f_circle_radius/2)]
      )
      ls_point_xy.push(
        [s_circle_x + sin(-90)*(f_circle_radius/2),
         s_circle_y + cos(-90)*(f_circle_radius/2)]
      )
    } else {
      lf_point_xy.push(
        [f_circle_x + sin(angles[i]+90)*(f_circle_radius/2),
         f_circle_y + cos(angles[i]+90)*(f_circle_radius/2)]
      )
      ls_point_xy.push(
        [s_circle_x + sin(angles[i]-90)*(f_circle_radius/2),
         s_circle_y + cos(angles[i]-90)*(f_circle_radius/2)]
      )
      lf_point_xy.push(
        [f_circle_x + sin(-angles[i]+90)*(f_circle_radius/2),
         f_circle_y + cos(-angles[i]+90)*(f_circle_radius/2)]
      )
      ls_point_xy.push(
        [s_circle_x + sin(-angles[i]-90)*(f_circle_radius/2),
         s_circle_y + cos(-angles[i]-90)*(f_circle_radius/2)]
      )      
    }
  }
  
  console.log(lf_point_xy)
  
  for (i in lf_point_xy){
    let [x,y] = lf_point_xy[i];
    lf_circles.push(new LF_circle(x,y,lf_sizes[i]))
  }
  for (i in ls_point_xy){
    let [x,y] = ls_point_xy[i];
    lf_circles.push(new LF_circle(x,y,lf_sizes[i]))
  }
}




function draw() {
  background(255);
  fill(0);
  noStroke();
  // push();
  // text(str(cutoffFreq),width/2,height/2);
  // text(str(cutoffFreq2),width/2,height/2+50);
  // pop();
  // push();
  // noFill();
  // stroke(50)
  // ellipse(f_circle_x,f_circle_y,f_circle_radius)
  // ellipse(s_circle_x,s_circle_y,s_circle_radius)
  // pop()
  
//   push()
//   fill('blue')
//   ellipse(lf_pointX,lf_pointY,20)
//   pop()
  

  for(let c of circles) {
    c.display()
  }
  
  for(let lf of lf_circles){
    lf.display()
  }
}


function touchStarted() {
    Tone.start();
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    // userStartAudio();

    for(let c of circles) {
        if(c.contains(mouseX,mouseY)){
          synth.triggerAttackRelease(c.note+str(c.oct),c.dur)
          //polySynth.play(c.note+str(c.oct),c.velo,0,c.dur);
        }
    }
    let d = dist(mouseX,mouseY,f_circle_x,f_circle_y)
    let d2 = dist(mouseX,mouseY,s_circle_x,s_circle_y)
    let bound = 20;
    if(d > (f_circle_radius/2-bound) &&
        d < (f_circle_radius/2+bound)){
        synth2.triggerAttack(["C2", "E3", "A4"],Tone.now());
    }
    if(d2 > (s_circle_radius/2-bound) &&
        d2 < (s_circle_radius/2+bound)){
        synth3.triggerAttack(["C2", "D3", "F4"],Tone.now());
    }
}

function touchMoved(){
    let d = dist(mouseX,mouseY,f_circle_x,f_circle_y)
    let d2 = dist(mouseX,mouseY,s_circle_x,s_circle_y)
    let bound = 20;
    if(d > (f_circle_radius/2-bound) &&
        d < (f_circle_radius/2+bound)){
        cutoffFreq = abs(f_circle_y - mouseY)*10 *0.2 + 100;
        filter2.set({frequency: cutoffFreq})

    }
        if(d2 > (s_circle_radius/2-bound) &&
        d2 < (s_circle_radius/2+bound)){
        cutoffFreq2 = abs(s_circle_y - mouseY)*10 *0.6 + 100;
        filter3.set({frequency: cutoffFreq2})
        
    }
}

function touchEnded() {
    synth2.triggerRelease(["C2", "E3", "A4"],Tone.now());
    synth3.triggerRelease(["C2", "D3", "F4"],Tone.now());
    console.log("release")
}

function mouseReleased() {
    synth2.triggerRelease(["C2", "E3", "A4"],Tone.now());
    synth3.triggerRelease(["C2", "D3", "F4"],Tone.now());
    console.log("release")
}

class P_circle {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size * windowRatio;
    this.up = 0;
    if (this.size <= 8){
      this.dur = 0.15
    } else {
      this.dur = size/65;
    }
    this.oct = int(8-size/4);
    this.note = random(['C','F','D','G'])
    this.velo = size/20;
  }
  
  contains(px, py){
    let d = dist(px,py,this.x,this.y);
    return d < 20
  }
  
  display(){
    ellipse(this.x,this.y,this.size + this.up)
    if(dist(mouseX,mouseY,this.x,this.y)<20){
      this.up = lerp(this.up,3,0.5);
    } else {
      this.up = lerp(this.up,0,0.5);
    }
  }
  
}

class LF_circle {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size * windowRatio;
    this.up = 0;
  }

  display(){
    ellipse(this.x,this.y,this.size + this.up)
    if(dist(mouseX,mouseY,this.x,this.y)<40){
      this.up = lerp(this.up,5,0.1);
    } else {
      this.up = lerp(this.up,0,0.1);
    }
  }
}
