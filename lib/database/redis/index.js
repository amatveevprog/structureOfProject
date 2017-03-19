/**
 * Created by Bonya on 19.03.2017.
 */

//connection properties, all function requirements

import fs from 'fs';
import path from 'path';

export default class RedisDB
{
    //внешний вызов: RedisDB_instance.<name_of_file>.<name_of_class_method>(bdObject,(err,res)=>{});
    //пример: rDB.projects_cache.saveAllProjects(bdObject,(err,res)=>{});
    constructor(options)
    {
        this.client = require('redis-pooling')(options);
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

/*
let rDB = new RedisDB(config.dbCacheOptions);
rDB.projects_cache.sayHi();



rDB.projects_cache.saveAllProjects(bdObject,(err,res)=>{
    if(err)throw err;
    console.log('smth good happened with saving projects!!!');
});
*/


/*rDB.projects_cache.flushProjectCache((err,res)=>{
    if(err)throw err;
    console.log('smth good happened with deleting!!!');
});*/
