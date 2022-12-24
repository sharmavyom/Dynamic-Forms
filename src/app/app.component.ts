import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentChangeBroadcasterService } from './component-change-broadcaster.service';
import { ComponentHosterDirective } from './component-hoster.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { OptionModel } from './models/optionModel';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(ComponentHosterDirective, {static: true}) appComponentHoster!: ComponentHosterDirective;
  title = 'Dynamic-Forms';
  options: OptionModel[];
  selectedOption: string = '';
  

  constructor(public cbs: ComponentChangeBroadcasterService){
    this.options = [];
    this.options.push(new OptionModel('vehicleForm'));
    this.options.push(new OptionModel('loginForm'));
  }

  onDropDownChange(){
    let broadcaster = this.cbs.getBroadCaster();
    broadcaster.next(this.selectedOption);
  }
}
