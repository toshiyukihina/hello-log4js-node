var log4js = require('log4js');
//log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./debug.log'), 'hello-log4js');

var logger = log4js.getLogger('hello-log4js');
logger.setLevel('WARN');

logger.trace('Hello log4js');
logger.debug('Hello log4js');
logger.info('Hello log4js');
logger.warn('Hello log4js');
logger.error('Hello log4js');
logger.fatal('Hello log4js');
