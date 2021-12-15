import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule } from '@angular/router';

import type { AdminModule } from './admin/admin.module';
import { PostState } from './enums/post-state.enum';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			/* Home page */
			{
				path: '',
				component: HomeComponent,
			},
			/* Post page */
			{
				path: PostState.post,
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
