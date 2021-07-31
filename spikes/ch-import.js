const apiKey = 'a6651088-2033-4de2-bc1a-64eb46ac1cbc';

const companyId = '12345678';
// const companyId = '06232576'; // ACME

/*
const ch = require('companies-house-uk');
const { Jurisdiction } = require('companies-house-uk/lib/dictionaries/constants');
console.log(JSON.stringify(Jurisdiction, null, 4));
console.log(ch.Hello('Z'));
*/

// const { CompaniesHouseAPI } = require('companies-house-uk');
const { CompaniesHouseAPI } = require('../lib/index');
const compAPI = new CompaniesHouseAPI(apiKey);

const fetchCompanyData = async () => {
    try {
        const companyProfile = await compAPI.getCompanyData(companyId);
        return companyProfile;
    } catch (err) {
        console.error(err);
    }
};

const fun = async () => {
    const companyProfile = await fetchCompanyData();
    console.log(JSON.stringify((companyProfile || {}).body, null, 4));

    // compAPI.getCompanyData
    //     (companyId)
    //     .then((res) => console.log('some res', res))
    //     .catch((err) => console.log('err', err));
};

// fun();


const companyProfile = {
    accounts: {
        next_due: '2021-09-03',
        last_accounts: {
            type: 'null',
        },
        next_made_up_to: '2020-12-31',
        overdue: false,
        accounting_reference_date: {
            month: '12',
            day: '31',
        },
        next_accounts: {
            overdue: false,
            period_end_on: '2020-12-31',
            period_start_on: '2019-12-03',
            due_on: '2021-09-03',
        },
    },
    company_name: 'BOCIOC M LIMITED',
    company_number: '12345678',
    company_status: 'active',
    confirmation_statement: {
        next_made_up_to: '2021-12-02',
        overdue: false,
        last_made_up_to: '2020-12-02',
        next_due: '2021-12-16',
    },
    date$_of_1creation: '2019-12-03',
    etag: '9b12edc0a3437c02e02cead971302cb14b48244d',
    has_charges: false,
    has_insolvency_history: false,
    jurisdiction: 'england-wales',
    links: {
        self: '/company/12345678',
        officers: '/company/12345678/officers',
        filing_history: '/company/12345678/filing-history',
        persons_with_significant_control: '/company/12345678/persons-with-significant-control',
    },
    registered_office_address: {
        locality: 'Rugby',
        postal_code: 'CV23 0WU',
        address_line_1: '52 Avocet Close',
        region: 'Warwic_kshire',
    },
    registered_office_is_in_dispute: false,
    sic_codes: ['49410','70100','70210'],
    type: 'ltd',
    undeliverable_registered_office_address: false,
    has_super_secure_pscs: false,
    can_file_A: true,
};



const test = {
    accounts: {
        nextDue: '2021-09-03',
        lastAccounts: { type: 'null' },
        nextMadeUpTo: '2020-12-31',
        overdue: false,
        accountingReferenceDate: { month: '12', day: '31' },
        nextAccounts: {
            overdue: false,
            periodEndOn: '2020-12-31',
            periodStartOn: '2019-12-03',
            dueOn: '2021-09-03',
        },
    },
    companyName: 'BOCIOC M LIMITED',
    companyNumber: '12345678',
    companyStatus: 'active',
    confirmationStatement: {
        nextMadeUpTo: '2021-12-02',
        overdue: false,
        lastMadeUpTo: '2020-12-02',
        nextDue: '2021-12-16',
    },
    date$Of_1creation: '2019-12-03',
    etag: '9b12edc0a3437c02e02cead971302cb14b48244d',
    hasCharges: false,
    hasInsolvencyHistory: false,
    jurisdiction: 'england-wales',
    links: {
        self: '/company/12345678',
        officers: '/company/12345678/officers',
        filingHistory: '/company/12345678/filing-history',
        personsWithSignificantControl: '/company/12345678/persons-with-significant-control',
    },
    registeredOfficeAddress: {
        locality: 'Rugby',
        postalCode: 'CV23 0WU',
        addressLine_1: '52 Avocet Close',
        region: 'Warwic_kshire',
    },
    registeredOfficeIsInDispute: false,
    sicCodes: ['49410'],
    type: 'ltd',
    undeliverableRegisteredOfficeAddress: false,
    hasSuperSecurePscs: false,
    canFileA: true,
};


const { Casing, Transformation } = require('../lib/index');
const { keysToCamel } = Casing;

// casing
const result = keysToCamel(companyProfile);
console.log(JSON.stringify(result) === JSON.stringify(test), result);

// dictionary decoration
const { decorateWithDictonary, companyProfileDecorator } = Transformation;
const decorationRes = decorateWithDictonary(companyProfile, '', companyProfileDecorator);
console.log(JSON.stringify(decorateWithDictonary(companyProfile, '', companyProfileDecorator), null, 4));

// decoration + casing 
console.log(keysToCamel(decorationRes));