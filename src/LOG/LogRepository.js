const { AppDataSource } = require("../database/data-source");
const Log = require("./Log");

function getLogRepository() {
  return AppDataSource.getRepository(Log);
}

module.exports = getLogRepository;
