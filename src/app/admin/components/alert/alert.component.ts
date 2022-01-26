import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertType } from '../../enums/alert-type.enum';
import { Alert } from '../../interfaces/alert.interface';
import { AlertService } from '../../services/alert/alert.service';

@Component({
	selector: 'alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() public delay = 5000;

	public readonly AlertType = AlertType;

	public alertSubscription: Subscription | null = null;
	public text = '';
	public type = AlertType.success;

	constructor(private AlertService: AlertService) {}

	public ngOnInit(): void {
		this.alertSubscription = this.AlertService.alert$.subscribe(
			(alert: Alert): void => {
				this.text = alert.text;
				this.type = alert.type;

				const timeout: number = setTimeout((): void => {
					clearTimeout(timeout);
					this.text = '';
				}, this.delay);
			}
		);
	}

	public ngOnDestroy(): void {
		if (this.alertSubscription) {
			this.alertSubscription.unsubscribe();
		}
	}
}
