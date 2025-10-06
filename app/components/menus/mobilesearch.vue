<template>
    <div id="minSearch">
        <div class="text-center">
            <v-dialog v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="text" icon="fas:fa fa-search"></v-btn>
                </template>

                <v-card min-height="100" min-width="500">
                    <div ref="searchContainer" class="gcse-search"></div>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted } from 'vue'

    const dialog = ref(false)
    const searchContainer = ref(null)
    let scriptLoaded = false

    const loadGoogleSearch = () => {
        if (scriptLoaded || window.google?.search?.cse) return
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://cse.google.com/cse.js?cx=4738e106b877e41dd'
        script.onload = () => { scriptLoaded = true }
        document.head.appendChild(script)
    }

    const renderSearch = () => {
        if (window.google?.search?.cse?.element) {
            window.google.search.cse.element.render({
                div: searchContainer.value,
                tag: 'search'
            })
        }
    }

    onMounted(() => {
        loadGoogleSearch()
    })

    watch(dialog, (open) => {
        if (open) {
            setTimeout(() => {
                if (window.google?.search?.cse?.element) {
                    renderSearch()
                } else {
                    loadGoogleSearch()
                    setTimeout(renderSearch, 500)
                }
            }, 100)
        }
    })
</script>