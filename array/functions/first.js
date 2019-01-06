'use strict';

function first(array, n) {
    return n != undefined ? array.slice(0, n) : array[0];
}

export default first;