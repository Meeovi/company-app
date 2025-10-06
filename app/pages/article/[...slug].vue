<template>
    <div>
        <section data-bs-version="5.1" class="nichem5 article1 cid-uYyqBwtkLO" id="article01-6">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-6 image-wrapper">
                        <img class="w-100" :src="`${$directus?.url}assets/${article?.image?.filename_disk}`"
                            :alt="article?.name">
                    </div>
                    <div class="col-12 col-md-12 col-lg">
                        <div class="text-wrapper align-left">
                            <h1 class="mbr-section-title mbr-fonts-style align-left mb-3 display-5">
                                <strong>{{ article?.name }}</strong></h1>
                            <p class="mbr-text mbr-fonts-style align-left display-7">{{ article?.created_at }}</p>
                            <p class="mbr-text mbr-fonts-style align-left display-7">{{ article?.tags }}</p>
                            <div class="link-wrapper align-left">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="nichem5 content1 cid-uYyqCumTwj" id="content01-7">
            <div class="container">
                <div class="row">
                    <div class="title col-md-12 col-lg-8">
                        <h3 class="mbr-section-title mbr-fonts-style align-left mb-4 display-5">
                            <strong>{{ article?.name }}</strong>
                        </h3>
                        <h4 class="mbr-section-subtitle align-left mbr-fonts-style mb-4 display-7"
                            v-html="article?.description"></h4>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const route = useRoute()
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: article
    } = await useAsyncData('article', () => {
        return $directus.request($readItems('articles', {
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
            fields: [
                '*',
                'images.*',
                'tags.tags_id.*'
            ],
            limit: 1
        }))
    })

    useHead({
        title: computed(() => post.value?.name || 'Post')
    });
</script>