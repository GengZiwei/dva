import screenfull from "screenfull";
  export function onScreenfull(event,type,target) {
    switch (type) {
      case "div":
        if(target){
          const targets = document.getElementById(target)[0];
          screenfull.request(targets);
        }else{
          screenfull.request();
        }
        break;
      default:
        screenfull.toggle(event.target);
        break;
    }
  }