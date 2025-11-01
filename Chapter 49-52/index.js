// Events

// Question 1
// Create a signup form and display form data in your web page on submission

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("result").innerHTML =
        "Name:" + name + "<br>Email:" + email + "<br>Password:" + password;
});

// Question 2
// Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look.
// When user clicks on “Read more” button, full detail of that particular item will be displayed.

function readMore() {
    var fullPararaph = `
  people, animals, even plants. One day, while walking home, he saw an injured bird lying on the road. Without hesitation, he picked it up gently and cared for it until it could fly again.
  A few weeks later, a terrible storm hit the village. Arif was stuck outside and couldn’t find his way home. Suddenly, a flock of birds appeared, chirping loudly and flying in circles above him. They guided him safely back to his house.
  From that day on, Arif learned that every act of kindness always finds its way back to you — sometimes in ways you least expect.
  <a href="JavaScript:void(0)" onclick="readLess()"  >Read less</a> `
    var para = document.getElementById("para");
    // para.innerText = fullPararaph;
    para.innerHTML = fullPararaph;

}

function readLess() {
    var halfPara = `
    Once upon a time, in a small village, there lived a boy named Arif. He was known for being kind to everyone
  <a href="JavaScript:void(0)" onclick="readMore()"  >Read more...</a> `
    var para = document.getElementById("para");
    para.innerHTML = halfPara;

}

// Question 3
// In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and 
// show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will appear with the values of that row.

var form = document.getElementById("stuForm");
var tableBody = document.querySelector("#stuTable tbody");
var editBox = document.getElementById("editSection");
var saveBtn = document.getElementById("updBtn");

var editRow = null;

// Add student
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var name = document.getElementById("stuName").value;
  var age = document.getElementById("stuAge").value;
  var grade = document.getElementById("stuGrade").value;

  var row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${grade}</td>
    <td>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);
  form.reset();
});

// Delete or Edit record
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }

  if (e.target.classList.contains("edit")) {
    editRow = e.target.closest("tr");
    document.getElementById("updName").value = editRow.children[0].textContent;
    document.getElementById("updAge").value = editRow.children[1].textContent;
    document.getElementById("updGrade").value = editRow.children[2].textContent;
    editBox.classList.remove("hide");
  }
});

// Save edits
saveBtn.addEventListener("click", () => {
  editRow.children[0].textContent = document.getElementById("updName").value;
  editRow.children[1].textContent = document.getElementById("updAge").value;
  editRow.children[2].textContent = document.getElementById("updGrade").value;

  editBox.classList.add("hide");
});

