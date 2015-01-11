var config = {};

config.redis = {
	port: 6379,
	address: '<redis_address>',
	authRequired : true,
	password: '<redis_password>'
};

config.port = 33936;
config.imageSavePath = '/images/';
config.prefixImageKey = 'urn:image:';


module.exports = config;