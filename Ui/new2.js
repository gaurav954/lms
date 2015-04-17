<div class='applyleave_header'>
  <h3>New Leave Request</h3>
</div>

<div class="applycontainerleft">
  <div class='row'>
    <label>Leave Type:</label>
    <select id="leavetype">
      <option value="default" selected="selected">Select Leave Type</option>
      <option value="eL">Earned Leave</option>
      <option value="sL">Sick Leave</option>
      <option value="cL">Compensatory Leave</option>
      <option value="lWP">Leave Without Pay </option>
      <option value="hW">Holiday Worked</option>
      <option value="pTOff">Paid Time Off</option>
      <option value="wFHome">Work From Home</option>
      <option value="pL">Paternity Leave</option>
      <option value="bL">Bereavement Leave</option>
      <option value="wL">Wedding Day Leave</option>
    </select>
  </div>

  <div class='row'>
    <label>From Date:</label>
    <div class="col-xs-5">
      <input type="text" class="form-control" size="17.5" id="dpd1" />
      <span class="glyphicon glyphicon-calendar"></span>
    </div>
  </div>

  <div class='row'>
    <label>To Date:</label>
    <div class="col-xs-5">
      <input type="text" class="form-control" size="17.5" id="dpd2" />
      <span class="glyphicon glyphicon-calendar"></span>
    </div>
  </div>

  <div class='row'>
    <label>No of Days:</label>
    <input id="numOfDays" class="dates" size="17.5" type="text" readonly="readonly" value='Not Applicable'/>
  </div>

  <div class='row'>
    <label>Date:</label>
    <input id="currentDate" class="dates" size="17.5" type="text" readonly="readonly"/>
  </div>
</div>

<div class="applycontainerright">
    <div class='row'>
      <label>Authorizer: </label>
      <input value="Admin" id="authorizer" class="dates2" type="text" readonly="readonly" />
    </div>

    <div class='row'>
      <label>Email id: </label>
      <input id="emailId" class="contacts" type="email" name="userEmail" />
    </div>

    <div class='row'>
      <label>Phone: </label>
      <input id="mobNumber" class="contacts" type="text" />
    </div>

    <div class='reasonBlock'>
      <label style="float:left;">Reason: </label>
      <textarea rows="4" cols="22" id="reason"></textarea>
    </div>
</div>

<div class="submitLeaveRow">
    <button type="button" class="btn btn-warning subLeaveButtons" id="submitNewLeave">
      <span class="glyphicon glyphicon-ok"></span> Submit
    </button>

    <button type="button" class="btn btn-warning subLeaveButtons" id="submitNewLeaveLater">
      <span class="glyphicon glyphicon-time"></span> Submit Later
    </button>

    <button type="button" class="btn btn-warning subLeaveButtons" id="cancelLeave">
      <span class="glyphicon glyphicon-remove"></span> Cancel
    </button>
</div>


$.each(leaveForm, function() {
    $.each(this, function(name, value) {
        if (value == '') {
            alert("Data insufficient,some fields empty");
            return;
        }
    });
});

jQuery.each(leaveForm, function() {
    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
});

var check = isEmpty(leaveForm);
if (check === false) {
    this.trigger('clickSubmit', leaveForm);
    return;
}

else {
    alert("Data insufficient,some fields empty");
    return; 
}


memoir model

var MemoirModel = Backbone.Model.extend({
    initialize: function() {
        console.log('Memoir model initalized');
    },
   
    defaults: {
        requestDate: ''
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





    <!--<tr class='memoRow'>
      <td>${requestDate}</td>
      <td>${leaveType}</td>
      <td>${leaveFrom}</td>
      <td>${leaveTo}</td>
      <td>${days}</td>
      <td>${authorizer}</td>
      <td>${status}</td>
    </tr>

    <tr>
      <td>${requestDate}</td>
      <td>${leaveType}</td>
      <td>${leaveFrom}</td>
      <td>${leaveTo}</td>
      <td>${days}</td>
      <td>${authorizer}</td>
      <td>${status}</td>
    </tr>

    <tr>
      <td>${requestDate}</td>
      <td>${leaveType}</td>
      <td>${leaveFrom}</td>
      <td>${leaveTo}</td>
      <td>${days}</td>
      <td>${authorizer}</td>
      <td>${status}</td>
    </tr>

    <tr>
      <td>${requestDate}</td>
      <td>${leaveType}</td>
      <td>${leaveFrom}</td>
      <td>${leaveTo}</td>
      <td>${days}</td>
      <td>${authorizer}</td>
      <td>${status}</td>
    </tr>

    <tr>
      <td>${requestDate}</td>
      <td>${leaveType}</td>
      <td>${leaveFrom}</td>
      <td>${leaveTo}</td>
      <td>${days}</td>
      <td>${authorizer}</td>
      <td>${status}</td>
    </tr>-->
    
    
    
    
    <tr style="background: lightslategrey;">
        <th>Request Date</th>
        <th>Leave Type</th>
        <th>Leave From</th>
        <th>Leave To</th>
        <th>Days</th>
        <th>Authorizer</th>
        <th>Status</th>
      </tr>