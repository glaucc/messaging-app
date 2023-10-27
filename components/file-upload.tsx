
import { UploadDropzone } from "@/lib/uploadthing";
// import { UploadDropzone } from "@uploadthing/react";

import "@uploadthing/react/styles.css"
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: 'messageFile' | 'serverImage'
}

export const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps) => {
    const fileType = value?.split('.').pop();

    if (value && fileType !== "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image 
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button 
                onClick={() => onChange("")}
                className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                >
                    <X />
                </button>
            </div>
        )
    }
    return (
        <UploadDropzone 
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    )
}