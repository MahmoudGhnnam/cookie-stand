
 'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    location: 'Seattle',
    minCus: 23,
    maxCus: 65,
    aveSale: 6.3,
    estimate: [],
    cusPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    salePerHour: function (min, max, avg) {
        for (var i = 0; i < hour.length; i++) {
            this.estimate[i] = Math.floor(this.cusPerHour(min, max) * avg);
        }
        return this.estimate;
    },
    render : function () {
        var total = 0;
        var container = document.querySelector("#sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = this.location.toUpperCase();
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ': ' + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i] + ' cookies.';
            total = total + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i];
        };
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total: ' + total + ' cookies.';
    },
};

seattle.render();


var tokyo = {
    location: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    aveSale: 1.2,
    estimate: [],
    cusPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    salePerHour: function (min, max, avg) {
        for (var i = 0; i < hour.length; i++) {
            this.estimate[i] = Math.floor(this.cusPerHour(min, max) * avg);
        }
        return this.estimate;
    },
    render : function () {
        var total = 0;
        var container = document.querySelector("#sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = this.location.toUpperCase();
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ': ' + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i] + ' cookies.';
            total = total + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i];
        };
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total: ' + total + ' cookies.';
    },
};

tokyo.render();

var dubai = {
    location: 'Dubai',
    minCus: 11,
    maxCus: 38,
    aveSale: 3.7,
    estimate: [],
    cusPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    salePerHour: function (min, max, avg) {
        for (var i = 0; i < hour.length; i++) {
            this.estimate[i] = Math.floor(this.cusPerHour(min, max) * avg);
        }
        return this.estimate;
    },
    render : function () {
        var total = 0;
        var container = document.querySelector("#sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = this.location.toUpperCase();
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ': ' + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i] + ' cookies.';
            total = total + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i];
        };
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total: ' + total + ' cookies.';
    },
};

dubai.render();

var paris = {
    location: 'Paris',
    minCus: 20,
    maxCus: 38,
    aveSale: 2.3,
    estimate: [],
    cusPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    salePerHour: function (min, max, avg) {
        for (var i = 0; i < hour.length; i++) {
            this.estimate[i] = Math.floor(this.cusPerHour(min, max) * avg);
        }
        return this.estimate;
    },
    render : function () {
        var total = 0;
        var container = document.querySelector("#sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = this.location.toUpperCase();
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ': ' + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i] + ' cookies.';
            total = total + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i];
        };
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total: ' + total + ' cookies.';
    },
};

paris.render();


var lima = {
    location: 'Lima',
    minCus: 2,
    maxCus: 16,
    aveSale: 4.6,
    estimate: [],
    cusPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    salePerHour: function (min, max, avg) {
        for (var i = 0; i < hour.length; i++) {
            this.estimate[i] = Math.floor(this.cusPerHour(min, max) * avg);
        }
        return this.estimate;
    },
    render : function () {
        var total = 0;
        var container = document.querySelector("#sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = this.location.toUpperCase();
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ': ' + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i] + ' cookies.';
            total = total + this.salePerHour(this.minCus, this.maxCus, this.aveSale)[i];
        };
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total: ' + total + ' cookies.';
    },
};

lima.render();
