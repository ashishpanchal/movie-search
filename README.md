# iTunes Movie Search

Command line application that searches iTunes movies with red, green, blue or yellow in the title. The output should display each matching movies details (title, year, runtime) and the first matching colour from the title. The application should allow specifying a limit for returned result set.

## Install
Run `npm install` after cloning repo

## Usage
Pass `--limit=50` argument to set the limit for iTunes movie search.

`node movie-search.js --limit=50`

Default value is `"3"` if `limit` argument is not provided.

Pass `--keyword="movie name"` argument to set the term for iTunes movie search.

`node movie-search.js --keyword="Yellow Submarine"`

Default value is `"green"`  ` if `keyword` argument is not provided.

## Example
Input:

`node movie-search.js --limit=50 --keyword="Fast and"`

Output:
```
Green Zone , 114mins , 2010 , GREEN
The Green Mile , 188mins , 2000 , GREEN
Green Lantern , 113mins , 2011 , GREEN
The Green Hornet (2011) , 118mins , 2011 , GREEN
Green Lantern: Emerald Knights , 83mins , 2011 , GREEN
The Odd Life of Timothy Green , 105mins , 2012 , GREEN
Anne of Green Gables , 85mins , 2016 , GREEN
Green Room (2016) , 95mins , 2016 , GREEN
Fried Green Tomatoes , 130mins , 1992 , GREEN
Revenge of the Green Dragons , 94mins , 2015 , GREEN
The Green Inferno , 100mins , 2014 , GREEN
Soylent Green , 96mins , 1973 , GREEN
Green Street Hooligans , 108mins , 2005 , GREEN
The Green Lantern: First Flight , 77mins , 2009 , GREEN
The Green Berets , 141mins , 1968 , GREEN
Green Lantern (Extended Cut) , 123mins , 2011 , GREEN
Green Street Hooligans: Underground , 93mins , 2014 , GREEN
The Green Prince , 100mins , 2014 , GREEN
Green Day - Awesome As **** , 83mins , 2014 , GREEN
How Green Was My Valley , 119mins , 1941 , GREEN
Greenberg , 107mins , 2010 , GREEN
Saltwater Green , 39mins , 2013 , GREEN
Ceelo Green: Loberace Live in Vegas , 78mins , 2013 , GREEN
Al Green: Everything's Gonna Be Alright , 56mins , 2004 , GREEN
Red Light Green Light , 52mins , 2013 , RED
```

If search result do not have any matching color in the title then it will display in white.
