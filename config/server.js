/**
 * Created by Bonya on 14.03.2017.
 */

export default {
    env: process.env.NODE_ENV || process.env.ENV || 'development',
        port:process.env.PORT || 3000,
        protocol:'https',
    dbStoreOptions:require('./database/postgres').poolConfig,
    dbCacheOptions:require('./database/redis').poolConfig
}