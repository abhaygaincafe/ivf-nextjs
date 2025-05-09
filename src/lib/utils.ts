
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * A safer way to create JSON data for structured data 
 * that properly handles problematic values
 */
export function createSafeStructuredData(data: Record<string, any>): Record<string, any> {
  // Create a deep copy to avoid modifying the original
  // while ensuring all values are safely serializable
  const processValue = (value: any): any => {
    // Handle null/undefined
    if (value === null || value === undefined) {
      return null;
    }
    
    // Handle primitive types
    if (typeof value !== 'object' && typeof value !== 'function') {
      // Convert symbols to strings
      if (typeof value === 'symbol') {
        return String(value);
      }
      // Skip functions
      if (typeof value === 'function') {
        return undefined;
      }
      return value;
    }
    
    // Handle dates
    if (value instanceof Date) {
      return value.toISOString();
    }
    
    // Handle arrays
    if (Array.isArray(value)) {
      return value
        .map(processValue)
        .filter(item => item !== undefined);
    }
    
    // Handle objects
    const result: Record<string, any> = {};
    for (const key of Object.keys(value)) {
      const processed = processValue(value[key]);
      if (processed !== undefined) {
        result[key] = processed;
      }
    }
    
    return result;
  };
  
  return processValue(data);
}
