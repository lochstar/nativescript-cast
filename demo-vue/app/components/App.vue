<template>
    <Page>
        <ActionBar>
            <Label text="Vue.js Demo" />
        </ActionBar>

        <StackLayout>
            <StackLayout v-for="demo in demos" :key="demo.name">
                <Button :text="demo.name" @tap="goToDemo(demo.component)" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script lang="typescript">

import Demo1 from './Demo1.vue';
import Demo2 from './Demo2.vue';
import Development from './Development.vue';

// declare let process;

export default {
    data() {
        return {
            demos: [
                {name: 'Demo 1', component: Demo1},
                {name: 'Demo 2', component: Demo2},
                {name: 'Development', component: Development},
            ]
        };
    },
    mounted() {
        if(process.env.NODE_ENV === 'development') {
            this.$navigateTo(Development, {
                animated: false
            });
        }
    },
    methods: {
        goToDemo(component) {
            this.$navigateTo(component, {
                animated: true,
                transition: {
                    name: 'slideLeft',
                    duration: 200,
                    curve: 'ease'
                }
            });
        }
    }
};
</script>
