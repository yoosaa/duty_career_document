const path = require('path');

module.exports = {
  mode: 'production',
  // エントリーポイント
  entry: './js/app.js',
  // 出力
  output: {
    // ファイル名
    filename: 'app_bundle.js',
    // 出力先
    path: path.join(__dirname, '../')
  }
};