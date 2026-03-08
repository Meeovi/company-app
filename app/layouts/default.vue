<template>
  <v-responsive>
    <v-app :theme="currentTheme">
      <v-app-bar id="topnav">
        <template #prepend>
          <v-btn variant="flat" color="transparent" class="menuBtn" @click="drawer = !drawer">
            <v-icon start icon="fas:fa fa-bars" /> Menu
          </v-btn>
        </template>

        <v-spacer />
        <logo />

        <!--<search />-->
        <v-spacer />

        <div class="d-flex align-center flex-column flex-sm-row fill-height">
          <v-col class="ecosystemMenuIcon">
            <ecosystemmenu />
          </v-col>

          <v-col id="minSearch">
            <mobilesearch />
          </v-col>

          <!--<v-col class="myaccounttopmenu">
            <myaccounttopmenu />
          </v-col>

          <v-col class="shoppingCart">
            <cart />
          </v-col>-->
        </div>
      </v-app-bar>

      <v-main>
        <v-card>
          <v-layout>
            <v-navigation-drawer v-model="drawer" class="sidebarSection" temporary>
              <div class="drawer-content">
                <v-list nav>
                  <sidebarnav />
                  <v-divider />

                  <!--<myaccountmenu />-->
                  <v-row class="bottomSideNav">
                    <v-col cols="3">
                      <v-btn variant="text" stacked title="Help" prepend-icon="fas:fa fa-question-circle" size="small" style="top: -12px; position: relative;"
                        href="https://help.meeovi.com"></v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-btn variant="text" @click="toggleDark()">
                        <v-icon>
                          {{ isDark ? 'fas:fa fa-moon' : 'fas:fa fa-sun' }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="3">
                      <!--<logout />-->
                    </v-col>
                  </v-row>
                </v-list>
              </div>
            </v-navigation-drawer>

            <v-main id="sidebarNav" />
            <main id="mainSection">
              <div>
                <slot />
              </div>
            </main>
          </v-layout>
        </v-card>
        <FooterNav />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  import logo from '~/components/blocks/logo.vue'
  import ecosystemmenu from '~/components/menus/ecosystemmenu.vue'
  import sidebarnav from '~/components/menus/sidebarnav.vue'
  import mobilesearch from '~/components/menus/mobilesearch.vue'
  import FooterNav from '~/components/menus/FooterNav.vue'
  import { ref, computed, onMounted, watch } from 'vue';
  import { useTheme } from 'vuetify'
  import { useThemeMode } from '~/composables/useThemeMode'

  const theme = useTheme();
  const { isDarkMode, initializeTheme, toggleTheme } = useThemeMode();
  
  const toggleDark = () => {
    toggleTheme();
    theme.global.name.value = isDarkMode.value ? 'dark' : 'light';
  };

  onMounted(() => {
    initializeTheme();
    theme.global.name.value = isDarkMode.value ? 'dark' : 'light';
  });

  watch(isDarkMode, (newVal) => {
    theme.global.name.value = newVal ? 'dark' : 'light';
  });

  const currentTheme = computed(() => isDarkMode.value ? 'dark' : 'light');

  // Initialize user state
  const drawer = ref(null);

  useHead({
    title: 'Starter Template',
    htmlAttrs: {
      class: () => isDarkMode.value ? 'dark' : '',
    },
  });
</script>