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
    <span class="glyphicon glyphicon glyphicon-hand-left emptyField" id="errSel"></span>
  </div>

  <div class='row'>
    <label>From Date:</label>
    <div class="col-xs-5">
      <input type="text" class="form-control" size="17.5" id="dpd1"/>
      <span class="glyphicon glyphicon-calendar"></span>      
    </div>
    <span class="glyphicon glyphicon glyphicon-hand-left emptyField" id="errFDate"></span>
  </div>

  <div class='row'>
    <label>To Date:</label>
    <div class="col-xs-5">
      <input type="text" class="form-control" size="17.5" id="dpd2" />
      <span class="glyphicon glyphicon-calendar"></span>
    </div>
    <span class="glyphicon glyphicon glyphicon-hand-left emptyField" id="errTDate"></span>
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
      <span class="glyphicon glyphicon glyphicon-hand-left emptyFieldR" id="errEmail"></span>
    </div>

    <div class='row'>
      <label>Phone: </label>
      <input id="mobNumber" class="contacts" type="text" />
      <span class="glyphicon glyphicon glyphicon-hand-left emptyFieldR" id="errPhone"></span>
    </div>

    <div class='reasonBlock'>
      <label style="float:left;">Reason: </label>
      <textarea rows="4" cols="22" id="reason"></textarea>
      <span class="glyphicon glyphicon glyphicon-hand-left emptyFieldR" id="errReason"></span>
    </div>
</div>

<div class="submitLeaveRow">
    <button type="button" class="btn btn-warning subLeaveButtons" id="submitNewLeave">
      <span class="glyphicon glyphicon-ok"></span> Submit
    </button>

    <!--<button type="button" class="btn btn-warning subLeaveButtons" id="submitNewLeaveLater">
      <span class="glyphicon glyphicon-time"></span> Submit Later
    </button>-->

    <button type="button" class="btn btn-warning subLeaveButtons" id="cancelLeave">
      <span class="glyphicon glyphicon-remove"></span> Cancel
    </button>

  <p class="errorLine">Fields cannot be empty!<span class="glyphicon glyphicon glyphicon-hand-left"></span></p>
</div>