import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-updatemessage',
  templateUrl: './updatemessage.component.html',
  styleUrl: './updatemessage.component.scss'
})
export class UpdatemessageComponent {

  constructor(private messageservice:MessageserviceService){

  }
message:string = 'Message from component A';
  updateMessage(){
    this.messageservice.sendmessage(this.message);
  }
}
