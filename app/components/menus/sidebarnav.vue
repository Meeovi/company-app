<template>
    <div>
        <v-list v-for="item in navAccount?.menus" :key="item">
            <v-list-item 
                :title="item?.name" 
                :value="item?.name" 
                :prepend-icon="item?.icon" 
                :href="item?.url"
                :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode }">
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useThemeMode } from '~/composables/useThemeMode'
    
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const { isDarkMode, initializeTheme } = useThemeMode()

    onMounted(() => {
        initializeTheme()
    })

    const {
        data: navAccount
    } = await useAsyncData('navAccount', () => {
        return $directus.request($readItem('navigation', '57'))
    })
</script>

<style>
.v-list-item.text-black .v-list-item-title,
.v-list-item.text-black .v-icon {
    color: #000 !important;
}

.v-list-item.text-white .v-list-item-title,
.v-list-item.text-white .v-icon {
    color: #fff !important;
}
</style>