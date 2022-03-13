import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Navlink from '../../interfaces/navlink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navlinks: Navlink[];
  public currentRoute: string;

  constructor(private router: Router) {
    this.navlinks = [];
    this.currentRoute = '';
  }

  ngOnInit(): void {
    this.navlinks = [
      { text: 'personagens', path: 'characters' },
      { text: 'planetas', path: 'planets' },
      { text: 'espécies', path: 'species' },
      { text: 'filmes', path: 'films' },
      { text: 'veículos', path: 'vehicles' },
      { text: 'espaçonaves', path: 'starships' },
    ];

    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentRoute = route.url;
      }
    });
  }
}
