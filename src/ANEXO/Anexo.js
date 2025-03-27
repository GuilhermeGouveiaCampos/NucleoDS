const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Anexo",
  tableName: "anexos",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idFormulario: { type: "int" },
    caminho: { type: "varchar", length: 255 },
    tipo: { type: "varchar", length: 100 },
    nomeOriginal: { type: "varchar", length: 255 },
    habilitado: { type: "tinyint", default: 1 },
    created_at: { type: "datetime", createDate: true },
    updated_at: { type: "datetime", updateDate: true },
  },
});
