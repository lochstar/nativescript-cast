import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    demos = [
        { name: 'Demo 1', component: 'demo1' },
        { name: 'Demo 2', component: 'demo2' },
        { name: 'Development', component: 'development' }
    ];

    constructor(private router: RouterExtensions) {}

    ngOnInit(): void {
        if (process.env.NODE_ENV === 'development') {
            this.router.navigate(['development']);
        }
    }

    goToDemo(component: string): void {
        this.router.navigate([component], {
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'ease'
            }
        });
    }
}
