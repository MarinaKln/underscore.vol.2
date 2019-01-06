'use strict';

function range(...args) {
    let start = args.length > 1 ? args[0] : 0;
    const stop = args.length == 1 ? args[0] : args[1];
    const step = args.length > 2 ? args[2] : 1;
    const negativeStepFlag = step < 0;

    if(stop <= start && !negativeStepFlag) {
        return [];
    }

    let counter = () => !negativeStepFlag ? start += step : start -= step;
    let result = [start];
    let endCount = negativeStepFlag ? -stop : stop;

    for (let i = start; i < endCount; i++) {
        let count = counter();

        if (count < endCount) {
            result.push(negativeStepFlag ? -count : count);
        }
    }
    
    return result;
}

export default range;