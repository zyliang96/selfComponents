import { ElectronicReader } from '@moon-base/element';
import React, { useState } from 'react';
export default (props) => {
	const [imgList, setImgList] = useState([]);
	return (
		<div>
			<ElectronicReader imgList={imgList} />
		</div>
	);
};
