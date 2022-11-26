var fs=require("fs");
var path=require("path");
var config=JSON.parse(fs.readFileSync("config.json").toString());
var generate=require(config.dirs.lib+"generate.js");
var filePath=path.resolve(config.dirs.blogDir);
var count=0;
indexAppend=new Array();
fs.readdir(filePath,function(err,files){
    if(err){
    }else{
        files.forEach(function(){
            count++;
        });
    }
});
var args=process.argv.slice(2);
switch(args[0]){
    case "gen":
        if(args[1]=="all")generate_all();
        else generate.gen(args[1]);
        break;
    case "genfunc":
        generate.genfunc(args[1]);
        break;
    case "ga":
        generate.generate_all(filePath);
        var dir=fs.readdirSync(config.dirs.funcDir);
        dir.forEach(function(filename) {
            var filedir = path.join(config.dirs.funcDir, filename);
            generate.genfunc(filedir);
        });
        break;
    case "new":
        var date=new Date().toISOString().slice(0,10);
        var fill="!!!TITLE \n!!!DATE "+date+"\n!!!TAG ";
        fs.writeFile(config.dirs.blogDir+args[1]+".mdp",fill,function(){});
        break;
}
