// non-destructive version of reverse()
let arr = ['b', 'c', 'a', 'd'];

if (!Array.prototype.nonDesctructiveReversed) {
  Array.prototype.nonDesctructiveReversed = function () {
    return this.slice().reverse();
  };
}
console.log('\nnot reversed:', arr);
console.log('reversed non-destructive way:', arr.nonDesctructiveReversed());
console.log(arr);

// non-desructive version of sort()
if (!Array.prototype.nonDesctructiveSort) {
  Array.prototype.nonDesctructiveSort = function (compareFn) {
    return this.slice().sort(compareFn);
  };
}
console.log('\nnot sorted:', arr);
console.log('sorted non-destructive way:', arr.nonDesctructiveSort());
console.log(arr);

// non-desctructive version of splice()
// It deletes deleteCountIndex(included) elements, starting at index startIndex.
//It then inserts elements at index start.
//It returns the deleted elements.

if (!Array.prototype.nonDestructiveSplice) {
  Array.prototype.nonDestructiveSplice = function (
    startIndex,
    deleteCountIndex,
    ...elements
  ) {
    const copy = this.slice();
    copy.splice(startIndex, deleteCountIndex, ...elements);
    return copy;
  };
}
console.log('\nnot spliced:', arr);
console.log(
  'spliced non-destructive way:',
  arr.nonDestructiveSplice(2, 3, 'x', 'y')
);
console.log(arr);

// non-destructive version of arr[idx] = val
if (!Array.prototype.arrIdxVal) {
  Array.prototype.arrIdxVal = function (index, value) {
    const copy = this.slice();
    copy[index] = value;
    return copy;
  };
}
console.log('\n changes specific idx of arr value:', arr.arrIdxVal(1, 2));
