# Centro de Eventos Sumativa 2 Simón Riffo

## Requisitos
- Node.js LTS
- npm

## Instalación
1. Crear proyecto base:
   ```bash
   npx create-react-app eventos-Simón-Riffo-PFY2202
   cd eventos-Simón-Riffo-PFY2202
   ```

2. Instalar dependencias:
   ```bash
   npm install react-router-dom
   npm install @apollo/client graphql
   npm install msw@^2.0.0 --save-dev
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Inicializar MSW:
   ```bash
   npx msw init ./public
   ```

## Ejecutar en desarrollo
```bash
npm start
```

MSW se habilita solo en `development`.

## Rutas
- `/` lista eventos (REST)
- `/events/:id` detalle (GraphQL)