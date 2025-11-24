# Centro de Eventos Sumativa 2 Simón Riffo

## Requisitos
- Node.js LTS
- npm

## Instalación

Instalar dependencias:
   ```bash
   npm install react-router-dom
   npm install @apollo/client graphql
   npm install msw@^2.0.0 --save-dev
   npm install -D tailwindcss postcss autoprefixer
   ```

Inicializar MSW:
   ```bash
   npx msw init ./public
   ```

## Ejecutar en desarrollo
```bash
npm start
```
## Build de producción
```bash
npm run build
```

MSW se habilita solo en `development`.

## Rutas
- `/` lista eventos (REST)
- `/events/:id` detalle (GraphQL)
