//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('iTunes', () => {
	beforeEach((done) => { //Before each test we empty the database
		done();
	});

/**
  * Test the /itunes route
  */
  describe('Movie Search', () => {
	  it('it should search iTunes movies with limit 3', (done) => {
		const iTunesOptions = {
			media: 'movie',
			entity: 'movie',
			limit: 3,
			attribute: 'movieTerm'
		};

		let optionsString = '';
		for (item in iTunesOptions) {
			optionsString += '&' + item + '=' + encodeURIComponent(iTunesOptions[item]);
		}
		chai.request('http://itunes.apple.com')
			.get('/search?country=au' + optionsString + '&term=' + encodeURIComponent("yellow"))
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
			  done();
			});
		});
	});
});