import { isObject } from './casing';
import {
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
    SearchDescriptionsRaw,
} from '../dictionaries';

export const decorateWithDictonary = (obj: any, rootPath: string, trr: any[]): any => {
    if (isObject(obj)) {
        return Object.keys(obj)
            .map((key) => {
                const path = [rootPath, key].filter((a) => !!a).join('.');
                if (!Array.isArray(obj[key])) {
                    const tuple = trr.find((tr) => tr.path === path);
                    if (!!tuple) {
                        const title = tuple.array[obj[key]];
                        if (title !== null) {
                            return { [key]: decorateWithDictonary({ id: obj[key], value: title }, path, trr) };
                        }
                    }
                }
                return { [key]: decorateWithDictonary(obj[key], path, trr) };
            })
            .reduce((acc, val) => ({ ...acc, ...val }), {});
    } else if (Array.isArray(obj)) {
        const tuple = trr.find((tr) => tr.path === rootPath);
        return obj.map((item) => {
            if (!!tuple) {
                const title = tuple.array[item];
                if (title !== null) {
                    return decorateWithDictonary({ id: item, value: title }, rootPath + '.obj', trr);
                }
            }
            return decorateWithDictonary(item, rootPath, trr);
        });
    }
    return obj;
};

// getCompanyData(companyNo: string)
export const companyProfileDecorator = [
    { type: 'object', path: 'accounts.last_accounts.type', array: Constants.AccountType },
    { type: 'string', path: 'company_status', field: null, array: Constants.CompanyStatus },
    { type: 'string', path: 'company_status_detail', field: null, array: Constants.CompanyStatusDetail },
    { type: 'string', path: 'jurisdiction', field: null, array: Constants.Jurisdiction },
    { type: 'array', path: 'sic_codes', field: null, array: Constants.SicDescriptions },
    { type: 'string', path: 'type', field: null, array: Constants.CompanyType },
    { type: 'string', path: 'foreign_company_details.accounting_requirement.foreign_account_type', field: null, array: Constants.ForeignAccountType },
    {
        type: 'string',
        path: 'foreign_company_details.accounting_requirement.terms_of_account_publication',
        field: null,
        array: Constants.TermsOfAccountPublication,
    },
];

// search(item: any)
export const companySearchDecorator = [
    { type: 'string', path: 'items.company_status', array: Constants.CompanyStatus },
    { type: 'string', path: 'items.company_type', array: Constants.CompanySummary },
    { type: 'string', path: 'items.natures_of_control', array: SearchDescriptionsRaw.CompanySearchDescription },
];

// getFilingHistory(companyNo: string)
export const filingHistoryDecorator = [
    { type: 'string', path: 'items.annotations.description', array: FilingHistoryDescriptions.Description },
    { type: 'string', path: 'items.associated_filings.description', array: FilingHistoryDescriptions.Description },
    { type: 'string', path: 'items.description', array: FilingHistoryDescriptions.Description },
    { type: 'string', path: 'items.resolutions.description', array: FilingHistoryDescriptions.Description },
];

// getOfficers(companyNo: string)
export const officersDecorator = [
    { type: 'string', path: 'identification.identification_type', array: Constants.IdentificationType },
    { type: 'string', path: 'officer_role', array: Constants.OfficerRole },
];

// getPersons(companyNo: string)
export const personsDecorator = [
    { type: 'string', path: 'items.description', array: PscDescriptions.SuperSecureDescription },
    { type: 'string', path: 'items.natures_of_control', array: PscDescriptions.Description },
];


// getAddress(companyNo: string)
// None