<style type="text/scss">
</style>

<page>
    <actionBar title="Demo 1">
        <navigationButton text="Go back" on:tap="{goBack}"></navigationButton>
    </actionBar>
    <stackLayout>
        <label text="The version is:"></label>
        <versionNumber></versionNumber>
    </stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';
</script>
