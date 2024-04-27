var head=document.getElementById("h");
 
function count()
{
    setTimeout(()=>{
        head.innerText="10";
        setTimeout(()=>{
            head.innerText="9";
            setTimeout(()=>{
                head.innerText="8";
                setTimeout(()=>{
                    head.innerText="7";
                    setTimeout(()=>{
                        head.innerText="6";
                        setTimeout(()=>{
                            head.innerText="5";
                                setTimeout(()=>{
                                    head.innerText="4";
                                    setTimeout(()=>{
                                        head.innerText="3";
                                        setTimeout(()=>{
                                            head.innerText="2";
                                            setTimeout(()=>{
                                                head.innerText="1";
                                                setTimeout(()=>{
                                                    head.innerText="Happy independance day";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
count()
