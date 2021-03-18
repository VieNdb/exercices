const machine = {
  // Complete here
  litersOfCoffee: 10,
  expresso: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    } else return false;
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    } else return false;
  },
  fillWithLitersOfCoffee: function (litter) {
    this.litersOfCoffee = this.litersOfCoffee + litter;
  },
};

module.exports = machine;
