import React, { useEffect, useState, useRef } from "react";
import { randomString } from "../utils";
import "./index.less";
import ReactDOM from "react-dom";
import { transform } from "babel-standalone";
import Editor from "../editor";
import classnames from "classnames";
import "babel-polyfill";
export default function codeParser(props) {
    const [id, setId] = useState(() => {
        return randomString(16);
    });

    const [code, setCode] = useState("");
    const [showEditor, setShowEditor] = useState(false);
    const [description, setDescription] = useState("");
    const [height, setHeight] = useState(0);
    const descriptionRef = useRef(null);
    const { document } = props;

    // 编辑选项框样式
    const editorOptionsBoxClassName = classnames("editor-options-box", {
        "editor-options-box-show": showEditor,
    });
    // 复制代码按钮样式
    const copyButtonClassName = classnames('copy-button',{
        'copy-button-show':showEditor
    })

    // 显示代码按钮样式
    const showEditorButtonClassName = classnames('show-editor-button',{
        'show-editor-button-show':showEditor
    })

    const renderCode = (code) => {
        import("../../../../blocks/index").then((blocksElements) => {
            const args = ["React", "ReactDOM"]; // 参数名
            const argv = [React, ReactDOM]; //参数值
            for (const key in blocksElements) {
                args.push(key);
                argv.push(blocksElements[key]);
            }
            const transformedCode = transform(
                `
              ReactDOM.render(React.createElement(${code}),window.document.getElementById('${id}'))
            `,
                { presets: ["es2015", "react"] }
            ).code;
            args.push(transformedCode);
            // TODO 这里是为了导入一下依赖
            new Function(...args).apply(null, argv);
            setCode(code);
        });
    };

    useEffect(() => {
        const reg = /:::demo([^]+?)\n?```(.*)\n?([^]+)```/;
        const regResult = document.match(reg);
        if (regResult) {
            const descriptionResult = regResult[1].trim().replace(
                /`(\S+?)\`/g,
                (match) => {
                    const text = match.replaceAll("`", "");
                    return `<code>${text}</code>`;
                }
            );
            setDescription(descriptionResult);
            renderCode(regResult[3]);
        }
    }, []);

    useEffect(() => {
        if (descriptionRef.current) {
            const heightResult = descriptionRef.current.scrollHeight;
            setHeight(showEditor ? heightResult : 0);
        }
    }, [showEditor]);
    return (
        <div className="code-parser-box">
            <div className="content" id={id}></div>

            <div className="meta" ref={descriptionRef} style={{ height }}>
                {description && (
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                )}
                <div className="editor-box">
                    <Editor
                        value={code}
                        onChange={(code) => {
                            renderCode(code);
                        }}
                    />
                </div>
            </div>

            <div className={editorOptionsBoxClassName}>
                <span className="icon-caret"></span>
                <span
                    className={showEditorButtonClassName}
                    onClick={() => {
                        setShowEditor(!showEditor);
                    }}
                >
                    {showEditor ? "隐藏代码" : "显示代码"}
                </span>
                <span className={copyButtonClassName}>复制代码片段</span>
            </div>
        </div>
    );
}
