import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>{{title}} - {{getCurrentDate()}}</h2>'
})  

export class StudentsComponent{
    title = "My List of Students"

    getTitle(): string {
        return this.title;
    }

    getCurrentDate(): string {
        const d = new Date();
        return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
    }   
}