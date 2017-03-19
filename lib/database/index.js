/**
 * Created by Bonya on 12.03.2017.
 */
//подключение всех БД и инициализация
import RedisDB from './redis';
import PostgresDB from './postgres';

export default class DataTool
{
    constructor(config)
    {
        this.storeDBService = new PostgresDB(config.dbStoreOptions);
        this.cacheDBService = new RedisDB(config.dbCacheOptions);
    }
}

 //config.dbCacheOptions;

//case: вывести в консоль все проекты из postgres
/*
let pdb = new PostgresDB(config.dbStoreOptions);
pdb.projects.getProjects((err,res)=>{
   if(err) throw err;
   console.log(`result has ${res.length} rows`);
});*/
