gsap.registerPlugin(ScrollTrigger)
let window_width=window.innerWidth
let tables_containers=gsap.utils.toArray('.table-content')


if(window_width>800){
    gsap.to('.table-content',{scrollTrigger:{
        trigger:'.section-tables',
        start:'top center'
    },opacity:1,duration:1,stagger:0.25}
    )
}
else{
   
    tables_containers.forEach(table => {       
        gsap.to(table,{scrollTrigger:{
            trigger:table,
            start:'top 50%',
            snap:1
        },opacity:1,duration:1}
        ) 
    });

    
}

let header=document.getElementsByTagName('header')[0]
let header_bars=document.getElementsByClassName('header-bars')[0]
let header_links=document.getElementsByClassName('header-links')[0]
let home_section=document.getElementsByClassName('home-section')[0]
let home_top=0


// window.addEventListener('resize',()=>{
//     window_width=window.innerWidth
//     if(window_width>=800) {       
//         header_links.style.display='flex'            
//     }
//     else{     
//         header_links.style.display='none'       
//     }
// })

document.addEventListener('scroll',()=>{
    if(window_width>=800) {
        home_top=home_section.getBoundingClientRect().y
        if(home_top<0){
            header.style.backgroundColor='black'
        }
        else{
            header.style.backgroundColor='transparent'
        }
    }   
})

let toggled=false
function clickBars(){
    if(!toggled) {
        toggled=true
        header_links.style.display='block'  
        header_links.className=''      
    }
    else {
        toggled=false
        header_links.style.display='none'
    }
}







