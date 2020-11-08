<template>
    <Page >
        <ActionBar>
            <Label text="Vue.js Demo"/>
        </ActionBar>

        <StackLayout>
            <Label text="Hello World" />
        </StackLayout>
    </Page>
</template>

<script lang="typescript">
  export default {
    data() {
        return {
        }
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods: {
    }
  };
</script>

<style scoped lang="scss">

</style>
