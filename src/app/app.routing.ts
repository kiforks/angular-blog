import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule } from '@angular/router';

import type { AdminModule } from './admin/admin.module';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { PostComponent } from './shared/pages/post/post.component';

const routes: Routes = [
	{
		path: '',
		component: AppLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/',
				pathMatch: 'full',
			},
			/* Home page */
			{
				path: '',
				component: HomeComponent,
			},
			/* Post page */
			{
				path: 'post/:id',
				component: PostComponent,
			},
			/* Redirect from a non-existent page */
			{
				path: '**',
				redirectTo: '/',
			},
		],
	},
	/* Admin module lazy loading */
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then(
				(mod: { AdminModule: AdminModule }): AdminModule => mod.AdminModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRouting {}
