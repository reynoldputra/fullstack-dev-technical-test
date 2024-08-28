import { ErrorValidation } from "@/types/apiResponse";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isErrorValidation(error: any): error is ErrorValidation {
  if (
    typeof error.constraints !== 'object' ||
    typeof error.property !== 'string' ||
    typeof error !== 'object'
  ) {
    return false;
  }

  if (error.children.length > 0 && error.children !== undefined) {
    return isErrorValidation(error.children);
  }

  return true;
}
