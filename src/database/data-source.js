const { DataSource } = require("typeorm");

const Usuario = require("../USUARIO/Usuario");
const Faculdade = require("../FACULDADE/Faculdade");
const Categoria = require("../CATEGORIA/Categoria");
const Anexo = require("../ANEXO/Anexo");
const Formulario = require("../FORMULARIO/Formulario");
const FormularioCampo = require("../FormularioCampo/FormularioCampo");
const FormularioCampoPreenchido = require("../FormularioCampoPreenchido/FormularioCampoPreenchido");
const Identificacao = require("../IDENTIFICACAO/Identificacao");
const IdentificacaoCampo = require("../IDENTIFICACAOCAMPO/IdentificacaoCampo");
const IdentificacaoCampoPreenchido = require("../IDENTIFICACAOPRENCHICO/IdentificacaoCampoPreenchido");
const Resposta = require("../RESPOSTAS/Resposta");
const Log = require("../LOG/Log");

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "", 
  database: "ndsdb",
  synchronize: true,
  logging: false,
  entities: [
    Usuario,
    Faculdade,
    Categoria,
    Anexo,
    Formulario,
    FormularioCampo,
    FormularioCampoPreenchido,
    Identificacao,
    IdentificacaoCampo,
    IdentificacaoCampoPreenchido,
    Resposta,
    Log,
  ],
});

module.exports = { AppDataSource };
