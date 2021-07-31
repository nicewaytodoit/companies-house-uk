import { isObject } from "./casing";
const { 
    Constants,
    DisqualifiedOfficerDescriptions,
    Errors,
    ExemptionDescriptions,
    FilingDescriptions,
    FilingHistoryDescriptions,
    FilingHistoryExceptions,
    MissingImageDelivery,
    MortgageDescriptions,
    OrdersDescriptions,
    Payments,
    PscDescriptions,
    SearchDescriptionsRaw
} = require('../dictionaries');


export const decorateWithDictonary = (obj: any, rootPath = '', trr: any[]) : any => {
    if (isObject(obj)) {
        return Object.keys(obj)
                .map((key) => {

                    const path = [rootPath, key].filter((a)=>!!a).join('.');
                    if (!Array.isArray(obj[key])) {
                        const tuple = trr.find((tr) => tr.path === path);
                        if (!!tuple) {
                            const title = tuple.array[obj[key]];
                            if (title!==null) {
                                return ({ [key]: decorateWithDictonary({ id: obj[key], value: title }, path, trr) }); 
                            }
                        }
                    }
                    return ({ [key]: decorateWithDictonary(obj[key], path, trr) });
                })
                .reduce((acc, val) => ({ ...acc, ...val }), {});
    }
    else if (Array.isArray(obj)) {
        const tuple = trr.find((tr) => tr.path === rootPath);
        return obj.map((item) => {
            if (!!tuple) {
                const title = tuple.array[item];
                if (title!==null) {
                    return decorateWithDictonary({ id: item, value: title }, rootPath + '.obj', trr); 
                }
            }
            return decorateWithDictonary(item, rootPath, trr);
        });
    }
    return obj;
};

// search(item: any)
// getFilingHistory(companyNo: string)
// getOfficers(companyNo: string)
// getPersons(companyNo: string)
// getAddress(companyNo: string)

// getCompanyData(companyNo: string)
export const companyProfileDecorator = [
    { type: 'object', path: 'accounts.last_accounts.type', array: Constants.AccountType },
    { type: 'string', path: 'company_status', field: null, array: Constants.CompanyStatus },
    { type: 'string', path: 'company_status_detail', field: null, array: Constants.CompanyStatusDetail },
    { type: 'string', path: 'jurisdiction', field: null, array: Constants.Jurisdiction },
    { type: 'array', path: 'sic_codes', field: null, array: Constants.SicDescriptions },
    { type: 'string', path: 'type', field: null, array: Constants.CompanyType },
    { type: 'string', path: 'foreign_company_details.accounting_requirement.foreign_account_type', field: null, array: Constants.ForeignAccountType },
    { type: 'string', path: 'foreign_company_details.accounting_requirement.terms_of_account_publication', field: null, array: Constants.TermsOfAccountPublication },
];

