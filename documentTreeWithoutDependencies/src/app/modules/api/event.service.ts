import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  public onComplete: EventEmitter<{message: string, code?: string}> = new EventEmitter();
}
