<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Demo 1" />
        </ActionBar>

        <StackLayout>
            <Label text="This is the first demo..." />
        </StackLayout>
    </Page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
