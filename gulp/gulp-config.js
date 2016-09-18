const srcPath = 'src/main/resources';
const distPath = 'target/classes';

module.exports = {
    src : {
        js : srcPath + '/src/js',
        css : srcPath + '/public/css',
        bower : srcPath + '/public/bower_components',
        html : srcPath + '/templates'
    },
    dist :{
        bundle : distPath + '/public',
        js : distPath + '/public/js',
        css : distPath + '/public/css,',
        bower : distPath + '/public/bower_components',
        html : distPath + '/templates'
    }
};
