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


function test(a,b){
    if(1 == a){
        return b
    }else if ( 2 == a){
        return b << 1
    }else{
        let temp = a;
        if(a == (temp >> 1) << 1){
            return test(a >> 1, b << 1)
        }else{
             return b + test(a >> 1, b << 1)
        }
    }
}