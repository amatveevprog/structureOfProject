const redisCalculateRetry = function (times) {
    console.log(`Try reconnect ${times}th to Redis DB at ${new Date()}.`);
    return Math.min(times * 2, 2000);
};

export default {
    port:6379,
    host:'127.0.0.1',
    family:4,//IPv4
    //password:'foobared',
    db:0,
    retryStrategy: redisCalculateRetry
};