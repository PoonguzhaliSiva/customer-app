import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent  {
  customers =[
    {name:'Poonguzhali',address:'Ariyankuppam',mobile:'7092066035'},
    {name:'Kanimozhi',address:'Cuddalore',mobile:'9876543210'},
    {name:'Praveen',address:'Anna Nagar',mobile:'8097645321'}
  ]
  
}
