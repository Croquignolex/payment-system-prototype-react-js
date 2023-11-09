export const authApiURI = {
    login: '/login',
    register: '/account/register/email',
};

export const accountApiURI = {
    fetch: '/account/{accountId}',
    updateAddress: '/account/{accountId}/addaddress',
};

export const contactsApiURI = {
    fetch: '/account/{accountId}/transferrecipients',
    add: '/account/{accountId}/transferrecipient',
};

export const accountsApiURI = {
    fetch: '/account/{accountId}/transferpayers',
    add: '/account/{accountId}/transferpayer',
};