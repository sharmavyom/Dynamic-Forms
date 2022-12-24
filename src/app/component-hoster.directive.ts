import { ComponentFactoryResolver, Directive, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentChangeBroadcasterService } from './component-change-broadcaster.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@Directive({
  selector: '[appComponentHoster]'
})
export class ComponentHosterDirective {
  componentRef: any;
  componentMapper = {
    'vehicleForm': VehicleFormComponent,
    'loginForm': LoginFormComponent
  }
  constructor(public resolver: ComponentFactoryResolver,
    public container: ViewContainerRef,
    public renderer: Renderer2,
    public cbs: ComponentChangeBroadcasterService
    ) {
    this.cbs.getBroadCaster().subscribe((value:string)=>{
      if(value == 'vehicleForm' || value == 'loginForm'){
        this.container.clear();
        const factory = this.resolver.resolveComponentFactory<any>(this.componentMapper[value]);
        this.componentRef = this.container.createComponent(factory);
      }
    });
   }
  
}
