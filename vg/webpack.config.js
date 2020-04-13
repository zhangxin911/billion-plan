const path=require("path");
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const merge=require('webpack-merge');
// const CleanWebpackPlugin=require('clean-webpack-plugin');
const cacheLoader=requrie('cache-loader');
const happyPack=require('happyPack');
module.exports={
	mode:'development',
	resolve:{
		alias:{
			'@':path.resolve('src'),
			'mockData':path.resolve('mock')
		},
		extensions:['web.js','.js'],
		mainFields:['style','main']


	},
	entry:'./src/app.js',
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'
	},
	module:{
		rules:[
			// {
			// 	test:/\.jsx$/,
			// 	use:[
			// 		'cache-loader','babel-loader'
			// 	]
			// }
			{
				test:/\.jsx$/,
				use:'Happypack/loader?id=js',
				include:[path.resolve(__dirname,'src')]
			}
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				options:{
					presets:[
						"@babel/env","@babel/react"
					]
				},
				include:[path.resolve(__dirname,'src')]
			},{
				test:/\.css$/,
				loader:['style-loader','css-loader',{
					loader:'postcss-loader',
					options:{
						plugins:function(){
							return[
								require('autoprefixer')({
									"overrideBrowserslist":[
										"0.25%",
										"not dead"
									]
								})
							]
						}
					}
				}],
				exclude:/node_modules/
			},{
				test:/\.less$/,
				user:[
					MiniCssExtractPlugin
				]
				// loader:['style-loader','css-loader','less-loader']
			},{
				test:/\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
				use:[{
					loader:'url-loader',
					options:{
						limit:40240,
						esModule:false,
						name:'[name]_[hash:6].[ext]'
					}
				}],
				exclude:/node_modules/
			}
		]
	},
	plugins:[
		// new CleanWebpackPlugin(['dist']),

		new HtmlWebpackPlugin({
			template:'./src/index.html',
			hash:true
		})
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns:['!dll']
		});

		new CopyWebpackPlugin([
		{
			from:'public/js/*js',
			to:path.resolve(__dirname,'dist','js'),
			flatten:true,
		},
		],{
			ignore:['other.js']
		}),

		new MiniCssExtractPlugin({
			filename:'css/[name].css'
		})

		new webpack.HotModuleReplacementPlugin()

		new happyPack({
			id:'css',
			user:['style-loader','css-loader']
		})
	],
	externals:{
		'jquery':'jQuery'
	},
	devServer:{
		contentBase:path.join(__dirname,"dist"),
		compress:true,
		port:9000
		hot:true
	}
}

// module.exports=merge(baseWebpackConfig,{

// })