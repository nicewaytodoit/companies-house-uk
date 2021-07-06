import superagent from 'superagent';

export interface IDictionary {
    [prop: string]: string;
}
export interface INestedDictionary {
    [prop: string]: IDictionary;
}

export const Hello = (worldName: string) => `Hello World - ${worldName}`;

export const CompaniesHouseAPI = function (apiKey: string) {
    const API_KEY = apiKey;

    const getHelper = (endPoint: string, query: superagent.SuperAgentRequest | {}, callback: any) => {
        superagent
            .get('https://api.companieshouse.gov.uk/' + endPoint)
            .query(query)
            .auth(API_KEY, '')
            .end(callback);
    };

    const getByUrl = (urlPath: string, obj = {}) => new Promise((resolve, reject) => getHelper(urlPath, obj, (err: any, res: any) => (err!==null) ? reject(err) : resolve(res)));

    const search = (item: any) => getByUrl('search/companies', { q: item });
    const getCompanyData = (number: string) => getByUrl(`company/${number}`);
    const getFilingHistory = (number: string) => getByUrl(`company/${number}/filing-history`);
    const getOfficers = (number: string) => getByUrl(`company/${number}/officers`);
    const getPersons = (number: string) => getByUrl(`company/${number}/persons-with-significant-control`);
    const getAddress = (number: string) => getByUrl(`company/${number}/registered-office-address`);

    return {
        search,
        getCompanyData,
        getFilingHistory,
        getOfficers,
        getPersons,
        getAddress,
    };
};

export * from './dictionaries';
