(function () {
    var carousel = new Vue({
        el: '.carousel',
        data: {
            mark: 0,
            timer: null,
            img: ['images/scroll-1.png',
                'images/scroll-2.png',
                'images/scroll-3.png',
                'images/scroll-4.png'
            ]
        },
        created() {
            this.play()
        },
        methods: {
            change(i) {
                this.mark = i
            },
            autoPlay() {
                this.mark++
                if (this.mark === 4) {
                    this.mark = 0
                    return
                }
            },
            play() {
                setInterval(this.autoPlay, 2000)
            }
        }
    })
})()