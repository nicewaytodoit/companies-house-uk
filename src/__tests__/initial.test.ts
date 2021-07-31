import { Hello, CompaniesHouseAPI } from '../index';
import { apiKey } from '../../.secure.js';

const compAPI = new CompaniesHouseAPI(apiKey);

const fetchCompanyData = async () => {
    try {
        const companyProfile = await compAPI.getCompanyProfile('12345678');
        return companyProfile;
    } catch (err) {
        console.error(err);
    }
};

describe('# Initial Test', () => {
    it('Should return text with name', () => {
        expect(Hello('Z')).toBe('Hello World - Z');
    });
});

describe('# Initial Data Load', () => {
    it('No test just display data', async () => {
        const companyProfile = await fetchCompanyData();
        console.log(JSON.stringify(companyProfile, null, 4));
        expect(companyProfile).not.toBe(undefined);
    });
});
