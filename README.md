# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Requires firebase:
    npm install firebase
Requires dotenv
    npm install dotenv

Para agregar productos el mismo debe corresponder con el siguiente modelo>
        {
            "name": "string",
            "description": "string",
            "price": number,
            "caracteristics": [
                {
                    id: number,
                    name:"string"
                }
            ],
            "category": "string",
            "sku": "string"
        },

Se deja comentado dentro de App la ruta  /add/products
Que genera algunos productos dentro de firebase store.
Para poder agregarlos solo hay que descomentar la ruta y correr la localmente.