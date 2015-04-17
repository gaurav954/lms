$(document).ready(function() {

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
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
        format: 'dd/mm/yyyy',
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
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
});