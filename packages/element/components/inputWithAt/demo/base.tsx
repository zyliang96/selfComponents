import { InputWithAt } from '@moon-base/element';
import React, { useEffect, useState } from 'react';
export default (props) => {
	return (
		<div style={{ overflowY: 'auto' }}>
			<div>
				<span>input 框中 @XX 功能</span>
			</div>
			<InputWithAt />
		</div>
	);
};
