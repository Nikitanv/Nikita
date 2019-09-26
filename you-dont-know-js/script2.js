'use strict';

const DomElement = function(options, text){
  this.selector = options.selector;
  this.height = options.height ;
  this.width = options.width ;
  this.bg = options.bg ;
  this.fontSize = options.fontSize ;
  this.text = text;
  };
  
  DomElement.prototype.createElement = function(){
  console.log(this.selector[0]);
  if(this.selector[0] ==='.'){
  const div = document.createElement('div');
  div.style.cssText = 'height:' + this.height + ';width:' + this.width + ';background:' +
  this.bg + ';font-size:' + this.fontSize;
  div.textContent = this.text;
  document.body.appendChild(div);
  }
   else if(this.selector[0] ==='#'){
      const p = document..createElement('p');
       p.style.cssText = 'height:' + this.height + ';width:' + this.width + ';background:' +
  this.bg + ';font-size:' + this.fontSize;
  p.textContent = this.text;
  document.body.appendChild(p);
  }
  };
  const optionS = {
  selector: '.square-blue',
  height:'500px',
  width:'500px',
  bg:'blue',
  fontSize:'26px'
  };
  
  const round = new DomElement(optionS, 'синий как иней');
  
  round.createElement();
