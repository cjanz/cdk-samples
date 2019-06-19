import { Component } from '@angular/core';
import { routes } from './app-routing.module';

interface NavigationItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigationItems: NavigationItem[] = routes
    .filter(route => route.data && route.data.label)
    .map(route => ({
      label: route.data.label,
      icon: route.data.icon,
      path: '/' + route.path
    }));

}
