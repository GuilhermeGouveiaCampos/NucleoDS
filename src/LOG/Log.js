const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Log",
  tableName: "log",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idUsuario: { type: "int" },
    rota: { type: "varchar", length: 255 },
    metodo: { type: "varchar", length: 20 },
    payload: { type: "text" },
    dataHora: { type: "datetime" },
  },
});
