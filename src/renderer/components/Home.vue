<template>
    <div class="card" style="height: 78%" id="homepage">
        <h3 class="big" style="text-align: center">Terms and Conditions</h3>
        <section style="flex:1; overflow-y: scroll; overflow-x: hidden;">
          <div class="legal">
            <terms-of-service-text />
          </div>
        </section>
        <span class="bottom-border"></span>
        <p style="margin-bottom: 28px;">
          <checkbox style="display: inline" @change="agree = $event" />
          I agree to the GDPRapp <a class="external-link" @click="open('policy')">Terms of Services</a> and <a class="external-link" @click="open('privacy')">Privacy Policy</a>
        </p>
        <div style="width: 100%; text-align: center">
          <a class="btn" :class="{ 'disabled' : !agree }" @click="goToUpload()">
            Continue
          </a>
        </div>
    </div>
</template>
<script> 
import TermsOfServiceText from './TermsOfServiceText'
import Checkbox from './Checkbox';
import {openLink} from '../utils/utils';
export default {
  name: 'home',
  data() {
    return {
      agree: false
    }
  },
  methods: {
    goToUpload() {
      if(this.agree) {
        this.$router.push({ name: 'Upload' })
      }
    },
    open(link){
      if(link === 'policy'){
        openLink('https://www.gdprapp.org/terms-and-services')
      } else if(link === 'privacy') {
        openLink('https://www.gdprapp.org/privat-policy')
      }
    }
  },
  components: {
    TermsOfServiceText,
    Checkbox
  },
  uses: ['linkedin']
};
</script>