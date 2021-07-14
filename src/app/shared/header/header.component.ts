import { Component, OnInit } from '@angular/core';
import * as fromFontAwesomeRegular from '@fortawesome/free-regular-svg-icons';
import * as fromFontAwesomeSolid from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { environment } from 'src/environments/environment';
import * as fromHeaderSelectors from 'src/app/store/selectors/header.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBookmark = fromFontAwesomeRegular.faBookmark;
  faStickyNote = fromFontAwesomeRegular.faStickyNote;
  faListUl = fromFontAwesomeSolid.faListUl;
  faSearch = fromFontAwesomeSolid.faSearch;
  faHeart = fromFontAwesomeRegular.faHeart;
  faSettings = fromFontAwesomeSolid.faEllipsisV;

  vm$: Observable<fromHeaderSelectors.HeaderViewModel> | null = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeSearch();
    this.vm$ = this.store.pipe(
      select(fromHeaderSelectors.selectHeaderViewModel)
    );
  }

  logout(): void {
    this.store.dispatch(
      logout(JSON.parse(<string>localStorage.getItem('user')))
    );
  }
  initializeSearch() {
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
  }
}
