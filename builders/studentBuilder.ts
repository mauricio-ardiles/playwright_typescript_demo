import { Hobbies, Gender } from "../enums/studentEnum";

class Student {
    private firstName: string;
    private lastName: string;
    private email: string;
    private gender: Gender;
    private mobile: string; // string because the object accepts string too
    private dateOfBirthday: string;
    private subjects: string;
    private hobbies: Hobbies[];
    private picture: string;
    private currentAddress: string;
    private state: string;
    private city: string;

    constructor( firstName: string, lastName: string, email: string, gender: Gender, mobile: string, dateOfBirthday: string, subjects: string, hobbies: Hobbies[], picture: string, currentAddress: string, state: string, city: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.mobile = mobile;
        this.dateOfBirthday = dateOfBirthday;
        this.subjects = subjects;
        this.hobbies = hobbies;
        this.picture = picture;
        this.currentAddress = currentAddress;
        this.state = state;
        this.city = city;
    }
}

interface IStudentBuilder {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    mobile: string; // string because the object accepts string too
    dateOfBirthday: string;
    subjects: string;
    hobbies: Hobbies[];
    picture: string;
    currentAddress: string;
    state: string;
    city: string;

    setFirstName(firstName: string) : IStudentBuilder;
    setLastName(lastName: string) : IStudentBuilder;
    setEmail(email: string) : IStudentBuilder;
    setGender(gender: Gender) : IStudentBuilder;
    setMobile(mobile: string) : IStudentBuilder;
    setDateOfBirthday(dateOfBirthday: string) : IStudentBuilder;
    setSubjects(subjects: string) : IStudentBuilder;
    setHobbies(hobbies: Hobbies[]) : IStudentBuilder;
    setPicture(picture: string) : IStudentBuilder;
    setCurrentAddress(currentAddress: string) : IStudentBuilder;
    setState(state: string) : IStudentBuilder;
    setCity(city: string) : IStudentBuilder;
    build(): Student;
}

export class StudentBuilder implements IStudentBuilder {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    mobile: string;
    dateOfBirthday: string;
    subjects: string;
    hobbies: Hobbies[];
    picture: string;
    currentAddress: string;
    state: string;
    city: string;


    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.gender = Gender.Empty;
        this.mobile = "";
        this.dateOfBirthday = "";
        this.subjects = "";
        this.hobbies = [];
        this.picture = "";
        this.currentAddress = "";
        this.state = "";
        this.city = "";
    }

    reset(): void {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.gender = Gender.Empty;
        this.mobile = "";
        this.dateOfBirthday = "";
        this.subjects = "";
        this.hobbies = [];
        this.picture = "";
        this.currentAddress = "";
        this.state = "";
        this.city = "";
    }

    setFirstName(firstName: string): IStudentBuilder {
        this.firstName = firstName;
        return this;
    }
    setLastName(lastName: string): IStudentBuilder {
        this.lastName = lastName;
        return this;
    }
    setEmail(email: string): IStudentBuilder {
        this.email = email;
        return this;
    }
    setGender(gender: Gender): IStudentBuilder {
        this.gender = gender;
        return this;
    }
    setMobile(mobile: string): IStudentBuilder {
        this.mobile = mobile;
        return this;
    }
    setDateOfBirthday(dateOfBirthday: string): IStudentBuilder {
        this.dateOfBirthday = dateOfBirthday;
        return this;
    }
    setSubjects(subjects: string): IStudentBuilder {
        this.subjects = subjects;
        return this;
    }
    setHobbies(hobbies: Hobbies[]): IStudentBuilder {
        this.hobbies = hobbies;
        return this;
    }
    setPicture(picture: string): IStudentBuilder {
        this.picture = picture
        return this;
    }
    setCurrentAddress(currentAddress: string): IStudentBuilder {
        this.currentAddress = currentAddress;
        return this;
    }
    setState(state: string): IStudentBuilder {
        this.state = state;
        return this;
    }
    setCity(city: string): IStudentBuilder {
        this.city = city;
        return this;
    }
    build(): Student {
        const student = new Student(this.firstName, this.lastName, this.email, this.gender, this.mobile, this.dateOfBirthday, this.subjects, this.hobbies, this.picture, this.currentAddress, this.state, this.city);
        this.reset();
        return student;
    }

}


