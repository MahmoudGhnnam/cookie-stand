'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var store = [];

function StoreSale(name, min, max, avg) {
    this.name = name;
    this.minSale = min;
    this.maxSale = max;
    this.aveSale = avg;
    this.storeCookies = [];
    this.dailyCookie = 0;
    store.push(this);
}

StoreSale.prototype.salesPerHour = function () {
    for (var i = 0; i < storeHours.length; i++) {
        var x = Math.floor(Math.random() * (this.maxSale - this.minSale + 1) + this.minSale);
        var y = x * this.aveSale;
        this.storeCookies.push(Math.floor(y));
        this.dailyCookie += Math.floor(y);
    }
    this.storeCookies.push(this.dailyCookie);
};
new StoreSale('Seattle', 23, 65, 6.3);
new StoreSale('Tokyo', 3, 24, 1.2);
new StoreSale('Dubai', 11, 38, 3.7);
new StoreSale('Paris', 20, 38, 2.3);
new StoreSale('Lima', 2, 16, 4.6);

var total = 0;
StoreSale.prototype.headerFunc = function () {
    var container = document.getElementById("sales");
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    articleEl.setAttribute('id', 'table');
    var h3El = document.createElement('h3');
    articleEl.appendChild(h3El);
    h3El.textContent = 'Daily Sales Per Hour';
    var tableEl = document.createElement('table');
    articleEl.appendChild(tableEl);
    tableEl.setAttribute('id', 'sales-table');
    var headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);
    var thElEm = document.createElement('th');
    headerRowEl.appendChild(thElEm);
    thElEm.setAttribute('id', 'empty');
    for (var i = 0; i < storeHours.length; i++) {
        var thEl = document.createElement('th');
        headerRowEl.appendChild(thEl);
        thEl.textContent = storeHours[i];
    }
    var thEl2 = document.createElement('th');
    headerRowEl.appendChild(thEl2);
    thEl2.textContent = 'Daily Total';
};

StoreSale.prototype.tableBody = function () {
    var container = document.getElementById("sales-table");
    for (var i = 0; i < store.length; i++) {
        var dataRowEl = document.createElement('tr');
        container.appendChild(dataRowEl);
        var tdEl = document.createElement('td');
        dataRowEl.appendChild(tdEl);
        tdEl.textContent = this.name;
        for (var i = 0; i < this.storeCookies.length; i++) {
            var tdEl = document.createElement('td');
            dataRowEl.appendChild(tdEl);
            tdEl.textContent = this.storeCookies[i];
        }
    }
};

var totals = [];
StoreSale.prototype.totals = function () {
    for (var i = 0; i <= storeHours.length; i++) {
        var sumOfSum = 0;
        for (var j = 0; j < store.length; j++) {
            var sum = store[j].storeCookies[i];
            sumOfSum += sum;
        };
        totals.push(sumOfSum);
    }
};

StoreSale.prototype.totalFun = function () {
    var container = document.getElementById("sales-table");
    var totalRowEl = document.createElement('tr');
    container.appendChild(totalRowEl);
    var tdEl = document.createElement('td');
    totalRowEl.appendChild(tdEl);
    tdEl.textContent = 'Total';
    for (var i = 0; i < this.storeCookies.length; i++) {
        var tdEl = document.createElement('td');
        totalRowEl.appendChild(tdEl);
        tdEl.textContent = totals[i];
    };

};

store[0].headerFunc();
for (var i = 0; i < store.length; i++) {
    store[i].salesPerHour();
    store[i].tableBody();
}
store[0].totals();
store[0].totalFun();