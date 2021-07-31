export const snakeOrKebabToCamel = (str: string) : string => {
    return str.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '');
    });
};

export const isObject = (obj: any) : boolean => {
    return typeof obj === 'object' && obj !== null && obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

export const keysToCamel = (obj: any) : any => {
    if (isObject(obj)) {
        return Object.keys(obj)
                .map((key) => ({ [snakeOrKebabToCamel(key)]: keysToCamel(obj[key])}))
                .reduce((acc, val) => ({ ...acc, ...val }), {});
    }
    else if (Array.isArray(obj)) {
        return obj.map((item) => keysToCamel(item));
    }
    return obj;
};