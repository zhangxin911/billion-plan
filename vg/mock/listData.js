const Mock=require('mockjs');

let menuData=Mock.mock({
	'menu|10-10':[{
		'id|+1':1,
		'name|+1':['menu1','menu2','menu3','menu4','menu5','menu6','menu7','menu8','menu9','menu10']
	}]
}),
    contentData=Mock.mock({
    'content|2-2':[{
    	'id|+1':1,
    	'food|+1':[[{
    		name:'五人团圆餐',
			detail:'麦辣鸡腿汉堡2份+板烧鸡腿堡2份+巨无霸1份+麦乐鸡20块+麦辣鸡翅9块+那么大鸡排1份+小玉米2份+菠萝派2份+香芋派2份+中可乐3杯*494ml+美汁源阳光橙2杯*475ml',
			discount:'6.3',
			nowPrice:'223',
			price:'351.5'
    	},{
    		name:'二人团圆餐',
			detail:'麦辣鸡腿汉堡2份+板烧鸡腿堡2份+巨无霸1份+麦乐鸡20块+麦辣鸡翅9块+那么大鸡排1份+小玉米2份+菠萝派2份+香芋派2份+中可乐3杯*494ml+美汁源阳光橙2杯*475ml',
			discount:'6.3',
			nowPrice:'223',
			price:'351.5'
    	}],[{
    		name:'二人团圆餐',
			detail:'麦辣鸡腿汉堡2份+板烧鸡腿堡2份+巨无霸1份+麦乐鸡20块+麦辣鸡翅9块+那么大鸡排1份+小玉米2份+菠萝派2份+香芋派2份+中可乐3杯*494ml+美汁源阳光橙2杯*475ml',
			discount:'6.3',
			nowPrice:'223',
			price:'351.5'
    	}]]
    	
    }]	
})


module.exports = { menuData ,contentData };