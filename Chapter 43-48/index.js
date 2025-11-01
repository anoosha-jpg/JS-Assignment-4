// Events 

// Question 1
// Show an alert box on click on a link.

function showAlert(){
    alert("Javascript connected successfully! ");
}

// Question 2
// Display some Mobile images in browser. On click on an image Show the message in alert to user.

function showMsg(){
    alert("Thanks for purchasing a phone from us");
}

// Question 3
// Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

var students = [
    { name: "Ali", class: 10 },
    { name: "Sara", class: 9 },
    { name: "Usman", class: 8 },
    { name: "Hina", class: 10 },
    { name: "Ahmed", class: 9 },
];

var table = document.getElementById("studentTable");

students.forEach((student, index) => {
    var row = table.insertRow();
    row.insertCell(0).innerText = index;
    row.insertCell(1).innerText = student.name;
    row.insertCell(2).innerText = student.class;

    var deleteCell = row.insertCell(3);
    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function() {
    table.deleteRow(row.rowIndex);
    };
    deleteCell.appendChild(btn);
});

