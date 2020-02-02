const path=require("path");
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
	mode:'development',
	resolve:{
		alias:{
			'@':path.resolve('src'),
			'mockData':path.resolve('mock')
		}
	},
	entry:'./src/app.js',
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				options:{
					presets:[
						"@babel/env","@babel/react"
					]
				}
			},{
				test:/\.css$/,
				loader:['style-loader','css-loader']
			},{
				test:/\.less$/,
				loader:['style-loader','css-loader','less-loader']
			}
		]
	},
	plugins:[
		// new CleanWebpackPlugin(['dist']),

		new HtmlWebpackPlugin({
			template:'./src/index.html',
			hash:true
		})
	],
	devServer:{
		contentBase:path.join(__dirname,"dist"),
		compress:true,
		port:9000

	}
}