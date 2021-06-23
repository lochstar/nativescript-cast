<style>
</style>

<page>
    <actionBar title="Cast Development Demo">
        <navigationButton text="Go back" on:tap={goBack} />
    </actionBar>
    <stackLayout>
        <label text="This is the nativescript-cast development demo..." />
        <castButton on:cast={handleCastEvent} />
    </stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';

    let cast = null

    const handleCastEvent = (args) => {
        console.log(`event: ${args.data.eventName}`);

        if (args.object && !cast) {
            cast = args.object;
        }
    }
</script>
