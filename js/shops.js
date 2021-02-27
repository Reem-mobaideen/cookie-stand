'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function randomCust (min,max){
  return Math.floor( Math.random()*(max-min+1)+min);
}
//object of location1 
let seattle = {
  location:'Seattle',
  minCustomer:23,
  maxCustomer:65,
  avgCookie:6.3,
  custperhour:[],
  cookiesperhour:[],
  total:0,

  
  getcustperhour:function ( ){
    for (let i=0;i<hours.length;i++){
    this.custperhour.push( randomCust(this.minCustomer,this.maxCustomer));
    //console.log(location.custperhour);
    }
   
  },
  
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesperhour.push(Math.floor(this.custperhour[i]*this.avgCookie));
      //console.log(location.cookiesperhour[i]);
      this.total+=this.cookiesperhour[i]
    }
  },


render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.location;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
   

  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesperhour[i]} cookies`
  }

  // create total elemnt:
  let totalItem = document.createElement('li');

  unorderedList.appendChild(totalItem);

  totalItem.textContent=`total: ${this.total} cookies`;
  
}

}

seattle.getcustperhour();
seattle.getCookiesperhour();
seattle.render();
console.log(seattle);



//object of location2 
let tokyo = {
  location:'Tokyo',
  minCustomer:3,
  maxCustomer:24,
  avgCookie:1.2,
  custperhour:[],
  cookiesperhour:[],
  total:0,

  
  getcustperhour:function ( ){
    for (let i=0;i<hours.length;i++){
    this.custperhour.push( randomCust(this.minCustomer,this.maxCustomer));
    //console.log(location.custperhour);
    }
   
  },
  
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesperhour.push(Math.floor(this.custperhour[i]*this.avgCookie));
      //console.log(tokyo.cookiesperhour[i]);
      this.total+=this.cookiesperhour[i]
    }
  },
      render:function(){
        // get the parent element by id:
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
        // give text content
        shopName.textContent = this.location;
        
        // created an element 
        let unorderedList=document.createElement('ul');
        // append element to parent
        parent.appendChild(unorderedList);
         
      
        for(let i =0;i<hours.length;i++){
          // create li
          let listItem=document.createElement('li');
          // append li
          unorderedList.appendChild(listItem);
          // give text content
          listItem.textContent = `${hours[i]}: ${this.cookiesperhour[i]} cookies`
        }
      
        // create total elemnt:
        let totalItem = document.createElement('li');
      
        unorderedList.appendChild(totalItem);
      
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }
      

}
tokyo.getcustperhour();
tokyo.getCookiesperhour();
tokyo.render();
console.log(tokyo);




let dubai = {
  location:'Dubai',
  minCustomer:11,
  maxCustomer:38,
  avgCookie:3.7,
  custperhour:[],
  cookiesperhour:[],
  total:0,

  
  getcustperhour:function ( ){
    for (let i=0;i<hours.length;i++){
    this.custperhour.push( randomCust(this.minCustomer,this.maxCustomer));
    //console.log(dubai.custperhour);
    }
   
  },
  
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesperhour.push(Math.floor(this.custperhour[i]*this.avgCookie));
      //console.log(location.cookiesperhour[i]);
  
  this.total+=this.cookiesperhour[i]
    }
  },


render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.location;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
   

  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesperhour[i]} cookies`
  }

  // create total elemnt:
  let totalItem = document.createElement('li');

  unorderedList.appendChild(totalItem);

  totalItem.textContent=`total: ${this.total} cookies`;
  
}

}
dubai.getcustperhour();
dubai.getCookiesperhour();
dubai.render();
console.log(dubai);





let paris = {
  location:'Paris',
  minCustomer:20,
  maxCustomer:38,
  avgCookie:2.3,
  custperhour:[],
  cookiesperhour:[],
  total:0,

  
  getcustperhour:function ( ){
    for (let i=0;i<hours.length;i++){
    this.custperhour.push( randomCust(this.minCustomer,this.maxCustomer));
    //console.log(paris.custperhour);
    }
   
  },
  
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesperhour.push(Math.floor(this.custperhour[i]*this.avgCookie));
      //console.log(paris.cookiesperhour[i]);
      this.total+=this.cookiesperhour[i]
    }
  },


render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.location;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
   

  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesperhour[i]} cookies`
  }

  // create total elemnt:
  let totalItem = document.createElement('li');

  unorderedList.appendChild(totalItem);

  totalItem.textContent=`total: ${this.total} cookies`;
  
}

}
paris.getcustperhour();
paris.getCookiesperhour();
paris.render();
console.log(paris);



  


let lima = {
  location:'Lima',
  minCustomer:2,
  maxCustomer:16,
  avgCookie:4.6,
  custperhour:[],
  cookiesperhour:[],
  total:0,

  
  getcustperhour:function ( ){
    for (let i=0;i<hours.length;i++){
    this.custperhour.push( randomCust(this.minCustomer,this.maxCustomer));
    //console.log(lima.custperhour);
    }
   
  },
  
  getCookiesperhour:function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesperhour.push(Math.floor(this.custperhour[i]*this.avgCookie));
      //console.log(lima.cookiesperhour[i]);
      this.total+=this.cookiesperhour[i]
    }
  },


render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.location;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
   

  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesperhour[i]} cookies`
  }

  // create total elemnt:
  let totalItem = document.createElement('li');

  unorderedList.appendChild(totalItem);

  totalItem.textContent=`total: ${this.total} cookies`;
  
}

}
lima.getcustperhour();
lima.getCookiesperhour();
lima.render();
console.log(lima);


