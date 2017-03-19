//import store-db-providers

import DataTool from '../database';

export default class DataLogic
{
    constructor(config)
    {
        this.dataTool = new DataTool(config);
    }

}