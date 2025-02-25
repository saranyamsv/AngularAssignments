import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }

  private message =  new BehaviorSubject<string>('This is a default message');
   messageobs =  this.message.asObservable();

   sendmessage(value:string){

    this.message.next(value);
   }
}
