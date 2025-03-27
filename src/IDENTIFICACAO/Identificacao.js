const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Identificacao",
  tableName: "identificacoes",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idCategoria: { type: "int" },
    titulo: { type: "varchar", length: 255 },
    descricao: { type: "text" },
    habilitado: { type: "tinyint", default: 1 },
    created_at: { type: "datetime", createDate: true },
    updated_at: { type: "datetime", updateDate: true },
  },
});
