const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Job7:Job1997@ictakfiles.uof5d.mongodb.net/Resume?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const schema = mongoose.Schema;

const AdminSchema = new schema({
    email: String,
    password: String
});

var Admindata = mongoose.model('Admindata',AdminSchema);

module.exports = Admindata;