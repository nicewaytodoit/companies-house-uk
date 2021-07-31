# UK Companies house API

This package will allow you to retrieve UK Companies House API data, with ability to have more readable keys and enumerated values. 

## Installation instructions
Run 

```npm install --save companies-house-uk```

or 

```yarn add companies-house-uk```

## Usage
To use this package you need to obtain **API key** from Companies House Developer pages:

- [Developer's login page](https://developer.company-information.service.gov.uk/signin)
- [Obtaining Key page](https://developer.company-information.service.gov.uk/manage-applications)
- [API description](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference)


To load data:
```js
const { CompaniesHouseAPI } = require('companies-house-uk');
const ch = new CompaniesHouseAPI(YOUR_API_KEY_STRING);

const fetchCompanyData = async () => {
    try {
        const companyProfile = await ch.getCompanyData(companyId);
        return companyProfile.body;
    } catch (err) {
        console.error(err);
    }
};

// or
ch.getCompanyData(companyId)
  .then(({ body }) => {
      console.log(body);
  })
  .catch((error) => {
      console.log(error);
  });
```

Following methods are available:
```ts
    search(item: any)
    getCompanyProfile(companyNo: string)
    getFilingHistory(companyNo: string)
    getOfficers(companyNo: string)
    getPersons(companyNo: string)
    getAddress(companyNo: string)
```

It is possible to change snake_case result with the following snippet:
```js
const { Casing } = require('companies-house-uk');
const { keysToCamel } = Casing;

const result = keysToCamel(companyProfile);
```

Also now you can decorate fields that have enumeration mapping.
For example for [company_status](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/resources/companyprofile?v=latest) filed we would get:
```json
{
    ...
    "company_status": "receivership"
    ...
}

// will result in
{
    ...
    "company_status": { "id": "receivership", "value": "Receiver Action"
    ...
}
```

How to use dictionary decorators:
```js 
const companyProfile = ... load company profile above
const { Transformation } = require('companies-house-uk');
const { decorateWithDictonary, companyProfileDecorator } = Transformation;
const decorationRes = decorateWithDictonary(companyProfile, '', companyProfileDecorator);
```


## Current roadmap
The roadmap is as follows:
+ API functions for retrieving data
+ Change casing to camelCase from snake_case or kebab-case
+- Decorating retrieved data with dictionary results 
- TypeScript types for each entity
- ...


## Note
If you have more ideas about other functionalities you would like to see in this npm package or something you would like me to improve; please raise the issue https://github.com/nicewaytodoit/companies-house-uk/issues with the label "feature request".

Thank you,
Aleks
