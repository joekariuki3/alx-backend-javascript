// object interface
interface Teacher{
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number;
	location: string;
	[propName: string]: any;
}

// object interface that extends another one
interface Directors extends Teacher{
	numberOfReports: number;
}

// function interface
interface printTeacherFunction{
	(fName: string, lName:string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName) {
	return (`${firstName[0]}. ${lastName}`)
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
};

export { printTeacher, StudentClass };
