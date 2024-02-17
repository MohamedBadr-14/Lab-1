function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click' , deleteEmployee) //event listener for delete button
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
submit = document.getElementsByClassName("btn-primary")[0]
submit.addEventListener('click' , createEmployee)

// TODO
// add event listener to delete button

// TODO
function createEmployee (e){
  e.preventDefault();
  // get data from input field
  empName = document.getElementById("name").value;
  empId = document.getElementById("id").value;
  // send data to BE
  fetch(`http://localhost:3000/api/v1/employee/?id=${empId}&name=${empName}` , {
    method : "post"
  })
  .then(() => {
  // call fetchEmployees
  fetchEmployees()
  });
}

// TODO
function deleteEmployee (e){
  // get id
  row = e.target.closest('tr')
  id = row.children[0].innerHTML
  // send id to BE
  fetch("http://localhost:3000/api/v1/employee/" + id, {
    method : "delete"
  })
  .then(() => {
  // call fetchEmployees
  fetchEmployees()
  });
}

fetchEmployees()
