var MemoirModel = Backbone.Model.extend({
    initialize: function() {
        console.log('Memoir model initalized');
    }
});

var MemoirCollectionModel = Backbone.Collection.extend({
    initialize: function() {
        console.log("Memoir Collection Model initialized");
    },

    model: MemoirModel,

    url: "http://localhost:8080/memoir?user=",

    getData: function(user, cbOnMemoirRes) {
        var self = this;
        this.url = this.url + user;
        this.fetch({
            success: function(data) {
                console.log(data);
                cbOnMemoirRes({ success: true });
            },
            error: function(e) {
                console.error(e);
                cbOnMemoirRes({ success: false });
            }
        });
    }
});