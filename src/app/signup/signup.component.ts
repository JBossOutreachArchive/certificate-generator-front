import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {map,take,debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;
  constructor(private a: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      email:['',  Validators.required ,[CustomValidator.email(this.a)] ],
      name:['', Validators.required],
      password:['', Validators.required],
        description:''
    });

  }
  get email()
  {  return this.signupForm.get('email')  }

   get password(){   return this.signupForm.get('password') }
      get name(){   return this.signupForm.get('name') }


}
export class CustomValidator{
  static email(a:AngularFirestore)
  {
    return (control:AbstractControl)=>{
    const email= control.value.toLowerCase();
    return a.collection('users', ref=>ref.where('email', '==', email))
    .valueChanges().pipe(
      debounceTime(200),
      take(1),
      map(arr=>arr.length ?{emailAvailable:false}: null),
    )
  }
}
}
