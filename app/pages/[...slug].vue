<template>
    <div>
        <template>
            <v-card v-if="pages?.navigation?.length">
                    <v-tabs bg-color="transparent" center-active>
                        <template v-for="nav in pages?.navigation" :key="nav.navigation_id">
                            <template v-for="menu in nav?.navigation_id?.menus" :key="menu.slug">
                                <v-tab :to="menu.url">{{ menu.name }}</v-tab>
                            </template>
                        </template>
                    </v-tabs>
            </v-card>
        </template>

        <section data-bs-version="5.1" class="nichem5 content1 cid-uYyrGMEdeT" id="content01-b">
            <div class="container">
                <div class="row">
                    <div class="title col-md-12 col-lg-8">
                        <h3 class="mbr-section-title mbr-fonts-style align-left mb-4 display-5">
                            <strong>{{ pages?.name }}</strong>
                        </h3>
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

        <section data-bs-version="5.1" class="nichem5 features4 cid-uYyrMGJpAJ" id="features04-d" v-if="pages?.articles?.length">
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
</template>

<script setup>
    import articleCard from '~/components/related/article.vue'
    const route = useRoute();
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: pages
    } = await useAsyncData('pages', () => {
        return $directus.request($readItems('pages', {
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
            fields: [
                '*',
                'image.*',
                'articles.articles_id.*',
                'navigation.navigation_id.*'
            ],
            limit: 1
        })).then(response => response?.[0]) // Get first item from response
    })

    const page = computed(() => pages.value?.[0] || null)

    useHead({
        title: computed(() => pages.value?.name || 'Page')
    });
</script>