import { ErrorInfo } from "react";

export function logErrorToService(error: Error , info: ErrorInfo) {
    // Use your preferred error logging service
    console.error("Caught an error:", error, info);
}