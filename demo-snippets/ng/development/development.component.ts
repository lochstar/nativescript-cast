import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: 'ns-development',
    templateUrl: './development.component.html'
})
export class DevelopmentComponent implements OnInit {
    public cast: any = null;

    constructor(private router: RouterExtensions) {}

    ngOnInit(): void {}

    goBack(): void {
        this.router.back();
    }

    handleCastEvent(args) {
        console.log(`event: ${args.data.eventName}`);

        if (args.object && !this.cast) {
            this.cast = args.object;
        }
    }
}
