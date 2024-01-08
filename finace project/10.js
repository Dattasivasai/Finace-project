// function toggleButtons() {
//   const inputDate = new Date(document.getElementById('inputDate').valueAsDate);

//   if (!inputDate) return;

//   const currentDate = new Date();
//   const generateButton = document.getElementById('generateButton');
//   const previousButton = document.getElementById('previousButton');

//   if (inputDate >= currentDate || inputDate.toDateString() === currentDate.toDateString()) {
//     generateButton.style.display = 'inline-block';
//     previousButton.style.display = 'none';
//   } else {
//     generateButton.style.display = 'none';
//     previousButton.style.display = 'inline-block';
//   }
// }

// function generatePage() {
//   const htmlContent =`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <title>Excel page</title>
//     <link rel="stylesheet" href="project.css">
//   </head>
//   <body>
//     <div>
//       <header>
//         <h2 class="logo" id="selectedDate"><b>Logo</b></h2>
//         <nav class="navigation">
//           <a href="project.html">Home</a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Contact</a>
//           <button class="Login">Login</button>
//         </nav>
//       </header>
//     </div>
//     <div>
//       <form id="userForm">
//         <label for="inputDate">DATE:</label>
//         <input type="date" id="inputDate" name="inputDate" onchange="displaySelectedDate()"><br><br>
  
//         <label for="input1">NAME:</label>
//         <input type="text" id="input1" name="input1"><br><br>
  
//         <label for="input2">AMOUNT:</label>
//         <input type="text" id="input2" name="input2"><br><br>
  
//         <input type="button" value="Submit" onclick="addToTable()">
//       </form>
  
//       <table id="excelTable">
//         <thead>
//           <tr>
//             <th>INDEX</th>
//             <th>NAME</th>
//             <th>AMOUNT</th>
//             <th>MODIFY</th>
//           </tr>
//         </thead>
//         <tbody id="tableBody"></tbody>
//       </table>
//     </div>
  
//     <script src="10.js"></script>
//     <script>
//       function addToTable() {
//         const input1 = document.getElementById('input1').value;
//         const input2 = document.getElementById('input2').value;
  
//         const tableBody = document.getElementById('tableBody');
//         const rowCount = tableBody.rows.length;
  
//         const newRow = tableBody.insertRow(-1);
//         const cellIndex = newRow.insertCell(0);
//         const cell1 = newRow.insertCell(1);
//         const cell2 = newRow.insertCell(2);
//         const cellModify = newRow.insertCell(3);
  
//         cellIndex.textContent = rowCount + 1;
//         cell1.textContent = input1;
//         cell2.textContent = input2;
  
//         const modifyButton = document.createElement('button');
//         modifyButton.textContent = 'Modify';
//         modifyButton.onclick = function() {
//           const row = this.parentNode.parentNode;
//           const name = row.cells[1].textContent;
//           const amount = row.cells[2].textContent;
  
//           document.getElementById('input1').value = name;
//           document.getElementById('input2').value = amount;
  
//           const saveButton = document.createElement('button');
//           saveButton.textContent = 'Save';
//           saveButton.onclick = function() {
//             row.cells[1].textContent = document.getElementById('input1').value;
//             row.cells[2].textContent = document.getElementById('input2').value;
//             cellModify.innerHTML = '';
//             cellModify.appendChild(modifyButton);
//             clearInputs();
//             document.getElementById('input1').focus();
//           };
//           cellModify.innerHTML = '';
//           cellModify.appendChild(saveButton);
//         };
//         cellModify.appendChild(modifyButton);
  
//         clearInputs();
//         document.getElementById('input1').focus();
//         return false;
//       }
  
//       function displaySelectedDate() {
//         const selectedDate = document.getElementById('inputDate').value;
//         document.getElementById('selectedDate').textContent = Selected Date: {selectedDate};
//       }
  
//       // Event listeners for Enter key press in input fields
//       document.getElementById('input1').addEventListener('keyup', function(event) {
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           document.getElementById('input2').focus();
//         }
//       });
  
//       document.getElementById('input2').addEventListener('keyup', function(event) {
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           addToTable();
//         }
//       });
  
//       // Function to clear inputs
//       function clearInputs() {
//         document.getElementById('input1').value = '';
//         document.getElementById('input2').value = '';
//       }
//     </script>
//   </body>
//   </html>
//  `;document.write(htmlContent);
// }

// function generatePreviousPage() {
//   const htmlContent =`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <title>Excel page</title>
//     <link rel="stylesheet" href="project.css">
//   </head>
//   <body>
//     <div>
//       <header>
//         <h2 class="logo" id="selectedDate"><b>Logo</b></h2>
//         <nav class="navigation">
//           <a href="project.html">Home</a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Contact</a>
//           <button class="Login">Login</button>
//         </nav>
//       </header>
//     </div>
//     <div>
//       <form id="userForm">
//         <label for="inputDate">DATE:</label>
//         <input type="date" id="inputDate" name="inputDate" onchange="displaySelectedDate()"><br><br>
  
//         <label for="input1">NAME:</label>
//         <input type="text" id="input1" name="input1"><br><br>
  
//         <label for="input2">AMOUNT:</label>
//         <input type="text" id="input2" name="input2"><br><br>
  
//         <input type="button" value="Submit" onclick="addToTable()">
//       </form>
  
//       <table id="excelTable">
//         <thead>
//           <tr>
//             <th>INDEX</th>
//             <th>NAME</th>
//             <th>AMOUNT</th>
//             <th>MODIFY</th>
//           </tr>
//         </thead>
//         <tbody id="tableBody"></tbody>
//       </table>
//     </div>
  
//     <script src="10.js"></script>
//     <script>
//       function addToTable() {
//         const input1 = document.getElementById('input1').value;
//         const input2 = document.getElementById('input2').value;
  
//         const tableBody = document.getElementById('tableBody');
//         const rowCount = tableBody.rows.length;
  
//         const newRow = tableBody.insertRow(-1);
//         const cellIndex = newRow.insertCell(0);
//         const cell1 = newRow.insertCell(1);
//         const cell2 = newRow.insertCell(2);
//         const cellModify = newRow.insertCell(3);
  
//         cellIndex.textContent = rowCount + 1;
//         cell1.textContent = input1;
//         cell2.textContent = input2;
  
//         const modifyButton = document.createElement('button');
//         modifyButton.textContent = 'Modify';
//         modifyButton.onclick = function() {
//           const row = this.parentNode.parentNode;
//           const name = row.cells[1].textContent;
//           const amount = row.cells[2].textContent;
  
//           document.getElementById('input1').value = name;
//           document.getElementById('input2').value = amount;
  
//           const saveButton = document.createElement('button');
//           saveButton.textContent = 'Save';
//           saveButton.onclick = function() {
//             row.cells[1].textContent = document.getElementById('input1').value;
//             row.cells[2].textContent = document.getElementById('input2').value;
//             cellModify.innerHTML = '';
//             cellModify.appendChild(modifyButton);
//             clearInputs();
//             document.getElementById('input1').focus();
//           };
//           cellModify.innerHTML = '';
//           cellModify.appendChild(saveButton);
//         };
//         cellModify.appendChild(modifyButton);
  
//         clearInputs();
//         document.getElementById('input1').focus();
//         return false;
//       }
  
//       function displaySelectedDate() {
//         const selectedDate = document.getElementById('inputDate').value;
//         document.getElementById('selectedDate').textContent = Selected Date: {selectedDate};
//       }
  
//       // Event listeners for Enter key press in input fields
//       document.getElementById('input1').addEventListener('keyup', function(event) {
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           document.getElementById('input2').focus();
//         }
//       });
  
//       document.getElementById('input2').addEventListener('keyup', function(event) {
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           addToTable();
//         }
//       });
  
//       // Function to clear inputs
//       function clearInputs() {
//         document.getElementById('input1').value = '';
//         document.getElementById('input2').value = '';
//       }
//     </script>
//   </body>
//   </html>
  
//   `;
//   document.write(htmlContent);
// }

function toggleButtons() {
    const inputDate = new Date(document.getElementById('inputDate').valueAsDate);
  
    if (!inputDate) return;
  
    const currentDate = new Date();
    const generateButton = document.getElementById('generateButton');
    const previousButton = document.getElementById('previousButton');
  
    if (inputDate >= currentDate || inputDate.toDateString() === currentDate.toDateString()) {
      generateButton.style.display = 'inline-block';
      previousButton.style.display = 'none';
    } else {
      generateButton.style.display = 'none';
      previousButton.style.display = 'inline-block';
    }
  }
  
  function generatePage() {
    window.location.href = 'file:///D:/algo/project/project.html';
  }
  
  function generatePreviousPage() {
    window.location.href = 'file:///D:/algo/project/project.html';
  }
  