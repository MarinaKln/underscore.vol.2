'use strict';

function last(array, n) {
    return n != undefined ? array.slice(-n) : array[array.length - 1];
}

export default last;