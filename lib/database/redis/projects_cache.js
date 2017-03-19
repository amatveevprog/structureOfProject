/**
 * Created by Bonya on 12.03.2017.
 */
'use strict';
import async from 'async';
export default class RedisProjectCache
{
    constructor(connection)
    {
        this.connection = connection;
    }
    sayHi() {
        console.log('Hi from RedisProjectCache instance');
    }
    getAllProjects(callback){
        //stab
        //callback(null,'all projects');

    }

    /**
     * Сохранение всех проектов
     * @param data массив данных с свойствами Project и ID
     * @param callback
     */
    saveAllProjects(data,callback)
    {
        //сначала чистим БД
        this.flushProjectCache((_error_,_result_)=>{
            if(_error_) callback(_error_);
            async.every(data, (item, callback) => {
                this.connection.hset(`ProjectName:${item.Project.toLowerCase()}`, 'ProjectID', item.ID, (err) => {
                    callback(null, !err);
                })
            }, (err, result) => {
                //если результат труЪ, то все хорошо!
                if (err) throw err;
                else {
                    if (result == true) {
                        console.log('saved data to redis!!!');
                        callback(null,result);
                        //redisPool.exit();
                    }
                }
            });
        });
    }

    /**
     * Получение проекта
     * @param name
     * @param callback
     */
    getProject(name,callback)
    {
        this.connection.hget(`ProjectName:${item}`,'ProjectID',(err,result)=>{
            if(err) callback(err);
            else
            {
                callback(null,result);
            }
        });
    }

    /**
     * Очистить кеш от проектов(удалить все)
     * @param callback
     */
    flushProjectCache(_callback_)
    {
        this.connection.keys('ProjectName:*',(err,result)=>{
            async.every(result,
                (item,callback)=>{
                    this.connection.del(item,(error)=>{
                        callback(null,!err);
                    });
                },
                (error_,result_)=>{
                    if(error_) _callback_(error_);
                    //success!
                    _callback_(null,result_);
                }
            );
        });
        //this.connection.del('ProjectName:*',callback);
    };
}