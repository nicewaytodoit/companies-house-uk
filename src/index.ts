import superagent from 'superagent';

export interface IDictionary {
    [prop: string]: string;
}
export interface INestedDictionary {
    [prop: string]: IDictionary;
}

export const Hello = (worldName: string) => `Hello World - ${worldName}`;

export class CompaniesHouseAPI {
    private apiKey: string;

    constructor(apiKey: string){
        this.apiKey = apiKey
    }

    private getHelper (endPoint: string, query: superagent.SuperAgentRequest | {}, callback: any) {
        superagent
            .get('https://api.companieshouse.gov.uk/' + endPoint)
            .query(query)
            .auth(this.apiKey, '')
            .end(callback);
    };

    private getByUrl (urlPath: string, obj = {}) {
        return new Promise((resolve, reject) => this.getHelper(urlPath, obj, (err: any, res: any) => (err!==null) ? reject(err) : resolve(res)));
    }

    public search (item: any) { 
        this.getByUrl('search/companies', { q: item }); 
    }
    public getCompanyData (companyNo: string) { 
        this.getByUrl(`company/${companyNo}`); 
    }
    public getFilingHistory (companyNo: string) { 
        this.getByUrl(`company/${companyNo}/filing-history`); 
    }
    public getOfficers (companyNo: string) { 
        this.getByUrl(`company/${companyNo}/officers`); 
    }
    public getPersons (companyNo: string) { 
        this.getByUrl(`company/${companyNo}/persons-with-significant-control`); 
    }
    public getAddress (companyNo: string) { 
        this.getByUrl(`company/${companyNo}/registered-office-address`); 
    }

};

export * from './dictionaries';
