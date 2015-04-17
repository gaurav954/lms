function Utils() {
}

Utils.prototype.loadTemplate = function(tplFileName, cnOnTemplateLoad) {
    var options = {
        url: tplFileName,
        type: "GET",
        success: function(data) {
            cnOnTemplateLoad(data);
        },
        error: function(e) { console.error(e) }
    }
    $.ajax(options);
}