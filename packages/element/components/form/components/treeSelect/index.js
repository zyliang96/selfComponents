import React from 'react';
import { TreeSelect } from 'dpl-react';

const defaultFormatObj = {
  key:'key',
  value:'value',
  title:'title',
  children:'children',
}

export default function SelectItem(props) {
  const { other, onChange, value, treeNodeFilter, orgTree } = props;

  /**
   * 格式化树节点，利用treeNode自行渲染
   * @param {props} tree
   * @param {props} formatObj
   */
  function formatTree(tree, formatObj) {
    return tree.map(item => {
      return (
        <TreeSelect.TreeNode key={item[formatObj['key']]} value={item[formatObj['value']]} title={item[formatObj['title']]}>
          {formatTree(item[formatObj['children']] || [], formatObj)}
        </TreeSelect.TreeNode>
      );
    });
  }

  return (
    <TreeSelect {...other} onChange={onChange} value={value}>
      {formatTree(orgTree, Object.assign(defaultFormatObj,treeNodeFilter))}
    </TreeSelect>
  );
}
