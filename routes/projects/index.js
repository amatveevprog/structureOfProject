/**
 * Created by Bonya on 14.03.2017.
 */
/*exports.hello = function () {
    return 'hello world';
};*/
const api = require('../../lib/api');
const projectProcessing = require('./project').default;
export default function(ctx) {
    const app = ctx.asyncRouter;

    app.get('/_sub/api',async (req,res)=>{
        //await 1
        //await 2
        console.log('/_sub/api');
        return 'Вы  - для интеграции, в него ключ апи, код проекта';
        //TODO обработка в файле ./api.js
    });
    app.get('/_sub/api/www',async(req,res)=>{
        return 'Вы  - для интеграции, в него ключ апи, код проекта через www';
        //TODO обработка в файле ./api.js
    });
    app.get('/_sub/:project',async (req,res,next)=>{

    });
}
