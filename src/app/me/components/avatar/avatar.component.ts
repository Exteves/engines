import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() color: string;
  @Input() size: number;
  @Input() speed: string;
  @Input() direction: string;
  @Input() start: string;
  @Input() delay: string;

  constructor() { }

  ngOnInit(): void {
  }

}
