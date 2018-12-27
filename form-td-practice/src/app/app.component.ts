import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formRef') form: NgForm;
  dropdown = ['basic', 'advanced', 'pro'];

  onSubmit(){
    console.log(this.form);
  }
}
