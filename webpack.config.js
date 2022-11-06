const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "none", //개발모드, 운영모드 등 정할 수 있음.
  entry: "./src/index.js", //처음 진입하는 js 파일(ts도 가능하나, webpack 에서는 html은 진입점으로 삼지 않는다.
  output: {
    path: path.resolve(__dirname, "dist"),
    //webpack에서 제공하는 메소드. __dirname은 현재 config 파일이 있는 위치를 전달해준다.
    filename: "NSFWPagination.js", //출력할 파일명
    library: ["NSPWui", "pagination"], //라이브러리 이름. NSPWui.pagination 으로 호출한다.
    libraryTarget: "var", //라이브러리를 제공할 환경. umd 는 범용적인 라이브러리.
  },
  resolve: {
    //모듈을 해석하는 방식을 변경
    extensions: [".js", ".ts", ".tsx"], //확장자를 순서대로 해석.
  },
  module: {
    //모듈 처리 방법
    rules: [
      //로더를 모듈에 적용
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
    ],
  },
};
