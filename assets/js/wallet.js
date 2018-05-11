var getStringWords = function(string) {

    return string.replace(/^\s*(.*)\s*$/, '$1').replace(/\s+/, ' ').split(' ');

};



var genkeys = function(additional_entropy, lang) {

    var seed = cnUtil.sc_reduce32(poor_mans_kdf(additional_entropy + cnUtil.rand_32()));

    var keys = cnUtil.create_address(seed);

    var passPhrase = mn_encode(seed, lang);

    return {

        keys: keys,

        mnemonic: passPhrase

    }

};



var restore_keys = function(lang) {
    var seed_phrase = document.getElementById("seed_phrase").value;
    var seed = mn_decode(seed_phrase);
    var keys = cnUtil.create_address(seed);



    address_widget.innerHTML = keys.public_addr;
    address_widget2.innerHTML = keys.public_addr;

    mnemonic_widget.innerHTML = seed_phrase;
    mnemonic_widget2.innerHTML = seed_phrase;

    spend_key_widget.innerHTML = keys.spend.sec;
    spend_key_widget2.innerHTML = keys.spend.sec;

    view_key_widget.innerHTML = keys.view.sec;
    view_key_widget2.innerHTML = keys.view.sec;
};



var genwallet = function(lang) {
    var spend_key_widget = document.getElementById("spend_key_widget");
    var spend_key_widget2 = document.getElementById("spend_key_widget2");

    var view_key_widget = document.getElementById("view_key_widget");
    var view_key_widget2 = document.getElementById("view_key_widget2");

    var address_widget = document.getElementById("address_widget");
    var address_widget2 = document.getElementById("address_widget2");

    var address_qr_widget = document.getElementById("address_qr_widget");
    var address_qr_widgetct = document.getElementById("address_qr_widgetct");

    var user_entropy_widget = Math.floor(100000000 + Math.random() * 900000000);

    var res = genkeys(user_entropy_widget.value, lang);
    var keys = res.keys;
    var mnemonic = res.mnemonic;

    address_widget.innerHTML = keys.public_addr;
    address_widget2.innerHTML = keys.public_addr;
    address_widget2.value = keys.public_addr;

    mnemonic_widget.innerHTML = mnemonic;
    mnemonic_widget2.innerHTML = mnemonic;
    mnemonic_widget2.value = mnemonic;

    spend_key_widget.innerHTML = keys.spend.sec;
    spend_key_widget2.innerHTML = keys.spend.sec;
    spend_key_widget2.value = keys.spend.sec;

    view_key_widget.innerHTML = keys.view.sec;
    view_key_widget2.innerHTML = keys.view.sec;
    view_key_widget2.value = keys.view.sec;

    var typeNumber = 0;
    var errorCorrectionLevel = 'L';



    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(keys.public_addr);
    qr.make();
    document.getElementById('address_qr_widget').innerHTML = qr.createImgTag();




    var qr = qrcode(typeNumber, errorCorrectionLevel);

    qr.addData(keys.spend.sec);

    qr.make();

    document.getElementById('qrcodeSecret').innerHTML = qr.createImgTag();



    var qr = qrcode(typeNumber, errorCorrectionLevel);

    qr.addData(keys.view.sec);

    qr.make();

    document.getElementById('qrcodeView').innerHTML = qr.createImgTag();




};