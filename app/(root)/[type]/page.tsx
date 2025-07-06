import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.action";
import { getFileTypesParams, convertFileSize } from "@/lib/utils";
import { Models } from "node-appwrite";
import React from "react";

const Page = async ({ searchParams, params }: SearchParamProps) => {
    const type = ((await params)?.type as string) || "";
    const searchText = ((await searchParams)?.query as string) || "";
    const sort = ((await searchParams)?.sort as string) || "";

    const types = getFileTypesParams(type) as FileType[];
    const totalSpace = await getTotalSpaceUsed();
    const files = await getFiles({ types, searchText, sort });

    // Calculate total size for the current type
    const getTotalSize = () => {
        if (!totalSpace) return 0;
        
        switch (type) {
            case "documents":
                return totalSpace.document?.size || 0;
            case "images":
                return totalSpace.image?.size || 0;
            case "media":
                return (totalSpace.video?.size || 0) + (totalSpace.audio?.size || 0);
            case "others":
                return totalSpace.other?.size || 0;
            default:
                return 0;
        }
    };

    return (
        <div className="page-container">
            <section className="w-full">
                <h1 className="h1 capitalize">{type}</h1>

                <div className="total-size-section">
                    <p className="body-1">
                        Total:{" "}
                        <span className="h5">
                            {convertFileSize(getTotalSize()) || "0 MB"}
                        </span>
                    </p>

                    <div className="sort-container">
                        <p className="body-1 hidden sm:block text-light-200">
                            Sort By:
                        </p>

                        <Sort />
                    </div>
                </div>
            </section>

            {/* Render the files */}

            {files && files.total > 0 ? (
                <section className="file-list">
                    {files.documents.map((file: Models.Document) => (
                        <Card key={file.$id} file={file} />
                    ))}
                </section>
            ) : (
                <p className="empty-list">No files found</p>
            )}
        </div>
    );
};

export default Page;
