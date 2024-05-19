let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// let salaries = {};

function isEmptyAndSum(obj) {
  if (Object.keys(obj).length === 0) {
    return 0;
  } else {
    let value = Object.values(obj);
    let sum = value.reduce((acc, val) => {
      return acc + val;
    });
    return sum
  }
}

console.log(isEmptyAndSum(salaries));


