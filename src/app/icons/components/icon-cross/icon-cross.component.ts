import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * This component is stupid to generate an icon width fontawesome
 */
@Component({
  selector: 'app-icon-cross',
  templateUrl: './icon-cross.component.html',
  styleUrls: ['./icon-cross.component.scss'],
})
export class IconCrossComponent implements OnInit {
  /**
   * property to use in html for icon binding
   */
  public myIcon = faTimes;
  constructor() {}

  /**
   * @function
   * this function is a life cycle called at the initialization of this class
   *
   */
  ngOnInit(): void {}
}
