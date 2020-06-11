// this function will run in background all the
// numbers here should be integer
//% weight=0 color=#ADD8E6 block="Item"
namespace Item {
    let globle_num: number
    //shownWay should be 0(no animation),1(normal),2(with last-value-shown)
    //% blockId="autoCount" block="starttime = %starttime endtime = %endtime delay = %delay shownWay %shownWay"
    export function autoCount(starttime: number, endtime: number, delay: number = 1000, shownWay: number = 1): void {
        control.inBackground(function () {
            if (starttime <= endtime) {
                for (let t = starttime; t <= endtime; t++) {
                    if (shownWay != 0) {
                        basic.clearScreen()
                        lightNumberShow(t)
                    }
                    basic.pause(delay)
                }

            }
            if (starttime > endtime) {
                for (let u = starttime; u >= endtime; u--) {
                    if (shownWay != 0) {
                        basic.clearScreen()
                        lightNumberShow(u)
                    }
                    basic.pause(delay)
                }

            }
            if (shownWay == 2) {
                basic.showNumber(globle_num)
            }

        })
    }
    function lightNumberShow(num: number) {
        let x, y, v
        let fullLights = 0
        //Deal with variable num to between 0-25 and get the extra-25s to fullLights
        for (; num < 0 || num > 25;) {
            if (num < 0) {
                num += 25
                fullLights--
            }
            else {
                num -= 25
                fullLights++
            }
        }
        //Show the light animation
        for (v = num - 1; v >= 0; v--) {
            x = v % 5
            y = Math.floor(v / 5)
            led.plot(x, y)
        }
        globle_num = num + fullLights * 25
    }
}
