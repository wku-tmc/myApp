$(document).ready(function(){
    $("#btn1").click(function() {

        navigator.notification.confirm(
            'Please select one', // message
            onConfirm,            // callback to invoke with index of button pressed
            'Hi',           // title
            ['Beep','Vibrate']     // buttonLabels
        );
    });

    $("#btn2").click(function() {
        checkConnection();
    });
});


function onConfirm(buttonIndex) {
    if(buttonIndex == 1) {
        // Beep twice!
        navigator.notification.beep(2);
    } else {
        // Vibrate for 3 seconds
        navigator.vibrate(3000);
    }
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}