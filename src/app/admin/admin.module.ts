import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminRouting } from './admin.routing';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchPostsPipe } from './pipes/search-posts/search-posts.pipe';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent,
		CreateComponent,
		LoginComponent,
		EditComponent,
		SearchPostsPipe,
	],
	imports: [SharedModule, AdminRouting, FormsModule, ReactiveFormsModule],
	providers: [AuthGuard],
})
export class AdminModule {}
