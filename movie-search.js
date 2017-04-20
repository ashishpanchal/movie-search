let colors = require('colors');
const request = require('request');
const commandLineArgs = require('command-line-args');

//define colors for conditional colors output
const titleColors = ['red','green','yellow','blue'];
const optionDefinitions = [
	{ name: 'limit', type: Number },
	{ name: 'keyword',type: String }
];

const cliOptions = commandLineArgs(optionDefinitions);	
if (!cliOptions.keyword) {
	cliOptions.keyword = 'green';
}

if (!cliOptions.limit) {
	cliOptions.limit = 3;
}

if(cliOptions.limit>50) {
	console.log("you exceeded max limit 50...");
	return;
}
console.log(cliOptions);
console.log('Your search options ',cliOptions);
console.log('\n');

const iTunesOptions = {
	media: 'movie',
	entity: 'movie',
	limit: cliOptions.limit,
	attribute: 'movieTerm'
};

let optionsString = '';
for (item in iTunesOptions) {
    optionsString += '&' + item + '=' + encodeURIComponent(iTunesOptions[item]);
}

request('http://itunes.apple.com/search?country=au' + optionsString + '&term=' + encodeURIComponent(cliOptions.keyword), function(err, response, body) {

	//check statusCode as err is coming null from itunes api
	if (response.statusCode!=200) {
		throw new Error("Api Error");
	}

	let data = JSON.parse(body);
	if (data.results && data.results.length > 0) {
		console.log("here is your search result\n------------------------------------------\n");
		let list = data.results;
		for (let value of list) {
			let releaseYear = new Date(value.releaseDate);
			let year = releaseYear.getFullYear();
			var movieDuration = Math.floor(value.trackTimeMillis / 60000)+'mins';
			var movieNameArray = value.trackName.split(" ");
			let colorFlag = false;
			let colorApply = "white";
			for(name in movieNameArray) {
				if(!colorFlag && titleColors.includes(movieNameArray[name].toLowerCase())) {
					colorApply = movieNameArray[name].toLowerCase();
					colorFlag = true;
				}
			}
			colors.setTheme({
				custom: [colorApply]
			});
			console.log(value.trackName.custom,',',movieDuration.custom,',',year.toString().custom,',',colorApply.toUpperCase().custom);
		}
	} else {
		console.log("sorry no result found...");
	}
});
