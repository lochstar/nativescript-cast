<style type="text/scss">
</style>

<page>
    <actionBar title="Demo 1">
        <navigationButton text="Go back" android.systemIcon="ic_menu_back" on:tap="{goBack}"></navigationButton>
    </actionBar>
    <stackLayout><label text="This is the first demo..."></label></stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';
</script>
