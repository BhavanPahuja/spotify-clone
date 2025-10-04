import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'as-social-share',
  template: `
    <div class="social-share-container">
      <!-- Social share links removed - add your own links here -->
    </div>
  `,
  styleUrls: ['./social-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareComponent {}
