import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Form } from '@ant-design/compatible'


class CodeBlock extends React.PureComponent {
  render() {
    const {value} = this.props
    return (
      <SyntaxHighlighter
      language=""
      style={tomorrowNightEighties}
      >
      {value}
      </SyntaxHighlighter>
    )
  }
}

export default Form.create()(CodeBlock)
