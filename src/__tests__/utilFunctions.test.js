import { wordCount, attachUserName} from '../../server/utils';
import { shortenText } from '../utils/functions';
import {shortText, longText, posts, users} from './__data__/testData';

test('ShortenText should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
});

test('ShortenText should cut off extra charachters after 100 and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortenend).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})