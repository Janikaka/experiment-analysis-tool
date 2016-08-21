"use strict";
var Dataitem = (function () {
    function Dataitem(id, experimentgroup_id, key, value, startDatetime, endDatetime, dataitems, user_id) {
        this.id = id;
        this.experimentgroup_id = experimentgroup_id;
        this.user_id = user_id;
        this.startDatetime = startDatetime;
        this.endDatetime = endDatetime;
        this.key = key;
        this.value = value;
    }
    return Dataitem;
}());
exports.Dataitem = Dataitem;
//# sourceMappingURL=dataitem.js.map