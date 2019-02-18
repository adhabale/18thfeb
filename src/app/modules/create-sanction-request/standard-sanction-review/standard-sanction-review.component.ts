import { Component, OnInit,Input } from '@angular/core';
import { GlobalService } from '../../common/services/global.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import{BehaviorSubject,} from 'rxjs'


@Component({
  selector: 'app-standard-sanction-review',
  templateUrl: './standard-sanction-review.component.html',
  styleUrls: ['./standard-sanction-review.component.scss']
})
export class StandardSanctionReviewComponent implements OnInit {
//formData;
  @Input() masterData;
 formData = new BehaviorSubject<any>(this.masterData);


  constructor(private globalservice: GlobalService, private route: Router) { 
  }


  
  ELEMENT_DATA: any[] = [
    { name: 'Marine – GB', placeOfIncorporation: 'London', legalEntity: 'Willis Towers Watson Consulting' }

  ];

  displayedColumns: string[] = ['name', 'placeOfIncorporation', 'legalEntity'];
  dataSource = this.ELEMENT_DATA;

  ELEMENTS_DATA: any[] = [
    { inspectionDate: '1-01-2012', duration: '2 Year Policy' }

  ];

  displayedColumn: string[] = ['inspectionDate', 'duration'];
  dataS = this.ELEMENTS_DATA;


  ELEMENTARY_DATA: any[] = [
    { name: 'ABC Airline', placeOfIncorporation: 'UK' }

  ];

  displayColumns: string[] = ['name', 'placeOfIncorporation'];
  dS = this.ELEMENTARY_DATA;

  ELEMENT3_1_DATA: any[] = [
    { name: 'ABC Airline', placeOfIncorporation: 'UK' }

  ];

  displayCol3_1: string[] = ['name', 'placeOfIncorporation'];
  dS3 = this.ELEMENT3_1_DATA;

  ELEMENT3_2_DATA: any[] = [
    { name: 'XYZ', placeOfIncorporation: 'UK' }

  ];

  displayCol3_2: string[] = ['name', 'placeOfIncorporation'];
  dS32 = this.ELEMENT3_2_DATA;

  ELEMENT3_3_DATA: any[] = [
    { name: 'ZWR', placeOfIncorporation: 'UK' }

  ];

  displayCol3_3: string[] = ['name', 'placeOfIncorporation'];
  dS33 = this.ELEMENT3_3_DATA;

  ELEMENT3_4_DATA: any[] = [
    { name: 'N/A', placeOfIncorporation: 'N/A' }

  ];

  displayCol3_4: string[] = ['name', 'placeOfIncorporation'];
  dS34 = this.ELEMENT3_4_DATA;

  ELEMENT4_DATA: any[] = [
    { sanctionedcountries: 'Russia', }

  ];

  displayCol4: string[] = ['sanctionedcountries'];
  dS4 = this.ELEMENT4_DATA;

  ELEMENT5_DATA: any[] = [
    { insurancetype: 'Liability', }

  ];

  displayCol5: string[] = ['insurancetype'];
  dS5 = this.ELEMENT5_DATA;

  ELEMENT6_DATA: any[] = [
    { shipmentofFood: 'Liability', }

  ];

  displayCol6: string[] = ['shipmentofFood'];
  dS6 = this.ELEMENT6_DATA;
  ngOnInit() {
 //this.formData.next(this.masterData.value);

this.onChanges();
  }

    qEightAnswer() {
    const c = this.formData.value.sanctionList[0].questions[7].answer
     if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
  }

   qNineAnswer() {
    const c = this.formData.value.sanctionList[0].questions[8].answer
      if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
  }

   qTenAnswer() {
    const c = this.formData.value.sanctionList[0].questions[9].answer
      if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
  }


  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User')
      return true;
    else
      return false;
  }
  onCancel() {
    this.route.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
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
     get sanctionList() {
    return this.masterData.get('sanctionList')
  }
  

    onChanges(): void {
  this.masterData.valueChanges.subscribe(val => {
this.formData.next(val)
  });

}
}
