import { Component } from '@angular/core';
import { ArrowRightComponent } from "../../icons/arrow-right/arrow-right.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ArrowRightComponent]
})
export class HomeComponent {

}
