import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNo'
})
export class PhoneNoPipe implements PipeTransform {

  transform(phone: number): string {
    if (phone) { return '+254 ' + phone; } else { return 'N/A'; }
  }

}
