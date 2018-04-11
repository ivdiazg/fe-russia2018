import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class UtilService {

  constructor() { }

  showNotification(type, icon, message, from, align) {
    // var type = ['', 'info', 'success', 'warning', 'danger'];
    $.notify({
      icon: icon,
      message: message
    }, {
        type: type,
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}
