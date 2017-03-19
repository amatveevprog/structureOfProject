/**
 * Created by Bonya on 12.03.2017.
 */
import DataTool from '../../database';

export default class DataLogic
{
    constructor(config)
    {
        this.dataTool = new DataTool(config);
    }
}