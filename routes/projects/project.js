/**
 * Created by Bonya on 14.03.2017.
 */
//TODO добавлеие функционала для обработки роутов
import async from 'async';


/*export default class ProjectRoute
{
    constructor(api)
}
export default async function (req,res,next) {
    //обработка роута

}*/
//обработка роута...
export default async (apiInstance,projectName)=>{
    return new Promise((resolve,reject)=>{
        apiInstance.run({entity:'projects',operation:'getProjects'},[],(error,result)=>{
        //run({entity:'projects',operation:'getProjects'},(error,result)=>{
            if(error) {
                console.log("ERROR!!!");
                reject(error);
            }
            else
            {
                console.log(`s0me result: ${result}`);
                resolve(result);
            }
        });
    });
}
const run=(api,callback)=>{
    /*const data = {
        entity:'api',
        operation:'get'
    };*/
    callback(null,api);
};
/*module.exports.run = (api,callback)=>
{
   /!* return new Promise((resolve,reject)=>{
        const data = {
            entity:'project',
            operation:'get',
            para
        }
        api
    });*!/
};*/




/*


const ProjectExists = require('./config/connect').ProjectExists;
function processProjectQuery(item,callback)
{
    //go to redis db
    ProjectExists(item,(err,result)=>{
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null,result);
        }
    })
}
// обработка запроса к роуту проекта
  export default async (req,res,next)=>{
    processProjectQuery(req.params.project,(err,result)=>{
        if(err)
        {
            res.err(500,"Server Error");
        }
        else
        {
            if(result) {
                res.json(`This is your ticket to SPA procedures :-) ${result}`);
            }
            else
            {
                next();
            }
        }
    });*/
