var rIndex,
table = document.getElementById("myTable");

function checkEmptyInput()
{
var isEmpty = false,
	empId = document.getElementById("empId").value,
	projectId = document.getElementById("projectId").value,
	dateFrom = document.getElementById("dateFrom").value;
	dateTo = document.getElementById("dateTo").value;

if(empId === ""){
	alert(" 'Employee ID' can not be empty");
	isEmpty = true;
}
else if(projectId === ""){
	alert(" 'Project ID' can not be empty");
	isEmpty = true;
}
else if(dateFrom === ""){
	alert(" 'Date From' can not be empty");
	isEmpty = true;
}
else if(dateTo === ""){
	alert(" 'Date To' can not be empty");
	isEmpty = true;
}
return isEmpty;
}


function addHtmlTableRow()
{


if(!checkEmptyInput()){
	var table = document.getElementById('myTable')
var newRow = table.insertRow(table.length),
	cell1 = newRow.insertCell(0),
	cell2 = newRow.insertCell(1),
	cell3 = newRow.insertCell(2),
	cell4 = newRow.insertCell(3),
	empId = document.getElementById("empId").value,
	projectId = document.getElementById("projectId").value,
	dateFrom = document.getElementById("dateFrom").value;
	dateTo = document.getElementById("dateTo").value;

cell1.innerHTML = empId;
cell2.innerHTML = projectId;
cell3.innerHTML = dateFrom;
cell4.innerHTML = dateTo;


selectedRowToInput();
}
}

function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
	table.rows[i].onclick = function()
	{

	  rIndex = this.rowIndex;
	  document.getElementById("empId").value = this.cells[0].innerHTML;
	  document.getElementById("projectId").value = this.cells[1].innerHTML;
	  document.getElementById("dateFrom").value = this.cells[2].innerHTML;
	  document.getElementById("dateTo").value = this.cells[3].innerHTML;
	};
}
}
selectedRowToInput();

function editHtmlTableSelectedRow()
{
var empId = document.getElementById("empId").value,
	projectId = document.getElementById("projectId").value,
	dateFrom = document.getElementById("dateFrom").value;
	dateTo = document.getElementById("dateTo").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = empId;
table.rows[rIndex].cells[1].innerHTML = projectId;
table.rows[rIndex].cells[2].innerHTML = dateFrom;
table.rows[rIndex].cells[3].innerHTML = dateTo;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("empId").value;
document.getElementById("projectId").value;
document.getElementById("dateFrom").value;
document.getElementById("dateTo").value;
}


  function checkTeam() 
	{
		var rows = document.querySelectorAll("[data-period]");
		rows = Array.from(rows);
		
		rows.forEach(e => e.parentNode.removeChild(e));
		
		rowsSorted = rows.sort(sortRows);
		
		rowsSorted.forEach(e => table.appendChild(e));
	};
	
	function sortRows(a, b)
	{
		return (parseInt(a.dataset.period) <= parseInt(b.dataset.period)) ? 1 : -1;
	}
  
