import React, {useEffect, useState} from 'react'
import {randomString} from '../utils'
import './index.less'
import ReactDOM from 'react-dom'
import {transform} from 'babel-standalone'
import Editor from '../editor'
import * as Dpl from 'dpl-react'
import 'babel-polyfill'
export default function RenderSource(props) {
    const [id, setId] = useState(() => {
        return randomString(16)
    })
    const [code, setCode] = useState('')
    const [showEditor, setShowEditor] = useState(false)
    const {document} = props
    const renderCode = (code) => {
        import('../../../src/index').then(Doraemon => {
            const args = ['React', 'ReactDOM'] // 参数名
            const argv = [React, ReactDOM] //参数值
            for (const key in Doraemon) {
                args.push(key)
                argv.push(Doraemon[key])
            }
            for(const key in Dpl){
                args.push(key)
                argv.push(Dpl[key])
            }
            const transformedCode = transform(`
              ReactDOM.render(React.createElement(${code}),window.document.getElementById('${id}'))
            `, {presets: ['es2015', 'react']}).code
            args.push(transformedCode)
            new Function(...args).apply(null, argv)
            setCode(code)
        })
    }

    useEffect(() => {
        renderCode(document.match(/```(.*)\n?([^]+)```/)[2])
    }, [])
    return <div className='render-source'>
        <div className='content' id={id}>
        </div>
        <div className='editor-wrap'>
            {showEditor && <Editor value={code} onChange={(code) => {
                renderCode(code)
            }}/>}
        </div>
        <div className='show-editor' onClick={() => {
            setShowEditor(!showEditor)
        }}>
            <span>{showEditor ? '隐藏代码' : '显示代码'}</span>
        </div>
    </div>
}

