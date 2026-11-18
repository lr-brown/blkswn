// Lets TypeScript accept plain side-effect imports like `import "./style.css"`.
// The bundler (react-scripts) handles the actual CSS.
declare module "*.css"
