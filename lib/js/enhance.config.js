ejs.files.js = {
    mobile : "platform/mobile/js/bootstrap.js",
    screen : "platform/desktop/js/bootstrap.js",
};

ejs.files.css = {
    mobile : "platform/mobile/css/style.css",
    screen : "platform/desktop/css/style.css",
};


if( window.innerWidth > 600 ){
    ejs.addFile( ejs.files.js.screen );
    ejs.addFile( ejs.files.css.screen );
}
else
{
    ejs.addFile( ejs.files.js.mobile );
    ejs.addFile( ejs.files.css.mobile );
}



ejs.concatSyntax = function( url ){
    return url;
};