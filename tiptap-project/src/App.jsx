import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style"; 
import MyCustomExtension from "./components/MyCustomExtension";

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle, 
      MyCustomExtension.configure({ customColor: "lightblue" }),
    ],
    content: "<p>Start editing and try the custom extension!</p>", 
  });

  if (!editor) return null;

  return (
    <div>
      <h1>Custom Tiptap Extension</h1>
      <EditorContent editor={editor} />
      <button
        onClick={() => editor.chain().focus().highlight().run()} 
        style={{ marginTop: "10px", padding: "10px", background: "#007BFF", color: "#FFF" }}
      >
        Highlight Text
      </button>
    </div>
  );
};

export default App;
