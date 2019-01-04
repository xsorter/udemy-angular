import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  customForm: FormGroup;
  statusArray = ['Stable', 'Critical', 'Finished'];
  forbiddenName = 'Test';
  
  ngOnInit(){
    this.customForm = new FormGroup({
      'project': new FormControl(null, [Validators.required], this.forbiddenNameValidation.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })
  }b

  onSubmit(){
    console.log(this.customForm.value)
  }

  /*forbiddenNameValidation(control: FormControl): {[s:string]:boolean} {
    if(this.forbiddenName == control.value){
      return {nameIsForbidden: true}
    }
    return null
  }*/

  forbiddenNameValidation(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if(control.value == this.forbiddenName){
          resolve({nameIsForbidden: true})
        }else{
          resolve(null)
        }
      } ,1500)
    });
    return promise
  }
}
