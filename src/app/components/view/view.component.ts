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
                id: '1',
                type: 'Indicator',
                label: 'widget 1'
              }
            },
            {
              widget: {
                id: '2',
                type: 'Indicator',
                label: 'widget 2'
              }
            },
            {
              widget: {
                id: '3',
                type: 'Indicator',
                label: 'widget 3'
              }
            }
          ]
        },
        {
          columns: [
            {
              widget: {
                id: '4',
                type: 'Big',
                label: 'widget 4'
              }
            },
            {
              rows: [
                {
                  widget: {
                    id: '5',
                    type: 'Indicator',
                    label: 'widget 5'
                  }
                },
                {
                  widget: {
                    id: '6',
                    type: 'Indicator',
                    label: 'widget 6'
                  }
                },
                {
                  widget: {
                    id: '7',
                    type: 'Indicator',
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
