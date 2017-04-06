import * as mongo from 'mongodb'
import {AppProperties} from "ts-mean-models/app-properties.model";
import {Db} from "mongodb";

class Database {

  constructor(

  ) {
    this._mongoClient = mongo.MongoClient;
  }

  private _database;
  private _mongoClient;

  private mongoUri = (appParams: AppProperties) => {
    const params = appParams.db;
    return `mongodb://${params.dbuser}:${params.dbpassword}@${params.host}:${params.port}/${params.dbname}`
  };


  public get database() {
    return this._database;
  }

  public connectToDatabase (appConfig: AppProperties, callback?: (database: Db) => any) {

    // Connect to the db
    this._mongoClient.connect(this.mongoUri(appConfig), (err, db) => {
      if(!err) {
        this._database = db;
        if (callback) {
          callback(db);
        }
      } else {
        console.log('Error on connecting to MongoDB', err)
      }
    });

  };

}

export const database = new Database();

