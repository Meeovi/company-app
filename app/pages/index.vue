<template>
    <div>
        <section data-bs-version="5.1" class="nichem5 header1 cid-uYyqpQUNF8" id="header01-3">
            <div class="mbr-overlay" style="opacity: 0.4; background-color: rgb(23, 0, 59);"></div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-12">
                        <h2 class="mbr-section-subtitle mbr-fonts-style mb-3 display-7"><strong>
                                {{ page?.repeaterTextBox?.[0]?.name }}</strong></h2>
                        <h1 class="mbr-section-title mbr-fonts-style mb-5 display-1"><strong>{{ page?.repeaterTextBox?.[0]?.subject }}</strong></h1>

                        <p class="mbr-text mbr-fonts-style display-7">
                            {{ page?.repeaterTextBox?.[0]?.description }}<br></p>

                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="nichem5 features4 cid-uYyqu6KJcI" id="features04-4">
            <div class="container">
                <div class="mbr-section-head mb-5">
                    <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-6">
                        <strong>{{ page?.repeaterTextBox?.[1]?.name }}</strong>
                    </h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style align-left mb-0 mt-2 display-7">{{ page?.repeaterTextBox?.[1]?.subject }}</h5>
                </div>
                <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                            v-for="(news, index) in articles" :key="index">
                            <articleCard :class="['ma-4', selectedClass]" :article="news" v-if="isSelected" @click="toggle" />
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>

            <div class="container">
                <div class="mbr-section-head mb-5">
                    <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-6">
                        <strong>{{ page?.repeaterTextBox?.[2]?.name }}</strong>
                    </h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style align-left mb-0 mt-2 display-7">{{ page?.repeaterTextBox?.[2]?.subject }}</h5>
                </div>
                <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                            v-for="(news, index) in pixArticles" :key="index">
                            <articleCard :class="['ma-4', selectedClass]" :article="news" v-if="isSelected" @click="toggle" />
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>

            <div class="container">
                <div class="mbr-section-head mb-5">
                    <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-6">
                        <strong>{{ page?.repeaterTextBox?.[3]?.name }}</strong>
                    </h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style align-left mb-0 mt-2 display-7">{{ page?.repeaterTextBox?.[3]?.subject }}</h5>
                </div>
                <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                            v-for="(news, index) in enovelsArticles" :key="index">
                            <articleCard :class="['ma-4', selectedClass]" :article="news" v-if="isSelected" @click="toggle" />
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </section>

        <section data-bs-version="5.1" class="nichem5 features1 cid-uYyqvWzTyk" id="features01-5">




            <div class="container-fluid">
                <div class="row justify-content-center">

                    <div class="card col-md-12 col-lg-4">
                        <div class="card-wrap card1">

                            <div class="content-wrap align-left">
                                <h5 class="mbr-section-title card-title mbr-fonts-style align-left mb-3 display-5">
                                    <strong>{{ page?.repeaterTextBox?.[4]?.name }}</strong>
                                </h5>

                                <p class="card-text mbr-fonts-style align-left mb-4 display-7">
                                    {{ page?.repeaterTextBox?.[4]?.description }}
                                </p>

                                <div class="link-wrapper align-left">
                                    <NuxtLink :to="page?.repeaterTextBox?.[4]?.url" class="mbr-link align-left mbr-fonts-style display-7"><strong>READ MORE</strong>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import articleCard from '~/components/related/article.vue'

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const model = ref(null)

    const {
        data: articles
    } = await useAsyncData('articles', () => {
        return $directus.request($readItems('articles', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                platform: {
                    platform_id: {
                        name: {
                            _eq: 'About Meeovi'
                        }
                    }
                }
            }
        }))
    })

    const {
        data: pixArticles
    } = await useAsyncData('pixArticles', () => {
        return $directus.request($readItems('articles', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                platform: {
                    platform_id: {
                        name: {
                            _eq: 'Pixanomy'
                        }
                    }
                }
            }
        }))
    })

    const {
        data: enovelsArticles
    } = await useAsyncData('enovelsArticles', () => {
        return $directus.request($readItems('articles', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                platform: {
                    platform_id: {
                        name: {
                            _eq: 'Elite Novels'
                        }
                    }
                }
            }
        }))
    })

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItem('pages', '28', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
    useHead({
        title: 'About Meeovi',
    })
</script>