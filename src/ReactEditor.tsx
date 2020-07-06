import React from 'react'
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'

const CustomEditor = ({ value, onChange }: any) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, view }: any) => (
      <div>
        <MenuBar menu={menu} view={view}/>
        {editor}
      </div>
    )}
  />
)

export default CustomEditor