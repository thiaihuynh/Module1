class RequestOT {
    constructor(id, employee, requestDate, project, hour, manager, status) {
        this.id = id;
        this.employee = employee;
        this.requestDate = requestDate;
        this.project = project;
        this.hour = hour;
        this.manager = manager;
        this.status = status;
    }
}
  
var project = document.getElementById('otTime');
var requestArr = [];
const request_data = 0;

for (let i = 1; i <= 23; i++) {
    project.innerHTML += `
        <option value="${i}">${i}</option>`
}

function validate() {
    let requestDate = document.getElementById('requestDate').value;
    let user = document.getElementById('user').value;
    let project = document.getElementById('project').value;
    let otTime = document.getElementById('otTime').value;
    let manager = document.getElementById('approveUser').value;

    if (requestDate == "") {
        alert("Thiếu thông tin ngày đăng kì");
     }
     if (user == "" ){
        alert("Thiếu thông tin người đăng kì");
     } 
     if (project == "" ){
        alert("Thiếu thông tin dự án");
     }
     if (otTime == "" ){
        alert("Thiếu thông tin thời gian đăng kì tăng ca");
     }
     if (approveUser == "" ){
        alert("Thiếu thông tin người quản lí phê duyệt");
     }
        else {
            let id = (requestArr.length + 1);
            let request = new RequestOT(id, user, requestDate, project, otTime, manager, "Pending");
            requestArr.push(request);
            localStorage.setItem(request_data, JSON.stringify(requestArr));
            renderRequest();
        }
}

function renderRequest() {
    let tbRequest = document.getElementById('tbRequest');
    tbRequest.innerHTML = "";
    for (let i = 0; i < requestArr.length; i++) {
        let status = "";
        if (requestArr[i].status == 'Pending') {
            status = `<button class="btn btn-success" onclick="action(${requestArr[i].id}, 'approve')">Approved</button>
                        <button class="btn btn-danger" onclick="action(${requestArr[i].id}, 'reject')">Reject</button>`
        }
        tbRequest.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${requestArr[i].employee}</td>
                <td>${requestArr[i].requestDate}</td>
                <td>${requestArr[i].project}</td>
                <td>${requestArr[i].hour}</td>
                <td>${requestArr[i].manager}</td>
                <td>${requestArr[i].status}</td>
                <td>
                    ${status}
                </td>
            </tr>
        `; 
    }
}

function findRequestById(requestId) {
    for (let i = 0; i < requestArr.length; i++) {
        if (requestArr[i].id == requestId) {
            return requestArr[i];
        }
    }
    return null;
}

function action(id, action) {
    if (action == "approve") {
        let status = window.confirm("Are you sure to approve this request?");
        if (status == true) {
            let request = findRequestById(id);
            request.status = "Approved";
            localStorage.setItem(request_data, JSON.stringify(requestArr));
            renderRequest();
        }
    } else if (action == "reject") {
        let status = window.confirm("Are you sure to reject this request?");
        if (status == true) { 
            let request = findRequestById(id);
            request.status = "Reject";
            localStorage.setItem(request_data, JSON.stringify(requestArr));
            renderRequest();
        }
    }
}

function init() {
    if (localStorage.getItem(request_data) != null) {
        requestArr = JSON.parse(localStorage.getItem(request_data));
        renderRequest();
    }
}
init();
