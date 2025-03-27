const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Resposta",
  tableName: "respostas",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idFormulario: { type: "int" },
    idUsuario: { type: "int" },
    resposta: { type: "text" },
    dataHora: { type: "datetime" },
  },
});
