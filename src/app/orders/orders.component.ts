import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent  {
  orders =[
    {name:'Poonguzhali',item:'Kurti',price:'1500'},
    {name:'Kanimozhi',item:'Lakme CC Cream',price:'500'},
    {name:'Praveen',item:'Shoes',price:'270'}

  ]
    }
    
