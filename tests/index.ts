import { expect } from 'chai';
import { Markdown as MarkdownDll, icons } from '../src';
import Markdown from '../src/markdown';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Markdown DLL', () => {
	it( 'exports Markdown', () => {
		expect( MarkdownDll ).to.equal( Markdown );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
