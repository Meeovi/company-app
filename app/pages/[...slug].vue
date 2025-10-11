<template>
    <div>
        <!--<template>
            <v-card v-if="pages?.navigation?.length">
                <v-tabs bg-color="transparent" center-active>
                    <template v-for="nav in pages?.navigation" :key="nav.navigation_id">
                        <template v-for="menu in nav?.navigation_id?.menus" :key="menu.slug">
                            <v-tab :to="menu.url">{{ menu.name }}</v-tab>
                        </template>
                    </template>
                </v-tabs>
            </v-card>
        </template>-->

        <div v-if="pages?.slug === 'topics'">
            <topics />
        </div>

        <div v-else>
            <section data-bs-version="5.1" class="nichem5 header1 cid-uYyqpQUNF8" id="header01-3">
                <div class="mbr-overlay" style="opacity: 0.4; background-color: rgb(23, 0, 59);"></div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-12">
                            <h2 class="mbr-section-subtitle mbr-fonts-style mb-3 display-2"><strong>
                                    {{ pages?.name }}</strong></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" class="nichem5 content1 cid-uYyrGMEdeT" id="content01-b">
                <div class="container">
                    <div class="row">
                        <div class="title col-md-12 col-lg-8">
                            <h4 class="mbr-section-subtitle align-left mbr-fonts-style mb-4 display-7"
                                v-html="pages?.content"></h4>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" class="nichem5 header3 cid-uYyrL0UGAN" id="header03-c" v-if="pages?.image">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                            <img :src="`${$directus?.url}assets/${pages?.image?.filename_disk}`" :alt="pages?.name">
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" class="nichem5 features1 cid-uYyqvWzTyk" id="features01-5"
                style="margin-top: 5%;" v-if="pages?.repeaterTextBox?.length">
                <div class="container-fluid">
                    <div class="row justify-content-center">

                        <div class="card col-md-12 col-lg-4" style="padding: 10px;">
                            <div class="card-wrap card1">

                                <div class="content-wrap align-left">
                                    <h5 class="mbr-section-title card-title mbr-fonts-style align-left mb-3 display-5">
                                        <strong>{{ pages?.repeaterTextBox?.[0]?.name }}</strong>
                                    </h5>

                                    <p class="card-text mbr-fonts-style align-left mb-4 display-7">
                                        {{ pages?.repeaterTextBox?.[0]?.description }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card col-md-12 col-lg-4" style="padding: 10px;">
                            <div class="card-wrap card2">

                                <div class="content-wrap align-left">
                                    <h5 class="mbr-section-title card-title mbr-fonts-style align-left mb-3 display-5">
                                        <strong>{{ pages?.repeaterTextBox?.[1]?.name }}</strong>
                                    </h5>

                                    <p class="card-text mbr-fonts-style align-left mb-4 display-7">
                                        {{ pages?.repeaterTextBox?.[1]?.description }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card col-md-12 col-lg-4" style="padding: 10px;">
                            <div class="card-wrap card3">

                                <div class="content-wrap align-left">
                                    <h5 class="mbr-section-title card-title mbr-fonts-style align-left mb-3 display-5">
                                        <strong>{{ pages?.repeaterTextBox?.[2]?.name }}</strong>
                                    </h5>

                                    <p class="card-text mbr-fonts-style align-left mb-4 display-7">
                                        {{ pages?.repeaterTextBox?.[2]?.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" class="nichem5 features4 cid-uYyrMGJpAJ" id="features04-d"
                v-if="pages?.articles?.length">
                <div class="container">
                    <div class="mbr-section-head mb-5">
                        <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Featured Articles</strong>
                        </h4>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="item features-image col-12 col-md-6 col-lg-4" v-for="posts in pages?.articles"
                            :key="posts">
                            <articleCard :article="posts?.articles_id" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
    import {
        computed,
        watch
    } from 'vue'
    import articleCard from '~/components/related/article.vue'
    import topics from '~/components/related/topics.vue'

    const route = useRoute();
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const slug = computed(() => route.params.slug || '')

    // useAsyncData key depends on the slug so it re-fetches when slug changes
    const {
        data: pages,
        refresh
    } = await useAsyncData(
        () => `pages-${slug.value}`,
        () => {
            return $directus.request($readItems('pages', {
                filter: {
                    slug: {
                        _eq: `${slug.value}`
                    }
                },
                fields: [
                    '*',
                    'image.*',
                    'articles.articles_id.*',
                    'navigation.navigation_id.*'
                ],
                limit: 1
            })).then(response => response?.[0])
        }
    )

    // Ensure we refresh when the route actually changes (defensive)
    watch(() => route.fullPath, () => {
        if (typeof refresh === 'function') refresh()
    })

    useHead({
        title: computed(() => pages.value?.name || 'Page')
    });
</script>