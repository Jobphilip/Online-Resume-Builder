const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Job7:Job1997@ictakfiles.uof5d.mongodb.net/Resume?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const schema = mongoose.Schema;

const SignupSchema = new schema({
    username: String,
    email: String,
    password: String
});

var Signupdata = mongoose.model('Signupdata',SignupSchema);

module.exports = Signupdata;