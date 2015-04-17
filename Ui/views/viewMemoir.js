var memoView = Backbone.View.extend({
    tagName: 'tr',
    
    utils: new Utils(),

    initialize: function() {
        console.log('memoView initialized');
        this.render();
    },

    render: function() {
        this.utils.loadTemplate("memoirRow.tpl", this.onMemoirRowLoaded.bind(this));
    },

    onMemoirRowLoaded: function(response) {
        var templateRow = $.tmpl(response, this.model.attributes);
        $(this.el).empty();
        $(this.el).html(templateRow);
        $(this.el).appendTo($('#tableMemoir'));
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});

var MemoirView = Backbone.View.extend({
    el: '.memoir_container',
    className: "table table-bordered",
    utils: new Utils(),
    memoListView: null,

    initialize: function() {
        console.log("Memoir View initialized");
        this.memoListView = new Backbone.CollectionView({
            el: '.memoir_container',            
            modelView: memoView,
            collection: this.model
        });
    },

    render: function() {
        this.utils.loadTemplate("memoir.tpl", this.onMemoirLoaded.bind(this));
        this.memoListView.render();
    },

    onMemoirLoaded: function(data) {
        var template = $.tmpl(data);
        $(this.el).empty();
        $(this.el).html(template);
        $(this.el).appendTo($('.memoir_container'));
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});