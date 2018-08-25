/**
* 主模块文件
*/
import 'babel-polyfill';
import sourceMap from 'source-map';

/**
 * 入口函数
 */
function main(...args) {
  let mapJson = require('../src/vendor.json');
  let consumer = new sourceMap.SourceMapConsumer(mapJson);
  console.log(Object.keys(consumer));
  console.log(consumer.sources);
  console.log(consumer.originalPositionFor({
    line: 6,
    column: 1049
  }));

	process.stdout.write('Hello world!\n');
}

/**
 * 缺省执行main函数
 */
main(...process.argv.slice(2));
