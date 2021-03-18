// Complete and add needed car properties:
const car = {
  speed: 0,
  tempsDeConduite: 0,
  distanceParcourus: 0,
  valueOfSpeed: 0,
  start: function () {
    this.tempsDeConduite = 0;
    this.distanceParcourus = 0;
    this.valueOfSpeed = 0;
    return this;
  },
  changeSpeed: function (speed) {
    this.valueOfSpeed = speed;
    return this;
  },
  drive: function (minutes) {
    this.tempsDeConduite = minutes;
    this.distanceParcourus += (this.valueOfSpeed * this.tempsDeConduite) /60;
    return this;
  },
  showDistance: function () {
    console.log(`${this.distanceParcourus} Km`);
    return this;
  },

};

module.exports = car;
