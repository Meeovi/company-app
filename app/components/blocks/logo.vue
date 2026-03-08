<template>
    <div>
        <v-app-bar-title>
            <NuxtLink class="logobrand" :class="{ 'logo-dark': isDarkMode, 'logo-light': !isDarkMode }" href="/">
                <!--<v-icon start color="orange" v-if="blocksSiteoverview?.media?.[0]?.directus_files_id">
                    <img loading="lazy"
                        :src="`${$directus.url}assets/${blocksSiteoverview?.media?.[0]?.directus_files_id?.filename_disk}` || 'images/logo.png'"
                        :alt="blocksSiteoverview?.name" />
                </v-icon>-->
                <p class="logotext">{{ blocksSiteoverview?.name }}<!--Meeovi--></p>
            </NuxtLink>
        </v-app-bar-title>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useThemeMode } from '~/composables/useThemeMode'
    
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const { isDarkMode, initializeTheme } = useThemeMode()

    onMounted(() => {
        initializeTheme()
    })

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        return $directus.request($readItem('page_blocks', '19', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>

<style scoped>
.logo-light {
    color: #000 !important;
}

.logo-dark {
    color: #fff !important;
}

.logotext {
    color: inherit !important;
}
</style>