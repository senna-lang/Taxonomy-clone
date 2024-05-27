"use client";
import { cn } from "@/lib/utils";
import EditorJS from "@editorjs/editorjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextareaAutoSize from "react-textarea-autosize";
import { buttonVariants } from "./ui/button";

const Editor = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const initialEditor = () => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  },[]);

  useEffect(() => {
    if (isMounted) {
      initialEditor();
    }
  }, [isMounted]);

  return (
    <form>
      <div className=" grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className=" flex items-center space-x-10">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              戻る
            </Link>
            <p className=" text-sm text-muted-foreground">公開</p>
          </div>
          <button className={cn(buttonVariants())} type="submit">
            <span>保存</span>
          </button>
        </div>
        <div id="editor">
          <TextareaAutoSize
            id="title"
            autoFocus
            placeholder="Post Title"
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
          />
        </div>
        <p className=" text-sm text-gray-500">
          Use
          <kbd className=" rounded-md border bg-muted px-1 text-sm uppercase">
            Tab
          </kbd>
          to open the editor menu
        </p>
      </div>
    </form>
  );
};

export default Editor;
