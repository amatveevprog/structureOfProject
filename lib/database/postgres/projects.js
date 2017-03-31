/**
 * Created by Bonya on 12.03.2017.
 */

'use strict';
import async from 'async';
export default class PostgresProjects
{
    constructor(connection)
    {
        this.connection = connection;
    }
    getProjects(callback){
        this.connection.connect((err)=>{
            //TODO connecting вынести в index!!!
            if(err)
            {
                callback(err);
                return;
            }
            const query = 'SELECT * FROM "common"."PROJECTS"';
            this.connection.query(query,(err, result) => {
                if (err)
                {
                    callback(err);
                }
                else
                {
                    callback(null,result.rows);
                }
            });
        });
    }
}