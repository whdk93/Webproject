function ppyongPrint() {
    console.log('뿅');
    setTimeout(function() {
        ppyongPrint();
    },3000);
}

ppyongPrint();