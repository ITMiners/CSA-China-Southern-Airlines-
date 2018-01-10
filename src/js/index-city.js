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
                cities: [
                    {
                        city: "鞍山市",
                        tags: "ANSHAN,鞍山市",
                        cityid: 64
                    },
                    {
                        city: "安庆市",
                        tags: "ANQING,安庆市",
                        cityid: 149
                    },
                    {
                        city: "安阳市",
                        tags: "ANYANG,安阳市",
                        cityid: 174
                    },
                    {
                        city: "阿拉善盟",
                        tags: "ALASHANMENG,阿拉善盟",
                        cityid: 202
                    },
                    {
                        city: "阿坝州",
                        tags: "ABAZHOU,阿坝州",
                        cityid: 290
                    },
                    {
                        city: "安顺市",
                        tags: "ANSHUN,安顺市",
                        cityid: 294
                    },
                    {
                        city: "阿里地区",
                        tags: "ALIDIQU,阿里地区",
                        cityid: 316
                    },
                    {
                        city: "安康市",
                        tags: "ANKANG,安康市",
                        cityid: 320
                    },
                    {
                        city: "阿克苏地区",
                        tags: "AKESUDIQU,阿克苏地区",
                        cityid: 348
                    },
                    {
                        city: "阿勒泰地区",
                        tags: "ALETAIDIQU,阿勒泰地区",
                        cityid: 355
                    },
                    {
                        city: "阿拉尔市",
                        tags: "ALAER,阿拉尔市",
                        cityid: 356
                    }
                ]
            },
            {
                cap: 'B',
                cities: [
                    {
                        city: "北京市",
                        tags: "BEIJING,北京市",
                        cityid: 1
                    },
                    {
                        city: "保定市",
                        tags: "BAODING,保定市",
                        cityid: 62
                    },
                    {
                        city: "包头市",
                        tags: "BAOTOU,包头市",
                        cityid: 63
                    },
                    {
                        city: "本溪市",
                        tags: "BENXI,本溪市",
                        cityid: 77
                    },
                    {
                        city: "蚌埠市",
                        tags: "BANGBU,蚌埠市",
                        cityid: 100
                    },
                    {
                        city: "北海市",
                        tags: "BEIHAI,北海市",
                        cityid: 161
                    },
                    {
                        city: "滨州市",
                        tags: "BINZHOU,滨州市",
                        cityid: 166
                    },
                    {
                        city: "宝鸡市",
                        tags: "BAOJI,宝鸡市",
                        cityid: 170
                    },
                    {
                        city: "亳州市",
                        tags: "BOZHOU,亳州市",
                        cityid: 189
                    },
                    {
                        city: "巴彦淖尔市",
                        tags: "BAYANNAOER,巴彦淖尔市",
                        cityid: 199
                    },
                    {
                        city: "白山市",
                        tags: "BAISHAN,白山市",
                        cityid: 208
                    },
                    {
                        city: "白城市",
                        tags: "BAICHENG,白城市",
                        cityid: 210
                    },
                    {
                        city: "百色市",
                        tags: "BAISE,百色市",
                        cityid: 263
                    },
                    {
                        city: "白沙黎族自治县",
                        tags: "BAISHALIZUZIZHIXIAN,白沙黎族自治县",
                        cityid: 278
                    },
                    {
                        city: "巴中市",
                        tags: "BAZHONG,巴中市",
                        cityid: 288
                    },
                    {
                        city: "毕节地区",
                        tags: "BIJIEDIQU,毕节地区",
                        cityid: 296
                    },
                    {
                        city: "保山市",
                        tags: "BAOSHAN,保山市",
                        cityid: 301
                    },
                    {
                        city: "白银市",
                        tags: "BAIYIN,白银市",
                        cityid: 323
                    },
                    {
                        city: "巴音郭楞州",
                        tags: "BAYINGUOLENGZHOU,巴音郭楞州",
                        cityid: 350
                    },
                    {
                        city: "博尔塔拉州",
                        tags: "BOERTALAZHOU,博尔塔拉州",
                        cityid: 352
                    }
                ]
            },
            {
                cap: "C",
                cities: [
                    {
                        city: "成都市",
                        tags: "CHENGDU,成都市",
                        cityid: 17
                    },
                    {
                        city: "重庆市",
                        tags: "CHONGQING,重庆市",
                        cityid: 18
                    },
                    {
                        city: "长沙市",
                        tags: "CHANGSHA,长沙市",
                        cityid: 24
                    },
                    {
                        city: "长春市",
                        tags: "CHANGCHUN,长春市",
                        cityid: 25
                    },
                    {
                        city: "常州市",
                        tags: "CHANGZHOU,常州市",
                        cityid: 45
                    },
                    {
                        city: "沧州市",
                        tags: "CANGZHOU,沧州市",
                        cityid: 59
                    },
                    {
                        city: "承德市",
                        tags: "CHENGDE,承德市",
                        cityid: 72
                    },
                    {
                        city: "常德市",
                        tags: "CHANGDE,常德市",
                        cityid: 106
                    },
                    {
                        city: "郴州市",
                        tags: "CHENZHOU,郴州市",
                        cityid: 107
                    },
                    {
                        city: "长治市",
                        tags: "CHANGZHI,长治市",
                        cityid: 127
                    },
                    {
                        city: "滁州市",
                        tags: "CHUZHOU,滁州市",
                        cityid: 148
                    },
                    {
                        city: "池州市",
                        tags: "CHIZHOU,池州市",
                        cityid: 187
                    },
                    {
                        city: "赤峰市",
                        tags: "CHIFENG,赤峰市",
                        cityid: 196
                    },
                    {
                        city: "巢湖市",
                        tags: "CHAOHU,巢湖市",
                        cityid: 204
                    },
                    {
                        city: "朝阳市",
                        tags: "CHAOYANG,朝阳市",
                        cityid: 205
                    },
                    {
                        city: "潮州市",
                        tags: "CHAOZHOU,潮州市",
                        cityid: 257
                    },
                    {
                        city: "崇左市",
                        tags: "CHONGZUO,崇左市",
                        cityid: 267
                    },
                    {
                        city: "澄迈县",
                        tags: "CHENGMAIXIAN,澄迈县",
                        cityid: 274
                    },
                    {
                        city: "楚雄州",
                        tags: "CHUXIONGZHOU,楚雄州",
                        cityid: 308
                    },
                    {
                        city: "昌都地区",
                        tags: "CHANGDUDIQU,昌都地区",
                        cityid: 313
                    },
                    {
                        city: "昌吉州",
                        tags: "CHANGJIZHOU,昌吉州",
                        cityid: 351
                    }
                ]
            },
            {
                cap: "D",
                cities: [
                    {
                        city: "大连市",
                        tags: "DALIAN,大连市",
                        cityid: 14
                    },
                    {
                        city: "东莞市",
                        tags: "DONGWAN,东莞市",
                        cityid: 21
                    },
                    {
                        city: "大庆市",
                        tags: "DAQING,大庆市",
                        cityid: 48
                    },
                    {
                        city: "东营市",
                        tags: "DONGYING,东营市",
                        cityid: 73
                    },
                    {
                        city: "德州市",
                        tags: "DEZHOU,德州市",
                        cityid: 120
                    },
                    {
                        city: "大同市",
                        tags: "DATONG,大同市",
                        cityid: 125
                    },
                    {
                        city: "大理州",
                        tags: "DALIZHOU,大理州",
                        cityid: 136
                    },
                    {
                        city: "丹东市",
                        tags: "DANDONG,丹东市",
                        cityid: 163
                    },
                    {
                        city: "德阳市",
                        tags: "DEYANG,德阳市",
                        cityid: 173
                    },
                    {
                        city: "大兴安岭地区",
                        tags: "DAXINGANLINGDIQU,大兴安岭地区",
                        cityid: 218
                    },
                    {
                        city: "儋州市",
                        tags: "DANZHOU,儋州市",
                        cityid: 270
                    },
                    {
                        city: "东方市",
                        tags: "DONGFANG,东方市",
                        cityid: 273
                    },
                    {
                        city: "定安县",
                        tags: "DINGANXIAN,定安县",
                        cityid: 275
                    },
                    {
                        city: "达州市",
                        tags: "DAZHOU,达州市",
                        cityid: 285
                    },
                    {
                        city: "德宏州",
                        tags: "DEHONGZHOU,德宏州",
                        cityid: 309
                    },
                    {
                        city: "迪庆州",
                        tags: "DIQINGZHOU,迪庆州",
                        cityid: 311
                    },
                    {
                        city: "定西市",
                        tags: "DINGXI,定西市",
                        cityid: 330
                    }
                ]
            },
            {
                cap: "E",
                cities: [
                    {
                        city: "鄂尔多斯市",
                        tags: "EERDUOSI,鄂尔多斯市",
                        cityid: 43
                    },
                    {
                        city: "鄂州市",
                        tags: "EZHOU,鄂州市",
                        cityid: 230
                    },
                    {
                        city: "恩施州",
                        tags: "ENSHIZHOU,恩施州",
                        cityid: 235
                    }
                ]
            },
            {
                cap: "F",
                cities: [
                    {
                        city: "福州市",
                        tags: "FUZHOU,福州市",
                        cityid: 34
                    },
                    {
                        city: "佛山市",
                        tags: "FOSHAN,佛山市",
                        cityid: 36
                    },
                    {
                        city: "抚顺市",
                        tags: "FUSHUN,抚顺市",
                        cityid: 66
                    },
                    {
                        city: "阜新市",
                        tags: "FUXIN,阜新市",
                        cityid: 164
                    },
                    {
                        city: "阜阳市",
                        tags: "FUYANG,阜阳市",
                        cityid: 188
                    },
                    {
                        city: "抚州市",
                        tags: "FUZHOU,抚州市",
                        cityid: 223
                    },
                    {
                        city: "防城港市",
                        tags: "FANGCHENGGANG,防城港市",
                        cityid: 260
                    }
                ]
            },
            {
                cap: "G",
                cities: [
                    {
                        city: "广州市",
                        tags: "GUANGZHOU,广州市",
                        cityid: 3
                    },
                    {
                        city: "贵阳市",
                        tags: "GUIYANG,贵阳市",
                        cityid: 82
                    },
                    {
                        city: "赣州市",
                        tags: "GANZHOU,赣州市",
                        cityid: 102
                    },
                    {
                        city: "桂林市",
                        tags: "GUILIN,桂林市",
                        cityid: 135
                    },
                    {
                        city: "贵港市",
                        tags: "GUIGANG,贵港市",
                        cityid: 262
                    },
                    {
                        city: "广元市",
                        tags: "GUANGYUAN,广元市",
                        cityid: 280
                    },
                    {
                        city: "广安市",
                        tags: "GUANGAN,广安市",
                        cityid: 284
                    },
                    {
                        city: "甘孜州",
                        tags: "GANZIZHOU,甘孜州",
                        cityid: 291
                    },
                    {
                        city: "甘南州",
                        tags: "GANNANZHOU,甘南州",
                        cityid: 333
                    },
                    {
                        city: "固原市",
                        tags: "GUYUAN,固原市",
                        cityid: 336
                    },
                    {
                        city: "果洛州",
                        tags: "GUOLUOZHOU,果洛州",
                        cityid: 342
                    }
                ]
            },
            {
                cap: "H",
                cities: [
                    {
                        city: "杭州市",
                        tags: "HANGZHOU,杭州市",
                        cityid: 5
                    },
                    {
                        city: "合肥市",
                        tags: "HEFEI,合肥市",
                        cityid: 15
                    },
                    {
                        city: "哈尔滨市",
                        tags: "HAERBIN,哈尔滨市",
                        cityid: 16
                    },
                    {
                        city: "呼和浩特市",
                        tags: "HUHEHAOTE,呼和浩特市",
                        cityid: 41
                    },
                    {
                        city: "邯郸市",
                        tags: "HANDAN,邯郸市",
                        cityid: 60
                    },
                    {
                        city: "葫芦岛市",
                        tags: "HULUDAO,葫芦岛市",
                        cityid: 70
                    },
                    {
                        city: "衡水市",
                        tags: "HENGSHUI,衡水市",
                        cityid: 80
                    },
                    {
                        city: "海口市",
                        tags: "HAIKOU,海口市",
                        cityid: 83
                    },
                    {
                        city: "湖州市",
                        tags: "HUZHOU,湖州市",
                        cityid: 90
                    },
                    {
                        city: "淮安市",
                        tags: "HUAIAN,淮安市",
                        cityid: 97
                    },
                    {
                        city: "衡阳市",
                        tags: "HENGYANG,衡阳市",
                        cityid: 105
                    },
                    {
                        city: "汉中市",
                        tags: "HANZHONG,汉中市",
                        cityid: 115
                    },
                    {
                        city: "菏泽市",
                        tags: "HEZE,菏泽市",
                        cityid: 124
                    },
                    {
                        city: "惠州市",
                        tags: "HUIZHOU,惠州市",
                        cityid: 133
                    },
                    {
                        city: "黄山市",
                        tags: "HUANGSHAN,黄山市",
                        cityid: 141
                    },
                    {
                        city: "淮南市",
                        tags: "HUAINAN,淮南市",
                        cityid: 150
                    },
                    {
                        city: "淮北市",
                        tags: "HUAIBEI,淮北市",
                        cityid: 183
                    },
                    {
                        city: "呼伦贝尔市",
                        tags: "HULUNBEIER,呼伦贝尔市",
                        cityid: 198
                    },
                    {
                        city: "鹤岗市",
                        tags: "HEGANG,鹤岗市",
                        cityid: 212
                    },
                    {
                        city: "黑河市",
                        tags: "HEIHE,黑河市",
                        cityid: 217
                    },
                    {
                        city: "黄石市",
                        tags: "HUANGSHI,黄石市",
                        cityid: 227
                    },
                    {
                        city: "黄冈市",
                        tags: "HUANGGANG,黄冈市",
                        cityid: 232
                    },
                    {
                        city: "怀化市",
                        tags: "HUAIHUA,怀化市",
                        cityid: 244
                    },
                    {
                        city: "鹤壁市",
                        tags: "HEBI,鹤壁市",
                        cityid: 247
                    },
                    {
                        city: "河源市",
                        tags: "HEYUAN,河源市",
                        cityid: 254
                    },
                    {
                        city: "贺州市",
                        tags: "HEZHOU,贺州市",
                        cityid: 264
                    },
                    {
                        city: "河池市",
                        tags: "HECHI,河池市",
                        cityid: 265
                    },
                    {
                        city: "红河州",
                        tags: "HONGHEZHOU,红河州",
                        cityid: 306
                    },
                    {
                        city: "海东地区",
                        tags: "HAIDONGDIQU,海东地区",
                        cityid: 338
                    },
                    {
                        city: "海北州",
                        tags: "HAIBEIZHOU,海北州",
                        cityid: 339
                    },
                    {
                        city: "黄南州",
                        tags: "HUANGNANZHOU,黄南州",
                        cityid: 340
                    },
                    {
                        city: "海南州",
                        tags: "HAINANZHOU,海南州",
                        cityid: 341
                    },
                    {
                        city: "海西州",
                        tags: "HAIXIZHOU,海西州",
                        cityid: 344
                    },
                    {
                        city: "哈密地区",
                        tags: "HAMIDIQU,哈密地区",
                        cityid: 346
                    },
                    {
                        city: "和田地区",
                        tags: "HETIANDIQU,和田地区",
                        cityid: 347
                    }
                ]
            },
            {
                cap: "J",
                cities: [
                    {
                        city: "济南市",
                        tags: "JINAN,济南市",
                        cityid: 12
                    },
                    {
                        city: "锦州市",
                        tags: "JINZHOU,锦州市",
                        cityid: 68
                    },
                    {
                        city: "晋中市",
                        tags: "JINZHONG,晋中市",
                        cityid: 71
                    },
                    {
                        city: "吉林市",
                        tags: "JILIN,吉林市",
                        cityid: 74
                    },
                    {
                        city: "济宁市",
                        tags: "JINING,济宁市",
                        cityid: 79
                    },
                    {
                        city: "金华市",
                        tags: "JINHUA,金华市",
                        cityid: 86
                    },
                    {
                        city: "嘉兴市",
                        tags: "JIAXING,嘉兴市",
                        cityid: 88
                    },
                    {
                        city: "九江市",
                        tags: "JIUJIANG,九江市",
                        cityid: 101
                    },
                    {
                        city: "荆州市",
                        tags: "JINGZHOU,荆州市",
                        cityid: 109
                    },
                    {
                        city: "景德镇市",
                        tags: "JINGDEZHEN,景德镇市",
                        cityid: 151
                    },
                    {
                        city: "江门市",
                        tags: "JIANGMEN,江门市",
                        cityid: 153
                    },
                    {
                        city: "揭阳市",
                        tags: "JIEYANG,揭阳市",
                        cityid: 154
                    },
                    {
                        city: "焦作市",
                        tags: "JIAOZUO,焦作市",
                        cityid: 175
                    },
                    {
                        city: "晋城市",
                        tags: "JINCHENG,晋城市",
                        cityid: 190
                    },
                    {
                        city: "鸡西市",
                        tags: "JIXI,鸡西市",
                        cityid: 211
                    },
                    {
                        city: "佳木斯市",
                        tags: "JIAMUSI,佳木斯市",
                        cityid: 215
                    },
                    {
                        city: "吉安市",
                        tags: "JIAN,吉安市",
                        cityid: 221
                    },
                    {
                        city: "荆门市",
                        tags: "JINGMEN,荆门市",
                        cityid: 229
                    },
                    {
                        city: "济源市",
                        tags: "JIYUAN,济源市",
                        cityid: 252
                    },
                    {
                        city: "金昌市",
                        tags: "JINCHANG,金昌市",
                        cityid: 322
                    },
                    {
                        city: "嘉峪关市",
                        tags: "JIAYUGUAN,嘉峪关市",
                        cityid: 324
                    },
                    {
                        city: "酒泉市",
                        tags: "JIUQUAN,酒泉市",
                        cityid: 328
                    }
                ]
            },
            {
                cap: "K",
                cities: [
                    {
                        city: "昆明市",
                        tags: "KUNMING,昆明市",
                        cityid: 19
                    },
                    {
                        city: "开封市",
                        tags: "KAIFENG,开封市",
                        cityid: 110
                    },
                    {
                        city: "喀什地区",
                        tags: "KASHIDIQU,喀什地区",
                        cityid: 179
                    },
                    {
                        city: "克拉玛依市",
                        tags: "KELAMAYI,克拉玛依市",
                        cityid: 180
                    },
                    {
                        city: "克孜勒苏柯州",
                        tags: "KEZILESUKEZHOU,克孜勒苏柯州",
                        cityid: 349
                    }
                ]
            },
            {
                cap: "L",
                cities: [
                    {
                        city: "洛阳市",
                        tags: "LUOYANG,洛阳市",
                        cityid: 27
                    },
                    {
                        city: "兰州市",
                        tags: "LANZHOU,兰州市",
                        cityid: 30
                    },
                    {
                        city: "廊坊市",
                        tags: "LANGFANG,廊坊市",
                        cityid: 46
                    },
                    {
                        city: "临沂市",
                        tags: "LINYI,临沂市",
                        cityid: 58
                    },
                    {
                        city: "辽阳市",
                        tags: "LIAOYANG,辽阳市",
                        cityid: 75
                    },
                    {
                        city: "连云港市",
                        tags: "LIANYUNGANG,连云港市",
                        cityid: 96
                    },
                    {
                        city: "泸州市",
                        tags: "LUZHOU,泸州市",
                        cityid: 117
                    },
                    {
                        city: "莱芜市",
                        tags: "LAIWU,莱芜市",
                        cityid: 122
                    },
                    {
                        city: "聊城市",
                        tags: "LIAOCHENG,聊城市",
                        cityid: 123
                    },
                    {
                        city: "柳州市",
                        tags: "LIUZHOU,柳州市",
                        cityid: 134
                    },
                    {
                        city: "丽江市",
                        tags: "LIJIANG,丽江市",
                        cityid: 137
                    },
                    {
                        city: "丽水市",
                        tags: "LISHUI,丽水市",
                        cityid: 139
                    },
                    {
                        city: "拉萨市",
                        tags: "LASA,拉萨市",
                        cityid: 178
                    },
                    {
                        city: "六安市",
                        tags: "LIUAN,六安市",
                        cityid: 186
                    },
                    {
                        city: "临汾市",
                        tags: "LINFEN,临汾市",
                        cityid: 193
                    },
                    {
                        city: "吕梁市",
                        tags: "LVLIANG,吕梁市",
                        cityid: 194
                    },
                    {
                        city: "辽源市",
                        tags: "LIAOYUAN,辽源市",
                        cityid: 206
                    },
                    {
                        city: "龙岩市",
                        tags: "LONGYAN,龙岩市",
                        cityid: 226
                    },
                    {
                        city: "娄底市",
                        tags: "LOUDI,娄底市",
                        cityid: 245
                    },
                    {
                        city: "漯河市",
                        tags: "LUOHE,漯河市",
                        cityid: 248
                    },
                    {
                        city: "来宾市",
                        tags: "LAIBIN,来宾市",
                        cityid: 266
                    },
                    {
                        city: "临高县",
                        tags: "LINGAOXIAN,临高县",
                        cityid: 277
                    },
                    {
                        city: "乐山市",
                        tags: "LESHAN,乐山市",
                        cityid: 283
                    },
                    {
                        city: "凉山州",
                        tags: "LIANGSHANZHOU,凉山州",
                        cityid: 292
                    },
                    {
                        city: "六盘水市",
                        tags: "LIUPANSHUI,六盘水市",
                        cityid: 293
                    },
                    {
                        city: "临沧市",
                        tags: "LINCANG,临沧市",
                        cityid: 304
                    },
                    {
                        city: "林芝地区",
                        tags: "LINZHIDIQU,林芝地区",
                        cityid: 317
                    },
                    {
                        city: "陇南市",
                        tags: "LONGNAN,陇南市",
                        cityid: 331
                    },
                    {
                        city: "临夏州",
                        tags: "LINXIAZHOU,临夏州",
                        cityid: 332
                    }
                ]
            },
            {
                cap: "M",
                cities: [
                    {
                        city: "绵阳市",
                        tags: "MIANYANG,绵阳市",
                        cityid: 50
                    },
                    {
                        city: "马鞍山市",
                        tags: "MAANSHAN,马鞍山市",
                        cityid: 99
                    },
                    {
                        city: "牡丹江市",
                        tags: "MUDANJIANG,牡丹江市",
                        cityid: 129
                    },
                    {
                        city: "茂名市",
                        tags: "MAOMING,茂名市",
                        cityid: 155
                    },
                    {
                        city: "梅州市",
                        tags: "MEIZHOU,梅州市",
                        cityid: 156
                    },
                    {
                        city: "眉山市",
                        tags: "MEISHAN,眉山市",
                        cityid: 286
                    }
                ]
            },
            {
                cap: "N",
                cities: [
                    {
                        city: "南京市",
                        tags: "NANJING,南京市",
                        cityid: 11
                    },
                    {
                        city: "宁波市",
                        tags: "NINGBO,宁波市",
                        cityid: 20
                    },
                    {
                        city: "南宁市",
                        tags: "NANNING,南宁市",
                        cityid: 33
                    },
                    {
                        city: "南昌市",
                        tags: "NANCHANG,南昌市",
                        cityid: 38
                    },
                    {
                        city: "南充市",
                        tags: "NANCHONG,南充市",
                        cityid: 53
                    },
                    {
                        city: "南通市",
                        tags: "NANTONG,南通市",
                        cityid: 92
                    },
                    {
                        city: "南阳市",
                        tags: "NANYANG,南阳市",
                        cityid: 113
                    },
                    {
                        city: "宁德市",
                        tags: "NINGDE,宁德市",
                        cityid: 144
                    },
                    {
                        city: "南平市",
                        tags: "NANPING,南平市",
                        cityid: 145
                    },
                    {
                        city: "内江市",
                        tags: "NEIJIANG,内江市",
                        cityid: 282
                    },
                    {
                        city: "怒江州",
                        tags: "NUJIANGZHOU,怒江州",
                        cityid: 310
                    },
                    {
                        city: "那曲地区",
                        tags: "NAQUDIQU,那曲地区",
                        cityid: 312
                    }
                ]
            },
            {
                cap: "P",
                cities: [
                    {
                        city: "平顶山市",
                        tags: "PINGDINGSHAN,平顶山市",
                        cityid: 103
                    },
                    {
                        city: "攀枝花市",
                        tags: "PANZHIHUA,攀枝花市",
                        cityid: 119
                    },
                    {
                        city: "莆田市",
                        tags: "PUTIAN,莆田市",
                        cityid: 143
                    },
                    {
                        city: "盘锦市",
                        tags: "PANJIN,盘锦市",
                        cityid: 165
                    },
                    {
                        city: "濮阳市",
                        tags: "PUYANG,濮阳市",
                        cityid: 176
                    },
                    {
                        city: "萍乡市",
                        tags: "PINGXIANG,萍乡市",
                        cityid: 219
                    },
                    {
                        city: "普洱市",
                        tags: "PUER,普洱市",
                        cityid: 303
                    },
                    {
                        city: "平凉市",
                        tags: "PINGLIANG,平凉市",
                        cityid: 327
                    }
                ]
            },
            {
                cap: "Q",
                cities: [
                    {
                        city: "青岛市",
                        tags: "QINGDAO,青岛市",
                        cityid: 13
                    },
                    {
                        city: "泉州市",
                        tags: "QUANZHOU,泉州市",
                        cityid: 35
                    },
                    {
                        city: "秦皇岛市",
                        tags: "QINHUANGDAO,秦皇岛市",
                        cityid: 61
                    },
                    {
                        city: "齐齐哈尔市",
                        tags: "QIQIHAER,齐齐哈尔市",
                        cityid: 65
                    },
                    {
                        city: "曲靖市",
                        tags: "QUJING,曲靖市",
                        cityid: 138
                    },
                    {
                        city: "衢州市",
                        tags: "QUZHOU,衢州市",
                        cityid: 140
                    },
                    {
                        city: "清远市",
                        tags: "QINGYUAN,清远市",
                        cityid: 157
                    },
                    {
                        city: "七台河市",
                        tags: "QITAIHE,七台河市",
                        cityid: 216
                    },
                    {
                        city: "潜江市",
                        tags: "QIANJIANG,潜江市",
                        cityid: 238
                    },
                    {
                        city: "钦州市",
                        tags: "QINZHOU,钦州市",
                        cityid: 261
                    },
                    {
                        city: "琼海市",
                        tags: "QIONGHAI,琼海市",
                        cityid: 269
                    },
                    {
                        city: "黔西南州",
                        tags: "QIANXINANZHOU,黔西南州",
                        cityid: 297
                    },
                    {
                        city: "黔东南州",
                        tags: "QIANDONGNANZHOU,黔东南州",
                        cityid: 298
                    },
                    {
                        city: "黔南州",
                        tags: "QIANNANZHOU,黔南州",
                        cityid: 299
                    },
                    {
                        city: "庆阳市",
                        tags: "QINGYANG,庆阳市",
                        cityid: 329
                    }
                ]
            },
            {
                cap: "R",
                cities: [
                    {
                        city: "日照市",
                        tags: "RIZHAO,日照市",
                        cityid: 167
                    },
                    {
                        city: "日喀则地区",
                        tags: "RIKAZEDIQU,日喀则地区",
                        cityid: 315
                    }
                ]
            },
            {
                cap: "S",
                cities: [
                    {
                        city: "深圳市",
                        tags: "SHENZHEN,深圳市",
                        cityid: 2
                    },
                    {
                        city: "上海市",
                        tags: "SHANGHAI,上海市",
                        cityid: 4
                    },
                    {
                        city: "沈阳市",
                        tags: "SHENYANG,沈阳市",
                        cityid: 8
                    },
                    {
                        city: "石家庄市",
                        tags: "SHIJIAZHUANG,石家庄市",
                        cityid: 22
                    },
                    {
                        city: "苏州市",
                        tags: "SUZHOU,苏州市",
                        cityid: 23
                    },
                    {
                        city: "三亚市",
                        tags: "SANYA,三亚市",
                        cityid: 37
                    },
                    {
                        city: "绍兴市",
                        tags: "SHAOXING,绍兴市",
                        cityid: 89
                    },
                    {
                        city: "绥化市",
                        tags: "SUIHUA,绥化市",
                        cityid: 128
                    },
                    {
                        city: "四平市",
                        tags: "SIPING,四平市",
                        cityid: 130
                    },
                    {
                        city: "宿迁市",
                        tags: "SUQIAN,宿迁市",
                        cityid: 147
                    },
                    {
                        city: "汕头市",
                        tags: "SHANTOU,汕头市",
                        cityid: 158
                    },
                    {
                        city: "商丘市",
                        tags: "SHANGQIU,商丘市",
                        cityid: 177
                    },
                    {
                        city: "石河子市",
                        tags: "SHIHEZI,石河子市",
                        cityid: 181
                    },
                    {
                        city: "宿州市",
                        tags: "SUZHOU,宿州市",
                        cityid: 185
                    },
                    {
                        city: "朔州市",
                        tags: "SHUOZHOU,朔州市",
                        cityid: 191
                    },
                    {
                        city: "松原市",
                        tags: "SONGYUAN,松原市",
                        cityid: 209
                    },
                    {
                        city: "双鸭山市",
                        tags: "SHUANGYASHAN,双鸭山市",
                        cityid: 213
                    },
                    {
                        city: "上饶市",
                        tags: "SHANGRAO,上饶市",
                        cityid: 224
                    },
                    {
                        city: "三明市",
                        tags: "SANMING,三明市",
                        cityid: 225
                    },
                    {
                        city: "十堰市",
                        tags: "SHIYAN,十堰市",
                        cityid: 228
                    },
                    {
                        city: "随州市",
                        tags: "SUIZHOU,随州市",
                        cityid: 234
                    },
                    {
                        city: "神农架林区",
                        tags: "SHENNONGJIALINQU,神农架林区",
                        cityid: 239
                    },
                    {
                        city: "邵阳市",
                        tags: "SHAOYANG,邵阳市",
                        cityid: 240
                    },
                    {
                        city: "三门峡市",
                        tags: "SANMENXIA,三门峡市",
                        cityid: 249
                    },
                    {
                        city: "韶关市",
                        tags: "SHAOGUAN,韶关市",
                        cityid: 253
                    },
                    {
                        city: "汕尾市",
                        tags: "SHANWEI,汕尾市",
                        cityid: 255
                    },
                    {
                        city: "遂宁市",
                        tags: "SUINING,遂宁市",
                        cityid: 281
                    },
                    {
                        city: "山南地区",
                        tags: "SHANNANDIQU,山南地区",
                        cityid: 314
                    },
                    {
                        city: "商洛市",
                        tags: "SHANGLUO,商洛市",
                        cityid: 321
                    },
                    {
                        city: "石嘴山市",
                        tags: "SHIZUISHAN,石嘴山市",
                        cityid: 334
                    }
                ]
            },
            {
                cap: "T",
                cities: [
                    {
                        city: "天津市",
                        tags: "TIANJIN,天津市",
                        cityid: 7
                    },
                    {
                        city: "太原市",
                        tags: "TAIYUAN,太原市",
                        cityid: 26
                    },
                    {
                        city: "唐山市",
                        tags: "TANGSHAN,唐山市",
                        cityid: 40
                    },
                    {
                        city: "铁岭市",
                        tags: "TIELING,铁岭市",
                        cityid: 69
                    },
                    {
                        city: "台州市",
                        tags: "TAIZHOU,台州市",
                        cityid: 87
                    },
                    {
                        city: "泰州市",
                        tags: "TAIZHOU,泰州市",
                        cityid: 95
                    },
                    {
                        city: "泰安市",
                        tags: "TAIAN,泰安市",
                        cityid: 121
                    },
                    {
                        city: "天水市",
                        tags: "TIANSHUI,天水市",
                        cityid: 169
                    },
                    {
                        city: "铜陵市",
                        tags: "TONGLING,铜陵市",
                        cityid: 184
                    },
                    {
                        city: "通辽市",
                        tags: "TONGLIAO,通辽市",
                        cityid: 197
                    },
                    {
                        city: "通化市",
                        tags: "TONGHUA,通化市",
                        cityid: 207
                    },
                    {
                        city: "天门市",
                        tags: "TIANMEN,天门市",
                        cityid: 237
                    },
                    {
                        city: "屯昌县",
                        tags: "TUNCHANGXIAN,屯昌县",
                        cityid: 276
                    },
                    {
                        city: "铜仁地区",
                        tags: "TONGRENDIQU,铜仁地区",
                        cityid: 295
                    },
                    {
                        city: "铜川市",
                        tags: "TONGCHUAN,铜川市",
                        cityid: 318
                    },
                    {
                        city: "吐鲁番地区",
                        tags: "TULUFANDIQU,吐鲁番地区",
                        cityid: 345
                    },
                    {
                        city: "塔城地区",
                        tags: "TACHENGDIQU,塔城地区",
                        cityid: 354
                    }
                ]
            },
            {
                cap: "W",
                cities: [
                    {
                        city: "武汉市",
                        tags: "WUHAN,武汉市",
                        cityid: 6
                    },
                    {
                        city: "威海市",
                        tags: "WEIHAI,威海市",
                        cityid: 42
                    },
                    {
                        city: "无锡市",
                        tags: "WUXI,无锡市",
                        cityid: 47
                    },
                    {
                        city: "乌鲁木齐市",
                        tags: "WULUMUQI,乌鲁木齐市",
                        cityid: 52
                    },
                    {
                        city: "潍坊市",
                        tags: "WEIFANG,潍坊市",
                        cityid: 81
                    },
                    {
                        city: "温州市",
                        tags: "WENZHOU,温州市",
                        cityid: 85
                    },
                    {
                        city: "芜湖市",
                        tags: "WUHU,芜湖市",
                        cityid: 98
                    },
                    {
                        city: "乌海市",
                        tags: "WUHAI,乌海市",
                        cityid: 195
                    },
                    {
                        city: "乌兰察布市",
                        tags: "WULANCHABU,乌兰察布市",
                        cityid: 200
                    },
                    {
                        city: "梧州市",
                        tags: "WUZHOU,梧州市",
                        cityid: 259
                    },
                    {
                        city: "五指山市",
                        tags: "WUZHISHAN,五指山市",
                        cityid: 268
                    },
                    {
                        city: "文昌市",
                        tags: "WENCHANG,文昌市",
                        cityid: 271
                    },
                    {
                        city: "万宁市",
                        tags: "WANNING,万宁市",
                        cityid: 272
                    },
                    {
                        city: "文山州",
                        tags: "WENSHANZHOU,文山州",
                        cityid: 305
                    },
                    {
                        city: "渭南市",
                        tags: "WEINAN,渭南市",
                        cityid: 319
                    },
                    {
                        city: "武威市",
                        tags: "WUWEI,武威市",
                        cityid: 325
                    },
                    {
                        city: "吴忠市",
                        tags: "WUZHONG,吴忠市",
                        cityid: 335
                    }
                ]
            },
            {
                cap: "X",
                cities: [
                    {
                        city: "西安市",
                        tags: "XIAN,西安市",
                        cityid: 10
                    },
                    {
                        city: "西宁市",
                        tags: "XINING,西宁市",
                        cityid: 28
                    },
                    {
                        city: "厦门市",
                        tags: "XIAMEN,厦门市",
                        cityid: 32
                    },
                    {
                        city: "徐州市",
                        tags: "XUZHOU,徐州市",
                        cityid: 39
                    },
                    {
                        city: "湘潭市",
                        tags: "XIANGTAN,湘潭市",
                        cityid: 55
                    },
                    {
                        city: "邢台市",
                        tags: "XINGTAI,邢台市",
                        cityid: 67
                    },
                    {
                        city: "襄阳市",
                        tags: "XIANGYANG,襄阳市",
                        cityid: 108
                    },
                    {
                        city: "新乡市",
                        tags: "XINXIANG,新乡市",
                        cityid: 111
                    },
                    {
                        city: "许昌市",
                        tags: "XUCHANG,许昌市",
                        cityid: 112
                    },
                    {
                        city: "咸阳市",
                        tags: "XIANYANG,咸阳市",
                        cityid: 116
                    },
                    {
                        city: "新余市",
                        tags: "XINYU,新余市",
                        cityid: 152
                    },
                    {
                        city: "宣城市",
                        tags: "XUANCHENG,宣城市",
                        cityid: 182
                    },
                    {
                        city: "忻州市",
                        tags: "XINZHOU,忻州市",
                        cityid: 192
                    },
                    {
                        city: "锡林郭勒盟",
                        tags: "XILINGUOLEMENG,锡林郭勒盟",
                        cityid: 201
                    },
                    {
                        city: "兴安盟",
                        tags: "XINGANMENG,兴安盟",
                        cityid: 203
                    },
                    {
                        city: "孝感市",
                        tags: "XIAOGAN,孝感市",
                        cityid: 231
                    },
                    {
                        city: "咸宁市",
                        tags: "XIANNING,咸宁市",
                        cityid: 233
                    },
                    {
                        city: "仙桃市",
                        tags: "XIANTAO,仙桃市",
                        cityid: 236
                    },
                    {
                        city: "湘西州",
                        tags: "XIANGXIZHOU,湘西州",
                        cityid: 246
                    },
                    {
                        city: "信阳市",
                        tags: "XINYANG,信阳市",
                        cityid: 250
                    },
                    {
                        city: "西双版纳州",
                        tags: "XISHUANGBANNAZHOU,西双版纳州",
                        cityid: 307
                    }
                ]
            },
            {
                cap: "Y",
                cities: [
                    {
                        city: "烟台市",
                        tags: "YANTAI,烟台市",
                        cityid: 29
                    },
                    {
                        city: "银川市",
                        tags: "YINCHUAN,银川市",
                        cityid: 49
                    },
                    {
                        city: "宜昌市",
                        tags: "YICHANG,宜昌市",
                        cityid: 51
                    },
                    {
                        city: "岳阳市",
                        tags: "YUEYANG,岳阳市",
                        cityid: 56
                    },
                    {
                        city: "营口市",
                        tags: "YINGKOU,营口市",
                        cityid: 76
                    },
                    {
                        city: "扬州市",
                        tags: "YANGZHOU,扬州市",
                        cityid: 91
                    },
                    {
                        city: "盐城市",
                        tags: "YANCHENG,盐城市",
                        cityid: 94
                    },
                    {
                        city: "运城市",
                        tags: "YUNCHENG,运城市",
                        cityid: 104
                    },
                    {
                        city: "宜宾市",
                        tags: "YIBIN,宜宾市",
                        cityid: 118
                    },
                    {
                        city: "阳泉市",
                        tags: "YANGQUAN,阳泉市",
                        cityid: 126
                    },
                    {
                        city: "延吉市",
                        tags: "YANJI,延吉市",
                        cityid: 131
                    },
                    {
                        city: "玉林市",
                        tags: "YULIN,玉林市",
                        cityid: 162
                    },
                    {
                        city: "延安市",
                        tags: "YANAN,延安市",
                        cityid: 171
                    },
                    {
                        city: "榆林市",
                        tags: "YULIN,榆林市",
                        cityid: 172
                    },
                    {
                        city: "伊春市",
                        tags: "YICHUN,伊春市",
                        cityid: 214
                    },
                    {
                        city: "鹰潭市",
                        tags: "YINGTAN,鹰潭市",
                        cityid: 220
                    },
                    {
                        city: "宜春市",
                        tags: "YICHUN,宜春市",
                        cityid: 222
                    },
                    {
                        city: "益阳市",
                        tags: "YIYANG,益阳市",
                        cityid: 242
                    },
                    {
                        city: "永州市",
                        tags: "YONGZHOU,永州市",
                        cityid: 243
                    },
                    {
                        city: "阳江市",
                        tags: "YANGJIANG,阳江市",
                        cityid: 256
                    },
                    {
                        city: "云浮市",
                        tags: "YUNFU,云浮市",
                        cityid: 258
                    },
                    {
                        city: "雅安市",
                        tags: "YAAN,雅安市",
                        cityid: 287
                    },
                    {
                        city: "玉溪市",
                        tags: "YUXI,玉溪市",
                        cityid: 300
                    },
                    {
                        city: "玉树州",
                        tags: "YUSHUZHOU,玉树州",
                        cityid: 343
                    },
                    {
                        city: "伊犁州",
                        tags: "YILIZHOU,伊犁州",
                        cityid: 353
                    }
                ]
            },
            {
                cap: "Z",
                cities: [
                    {
                        city: "郑州市",
                        tags: "ZHENGZHOU,郑州市",
                        cityid: 9
                    },
                    {
                        city: "遵义市",
                        tags: "ZUNYI,遵义市",
                        cityid: 44
                    },
                    {
                        city: "株洲市",
                        tags: "ZHUZHOU,株洲市",
                        cityid: 54
                    },
                    {
                        city: "淄博市",
                        tags: "ZIBO,淄博市",
                        cityid: 57
                    },
                    {
                        city: "张家口市",
                        tags: "ZHANGJIAKOU,张家口市",
                        cityid: 78
                    },
                    {
                        city: "珠海市",
                        tags: "ZHUHAI,珠海市",
                        cityid: 84
                    },
                    {
                        city: "镇江市",
                        tags: "ZHENJIANG,镇江市",
                        cityid: 93
                    },
                    {
                        city: "周口市",
                        tags: "ZHOUKOU,周口市",
                        cityid: 114
                    },
                    {
                        city: "中山市",
                        tags: "ZHONGSHAN,中山市",
                        cityid: 132
                    },
                    {
                        city: "漳州市",
                        tags: "ZHANGZHOU,漳州市",
                        cityid: 142
                    },
                    {
                        city: "舟山市",
                        tags: "ZHOUSHAN,舟山市",
                        cityid: 146
                    },
                    {
                        city: "湛江市",
                        tags: "ZHANJIANG,湛江市",
                        cityid: 159
                    },
                    {
                        city: "肇庆市",
                        tags: "ZHAOQING,肇庆市",
                        cityid: 160
                    },
                    {
                        city: "枣庄市",
                        tags: "ZAOZHUANG,枣庄市",
                        cityid: 168
                    },
                    {
                        city: "张家界市",
                        tags: "ZHANGJIAJIE,张家界市",
                        cityid: 241
                    },
                    {
                        city: "驻马店市",
                        tags: "ZHUMADIAN,驻马店市",
                        cityid: 251
                    },
                    {
                        city: "自贡市",
                        tags: "ZIGONG,自贡市",
                        cityid: 279
                    },
                    {
                        city: "资阳市",
                        tags: "ZIYANG,资阳市",
                        cityid: 289
                    },
                    {
                        city: "昭通市",
                        tags: "ZHAOTONG,昭通市",
                        cityid: 302
                    },
                    {
                        city: "张掖市",
                        tags: "ZHANGYE,张掖市",
                        cityid: 326
                    },
                    {
                        city: "中卫市",
                        tags: "ZHONGWEI,中卫市",
                        cityid: 337
                    }
                ]
            }
        ]
    }
})
