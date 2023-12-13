import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import type { FileRouter } from "~/server/uploadthing.ts";

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<FileRouter>();
export const { useUploadThing } = generateReactHelpers<FileRouter>();
