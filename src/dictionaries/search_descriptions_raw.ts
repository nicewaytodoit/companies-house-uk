import { IDictionary } from '..';

export const CompanySearchDescription: IDictionary = {
    'incorporated-on': 'Incorporated on {date:date_of_creation}',
    'registered-on': 'Registered on {date:date_of_creation}',
    'formed-on': 'Formed on {date:date_of_creation}',
    'dissolved-on': 'Dissolved on {date:date_of_cessation}',
    'converted-closed-on': 'Converted/Closed on {date:date_of_cessation}',
    'closed-on': 'Closed on {date:date_of_cessation}',
    closed: 'Closed',
    'first-uk-establishment-opened-on': 'First UK establishment opened on {date:date_of_creation}',
    'opened-on': 'Opened on {date:date_of_creation}',
    'voluntary-arrangement': 'Voluntary Arrangement',
    receivership: 'Receiver Action',
    'insolvency-proceedings': 'Insolvency Proceedings',
    liquidation: 'Liquidation',
    administration: 'In Administration',
    'registered-externally': 'Registered externally as {external_registration_number}',
};

export const OfficerSearchDescription: IDictionary = {
    'appointment-count': 'Total number of appointments {appointment_count}',
    'born-on': 'Born {month-year:date_of_birth}',
};

export const DisqualifiedOfficerSearchDescription: IDictionary = {
    'born-on': 'Born on {date:date_of_birth}',
};
