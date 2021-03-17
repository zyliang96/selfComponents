import React, {useEffect, useState} from "react";
import marked from 'marked';
import './index.less'
import RenderSource from "../renderSource";
import {randomString} from '../utils'
import ReactDom from 'react-dom'
import 'highlight.js/styles/a11y-light.css'
import highlight from 'highlight.js'
const renderer = new marked.Renderer();
renderer.table = (header, body) => {
    return `<table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table>`;
};
const linkRender =  renderer.link
renderer.link = (href, title, text) => {
    const html = linkRender.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" ');
};
export default function markdownCreator(markdownDocument) {
    return function Markdown(props) {
        const [components, setComponents] = useState({})
        const [html, setHtml] = useState('')
        useEffect(() => {
            if (/:::\s?noDemo:::/g.test(markdownDocument)) {
                setHtml(markdownDocument.replace(/:::\s?noDemo:::/g, ''))
                return
            }
            let result = {}
            const html = markdownDocument.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
                const id = randomString(16)
                result[id] = React.createElement(RenderSource, {document: match})
                return `<div id=${id}></div>`
            })
            setHtml(html)
            setComponents(result)
        }, [])
        useEffect(() => {
            Object.keys(components).forEach(key => {
                ReactDom.render(components[key], document.getElementById(key))
            })
        }, [components])
        useEffect(() => {
            // prism.highlightAll();
            document.querySelectorAll('pre code').forEach((block) => {
                highlight.highlightBlock(block)
            })
        }, [html])
        return <div className='mark-down' dangerouslySetInnerHTML={{
            __html: marked(html, {renderer})
        }}></div>
    }
}