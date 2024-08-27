const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const user = "Welber";
  res.send(
    `Realizei de forma completa a atividade solicitada... Acesso permitido para ${user}.`
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
