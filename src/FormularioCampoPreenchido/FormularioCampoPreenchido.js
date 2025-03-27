const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "FormularioCampoPreenchido",
  tableName: "formularios_campos_preenchido",
  columns: {
    id: { primary: true, type: "int", generated: true },
    idCampo: { type: "int" },
    idUsuario: { type: "int" },
    valor: { type: "text" },
    dataHora: { type: "datetime" },
  },
});
