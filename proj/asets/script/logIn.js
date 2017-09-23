document.addEventListener('DOMContentLoaded',function(){
    var acc=document.querySelector('#login_div');
    var children=acc.children;
    var log=document.querySelector('#log');
    log.addEventListener('mouseover',function(){
        log.style.display='inline-block';
    })
    log.addEventListener('mouseleave',function(){
        log.style.display='none';
    })
    children[0].addEventListener('mouseover',function(event){
        log.style.display='inline-block';
        
    });
    children[0].addEventListener('mouseleave',function(){
        log.style.display='none';
    })
})