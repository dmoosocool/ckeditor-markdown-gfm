import type { Markdown } from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ Markdown.pluginName ]: Markdown;
	}
}
