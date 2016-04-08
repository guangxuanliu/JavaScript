/**
 * Created by 技术2 on 2016/4/8.
 */
var CookieUtil = {
  get : function (name) {
      var cookieName = encodeURIComponent(name) + "=",
          cookieStart = document.cookie.indexOf(cookieName),
          cookieValue = null;
      
      if(cookieStart > -1){
          var cookieEnd = document.cookie.indexOf(";",cookieStart);
          if(cookieEnd == -1){
              cookieEnd = document.cookie.length;
          }
          cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
      }
      return cookieValue;
  },
    set : function (name,value,expires,path,domain,secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if(expires instanceof Date){
            cookieText += "; expires=" + expires.toDateString();
        }
        if(path){
            cookieText += "; path=" + path;
        }
        if(domain){
            cookieText += "; domain=" + domain; 
        }
        if(secure){
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    unset : function (name,path,domain,secure) {
        this.set(name,"",new Date(0),path,domain,secure);
    }
};
