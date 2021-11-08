import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Label } from "tns-core-modules/ui/label/label";
import { Button } from "tns-core-modules/ui/button/button";

export class MediaQueue extends StackLayout {
    constructor() {
        super();

        let counter: number = 0;
        const lbl = new Label();
        const btn = new Button();
        btn.text = "Tap me!";
        btn.on("tap", (args) => {
            lbl.text = "Tap " + counter++;
        });

        this.addChild(lbl);
        this.addChild(btn);
    }
}
