module.exports = {
  // mongoURI: 'mongodb://brad:brad@ds231725.mlab.com:31725/devconnector',
  //mongoURI: 'mongodb+srv://selvakumaran:Selva@cluster0-mf5at.mongodb.net/writeplaneshoot',
  mongoURI: 'mongodb+srv://vimal:efkBSzWnnY0uItdL@cluster1.9c5pi.mongodb.net/writeplaneshoot?retryWrites=true',//Database User password: efkBSzWnnY0uItdL
  secretOrKey: 'secret'
};

//mails
module.exports = {
	mailer: {
		service: '', //service
		user: '',  //username of mail service
		pass: '', //password of mail service
		reporting_email: "" //reply mail
    }
}