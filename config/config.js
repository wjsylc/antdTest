export default{
	singular:true,
	routes:[{
		path:'/',
		component:'../layout',
		routes:[
		{
			path:'/puzzlecards',
			component:'./puzzlecards'
		},
		]
	}],
	plugins:[
		['umi-plugin-react',{
			antd:true,
			dva:true,
		}],
		],
}