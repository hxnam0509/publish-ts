import * as pluralize from 'pluralize';
import { isNull } from './util';
import Meta from 'meta';

/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
export function getPlural(str: Props) {
    if (!Meta.get('supportedPlural') || isNull(str)) {
        return null;
    }
    return pluralize.plural(str.status.toString());
}

type DataProvider<T> =
    | { status: string }
    | { status: number, error: T };
 type Props = DataProvider<number>;

