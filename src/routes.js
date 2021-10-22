
import login from './components/login.vue';
import welcome from './components/welcome.vue';
import about from './components/about.vue';
import slide from './components/slide.vue';
import tab from './components/tabs.vue';
import {store} from './store';

export const routes=[
    {path:'/login',component:login   , meta: {title: 'LOGIN'}},
    {path:'',component:login,    meta: {title: 'LOGIN'},},
    {path:'/about',component:about,    meta: {title: 'ABOUT'},
    beforeEnter:(to,from,next)=>{
        if(sessionStorage.auth){
            store.state.l=true;
            next();
        }
        else{
            next('/login');
        }
    }
    },
    {path:'/slide',component:slide,    meta: {title: 'SLIDE'},
    beforeEnter:(to,from,next)=>{
        if(sessionStorage.auth){
            store.state.l=true;
            next();
        }
        else{
            next('/login');
        }
    }
    },
    {path:'/tabs',component:tab,    meta: {title: 'TABS'},
    beforeEnter:(to,from,next)=>{if(sessionStorage.auth){ store.state.l=true; next();}else{next('/login');}}
    },
    {path:'/welcome',
    component:welcome,
    meta: {title: 'WELCOME'},
    beforeEnter:(to,from,next)=>{
        
    if(to.path==='/welcome' && (from.path==='/login'  || from.path ==='/'||from.path==='/about'||from.path==='/slide'||from.path==='/tabs'))
     {
        if(sessionStorage.auth){
            store.state.l=true;
        next();
        console.log(sessionStorage.auth)
        
    }
        else{ 
            next('/login');
           }
    
    }
 
}},
    
];
