import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GalleryImports } from './imports';

import { GalleryDB } from './db';
import { TMainSlide } from './types';
//import { getDataFromDB } from '@noda-lib/utils/db';

@Component({
  selector: 'app-gallery',
  imports: GalleryImports,
  //imports: [MatIconModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryComponent {
  // protected slides: TMainSlide[] = getDataFromDB(GalleryDB, ['slides']);
  protected slides: readonly TMainSlide[] = getDataFromDB(GalleryDB, 'slides');
}

function getDataFromDB(db: { readonly [key: string]: readonly TMainSlide[] }, key: string): readonly TMainSlide[] {
  return db[key];
}