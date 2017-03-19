const redisCalculateRetry = function (times) {
    console.log(`Try reconnect ${times}th to Redis DB at ${new Date()}.`);
    return Math.min(times * 2, 2000);
};

module.exports.connection = {
    port:6379,
    host:'127.0.0.1',
    family:4,//IPv4
    //password:'foobared',
    db:0,
    retryStrategy: redisCalculateRetry
};
module.exports.poolConfig =
{
    maxPoolSize: 20,
    credentials: {
        host: "127.0.0.1",
        port: "6379",
        db: 0,
        retry_strategy: redisCalculateRetry
    }
};