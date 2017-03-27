/**
 * Created by Bonya on 18.03.2017.
 */
//connection to db
//getting the pool of connections
//aggregating methods in one object

import fs from 'fs';
import path from 'path';
import pg from 'pg';

export default class PostgresDB
{
    //внешний вызов: RedisDB_instance.<name_of_file>.<name_of_class_method>(bdObject,(err,res)=>{});
    //пример: rDB.projects_cache.saveAllProjects(bdObject,(err,res)=>{});
    constructor(options)
    {
        pg.defaults.ssl=true;
        this.client = new pg.Client(options);
        this.init();
    }
    init()
    {
        fs.readdirSync(__dirname).forEach((item)=>{
            let pathTofile = path.resolve(__dirname,item);
            if(fs.statSync(pathTofile).isFile()&&(item!='index.js'))
            {
                let instance = require(pathTofile).default;
                this[path.basename(item,'.js')]=new instance(this.client);
            }
        },this);
    }
}

// smth.method1()