import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(component: DashboardComponent): boolean {
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}
