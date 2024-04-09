import { Component } from '@angular/core';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLInputElement>;
  title = 'angular-forms';
  genders = ['Male', 'Female', 'Other'];
  SignUpForm!: FormGroup;
  fileName: any = '';
  control!: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.prefilledDetails();
    this.disabledFields()
  }

  createForm() {
    this.SignUpForm = this.fb.group({
      firstName: [ [Validators.required]],
      midName: [''],
      lastName: [Validators.required],
      email: ['', [Validators.email]],
      fileUpload: [''],
      gender: [null],
      dob: [''],
      mobNo: [''],
    });
  }

  saveForm() {
    if (this.SignUpForm.valid) {
      // console.log(this.SignUpForm.value);
      const dobISO = this.SignUpForm.value.dob;
      const dobDate = new Date(dobISO);

      const formattedDob = this.dateFormat(dobDate);
      this.SignUpForm.patchValue({
        dob: formattedDob,
      });
    } else {
      console.log('Form Not Valid');
    }
  }

  onFileSelected(event: Event) {
    // event.stopPropagation();
    // event.preventDefault()
    const fileInput = event.target as HTMLInputElement;
    const file: File | null = fileInput?.files?.[0] || null;
    if (file) {
      this.fileName = file?.name;
    }
  }

  // dateFormat(date: Date) {
  //   const d = new Date(date);
  //   const yy = d.getFullYear();
  //   const month = d.getMonth().toString();
  //   const mm = month === '10' ? month.padStart(2, '0') : month;
  //   const dd = d.getDate().toString();
  //   return `${mm}/${dd}/${yy}`;
  // }

  dateFormat(date: Date) {
    const d = new Date(date);
    const dd = d.getDate().toString().padStart(2, '0');
    const mm = (d.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it's zero-based
    const yy = d.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  // onUploadClick(event: Event) {
  //   event.stopPropagation;
  //   this.onFileSelected(event);
  // }

  prefilledDetails() {
    // control =['firstName']
    // for(const key of control){
    //  this.SignUpForm.controls[key].setValue('hello')
    // }

    if (this.SignUpForm.valid) {
      this.SignUpForm.patchValue({
        firstName: 'Paras',
        lastName: 'Joshi',
        email: 'test@gmail.com',
        gender: 'Male',
        mobNo: '9900998800',
      });
    }
  }

  disabledFields() {
    if(this.SignUpForm.valid){
      const keys =['firstName','lastName','email'];
      for(const key of keys){
        this.SignUpForm.controls[key].disable()
      }
    }
  }
}
