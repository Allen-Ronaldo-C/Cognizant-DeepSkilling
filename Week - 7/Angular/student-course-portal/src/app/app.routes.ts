import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';
import { ReactiveForm } from './pages/reactive-form/reactive-form';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseList
  },
  {
    path: 'profile',
    component: StudentProfile
  },
  {
    path: 'reactive-form',
    component: ReactiveForm
  }
];