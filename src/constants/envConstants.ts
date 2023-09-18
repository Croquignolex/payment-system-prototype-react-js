export const API_BASE_URL: string|undefined = process.env.REACT_APP_API_BASE_URL;

export const APP = {
    name: process.env.REACT_APP_APP_NAME,
    version: process.env.REACT_APP_APP_VERSION,
    fullName: process.env.REACT_APP_APP_FULL_NAME
} as const;

export const LOCAL_STORAGE_KEY = {
    users: process.env.REACT_APP_LOCAL_STORAGE_USER_KEY,
} as const;