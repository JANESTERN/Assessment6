import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-parcelform',
  templateUrl: './parcelform.component.html',
  styleUrls: ['./parcelform.component.css'],
  providers:[DisplayService]
})
export class ParcelformComponent implements OnInit {
  form!: FormGroup

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      destination:new FormControl(null, Validators.required),

    })
  } 
   constructor(displayparcel:DisplayService){

   }
  submitparcel(){

    
  }
  }


