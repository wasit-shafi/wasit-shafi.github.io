import { Injectable, inject } from '@angular/core';

import { Constants } from '@shared/';

@Injectable({
	providedIn: 'root',
})
export class WebBrowserService {
	private readonly constants = inject(Constants);

	private readonly browserNamesList = {
		FIREFOX: 'firefox',
		EDGE: 'edge',
		OPERA: 'opera',
		VIVALDI: 'vivaldi',
		CHROME: 'chrome',
		SAFARI: 'safari',
		INTERNET_EXPLORER: 'internet-explorer',
		UNKNOWN: 'unknown',
	};

	private readonly browserClassNamesList = {
		FIREFOX: 'firefox-web-browser',
		EDGE: 'edge-web-browser',
		OPERA: 'opera-web-browser',
		VIVALDI: 'vivaldi-web-browser',
		CHROME: 'chrome-web-browser',
		SAFARI: 'safari-web-browser',
		INTERNET_EXPLORER: 'internet-explorer-web-browser',
		UNKNOWN: 'unknown-web-browser',
	};

	private browserClassName!: string;

	constructor() {
		this.initializeBrowserClassName();
	}

	public initializeBrowserClassName(): void {
		if (this.whichBrowser() === this.browserNamesList.FIREFOX) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.FIREFOX;
		} else if (this.whichBrowser() === this.browserNamesList.EDGE) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.EDGE;
		} else if (this.whichBrowser() === this.browserNamesList.OPERA) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.OPERA;
		} else if (this.whichBrowser() === this.browserNamesList.VIVALDI) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.VIVALDI;
		} else if (this.whichBrowser() === this.browserNamesList.CHROME) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.CHROME;
		} else if (this.whichBrowser() === this.browserNamesList.SAFARI) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.SAFARI;
		} else if (
			this.whichBrowser() === this.browserNamesList.INTERNET_EXPLORER
		) {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.INTERNET_EXPLORER;
		} else {
			this.browserClassName =
				this.constants.WSP + this.browserClassNamesList.UNKNOWN;
		}
	}
	// https://www.browserstack.com/guide/create-browser-specific-css

	public whichBrowser(): string {
		let browserName = '';
		if (this.isFirefox()) {
			browserName = this.browserNamesList.FIREFOX;
		} else if (this.isEdge()) {
			browserName = this.browserNamesList.EDGE;
		} else if (this.isOpera()) {
			browserName = this.browserNamesList.OPERA;
		} else if (this.isVivaldi()) {
			browserName = this.browserNamesList.VIVALDI;
		}
		// else if (this.isChrome()) {
		// browserName = this.browserNamesList.CHROME;
		// } else if (this.isSafari()) {
		// browserName = this.browserNamesList.SAFARI;
		// } else if (this.isInternetExplorer()) {
		// browserName = this.browserNamesList.INTERNET_EXPLORER;
		// }
		else {
			browserName = this.browserNamesList.UNKNOWN;
		}
		return browserName;
	}

	private agentHas(keyword: string): boolean {
		return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
	}

	public isFirefox(): boolean {
		return (
			this.agentHas('Firefox') ||
			this.agentHas('FxiOS') ||
			this.agentHas('Focus')
		);
	}
	public isEdge(): boolean {
		return this.agentHas('Edg');
	}

	public isOpera(): boolean {
		return this.agentHas('OPR');
	}

	public isVivaldi(): boolean {
		return this.agentHas('Vivaldi');
	}
}
