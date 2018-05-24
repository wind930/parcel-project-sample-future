const Koa       = require('koa');
const serve     = require('koa-static');
const Bundler   = require('parcel-bundler')
const { exec }  = require('child_process');
const app       = new Koa();



/**
 * [build description]
 * @return {[type]} [description]
 */
async function build(){
    
    const options = {
        outDir          : 'dist/assets',     
        //outFile       : 'index.html',   
        publicUrl       : '/assets',      
        watch           : false,              
        cache           : true,               
        cacheDir        : '.cache',        
        minify          : false,             
        target          : 'browser',         
        https           : false,              
        logLevel        : 3,               
        hmrPort         : 0,                
        sourceMaps      : false,         
        hmrHostname     : '',           
        detailedReport  : true,
        custom          : {
            njkContext  : {
                version : (new Date()).getTime()
            }
        }      
    };

    const bundler  = new Bundler('./src/views/*.njk',options)

    bundler.on('bundled', (bundle) => {

        exec('mv ./dist/assets/*.html  ./dist/', (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
        })

    });

    const bundle   = await bundler.bundle();
    start(bundler);
}



/**
 * [start description]
 * @return {[type]} [description]
 */
function start(bundler){

    app.use(serve('./dist'));

    console.log('bundler', bundler)
    app.use(bundler.middleware())
    app.listen(Number(process.env.PORT || 3000))
    console.log('listening on port 3000'); 
}



build();












