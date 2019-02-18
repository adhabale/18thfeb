import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-sanction-review',
  templateUrl: './sanction-review.component.html',
  styleUrls: ['./sanction-review.component.css']
})
export class SanctionReviewComponent implements OnInit {

  formData:FormGroup
  @Input() masterData;


  constructor() { }

  ngOnInit() {
    
  this.onChanges();
  }

     get sanctionActivityType() {
    return this.masterData.get('sanctionActivityType')
  }
  get policyType() {
    return this.masterData.get('policyType')
  }
  get sanctionFormType() {
    return this.masterData.get('sanctionFormType')
  }
  get sanctionedCountry() {
    return this.masterData.get('sanctionedCountry')
  }
  get claimDate() {
    return this.masterData.get('claimDate')
  }
   get claimDetails() {
    return this.masterData.get('claimDetails')
  }
    get policyNumber() {
    return this.masterData.get('policyNumber')
  }
  

    onChanges(): void {
  this.masterData.valueChanges.subscribe(val => {
        console.log("8888888888888888");  console.log(val)
  });
  
}


}
