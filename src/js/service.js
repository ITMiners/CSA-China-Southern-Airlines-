Vue.directive('drag',function(el,binding){
    // console.log(el);
    el.onmousedown = function(e){  
        el.style.position = 'absolute';
        el.style.width = this.offsetWidth;
        el.style.height = this.offsetHeight;
        var startX = e.clientX - el.offsetLeft;
        var startY = e.clientY - el.offsetTop;
        // console.log(startX,startY);
        
        document.onmousemove = function(e){
            var endX = e.clientX - startX;
            var endY = e.clientY - startY;
            el.style.left = endX + 'px';
            el.style.top = endY +'px';
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
})

new Vue({
    el:'.function',
    data:{
        lists:[
            {
                title:'行前计划',
                row:[
                    {
                        item:[
                            { pic:'images/function-1.png', txt:'机票预订'},
                            { pic:'images/function-2.png', txt:'酒店'},
                            { pic:'images/function-3.png', txt: '旅游度假' },
                            { pic:'images/function-4.png', txt:'景点门票'}
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-5.png', txt: '签证' },
                            { pic: 'images/function-6.png', txt: '机场泊车' },
                            { pic: 'images/function-7.png', txt: '机场休息室' },
                            { pic: 'images/function-8.png', txt: '机票预订指南' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-9.png', txt: '出行提示信息' },
                            { pic: 'images/function-10.png', txt: '登记办理指南' },
                            { pic: 'images/function-11.png', txt: '行李服务指南' },
                            { pic: 'images/function-12.png', txt: '机场服务指引' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-13.png', txt: '特殊旅客关怀' },
                            { pic: 'images/function-14.png', txt: '中转服务指南' },
                            { pic: 'images/function-15.png', txt: '机上服务指南' },
                            { pic: 'images/function-16.png', txt: '残疾军人购票' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-13.png', txt: '常见问题解答' },
                            { pic: 'images/function-14.png', txt: '机票预约' }
                        ]
                    }
                ]
            },
            {
                title: '出行服务',
                row: [
                    {
                        item: [
                            { pic: 'images/function-1.png', txt: '机票预订' },
                            { pic: 'images/function-2.png', txt: '酒店' },
                            { pic: 'images/function-3.png', txt: '旅游度假' },
                            { pic: 'images/function-4.png', txt: '景点门票' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-5.png', txt: '签证' },
                            { pic: 'images/function-6.png', txt: '机场泊车' },
                            { pic: 'images/function-7.png', txt: '机场休息室' },
                            { pic: 'images/function-8.png', txt: '机票预订指南' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-9.png', txt: '出行提示信息' },
                            { pic: 'images/function-10.png', txt: '登记办理指南' },
                            { pic: 'images/function-11.png', txt: '行李服务指南' },
                            { pic: 'images/function-12.png', txt: '机场服务指引' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-13.png', txt: '特殊旅客关怀' },
                            { pic: 'images/function-14.png', txt: '中转服务指南' },
                            { pic: 'images/function-15.png', txt: '机上服务指南' },
                            { pic: 'images/function-16.png', txt: '残疾军人购票' }
                        ]
                    }
                ]
            },
            {
                title: '安全抵达',
                row: [
                    {
                        item: [
                            { pic: 'images/function-1.png', txt: '机票预订' },
                            { pic: 'images/function-2.png', txt: '酒店' },
                            { pic: 'images/function-3.png', txt: '旅游度假' },
                            { pic: 'images/function-4.png', txt: '景点门票' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-5.png', txt: '签证' },
                            { pic: 'images/function-6.png', txt: '机场泊车' },
                            { pic: 'images/function-7.png', txt: '机场休息室' },
                            { pic: 'images/function-8.png', txt: '机票预订指南' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-9.png', txt: '出行提示信息' },
                            { pic: 'images/function-10.png', txt: '登记办理指南' },
                            { pic: 'images/function-11.png', txt: '行李服务指南' },
                            { pic: 'images/function-12.png', txt: '机场服务指引' }
                        ]
                    },
                    {
                        item: [
                            { pic: 'images/function-13.png', txt: '特殊旅客关怀' },
                            { pic: 'images/function-14.png', txt: '中转服务指南' },
                            { pic: 'images/function-15.png', txt: '机上服务指南' },
                            { pic: 'images/function-16.png', txt: '残疾军人购票' }
                        ]
                    }
                ]
            }
        ]
    }
})

