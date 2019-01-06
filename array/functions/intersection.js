'use strict';

function intersection(...arrays) {
   let results = [];

    arrays[0].forEach((item, i) => {
        for (let i = 1; i < arrays.length; i++) {
            if (arrays[i].indexOf(item) != -1) {
                results.push(item);
            }
        }
    });

    return [...new Set(results)];
}

export default intersection;