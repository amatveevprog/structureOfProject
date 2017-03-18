/**
 * Created by Bonya on 18.03.2017.
 */
/**
 * Подключение всех мидлваров - здесь!!!
 */

//располагаем все мидлвары в правильном порядке!
const middlewares = [
    {
        middleware:require('./subdomain'),
        options:null
    }
];
export default function getMiddlewares(ctx){
    const app = ctx;
    middlewares.forEach((item)=>{
        app.use(item.middleware(item.options));
    });
};