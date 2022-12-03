var fs=require("fs");
var path=require("path");
var sg=require("./_library/static_generator.js");
var marked=require("marked");
var jsdom=require("jsdom");
var config=JSON.parse(fs.readFileSync("_config.json").toString());
var tmplt=fs.readFileSync("_themes/"+config.theme+"/template.html").toString();
var cjs=require("./_themes/"+config.theme+"/custom.js");

const {JSDOM}=jsdom;



function generate_all(){
    var Dir=fs.readdirSync(config.srcdir+"/post/");
    // --- ARRAY DEFINE --- MOST IMPORTANT -> SAVING DATA

    /* Data-saving array :
    * [0] for passage/post , [1] for category , [2] for tag , [3] for time [4] for extension
    */
    var globalCountInformation=new Array(0,0,0);
    var globalPassageInformation=new Array(new Array(),new Array(),new Array(),new Array()); // [0] is an Array [Name,Location]
    var dataAndInformation_all=new Array();

    /* Special array for each passage
    * [0] for data & information [title,date,tag,category]
    * [1] for tag
    * [2] for category
    */
    var posts_info={};

    // --- GET ALL COUNTS ---
    Dir.forEach((filename)=>{
        var filedir = path.join(config.srcdir+"/post/", filename);
        var data_got=fs.readFileSync(filedir).toString();
        var data_information=sg.gpd(data_got); // [0] for title , [1] for date , [2] for tag , [3] for category
        var _date=data_information[1];
        var _tags=data_information[2].split(" ");
        var _categories=data_information[3].split(" ");
        var _extensions=data_information[4].split(" ");
        globalPassageInformation[1]=globalPassageInformation[1].concat(_categories);
        globalPassageInformation[2]=globalPassageInformation[2].concat(_tags);
        globalPassageInformation[3]=globalPassageInformation[3].concat(_date);
        var time=data_information[1].split("-");
        var passage_pub="/archives/"+time[0]+"/"+time[1]+"/"+time[2]+"/"+filename.replace(/\.md/,"/");
        globalPassageInformation[0].push(new Array(filename.replace(/\.md/,""),passage_pub));
        posts_info[data_information[0]]={data_information,_tags,_categories,_extensions};
    });
    globalCountInformation[0]=globalPassageInformation[0].length;
    globalCountInformation[1]=globalPassageInformation[1].length;
    globalCountInformation[2]=globalPassageInformation[2].length;
    console.log("Tags ",globalPassageInformation[2],"\n","Categories ",globalPassageInformation[1]);
    console.log("Count Information ",globalCountInformation);
    var gci=globalCountInformation,
    gpi=globalPassageInformation; // --- SHORT VARAIBLE
    var dir=fs.readdirSync(config.srcdir+"/post/");

    dir.forEach(function(filename) {
        // --- VARIABLE DEFINE ---
        var DOM_THIS=new JSDOM(tmplt);

        var filedir = path.join(config.srcdir+"/post/", filename);

        var data_got=fs.readFileSync(filedir).toString();

        var data_information=sg.gpd(data_got);

        var data_transformed=data_got.replace(/\-\-\-[\s\S]*\-\-\-\n/,"\n");


        if(data_information[4].includes("basic"))data_transformed=marked.parse(data_transformed);
        if(data_information[4].includes("chemistry"))data_transformed=sg.mp_chemistry(data_transformed);
        
        

        var data_toWrite= DOM_THIS.window.document; // - SHORT LINK FOR DOM.document

        // --- DATA & CC INSERT ---
        var cc_block='<div class="cc">'+
        '<i class="fa fa-creative-commons"></i> Creative Commons'+
        '</div>';
        
        data_toWrite.querySelector("data").innerHTML=data_transformed+cc_block;

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


        // --- GENERATE TOC ---
        /*var _tocs=sg.tc(data_toWrite);

        tocs_slctr=data_toWrite.querySelector("#data_toc");

        for(var w=0;w<_tocs.length;w++){

            var raw_toc=_tocs[w].replace(/ /g,"-").toLowerCase();

            raw_toc=raw_toc.replace(/[\/,\+]/g,"");

            var appends="\n<a class='tocs' id='con_"+_tocs[w]+"' href='#"+raw_toc+"' onclick='toggleHeader(false)'>"+_tocs[w]+"</a><br/>";

            tocs_slctr.innerHTML=tocs_slctr.innerHTML+appends;
        }*/


        // --- SINGLE DATA INSERT ---
        data_toWrite.querySelector("data_category").innerHTML=data_information[3];

        data_toWrite.querySelector("data_date").innerHTML=data_information[1];

        data_toWrite.querySelector("data_title").innerHTML=data_information[0];

        sg.ig(data_toWrite,config,globalCountInformation,data_information);

        // --- SEARCH ITEM INSERT ---
        sg.sg(data_toWrite,gpi[0],config,gpi[2],gpi[1]);

        sg.eo(data_toWrite,true,true,true,true);


        // --- SAVE FILE & PUSH DATA ---
        var time=data_information[1].split("-");

        var passage_sever_dir="/archives/"+time[0]+"/"+time[1]+"/"+time[2]+"/"+filename.replace(/\.md/,"");
        var passage_dir=config.pubdir+passage_sever_dir;
        
        var passage_pub=passage_dir+"/index.html";

        data_toWrite="<!DOCTYPE html>\n<head>"+data_toWrite.head.innerHTML+"</head>\n<body>"+data_toWrite.body.innerHTML+"</body>";

        fs.mkdirSync(passage_dir,{recursive:true});

        fs.writeFile(passage_pub,data_toWrite,(err)=>{if(err)throw err;});

        var dataAndInformation_This=new Array(data_transformed,data_information,passage_sever_dir);

        dataAndInformation_all.push(dataAndInformation_This);
    });

    // --- VARIABLE DEFINE FOR INDEX ---
    var DOM_INDEX=new JSDOM(tmplt).window.document;
    var DOM_INDEX_DATA=DOM_INDEX.querySelector("data");

    sg.sg(DOM_INDEX,gpi[0],config,gpi[2],gpi[1]);
    sg.ig(DOM_INDEX,config,gci,new Array("I","B","GG"));
    sg.eo(DOM_INDEX,false,false,false,false);

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

    // --- SPECIALS ---
    var specials=config.specials;
    for(var r=0,l=specials.length;r<l;r++){
        var filedir=config.srcdir+"/"+specials[r]+"/index.md";
        var DOM_THIS=new JSDOM(tmplt);
        var data_got=fs.readFileSync(filedir).toString();
        var data_information=sg.gpd(data_got);
        var data_transformed=data_got.replace(/\-\-\-[\s\S]*\-\-\-\n/,"\n");
        if(data_information[4].includes("basic"))data_transformed=marked.parse(data_transformed);
        if(data_information[4].includes("chemistry"))data_transformed=sg.mp_chemistry(data_transformed);
        var data_toWrite= DOM_THIS.window.document;
        sg.sg(data_toWrite,gpi[0],config,gpi[2],gpi[1]);
        sg.ig(data_toWrite,config,globalCountInformation,data_information);
        data_toWrite.querySelector("data_category").innerHTML=data_information[3];
        data_toWrite.querySelector("data_date").innerHTML=data_information[1];
        data_toWrite.querySelector("data_title").innerHTML=data_information[0];
        var cc_block='<div class="cc">'+
        '<i class="fa fa-creative-commons"></i> Creative Commons'+
        '</div>';
        data_toWrite.querySelector("data").innerHTML=data_transformed+cc_block;
        sg.eo(data_toWrite,true,true,true,true);
        data_toWrite="<!DOCTYPE html>\n<head>"+data_toWrite.head.innerHTML+"</head>\n<body>"+data_toWrite.body.innerHTML+"</body>";
        var passage_dir=config.pubdir+"/"+specials[r];

        fs.mkdirSync(passage_dir,{recursive:true});
        fs.writeFile(passage_dir+"/index.html",data_toWrite,(err)=>{if(err)throw err;});
    }

    // --- TAGS & CATEGORIES & ARCHIVES PAGE ---
    var _tl=gpi[2].length,
    _cl=gpi[1].length,
    _al=gpi[0].length;

    var DOM_TAGS=new JSDOM(tmplt).window.document;
    var DOM_CATEGORIES=new JSDOM(tmplt).window.document;
    var DOM_ARCHIVES=new JSDOM(tmplt).window.document;

    sg.sg(DOM_TAGS,gpi[0],config,gpi[2],gpi[1]);
    sg.sg(DOM_CATEGORIES,gpi[0],config,gpi[2],gpi[1]);
    sg.sg(DOM_ARCHIVES,gpi[0],config,gpi[2],gpi[1]);
    
    sg.ig(DOM_TAGS,config,globalCountInformation,new Array("Tags","B","GG"));
    sg.ig(DOM_CATEGORIES,config,globalCountInformation,new Array("Tags","B","GG"));
    sg.ig(DOM_ARCHIVES,config,globalCountInformation,new Array("Archives","B","GG"));

    sg.eo(DOM_TAGS,false,true,true,false);
    sg.eo(DOM_CATEGORIES,false,true,true,false);
    sg.eo(DOM_ARCHIVES,false,true,true,false);

    // *** TAGS
    var appends="<h3 class='sp'>TAGS</h3><hr>";
    for(var b=0;b<_tl;b++){
        appends=appends+"<a href='"+gpi[2][b]+"' class='tag-and-category-page-tag-and-category'>"
        +gpi[2][b]+"</a>\n";
        fs.mkdirSync(config.pubdir+"/tags/"+gpi[2][b],{recursive:true},()=>{});
        
    }
    DOM_TAGS.querySelector("data").innerHTML=appends;
    for(var b=0;b<_tl;b++){
        var dom_this=new JSDOM(tmplt).window.document;
        sg.sg(dom_this,gpi[0],config,gpi[2],gpi[1]);
        sg.ig(dom_this,config,globalCountInformation,new Array(gpi[2][b],"B","GG"));
        sg.eo(dom_this,false,true,true,false);
        var appends="<h3 class='sp'>TAG:"+gpi[2][b]+"</h3><hr/>";
        for(var a=0,l=gpi[0].length;a<l;a++){
            if(posts_info[gpi[0][a][0]]._tags.includes(gpi[2][b])){
                appends=appends+"<a href='"+gpi[0][a][1]+"' class='tag-and-category-page-tag-and-category'>"+gpi[0][a][0]+"</a>";
            }
        }
        dom_this.querySelector("data").innerHTML=dom_this.querySelector("data").innerHTML+appends;
        var data_toWrite="<!DOCTYPE html>\n<head>"+dom_this.head.innerHTML+"</head>\n<body>"+dom_this.body.innerHTML+"</body>";
        fs.writeFile(config.pubdir+"/tags/"+gpi[2][b]+"/index.html",data_toWrite,()=>{});
    }
    var data_tag_toWrite="<!DOCTYPE html>\n<head>"+DOM_TAGS.head.innerHTML+"</head>\n<body>"+DOM_TAGS.body.innerHTML+"</body>";

    fs.mkdirSync(config.pubdir+"/tags/",{recursive:true});
    fs.writeFile(config.pubdir+"/tags/index.html",data_tag_toWrite,(err)=>{if(err)throw err;});

    // *** CATEGORIES
    var appends="<h3 class='sp'>CATEGORIES</h3><hr>";
    for(var b=0;b<_cl;b++){
        appends=appends+"<a href='"+gpi[1][b]+"' class='tag-and-category-page-tag-and-category'>"+gpi[1][b]+"</a>\n";
        fs.mkdirSync(config.pubdir+"/categories/"+gpi[1][b],{recursive:true},()=>{});
    }
    DOM_CATEGORIES.querySelector("data").innerHTML=appends;
    for(var b=0;b<_cl;b++){
        var dom_this=new JSDOM(tmplt).window.document;
        sg.sg(dom_this,gpi[0],config,gpi[2],gpi[1]);
        sg.ig(dom_this,config,globalCountInformation,new Array(gpi[1][b],"B","GG"));
        sg.eo(dom_this,false,true,true,false);
        var appends="<h3 class='sp'>CATEGORY:"+gpi[1][b]+"</h3><hr/>";
        for(var a=0,l=gpi[0].length;a<l;a++){
            if(posts_info[gpi[0][a][0]]._categories.includes(gpi[1][b])){
                appends=appends+"<a href='"+gpi[0][a][1]+"' class='tag-and-category-page-tag-and-category'>"+gpi[0][a][0]+"</a>";
            }
        }
        dom_this.querySelector("data").innerHTML=dom_this.querySelector("data").innerHTML+appends;
        var data_toWrite="<!DOCTYPE html>\n<head>"+dom_this.head.innerHTML+"</head>\n<body>"+dom_this.body.innerHTML+"</body>";
        fs.writeFile(config.pubdir+"/categories/"+gpi[1][b]+"/index.html",data_toWrite,()=>{});
    }
    var data_catg_toWrite="<!DOCTYPE html>\n<head>"+DOM_CATEGORIES.head.innerHTML+"</head>\n<body>"+DOM_CATEGORIES.body.innerHTML+"</body>";

    fs.mkdirSync(config.pubdir+"/categories/",{recursive:true});
    fs.writeFile(config.pubdir+"/categories/index.html",data_catg_toWrite,(err)=>{if(err)throw err;});

    // *** ARCHIVES
    var appends_date="";
    for(var b=0;b<_al;b++){
        appends_date=appends_date+"<h3 class='sp'>"+gpi[3][b]+"</h3><div id='D"+gpi[3][b].replace(/\-/g,"")+"'></div>\n";
    }
    DOM_ARCHIVES.querySelector("data").innerHTML=appends_date;
    for(var b=0;b<_al;b++){
        var appends="<hr/>\n";
        for(var a=0,l=gpi[0].length;a<l;a++){
            if(posts_info[gpi[0][a][0]].data_information[1].includes(gpi[3][b])){
                appends=appends+"<a href='"+gpi[0][b][1]+"' class='tag-and-category-page-tag-and-category'>"+gpi[0][b][0]+"</a>";
            }
        }
        DOM_ARCHIVES.querySelector("#D"+gpi[3][b].replace(/\-/g,"")).innerHTML=DOM_ARCHIVES.querySelector("#D"+gpi[3][b].replace(/\-/g,"")).innerHTML+appends;
    }
    var data_arcv_toWrite="<!DOCTYPE html>\n<head>"+DOM_ARCHIVES.head.innerHTML+"</head>\n<body>"+DOM_ARCHIVES.body.innerHTML+"</body>";

    fs.mkdirSync(config.pubdir+"/archives/",{recursive:true});
    fs.writeFile(config.pubdir+"/archives/index.html",data_arcv_toWrite,(err)=>{if(err)throw err;});


    // --- COPY THEME FILES ---
    fs.copyFileSync("_themes/"+config.theme+"/main.css",config.pubdir+"/main.css");
    fs.copyFileSync("_themes/"+config.theme+"/main.js",config.pubdir+"/main.js");
}


var args=process.argv.slice(2);
switch(args[0]){
    case "g":
        generate_all();
        break;
    case "i":
        fs.rmSync(config.pubdir,{recursive:true});
        fs.mkdirSync(config.pubdir,{recursive:true});
        fs.copyFileSync("_library/hl.css",config.pubdir+"/hl.css");
        fs.copyFileSync("_library/hl.min.js",config.pubdir+"/hl.min.js");
        break;
    case "n":
	var _name=args[1];
    var _template=fs.readFileSync("_themes/"+config.theme+"/template.md").toString();
    var _Date=new Date();
    var _date=_Date.getFullYear()+"-"+(_Date.getMonth()+1)+"-"+_Date.getDate();
    var _data_toWrite=_template.replace(/{title}/g,_name).replace(/{date}/g,_date);
	fs.writeFileSync(config.srcdir+"/post/"+_name+".md",_data_toWrite);
	break;
}
