if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0; i<arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    },

    remove : function(arr, item) {
        return arr.filter(function (elem) {
            if (elem !== item) {
                return elem;
            }
        });
    },

    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function (elem) {
            if (elem === item) { return elem; }
        }).length;
    },

    duplicates : function(arr) {
        var seen = [];
        var duplicates = [];
        while (arr.length) {
            var elem = arr.pop();
            if (seen.indexOf(elem) !== -1 && duplicates.indexOf(elem) === -1) {
                duplicates.push(elem);
            }else{
                seen.push(elem);
            }
        }
        return duplicates;
    },

    square : function(arr) {
        var squares = [];
        for (var index in arr) {
            squares.push(Math.pow(arr[index], 2));
        }
        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var occurrences = [];
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === target) {
                occurrences.push(i);
            }
        }
        return occurrences;
    }
  };
});
