'use strict'
//function random(min,max){
  //  return Math.floor(Math.random()*(max-min+1)+min);
//}
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function Location(locationName,minCustomer,maxCustomer,avgCookie,customersEachHour,cookiesEachHour){
    this.name=locationName;
    this.min=minCustomer;
    this.max=maxCustomer;
    this.avg=avgCookie;
    this.customersEachHour=customersEachHour;
    this.cookiesEachHour=cookiesEachHour;
    //this.total=total;

   Location.prototype.customersEachHour=function( ){
    for (let i=0;i<hours.length;i++){
        this.customersEachHour.push( randomCust(this.minCustomer,this.maxCustomer));
}

}
}
Location.prototype.cookiesEachHour=function ( ){
    for (let i=0;i<hours.length;i++){
      this.cookiesEachHour[i]=this.hours[i]*this.Avgcookie;
    }
}



let Seattle= new Location('seattle',23,65,6.3,[],[]);
console.log(Seattle);

let Tokyo= new Location('tokyo',3,24,1.2,[],[]);
console.log(Tokyo);

let Dubai= new Location('Dubai',11,38,3.7,[],[]);
console.log(Dubai);

let Paris= new Location('Paris',20,38,2.3,[],[]);
console.log(Paris);

let Lima= new Location('Lima',2,16,4.6,[],[]);
console.log(Lima);

//Seattle.customersEachHour();
//Seattle.cookiesEachHour();


Location.prototype.render=function () {
  const parent = document.getElementById('salmon cookies');


let cookiesTable= document.createElement('table');
parent.appendChild(cookiesTable)
console.log(parent);

let headerRow= document.createElement('th');
cookiesTable.appendChild(headerRow);
for (let i=0;i<hours.length;i++){
    let th=document.createElement('th');
    headerRow.appendChild(th);
    th.textContent=hours[i];
    

//create rows
for (let i=0;i<hours.length;i++){
let dataRow=document.createElement('tr');
cookiesTable.appendChild(dataRow);

//put data into cells
for (let i=0;i<hours.length;i++){
let tableData=document.createElement('td');
dataRow.appendChild('tableData');

tableData.textContent=this.cookiesEachHour[i].name;

Seattle.render()
}
}
}
}