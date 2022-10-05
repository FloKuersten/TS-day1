var myArray;
myArray = ["John", "Jeff", "Jeremy", "Jefferson", "Jeffton", "Jonathan", "Bert"];
myArray.forEach(function (value, index) {
    console.log("Array element " + value);
    console.log("Array element with index " + index);
    console.log("Array element " + value + " with index " + index);
});
