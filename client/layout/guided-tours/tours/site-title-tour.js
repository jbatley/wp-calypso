/** @format */

/**
 * External dependencies
 */

import React from 'react';
import { translate } from 'i18n-calypso';
import { overEvery as and } from 'lodash';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import {
	ButtonRow,
	Continue,
	makeTour,
	Next,
	SiteLink,
	Step,
	Tour,
} from 'layout/guided-tours/config-elements';
import { canUserEditSettingsOfSelectedSite } from 'state/ui/guided-tours/contexts';

export const SiteTitleTour = makeTour(
	<Tour
		name="siteTitle"
		version="20171205"
		path="/checklist"
		when={ and( canUserEditSettingsOfSelectedSite ) }
	>
		<Step name="init" target="site-title-input" arrow="top-left" placement="below">
			<p>
				{ translate(
					"Update the {{b}}Site Title{{/b}} field with a descriptive name to let your visitors know which site they're visiting.",
					{
						components: { b: <strong /> },
					}
				) }
			</p>
			<ButtonRow>
				<Next step="click-save">{ translate( 'All done, continue' ) }</Next>
				<SiteLink href="/checklist/:site">{ translate( 'Return to the checklist' ) }</SiteLink>
			</ButtonRow>
		</Step>

		<Step name="click-save" target="settings-site-profile-save" arrow="top-right" placement="below">
			<Continue target="settings-site-profile-save" step="finish" click>
				{ translate(
					'Almost done - every time you make a change, it needs to be saved. ' +
						"Let's save your changes and then see what's next on our list."
				) }
			</Continue>
		</Step>

		<Step name="finish" placement="center">
			<p>
				<Gridicon icon="checkmark" /> { translate( 'Good job, looks great!' ) }
			</p>
			<p>
				{ translate(
					"Your changes have been saved. Let's move on and see what's next on our checklist."
				) }
			</p>
			<ButtonRow>
				<SiteLink href="/checklist/:site">{ translate( 'Return to the checklist' ) }</SiteLink>
			</ButtonRow>
		</Step>
	</Tour>
);
