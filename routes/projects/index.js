/**
 * Created by Bonya on 14.03.2017.
 */
/*exports.hello = function () {
    return 'hello world';
};*/
const api = require('../../lib/api');
const projectProcessing = require('./project').default;
export default function(ctx,api) {
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
        return req.params.project;
        /*let result = await require('./project').run(api);
        return result;*/
        //формирование данных для апи и посылка в обработку
        //api.run
        //require('./project').run(api).then()
        //promisification
    });
}


//TODO 1.добавить апи для регистрации проекта+обращение к базе!\
//TODO 2.сделать по корневому роуту фронт-код по регистрации проекта.
    //TODO 3. в клиентском заменить обращение урл на другой адрес
//TODO 4. роут по проверке проекта с фронтом проекта--->
// TODO 5.--->апи по авторизации на основе мидлвары(+сделать мидлвару по проверке токена)
//TODO 6. Проверка работы токена.
