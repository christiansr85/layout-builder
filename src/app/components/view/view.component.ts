import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  conf: any;

  constructor() {
    this.conf = {
      rows: [
        {
          columns: [
            {
              widget: {
                label: 'widget 1'
              }
            },
            {
              widget: {
                label: 'widget 2'
              }
            },
            {
              widget: {
                label: 'widget 3'
              }
            }
          ]
        },
        {
          columns: [
            {
              widget: {
                label: 'widget 4'
              }
            },
            {
              rows: [
                {
                  widget: {
                    label: 'widget 5'
                  }
                },
                {
                  widget: {
                    label: 'widget 6'
                  }
                },
                {
                  widget: {
                    label: 'widget 7'
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  }
}
