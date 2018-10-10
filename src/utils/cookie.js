class Cookie {
  set(key,val, exdays=7.02) {
      // exdays 0.01 约15分钟
      /* let date=new Date();
      date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
      document.cookie=key + "=" + val +";expires="+date.toGMTString()+";path=/"; */
      let time = (exdays * 24 * 60 * 60);
      document.cookie = key + '=' + val + ';max-age=' + time+";path=/";
  }
  get(key) {
      let getCookie = document.cookie.replace(/[ ]/g,"");
      let arrCookie = getCookie.split(";")
      let tips;
      for(let i=0;i<arrCookie.length;i++){
          let arr=arrCookie[i].split("=");
          if(key === arr[0]){
              tips=arr[1];
              break;
          }
      }
      return tips;
  }
  clear(key) {
    this.set(key, "", -1);
  }
}
export default new  Cookie()