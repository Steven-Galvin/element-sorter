var sortElementNames = function(obj) {
  var keys = [];
  for (var key in periodicTable) {
    getKeys.push(key);
  }
  var sortByName = getKeys.sort();
  console.log(sortByName);
  return sortByName;  
}
