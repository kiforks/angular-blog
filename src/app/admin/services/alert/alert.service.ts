import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AlertType } from '../../enums/alert-type.enum';
/** Interfaces */
import { Alert } from '../../interfaces/alert.interface';

@Injectable()
export class AlertService {
	public alert$: Subject<Alert> = new Subject<Alert>();

	public success(text: string) {
		this.alert$.next({ type: AlertType.success, text });
	}

	public warning(text: string) {
		this.alert$.next({ type: AlertType.warning, text });
	}

	public danger(text: string) {
		this.alert$.next({ type: AlertType.danger, text });
	}
}
