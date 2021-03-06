import { INestedDictionary } from '..';

export const Errors: INestedDictionary = {
    service: {
        'access-denied': 'Access denied',
        'company-profile-not-found': 'Company profile not found',
        'company-insolvencies-not-found': 'Company insolvencies not found',
        'etag-mismatch':
            'An update was made to the {object} by another user during your session. Select the back button to see the updated version and to make further changes',
        'invalid-authorization-header': 'Invalid authorization header',
        'invalid-http-method': 'Access denied for HTTP method {method}',
        'invalid-client-id': 'Invalid client ID',
        'no-json-provided': 'No JSON payload provided',
        'not-authorised-for-company': 'Not authorised to file for this company',
        'transaction-not-open': 'Transaction is not open',
        'transaction-does-not-exist': 'Transaction does not exist',
        'user-transactions-not-found': 'No transactions found for this user',
        unauthorised: 'Unauthorised',
    },
};
