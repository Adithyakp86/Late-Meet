// Declaration file to allow side-effect CSS imports in TypeScript files
declare module "*.css" {
  const content: string;
  export default content;
}
