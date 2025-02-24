<template>
    <Header />


    <SeriesCategories />
    <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";

import SeriesCategories from '@/components/TestSeries/SeriesCategories.vue';

export default{
    name : 'TestSeriesView',
    components : {
        Header,
        SeriesCategories,

        Footer,
    }
}
</script>