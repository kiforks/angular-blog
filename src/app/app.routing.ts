import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule } from '@angular/router';

import type { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { PostComponent } from './shared/pages/post/post.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
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
