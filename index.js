// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching (drivers, name){
//     return drivers.filter(driver => name.toLowerCase() == driver.toLowerCase())
// }
//    function fuzzyMatch (drivers, name){
//        return drivers.filter(driver => name.toLowerCase() == drivers.indexOf(1, 2, 4))
//    }

//    function matchName (drivers, object){
//        return drivers.filter(driver => object.name == object.hometown)
//    }

function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }
