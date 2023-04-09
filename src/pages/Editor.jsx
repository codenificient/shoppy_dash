import React from "react";
import { Header } from "../components";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor"


import { EditorData } from "../data/dummy"

const Editor = () => {
  return (
    <div className="p-2 m-4 mt-5 bg-white rounded-3xl md:m-4 md:p-4 ">
      <Header category={"App"} title={"Editor"} />

      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
