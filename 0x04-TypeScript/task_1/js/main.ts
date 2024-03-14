interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [propName: string]: any; // Index signature for dynamic properties
}

// Extend Teacher interface to include Directors
interface Director extends Teacher {
  numberOfReports: number;
}

// Define a function type for printing teacher's name
type PrintTeacherFunction = (firstName: string, lastName: string) => string;

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Define a class constructor interface for StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for StudentClass
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement StudentClass using the StudentConstructor interface
const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
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

export { printTeacher, StudentClass, Teacher, Director };
