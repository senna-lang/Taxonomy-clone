"use client";
import { cn } from "@/lib/utils";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import TextareaAutoSize from "react-textarea-autosize";
import { buttonVariants } from "./ui/button";

interface EditorProps {
  title: string;
}

const Editor = ({ title }: EditorProps) => {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const initialEditor = useCallback(() => {
    const editor = new EditorJS({
      holder: "editor",
      onReady() {
        ref.current = editor;
      },
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      tools: {
        header: Header,
      },
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initialEditor();
    }

    return () => {
      if (ref.current) {
        ref.current.destroy();
        ref.current = undefined;
      }
    };
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
