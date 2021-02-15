'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//object of location1 
let location1 = {
  Name:'Seattle',
  Min:23,
  Max:65,
  Avgcookie:6.3,
  Custperhour:[],
  Cookiesperhour:[],

  
  getcustperhour:function (Min,Max){
    for (let i=0;i<hours.length;i++){
    this.Custperhour[i] = randomCust(location1.Min,location1.Max);
    console.log(location1.Custperhour);
    }
  },
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
      console.log(location1.Cookiesperhour);
    }
  }
}

function randomCust (Min,Max){
  return Math.floor( Math.random()*(Max-Min+1)+Min);
}
location1.getcustperhour();
location1.getCookiesperhour();
console.log(getcustperhour,getCookiesperhour);


//object of location2 
let locatin2 = {
  Name:'Tokyo',
  Min:3,
  Max:24,
  Avgcookie:1.2,
  Cusperhour:[],
  Cookiesperhour:[],
  getcustperhour:function (Min,Max){
    for (let i=0;i<hours.length;i++){
    this.Custperhour[i] = randomCust(location2.Min,location1.Max);
    console.log(location2.Custperhour);
    }
  },
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
      console.log(location2.Cookiesperhour);
    }
  }
}

function randomCust (Min,Max){
  return Math.floor( Math.random()*(Max-Min+1)+Min);
}
location2.getcustperhour();
location2.getCookiesperhour();
console.log(getcustperhour,getCookiesperhour);

//object of location3
let locatin3 = {
  Name:'Dubai',
  Min:11,
  Max:38,
  Avgcookie:3.7,
  Cusperhour:[],
  Cookiesperhour:[],

  getcustperhour:function (Min,Max){
    for (let i=0;i<hours.length;i++){
    this.Custperhour[i] = randomCust(location1.Min,location3.Max);
    console.log(location3.Custperhour);
    }
  },
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
      console.log(location3.Cookiesperhour);
    }
  }
}

function randomCust (Min,Max){
  return Math.floor( Math.random()*(Max-Min+1)+Min);
}
location3.getcustperhour();
location3.getCookiesperhour();
console.log(getcustperhour,getCookiesperhour);

//object of location4
let locatin4 = {
  Name:'Paris',
  Min:20,
  Max:38,
  Avgcookie:2.3,
  Cusperhour:[],
  Cookiesperhour:[],

  getcustperhour:function (Min,Max){
    for (let i=0;i<hours.length;i++){
    this.Custperhour[i] = randomCust(location4.Min,location4.Max);
    console.log(location1.Custperhour);
    }
  },
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
      console.log(location4.Cookiesperhour);
    }
  }
}

function randomCust (Min,Max){
  return Math.floor( Math.random()*(Max-Min+1)+Min);
}
location4.getcustperhour();
location4.getCookiesperhour();
console.log(getcustperhour,getCookiesperhour);

//object of location5
let locatin5 = {
  Name:'Lima',
  Min:2,
  Max:16,
  Avgcookie:4.6,
  Cusperhour:[],
  Cookiesperhour:[],

  getcustperhour:function (Min,Max){
    for (let i=0;i<hours.length;i++){'use strict';
    let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
    //object of location1 
    let location1 = {
      Name:'Seattle',
      Min:23,
      Max:65,
      Avgcookie:6.3,
      Custperhour:[],
      Cookiesperhour:[],
    
      
      getcustperhour:function (Min,Max){
        for (let i=0;i<hours.length;i++){
        this.Cusperhour[i] = randomCust(location1.Min,location1.Max);
        console.log(location1.Cusperhour);
        }
      },
      getCookiesperhour:function ( ){
        for (let i=0;i<hours.length;i++){
          this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
          console.log(location1.Cookiesperhour);
        }
      }
    }
    
    function randomCust (Min,Max){
      return Math.floor( Math.random()*(Max-Min+1)+Min);
    }
    location1.getcustperhour();
    location1.getCookiesperhour();
    console.log(getcustperhour,getCookiesperhour);
    
    
    //object of location2 
    let locatin2 = {
      Name:'Tokyo',
      Min:3,
      Max:24,
      Avgcookie:1.2,
      Cusperhour:[],
      Cookiesperhour:[],
      getcustperhour:function (Min,Max){
        for (let i=0;i<hours.length;i++){
        this.Cusperhour[i] = randomCust(location2.Min,location2.Max);
        console.log(location2.Cusperhour);
        }
      },
      getCookiesperhour:function ( ){
        for (let i=1;i<hours.length;i++){
          this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
          console.log(location2.Cookiesperhour);
        }
      }
    }
    
    function randomcust (Min,Max){
      return Math.floor( Math.random()*(Max-Min+1)+Min);
    }
    location2.getcustperhour();
    location2.getCookiesperhour();
    console.log(getcustperhour,getCookiesperhour);
    
    //object of location3
    let locatin3 = {
      Name:'Dubai',
      Min:11,
      Max:38,
      Avgcookie:3.7,
      Cusperhour:[],
      Cookiesperhour:[],
    
      getcustperhour:function (Min,Max){
        for (let i=0;i<hours.length;i++){
        this.Cusperhour[i] = randomCust(location3.Min,location3.Max);
        console.log(location3.Cusperhour);
        }
      },
      getCookiesperhour:function ( ){
        for (let i=0;i<hours.length;i++){
          this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
          console.log(location3.Cookiesperhour);
        }
      }
    }
    
    function randomcust (Min,Max){
      return Math.floor( Math.random()*(Max-Min+1)+Min);
    }
    location3.getcustperhour();
    location3.getCookiesperhour();
    console.log(getcustperhour,getCookiesperhour);
    
    //object of location4
    let locatin4 = {
      Name:'Paris',
      Min:20,
      Max:38,
      Avgcookie:2.3,
      Cusperhour:[],
      Cookiesperhour:[],
    
      getcustperhour:function (Min,Max){
        for (let i=0;i<hours.length;i++){
        this.Cusperhour[i] = randomCust(location4.Min,location4.Max);
        console.log(location4.Cusperhour);
        }
      },
      getCookiesperhour:function ( ){
        for (let i=0;i<hours.length;i++){
          this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
          console.log(location4.Cookiesperhour);
        }
      }
    }
    
    function randomcust(Min,Max){
      return Math.floor( Math.random()*(Max-Min+1)+Min);
    }
    location4.getcustperhour();
    location4.getCookiesperhour();
    console.log(getcustperhour,getCookiesperhour);
    
    //object of location5
    let locatin5 = {
      Name:'Lima',
      Min:2,
      Max:16,
      Avgcookie:4.6,
      Cusperhour:[],
      Cookiesperhour:[],
    
      getcustperhour:function (Min,Max){
        for (let i=0;i<hours.length;i++){
        this.Cusperhour[i] = randomCust(location5.Min,location5.Max);
        console.log(location5.Cusperhour);
        }
      },
      getCookiesperhour:function ( ){
        for (let i=0;i<hours.length;i++){
          this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
          console.log(location5.Cookiesperhour);
        }
      }
    }
    
    function randomcust(Min,Max){
      return Math.floor( Math.random()*(Max-Min+1)+Min);
    }
    location5.getcustperhour();
    location5.getCookiesperhour();
    console.log(getcustperhour,getCookiesperhour);
    
    this.Cusperhour[i] = randomCust(location5.Min,location5.Max);
    console.log(location5.Cusperhour);
    }
  },
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.Cookiesperhour[i]=this.hours[i]*this.Avgcookie;
      console.log(location5.Cookiesperhour);
    }
  }
}

function randomcust(Min,Max){
  return Math.floor( Math.random()*(Max-Min+1)+Min);
}
location5.getcustperhour();
location5.getCookiesperhour();
console.log(getcustperhour,getCookiesperhour);
