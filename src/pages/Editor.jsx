import React, { useState } from "react";
import { Header } from "../components";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const initialContent = `<h3>Try React</h3>
<p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
<h4>Online Playgrounds</h4>
<p>If you're interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.</p>
<h4>Add React to a Website</h4>
<p>You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.</p>`;

const Editor = () => {
  const [value, setValue] = useState(initialContent);

  return (
    <div className="p-2 m-4 mt-5 bg-white rounded-3xl md:m-4 md:p-4">
      <Header category={"App"} title={"Editor"} />
      <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: 400 }} />
    </div>
  );
};

export default Editor;
