<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <q-btn flat rounded color="white" to="/">
            <img src="statics/corpox_sm.jpg">
            <span class="q-ml-sm">Admin Dashboard</span>
          </q-btn>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="statics/account-icon.jpg">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" :to="link.name" >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'CORPOX_AdminLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: '',
      hasWords: '',
      excludeWords: '',
      byWebsite: '',
      byDate: 'Any time',
      links1: [
        { icon: 'emoji_people', text: 'Pick a random employee', name: 'random_employee' },
        { icon: 'group', text: 'Pair up employees', name: 'pair_up'  }
      ]

    }
  }
}
</script>

<style lang="stylus">
.GNL
  &__toolbar
    height 64px
  &__toolbar-input
    width 55%
  &__drawer-item
    line-height 24px
    border-radius 0 24px 24px 0
    margin-right 12px
    .q-item__section--avatar
      .q-icon
        color #5f6368
    .q-item__label
      color #3c4043
      letter-spacing .01785714em
      font-size .875rem
      font-weight 500
      line-height 1.25rem
  &__drawer-footer-link
    color inherit
    text-decoration none
    font-weight 500
    font-size .75rem
    &:hover
      color #000
</style>
