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
    run(data,params,callback)
    {
        const entity = data.entity;
        const operation = data.operation;
        //вызов функции конечной БД
        //return this.storeDB[entity][operation](callback);
        if(entity in this.storeDB)
        {
            if(operation in this.storeDB[entity])
            {
                //все нормально...
                this.storeDB[entity][operation](params,callback);
            }
            else
            {
                callback(new Error(`No such operation or operation <${operation}> is not available`));
            }
        }
        else
        {
            callback(new Error(`No such entity or entity <${entity}> is not available`));
        }
        /*this.storeDB[entity][operation] = function () {
            
        }
        const c = this.storeDB[entity][operation](params,callback);*/
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

/*
let dlApi = new DataLogicApi(require('../../config'));
dlApi.run({entity:'projects',operation:'getProjects'},{apple:'pear'},(err,res)=>{
   if(err) throw err;
   else
       console.log("Good!!!");
});*/
