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
          I agree to the GDPRapp Terms of Services and Privacy Policy
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
    }
  },
  components: {
    TermsOfServiceText,
    Checkbox
  },
  uses: ['linkedin']
};
</script>