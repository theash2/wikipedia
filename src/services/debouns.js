export function debouns(fn,delay){
    var timer;
    if(timer){
        clearTimeout(timer);
        return timer = setTimeout(()=>{
            fn()
        },delay)
    }
}