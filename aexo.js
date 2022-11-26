var fs=require("fs");
var path=require("path");
var sg=require("./_library/static_generator.js");
var marked=require("marked");
var jsdom=require("jsdom");
var config=JSON.parse(fs.readFileSync("_config.json").toString());
var tmplt=fs.readFileSync("_themes/"+config.theme+"/template.html").toString();
var cjs=require("./_themes/"+config.theme+"/custom.js");

const {JSDOM}=jsdom;
const DOM=new JSDOM(tmplt);

function generate_all(){
    var dir=fs.readdirSync(config.srcdir+"/post/");
    // --- ARRAY DEFINE --- MOST IMPORTANT -> SAVING DATA
    var dataAndInformation_all=new Array();
    var tags_all=new Array();
    var categories_all=new Array();
    var posts_all=new Array();
    var posts_info={};
    // --- GET ALL COUNTS ---
    var globalCountInformation=new Array(0,0,0);
    dir.forEach((filename)=>{

        var filedir = path.join(config.srcdir+"/post/", filename);

        var data_got=fs.readFileSync(filedir).toString();

        var data_information=sg.gpd(data_got);

        var _tags=data_information[2].split(" ");

        var _categories=data_information[3].split(" ");

        tags_all=tags_all.concat(_tags);

        categories_all=categories_all.concat(_categories);

        var time=data_information[1].split("-");

        var passage_pub="/archives/"+time[0]+"/"+time[1]+"/"+time[2]+"/"+filename.replace(/\.md/,".html");

        posts_all.push(new Array(filename.replace(/\.md/,""),passage_pub));

        posts_info[data_information[0]]={data_information,_tags,_categories};

        globalCountInformation[0]++;

    });
    globalCountInformation[1]=categories_all.length;
    globalCountInformation[2]=tags_all.length;
    console.log("Tags ",tags_all,"\n","Categories ",categories_all);
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
        var _tocs=sg.tc(data_toWrite);

        tocs_slctr=data_toWrite.querySelector("#data_toc");

        for(var w=0;w<_tocs.length;w++){

            var raw_toc=_tocs[w].replace(/ /g,"-").toLowerCase();

            raw_toc=raw_toc.replace(/[\/,\+]/g,"");

            var appends="\n<a class='tocs' id='con_"+_tocs[w]+"' href='#"+raw_toc+"'>"+_tocs[w]+"</a><br/>";

            tocs_slctr.innerHTML=tocs_slctr.innerHTML+appends;
        }


        // --- SINGLE DATA INSERT ---
        data_toWrite.querySelector("data_category").innerHTML=data_information[3];

        data_toWrite.querySelector("data_date").innerHTML=data_information[1];

        data_toWrite.querySelector("data_title").innerHTML=data_information[0];

        sg.ig(data_toWrite,config,globalCountInformation,data_information);

        // --- SEARCH ITEM INSERT ---
        sg.sg(data_toWrite,posts_all,config,tags_all,categories_all);


        // --- SAVE FILE & PUSH DATA ---
        var time=data_information[1].split("-");

        var passage_dir=config.pubdir+"/archives/"+time[0]+"/"+time[1]+"/"+time[2];

        var passage_pub="/archives/"+time[0]+"/"+time[1]+"/"+time[2]+"/"+filename.replace(/\.md/,".html");

        data_toWrite="<!DOCTYPE html>\n<head>"+data_toWrite.head.innerHTML+"</head>\n<body>"+data_toWrite.body.innerHTML+"</body>";

        fs.mkdirSync(passage_dir,{recursive:true});

        fs.writeFile(passage_dir+"/"+filename.replace(/\.md/,".html"),data_toWrite,(err)=>{if(err)throw err;});

        var dataAndInformation_This=new Array(data_transformed,data_information,passage_pub);

        dataAndInformation_all.push(dataAndInformation_This);
    });

    // --- VARIABLE DEFINE FOR INDEX ---
    var DOM_INDEX=new JSDOM(tmplt).window.document;

    sg.ig(DOM_INDEX,config,globalCountInformation,new Array("I","B","GG"));

    var DOM_INDEX_DATA=DOM_INDEX.querySelector("data");

    DOM_INDEX.querySelector("#main-intro").style.display="none";

    DOM_INDEX.querySelector("#data_toc").style.display="none";

    DOM_INDEX.querySelector("#explorer").style.boxShadow="none !important";

    DOM_INDEX.querySelector("#column-right").style.padding="0";

    DOM_INDEX.querySelector("#column-right").style.margin="0";

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
    sg.sg(DOM_INDEX,posts_all,config,tags_all,categories_all);

    var index_toWrite="<!DOCTYPE html>\n<head>"+DOM_INDEX.head.innerHTML+"</head>\n<body>"+DOM_INDEX.body.innerHTML+"</body>";
    fs.writeFileSync(config.pubdir+"/index.html",index_toWrite);

    // --- SPECIALS ---
    var specials=config.specials;
    for(var r=0,l=specials.length;r<l;r++){

        var filedir=config.srcdir+"/"+specials[r]+"/index.md";

        var DOM_THIS=new JSDOM(tmplt);

        var data_got=fs.readFileSync(filedir).toString();

        var data_transformed=marked.parse(data_got.replace(/\-\-\-[\s\S]*\-\-\-\n/,"\n"));

        var data_information=sg.gpd(data_got);

        var data_toWrite= DOM_THIS.window.document;

        data_toWrite.querySelector("data_category").innerHTML=data_information[3];

        data_toWrite.querySelector("data_date").innerHTML=data_information[1];

        data_toWrite.querySelector("data_title").innerHTML=data_information[0];

        sg.ig(data_toWrite,config,globalCountInformation,data_information);

        var cc_block='<div class="cc">'+
        '<i class="fa fa-creative-commons"></i> Creative Commons'+
        '</div>';

        data_toWrite.querySelector("data").innerHTML=data_transformed+cc_block;

        data_toWrite="<!DOCTYPE html>\n<head>"+data_toWrite.head.innerHTML+"</head>\n<body>"+data_toWrite.body.innerHTML+"</body>";

        var passage_dir=config.pubdir+"/"+specials[r];

        fs.mkdirSync(passage_dir,{recursive:true});

        fs.writeFile(passage_dir+"/index.html",data_toWrite,(err)=>{if(err)throw err;});
    }

    // --- TAGS & CATEGORIES PAGE ---
    var _tl=tags_all.length,_cl=categories_all.length;

    var DOM_TAGS=new JSDOM(tmplt).window.document;

    var DOM_CATEGORIES=new JSDOM(tmplt).window.document;

    // *** TAGS
    sg.sg(DOM_TAGS,posts_all,config,tags_all,categories_all);

    sg.ig(DOM_TAGS,config,globalCountInformation,new Array("Tags","B","GG"));

    for(var b=0;b<_tl;b++){

        var appends="<a href='"+tags_all[b]+"' class='tag-and-category-page-tag-and-category'>"
        +tags_all[b]+"</a>\n";
        fs.mkdirSync(config.pubdir+"/tags/"+tags_all[b],{recursive:true},()=>{});
        DOM_TAGS.querySelector("data").innerHTML=DOM_TAGS.querySelector("data").innerHTML+appends;
    }

    for(var b=0;b<_tl;b++){
        var dom_this=new JSDOM(tmplt).window.document;
        sg.sg(dom_this,posts_all,config,tags_all,categories_all);
        sg.ig(dom_this,config,globalCountInformation,new Array(tags_all[b],"B","GG"));
        var appends="<a href='"+tags_all[b]+"' class='tag-and-category-page-tag-and-category'>"
        +tags_all[b]+"</a><hr/>\n";
        for(var a=0,l=posts_all.length;a<l;a++){
            if(posts_info[posts_all[a][0]]._tags.includes(tags_all[b])){
                appends=appends+"<a href='"+posts_all[a][1]+"'>"+posts_all[a][0]+"</a>";
            }
        }
        dom_this.querySelector("data").innerHTML=dom_this.querySelector("data").innerHTML+appends;

        var data_toWrite="<!DOCTYPE html>\n<head>"+dom_this.head.innerHTML+"</head>\n<body>"+dom_this.body.innerHTML+"</body>";
        fs.writeFile(config.pubdir+"/tags/"+tags_all[b]+"/index.html",data_toWrite,()=>{});
    }


    DOM_TAGS.querySelector("#main-intro").innerHTML="";

    var data_tag_toWrite="<!DOCTYPE html>\n<head>"+DOM_TAGS.head.innerHTML+"</head>\n<body>"+DOM_TAGS.body.innerHTML+"</body>";

    fs.mkdirSync(config.pubdir+"/tags/",{recursive:true});

    fs.writeFile(config.pubdir+"/tags/index.html",data_tag_toWrite,(err)=>{if(err)throw err;});

    // *** CATEGORIES
    sg.sg(DOM_CATEGORIES,posts_all,config,tags_all,categories_all);

    sg.ig(DOM_CATEGORIES,config,globalCountInformation,new Array("Categories","B","GG"));

    for(var b=0;b<_cl;b++){

        var appends="<a href='"+categories_all[b]+"' class='tag-and-category-page-tag-and-category'>"+categories_all[b]+"</a>\n";
        fs.mkdirSync(config.pubdir+"/categories/"+categories_all[b],{recursive:true},()=>{});
        DOM_CATEGORIES.querySelector("data").innerHTML=DOM_CATEGORIES.querySelector("data").innerHTML+appends;
    }

    for(var b=0;b<_cl;b++){
        var dom_this=new JSDOM(tmplt).window.document;
        sg.sg(dom_this,posts_all,config,tags_all,categories_all);
        sg.ig(dom_this,config,globalCountInformation,new Array(categories_all[b],"B","GG"));
        var appends="<a href='"+categories_all[b]+"' class='tag-and-category-page-tag-and-category'>"
        +categories_all[b]+"</a><hr/>\n";
        for(var a=0,l=posts_all.length;a<l;a++){
            if(posts_info[posts_all[a][0]]._categories.includes(categories_all[b])){
                appends=appends+"<a href='"+posts_all[a][1]+"'>"+posts_all[a][0]+"</a>";
            }
        }
        dom_this.querySelector("data").innerHTML=dom_this.querySelector("data").innerHTML+appends;

        var data_toWrite="<!DOCTYPE html>\n<head>"+dom_this.head.innerHTML+"</head>\n<body>"+dom_this.body.innerHTML+"</body>";
        fs.writeFile(config.pubdir+"/categories/"+categories_all[b]+"/index.html",data_toWrite,()=>{});
    }

    DOM_CATEGORIES.querySelector("#main-intro").innerHTML="";

    var data_catg_toWrite="<!DOCTYPE html>\n<head>"+DOM_CATEGORIES.head.innerHTML+"</head>\n<body>"+DOM_CATEGORIES.body.innerHTML+"</body>";

    fs.mkdirSync(config.pubdir+"/categories/",{recursive:true});

    fs.writeFile(config.pubdir+"/categories/index.html",data_catg_toWrite,(err)=>{if(err)throw err;});


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
}