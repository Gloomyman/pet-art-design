import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string = 'Success'): void {
    this.snackBar.open(message, '', {
      duration: 4000,
      // here specify the position
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', // 'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['success-toastr-style']
    });
  }

  error(message: string = 'Error'): void {
    this.snackBar.open(message, '', {
      duration: 4000,
      // here specify the position
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', // 'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['error-toastr-style']
    });
  }
}
