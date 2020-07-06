import React from 'react'
import { useEffect } from "react";

import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";

const useEditor = () => {
  useEffect(() => {
    const mySchema = new Schema({
      nodes: addListNodes((schema as any).spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    });

    const view = new EditorView(document.querySelector("#editor")!, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          document.querySelector("#content")!
        ),
        plugins: exampleSetup({ schema: mySchema }),
      }),
    });
    return () => view.destroy()
  }, []);
};

export const Editor = () => {
  useEditor()
  return <>
    <div id="editor" />
    <div id="content">Hello</div>
  </>;
};
