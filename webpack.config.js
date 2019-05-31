const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const pluginHtml=new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
module.exports = {
mode:'development',
plugins:[
    pluginHtml  ////production/development
],
module:{
    rules:[
        {test:/\.js|js$/,use:'babel-loader',exclude:/node_modules/},
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},
        {test:/\.scss$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:4]','sass-loader']}
    ]
},
resolve:{
    //导入组建的时候可以不用写后缀名
    extensions:['.js','.json','.jsx'],
    alias:{
        '@':path.join(__dirname,'./src')
    }
}
}
