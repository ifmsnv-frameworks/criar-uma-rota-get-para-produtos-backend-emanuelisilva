import { Router } from 'express';
import { pool } from './db'; // sem .js se estiver usando TypeScript

const router = Router();

router.get('/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, nome, preco, urlfoto, descricao FROM produtos');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
//tarefa concluída
