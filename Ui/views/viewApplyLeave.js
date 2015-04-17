var ApplyLeaveView = Backbone.View.extend({
    el: ".applyleave_container",
    events: {
        'click #submitNewLeave': 'handleClick'
    },
    utils: new Utils(),

    initialize: function() {
        console.log("ApplyLeave view initialized");
    },

    render: function(user) {
        this.utils.loadTemplate("newleave.tpl", this.onNewLeaveLoaded.bind(this));
        this.user = user;
    },

    handleClick: function(e) {
        e.preventDefault();
        if (e.handled !== true) { //Checking for the event whether it has occurred or not.
            e.handled = true; // Basically setting value that the current event has occurred.
            this.sendLeave();
        }
    },

    sendLeave: function() {
        var draft = null;
        var leaveType = $('#leavetype').val();
        var leaveFrom = $('#dpd1').val();
        var leaveTo = $('#dpd2').val();
        var noOfDays = $('#numOfDays').val();
        var dateOfApply = $('#currentDate').val();
        var authorizer = $('#authorizer').val();
        var emailId = $('#emailId').val();
        var phone = $('#mobNumber').val();
        var reason = $('#reason').val();

        var validateOk = function() {
            var leaveForm = {
                'applicant': this.user,
                'typeOfLeave ': leaveType,
                'leaveFrom': leaveFrom,
                'leaveTo': leaveTo,
                'noOfDays': noOfDays,
                'dateOfApply': dateOfApply,
                'authorizer': authorizer,
                'emailId': emailId,
                'phone': phone,
                'reason': reason
            }            
            return leaveForm;
        }

        function validate() {
            var correct = true;

            if (leaveType == 'default') {
                $('#errSel').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errSel').css('display', 'none');
            }

            if (leaveFrom == '') {
                $('#errFDate').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errFDate').css('display', 'none');
            }

            if (leaveTo == '') {
                $('#errTDate').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errTDate').css('display', 'none');
            }

            if (emailId == '') {
                $('#errEmail').css('display', 'inherit');
                correct = false;
            }
            else if (emailId.indexOf('@') == -1) {
                $('#errEmail').css('display', 'inherit');
                correct = false;
            }
            else if (emailId.lastIndexOf('.') < emailId.indexOf('@')) {
                $('#errEmail').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errEmail').css('display', 'none');
            }

            if (phone == '') {
                $('#errPhone').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errPhone').css('display', 'none');
            }

            if (reason == '') {
                $('#errReason').css('display', 'inherit');
                correct = false;
            }
            else {
                $('#errReason').css('display', 'none');
            }

            if (correct == true) {
                $('.errorLine').css('display', 'none');
                draft = validateOk();
            }
            else {
                $('.errorLine').css('display', 'inherit');
                return;
            }
        }

        validate();
        if (draft != null) {
            this.trigger('clickSubmit', draft);
        }
    },

    onNewLeaveLoaded: function(view) {
        var template = $.tmpl(view);
        $(this.el).empty();
        $(this.el).html(template);


        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = $('#dpd1').datepicker({
            format: 'dd/mm/yyyy',
            onRender: function(date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
                var newDate = new Date(ev.date)
                newDate.setDate(newDate.getDate());
                checkout.setValue(newDate);
            }
            checkin.hide();
            $('#dpd2')[0].focus();
        }).data('datepicker');
        var checkout = $('#dpd2').datepicker({
            format: 'dd/mm/yyyy',
            onRender: function(date) {
                return date.valueOf() < checkin.date.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
            checkout.hide();
            var start = $('#dpd1').val();
            var stop = $('#dpd2').val();
            var s = dateformat(start);
            var t = dateformat(stop);
            var start_date = new Date(s);
            var stop_date = new Date(t);
            var diff = ((stop_date - start_date) / (1000 * 60 * 60 * 24)) + 1;
            $('#numOfDays').val(diff);
        }).data('datepicker');

        var dateformat = function(date) {
            var str1 = date.slice(0, 2);
            var str2 = date.slice(3, 5);
            var str3 = date.slice(6, 10);
            var newDateFormat = str2 + '/' + str1 + '/' + str3;
            return newDateFormat;
        }

        var day = nowTemp.getDate();
        var month = nowTemp.getMonth();
        var year = nowTemp.getFullYear();
        var fullDate = day + '/' + (month + 1) + '/' + year;
        document.getElementById("currentDate").value = fullDate;
    }
});