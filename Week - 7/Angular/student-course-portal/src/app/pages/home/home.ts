import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

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

  registerCourse() {
    alert("🎉 Course Registered Successfully!");
    this.isDisabled = true;
    this.buttonText = "Registered";

  }

}
