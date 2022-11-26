var fs=require("fs");
var marked=require("marked");
var hljs=require("highlight.js");
var path=require("path");
var config=JSON.parse(fs.readFileSync("config.json").toString());
var template=fs.readFileSync(config.theme.template).toString().replace(/~ECMA_DIR~/g,config.theme.scripts).replace(/~STYLE_DIR~/g,config.theme.styles).replace(/~FOLLOW_LINK~/g,config.source.followLink);
exports.generate=(target)=>generate(target);
exports.gen=(target)=>generate(target);
exports.genfunc=(target)=>genfunc(target);
exports.generate_all=(path)=>generate_all(path);
exports.transform=(type,text)=>transform(type,text);
exports.template=template;
function transform(type,text){
    switch (type){
        case "md":
            text=marked.parse(text);
            break;
        case "aw":
            text=text.replace(/\u0020([$|#]\u0020[^\n]*)/g,"``` \n $1 \n ```");
            text=text.replace(/====(.*)====/g,"### $1").replace(/===(.*)===/g,"## $1").replace(/==(.*)==/g,"# $1");
            text=text.replace(/\[\[([^\],^\|]*)]]/g,"<a href='https://wiki.archlinux.org/title/$1'>$1</a>");
            text=text.replace(/\[\[([^\|]*)\|([^\]]*)]]/g,"<a href='https://wiki.archlinux.org/title/$1'>$2</a>");
            text=text.replace(/\[{1}([^\u0020]*)\u0020([^\]]*)]{1}/g,"<a href='$1'>$2</a>");
            text=text.replace(/{{Pkg\|([^}}]*)}}/g,"<a href='https://archlinux.org/packages/?name=$1'>$1</a>");
            text=text.replace(/{{Grp\|([^}}]*)}}/g,"<a href='https://archlinux.org/groups/x86_64/$1'>$1</a>");
            text=text.replace(/{{man\|([^\|]*)\|([^}}]*)}}/g,"<a href='https://man.archlinux.org/man/$2.$1'>$2($1)</a>");
            text=text.replace(/{{ic\|([^}}]*)}}/g,"*$1*");
            text=text.replace(/''/g,"");
            text=text.replace(/{{bc\|([^}}]*)}}/g,"\n```bash \n $1 \n ```");
            text=text.replace(/{{(注意|警告|提示)\|([^}}]*)}}/g,"<warn>$2</warn>");
            text=marked.parse(text);
            break;
        case "mdp":
            text=marked.parse(text);
    }
    return text;
}
function generate(target){
    var type=target.split("."),
    raw_text=fs.readFileSync(target),
    text=raw_text.toString();
    raw_title=text.match(/\!\!\!TITLE\u0020.*[^\n]/),
    raw_date=text.match(/\!\!\!DATE\u0020.*[^\n]/),
    raw_tag=text.match(/\!\!\!TAG\u0020.*[^\n]/);
    var titles=raw_title[0].split(" "),
    dates=raw_date[0].split(" "),
    tags=raw_tag[0].split(" ");
    text=text.replace(/\!\!\!(TITLE|DATE|TAG)\u0020.*[^\n]/g,"");
    text=transform(type[type.length-1],text);
    var address=config.dirs.generates+dates[1]+titles[1]+".html";
    var toWrite=template.replace(/<\!\!APPEND\!\!~>/,text);
    var views=text.match(/<p>.*[(?:<\/p>)|\n)]/);
    var tagID=tags[1].split("/");
    if(views!=null)view=views[0];
    else view="No Discription";
    view=view.replace(/<a\u0020[^<]*>([^<]*)<\/a>/g,"$1");
    view=view.replace(/<p>([^<]*)<\/p>/g,"$1");
    view=view.replace(/<[^<]*>([^<]*)[(<\/.*>)|\n]/g,"$1");
    appends=dates[1].replace(/-/g,"")+"<a href="+address+" class='posts' id='"+tagID+"'>\n"+
    "<h2>"+titles[1].replace(/_/g," ")+"</h2>\n"+
    "<div class='metas'>发布于"+dates[1].replace(/_/g,"-")+"</div>\n"+
    "<div class='views'>"+view+"</div>\n"+
    "<div class='tags'>"+tags[1].replace(/_/g," ")+"</div>\n"+
    "</a>";
    toWrite=toWrite.replace(/<\!\!TITLE\!\!~>/g,titles[1].replace(/_/g," "));
    fs.mkdir("genes",function(err){});
    fs.writeFile(address,toWrite,function(err){
        if(err){
            fs.unlinkSync("genes/"+dates[1]+titles[1]+".html");
        }
    });
    console.log("Generated "+titles[1]);
    var returns=new Array(appends,tagID);
    return returns;
}
function generate_all(filePath){
    console.log("Generating passage: All");
    file=0;
    var dir=fs.readdirSync(filePath);
    var count=dir.length;
    var tags=new Array(),blogs=new Array();
    var indexText=template.replace(/\.\.\//g,"").replace(/<\!\!TITLE\!\!~>/g,"0xarch");
    if(count==0) fs.writeFile("index.html",indexText,function(err){return 0});
    dir.forEach(function(filename) {
    var filedir = path.join(filePath, filename);
    fs.stat(filedir, function(error, stats) {
        if (error) {
            console.warn('Error getting file stat!');
        } else {
            raw_data=generate(filedir);
            indexAppend[file]=raw_data[0];
            for(var i=0;i<raw_data[1].length;i++)tags[tags.length]="\""+raw_data[1][i]+"\"";
            file++;
            if(file==count){
                indexAppend.sort();indexAppend.reverse();
                for(var i=0;i<indexAppend.length;i++)
                    indexText=indexText.replace(/<\!\!APPEND\!\!~>/,indexAppend[i].slice(8)+"\n<!!APPEND!!~>");
                indexText=indexText.replace(/<\!\!HEAD\!\!~>/,"<script src='ecma/filt.js'>\n</script><link rel='stylesheet' type='text/css' href='style/filt.css'>");
                indexText=indexText.replace(/content/g,"tag_container");
                for(var i=0;i<tags.length;i++)
                    indexText=indexText.replace(/<\!\!INFO\!\!~>/g,"<a class='_tags' onclick='filtTag("+tags[i]+")'>"+tags[i]+"</a>\n<!!INFO!!~>");
                fs.writeFile("index.html",indexText,function(err){
                    if(err)
                        console.log("Met a problem when generating index.html");
                    else
                        console.log("Generated ",dir);
                });
            }
        }
    })
    })
}
function genfunc(target){
    var text=fs.readFileSync(target).toString();
    var type=target.split(".");
    var title=type[0].split("/");
    var toAppend=template.replace(/<\!\!APPEND\!\!~>/,transform(type[1],text)).replace(/<\!\!TITLE\!\!~>/g,title[title.length-1].replace(/_/g," "));
    fs.writeFile("category/"+title[title.length-1]+".html",toAppend,function(err){
        if(err){console.log("Met a problem when generating functional passage: ",title[title.length-1])}
    })
    console.log("Generated functional passage: ",title[title.length-1]);
}
