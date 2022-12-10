function data_generate(template,data,arg1,arg2,arg3){
    var replaced_template=template.replace(/<data>/g,data);
    return replaced_template;
}
function get_post_data(data){
    var information=data.match(/\-\-\-[\s\S]*\-\-\-/);
    var title=information[0].match(/title\:([^\n]*)/);title=title[0].replace(/title\: ?/,"");
    var date=information[0].match(/date\:([^\n]*)/);date=date[0].replace(/date\: ?/,"");
    var tag=information[0].match(/tag\:([^\n]*)/);tag=tag[0].replace(/tag\: ?/,"");
    var category=information[0].match(/category\:([^\n]*)/);category=category[0].replace(/category\: ?/,"");
    var extension=information[0].match(/extension\:([^\n]*)/);extension=extension[0].replace(/extension\: ?/,"");
    return Array(title,date,tag,category,extension);
}
function unique(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(hash.indexOf(arr[i])==-1){
        hash.push(arr[i]);
       }
    }
    return hash;
  }
function intro_generate(dom,config,gcl,dal){
    dom.querySelector("data_p_count_passage").innerHTML=gcl[0];
    dom.querySelector("data_p_count_category").innerHTML=gcl[1];
    dom.querySelector("data_p_count_tag").innerHTML=gcl[2];
    dom.querySelector("data_c_name").innerHTML=config.name;
    dom.querySelector("data_c_discription").innerHTML=config.discription;
    dom.querySelector("data_c_location").innerHTML=config.location;
    dom.querySelector("#data_c_avatar").setAttribute('src',config.avatar);
    dom.querySelector("title").innerHTML=dal[0]+dom.querySelector("title").innerHTML;
}
function search_generate(dom,posts_all,config,tags_all,categories_all){
    var dom_cs_post=dom.querySelector("data_cs_post");
        for(var a=0,l=posts_all.length;a<l;a++){

            var appends="<a href='"+posts_all[a][1]+"' class='in-search-item'>"+posts_all[a][0]+"</a>\n";

            dom_cs_post.innerHTML=dom_cs_post.innerHTML+appends;
        }

    var dom_cs_page=dom.querySelector("data_cs_page");

        for(var a=0,l=config.specials.length;a<l;a++){

            var appends="<a href='/"+config.specials[a]+"' class='in-search-item'>"+config.specials[a]+"</a>";
            dom_cs_page.innerHTML=dom_cs_page.innerHTML+appends;
        }

    var dom_cs_tag=dom.querySelector("data_cs_tag");

        for(var a=0,l=tags_all.length;a<l;a++){

            var appends="<a href='/tags/"+tags_all[a]+"' class='in-search-item'>"+tags_all[a]+"</a>\n";
            dom_cs_tag.innerHTML=dom_cs_tag.innerHTML+appends;
        }

    var dom_cs_catg=dom.querySelector("data_cs_category");

        for(var a=0,l=categories_all.length;a<l;a++){

            var appends="<a href='/categories/"+categories_all[a]+"' class='in-search-item'>"+categories_all[a]+"</a>\n";
            dom_cs_catg.innerHTML=dom_cs_catg.innerHTML+appends;
        }
}
function toc_finder(data_dom){
    var hash=new Array();
    data_dom.querySelectorAll("h2").forEach((el)=>{
        hash.push(el.innerHTML);
    });
    return hash;
}
function element_override(data_dom,toc,mainShadow,padmag,intro){
    if(toc){
        var _tocs=toc_finder(data_dom);

        tocs_slctr=data_dom.querySelector("#data_toc");

        for(var w=0;w<_tocs.length;w++){

            var raw_toc=_tocs[w].replace(/ /g,"-").toLowerCase();

            raw_toc=raw_toc.replace(/[\/,\+]/g,"");

            var appends="\n<a class='tocs' id='con_"+_tocs[w]+"' href='#"+raw_toc+"' onclick='toggleHeader(false)'>"+_tocs[w]+"</a><br/>";

            tocs_slctr.innerHTML=tocs_slctr.innerHTML+appends;
        }
    }else{
        data_dom.querySelector("#data_toc").remove();
    }
    if(!mainShadow){
        data_dom.querySelector("#explorer").style.boxShadow="none !important";
    }
    if(!padmag){
        data_dom.querySelector("#column-right").style.padding="0";
        data_dom.querySelector("#column-right").style.margin="0";
    }
    if(!intro){
        data_dom.querySelector("#main-intro").remove();
    }

}
function creative_common_generate(conf){
    var type=conf.creativecommon;
    var global='<div class="cc">'+
    '<i class="fa fa-creative-commons"></i> Creative Commons '+
    type+
    '</div>';
    return global;
}
function markarch_parse_chemistry(data){
    var ret=data;
    ret=ascII_transform("to",ret);
    ret=ret.replace(/\$([^\$]*)\$/g,"<p class='fcs'>$1</p>");
    ret=ret.replace(/\{\{([^\|,^\}]*)\|([^\|,^\}]*)\|([^\},^\|]*)\}\}/g,"<span class='layer_text'><font class='_top'>$1</font><font class='_seperate'>$2</font><font class='_bottom'>$3</font></span>");
    ret=ret.replace(/\{\{([^\|]*)\|([^\},^\{]*)\}\}/g,"<span class='layer_text'><font class='_top two'>$1</font><font class='_seperate two'>$2</font></span>");
    ret=ret.replace(/\_([1-9|\+|\-]{1,})/g,"<sub>$1</sub>").replace(/\^([1-9|\+|\-]{1,})/g,"<sup>$1</sup>");
    ret=ret.replace(/\:up/g,"↑").replace(/\:down/g,"↓");
    ret=ret.replace(/\:heat/g,"△").replace(/\:to/g,"→");
    ret=ret.replace(/\:dot/g,"•").replace(/\:reverse/g,"⇋");
    ret=ret.replace(/\:fire/g,"点燃");
    ret=ascII_transform("back",ret);
    return ret;
}
function markarch_parse_hylarAlphabet(data){
    var ret=data;
    ret=ascII_transform("to",ret);
    ret=ascII_transform("back",ret);
    return ret;
}
function ascII_transform(type,data){
    var ret=data;
    //console.log(ret);
    switch(type){
        case "to":
            ret=ret.replace(/\\\:/g,"<!uf3A!>").replace(/\\\$/g,"<!uf36!>").replace(/\\\{/g,"<!uf7B!>").replace(/\\\}/g,"<!uf7D!>");
            ret=ret.replace(/\\\^/g,"<!uf5E!>").replace(/\\\_/g,"<!uf5F!>").replace(/\\\|/g,"<!uf7C!>");
            return ret;
        case "back":
            ret=ret.replace(/<\!uf3A\!>/g,":").replace(/<\!uf36\!>/g,"$").replace(/<\!uf7B\!>/g,"{").replace(/<\!uf7D\!>/g,"}");
            ret=ret.replace(/<\!uf5E\!>/g,"^").replace(/<\!uf5F\!>/g,"_").replace(/<\!uf7C\!>/g,"|");
            return ret;
    }
}
// --- SHORT NAME EXPORT ---
exports.dg=(t,d,a,b,c)=>data_generate(t,d,a,b,c);
exports.uq=(a)=>unique(a);
exports.gpd=(d)=>get_post_data(d);
exports.ig=(d,c,g,dd)=>intro_generate(d,c,g,dd);
exports.sg=(d,pa,c,t,cg)=>search_generate(d,pa,c,t,cg);
exports.tc=(dd)=>toc_finder(dd);
exports.eo=(dd,t,m,pm,i)=>element_override(dd,t,m,pm,i);
exports.ccg=(c)=>creative_common_generate(c);
exports.mp_chemistry=(d)=>markarch_parse_chemistry(d);

// --- *** LOOK AT HERE

// --- BASE NAME WITH DOCUMENT ---

/* Data Generate
 * Arguments:
 * 1 template : Template DOM
 * 2 data : Post/Page Data
 * 3 Arg1 : Unused
 * 4 Arg2 : Unused
 * 5 Arg3 : Unused
 * <RETURN ON THE ARG:template>
 */
exports.data_generate=(template,data,arg1,arg2,arg3)=>data_generate(template,data,arg1,arg2,arg3);
/* Unique
 * Arguments:
 * 1 array : Array
 * <RETURN WTIH AN ARRAY>
 */
exports.unique=(arr)=>unique(arr);
/* Get Post's Data
 * Arguments:
 * 1 Data : Raw Data From data_got
 * <RETURN WITH AN ARRAY>
 */
exports.get_post_data=(data)=>get_post_data(data);
/* Generate Introduction for DOM
 * Arguments:
 * 1 DOM : Page DOM
 * 2 Configuration
 * 3 Global Count Information : globalCountInformation
 * 4 All Data and Information : dataAndInformationAll
 * <RETURN ON THE ARG:dom>
 */
exports.intro_generate=(dom,config,gcl,dal)=>intro_generate(dom,config,gcl,dal);
/* Generate Search Plugin for DOM
 * Arguments:
 * 1 DOM: Page DOM
 * 2 Posts Information : posts_all
 * 3 Configuration
 * 4 Tags
 * 5 Categories
 */
exports.search_generate=(d,pa,c,t,cg)=>search_generate(d,pa,c,t,cg);
exports.tc=(dd)=>toc_finder(dd);
/* Element Style Override
 * Arguments:
 * 1 Data DOM : DOM
 * 2 Toc : With Toc (False for hide)
 * 3 Main's Shadow : Main Wrapper With Shadow (False for no shadow)
 * 4 Padding & Margin : Main Wrapper With Padding & Margin (False for no padding & margin)
 * 5 Main Passage Intro : Main Wrapper With a Introduction For Post Containing (False for no introduction)
 * <RETURN ON THE ARG:data_dom>
 */
exports.element_override=(data_dom,toc,main_s_shadow,padding_and_margin,main_intro)=>
    element_override(data_dom,toc,main_s_shadow,padding_and_margin,main_intro);