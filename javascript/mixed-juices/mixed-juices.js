// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
        case "Pure Strawberry Joy":
            return 0.5;
        case "Energizer":
            return 1.5;
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

//First Initial Solution
// export function limesToCut(wedgesNeeded, limes) {
//     const wedgesPerLime = {
//         small: 6,
//         medium: 8,
//         large: 10,
//     };
//     let limeCut = 0;
//     let wedgeCut = 0;
//     let index = 0;

//     while (wedgeCut < wedgesNeeded && index < limes.length) {
//         const currentLime = limes[index];
//         switch (currentLime) {
//             case "small":
//                 wedgeCut += wedgesPerLime.small;
//                 break;
//             case "medium":
//                 wedgeCut += wedgesPerLime.medium;
//                 break;
//             case "large":
//                 wedgeCut += wedgesPerLime.large;
//                 break;
//         }

//         if (wedgeCut >= wedgesNeeded) {
//             limeCut = index + 1;
//             break; // Exit the loop once wedgesNeeded is met.
//         } else {
//             index++;
//         }
//     }

//     // If wedgeCut is still less than wedgesNeeded, it means you've run out of limes.
//     // Return the total number of limes you cut.
//     if (wedgeCut < wedgesNeeded) {
//         return limes.length;
//     }

//     return limeCut;
// }
export function limesToCut(wedgesNeeded, limes) {
    const wedgesPerLime = {
      small: 6,
      medium: 8,
      large: 10,
    };

    let wedges = 0;
    let index = 0;

    while (wedges < wedgesNeeded && index < limes.length) {
      const currentLime = limes[index];
      wedges += wedgesPerLime[currentLime] ?? 0;
      index++;
    }

    return index;
  }
// console.log(limesToCut(50, ['small', 'small', 'large', 'medium', 'small']))
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
    const minutesPerJuice = {
        "Pure Strawberry Joy": 0.5,
        Energizer: 1.5,
        "Green Garden": 1.5,
        "Tropical Island": 3,
        "All or Nothing": 5,
    };
    let timeVar = timeLeft;
    let ordersVar = orders;
    
    while (timeVar > 0 && orders.length > 0) {
      const mixTime = timeToMixJuice(ordersVar[0]);
      timeVar -= mixTime;
      ordersVar.shift();
    }
    return ordersVar;

}


    remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden", "Tropical Island"])

// => ['Green Garden']
