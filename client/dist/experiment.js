"use strict";
var Experiment = (function () {
    function Experiment(id, name, experimentgroups, totalDataitems, startDatetime, endDatetime, size, status) {
        this.id = id;
        this.name = name;
        this.experimentgroups = experimentgroups;
        this.totalDataitems = totalDataitems;
        this.startDatetime = startDatetime;
        this.endDatetime = endDatetime;
        this.size = size;
        this.status = status;
    }
    return Experiment;
}());
exports.Experiment = Experiment;
//# sourceMappingURL=experiment.js.map