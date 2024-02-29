import { Plugin, type Editor } from 'ckeditor5/src/core';
import GFMDataProcessor from './gfmDataProcessor';

export default class Markdown extends Plugin {
	public static get pluginName() {
		return 'Markdown' as const;
	}

	constructor( editor: Editor ) {
		super( editor );
		editor.data.processor = new GFMDataProcessor( editor.data.viewDocument );
	}
}
