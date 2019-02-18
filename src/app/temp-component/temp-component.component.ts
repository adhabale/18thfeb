import { Component, OnInit, } from '@angular/core';
// var excel2json = require("excel-to-json");
import{BehaviorSubject,} from 'rxjs'
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.css']
})


export class TempComponentComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['name','nationality'];
      dataSource = new BehaviorSubject<any[]>([]);
  ngOnInit() {

  const ELEMENT_DATA= [
  {name: 'Hydrogen', nationality: 1.0079},
  {name: 'Helium', nationality: 4.0026},
 
];
this.dataSource.next(ELEMENT_DATA)
  }
 
arrayBuffer:any;
file:File;
data:any[]=[];
fileChangeEvent(event) 
  {
  this.file= event.target.files[0]; 

  }

 Upload() {
   let c;
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
           this.data=XLSX.utils.sheet_to_json(worksheet,{raw:true});
          this.dataSource.next(this.data)
              }

        fileReader.readAsArrayBuffer(this.file);
}

}
