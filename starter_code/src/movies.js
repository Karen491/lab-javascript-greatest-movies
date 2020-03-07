/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newArray = array.slice();
    let orderedMovies = newArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            else if (titleA > titleB) {
                return 1;
            }
        }
    })
    return orderedMovies;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let filteredMovies = array.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return filteredMovies.length;
};



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArray2 = array.slice();
    let sortedMovies = newArray2.sort((a, b) => {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if (nameA > nameB) {
            return 1
        } else if (nameA < nameB) {
            return -1;
        }
    })

    let titleArray = sortedMovies.map(movie => movie.title)

    let finalArray = titleArray.length < 20 ? titleArray : titleArray.slice(0, 20);

    return finalArray;
};


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let newArray3 = array.slice();
    let averageRate = newArray3.reduce((acc, movie) => {
        if (movie.rate === "" || movie.rate === undefined) {
            return acc;
        } else {
            return acc += movie.rate;
        }
    }, 0) / newArray3.length;

    if (newArray3.length === 0) {
        return 0;
    } else {
        return Number(averageRate.toFixed(2));
    }
};

console.log(ratesAverage(movies));


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"));
    //return dramaMovies;
    let dramaRate = dramaMovies.reduce((acc, movie) => {
        return acc += movie.rate;
    }, 0) / dramaMovies.length;

    if (dramaMovies.length === 0) {
        return 0;
    } else {
        return Number(dramaRate.toFixed(2));
    }
};

console.log(dramaMoviesRate(movies));


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes (array) {
    let newArray4 = array.slice();
    let totalMin = 0;
  
    function hourstoMin (duration) {
      let clean = duration.replace("h", "").replace("min", "").split(" ");
      if (clean.length > 1) {
        totalMin = Number(clean[0]*60) + Number(clean[1]);
      } else if (clean.length === 1 && Number(clean[0] > 4)) {
        totalMin = Number(clean[0]);
      } else if (clean.length === 1 && Number(clean[0] < 4)) {
        totalMin = Number(clean[0]*60)
      }
      return totalMin;
    }
  
    let newMovies = newArray4.map(movie => {
      let movieDuration = hourstoMin(movie.duration);
      return {...movie, duration: movieDuration}
    })
    return newMovies;
  };
  

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg (array) {
    let average = 0;
    let maxAverage = 0;
    let bestYear = 0;
  
    let yearArray = array.map(movie => {
    return movie.year;
  })
    let uniqueYears = [...new Set(yearArray)]
  
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      maxAverage = array[0].rate;
      bestYear = array[0].year;
    } else if (array.length > 1) {
      for (let i=0; i<uniqueYears.length; i++) {
      let uniqueYearArray = array.filter(movie => movie.year === uniqueYears[i])
      average = uniqueYearArray.reduce((acc, movie) => {
        return acc += movie.rate;
      }, 0) / uniqueYearArray.length;
  
      if (average > maxAverage) {
        maxAverage = Number(average.toFixed(1));
        bestYear = uniqueYears[i];
      } else if (average === maxAverage && uniqueYears[i] < bestYear) {
          bestYear = uniqueYears[i];
        } 
      }
    }
    return `The best year was ${bestYear} with an average rate of ${maxAverage}`;
  };

  console.log(bestYearAvg(movies));