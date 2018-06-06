
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview Definition for placeholder plugin dialog.
 *
 */

'use strict';

CKEDITOR.dialog.add( 'placeholder', function( editor ) {
	var lang = editor.lang.placeholder,
		generalLabel = editor.lang.common.generalTab,
		validNameRegex = /^[^\[\]<>]+$/;

	return {
		title: lang.title,
		minWidth: 300,
		minHeight: 80,
		contents: [
			{
				id: 'info',
				label: generalLabel,
				title: generalLabel,
				elements: [
					// Dialog window UI elements.
					{
						id:'fields',
						type:'select',
						label: Framework.modules.Localization.get('_FIELD'),
						items: Framework.modules.Template.getFieldList(),
						default: '',
						style: 'width:300px !important;',
						setup: function(e) {
							console.log('Setup');
							console.log(e);
							this.setValue( e.data.name );
						},
						onChange: function(e) {
							console.log('onChange');
							console.log(e);
							this.getDialog().getContentElement('info','name').setValue(this.getValue());
						},
						commit: function(e) {
							console.log('Commit');
							console.log(e);
							
						}
					},
					{
						id: 'name',
						type: 'text',
						style: 'width: 100%;',
						label: Framework.modules.Localization.get('_CODE'),
						'default': '',
						required: true,
						validate: CKEDITOR.dialog.validate.regex( validNameRegex, lang.invalidName ),
						setup: function( widget ) {
							this.setValue( widget.data.name );
						},
						commit: function( widget ) {
							widget.setData( 'name', this.getValue() );
						}
					}
				]
			}
		]
	};
} );
