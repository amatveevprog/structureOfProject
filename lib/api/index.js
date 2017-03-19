//import store-db-providers
// подключение конфига для БД
import DataTool from '../database';

export default class DataLogicApi
{
    constructor(config)
    {
        this.dataTool = new DataTool(config);
        this.cacheDB = this.dataTool.cacheDBService;
        this.storeDB = this.dataTool.storeDBService;
    }
    run(data,callback)
    {
        /*const operation = data.operation;
        const entity = data.entity;
        */

    }
    start(callback)
    {
        const storeDB = this.storeDB;
        const cacheDB = this.cacheDB;
        storeDB.projects.getProjects((err,res)=>{
            cacheDB.projects_cache.saveAllProjects(res,(err2,res2)=>{
                if(err2) callback(err2);
                callback(null,res2);
            });
        });
    }

}