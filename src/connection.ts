import "reflect-metadata"
import { DataSource } from "typeorm"

const  AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "304191023",
  database: "typeorm",
  synchronize: true,
  logging: true,
  entities: [
    __dirname + '/**/*.entity.ts'
  ],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
.then(() => console.log('connected success'))
.catch((error) => console.log(error))

export default AppDataSource
