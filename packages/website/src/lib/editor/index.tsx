import React, {useEffect, useRef, useState} from 'react'

import CodeMirror from 'codemirror'

import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/comment/comment'

import 'codemirror/lib/codemirror.css'
import './style.less'

export default function Editor(props) {
    const {onChange, value} = props
    const [isInit, setIsInit] = useState(false)
    const editor = useRef(null)
    const codeMirror = useRef(null)
    useEffect(() => {
        codeMirror.current = CodeMirror(editor.current, {
            mode: 'jsx',
            theme: 'react',
            keyMap: 'sublime',
            viewportMargin: Infinity,
            lineNumbers: false,
            dragDrop: false
        })
        let timer = null
        codeMirror.current.on('changes', cm => {
            if (onChange) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    onChange(cm.getValue());
                }, 300);
            }
        })
    }, [])
    useEffect(() => {
        if (!isInit &&value) {
            codeMirror.current && codeMirror.current.setValue(value)
            setIsInit(true)
        }
    }, [value, isInit])

    return <div className="editor" ref={editor}/>
}

