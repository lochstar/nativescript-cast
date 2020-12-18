<template>
    <Page>
        <ActionBar>
            <Label text="Vue.js Demo" />
        </ActionBar>

        <ScrollView>
            <StackLayout>
                <StackLayout v-for="demo in demos" :key="demo.name">
                    <Button :text="demo.name" @tap="goToDemo(demo.component)" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import { demos } from './linked-components/install';

export default {
    data() {
        return {
            demos
        };
    },
    mounted() {
        if (process.env.NODE_ENV === 'development') {
            const Development = demos.find(({ name }) => name === 'Development');
            if (Development) {
                this.$navigateTo(Development.component, {
                    animated: false
                });
            }
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
