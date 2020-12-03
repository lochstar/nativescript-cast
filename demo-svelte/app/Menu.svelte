<style type="text/scss">
</style>

<page>
    <actionBar title="Svelte Demo"></actionBar>
    <stackLayout>
        {#each demos as demo}
            <button
                text="{demo.name}"
                on:tap="{() => {
                    goToDemo(demo.component);
                }}"
            ></button>
        {/each}
    </stackLayout>
</page>

<script lang="typescript">
    import Demo1 from './Demo1.svelte';
    import Demo2 from './Demo2.svelte';
    import Development from './Development.svelte';

    import { navigate } from 'svelte-native';
    import { onMount } from 'svelte';

    const demos = [
        { name: 'Demo 1', component: Demo1 },
        { name: 'Demo 2', component: Demo2 },
        { name: 'Development', component: Development }
    ];

    function goToDemo(component) {
        navigate({
            page: component,
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'ease'
            }
        });
    }

    onMount(() => {
        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                navigate({
                    page: Development,
                    animated: false
                });
            }, 0);
        }
    });
</script>
