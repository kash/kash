
/**
 * This class retrieves information about a user. It takes a user's id and also has a
 * callback function. The callback will be called when the user information is ready.
 */

let fetchBook = function () {
	app.post('/fetchUpToBook', function (req, res) {
		res.json({
			"book": "something"
		})
	});
}

module.exports = {
	fetchBook: fetchBook(),
}