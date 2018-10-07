const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const daKey = process.env.secret;

module.exports = authHelpers = {

    createToken(tokenInfoObj){
		return jwt.sign(tokenInfoObj, daKey, {
			expiresIn: 86400 // expires in 24 hours
		})
    },
    
    decodeToken(token){
		return jwt.verify(token, daKey);
    },
    
    hash(password){
		return bcrypt.hashSync(password);
    },
    
    compareSync(password, hashedPassword) {
		return bcrypt.compareSync(password, hashedPassword);
	},

	getRoleFromToken(token) {
		return authHelpers.decodeToken(token).role;
	},

	getIdFromToken(token) {
		return authHelpers.decodeToken(token).id;
	},

	isAdmin(token) {
		return authHelpers.getRoleFromToken(token) === "admin" ? true : false;
	},


}