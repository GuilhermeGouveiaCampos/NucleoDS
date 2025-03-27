require("reflect-metadata");
const express = require("express");
const { AppDataSource } = require("./database/data-source");


const usuarioRoutes = require("./routes/usuario.routes");
const faculdadeRoutes = require("./routes/faculdade.routes");
const categoriaRoutes = require("./routes/categoria.routes");
const anexoRoutes = require("./routes/anexo.routes");
const formularioRoutes = require("./routes/formulario.routes");
const formularioCampoRoutes = require("./routes/formularioCampo.routes");
const formularioCampoPreenchidoRoutes = require("./routes/formularioCampoPreenchido.routes");
const identificacaoRoutes = require("./routes/identificacao.routes");
const identificacaoCampoRoutes = require("./routes/identificacaoCampo.routes");
const identificacaoCampoPreenchidoRoutes = require("./routes/identificacaoCampoPreenchido.routes");
const respostaRoutes = require("./routes/resposta.routes");
const logRoutes = require("./routes/log.routes");


AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    app.use("/api/usuarios", usuarioRoutes);
    app.use("/api/faculdades", faculdadeRoutes);
    app.use("/api/categorias", categoriaRoutes);
    app.use("/api/anexos", anexoRoutes);
    app.use("/api/formularios", formularioRoutes);
    app.use("/api/formularios-campos", formularioCampoRoutes);
    app.use("/api/formularios-campos-preenchido", formularioCampoPreenchidoRoutes);
    app.use("/api/identificacoes", identificacaoRoutes);
    app.use("/api/identificacoes-campos", identificacaoCampoRoutes);
    app.use("/api/identificacoes-campos-preenchido", identificacaoCampoPreenchidoRoutes);
    app.use("/api/respostas", respostaRoutes);
    app.use("/api/logs", logRoutes);
    
    app.listen(3000, () => {
      console.log("🚀 Servidor rodando na porta 3000");
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao iniciar o banco de dados:", error);
  });
