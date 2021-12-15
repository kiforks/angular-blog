import { NgModule } from '@angular/core';

import { AdminRouting } from './admin.routing';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

@NgModule({
	declarations: [
		AdminLayoutComponent,

		DashboardComponent,
		CreateComponent,
		LoginComponent,
		EditComponent,
	],
	imports: [AdminRouting],
})
export class AdminModule {}
