 //function as-is
 export function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    //@ts-ignore  -- *** callback: must be defnied for typescript
    return (callback) => {
        setTimeout(() => {
            callback(likelihoodOfAntWinning);
        }, delay);
    };
}