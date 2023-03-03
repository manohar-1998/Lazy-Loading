import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-management',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: 'model-management',
    loadChildren: () =>
      import('./model-management/model-management.module').then(
        (m) => m.ModelManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
