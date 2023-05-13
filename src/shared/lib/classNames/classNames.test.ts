import { classNames } from './classNames';

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('class')).toBe('class');
  });

  test('with additional class', () => {
    const expected = 'main class1 class2';

    expect(classNames('main', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'main class1 hovered scrollable';

    expect(classNames('main', { hovered: true, scrollable: true }, ['class1'])).toBe(expected);
  });

  test('when one mode is false', () => {
    const expected = 'main class1 scrollable';

    expect(classNames('main', { hovered: false, scrollable: true }, ['class1'])).toBe(expected);
  });

  test('when one mode is undefined', () => {
    const expected = 'main class1 scrollable';

    expect(classNames('main', { hovered: undefined, scrollable: true }, ['class1'])).toBe(expected);
  });
});
