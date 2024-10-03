// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(() => {
    $w('#vectorimage13').onClick(() => {
        if ($w("#section27").hidden) {
            $w("#section27").show();
        } else {
            $w("#section27").hide();
        }
    });
});
