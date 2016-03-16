
var fs = require('fs');
fs.readFile('./test.txt', function(err, buf){
    var txt = buf.toString(); //'test1 adfd test2 sdcc test3';
    var pattern = /value="(ed2k[^"]+)/g;
    var rr = "";
    while((result=pattern.exec(txt))!=null) {
        rr += result[1] + '\r\n';
    }
    
    fs.writeFile('helloworld.txt', rr, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
    
    console.log("done!");
});
