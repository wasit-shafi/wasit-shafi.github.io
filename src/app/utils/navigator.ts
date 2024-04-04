function handleCopyTextToClipboard(text = ''): boolean {
	if (!text || typeof text !== 'string') {
		return false;
	}

	navigator.clipboard.writeText(text);
	return true;
}
export const navigatorUtils = { handleCopyTextToClipboard };
