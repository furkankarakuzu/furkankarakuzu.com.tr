import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Hello = (resolve) => {
  require.ensure(["@/components/pages/Hello/Index"],()=>{
      resolve(require("@/components/pages/Hello/Index"));
  })
}

const Posts = (resolve) => {
  require.ensure(["@/components/pages/Posts/Index"],()=>{
      resolve(require("@/components/pages/Posts/Index"));
  })
}

const PostDetail = (resolve) => {
  require.ensure(["@/components/pages/Posts/PostDetail"],()=>{
      resolve(require("@/components/pages/Posts/PostDetail"));
  })
}

const Education = (resolve) => {
  require.ensure(["@/components/pages/Education/Index"],()=>{
      resolve(require("@/components/pages/Education/Index"));
  })
}

const EducationDetail = (resolve) => {
  require.ensure(["@/components/pages/Education/EducationDetail"],()=>{
      resolve(require("@/components/pages/Education/EducationDetail"));
  })
}

const Projects = (resolve) => {
  require.ensure(["@/components/pages/Projects/Index"],()=>{
      resolve(require("@/components/pages/Projects/Index"));
  })
}

const Contact = (resolve) => {
  require.ensure(["@/components/pages/Contact/Index"],()=>{
      resolve(require("@/components/pages/Contact/Index"));
  })
}

const router = new VueRouter({
  mode:'history',
  routes : [
    {path:'/', component:Hello},
    {path:'/posts', component:Posts},
    {path:'/post/:id', component:PostDetail},
    {path:'/education', component:Education},
    {path:'/education/:id', component:EducationDetail},
    {path:'/projects', component:Projects},
    {path:'/contact', component:Contact}
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
       return { selector: to.hash };
    } else {
       return { x: 0, y: 0 };
    }
 }
})

export default router