import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularMaterial';
  public form: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formInit();
  }

  ngOnInit(): void {
  }

  private formInit(){
    this.form = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      username: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  public submitForm(){
    console.log(this.form);
    console.log(this.form.getRawValue())
  }
}
