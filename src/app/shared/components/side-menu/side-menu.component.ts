import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interface/shared.interface';

// interface MenuItem {
//   title: string;
//   route: string;
// }

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Basicos', route: './reactive/basic' },
    { title: 'Dinamicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' }
  ]

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' },
  ]

}
