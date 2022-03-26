// 将新的AST树转化为js代码
const generator = require('@babel/generator')
// js代码解析为AST树
const parser = require('@babel/parser')
// 对AST树做处理，比如箭头函数-->函数  const/let-->var等等
const traverse = require('@babel/traverse')
const types = require('@babel/types')
const fs = require('fs')

// 演示将一个代码片段转化为新的代码
function compile(code) {
  // 1.parse
  const ast = parser.parse(code)
  console.log(ast)

  // 2.做处理
  const visitor = {
    CallExpression(path) {
      const {
        callee
      } = path.node
      const isConsoleLog = types.isMemberExpression(callee) &&
        callee.object.name === 'console' &&
        callee.property.name === 'log'

      if (isConsoleLog) {
        const funcPath = path.findParent(p => {
          return p.isFunctionDeclaration();
        })
        const funcName = funcPath.node.id.name
        fs.writeFileSync("./funcPath.json", JSON.stringify(funcPath.node), err => {
          if (err) throw err;
          console.log("写入成功")
        });
        path.node.arguments.unshift(types.stringLiteral(funcName))
      }
    }
  }
  traverse.default(ast, visitor)

  // 3.生成新的代码
  return generator.default(ast, {}, code)
}
const code = `
function getData() {
  console.log('data')
}
`;
console.log(compile(code).code)