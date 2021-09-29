import markdownCreator from "../../../lib/markdownParser";

const md = require('./description.md')
export default markdownCreator(md.default)