import { calcIsDay } from './dates';

describe('Dates:', () => {
    describe('#calcIsDay()', () => {
        it('return true if between sun rise and sun set', () => {
            const sun_rise = '2020-07-27T05:08:32.950953+01:00';
            const sun_set = '2020-07-27T21:28:54.832344+01:00';
            const timeEarly = new Date('2020-07-27T05:08:33.562596+01:00');
            const timeLate = new Date('2020-07-27T21:28:53.562596+01:00');
            expect(calcIsDay(sun_rise, sun_set, timeEarly)).toBe(true);
            expect(calcIsDay(sun_rise, sun_set, timeLate)).toBe(true);
        });
        it('return false if NOT between sun rise and sun set', () => {
            const sun_rise = '2020-07-27T05:08:32.950953+01:00';
            const sun_set = '2020-07-27T21:28:54.832344+01:00';
            const timeEarly = new Date('2020-07-27T05:08:31.562596+01:00');
            const timeLate = new Date('2020-07-27T21:28:55.562596+01:00');
            expect(calcIsDay(sun_rise, sun_set, timeEarly)).toBe(false);
            expect(calcIsDay(sun_rise, sun_set, timeLate)).toBe(false);
        });
    });
});
