## Starterkit

### Gitlab Template

[Download](https://atecna.gitlab.host/frontEnd/formation/starter-kit/download_export) an export of this starter-kit, then use [GitLab Import](https://atecna.gitlab.host/import/gitlab_project/new?namespace_id=451&name=&path=).

```bash
cd your-project-name
yarn install # If you don't have yarn installed, run: npm install -g yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the title in `index.html`
- [ ] Remove tests in test directory and/or write your own
- [ ] Chose a framework if you want (vue, react, svelte) by uncommenting plugin in `vite.config.js`
- [ ] Add your framework packages, ex: `yarn add vue@latest --save-dev`
- [ ] Update `main.js` to handle your framework if need

```js
import { defineConfig } from 'vite'
// import { react } from '@vitejs/plugin-react'
import Vue from '@vitejs/plugin-vue'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: './',
  plugins: [
    // react(),
    Vue(),
    // svelte(),
  ],
})
```

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
yarn dev
```

### API

Just run and visit http://localhost:3456  

```bash
yarn mock
```
[API Documentation](https://app.swaggerhub.com/apis-docs/amelique-atecna/Atecna-workout/1.0.0)  
[Postman Collection](atecna-workout-api.postman_collection.json)

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

### Page

Deploy manually your pages on pipeline succeed, then visit (replace with your repository path):  https://atecna-frontend.gitlab.io/formations/starterkit

## Wiki

[Wiki](https://gitlab.com/atecna-frontend/formations/starterkit/-/wikis/home)
