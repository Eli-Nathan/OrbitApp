import * as strings from './strings';

describe('Strings:', () => {
    describe('#appendDegrees()', () => {
        it('should end with ° symbol', () => {
            const tempString = '7';
            expect(strings.appendDegrees(tempString)).toBe('7°');
        });
    });

    describe('#parseTemp()', () => {
        it('should round down and output string with degrees', () => {
            const tempNumber = 6.3;
            expect(strings.parseTemp(tempNumber)).toBe('6°');
        });

        it('should round up and output string with degrees', () => {
            const tempNumber = 6.6;
            expect(strings.parseTemp(tempNumber)).toBe('7°');
        });
    });
});
