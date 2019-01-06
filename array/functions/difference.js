'use strict';

function difference(array, values) {
    return array.filter((item) => !values.includes(item));
}

export default difference;