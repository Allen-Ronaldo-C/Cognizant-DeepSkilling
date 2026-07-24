import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  studentName = "Allen Ronaldo";
  college = "R.M.K College of Engineering and Technology";
  department = "ECE";
  year = 4;

  enteredName = "";

  imageUrl = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif";
  buttonText = "Register Course";
  isDisabled = false;
  isPlaced = false;
  courses = [
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "Microservices"
  ];

  today = new Date();

  price = 1999;

  student = {
    name: "Allen Ronaldo",
    department: "ECE"
  };

  serviceStudent = '';

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.serviceStudent = this.studentService.getStudentName();
  }

  registerCourse() {
    alert("🎉 Course Registered Successfully!");
    this.isDisabled = true;
    this.buttonText = "Registered";
  }

}
