// this function will run in background all the
// numbers here should be integer % block="Item"
namespace Item {
    //% block="starttime = %starttime endtime = %endtime delay = %delay IsShown? %IsShown"
    export function autoCount(starttime: number, endtime: number, delay: number = 1000, IsShown: boolean = true): void {
        control.inBackground(function () {
            if (starttime <= endtime) {
                for (let t = starttime; t <= endtime; t++) {
                    if (IsShown) {
                        basic.clearScreen()
                        lightNumberShow(t)
                        basic.pause(delay)
                    }
                }

            }
            if (starttime > endtime) {
                for (let u = starttime; u >= endtime; u--) {
                    if (IsShown) {
                        basic.clearScreen()
                        lightNumberShow(u)
                        basic.pause(delay)
                    }
                }

            }

        })
    }
    function lightNumberShow(num: number) {
        let x, y
        for (let v = num - 1; v >= 0; v--) {
            x = v % 5
            y = Math.floor(v / 5)
            led.plot(x, y)
        }
    }
}
