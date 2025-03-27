const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Usuario",
  tableName: "usuarios",
  columns: {
    id: { primary: true, type: "int", generated: true },
    cpf: { type: "varchar", length: 14 },
    nome: { type: "varchar", length: 100 },
    sobrenome: { type: "varchar", length: 100 },
    email: { type: "varchar", length: 255 },
    telefone: { type: "varchar", length: 20 },
    matricula: { type: "varchar", length: 20 },
    habilitado: { type: "tinyint", default: 1 },
    created_at: { type: "datetime", createDate: true },
    updated_at: { type: "datetime", updateDate: true },
  },
});
