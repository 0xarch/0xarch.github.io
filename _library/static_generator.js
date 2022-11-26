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

exports.dg=(t,d,a,b,c)=>data_generate(t,d,a,b,c);
exports.uq=(a)=>unique(a);
exports.gpd=(d)=>get_post_data(d);