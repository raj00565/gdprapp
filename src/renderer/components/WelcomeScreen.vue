<template>
    <div id="welcome">
        <div class="welcome-header">
            <div class="logo">
                <img src="~@/assets/icon/gdpr.svg" alt="gdpr">
            </div>
            <div class="info">
                <div class="title">Go Demand Personal Records</div>
                <div class="description">GDPRapp.org</div>
            </div>
        </div>
        
        <h1>Welcome to the Go Demand Personal Records <br/> Application!</h1>
        <router-link :to="{ name: 'Agreement' }" class="btn-white">Let's Start</router-link>
    </div>
</template>
<script>
export default {
    name: "welcome-screen",

}
</script>
