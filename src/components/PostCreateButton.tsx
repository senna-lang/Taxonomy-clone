"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ButtonProps, buttonVariants } from "./ui/button";

interface PostCreateButtonProps extends ButtonProps {}

const PostCreateButton = ({
  className,
  variant,
  ...props
}: PostCreateButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-pointer opacity-60": isLoading },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <p className=" animate-pulse"> uploading...</p>
      ) : (
        "create post"
      )}
    </button>
  );
};

export default PostCreateButton;
