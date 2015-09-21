angular
  .module('testModule')
  .filter('testFilter', filter);

function filter() {
  return function(list, separator) {
      return list.join(separator);
  };
}
