function generateBarCode1() {
    var nric = $('#publicqr').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=80x80';
    $('#publicqrct').attr('src', url);
}

function generateBarCode2() {
    var nric = $('#spendqr').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=80x80';
    $('#spendqrct').attr('src', url);
}

function generateBarCode3() {
    var nric = $('#viewqr').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=80x80';
    $('#viewqrct').attr('src', url);
}

function sync1(textbox) {
    document.getElementById('address_widgetct').innerHTML = textbox.value;
}

function sync2(textbox) {
    document.getElementById('spend_key_widgetct').innerHTML = textbox.value;
}

function sync3(textbox) {
    document.getElementById('view_key_widgetct').innerHTML = textbox.value;
}

function sync4(textbox) {
    document.getElementById('mnemonic_widgetct').innerHTML = textbox.value;
}