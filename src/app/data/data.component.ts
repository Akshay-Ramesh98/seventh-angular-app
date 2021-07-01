import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  name: string | undefined;
  //id: string | undefined;
  address:string | undefined;
  password: string | undefined;


    tableData: any = [];
    //sortData: any = []; 


  constructor() { }

  addData() {
    this.tableData.push({
      name: this.name,
     // id: this.id,
      address:this.address,
      password: this.password
    })
    //this.id='';
    this.name='';
    this.address='';
    this.password='';
  }

  iooreset():void{
    
    //this.id='';
    this.name='';
    this.address='';
    this.password='';




  }

  removeItems(element:any){
    this.tableData.forEach((value:any,dex:any) => {
      if(value == element){
        this.tableData.splice(dex,1)
      }
  
    });
  
  
  }

  sotrdataempId() {
    this.tableData.sort(function (a: { name: string; }, b: { name: string; }) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })
  }


  


  ngOnInit(): void {
  }

}
