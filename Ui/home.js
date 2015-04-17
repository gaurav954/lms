var App_Router = Backbone.Router.extend({
    routes: {
        "login": "home",
        'LMS': 'showLms',
        'Lms_Home': "LmsHome",
        'my_leave': "my_leave",
        'apply_leave': 'applyLeave',
        'memoir': 'show_memoir',
        'logout': 'signOut'
    },

    home: function(event) {
        //$("#submitLogin").on("click", function() {
        var u = $("#username").val();
        var v = $("#password").val();
        var userData = {
            username: u,
            password: v
        };

        var info = JSON.stringify(userData);

        $.ajax({
            url: "http://localhost:8080/login",
            type: "GET",
            data: { jsonData: info },
            dataType: 'json',
            success: function(data) {
                console.log(data.userId);
                appRouter.navigate('user=' + data.userId, true, data);
                afterLogin(data);
            },

            error: function(e) {
                loginFailed();
            }
        });
        // });
    },

    showLms: function() {
        $('.lmsHome').css('display', 'inherit');
        $('#enterLms').on('click', function() {
            appRouter.navigate('Lms_Home', { trigger: true });
            $(".lmsHome").css('display', 'none');
        });
    },

    LmsHome: function() {
        $(".lms_container").css('display', 'inherit');
        createMyLeaveWrapper();
    },

    my_leave: function() {
        createMyLeaveWrapper();
    },

    applyLeave: function() {
        createApplyLeaveWrapper();
    },

    show_memoir: function() {
        createMemoirWrapper();
    },

    signOut: function() {
        $('.lms_container').css('display', 'none');
        $('.lmsHome').css('display', 'none');
        $('.navlook').css('display', 'none');
        $('.loginBlock').css('display', 'inherit');
        $('#user').html('User');
        $("#username").val('');
        $("#password").val('');
    }
});

var user = null;
var appRouter = new App_Router();
Backbone.history.start();