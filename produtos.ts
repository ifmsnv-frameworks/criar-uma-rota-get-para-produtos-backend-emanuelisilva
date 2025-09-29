import express from 'express';
import produtosRouter from './produtos'; // ajuste o caminho conforme necessário

const app = express();
app.use(express.json());
app.use('/api', produtosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
//tarefa concluída