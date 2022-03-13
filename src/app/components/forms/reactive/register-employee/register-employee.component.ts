import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  get formSkills() {
    return this.employeeForm.get('skills') as FormArray;
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPref: ['email'],
      email: ['', [Validators.required, Validators.email, domainCustomValidation]],
      skills: this.formBuilder.array([this.addSkills()])
    });
  }

  addSkills(): FormGroup {
    const skill = this.formBuilder.group({
      skillName: ['', Validators.required],
      experience: ['', Validators.required],
      proficiency: ['', Validators.required]
    });
    return skill;
  }

  addNewSkill() {
    (this.employeeForm.get('skills') as FormArray).push(this.addSkills());
  }

  saveEmployee(form: FormGroup) {
    console.log(form.value);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.get('fullName').value);
  }

  onContactPrefChange(value: string) {
    console.log(value);
  }

  loadData() {
    const obj = {
      fullName: 'Ankush Setiya',
      contactPref: 'phone',
      email: 'ankush@gmail.com',
      skills: {
        skillName: 'Angular',
        experience: 5,
        proficiency: 'expert'
      }
    };

    this.employeeForm.setValue(obj);   // must supply all controls
  }

  updateValues() {
    const obj = {
      fullName: 'Mishti Setiya',
      email: 'test@hotmail.com'
    }

    this.employeeForm.patchValue(obj);


    // looping through FormArray
    const skills = this.employeeForm.get('skills') as FormArray;
    for (const control of skills.controls) {
      if (control instanceof FormControl) {
        console.log('control is a FormControl');
      }
      if (control instanceof FormArray) {
        console.log('control is a FormArray');
      }
      if (control instanceof FormGroup) {
        console.log('control is a FormGroup');
      }
    }


  }

}

function domainCustomValidation(control: AbstractControl): { [key: string]: any } | null {
  const email = control.value;
  const emailDomain = email.substring(email.lastIndexOf('@') + 1);
  if (emailDomain.toLowerCase() === 'gmail.com') {
    return null; // valid email domain
  } else  {
    return { 'domain': true };   // invalid email domain
  }
}
