import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary">save</button>
        `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}