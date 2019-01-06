import equals from 'array-equal';

import first from './functions/first';
import last from './functions/last';
import compact from './functions/compact';
import without from './functions/without';
import union from './functions/union';
import difference from './functions/difference';
import flatten from './functions/flatten';
import range from './functions/range';
import intersection from './functions/intersection';
import object from './functions/object';


console.log('first:', [
    first([1,2,3,4,5,6]) === 1,
    equals(first([1,2,3,4,5,6], 3), [1,2,3]),
]);

console.log('last:', [
    last([1,2,3,4,5,6]) === 6,
    equals(last([1,2,3,4,5,6], 3), [4,5,6]),
]);

console.log('compact:', [
    equals(compact([0, 1, false, 2, '', 3]), [1, 2, 3])
]);

console.log('without:', [
    equals(without([1, 2, 1, 0, 3, 1, 4], 0, 1), [2, 3, 4]),
    equals(without([2,2,2,2,2,2,2,0], 2), [0]),
    equals(without([2,2,2,2,2,2,2], 2), [])
]);

console.log('union:', [
    equals(union([1,1,2,3,4],[1,3,5]), [1, 2, 3, 4, 5]),
    equals(union([1,1,2,3,4, 'hi'],[1,3,5], ['test', 'hi']), [1, 2, 3, 4, 'hi', 5, 'test']),
    equals(union([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2, 3, 101, 10])
]);

console.log('difference:', [
    equals(difference([1, 2, 1, 0, 3, 1, 4], [0, 1]), [2, 3, 4]),
    equals(difference([1, 2, 3, 4, 5], [5, 2, 10]), [1, 3, 4]),
]);

console.log('flatten:', [
    equals(flatten([1, [2], [3, [[4]]]]), [1, 2, 3, 4]),
    flatten([1, [2], [3, [[4]]]], true).toString() === `${[1, 2, 3, [[4]]]}`,
]);

console.log('range:', [
    equals(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    equals(range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    equals(range(0, 30, 5), [0, 5, 10, 15, 20, 25]),
    equals(range(0, -10, -1), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]),
    equals(range(0), [])
]);

console.log('intersection:', [
    equals(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2]),
    equals(intersection([1, 2, 3, 'hello'], [101, 2, 1, 10], [2, 1], ['hi', 'hello']), [1, 2, 'hello']),
    equals(intersection([1, 2, 3, 'hello'], [101, 2, 1, 10, 3]), [1, 2, 3])
]);

console.log('object:', [
    JSON.stringify(object(['moe', 'larry', 'curly'], [30, 40, 50])) === JSON.stringify({moe: 30, larry: 40, curly: 50}),
    JSON.stringify(object([['moe', 30], ['larry', 40], ['curly', 50]])) === JSON.stringify({moe: 30, larry: 40, curly: 50}),
    JSON.stringify(object([['moe', 300], ['larry', 400], ['curly', 500], ['moe', 100]])) === JSON.stringify({moe: 100, larry: 400, curly: 500}),
]);
