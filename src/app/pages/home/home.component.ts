import { Component } from '@angular/core';
import { ArrowRightComponent } from "../../icons/arrow-right/arrow-right.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ArrowRightComponent]
})
export class HomeComponent {

    constructor(private router: Router) {
    }

    openChatText() {
        this.router.navigate(['chat']);
    }
}
