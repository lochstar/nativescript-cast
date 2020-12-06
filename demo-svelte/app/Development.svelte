<style type="text/scss">
</style>

<page>
    <actionBar title="Development">
        <navigationButton text="Go back" on:tap="{goBack}"></navigationButton>
    </actionBar>
    <stackLayout><label text="This is the development demo..."></label></stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';
</script>
