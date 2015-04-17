var MyLeaveView = Backbone.View.extend({
    el: "#myleave",
    tagName: 'table',
    className: 'table table-bordered',
    utils: new Utils(),
    initialize: function() {
        console.log("MyLeave view initialized");
    },

    render: function() {
        this.utils.loadTemplate("myleave.tpl", this.onMyLeaveLoaded.bind(this));
    },

    onMyLeaveLoaded: function(data) {
        var information = this.model.attributes;
        var template = $(data).tmpl(information);
        $(this.el).empty();
        $(this.el).html(template);
        $(this.el).find("table").addClass('table table-bordered tableView');
    },
    
    close: function() {
        this.remove();
        this.unbind();
    }
});