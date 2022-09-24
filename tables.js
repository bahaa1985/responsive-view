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