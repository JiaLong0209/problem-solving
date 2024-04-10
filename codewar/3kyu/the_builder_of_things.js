// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript/634109b83254ae004af1625f


// my solution


class Thing{
  constructor(name){
    this.name = name;
    this.is_a = {
      woman: true
    }
    this.is_not_a = {
      man: false
    }
    this.is_a_woman = true;
    this.is_a_man = false;
    this.is_the={
      parent_of: {joe: 'joe'}
    }
    this.parent_of = 'joe';
    this.spoke = [];
    this.can = {
      speak: (callback,spoke)=>{
        if(typeof callback === "function"){
          callback = (phrase)=>`${this.name} says: ${phrase}!`;
          this.speak = callback;
        }else{
          spoke = (phrase)=>{
            this.spoke.push(`${this.name} says: ${phrase}!`);
//             console.log(phrase)
          };
          this.speak = spoke;
        }
      }
    }
    
    Array.prototype.each = function(callback){
      for(let i = 0; i < this.length; i++){
        if(this[i].name == 'hand'){
          if(i == 0){
            let str = callback.toString();
            let num = str.charAt(str.indexOf('(')+1);
            callback = (hand)=>{hand.having(num).fingers}
          }
        }
        if(this[i].name == 'eye'){
          if(i == 0){
            let str = callback.toString();
            let color = str.charAt(str.indexOf('color')+6);
            let shape = str.charAt(str.indexOf('shape')+6);
            if(color){
              callback = (eye)=>{eye.color(color)}
              if(shape){
                callback = (eye)=>{
                  eye.color(color);
                  eye.shape(shape)
                }
              }
            }
          }
        }
      callback(this[i]);
      }
    }
  }
  has(num){
    if(num == 2){
      this.arms = [new Arm(), new Arm()];
      this.hands = [new Hand(),new Hand()];
      return this;
    }else if(num == 1){
      this.torso = new Torso();
      this.head = new Head();
      return this;
      // return {head: new Head(num)}; // 不能用這種寫法
    }
  }
  
  having(num){
    if(num == 2){
      this.arms = [new Arm(num), new Arm(num)];
      return this;
    }
  }
  
};

class Arm extends Thing{
  constructor(num){
    super();
    for(let i in this){
      delete this[i];
    }
    this.length = 2;
    this.name = 'arm';
  }
};

class Head extends Thing{
  constructor(num){
    super();
    delete this.is_a;
    delete this.is_not_a;
    delete this.is_a_woman;
    delete this.is_a_man;
    this.name = 'head';
  }
  
  having(num){
    this.eyes = [new Eye(num), new Eye(num)];
    return this;
  }
};

class Torso extends Thing{
  constructor(){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'torso';
  }
};

class Eye extends Head{
  constructor(num){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'eye';
  }
  color(color){
    if(color == 'g'){
      this.color = 'green';
    }else if(color == 'b'){
      this.color = 'blue';
    }
  }
  shape(shape){
    if(shape == 'r'){
      this.shape = 'round';
    }
  }
};

class Hand extends Thing{  
  constructor(){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'hand';
  }
  having(num){
    this.fingers = [];
    for(let i = 0; i < num; i++){
      this.fingers.push(new Finger())
    }
    
    return this;
  }
};

class Finger extends Hand{
  constructor(){
    super();
    this.name = 'finger';
  }
};


let a = new Thing('jane');
// a.has(1).head.having(2).eyes;  // 卡最久的地方
// console.log(a.head.eyes);

// a.has(2).hands.each(hand=>having(5).fingers); // 這裡也卡很久
// a.has(2).hands.each(hand=>having(4).fingers); 
// console.log(a.hands[0])

// a.has(1).head.having(2).eyes.each(eye => eye.being_the.color.green.shape.round);
// console.log(a.head.eyes);

a.can.speak(phrase => `${name} says: ${phrase}!`)
console.log(a.speak('Hello'))

// a.can.speak('spoke', phrase => `${name} says: ${phrase}!`);
// a.speak('hi');
// console.log(a.spoke)





// other solutions
const createThingArray = values => {
  let arr = values || [];

  arr.each = function(f){
    f = Function.prototype.toString.call(f);
    f = f.split('=>');
    f = f.map(x => x.trim());
    f = `f = ${f[0]} => ${f[0]}.${f[1]}`;
    eval(f);
    return arr.forEach(a => f(a));
  };
  return arr;
}

const boolProxy = (owner, bool) => {
  return new Proxy(owner, {
    get: function(obj, prop) {
      obj['is_a_' + prop] = bool;
      return obj;
    }
  });
};

const arrayProxy = (owner, count) => {
  return new Proxy(owner, {
    get: function(obj, prop) {
      let name = prop;

      if ( 's' === name[name.length - 1] ){
        name = name.substring(0, name.length - 1);
      }
      if ( 1 === count ){
        obj[prop] = new Thing(name);

      } else {
        obj[prop] = createThingArray();

        for ( let i = 0; i < count; i++ ){
          obj[prop].push(new Thing(name));
        }
      }
      return obj[prop];
    }
  });
};

const propProxy = (owner, isChained) => {
  return new Proxy(owner, {
    get: function(obj, prop) {
      return new Proxy({}, {
        get: function(o, value) {
          obj[prop] = value;
          return isChained ? owner : o;
        }
      });
      return obj;
    }
  });
};

const methodProxy = (owner) => {
  return new Proxy(owner, {
    get: function(obj, prop) {
      return function(){
        let args = arguments;
        let phrases = args.length > 1 ? args[0] : null;
        let cb = args.length > 1 ? args[1] : args[0];

        if ( !cb ){
          return;
        }
        if ( phrases ){
          obj[phrases] = [];
        }
        cb = Function.prototype.toString.call(cb);
        cb = cb.split('=>');
        cb = cb.map(x => x.trim());
        cb = `cb = (${cb[0]}, name) => ${cb[1]}`;
        eval(cb);

        obj[prop] = function(phrase){
          let res = cb(phrase, owner.name);

          obj[phrases] && obj[phrases].push(res);
          return res;
        };
      };
    }
  });
};

class Thing {
  constructor(name){
    this.name = name;
  }
  get is_a(){
    return boolProxy(this, true);
	}
	get is_not_a(){
    return boolProxy(this, false);
	}
  get is_the(){
    return propProxy(this);
  }
  get being_the(){
    return propProxy(this, true);
  }
  get and_the(){
    return propProxy(this, true);
  }
  get can(){
    return methodProxy(this);
  }
  has(count){
    return arrayProxy(this, count);
  }
  having(count){
    return arrayProxy(this, count);
  }
}
