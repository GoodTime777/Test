import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-picture',
  imports: [],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PictureComponent {
  public src: InputSignal<string> = input.required();
  public alt: InputSignal<string> = input.required();
}

