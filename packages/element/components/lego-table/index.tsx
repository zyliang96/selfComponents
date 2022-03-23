import React from 'react';
import './index.less';
import classNames from 'classnames';
import { BaseProps, BaseObject } from '../../types/index';
export interface LegoTableProps extends BaseProps {}

const LegoTable = (props) => {
	const { prefixCls = 'moonBase', className = '', style } = props;
	const bodyClassName = classNames(`${prefixCls}-lego-table`, className);
	return (
		<div className={bodyClassName} style={style}>
			<table>
				<thead>
                    <tr>

                    </tr>
					<tr>
						<th rowSpan={2} style={{ width: 100 }}>
							项目
						</th>
						<th rowSpan={2} style={{ width: 100 }}>
							栏次
						</th>
						<th colSpan={2} style={{ width: 200 }}>
							一般项目
						</th>
						<th colSpan={2} style={{ width: 200 }}>
							即征即退项目
						</th>
					</tr>
					<tr>
						<th style={{ width: 100 }}>本月数</th>
						<th style={{ width: 100 }}>本年累计</th>
						<th style={{ width: 100 }}>本月数</th>
						<th style={{ width: 100 }}>本年累计</th>
					</tr>
				</thead>
			</table>


            <canvas ></canvas>
		</div>
	);
};

export default LegoTable;
