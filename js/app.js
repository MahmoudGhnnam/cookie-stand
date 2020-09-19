'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var store = [];

function SaleStore(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.averSale = avg;
  this.cookie = [];
  this.inDayCookie = 0;
  store.push(this);
}

SaleStore.prototype.salesPerHour = function () {
  for (var i = 0; i < openHours.length; i++) {
    var x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    var y = x * this.averSale;
    this.cookie.push(Math.floor(y));
    this.inDayCookie += Math.floor(y);
  }
  this.cookie.push(this.inDayCookie);
};

new SaleStore('Seattle', 23, 65, 6.3);
new SaleStore('Tokyo', 3, 24, 1.2);
new SaleStore('Dubai', 11, 38, 3.7);
new SaleStore('Paris', 20, 38, 2.3);
new SaleStore('Lima', 2, 16, 4.6);

var totals;
function totalSum() {
  totals = [];
  for (var i = 0; i <= openHours.length; i++) {
    var sum = 0;
    for (var j = 0; j < store.length; j++) {
      var sum = store[j].cookie[i];
      sum += sum;
    }
    totals.push(sum);
  }
}


function headerFunc() {
  var container = document.getElementById('sales');
  var divEl = document.createElement('div');
  container.appendChild(divEl);
  divEl.setAttribute('id', 'table');
  var headerEl = document.createElement('h3');
  divEl.appendChild(headerEl);
  headerEl.textContent = 'Sales day in hour';
  var tableEl = document.createElement('table');
  divEl.appendChild(tableEl);
  tableEl.setAttribute('id', 'sales-table');
  var headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  var thElEm = document.createElement('th');
  headerRowEl.appendChild(thElEm);
  thElEm.setAttribute('id', 'empty');
  for (var i = 0; i < openHours.length; i++) {
    var thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = openHours[i];
  }
  var thEl2 = document.createElement('th');
  headerRowEl.appendChild(thEl2);
  thEl2.textContent = 'Daily Total';
}
function tableBody() {
  var container = document.getElementById('sales-table');
  for (var i = 0; i < store.length; i++) {
    var dataRowEl = document.createElement('tr');
    container.appendChild(dataRowEl);
    var tdEl = document.createElement('td');
    dataRowEl.appendChild(tdEl);
    tdEl.textContent = store[i].name;
    for (var j = 0; j < store[i].cookie.length; j++) {
      var tdEl = document.createElement('td');
      dataRowEl.appendChild(tdEl);
      tdEl.textContent = store[i].cookie[j];
    }
  }
}
function totalFun() {

  var container = document.getElementById('sales-table');
  var totalRowEl = document.createElement('tr');
  totalRowEl.setAttribute('id', 'total-row');
  container.appendChild(totalRowEl);
  var tdEl = document.createElement('td');
  totalRowEl.appendChild(tdEl);
  tdEl.textContent = 'Total';
  for (var i = 0; i < store[0].cookie.length; i++) {
    var tdEl = document.createElement('td');
    totalRowEl.appendChild(tdEl);
    tdEl.textContent = totals[i];
  }
}

headerFunc();
for (var i = 0; i < store.length; i++) {
  store[i].salesPerHour();
}
tableBody();
totalSum();
totalFun();

var count = 5;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target);


  var container = document.getElementById('table');
  container.remove();

  var name = event.target.sName.value;
  console.log(sName);
  var min = Number(event.target.sMin.value);
  console.log(sMin);
  var max = Number(event.target.sMax.value);
  console.log(sMax);
  var avg = Number(event.target.sAvg.value);
  console.log(sAvg);
  new SaleStore( name, min, max, avg);

  headerFunc();
  console.log(store);
  for (var x = count; x < store.length; x++) {
    store[x].salesPerHour();
  }
  tableBody();
  count = count + 1;
  console.log(count);
  console.log(totals);
  totalSum();
  totalFun();
  document.getElementById('form').reset();
});