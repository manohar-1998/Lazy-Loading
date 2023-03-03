import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelManagementComponent } from './model-management.component';

const routes: Routes = [{ path: '', component: ModelManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelManagementRoutingModule { }
