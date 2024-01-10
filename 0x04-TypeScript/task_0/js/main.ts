interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Alice",
	lastName: "Kimani",
	age: 22,
	location:"Queensland"
}
const student2: Student = {
	firstName: "Stephen",
	lastName: "Williams",
	age: 27,
	location:"Adelide"
}

const studentsList: Student[] = [student1, student2]

// Render table
const table = document.createElement("table");
const headerRow = table.insertRow(0);

// Add header cells
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
