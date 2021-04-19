const developer = {
  isCoding: false,
  daysCoding: 0,
  projectStatus: "waiting for a project",
  codeLinesProduced: 0,
  linesNeeded: 0,
  maxDelay: 0,

  initiateProject: function () {
    this.isCoding = true;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    return this;
  },

  startProject: function (linesNeeded, maxDelay) {
    this.linesNeeded += linesNeeded;
    this.maxDelay += maxDelay;
    return this;
  },
  codeForOneDay: function () {
    this.codeLinesProduced += 2;
    this.daysCoding += 1;
    if (this.daysCoding % 5 === 0) {
      this.daysCoding += 3;
    }
    return this;
  },
};

module.exports = { developer };
