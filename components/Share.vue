<template>
<a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=http://centralreal.cf${url}`">
    <i class="fa fa-facebook"></i> Share
</a>
</template>

<script>
export default {
    props: ['url']
}
</script>
