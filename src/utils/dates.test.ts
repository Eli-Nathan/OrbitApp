import { calcIsDay } from './dates';

describe('Dates:', () => {
    describe('#calcIsDay()', () => {
        it('return true if between sun rise and sun set', () => {
            const unix_sun_rise = 1595822912.95 / 1000;
            const unix_sun_set = 1595881734832 / 1000;
            const timeEarly = new Date('2020-07-27T05:08:33.562596+01:00');
            const timeLate = new Date('2020-07-27T21:28:53.562596+01:00');
            expect(calcIsDay(unix_sun_rise, unix_sun_set, timeEarly)).toBe(
                true,
            );
            expect(calcIsDay(unix_sun_rise, unix_sun_set, timeLate)).toBe(true);
        });
        it('return false if NOT between sun rise and sun set', () => {
            const unix_sun_rise = 1595822912950 / 1000;
            const unix_sun_set = 1595881734832 / 1000;
            const timeEarly = new Date('2020-07-27T05:08:31.562596+01:00');
            const timeLate = new Date('2020-07-27T21:28:55.562596+01:00');
            expect(calcIsDay(unix_sun_rise, unix_sun_set, timeEarly)).toBe(
                false,
            );
            expect(calcIsDay(unix_sun_rise, unix_sun_set, timeLate)).toBe(
                false,
            );
        });
    });
});
