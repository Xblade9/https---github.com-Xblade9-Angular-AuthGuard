import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLInputElement>;
  title = 'angular-forms';
  genders = ['Male', 'Female', 'Other'];
  SignUpForm!: FormGroup;
  fileName: any = '';

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.SignUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      midName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
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
  
}
