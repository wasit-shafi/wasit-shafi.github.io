import { inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export class Utils {
	private readonly sanitizer = inject(DomSanitizer);

	public getSafeHtml(htmlContent: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
	}
}
