"use strict";
var Experimentgroup = (function () {
    function Experimentgroup(id, experiment_id, name, users, configurations, totalDataitems) {
        this.id = id;
        this.name = name;
        this.configurations = configurations;
        this.totalDataitems = totalDataitems;
        this.users = users;
        this.experiment_id = experiment_id;
    }
    return Experimentgroup;
}());
exports.Experimentgroup = Experimentgroup;
//# sourceMappingURL=experimentgroup.js.map