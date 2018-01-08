new Vue({
    el:'.city-detail',
    data:{
        hot:[
            { name: '上海虹桥' },
            { name: '上海浦东' },
            { name: '北京' },
            { name: '长沙' },
            { name: '成都' },
            { name: '重庆' },
            { name:'大连'},
            { name: '广州' },
            { name:'哈尔滨'},
            { name:'海口'},
            { name: '杭州' },
            { name: '昆明' },
            { name: '南京' },
            { name: '三亚' }
        ],
        letter:[
            {
                cap:'A',
                cities:[
                    { city: '鞍山市' },
                    { city: '安庆市' },
                    { city:'安阳市'},
                ]
            },
            {
                cap: 'B',
                cities: [
                    { city: '鞍山市' },
                    { city: '安庆市' },
                    { city: '安阳市' },
                ]
            }
        ]
    }
})
