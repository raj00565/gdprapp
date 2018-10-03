import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import NotFound from '../components/NotFound';
import Upload from '../components/Upload';
import Processing from '../components/Processing';
import Download from '../components/Download';
import WelcomeScreen from '../components/WelcomeScreen.vue'
import Notice from '../components/Notice.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'WelcomePage',
      component: WelcomeScreen
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Home
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/notice',
      name: "Notice",
      component: Notice
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/download',
      name: "Download",
      component: Download
    },
    {
      path: '/processing',
      name: "Processing",
      component: Processing
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})