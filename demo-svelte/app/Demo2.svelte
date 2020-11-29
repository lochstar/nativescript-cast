<style type="text/scss">
</style>

<page>
    <actionBar title="Demo 2">
        <navigationButton text="Go back" android.systemIcon="ic_menu_back" on:tap="{goBack}"></navigationButton>
    </actionBar>
    <stackLayout><label text="This is the second demo..."></label></stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';
</script>
