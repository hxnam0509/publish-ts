import * as pluralize from 'pluralize';

/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
export function getPlural(str: Props) {
    if (!str) {
        return null;
    }
    return pluralize.plural(str.status.toString());
}

type DataProvider<T> =
    | { status: string }
    | { status: number, error: T };
type Props = DataProvider<number>;

