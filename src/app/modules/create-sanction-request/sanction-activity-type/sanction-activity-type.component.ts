import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sanction-activity-type',
  templateUrl: './sanction-activity-type.component.html',
  styleUrls: ['./sanction-activity-type.component.scss']
})
export class SanctionActivityTypeComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) {}
sanctionActivityGroup:FormGroup;
  @Output() sanctionActivityTypeValue= new EventEmitter<any>();

  ngOnInit() {
  this.sanctionActivityGroup=  this._formBuilder.group({
      sanctionActivityType:['Quote'],
      policyType:['New Policy'],
      policyNumber:'',
      claimDate:'',
      claimDetails:''
    });
    this.onChanges();

  }
  sanctionActiviytTypes: string[] = ['Quote', 'Placement', 'Claim', 'Consultancy', 'Payments'];


   get sanctionActivityType() {
    return this.sanctionActivityGroup.get('sanctionActivityType')
  }

    get policyType() {
    return this.sanctionActivityGroup.get('policyType')
  }
  onChanges(){
    this.sanctionActivityGroup.valueChanges.subscribe(val=>{
     
      let obj={
        sanctionActivityType:val.sanctionActivityType,
        policyType:val.policyType,
        policyNumber:val.policyNumber,
        claimDate:val.claimDate,
        claimDetails:val.claimDetails
      }
    this.sanctionActivityTypeValue.emit(obj)

    })
  }
}
