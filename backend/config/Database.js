import { Sequelize } from "sequelize";

const db = new Sequelize("unicourse", "root", '', {
  host: "localhost",
  dialect: "mysql",
});

export default db;
