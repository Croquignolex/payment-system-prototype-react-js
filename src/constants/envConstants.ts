export const API_BASE_URL: string|undefined = process.env.REACT_APP_API_BASE_URL;

export const APP = {
    NAME: process.env.REACT_APP_APP_NAME,
    VERSION: process.env.REACT_APP_APP_VERSION,
    FULL_NAME: process.env.REACT_APP_APP_FULL_NAME
} as const;

export const LOCAL_STORAGE_KEY = {
    USERS: process.env.REACT_APP_LOCAL_STORAGE_USER_KEY,
} as const;