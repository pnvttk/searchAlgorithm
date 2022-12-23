function binarySearch(array, target, comparator) {

    // index of the begin of array
    let begin = 0;

    // index of the end of array
    let end = array.length - 1;

    // <= the equal is to compare 
    while (begin <= end) {

        // middle of the array
        // use floor to return as numeric value
        const middle = Math.floor((begin + end) / 2);

        // for sorting between target and middle valude of array
        // ! need comparison the sorting array of object
        const comparison = comparator(target, array[middle]);

        // * Best case : traget is midpoint
        if (comparison === 0) {

            console.log('BinarySearch : Found match value')

            // value from array that is match the target
            value = array[middle]

            // ! need to return otherwise stackoverflow
            return value;

            // * if midpoint is more than target
        } else if (comparison < 0) {

            // console.log('midpoint > target')
            // console.log('cut half of end')

            // cut half of middle to end
            end = middle - 1;

            // * if midpoint is less than target
        } else {

            // console.log('midpoint < target')
            // console.log('cut half of begin')

            // cut half of begin to middle
            begin = middle + 1;
        }
    }

    return 'Not found this : ' + JSON.stringify(target);
}

// used to sort elem of the array in order
const comparator = (target, midOfArr) => {

    // * Worst Case : ID not match
    // ! use id because json id usually sorted, If use other target to search need to add more variable
    if (target.id !== midOfArr.id) {

        // console.log(target.id - midOfArr.id)

        /**
         * * if target < midOfArr -> return negative value
         * * if target > midOfArr -> return positive value
         * * if target = midOfArr -> return zero
         * * https://www.tutorialspoint.com/javascript/string_localecompare.htm
        */
        return target.id - midOfArr.id

        // * ID is Match
    } else {

        // console.log("found id")

        return 0
    }
};


function linearSearch(array, target) {

    // check if not empty array
    if (array.length != 0) {

        // each key of array
        for (key of array) {

            // console.log("for -> key : ", key)

            // * Best case match id
            if (key.id == target.id) {

                console.log("LinearSearch : Found match value")

                return key
            }
        }

        return 'Not found this : ' + JSON.stringify(target);
    }
}

// todo : fetch json test ===========================================================

fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {

        const json_data = data

        console.log(json_data)

        const target = {
            id: 5000,
            // albumId: 1,
            // url: "https://via.placeholder.com/600/6dd9cb"
        }


        console.time("linear search")
        const linear = linearSearch(json_data, target);
        console.log(linear);
        console.timeEnd("linear search")

        console.log("-----------------------------------------------");

        console.time("binary search")
        const binary = binarySearch(json_data, target, comparator);
        console.log(binary);
        console.timeEnd("binary search")


    })

/**
 * todo : self variable test =====================================================================================
 */

// * simulate this is json data.
const json = `[
    { "id": 0, "name": "zero","tel":"000" },
    { "id": 1, "name": "one","tel":"111" },
    { "id": 2, "name": "two","tel":"222" },
    { "id": 3, "name": "three","tel":"333" },
    { "id": 4, "name": "four","tel":"444" },
    { "id": 5, "name": "five","tel":"555" },
    { "id": 6, "name": "six","tel":"666" },
    { "id": 7, "name": "seven","tel":"777" },
    { "id": 8, "name": "eight","tel":"888" },
    { "id": 9, "name": "nine","tel":"999" },
    { "id": 10, "name": "ten","tel":"1010" }
]`;

// ! don't forget to parse from json string to javascript to object
const array = JSON.parse(json)

// console.log(array)

// todo : main exec test
// console.time("binary search")
// const binary = binarySearch(array, { id: 5, name: "five" }, comparator);
// console.log(binary); 
// console.timeEnd("binary search")

// console.time("linear search")
// const linear = linearSearch(array, { id: 5, name: "five" });
// console.log(linear); 
// console.timeEnd("linear search")
