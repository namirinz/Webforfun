<template>
    <div>
        <span>Logging out . . .</span>
    </div>
</template>
<script>
import firebase from "firebase"
export default {
    mounted() {
        firebase.auth().signOut().then(() => {
            localStorage.setItem('authenticated', false)
            window.location.href = '/'
        })
    }
}
</script>