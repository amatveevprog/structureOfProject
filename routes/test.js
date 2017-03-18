/*
import fs from 'fs';
import path from 'path';
const routesRaw = fs.readdirSync('./routes').map((item)=>{
    return path.resolve('./routes',item);
});

/!*const routesPaths = routesRaw.map((item)=>{
    return path.resolve('./routes',item);
});*!/

let dirArray=[];
for(let key in routesRaw)
{
    if(fs.statSync(routesRaw[key]).isDirectory())
    {
        dirArray.push(routesRaw[key]);
    }
}
console.log(dirArray);
let a = require(dirArray[1]).hello;
console.log(a());*/
let ctx = {};
const getRoutes = require('./index').default(ctx);