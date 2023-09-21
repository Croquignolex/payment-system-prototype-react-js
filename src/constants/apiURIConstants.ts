export const authApiURI = {
    login: '/login',
    register: '/register',
} as const;

export const userApiURI = {
    item: '/users',
    items: '/users/{user}',
} as const;