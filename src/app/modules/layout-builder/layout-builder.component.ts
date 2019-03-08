import { Component } from '@angular/core';

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.scss']
})
export class LayoutBuilderComponent {
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
