import { ElectronicReader } from '@moon-base/element';
import React, { useEffect, useState } from 'react';
export default (props) => {
	const [imgList, setImgList] = useState([]);

	return (
		<div style={{ overflowY: 'auto' }}>
			<ElectronicReader imgList={imgList} />
		</div>
	);
};
