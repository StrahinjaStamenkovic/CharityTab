import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBookmark,
  faHeart,
  faStickyNote,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsisV,
  faListUl,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBookmark = faBookmark;
  faStickyNote = faStickyNote;
  faListUl = faListUl;
  faSearch = faSearch;
  faHeart = faHeart;
  faSettings = faEllipsisV;

  hearts: number = 450;
  money: string = '$1,186,147.66';
  constructor(private router: Router) {}

  ngOnInit(): void {
    $('.search-input').on('keypress', (event: JQuery.KeyPressEvent) => {
      if (
        (event.keyCode === 13 || event.which === 13) &&
        (<string>$('.search-input').val()).trim() !== ''
      )
        window.location.href =
          environment.preferedSearchEngine + <string>$('.search-input').val();
      return;
    });

    $('.search').on('click', (event: JQuery.ClickEvent) => {
      $('.search-input').trigger('focus');
    });

    // $('.dropdown').on('show.bs.dropdown', function () {
    //   $(this)
    //     .find('.dropdown-menu')
    //     .first()
    //     .stop(true, true)
    //     .delay(250)
    //     .slideDown();
    // });
  }
  redirectDonate(): void {
    this.router.navigate(['/profile/donate']); //Popravi
  }
}
