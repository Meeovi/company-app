<template>
    <div>
        <section data-bs-version="5.1" class="article01 operationm5 cid-uZmGbDoGvz mbr-parallax-background"
            id="article01-m">

            <div class="mbr-overlay" style="opacity: 0.9; background-color: rgb(255, 255, 255);"></div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="title-wrapper">
                            <div class="title-wrap">
                                <h2 class="mbr-section-title mbr-fonts-style display-2">
                                    {{ page?.name }}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features06 operationm5 cid-uZmGnYXKfT" id="features06-n">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-12" v-if="repeaterBoxes.length">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                {{ repeaterBoxes[0]?.name }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3" v-if="repeaterBoxes.length">
                        <div class="text-wrapper">
                            <p class="mbr-text mbr-fonts-style display-7">
                                {{ repeaterBoxes[0]?.subject }}
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3" v-if="repeaterBoxes.length">
                        <div class="text-wrapper">
                            <p class="mbr-text mbr-fonts-style display-7"><NuxtLink :to="repeaterBoxes[0]?.url"></NuxtLink></p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div v-if="careersListItems.length" class="items-wrapper">
                            <div class="item features-without-image item-mb" v-for="(c, i) in careersListItems" :key="c.id || i">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="title-wrap">
                                            <h4 class="card-title mbr-fonts-style display-5">
                                                {{ c?.name }}
                                            </h4>
                                            <p class="card-tag mbr-fonts-style display-4">
                                                {{ c?.date_created }}
                                            </p>
                                        </div>
                                        <div class="text-wrap">
                                            <p class="card-text mbr-fonts-style display-7" v-html="c?.description"></p>
                                        </div>
                                        <div class="mbr-section-btn">
                                            <NuxtLink :to="c?.url || '#apply'" class="btn btn-primary display-4">
                                                Apply Now
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="no-careers" style="padding:24px; background:#f8f9fb; border-radius:6px;">
                            <div v-html="page?.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItem('pages', '13', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: careersList
    } = await useAsyncData('careersList', () => {
        return $directus.request($readItems('careers', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                status: {
                    _eq: 'Published'
                }
            },
            sort: ['-id']
        }))
    })

    // normalize repeater and careers list
    const repeaterBoxes = computed(() => page.value?.repeaterTextBox || [])
    const careersListItems = computed(() => careersList.value || [])

    // Add this computed property to filter active menus
    const activeMenus = computed(() => {
        return websites.value?.menus?.filter(menu => menu.active === 'Active') || []
    })
</script>