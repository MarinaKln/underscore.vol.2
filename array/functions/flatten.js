'use strict';

function flatten(array, shallow = false) {
    let result;

    if (shallow) {
        result = array.reduce((prev, val) => prev.concat(val), []);
    } else {
        result = array.reduce((prev, val) => Array.isArray(val) ? prev.concat(flatten(val)) : prev.concat(val), [])
    }

    return result;
}

export default flatten;