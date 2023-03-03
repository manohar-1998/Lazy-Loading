import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelManagementRoutingModule } from './model-management-routing.module';
import { ModelManagementComponent } from './model-management.component';


@NgModule({
  declarations: [
    ModelManagementComponent
  ],
  imports: [
    CommonModule,
    ModelManagementRoutingModule
  ]
})
export class ModelManagementModule { }
