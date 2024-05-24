import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType:"mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean" },
    image: { type: "string", list: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: doc => doc._raw.flattenedPath.split("/").splice(1)[0],
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/app/content",
  documentTypes: [Post],
});
