import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    messages: string[] = []

    add(message:any){ //function inside the service that is access
        this.messages.push(message);
    }

    clear(message:any){
        this.messages = []
    }
}