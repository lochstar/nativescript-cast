import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { demos } from '../linked-components/install.module';

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    demos = demos;
    constructor(private router: RouterExtensions) {}

    ngOnInit(): void {
        if (process.env.NODE_ENV === 'development') {
            const Development = demos.find(({ name }) => name === 'Development');
            if (Development) {
                this.router.navigate([Development.path]);
            }
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
