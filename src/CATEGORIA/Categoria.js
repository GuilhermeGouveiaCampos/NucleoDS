const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Categoria",
  tableName: "categorias",
  columns: {
    id: { primary: true, type: "int", generated: true },
    descricao: { type: "varchar", length: 255 },
    habilitado: { type: "tinyint", default: 1 },
    created_at: { type: "datetime", createDate: true },
    updated_at: { type: "datetime", updateDate: true },
  },
});
