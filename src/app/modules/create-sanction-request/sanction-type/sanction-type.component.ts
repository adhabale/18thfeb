import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-sanction-type',
  templateUrl: './sanction-type.component.html',
  styleUrls: ['./sanction-type.component.scss']
})
export class SanctionTypeComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) {}

  sanctionTypes: string[] = ['Insurance or Reinsurance Form', 'Iran Transactions Form', 'Controlled Goods Form'];
  sanctionedCountries: string[] = ['Russia', 'Iran', 'Egypt', 'Afghanistan', 'Ukraine'];

 @Output() sanctionTypeValue= new EventEmitter<any>();
  ukraineExposure: boolean = false;

sanctionTypeGroup:FormGroup
  ngOnInit() {
  this.sanctionTypeGroup=  this._formBuilder.group({
      sanctionFormType:'',
      sanctionedCountry:[''],
        crimeaExposure: ['No'],
    controlledGoodsInvolvement: 'No'
    });
    this.onChanges();

  }

    checkUkraine(sanctionedCountryList: string[]) {
    this.ukraineExposure = false;
    if (sanctionedCountryList.includes('Ukraine'))
      this.ukraineExposure = true;
  } 

 get sanctionFormType() {
    return this.sanctionTypeGroup.get('sanctionFormType')
  }
  get sanctionedCountry() {
    return this.sanctionTypeGroup.get('sanctionedCountry')
  }


  onChanges(){
    this.sanctionTypeGroup.valueChanges.subscribe(val=>{
     
      let obj={
       sanctionFormType:val.sanctionFormType,
      sanctionedCountry:val.sanctionedCountry,
      crimeaExposure:val.crimeaExposure,
      controlledGoodsInvolvement:val.controlledGoodsInvolvement
      }
    this.sanctionTypeValue.emit(obj)

    })
  }
}
