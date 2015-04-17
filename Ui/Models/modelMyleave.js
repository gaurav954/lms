var MyLeaveModel = Backbone.Model.extend({
    initialize: function() {
        console.log("My Leave Model initialized");
    },

    url: "http://localhost:8080/myleave?user=",

    getData: function(user, cbOnMyLeaveRes) {
        var self = this;
        this.url = this.url + user;
        this.fetch({
            success: function(data) {
                cbOnMyLeaveRes({ success: true });
            },
            error: function(e) {
                console.error(e);
                cbOnMyLeaveRes({ success: false });
            }
        });
    }
});