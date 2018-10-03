<template>
    <div class="card" id="notice">
        <h3 class="big">Notice:</h3>
        <p>You will be asked to login to your Linkedin account, through Chromium browser.</p>
        <p>This app doesn't store your password.</p>
        <p>Your password is never saved by any third party.</p>
        <div class="chromium">
            <img src="~@/assets/icon/chrome.svg">
            <p class="light">https://www.chromium.org/</p>
        </div>
        <div>
            <router-link class="btn" style="display: inline-block;" :to="{ name: 'Processing' }">Open Browser</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notice'
};
</script>
