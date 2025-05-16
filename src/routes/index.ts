/**
 * ================================================================
 * 📁 ROUTES INDEX
 *
 * O que é este arquivo?
 * - Este arquivo funciona como o "centralizador" de todas as rotas da aplicação.
 * - Aqui, agrupamos e organizamos as rotas em módulos, como /heroes, /users, etc.
 *
 * Para que serve?
 * - Evita poluir o `server.ts` com várias importações de rotas.
 * - Deixa o projeto mais escalável e organizado, especialmente
 *   quando houver muitas rotas diferentes.
 *
 * Como se relaciona com os outros arquivos?
 * ➝ Importa arquivos de rotas específicos (ex: heroes.routes.ts)
 * ➝ Agrupa esses arquivos sob um prefixo (ex: /heroes)
 * ➝ Exporta o conjunto de rotas para ser usado no `server.ts`
 *
 * 📌 Fluxo:
 * server.ts → routes/index.ts → [heroes.routes.ts, users.routes.ts, ...]
 * ================================================================
 */

import { Router } from 'express';//application,

// Importa o módulo de rotas dos heróis
import heroesRouter from './heroes.routes';
import piusRouter from './pius.routes';
import usersRouter from './users.routes';


import { ro } from 'date-fns/locale';

const routes = Router();

/**
 * Agrupa todas as rotas definidas em heroes.routes.ts
 * e as coloca sob o prefixo /heroes.
 *
 * Exemplo:
 * - GET     /heroes
 * - POST    /heroes
 * - GET     /heroes/:id
 * - etc.
 */

routes.use('/heroes', heroesRouter);
routes.use('/user', usersRouter);
routes.use('/user', usersRouter);
routes.use('/pius', piusRouter);



// Exporta o roteador para ser usado no servidor principal
export default routes;
