var fs=require("fs");
var path=require("path");
var sg=require("./_library/static_generator.js");
var marked=require("marked");
var jsdom=require("jsdom");
var config=JSON.parse(fs.readFileSync("_config.json").toString());
var tmplt=fs.readFileSync("_themes/"+config.theme+"/template.html").toString();

const {JSDOM}=jsdom;
const DOM=new JSDOM(tmplt);

function generate_all(){
    var dir=fs.readdirSync(config.srcdir+"/post/");
    // --- ARRAY DEFINE --- MOST IMPORTANT -> SAVING DATA
    var dataAndInformation_all=new Array();
    var tags_all=new Array();
    var category_all=new Array();
    // --- GET ALL COUNTS ---
    var globalCountInformation=new Array(0,0,0);
    dir.forEach((filename)=>{
        globalCountInformation[0]++;
        var filedir = path.join(config.srcdir+"/post/", filename);
        var data_got=fs.readFileSync(filedir).toString();
        var data_information=sg.gpd(data_got);
        var _tags=data_information[2].split(" ");
        var _categories=data_information[3].split(" ");
        tags_all=tags_all.concat(_tags);
        category_all=category_all.concat(_categories);
    });
    globalCountInformation[1]=category_all.length;
    globalCountInformation[2]=tags_all.length;
    console.log("Tags ",tags_all,"\n","Categories ",category_all);
    console.log("Count Information ",globalCountInformation);
    /* here , the Array has 3 element:
     * [0] for passage , [1] for category , [2] for tag
     */

    dir.forEach(function(filename) {
        // --- VARIABLE DEFINE ---
        var DOM_THIS=new JSDOM(tmplt);
        var filedir = path.join(config.srcdir+"/post/", filename);
        var data_got=fs.readFileSync(filedir).toString();
        var data_transformed=marked.parse(data_got.replace(/\-\-\-[\s\S]*\-\-\-\n/,"\n"));
        var data_information=sg.gpd(data_got);
        var data_toWrite= DOM_THIS.window.document; // - SHORT LINK FOR DOM.document
        data_toWrite.querySelector("data").innerHTML=data_transformed;
        console.log("Generating Information about "+filename);

        // --- TAG TRANSFORM ---
        var _tags=data_information[2].split(" ");
        tag_slctr=data_toWrite.querySelectorAll("data_tag");
        for(var z=0;z<_tags.length;z++){
            var appends="\n<p class='tags'><font class='tags-name'>"+_tags[z]+"</font></p>";
            tag_slctr.forEach((el)=>{el.innerHTML=el.innerHTML+appends});
        }

        // --- CATEGORY TRANSFORM ---
        var _categories=data_information[3].split(" ");
        catg_slctr=data_toWrite.querySelectorAll("data_category");
        for(var y=0;y<_categories.length;y++){
            var appends="\n<p class='categories'><font class='categories'>"+_categories[y]+"</font></p>";
            catg_slctr.forEach((el)=>{el.innerHTML=el.innerHTML+appends});
        }

        // --- SINGLE DATA INSERT ---
        data_toWrite.querySelector("data_category").innerHTML=data_information[3];
        data_toWrite.querySelector("data_date").innerHTML=data_information[1];
        data_toWrite.querySelector("data_title").innerHTML=data_information[0];

        data_toWrite.querySelector("data_p_count_passage").innerHTML=globalCountInformation[0];
        data_toWrite.querySelector("data_p_count_category").innerHTML=globalCountInformation[1];
        data_toWrite.querySelector("data_p_count_tag").innerHTML=globalCountInformation[2];

        sg.ig(data_toWrite,config);

        var time=data_information[1].split("-");
        var passage_dir=config.pubdir+"/archives/"+time[0]+"/"+time[1]+"/"+time[2];
        var passage_pub="/archives/"+time[0]+"/"+time[1]+"/"+time[2]+"/"+filename.replace(/\.md/,".html");
        fs.mkdirSync(passage_dir,{recursive:true});
        data_toWrite="<!DOCTYPE html>\n<head>"+data_toWrite.head.innerHTML+"</head>\n<body>"+data_toWrite.body.innerHTML+"</body>";
        fs.writeFile(passage_dir+"/"+filename.replace(/\.md/,".html"),data_toWrite,(err)=>{if(err)throw err;});
        var dataAndInformation_This=new Array(data_transformed,data_information,passage_pub);
        dataAndInformation_all.push(dataAndInformation_This);
    });
    // --- VARIABLE DEFINE FOR INDEX ---
    var DOM_INDEX=new JSDOM(tmplt).window.document;
    sg.ig(DOM_INDEX,config);
    var DOM_INDEX_DATA=DOM_INDEX.querySelector("data");
    DOM_INDEX.querySelector("data_p_count_passage").innerHTML=globalCountInformation[0];
    DOM_INDEX.querySelector("data_p_count_category").innerHTML=globalCountInformation[1];
    DOM_INDEX.querySelector("data_p_count_tag").innerHTML=globalCountInformation[2];
    DOM_INDEX.querySelector("#main-intro").style.display="none";
    DOM_INDEX.querySelector("#column-right").style.boxShadow="none !important";
    // --- INDEX BUILD ---
    for (var z=0;z<dataAndInformation_all.length;z++){
        var data_less=dataAndInformation_all[z][0].replace(/<\!\-\-more\-\->[\s\S]*/,"");
        var appends='<div class="level index-post"><div class="index-post-intros">'+
        dataAndInformation_all[z][1][0]+
        ' 发布于 '+
        dataAndInformation_all[z][1][1]+
        '</div>'+
        data_less+
        '<a class="read-more" href="'+
        dataAndInformation_all[z][2]+
        '">Read More</a>'+
        '</div>';
        DOM_INDEX_DATA.innerHTML=appends+DOM_INDEX_DATA.innerHTML;
    }
    var index_toWrite="<!DOCTYPE html>\n<head>"+DOM_INDEX.head.innerHTML+"</head>\n<body>"+DOM_INDEX.body.innerHTML+"</body>";
    fs.writeFileSync(config.pubdir+"/index.html",index_toWrite);
    fs.copyFileSync("_themes/"+config.theme+"/main.css",config.pubdir+"/main.css");
    fs.copyFileSync("_themes/"+config.theme+"/main.js",config.pubdir+"/main.js");
}


var args=process.argv.slice(2);
switch(args[0]){
    case "g":
        generate_all();
        break;
    case "i":
        fs.rmdirSync(config.pubdir,{recursive:true});
        fs.mkdirSync(config.pubdir,{recursive:true});
        fs.copyFileSync("_library/hl.css",config.pubdir+"/hl.css");
        fs.copyFileSync("_library/hl.min.js",config.pubdir+"/hl.min.js");
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