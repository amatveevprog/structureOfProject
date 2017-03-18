import config from './config';
import App from './app';
const ServerApp = new App(config);
ServerApp.run();
console.log('...');
/*
console.log(`config:${config}`);
let c = {config};
console.log(`config:${c}`);*/
