"use strict";

// Implement Binary Search

function binarySearch(array, value, min = 0, max = array.length) {
// Change if to while loop and remove recursive calls to loop through search
  if (min <= max) {
    let mid = Math.floor(min + (min - max) / -2);
    if (array[mid] === value) {
      return mid;
    }
    else if (array[mid] < value) {
      min = mid + 1;
      return binarySearch(array, value, min, max);
    }
    else {
      max = mid - 1;
      return binarySearch(array, value, min, max);
    }
  }
  else {
    return -1;
  }
}

let array = [1, 22, 5, 3, 7, 9, 33];
console.log(binarySearch(array, 33));


// Describe the difference between linear search and binary search including the big O of each

/*
  Linear search is a simple, brute force algorithm. Every single element is checked
  in sequence until the element being searched for is found. Linear search as a
  big O of O(n), or linear time. In the "worst case scenario" on both an ordered and
  unordered array, linear search must check every single element of the array,
  increasing the time complexity based on the size of the array passed in.

  Binary search works differently on a sorted array by sepearating the array
  into halves. The middle element is used as a comparison point. If the search
  value is larger than the middle element, the search is performed on the larger
  half of the array. If the value is smaller, the search is performed on the
  smaller half of the array. This "halving" process continues on each part of the
  array until the searche element is found. If the value is equal to the middle
  element, that element is returned.

  This continued halving of the amount of elements that will need to be searched
  reduces the time complexity of binary search. The big O of binary search is
  O(log n), or logarithmic time, making it the most efficient sorting algorithm we have studied.

*/

// Describe why sort order of the data set matters when using binary search

/*
  The array must be sorted in order for binary search to work. Without sorting,
  the algorithm will not be able to eliminate candidate elements based on a
  median value. If you want to search an unsorted array, linear search is a
  possibility. Otherwise, sort the array, then use binary search.
*/
