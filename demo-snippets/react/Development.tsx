import * as React from 'react';

export function Development() {
    let cast = null;

    function handleCastEvent(args) {
        console.log(`event: ${args.data.eventName}`);

        if (args.object && !cast) {
            cast = args.object;
        }
    }

    return (
        <stackLayout>
            <label>This is the development demo...</label>
            <castButton onCast={handleCastEvent} />
        </stackLayout>
    );
}
