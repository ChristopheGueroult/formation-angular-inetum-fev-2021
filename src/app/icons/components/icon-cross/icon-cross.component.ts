import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-cross',
  templateUrl: './icon-cross.component.html',
  styleUrls: ['./icon-cross.component.scss'],
})
export class IconCrossComponent implements OnInit {
  public myIcon = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
