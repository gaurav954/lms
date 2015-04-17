var afterLogin = function(data) {
    console.log(data);
    $(".loginBlock").css('display', 'none');
    $('#user').html(data.userId);
    $('.navlook').css('display', 'inherit');
}

var loginFailed = function() {
    $(".invalid").css("display", "inherit");
    appRouter.navigate("", true);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

var createMyLeaveWrapper = function() {
    user = $("#username").val();
    $(".applyleave_container").css("display", "none");
    $(".memoir_container").css("display", "none");
    $('.lms_right').css("display", "inherit");

    this.createMyLeave = function(user) {
        this.myLeaveModel = new MyLeaveModel();        
        this.myLeaveModel.getData(user,this.onMyLeaveRes.bind(this));
    }

    this.onMyLeaveRes = function(res) {
        if (res.success) {
            console.log(this.myLeaveModel);
            this.myLeaveView = new MyLeaveView({ model: this.myLeaveModel });
            this.myLeaveView.render();
        }
    }
    this.createMyLeave(user);
}

var createMemoirWrapper = function() {
    user = $("#username").val();
    $('.lms_right').css("display", "none");
    $('.applyleave_container').css("display", "none");
    $(".memoir_container").css("display", "inherit");

    this.createMemoir = function(user) {
        this.memoirModel = new MemoirCollectionModel();        
        this.memoirModel.getData(user, this.onMemoirRes.bind(this));                    
    }

    this.onMemoirRes = function(res) {
        if (res.success) {
            console.log(this.memoirModel);
            this.memoirView = new MemoirView({ model: this.memoirModel });
            this.memoirView.render();
        }
    }
    this.createMemoir(user);    
}

var createApplyLeaveWrapper = function() {
    user = $("#username").val();
    $('.lms_right').css("display", "none");
    $(".memoir_container").css("display", "none");
    $(".applyleave_container").css("display", "inherit");
    this.applyLeaveView = null;

    this.createApplyLeave = function(user) {   
        this.applyLeaveView = new ApplyLeaveView();
        this.applyLeaveView.on('clickSubmit', this.onSubmitClick.bind(this));
        this.applyLeaveView.render(user);
    }

    this.onSubmitClick = function(leaveInfo) {
        console.log(leaveInfo);
        $.ajax({
            url: "http://localhost:8080/newLeave",
            type: "POST",
            data: leaveInfo,
            dataType: 'json',
            success: function(e) {
                alert('Leave submitted successfully');
                $(".lms_container").css("display", "none");
                appRouter.navigate('LMS', { trigger: true });
            },
            error: function(e) { console.log("Error in sending the data " + Error.msg) }
        });


    }
    this.createApplyLeave(user);
}