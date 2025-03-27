const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "IdentificacaoCampo",
  tableName: "identificacoes_campos",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idIdentificacao: { type: "int" },
    nome: { type: "varchar", length: 255 },
    tipo: { type: "varchar", length: 100 },
    obrigatorio: { type: "tinyint" },
    created_at: { type: "datetime", createDate: true },
    updated_at: { type: "datetime", updateDate: true },
  },
});
