import React from "react";

export default function Child(props) {
    const { value, valueChange } = props;
    return (
        <>
            <div> 接收父组件的值: {value} </div>
            <button onClick={() => valueChange("Changed Msg")}>
                修改父组件的值
            </button>
        </>
    );
}
