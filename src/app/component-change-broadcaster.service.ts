import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentChangeBroadcasterService {
  dropDownValueChangeSubject: Subject<string> = new Subject<string>();
  constructor() { }

  getBroadCaster(): Subject<string>{
    return this.dropDownValueChangeSubject;
  }
}
