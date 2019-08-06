import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `
        <h2>Second Component Work!!</h2>
        <!-- data binding -->
        <h3>{{ name }}</h3>
        <h3 [ngStyle]="1==1 ? textRed : textYellow">{{ name }}</h3>
        <h3 [style.color]="'red'">{{ name }}</h3>
        <h3 [ngClass]="1==1 ? 'blue' : 'green'">{{ name }}</h3>
        <button (click)="showMe()">Click me!</button>
    `,
    styles: [
        `
        .blue{
            color:blue
        }
        .green{
            color: green
        }
        `
    ]
})

export class SecondComponent implements OnInit {
    name: string;
    textRed = {
        color: 'red',
        'font-weight': 'bold',
        fontSize: '30px'
        // fontWeight : 'bold'
    };
    textYellow = {
        color: 'yellow',
        'font-weight': 'bold',
        fontSize: '30px'
        // fontWeight : 'bold'
    };

    constructor() {
        this.name = 'KPT';
    }

    ngOnInit() {
    }
    // style binding
    // class binding
    // event binding
    showMe() {
        alert('Hello');
    }
    // two way binding
}