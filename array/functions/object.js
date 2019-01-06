'use strict';

function object(...arrays) {
    const singleArrayFlag = arrays.length == 1;
    let result = {};

    if (singleArrayFlag) {
        result = Object.assign(...arrays[0].map(array => ({[array[0]]: array[1]})))
    } else {
        let [keys, values] = arrays;

        result = Object.assign(...keys.map((key, value) => ({[key]: values[value]})))
    }

    return result;
}

export default object;