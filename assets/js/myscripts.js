
function saturationPercentage(liveStake){
    saturation = 63600000   // 63.6M
    return ((liveStake / saturation) * 100).toFixed(0)
}

function liveStakeString(liveStake){
  if (liveStake > 1000000){
    return (liveStake / 1000000).toFixed(2) + 'M';
  } else {
    return (liveStake / 1000).toFixed(2) + 'K';
  }    
}

function altercontent(){

    var liveStake = 'Not available'

    // MANT
    // Retrieve the adapools json for MANT1
    fetch('https://js.adapools.org/pools/54f5f2618a3da4bb0b384895d8f3922189acbb8e9637201ebb26bc18/summary.json')
    .then(res => res.json())
    .then((out) => {
        // MANT1 LiveStake
        // 60503647527641
        liveStake = out.data["total_stake"] / 1000000 
        saturation_percent = saturationPercentage(liveStake)
        livestake_mant1.innerHTML = "Livestake: " + liveStakeString(liveStake);

        // MANT1 ProgressBar
        var elem = document.getElementById("progress_mant1_text");
        var width = saturation_percent;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";      
    }).catch(err => console.error(err));


    // MANT2
    // Retrieve the adapools json for MANT2
    fetch('https://js.adapools.org/pools/55ef56b00435fec8ff85dd88c0ce16df755526511323039bfde555db/summary.json')
    .then(res => res.json())
    .then((out) => {
        // MANT2 LiveStake
        liveStake = out.data["total_stake"] / 1000000 
        saturation_percent = saturationPercentage(liveStake)
        livestake_mant2.innerHTML = "Livestake: " + liveStakeString(liveStake);

        // MANT2 ProgressBar
        var elem = document.getElementById("progress_mant2_text");
        var width = saturation_percent;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";      
    }).catch(err => console.error(err));


    // MANT3
    // Retrieve the adapools json for MANT3
    fetch('https://js.adapools.org/pools/0d294c73cd8c6558d344155c3a5a9363aa185ed25a14717b162149e0/summary.json')
    .then(res => res.json())
    .then((out) => {
        // MANT3 LiveStake
        liveStake = out.data["total_stake"] / 1000000 
        saturation_percent = saturationPercentage(liveStake)
        livestake_mant3.innerHTML = "Livestake: " + liveStakeString(liveStake);

        // MANT3 ProgressBar
        var elem = document.getElementById("progress_mant3_text");
        var width = saturation_percent;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";      
    }).catch(err => console.error(err));

}

function copy_poolid(pool_num){

    // console.log('Copied Text')
    
    var copyText = "";
    
    if(pool_num == 1) {
        copyText = "54f5f2618a3da4bb0b384895d8f3922189acbb8e9637201ebb26bc18";
    }
    if(pool_num == 2) {
        copyText = "55ef56b00435fec8ff85dd88c0ce16df755526511323039bfde555db";
    }
    if(pool_num == 3) {
      copyText = "0d294c73cd8c6558d344155c3a5a9363aa185ed25a14717b162149e0";
    }

    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}


// this one toggles only one open at a time
// Ref  - http://stackoverflow.com/questions/37745154/only-open-one-accordion-tab-at-one-time
document.addEventListener("DOMContentLoaded", function(event) { 

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});


window.onload=altercontent
