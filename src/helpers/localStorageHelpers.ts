import {log} from "./generalHelpers";

// Get local storage item
export const getLocaleStorageItem = (key: string): any|null => {
    const data: any|null = localStorage.getItem(key);

    if (!data) {
        log("Read local storage error", {key, data});
        return data;
    }

    return data;
};

// Set local storage item
export const setLocaleStorageItem = (key: string, data: any): void => {
    localStorage.setItem(key, data);
};

// Remove local storage item
export const removeLocaleStorageItem = (key: string): void => {
    localStorage.removeItem(key);
};

// Remove all item from local storage
export const removeAllLocaleStorageItems = (): void => {
    localStorage.clear();
};

