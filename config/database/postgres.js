export default {
    user: 'julssdeyrmquae', //env var: PGUSER
    database: 'd1jkjsthsndv4p', //env var: PGDATABASE
    password: '5563484458a1e2134da73a6d0428d04332085b717fe5b23c0d3cae5a917486a1', //env var: PGPASSWORD
    host: 'ec2-54-247-177-33.eu-west-1.compute.amazonaws.com', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};