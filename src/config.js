var config = {};

config.redis = {
	port: 6379,
	address: 'redis.metroeguide.com',
	authRequired : true,
	password: 'Mad15onmetr0'
};

config.port = 33936;
config.imageSavePath = '/images/';
config.prefixImageKey = 'urn:image:';


module.exports = config;