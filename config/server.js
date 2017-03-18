/**
 * Created by Bonya on 14.03.2017.
 */
import configDb from './database/postgres';
import configCacheDb from './database/redis';
export default {
    env: process.env.NODE_ENV || process.env.ENV || 'development',
        port:process.env.PORT || 3000,
        protocol:'https',
    dbStoreOptions:configDb,
    cacheDbOptions:configCacheDb
}