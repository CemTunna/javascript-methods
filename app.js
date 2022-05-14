// non-destructive version of reverse()
const arr = ['a', 'b', 'c'];

if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function () {
    return this.slice().reverse();
  };
}
console.log('\nnot reversed:', arr);
console.log('reversed non-destructive way:', arr.toReversed());
console.log(arr);

// non-desructive version of sort()
const arr2 = ['c', 'a', 'b'];
if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    return this.slice().sort(compareFn);
  };
}
console.log('\nnot sorted:', arr2);
console.log('sorted non-destructive way:', arr2.toSorted());
console.log(arr2);

// non-desctructive version of splice()
// It deletes deleteCountIndex(included) elements, starting at index startIndex.
//It then inserts items at index start.
//It returns the deleted elements.
if (!Array.prototype.toSpliced) {
  Array.prototype.toSpliced = function (
    startIndex,
    deleteCountIndex,
    ...items
  ) {
    const copy = this.slice();
    copy.splice(startIndex, deleteCountIndex, ...items);
    return copy;
  };
}
const arr3 = ['a', 'b', 'c', 'd'];
console.log('\nnot spliced:', arr3);
console.log('spliced non-destructive way:', arr3.toSpliced(2, 3, 'x', 'y'));
console.log(arr3);
