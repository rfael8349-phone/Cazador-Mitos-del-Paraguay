// Secuencia cinematográfica introductoria — Cazador: Mitos del Paraguay
// Arte provisional dibujado con píxeles y formas de Phaser; se sustituirá por sprites finales.
class Intro extends Phaser.Scene {
  constructor(){ super('intro'); this.page=0; this.lock=false; }
  create(){
    document.getElementById('hud').style.display='none';document.getElementById('controls').style.display='none';document.getElementById('hint').style.display='none';document.getElementById('skipIntro').style.display='block';document.getElementById('skipIntro').onclick=()=>{this.scene.start('forest');};
    this.cameras.main.setBackgroundColor('#080b09');
    this.art=this.add.container(0,0);
    this.caption=this.add.text(480,468,'',{fontFamily:'Georgia,serif',fontSize:'21px',color:'#f0dfbd',align:'center',wordWrap:{width:820},stroke:'#090b08',strokeThickness:4}).setOrigin(.5);
    this.sub=this.add.text(480,510,'TOCA LA PANTALLA PARA CONTINUAR',{fontFamily:'monospace',fontSize:'12px',color:'#c5ad7b'}).setOrigin(.5);
    this.pages=[
      ['La lluvia golpeaba el techo de la estancia. Eran cerca de las cuatro de la madrugada.','hut'],
      ['A la luz del fogón, el gaucho cebó su último mate antes de salir.','mate'],
      ['Ensilló el caballo. Su perro fiel caminó a su lado por el camino de tierra.','ride'],
      ['Desde el monte llegó un grito imposible. El perro se erizó; el caballo relinchó.','howl'],
      ['—¡Ejevý nde rógape! ¡Volvé a casa! —ordenó en guaraní. Pero el perro no se apartó.','dog'],
      ['Entre los árboles aparecieron los Ao Ao. Se lanzaron sobre el caballo y lo derribaron.','attack'],
      ['El gaucho trepó un pindó espinoso. Desde la copa vio cómo las bestias devoraban a su compañero.','pindo'],
      ['Al amanecer, la luz alcanzó a las criaturas. Sus cuerpos se consumieron y desaparecieron.','dawn'],
      ['Del caballo solo quedaban restos. El gaucho lloró y juró vengarse de los seres del monte.','vow'],
      ['Mucho tiempo después, aquel recuerdo volvió a despertarlo. La cacería comenzaba.','wake']
    ];
    this.drawPage(0);
    this.input.on('pointerdown',()=>this.next());
    this.input.keyboard.on('keydown-SPACE',()=>this.next());
    this.input.keyboard.on('keydown-ENTER',()=>this.next());
    this.time.addEvent({delay:9500,loop:true,callback:()=>{if(this.page<this.pages.length-1)this.next();}});
  }
  clear(){ this.art.removeAll(true); }
  rect(x,y,w,h,c,a=1){let g=this.add.graphics();g.fillStyle(c,a);g.fillRect(x,y,w,h);this.art.add(g);return g;}
  ellipse(x,y,rx,ry,c,a=1){let g=this.add.graphics();g.fillStyle(c,a);g.fillEllipse(x,y,rx,ry);this.art.add(g);return g;}
  line(x1,y1,x2,y2,c,w=2,a=1){let g=this.add.graphics();g.lineStyle(w,c,a);g.lineBetween(x1,y1,x2,y2);this.art.add(g);}
  text(t,x,y,size=18,color='#d9c69d'){let o=this.add.text(x,y,t,{fontFamily:'monospace',fontSize:size+'px',color,stroke:'#080b09',strokeThickness:3});this.art.add(o);}
  forest(){this.rect(0,0,960,540,0x101b16);this.rect(0,350,960,190,0x28251a);for(let i=0;i<13;i++){let x=i*82-20,h=170+(i*47%130);this.rect(x+24,180,15,300,0x17251b);let g=this.add.graphics();g.fillStyle(0x203528,1);g.fillTriangle(x-10,365,x+30,365-h,x+72,365);this.art.add(g);} }
  drawPage(n){
    this.page=n;this.clear();this.caption.setText(this.pages[n][0]);this.cameras.main.fadeIn(420,0,0,0);
    const kind=this.pages[n][1]; if(kind!=='hut'&&kind!=='mate')this.forest(); else this.rect(0,0,960,540,0x090d0b);
    if(kind==='hut'||kind==='mate'){
      this.rect(90,90,780,370,0x241c15);this.rect(130,125,700,290,0x39291d);this.rect(100,95,760,28,0x17130f);
      this.ellipse(480,385,145,35,0x080907);this.ellipse(480,372,65,24,0xd35a20);this.ellipse(480,369,35,17,0xffb34c);
      this.rect(456,305,50,58,0x292b28);this.ellipse(481,304,54,17,0x6e7770);this.line(505,306,535,292,0x899087,7);
      this.ellipse(620,315,42,55,0x111714);this.ellipse(620,250,25,27,0x171a17);this.rect(580,272,85,12,0x171a17);
      if(kind==='hut'){for(let i=0;i<85;i++){let x=(i*73)%960,y=(i*41)%540;this.line(x,y,x-15,y+28,0x6d8290,1,.45);}}
      else {this.ellipse(480,362,24,12,0x9b3e19);this.text('MATE',454,395,12,'#d8c39a');}
    }
    if(kind==='ride'||kind==='howl'||kind==='dog'||kind==='attack'){
      this.rect(0,410,960,130,0x29251a);
      // caballo
      this.ellipse(470,355,150,52,0x3b2619);this.ellipse(590,315,45,48,0x3b2619);this.ellipse(610,275,33,30,0x3b2619);
      for(let x of [385,445,535,575])this.rect(x,380,15,95,0x241a14);
      // gaucho
      this.ellipse(475,240,27,32,0xb98a60);this.rect(445,270,62,105,0x8c2928);this.rect(438,273,76,12,0x6c3922);this.rect(445,365,20,60,0x171512);this.rect(485,365,20,60,0x171512);
      this.ellipse(330,380,37,22,0x986d43);this.ellipse(355,355,21,21,0x986d43);
      this.ellipse(475,207,48,8,0x6d4729);this.rect(458,190,34,14,0x6d4729);
      if(kind==='howl'||kind==='dog'||kind==='attack'){this.text('¡AOOOOOO…!',700,125,24,'#c9c1a6');this.ellipse(760,230,40,55,0x111713,.8);this.ellipse(760,190,24,26,0x111713,.8);}
      if(kind==='attack'){for(let i=0;i<3;i++){this.ellipse(690+i*65,345-i*16,42,52,0x262b21);this.ellipse(680+i*65,315-i*16,22,20,0x161a16);}this.rect(365,395,240,28,0x7c211b);}
      if(kind==='dog'){this.ellipse(335,340,25,19,0x8d6845);this.text('¡EJEVÝ!',280,270,17,'#f0d9ac');}
    }
    if(kind==='pindo'){
      this.rect(0,410,960,130,0x211e17);this.rect(470,75,22,370,0x64452c);
      for(let i=0;i<14;i++){let a=i*Math.PI*2/14;this.line(481,95,481+Math.cos(a)*170,95+Math.sin(a)*75,0x49603b,12);}
      this.ellipse(480,140,22,25,0xb98a60);this.rect(455,160,50,110,0x8c2928);
      for(let i=0;i<4;i++){this.ellipse(210+i*180,390,55,38,0x24251d);}
    }
    if(kind==='dawn'){
      this.rect(0,0,960,310,0xd29b58);this.ellipse(770,115,100,100,0xffe3a0);this.rect(0,310,960,230,0x5a5939);
      for(let i=0;i<4;i++){this.ellipse(250+i*150,330,45,60,0x3a3025,.45);}
      this.text('LA PRIMERA LUZ',365,90,20,'#4b3323');
    }
    if(kind==='vow'){this.rect(0,0,960,540,0x171713);this.ellipse(480,260,150,170,0x090b09);this.ellipse(480,220,35,40,0xb98a60);this.rect(430,260,100,155,0x762827);this.text('NUNCA MÁS',390,115,28,'#d7b98c');}
    if(kind==='wake'){this.rect(0,0,960,540,0x0c100d);this.ellipse(480,280,210,130,0x252b24);this.ellipse(480,250,50,55,0xb98a60);this.text('EL RECUERDO LO DESPERTÓ',250,125,20,'#e1d1ae');}
    if(n===0)this.text('PARAGUAY · 04:00 AM',345,70,18,'#c7b58d');
    this.addCinematicFinish(kind,n);
    this.sub.setText(n===this.pages.length-1?'TOCA PARA COMENZAR EL NIVEL 1':'TOCA PARA CONTINUAR');
  }
  addCinematicFinish(kind,n){
    // Acabado cinematográfico: viñeta, bandas de cine, niebla y partículas ambientales.
    const shade=this.add.graphics();shade.fillGradientStyle(0x050806,.72,0x050806,0,.72);shade.fillRect(0,0,960,540);shade.fillGradientStyle(0x050806,0,0x050806,.78,0,.78);shade.fillRect(0,0,960,540);this.art.add(shade);
    const bars=this.add.graphics();bars.fillStyle(0x050604,.94);bars.fillRect(0,0,960,34);bars.fillRect(0,506,960,34);this.art.add(bars);
    // Niebla en planos separados para dar profundidad al monte.
    for(let i=0;i<7;i++){
      const mist=this.add.ellipse((i*173+80)%1080,365+(i%3)*38,190+(i%2)*70,22+(i%3)*9,0xb7c2a0,.055+(i%3)*.018);
      this.art.add(mist);
      this.tweens.add({targets:mist,x:mist.x+(i%2?95:-95),alpha:mist.alpha*.55,duration:6500+i*430,yoyo:true,repeat:-1,ease:'Sine.easeInOut'});
    }
    // Motas de ceniza/luciérnagas con movimiento lento.
    for(let i=0;i<34;i++){
      const x=(i*137+41)%960,y=90+(i*83)%390;
      const mote=this.add.circle(x,y,1+(i%3)*.55,i%4===0?0xe8c879:0xd7ddbd,.28+(i%3)*.1);
      this.art.add(mote);
      this.tweens.add({targets:mote,y:y-28-(i%5)*9,alpha:0,duration:2600+i*115,delay:i*37,repeat:-1,ease:'Sine.easeInOut'});
    }
    if(kind==='dawn'||kind==='wake'){
      const glow=this.add.circle(770,135,115,0xffd78b,.10);this.art.add(glow);
      this.tweens.add({targets:glow,scale:1.22,alpha:.035,duration:2600,yoyo:true,repeat:-1});
    }
    if(kind==='howl'||kind==='attack'||kind==='pindo'){
      const fog=this.add.rectangle(480,420,960,110,0x9ca58b,.10);this.art.add(fog);
    }
    // Microtemblor de cámara en la escena del ataque.
    if(kind==='attack')this.cameras.main.shake(520,.0025);
    // Textura de película muy discreta, sin ocultar ilustración ni subtítulos.
    const grain=this.add.graphics();let seed=917+n*31;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
    for(let i=0;i<115;i++){grain.fillStyle(0xe9dfc6,.035+rnd()*.045);grain.fillRect(rnd()*960,rnd()*540,1,1);}
    this.art.add(grain);
  }
  next(){
    if(this.lock)return;this.lock=true;this.cameras.main.fadeOut(350,0,0,0);
    this.cameras.main.once('camerafadeoutcomplete',()=>{if(this.page<this.pages.length-1){this.drawPage(this.page+1);}else{this.scene.start('forest');}this.lock=false;});
  }
}
