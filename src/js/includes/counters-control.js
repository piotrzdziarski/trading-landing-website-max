const counterUp = require('counterup2').default;
const counters = document.getElementsByClassName('counter');
let areCountersRan;
runCountersIfScrolled();

addEventListener('scroll', runCountersIfScrolled);

function runCountersIfScrolled() {
    if (!areCountersRan && pageYOffset + innerHeight > counters[0].offsetTop - 50) {
        areCountersRan = true;

        for (let i = 0; i < counters.length; i++) {
            counterUp(counters[i], {
                duration: 2000,
                delay: 16
            });
        }
    }
}
