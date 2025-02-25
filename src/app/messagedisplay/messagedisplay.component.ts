import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-messagedisplay',
  templateUrl: './messagedisplay.component.html',
  styleUrl: './messagedisplay.component.scss'
})
export class MessagedisplayComponent implements OnInit{

  constructor(private ms:MessageserviceService){

  }
  displaymessage:string='';
  ngOnInit(): void {
   this.ms.messageobs.subscribe((value)=>{this.displaymessage = value})
  }



}
