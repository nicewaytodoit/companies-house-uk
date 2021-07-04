import { IDictionary } from '..';

export const ExemptionType: IDictionary = {
    'disclosure-transparency-rules-chapter-five-applies':
        'This is a traded, DTR5 issuing company. Therefore it may be exempt from updating its PSC information.',
    'psc-exempt-as-trading-on-regulated-market':
        'The company has been or is exempt from keeping a PSC register, as it has voting shares admitted to trading on a regulated market other than the UK.',
    'psc-exempt-as-shares-admitted-on-market':
        'The company has been or is exempt from keeping a PSC register, as it has voting shares admitted to trading on a market listed in the Register of People with Significant Control Regulations 2016.',
    'psc-exempt-as-trading-on-uk-regulated-market':
        'The company has been or is exempt from keeping a PSC register, as it has voting shares admitted to trading on a UK regulated market.',
    'psc-exempt-as-trading-on-eu-regulated-market':
        'The company has been or is exempt from keeping a PSC register, as it has voting shares admitted to trading on an EU regulated market.',
};

export const ExemptionDescription: IDictionary = {
    'disclosure-transparency-rules-chapter-five-applies':
        'From {exempt_from} this is a traded, DTR5 issuing company. Therefore it may be exempt from updating its PSC information.',
    'psc-exempt-as-trading-on-regulated-market':
        'From {exempt_from} the company is exempt from keeping a PSC register as it has voting shares admitted to trading on a regulated market other than the UK',
    'psc-exempt-as-shares-admitted-on-market':
        'From {exempt_from} the company is exempt from keeping a PSC register as it has voting shares admitted to trading on a market listed in the Register of People with Significant Control Regulations 2016',
    'psc-exempt-as-trading-on-uk-regulated-market':
        'From {exempt_from} the company is exempt from keeping a PSC register as it has voting shares admitted to trading on a UK regulated market',
    'psc-exempt-as-trading-on-eu-regulated-market':
        'From {exempt_from} the company is exempt from keeping a PSC register as it has voting shares admitted to trading on an EU regulated market',
};
