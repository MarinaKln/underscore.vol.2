'use strict';

function union(...arrays) {
    let newArray = arrays.reduce((a, b) => a.concat(b));

    return [...new Set(newArray)];
}

export default union;