'use strict';

function without(array, ...values) {
    return array.filter((item) => !values.includes(item));
}

export default without;