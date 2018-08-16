import React from 'react';

export default ({ isPaid }) => (
	<div data-testid="button-text">
	<button >{ isPaid ? 'Extend Membership' : 'Upgrade Now' }</button>
	</div>
);