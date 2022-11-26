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
    return Array(title,date,tag,category);
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
function search_generatae(dom,posts_all,config,tags_all,categories_all){
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

exports.dg=(t,d,a,b,c)=>data_generate(t,d,a,b,c);
exports.uq=(a)=>unique(a);
exports.gpd=(d)=>get_post_data(d);
exports.ig=(d,c,g,dd)=>intro_generate(d,c,g,dd);
exports.sg=(d,pa,c,t,cg)=>search_generatae(d,pa,c,t,cg);
exports.tc=(dd)=>toc_finder(dd);