import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeBlock from './CodeBlock'



export default function CateList() {
  let markdown = '### 主要特性\n'+
  '- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；\n'+
  '- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；\n'+
  '- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；\n'+
  '- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;\n'+
  '- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；\n'+
  '- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；\n'+
  '- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；- 支持自定义主题样式；\n'+
  '# Editor.md\n'+
  '![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)\n'+
  '![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)\n'+
  '#### 缩进风格\n'+
  '即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n\n'+
  '```<?php\n'+
  'echo "Hello world!";\n'+
  '?>```\n'+
  '| First Header  | Second Header |\n'+
  '| ------------- | ------------- |\n'+
  '| Content Cell  | Content Cell  |\n'+
  '| Content Cell  | Content Cell  |\n'+
  '```html\n'+
  '<!DOCTYPE html>\n'+
  '<html>\n'+
  '<head>\n'+
  '<mate charest="utf-8" />\n'+
  '<title>Hello world!</title>\n'+
  '</head>\n'+
  '<body>\n'+
  '<h1>Hello world!</h1>\n'+
  '</body>\n'+
  '</html>```\n'

  let test = '# 这是标题\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(Hello World)\` \n\n'+
  '```const a=2; ```'

  return (
    <React.Fragment>
      CateList
      <SyntaxHighlighter language="javascript" style={docco}>
        {test}
      </SyntaxHighlighter>
      <ReactMarkdown
        source={test}
        escapeHtml={false}
        renderers={{
          code: CodeBlock,
        }}
      />

    </React.Fragment>
  )
}
