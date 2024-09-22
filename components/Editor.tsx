"use client";

import { useEditor, type Editor } from "@tiptap/react";
import { Button } from "./ui/button";
import StarterKit from "@tiptap/starter-kit";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-5">
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
      >
        H1
      </Button>
    </div>
  );
};

export function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return (
    <div>
      <MenuBar editor={editor} />
    </div>
  );
}
