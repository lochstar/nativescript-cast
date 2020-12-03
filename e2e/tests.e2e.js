describe('Plugin Seed Tests', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('Go to Demo 1', async () => {
        await element(by.text('Demo 1')).tap();
        await expect(element(by.text('The version is:'))).toBeVisible();
        await goBack();
    });

    it('Go to Demo 2', async () => {
        await element(by.text('Demo 2')).tap();
        await expect(element(by.text('This is the second demo...'))).toBeVisible();
        await goBack();
    });

    it('Go to Devlopment Demo', async () => {
        await element(by.text('Development')).tap();
        await expect(element(by.text('This is the development demo...'))).toBeVisible();
        await goBack();
    });
});

async function goBack() {
    if (device.getPlatform() === 'ios') {
        await element(by.traits(['button']))
            .atIndex(0)
            .tap();
    } else {
        await device.pressBack();
    }
}
