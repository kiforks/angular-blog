import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { PostState } from '../enums/post-state.enum';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			/* Redirect to login page from /admin */
			{
				path: '',
				redirectTo: '/admin/login',
				pathMatch: 'full',
			},
			/*  Login page */
			{
				path: 'login',
				component: LoginComponent,
			},
			/*  Dashboard page */
			{
				path: 'dashboard',
				component: DashboardComponent,
			},
			/*  Edit page */
			{
				path: PostState.edit,
				component: EditComponent,
			},
			/*  Create page */
			{
				path: 'create',
				component: CreateComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRouting {}
