//////////////////////////////
// function filterOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

///////////////////////
const findMin = (...nums) => Math.max(...nums);
const mergeObjects = (obj1, obj2) => {
   return {...obj1, ...obj2}
};

/////////////
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

///////////////////
const removeRandom = items => {
    let random = Math.round(Math.random(0, items.length));

    return items.filter((el, i) => {
        if(i !== random) return el;
    })
} 

// console.log(removeRandom([1, 2, 3, 4, 7, 10]));

/////////////////
const extend = (array1, array2) => [...array1, ...array2];

// console.log(extend([1, 2, 3], [4, 5, 6]));

////////////////////////////////
const coffee = {
    type: "black",
    origin: "jamaica",
    size: "large"
}

const addKeyVal = (obj, key, val) => {
    const newObject = {...obj};
    newObject[key] = val;
    return newObject;
}

// console.log(addKeyVal(coffee, "price", 20));

///////////////////////
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];

    return newObj;
}

// console.log(removeKey(coffee, size));

///////////////////////////////
const combine = (obj1, obj2) => ({...obj1, ...obj2});

//////////////////////////

const update = (obj, key, val) => {
    const updatedObj = {...obj};

    obj[key] = val;

    return updatedObj;
}





















