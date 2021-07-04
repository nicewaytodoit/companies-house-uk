// Transforming yml files from => https://github.com/companieshouse/api-enumerations

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const CR = "\n";

const getVariableName = (key) => key.split(/[\-\_]+/).map(([first, ...rest]) => first.toUpperCase() + rest.join('')).join('');

const transformAllYamals = () => {
    try {
        const root = './api-enumerations-master';
        const files = fs.readdirSync(root);
    
        files.forEach((fileName) => {
            const ymlFilePath = path.join(root, fileName);
            const file = fs.readFileSync(ymlFilePath, 'utf8');
            const doc = yaml.load(file);
            
            const importLine = `import { IDictionary } from "..";` + CR + CR;
    
            const text = Object.keys(doc)
                                .map((key) => `export const ${getVariableName(key)}: IDictionary = ${JSON.stringify(doc[key], null, 2)};`)
                                .reduce((acc, val) => acc + val + CR + CR, importLine);
        
            const baseName = path.basename(ymlFilePath).split('.').slice(0, -1).join('.')
            const tsFilePath = path.join('./out', `${baseName}.ts`);
            console.log(tsFilePath);
            fs.writeFileSync(tsFilePath, text, 'utf8');
        });
    } catch (e) {
        console.log(e);
    }
};

transformAllYamals();
