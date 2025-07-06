(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateAngle": (()=>calculateAngle),
    "calculatePercentage": (()=>calculatePercentage),
    "cn": (()=>cn),
    "constructDownloadUrl": (()=>constructDownloadUrl),
    "constructFileUrl": (()=>constructFileUrl),
    "convertFileSize": (()=>convertFileSize),
    "convertFileToUrl": (()=>convertFileToUrl),
    "formatDateTime": (()=>formatDateTime),
    "getFileIcon": (()=>getFileIcon),
    "getFileType": (()=>getFileType),
    "getFileTypesParams": (()=>getFileTypesParams),
    "getUsageSummary": (()=>getUsageSummary),
    "parseStringify": (()=>parseStringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const parseStringify = (value)=>JSON.parse(JSON.stringify(value));
const convertFileToUrl = (file)=>URL.createObjectURL(file);
const convertFileSize = (sizeInBytes, digits)=>{
    if (sizeInBytes < 1024) {
        return sizeInBytes + " Bytes"; // Less than 1 KB, show in Bytes
    } else if (sizeInBytes < 1024 * 1024) {
        const sizeInKB = sizeInBytes / 1024;
        return sizeInKB.toFixed(digits || 1) + " KB"; // Less than 1 MB, show in KB
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
        const sizeInMB = sizeInBytes / (1024 * 1024);
        return sizeInMB.toFixed(digits || 1) + " MB"; // Less than 1 GB, show in MB
    } else {
        const sizeInGB = sizeInBytes / (1024 * 1024 * 1024);
        return sizeInGB.toFixed(digits || 2) + " GB"; // 1 GB or more, show in GB
    }
};
const calculateAngle = (sizeInBytes)=>{
    const totalSizeInBytes = 2 * 1024 * 1024 * 1024; // 2GB in bytes
    const percentage = sizeInBytes / totalSizeInBytes * 360;
    return Number(percentage.toFixed(2));
};
const calculatePercentage = (sizeInBytes)=>{
    const totalSizeInBytes = 2 * 1024 * 1024 * 1024; // 2GB in bytes
    const percentage = sizeInBytes / totalSizeInBytes * 100;
    return Number(percentage.toFixed(1));
};
const getFileType = (fileName)=>{
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (!extension) return {
        type: "other",
        extension: ""
    };
    const documentExtensions = [
        "pdf",
        "doc",
        "docx",
        "txt",
        "xls",
        "xlsx",
        "csv",
        "rtf",
        "ods",
        "ppt",
        "odp",
        "md",
        "html",
        "htm",
        "epub",
        "pages",
        "fig",
        "psd",
        "ai",
        "indd",
        "xd",
        "sketch",
        "afdesign",
        "afphoto",
        "afphoto"
    ];
    const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "webp"
    ];
    const videoExtensions = [
        "mp4",
        "avi",
        "mov",
        "mkv",
        "webm"
    ];
    const audioExtensions = [
        "mp3",
        "wav",
        "ogg",
        "flac"
    ];
    if (documentExtensions.includes(extension)) return {
        type: "document",
        extension
    };
    if (imageExtensions.includes(extension)) return {
        type: "image",
        extension
    };
    if (videoExtensions.includes(extension)) return {
        type: "video",
        extension
    };
    if (audioExtensions.includes(extension)) return {
        type: "audio",
        extension
    };
    return {
        type: "other",
        extension
    };
};
const formatDateTime = (isoString)=>{
    if (!isoString) return "—";
    const date = new Date(isoString);
    // Get hours and adjust for 12-hour format
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "pm" : "am";
    // Convert hours to 12-hour format
    hours = hours % 12 || 12;
    // Format the time and date parts
    const time = `${hours}:${minutes.toString().padStart(2, "0")}${period}`;
    const day = date.getDate();
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const month = monthNames[date.getMonth()];
    return `${time}, ${day} ${month}`;
};
const getFileIcon = (extension, type)=>{
    switch(extension){
        // Document
        case "pdf":
            return "/assets/icons/file-pdf.svg";
        case "doc":
            return "/assets/icons/file-doc.svg";
        case "docx":
            return "/assets/icons/file-docx.svg";
        case "csv":
            return "/assets/icons/file-csv.svg";
        case "txt":
            return "/assets/icons/file-txt.svg";
        case "xls":
        case "xlsx":
            return "/assets/icons/file-document.svg";
        // Image
        case "svg":
            return "/assets/icons/file-image.svg";
        // Video
        case "mkv":
        case "mov":
        case "avi":
        case "wmv":
        case "mp4":
        case "flv":
        case "webm":
        case "m4v":
        case "3gp":
            return "/assets/icons/file-video.svg";
        // Audio
        case "mp3":
        case "mpeg":
        case "wav":
        case "aac":
        case "flac":
        case "ogg":
        case "wma":
        case "m4a":
        case "aiff":
        case "alac":
            return "/assets/icons/file-audio.svg";
        default:
            switch(type){
                case "image":
                    return "/assets/icons/file-image.svg";
                case "document":
                    return "/assets/icons/file-document.svg";
                case "video":
                    return "/assets/icons/file-video.svg";
                case "audio":
                    return "/assets/icons/file-audio.svg";
                default:
                    return "/assets/icons/file-other.svg";
            }
    }
};
const constructFileUrl = (bucketFileId)=>{
    return `${"TURBOPACK compile-time value", "https://fra.cloud.appwrite.io/v1"}/storage/buckets/${"TURBOPACK compile-time value", "686541fe000c56441e49"}/files/${bucketFileId}/view?project=${"TURBOPACK compile-time value", "68653b2100065f09f7e1"}`;
};
const constructDownloadUrl = (bucketFileId)=>{
    return `${"TURBOPACK compile-time value", "https://fra.cloud.appwrite.io/v1"}/storage/buckets/${"TURBOPACK compile-time value", "686541fe000c56441e49"}/files/${bucketFileId}/download?project=${"TURBOPACK compile-time value", "68653b2100065f09f7e1"}`;
};
const getUsageSummary = (totalSpace)=>{
    return [
        {
            title: "Documents",
            size: totalSpace.document.size,
            latestDate: totalSpace.document.latestDate,
            icon: "/assets/icons/file-document-light.svg",
            url: "/documents"
        },
        {
            title: "Images",
            size: totalSpace.image.size,
            latestDate: totalSpace.image.latestDate,
            icon: "/assets/icons/file-image-light.svg",
            url: "/images"
        },
        {
            title: "Media",
            size: totalSpace.video.size + totalSpace.audio.size,
            latestDate: totalSpace.video.latestDate > totalSpace.audio.latestDate ? totalSpace.video.latestDate : totalSpace.audio.latestDate,
            icon: "/assets/icons/file-video-light.svg",
            url: "/media"
        },
        {
            title: "Others",
            size: totalSpace.other.size,
            latestDate: totalSpace.other.latestDate,
            icon: "/assets/icons/file-other-light.svg",
            url: "/others"
        }
    ];
};
const getFileTypesParams = (type)=>{
    switch(type){
        case "documents":
            return [
                "document"
            ];
        case "images":
            return [
                "image"
            ];
        case "media":
            return [
                "video",
                "audio"
            ];
        case "others":
            return [
                "other"
            ];
        default:
            return [
                "document"
            ];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/actions/data:9ea2d6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fa49ac3cf8787fa17b38608a89e5894552a0fc6cb":"getFiles"},"lib/actions/file.action.ts",""] */ __turbopack_context__.s({
    "getFiles": (()=>getFiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFiles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fa49ac3cf8787fa17b38608a89e5894552a0fc6cb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFiles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZS5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUFkbWluQ2xpZW50LCBjcmVhdGVTZXNzaW9uQ2xpZW50IH0gZnJvbSBcIi4uL2FwcHdyaXRlXCI7XG5pbXBvcnQgeyBJbnB1dEZpbGUgfSBmcm9tIFwibm9kZS1hcHB3cml0ZS9maWxlXCI7XG5pbXBvcnQgeyBhcHB3cml0ZUNvbmZpZyB9IGZyb20gXCIuLi9hcHB3cml0ZS9jb25maWdcIjtcbmltcG9ydCB7IElELCBNb2RlbHMsIFF1ZXJ5IH0gZnJvbSBcIm5vZGUtYXBwd3JpdGVcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZpbGVVcmwsIGdldEZpbGVUeXBlLCBwYXJzZVN0cmluZ2lmeSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcblxuY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLCBtZXNzYWdlKTtcbiAgICB0aHJvdyBlcnJvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHtcbiAgICBmaWxlLFxuICAgIG93bmVySWQsXG4gICAgYWNjb3VudElkLFxuICAgIHBhdGgsXG59OiBVcGxvYWRGaWxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHN0b3JhZ2UsIGRhdGFiYXNlcyB9ID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IElucHV0RmlsZS5mcm9tQnVmZmVyKGZpbGUsIGZpbGUubmFtZSk7XG5cbiAgICAgICAgY29uc3QgYnVja2V0RmlsZSA9IGF3YWl0IHN0b3JhZ2UuY3JlYXRlRmlsZShcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmJ1Y2tldElkLFxuICAgICAgICAgICAgSUQudW5pcXVlKCksXG4gICAgICAgICAgICBpbnB1dEZpbGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaWxlRG9jdW1lbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBnZXRGaWxlVHlwZShidWNrZXRGaWxlLm5hbWUpLnR5cGUsXG4gICAgICAgICAgICBuYW1lOiBidWNrZXRGaWxlLm5hbWUsXG4gICAgICAgICAgICB1cmw6IGNvbnN0cnVjdEZpbGVVcmwoYnVja2V0RmlsZS4kaWQpLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBnZXRGaWxlVHlwZShidWNrZXRGaWxlLm5hbWUpLmV4dGVuc2lvbixcbiAgICAgICAgICAgIHNpemU6IGJ1Y2tldEZpbGUuc2l6ZU9yaWdpbmFsLFxuICAgICAgICAgICAgb3duZXI6IG93bmVySWQsXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnRJZCxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIGJ1Y2tldEZpZWxkSWQ6IGJ1Y2tldEZpbGUuJGlkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0ZpbGUgPSBhd2FpdCBkYXRhYmFzZXNcbiAgICAgICAgICAgIC5jcmVhdGVEb2N1bWVudChcbiAgICAgICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgICAgICAgICAgIElELnVuaXF1ZSgpLFxuICAgICAgICAgICAgICAgIGZpbGVEb2N1bWVudFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGFzeW5jIChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlRmlsZShcbiAgICAgICAgICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuYnVja2V0SWQsXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldEZpbGUuJGlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGUgZG9jdW1lbnRcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkobmV3RmlsZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIFwiRmFpbGVkIHRvIHVwbG9hZCBmaWxlLlwiKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVRdWVyaWVzID0gKFxuICAgIGN1cnJlbnRVc2VyOiBNb2RlbHMuRG9jdW1lbnQsXG4gICAgdHlwZXM6IHN0cmluZ1tdLFxuICAgIHNlYXJjaFRleHQ6IHN0cmluZyxcbiAgICBzb3J0OiBzdHJpbmcsXG4gICAgbGltaXQ/OiBudW1iZXJcbikgPT4ge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBbXG4gICAgICAgIFF1ZXJ5Lm9yKFtcbiAgICAgICAgICAgIFF1ZXJ5LmVxdWFsKFwib3duZXJcIiwgW2N1cnJlbnRVc2VyLiRpZF0pLFxuICAgICAgICAgICAgUXVlcnkuY29udGFpbnMoXCJ1c2Vyc1wiLCBbY3VycmVudFVzZXIuZW1haWxdKSxcbiAgICAgICAgXSksXG4gICAgXTtcblxuICAgIGlmICh0eXBlcy5sZW5ndGggPiAwKSBxdWVyaWVzLnB1c2goUXVlcnkuZXF1YWwoXCJ0eXBlXCIsIHR5cGVzKSk7XG4gICAgaWYgKHNlYXJjaFRleHQpIHF1ZXJpZXMucHVzaChRdWVyeS5jb250YWlucyhcIm5hbWVcIiwgc2VhcmNoVGV4dCkpO1xuICAgIGlmIChsaW1pdCkgcXVlcmllcy5wdXNoKFF1ZXJ5LmxpbWl0KGxpbWl0KSk7XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgICBjb25zdCBbc29ydEJ5LCBvcmRlckJ5XSA9IHNvcnQuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIHF1ZXJpZXMucHVzaChcbiAgICAgICAgICAgIG9yZGVyQnkgPT09IFwiYXNjXCIgPyBRdWVyeS5vcmRlckFzYyhzb3J0QnkpIDogUXVlcnkub3JkZXJEZXNjKHNvcnRCeSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcmllcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlcyA9IGFzeW5jICh7XG4gICAgdHlwZXMgPSBbXSxcbiAgICBzZWFyY2hUZXh0ID0gXCJcIixcbiAgICBzb3J0ID0gXCIkY3JlYXRlZEF0LWRlc2NcIixcbiAgICBsaW1pdCxcbn06IEdldEZpbGVzUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRhdGFiYXNlcyB9ID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICBjb25zdCBxdWVyaWVzID0gY3JlYXRlUXVlcmllcyhcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGxpbWl0XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coeyBjdXJyZW50VXNlciwgcXVlcmllcyB9KTtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGRhdGFiYXNlcy5saXN0RG9jdW1lbnRzKFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZGF0YWJhc2VJZCxcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgICAgICAgcXVlcmllc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZmlsZXMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KGZpbGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gZ2V0IGZpbGVzXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW5hbWVGaWxlID0gYXN5bmMgKHtcbiAgICBmaWxlSWQsXG4gICAgbmFtZSxcbiAgICBleHRlbnNpb24sXG4gICAgcGF0aCxcbn06IFJlbmFtZUZpbGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGAke25hbWV9LiR7ZXh0ZW5zaW9ufWA7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMudXBkYXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV3TmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KHVwZGF0ZWRGaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gcmVuYW1lIGZpbGVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbGVVc2VyID0gYXN5bmMgKHtcbiAgICBmaWxlSWQsXG4gICAgZW1haWxzLFxuICAgIHBhdGgsXG59OiBVcGRhdGVGaWxlVXNlcnNQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMudXBkYXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNlcnM6IGVtYWlscyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KHVwZGF0ZWRGaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gcmVuYW1lIGZpbGVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZpbGUgPSBhc3luYyAoe1xuICAgIGZpbGVJZCxcbiAgICBidWNrZXRGaWxlSWQsXG4gICAgcGF0aCxcbn06IERlbGV0ZUZpbGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzLCBzdG9yYWdlIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVsZXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMuZGVsZXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZGVsZXRlZEZpbGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlRmlsZShhcHB3cml0ZUNvbmZpZy5idWNrZXRJZCwgYnVja2V0RmlsZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKHBhdGgpO1xuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCBcIkZhaWxlZCB0byByZW5hbWUgZmlsZVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxTcGFjZVVzZWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhYmFzZXMgfSA9IGF3YWl0IGNyZWF0ZVNlc3Npb25DbGllbnQoKTtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBpcyBub3QgYXV0aGVudGljYXRlZC5cIik7XG5cbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGRhdGFiYXNlcy5saXN0RG9jdW1lbnRzKFxuICAgICAgYXBwd3JpdGVDb25maWcuZGF0YWJhc2VJZCxcbiAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgW1F1ZXJ5LmVxdWFsKFwib3duZXJcIiwgW2N1cnJlbnRVc2VyLiRpZF0pXSxcbiAgICApO1xuXG4gICAgY29uc3QgdG90YWxTcGFjZSA9IHtcbiAgICAgIGltYWdlOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIGRvY3VtZW50OiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIHZpZGVvOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIGF1ZGlvOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIG90aGVyOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIHVzZWQ6IDAsXG4gICAgICBhbGw6IDIgKiAxMDI0ICogMTAyNCAqIDEwMjQgLyogMkdCIGF2YWlsYWJsZSBidWNrZXQgc3RvcmFnZSAqLyxcbiAgICB9O1xuXG4gICAgZmlsZXMuZG9jdW1lbnRzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlIGFzIEZpbGVUeXBlO1xuICAgICAgdG90YWxTcGFjZVtmaWxlVHlwZV0uc2l6ZSArPSBmaWxlLnNpemU7XG4gICAgICB0b3RhbFNwYWNlLnVzZWQgKz0gZmlsZS5zaXplO1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0b3RhbFNwYWNlW2ZpbGVUeXBlXS5sYXRlc3REYXRlIHx8XG4gICAgICAgIG5ldyBEYXRlKGZpbGUuJHVwZGF0ZWRBdCkgPiBuZXcgRGF0ZSh0b3RhbFNwYWNlW2ZpbGVUeXBlXS5sYXRlc3REYXRlKVxuICAgICAgKSB7XG4gICAgICAgIHRvdGFsU3BhY2VbZmlsZVR5cGVdLmxhdGVzdERhdGUgPSBmaWxlLiR1cGRhdGVkQXQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkodG90YWxTcGFjZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIFwiRXJyb3IgY2FsY3VsYXRpbmcgdG90YWwgc3BhY2UgdXNlZDosIFwiKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBZ0dhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Thumbnail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Thumbnail": (()=>Thumbnail),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const Thumbnail = ({ type, extension, url = "", imageClassName, className })=>{
    const isImage = type === "image" && extension !== "svg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("thumbnail", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: isImage ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileIcon"])(extension, type),
            alt: "Thumbnail",
            width: 100,
            height: 100,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("siz-8 object-contain", imageClassName, isImage && "thumbnail-image")
        }, void 0, false, {
            fileName: "[project]/components/Thumbnail.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Thumbnail.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
};
_c = Thumbnail;
const __TURBOPACK__default__export__ = Thumbnail;
var _c;
__turbopack_context__.k.register(_c, "Thumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/FormatedDateTime.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const FormatedDateTime = ({ date, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('body-1 text-light-200', className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(date)
    }, void 0, false, {
        fileName: "[project]/components/FormatedDateTime.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = FormatedDateTime;
const __TURBOPACK__default__export__ = FormatedDateTime;
var _c;
__turbopack_context__.k.register(_c, "FormatedDateTime");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Search.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$9ea2d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:9ea2d6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Thumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormatedDateTime$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FormatedDateTime.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const Search = ()=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const searchQuery = searchParams.get("query") || "";
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [debouncedQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(query, 300);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            const fetchFiles = {
                "Search.useEffect.fetchFiles": async ()=>{
                    if (debouncedQuery.length === 0) {
                        setResults([]);
                        setOpen(false);
                        return router.push(path.replace(searchParams.toString(), ""));
                    }
                    const files = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$9ea2d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFiles"])({
                        types: [],
                        searchText: debouncedQuery
                    });
                    setResults(files.documents);
                    setOpen(true);
                }
            }["Search.useEffect.fetchFiles"];
            fetchFiles();
        }
    }["Search.useEffect"], [
        debouncedQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            if (!searchQuery) {
                setQuery("");
            }
        }
    }["Search.useEffect"], [
        searchQuery
    ]);
    const handleClickItem = (file)=>{
        setOpen(false);
        setResults([]);
        router.push(`/${file.type === "video" || file.type === "audio" ? "media" : file.type + "s"}?query=${query}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search-input-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/icons/search.svg",
                    alt: "Search",
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/components/Search.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    value: query,
                    placeholder: "Search...",
                    className: "search-input",
                    onChange: (e)=>setQuery(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/Search.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "search-result",
                    children: results.length > 0 ? results.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center justify-between",
                            onClick: ()=>handleClickItem(file),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex cursor-pointer items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: file.type,
                                            extension: file.extension,
                                            url: file.url,
                                            className: "size-9 min-w-9"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Search.tsx",
                                            lineNumber: 84,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "subtitle-2 line-clamp-1 text-light-100",
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Search.tsx",
                                            lineNumber: 90,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Search.tsx",
                                    lineNumber: 83,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormatedDateTime$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    date: file.$createdAt,
                                    className: "caption line-clamp-1 text-light-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/Search.tsx",
                                    lineNumber: 95,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, file.$id, true, {
                            fileName: "[project]/components/Search.tsx",
                            lineNumber: 78,
                            columnNumber: 33
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-result",
                        children: "No files found"
                    }, void 0, false, {
                        fileName: "[project]/components/Search.tsx",
                        lineNumber: 102,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Search.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Search.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Search.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
};
_s(Search, "Jm6E9Q6sqWZXf0nbhmX3qDC+Vh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_FILE_SIZE": (()=>MAX_FILE_SIZE),
    "actionsDropdownItems": (()=>actionsDropdownItems),
    "avatarPlaceholderUrl": (()=>avatarPlaceholderUrl),
    "navItems": (()=>navItems),
    "sortTypes": (()=>sortTypes)
});
const navItems = [
    {
        name: 'Dashboard',
        icon: '/assets/icons/dashboard.svg',
        url: '/'
    },
    {
        name: 'Documents',
        icon: '/assets/icons/documents.svg',
        url: '/documents'
    },
    {
        name: 'Images',
        icon: '/assets/icons/images.svg',
        url: '/images'
    },
    {
        name: 'Media',
        icon: '/assets/icons/video.svg',
        url: '/media'
    },
    {
        name: 'Others',
        icon: '/assets/icons/others.svg',
        url: '/others'
    }
];
const actionsDropdownItems = [
    {
        label: 'Rename',
        icon: '/assets/icons/edit.svg',
        value: 'rename'
    },
    {
        label: 'Details',
        icon: '/assets/icons/info.svg',
        value: 'details'
    },
    {
        label: 'Share',
        icon: '/assets/icons/share.svg',
        value: 'share'
    },
    {
        label: 'Download',
        icon: '/assets/icons/download.svg',
        value: 'download'
    },
    {
        label: 'Delete',
        icon: '/assets/icons/delete.svg',
        value: 'delete'
    }
];
const sortTypes = [
    {
        label: 'Date created (newest)',
        value: '$createdAt-desc'
    },
    {
        label: 'Created Date (oldest)',
        value: '$createdAt-asc'
    },
    {
        label: 'Name (A-Z)',
        value: 'name-asc'
    },
    {
        label: 'Name (Z-A)',
        value: 'name-desc'
    },
    {
        label: 'Size (Highest)',
        value: 'size-desc'
    },
    {
        label: 'Size (Lowest)',
        value: 'size-asc'
    }
];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const avatarPlaceholderUrl = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/actions/data:1c5246 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fc662fc5127a6fe33cfec8705cc667705a8a6019a":"uploadFile"},"lib/actions/file.action.ts",""] */ __turbopack_context__.s({
    "uploadFile": (()=>uploadFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var uploadFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fc662fc5127a6fe33cfec8705cc667705a8a6019a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "uploadFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZS5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUFkbWluQ2xpZW50LCBjcmVhdGVTZXNzaW9uQ2xpZW50IH0gZnJvbSBcIi4uL2FwcHdyaXRlXCI7XG5pbXBvcnQgeyBJbnB1dEZpbGUgfSBmcm9tIFwibm9kZS1hcHB3cml0ZS9maWxlXCI7XG5pbXBvcnQgeyBhcHB3cml0ZUNvbmZpZyB9IGZyb20gXCIuLi9hcHB3cml0ZS9jb25maWdcIjtcbmltcG9ydCB7IElELCBNb2RlbHMsIFF1ZXJ5IH0gZnJvbSBcIm5vZGUtYXBwd3JpdGVcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZpbGVVcmwsIGdldEZpbGVUeXBlLCBwYXJzZVN0cmluZ2lmeSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcblxuY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLCBtZXNzYWdlKTtcbiAgICB0aHJvdyBlcnJvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHtcbiAgICBmaWxlLFxuICAgIG93bmVySWQsXG4gICAgYWNjb3VudElkLFxuICAgIHBhdGgsXG59OiBVcGxvYWRGaWxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHN0b3JhZ2UsIGRhdGFiYXNlcyB9ID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IElucHV0RmlsZS5mcm9tQnVmZmVyKGZpbGUsIGZpbGUubmFtZSk7XG5cbiAgICAgICAgY29uc3QgYnVja2V0RmlsZSA9IGF3YWl0IHN0b3JhZ2UuY3JlYXRlRmlsZShcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmJ1Y2tldElkLFxuICAgICAgICAgICAgSUQudW5pcXVlKCksXG4gICAgICAgICAgICBpbnB1dEZpbGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaWxlRG9jdW1lbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBnZXRGaWxlVHlwZShidWNrZXRGaWxlLm5hbWUpLnR5cGUsXG4gICAgICAgICAgICBuYW1lOiBidWNrZXRGaWxlLm5hbWUsXG4gICAgICAgICAgICB1cmw6IGNvbnN0cnVjdEZpbGVVcmwoYnVja2V0RmlsZS4kaWQpLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBnZXRGaWxlVHlwZShidWNrZXRGaWxlLm5hbWUpLmV4dGVuc2lvbixcbiAgICAgICAgICAgIHNpemU6IGJ1Y2tldEZpbGUuc2l6ZU9yaWdpbmFsLFxuICAgICAgICAgICAgb3duZXI6IG93bmVySWQsXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnRJZCxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIGJ1Y2tldEZpZWxkSWQ6IGJ1Y2tldEZpbGUuJGlkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0ZpbGUgPSBhd2FpdCBkYXRhYmFzZXNcbiAgICAgICAgICAgIC5jcmVhdGVEb2N1bWVudChcbiAgICAgICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgICAgICAgICAgIElELnVuaXF1ZSgpLFxuICAgICAgICAgICAgICAgIGZpbGVEb2N1bWVudFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGFzeW5jIChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlRmlsZShcbiAgICAgICAgICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuYnVja2V0SWQsXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldEZpbGUuJGlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGUgZG9jdW1lbnRcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkobmV3RmlsZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIFwiRmFpbGVkIHRvIHVwbG9hZCBmaWxlLlwiKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVRdWVyaWVzID0gKFxuICAgIGN1cnJlbnRVc2VyOiBNb2RlbHMuRG9jdW1lbnQsXG4gICAgdHlwZXM6IHN0cmluZ1tdLFxuICAgIHNlYXJjaFRleHQ6IHN0cmluZyxcbiAgICBzb3J0OiBzdHJpbmcsXG4gICAgbGltaXQ/OiBudW1iZXJcbikgPT4ge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBbXG4gICAgICAgIFF1ZXJ5Lm9yKFtcbiAgICAgICAgICAgIFF1ZXJ5LmVxdWFsKFwib3duZXJcIiwgW2N1cnJlbnRVc2VyLiRpZF0pLFxuICAgICAgICAgICAgUXVlcnkuY29udGFpbnMoXCJ1c2Vyc1wiLCBbY3VycmVudFVzZXIuZW1haWxdKSxcbiAgICAgICAgXSksXG4gICAgXTtcblxuICAgIGlmICh0eXBlcy5sZW5ndGggPiAwKSBxdWVyaWVzLnB1c2goUXVlcnkuZXF1YWwoXCJ0eXBlXCIsIHR5cGVzKSk7XG4gICAgaWYgKHNlYXJjaFRleHQpIHF1ZXJpZXMucHVzaChRdWVyeS5jb250YWlucyhcIm5hbWVcIiwgc2VhcmNoVGV4dCkpO1xuICAgIGlmIChsaW1pdCkgcXVlcmllcy5wdXNoKFF1ZXJ5LmxpbWl0KGxpbWl0KSk7XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgICBjb25zdCBbc29ydEJ5LCBvcmRlckJ5XSA9IHNvcnQuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIHF1ZXJpZXMucHVzaChcbiAgICAgICAgICAgIG9yZGVyQnkgPT09IFwiYXNjXCIgPyBRdWVyeS5vcmRlckFzYyhzb3J0QnkpIDogUXVlcnkub3JkZXJEZXNjKHNvcnRCeSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcmllcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlcyA9IGFzeW5jICh7XG4gICAgdHlwZXMgPSBbXSxcbiAgICBzZWFyY2hUZXh0ID0gXCJcIixcbiAgICBzb3J0ID0gXCIkY3JlYXRlZEF0LWRlc2NcIixcbiAgICBsaW1pdCxcbn06IEdldEZpbGVzUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRhdGFiYXNlcyB9ID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICBjb25zdCBxdWVyaWVzID0gY3JlYXRlUXVlcmllcyhcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGxpbWl0XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coeyBjdXJyZW50VXNlciwgcXVlcmllcyB9KTtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGRhdGFiYXNlcy5saXN0RG9jdW1lbnRzKFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZGF0YWJhc2VJZCxcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgICAgICAgcXVlcmllc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZmlsZXMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KGZpbGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gZ2V0IGZpbGVzXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW5hbWVGaWxlID0gYXN5bmMgKHtcbiAgICBmaWxlSWQsXG4gICAgbmFtZSxcbiAgICBleHRlbnNpb24sXG4gICAgcGF0aCxcbn06IFJlbmFtZUZpbGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGAke25hbWV9LiR7ZXh0ZW5zaW9ufWA7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMudXBkYXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV3TmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KHVwZGF0ZWRGaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gcmVuYW1lIGZpbGVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbGVVc2VyID0gYXN5bmMgKHtcbiAgICBmaWxlSWQsXG4gICAgZW1haWxzLFxuICAgIHBhdGgsXG59OiBVcGRhdGVGaWxlVXNlcnNQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMudXBkYXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNlcnM6IGVtYWlscyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChwYXRoKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KHVwZGF0ZWRGaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gcmVuYW1lIGZpbGVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZpbGUgPSBhc3luYyAoe1xuICAgIGZpbGVJZCxcbiAgICBidWNrZXRGaWxlSWQsXG4gICAgcGF0aCxcbn06IERlbGV0ZUZpbGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2VzLCBzdG9yYWdlIH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVsZXRlZEZpbGUgPSBhd2FpdCBkYXRhYmFzZXMuZGVsZXRlRG9jdW1lbnQoXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZmlsZXNDb2xsZWN0aW9uSWQsXG4gICAgICAgICAgICBmaWxlSWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZGVsZXRlZEZpbGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlRmlsZShhcHB3cml0ZUNvbmZpZy5idWNrZXRJZCwgYnVja2V0RmlsZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKHBhdGgpO1xuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCBcIkZhaWxlZCB0byByZW5hbWUgZmlsZVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxTcGFjZVVzZWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhYmFzZXMgfSA9IGF3YWl0IGNyZWF0ZVNlc3Npb25DbGllbnQoKTtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBpcyBub3QgYXV0aGVudGljYXRlZC5cIik7XG5cbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGRhdGFiYXNlcy5saXN0RG9jdW1lbnRzKFxuICAgICAgYXBwd3JpdGVDb25maWcuZGF0YWJhc2VJZCxcbiAgICAgIGFwcHdyaXRlQ29uZmlnLmZpbGVzQ29sbGVjdGlvbklkLFxuICAgICAgW1F1ZXJ5LmVxdWFsKFwib3duZXJcIiwgW2N1cnJlbnRVc2VyLiRpZF0pXSxcbiAgICApO1xuXG4gICAgY29uc3QgdG90YWxTcGFjZSA9IHtcbiAgICAgIGltYWdlOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIGRvY3VtZW50OiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIHZpZGVvOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIGF1ZGlvOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIG90aGVyOiB7IHNpemU6IDAsIGxhdGVzdERhdGU6IFwiXCIgfSxcbiAgICAgIHVzZWQ6IDAsXG4gICAgICBhbGw6IDIgKiAxMDI0ICogMTAyNCAqIDEwMjQgLyogMkdCIGF2YWlsYWJsZSBidWNrZXQgc3RvcmFnZSAqLyxcbiAgICB9O1xuXG4gICAgZmlsZXMuZG9jdW1lbnRzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlIGFzIEZpbGVUeXBlO1xuICAgICAgdG90YWxTcGFjZVtmaWxlVHlwZV0uc2l6ZSArPSBmaWxlLnNpemU7XG4gICAgICB0b3RhbFNwYWNlLnVzZWQgKz0gZmlsZS5zaXplO1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0b3RhbFNwYWNlW2ZpbGVUeXBlXS5sYXRlc3REYXRlIHx8XG4gICAgICAgIG5ldyBEYXRlKGZpbGUuJHVwZGF0ZWRBdCkgPiBuZXcgRGF0ZSh0b3RhbFNwYWNlW2ZpbGVUeXBlXS5sYXRlc3REYXRlKVxuICAgICAgKSB7XG4gICAgICAgIHRvdGFsU3BhY2VbZmlsZVR5cGVdLmxhdGVzdERhdGUgPSBmaWxlLiR1cGRhdGVkQXQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkodG90YWxTcGFjZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIFwiRXJyb3IgY2FsY3VsYXRpbmcgdG90YWwgc3BhY2UgdXNlZDosIFwiKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBZWEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/FileUploader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Thumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$1c5246__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:1c5246 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const FileUploader = ({ ownerId, accountId, className })=>{
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploader.useCallback[onDrop]": async (acceptedFiles)=>{
            // Do something with the files
            setFiles(acceptedFiles);
            const uploadPromises = acceptedFiles.map({
                "FileUploader.useCallback[onDrop].uploadPromises": (file)=>{
                    if (file.size > __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FILE_SIZE"]) {
                        setFiles({
                            "FileUploader.useCallback[onDrop].uploadPromises": (prevFiles)=>prevFiles.filter({
                                    "FileUploader.useCallback[onDrop].uploadPromises": (f)=>f.name !== file.name
                                }["FileUploader.useCallback[onDrop].uploadPromises"])
                        }["FileUploader.useCallback[onDrop].uploadPromises"]);
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Error", {
                            description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white body-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileUploader.tsx",
                                        lineNumber: 38,
                                        columnNumber: 33
                                    }, this),
                                    " ",
                                    "is too large. Max file size is 50MB."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileUploader.tsx",
                                lineNumber: 37,
                                columnNumber: 29
                            }, this),
                            className: "error-toast"
                        });
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$1c5246__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["uploadFile"])({
                        file,
                        ownerId,
                        accountId,
                        path
                    }).then({
                        "FileUploader.useCallback[onDrop].uploadPromises": (uploadedFile)=>{
                            if (uploadedFile) {
                                setFiles({
                                    "FileUploader.useCallback[onDrop].uploadPromises": (prevFiles)=>prevFiles.filter({
                                            "FileUploader.useCallback[onDrop].uploadPromises": (f)=>f.name !== file.name
                                        }["FileUploader.useCallback[onDrop].uploadPromises"])
                                }["FileUploader.useCallback[onDrop].uploadPromises"]);
                            }
                        }
                    }["FileUploader.useCallback[onDrop].uploadPromises"]);
                }
            }["FileUploader.useCallback[onDrop].uploadPromises"]);
            await Promise.all(uploadPromises);
        }
    }["FileUploader.useCallback[onDrop]"], [
        ownerId,
        accountId,
        path
    ]);
    const { getRootProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop
    });
    const handleRemoveFile = (e, fileName)=>{
        e.stopPropagation();
        setFiles((prevFiles)=>prevFiles.filter((file)=>file.name !== fileName));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...getRootProps(),
        className: "cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...getInputProps()
            }, void 0, false, {
                fileName: "[project]/components/FileUploader.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("uploader-button", className),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/icons/upload.svg",
                        alt: "upload",
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/components/FileUploader.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: "Upload"
                    }, void 0, false, {
                        fileName: "[project]/components/FileUploader.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FileUploader.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "uploader-preview-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "h4 text-light-100",
                        children: "Uploading"
                    }, void 0, false, {
                        fileName: "[project]/components/FileUploader.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    files.map((file, index)=>{
                        const { type, extension } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileType"])(file.name);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "uploader-preview-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: type,
                                            extension: extension,
                                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertFileToUrl"])(file)
                                        }, void 0, false, {
                                            fileName: "[project]/components/FileUploader.tsx",
                                            lineNumber: 104,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-item-name",
                                            children: [
                                                file.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/icons/file-loader.gif",
                                                    alt: "Loader",
                                                    width: 80,
                                                    height: 26
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FileUploader.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/FileUploader.tsx",
                                            lineNumber: 110,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FileUploader.tsx",
                                    lineNumber: 103,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/icons/remove.svg",
                                    alt: "Remove",
                                    width: 24,
                                    height: 24,
                                    onClick: (e)=>handleRemoveFile(e, file.name)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileUploader.tsx",
                                    lineNumber: 121,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, `${file.name}-${index}`, true, {
                            fileName: "[project]/components/FileUploader.tsx",
                            lineNumber: 99,
                            columnNumber: 29
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/FileUploader.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FileUploader.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
};
_s(FileUploader, "1NF7Ej7O3SumaO3Sw3t8J2K3s2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = FileUploader;
const __TURBOPACK__default__export__ = FileUploader;
var _c;
__turbopack_context__.k.register(_c, "FileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cross2Icon"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 67,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 66,
                        columnNumber: 7
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 120,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/actions/data:214582 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f4deb24e1f0fe22c488f94549f00077fcb1b40084":"signOutUser"},"lib/actions/user.actions.ts",""] */ __turbopack_context__.s({
    "signOutUser": (()=>signOutUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOutUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f4deb24e1f0fe22c488f94549f00077fcb1b40084", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlci5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBJRCwgUXVlcnkgfSBmcm9tIFwibm9kZS1hcHB3cml0ZVwiO1xuaW1wb3J0IHsgY3JlYXRlQWRtaW5DbGllbnQsIGNyZWF0ZVNlc3Npb25DbGllbnQgfSBmcm9tIFwiLi4vYXBwd3JpdGVcIjtcbmltcG9ydCB7IGFwcHdyaXRlQ29uZmlnIH0gZnJvbSBcIi4uL2FwcHdyaXRlL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmdpZnkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyBhdmF0YXJQbGFjZWhvbGRlclVybCB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IGdldFVzZXJCeUVtYWlsID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGRhdGFiYXNlcyB9ID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlcy5saXN0RG9jdW1lbnRzKFxuICAgICAgICBhcHB3cml0ZUNvbmZpZy5kYXRhYmFzZUlkLFxuICAgICAgICBhcHB3cml0ZUNvbmZpZy51c2Vyc0NvbGxlY3Rpb25JZCxcbiAgICAgICAgW1F1ZXJ5LmVxdWFsKFwiZW1haWxcIiwgW2VtYWlsXSldXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQudG90YWwgPiAwID8gcmVzdWx0LmRvY3VtZW50c1swXSA6IG51bGw7XG59O1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IsIG1lc3NhZ2UpO1xuICAgIHRocm93IGVycm9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbE9UUCA9IGFzeW5jICh7IGVtYWlsIH06IHsgZW1haWw6IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgeyBhY2NvdW50IH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGFjY291bnQuY3JlYXRlRW1haWxUb2tlbihJRC51bmlxdWUoKSwgZW1haWwpO1xuXG4gICAgICAgIHJldHVybiBzZXNzaW9uLnVzZXJJZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gc2VuZCBlbWFpbCBPVFBcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY291bnQgPSBhc3luYyAoe1xuICAgIGZ1bGxOYW1lLFxuICAgIGVtYWlsLFxufToge1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBnZXRVc2VyQnlFbWFpbChlbWFpbCk7XG5cbiAgICBjb25zdCBhY2NvdW50SWQgPSBhd2FpdCBzZW5kRW1haWxPVFAoeyBlbWFpbCB9KTtcbiAgICBpZiAoIWFjY291bnRJZCkgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNlbmQgYW4gT1RQXCIpO1xuXG4gICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhYmFzZXMgfSA9IGF3YWl0IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG5cbiAgICAgICAgYXdhaXQgZGF0YWJhc2VzLmNyZWF0ZURvY3VtZW50KFxuICAgICAgICAgICAgYXBwd3JpdGVDb25maWcuZGF0YWJhc2VJZCxcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLnVzZXJzQ29sbGVjdGlvbklkLFxuICAgICAgICAgICAgSUQudW5pcXVlKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnVsbE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJQbGFjZWhvbGRlclVybCxcbiAgICAgICAgICAgICAgICBhY2NvdW50SWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlU3RyaW5naWZ5KHsgYWNjb3VudElkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHZlcmlmeVNlY3JldCA9IGFzeW5jICh7XG4gICAgYWNjb3VudElkLFxuICAgIHBhc3N3b3JkLFxufToge1xuICAgIGFjY291bnRJZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBhY2NvdW50IH0gPSBhd2FpdCBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhY2NvdW50LmNyZWF0ZVNlc3Npb24oYWNjb3VudElkLCBwYXNzd29yZCk7XG5cbiAgICAgICAgKGF3YWl0IGNvb2tpZXMoKSkuc2V0KFwiYXBwd3JpdGUtc2Vzc2lvblwiLCBzZXNzaW9uLnNlY3JldCwge1xuICAgICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkoeyBzZXNzaW9uSWQ6IHNlc3Npb24uJGlkIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCBcIkZhaWxlZCB0byB2ZXJpZnkgT1RQLlwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBhY2NvdW50LCBkYXRhYmFzZXMgfSA9IGF3YWl0IGNyZWF0ZVNlc3Npb25DbGllbnQoKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhY2NvdW50LmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYXRhYmFzZXMubGlzdERvY3VtZW50cyhcbiAgICAgICAgICAgIGFwcHdyaXRlQ29uZmlnLmRhdGFiYXNlSWQsXG4gICAgICAgICAgICBhcHB3cml0ZUNvbmZpZy51c2Vyc0NvbGxlY3Rpb25JZCxcbiAgICAgICAgICAgIFtRdWVyeS5lcXVhbChcImFjY291bnRJZFwiLCByZXN1bHQuJGlkKV1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodXNlci50b3RhbCA8PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdpZnkodXNlci5kb2N1bWVudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBhY2NvdW50IH0gPSBhd2FpdCBjcmVhdGVTZXNzaW9uQ2xpZW50KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhY2NvdW50LmRlbGV0ZVNlc3Npb24oXCJjdXJyZW50XCIpO1xuICAgICAgICAoYXdhaXQgY29va2llcygpKS5kZWxldGUoXCJhcHB3cml0ZS1zZXNzaW9uXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCBcIkZhaWxlZCB0byBzaWduIG91dCB1c2VyXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHJlZGlyZWN0KFwiL3NpZ24taW5cIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNpZ25JblVzZXIgPSBhc3luYyAoeyBlbWFpbCB9OiB7IGVtYWlsOiBzdHJpbmcgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGdldFVzZXJCeUVtYWlsKGVtYWlsKTtcblxuICAgICAgICAvLyBVc2VyIGV4aXRzLCBzZW5kIE9UUFxuICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kRW1haWxPVFAoeyBlbWFpbCB9KTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVN0cmluZ2lmeSh7IGFjY291bnRJZDogZXhpc3RpbmdVc2VyLmFjY291bnRJZCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZVN0cmluZ2lmeSh7IGFjY291bnRJZDogbnVsbCwgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgXCJGYWlsZWQgdG8gc2lnbiBpbiB1c2VyXCIpO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQW1IYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/MobileNavigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FileUploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$214582__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:214582 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const MobileNavigation = ({ $id: ownerId, accountId, fullName, email, avatar })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "mobile-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/icons/logo-full-brand.svg",
                alt: "logo",
                width: 120,
                height: 52,
                className: "h-auto"
            }, void 0, false, {
                fileName: "[project]/components/MobileNavigation.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/icons/menu.svg",
                            alt: "menu",
                            width: 30,
                            height: 30
                        }, void 0, false, {
                            fileName: "[project]/components/MobileNavigation.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MobileNavigation.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                        className: "shad-sheet h-screen px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-user",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: avatar,
                                                alt: "avatar",
                                                width: 44,
                                                height: 44,
                                                className: "header-user-avatar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MobileNavigation.tsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sm:hidden lg:block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "subtitle-2 capitalize",
                                                        children: fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MobileNavigation.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "caption",
                                                        children: email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MobileNavigation.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MobileNavigation.tsx",
                                                lineNumber: 70,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MobileNavigation.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "mb-4 bg-light-200/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MobileNavigation.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MobileNavigation.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mobile-nav",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mobile-nav-list",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map(({ url, name, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: url,
                                            className: "lg:w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-nav-item", pathname === url && "shad-active"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: icon,
                                                        alt: "icon",
                                                        width: 24,
                                                        height: 24,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("nav-icon", pathname === url && "nav-icon-active")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MobileNavigation.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MobileNavigation.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MobileNavigation.tsx",
                                                lineNumber: 88,
                                                columnNumber: 37
                                            }, this)
                                        }, name, false, {
                                            fileName: "[project]/components/MobileNavigation.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/MobileNavigation.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MobileNavigation.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                className: "my-5 bg-light-200/20"
                            }, void 0, false, {
                                fileName: "[project]/components/MobileNavigation.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between gap-5 pb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        accountId: accountId,
                                        ownerId: ownerId
                                    }, void 0, false, {
                                        fileName: "[project]/components/MobileNavigation.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "mobile-sign-out-button",
                                        onClick: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$214582__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutUser"])(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "assets/icons/logout.svg",
                                                alt: "logout button",
                                                width: 24,
                                                height: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/MobileNavigation.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MobileNavigation.tsx",
                                                lineNumber: 125,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MobileNavigation.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MobileNavigation.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MobileNavigation.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MobileNavigation.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MobileNavigation.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
};
_s(MobileNavigation, "zulZ+F5240eOSupJE1BcVv8NMvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileNavigation;
const __TURBOPACK__default__export__ = MobileNavigation;
var _c;
__turbopack_context__.k.register(_c, "MobileNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Sidebar = ({ fullName, email, avatar })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/icons/logo-full-brand.svg",
                        alt: "logo",
                        width: 160,
                        height: 50,
                        className: "hidden h-auto lg:block"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/icons/logo-brand.svg",
                        alt: "logo",
                        width: 52,
                        height: 52,
                        className: "lg:hidden"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sidebar-nav",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-1 flex-col gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map(({ url, name, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: url,
                            className: "lg:w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sidebar-nav-item", pathname === url && "shad-active"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: icon,
                                        alt: "icon",
                                        width: 24,
                                        height: 24,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("nav-icon", pathname === url && "nav-icon-active")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 44,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hidden lg:block",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 43,
                                columnNumber: 29
                            }, this)
                        }, name, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/images/files-2.png",
                alt: "logo",
                width: 506,
                height: 418,
                className: "w-full"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-user-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: avatar,
                        alt: "Avatar",
                        width: 44,
                        height: 44,
                        className: "sidebar-user-avatar"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden w-full lg:block min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle-2 capitalize",
                                children: fullName
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "caption truncate",
                                children: email
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/sonner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_b9ef0313._.js.map