import { Hello } from '../index';

describe('# Initial Test', () => {
    it('Should return text with name', () => {
        expect(Hello('Z')).toBe('Hello World - Z');
    });
});
