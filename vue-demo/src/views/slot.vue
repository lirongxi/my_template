<template>
    <div>
        <component :my-data="items" :is="currentView">
            <h1 slot="header"> title </h1>
            <p>Hello Slot</p>
            <h1 slot="Footer">Footer</h1>
        </component>
    </div>
</template>
<script>
import child from './slotChild.js'
export default {
    data() {
        return {
            items: [1, 2, 3, 4],
            currentView: child
        }
    }
}
</script>