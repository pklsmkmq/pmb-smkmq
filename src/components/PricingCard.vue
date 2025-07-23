<template>
    <div :class="`rounded-2xl border-4 px-4 py-8 shadow-2xl w-full lg:w-1/2]`"
        :style="[{ borderColor: borderclr }, { backgroundColor: cardBgClass }]">
        <h3 :class="`font-bold text-3xl text-[${textcolor}]`">{{ title }}</h3>
        <p :class="['mb-5', generalTextColorClass]">{{ description }}</p>

        <PricingDetail title="Uang Masuk" :textclr="textColor" :price="admissionFee.price"
            :strikethrough-price="admissionFee.strikethroughPrice" :description="admissionFee.description"
            :features="admissionFee.features" :theme-color="themeColor" :text-color="generalTextColorProp" />

        <PricingDetail title="Uang SPP" :textclr="textColor" :price="sppFee.price" :price-suffix="sppFee.priceSuffix"
            :description="sppFee.description" :features="sppFee.features" :theme-color="themeColor"
            :text-color="generalTextColorProp" />

        <PricingDetail title="Uang Pendaftaran" :textclr="textColor" :price="registrationFee.price"
            :price-suffix="registrationFee.priceSuffix" :description="registrationFee.description"
            :features="registrationFee.features" :theme-color="themeColor" :text-color="generalTextColorProp" />

        <PricingDetail title="Uang Daftar Ulang" :textclr="textColor" :price="reRegistrationFee.price"
            :price-suffix="reRegistrationFee.priceSuffix" :description="reRegistrationFee.description"
            :features="reRegistrationFee.features" :theme-color="themeColor" :text-color="generalTextColorProp" />

        <div class="flex justify-center mt-10">
            <button
                :class="['px-5 rounded-3xl h-[60px] font-bold w-[90%] text-xl lg:text-2xl transition-all duration-300 ease-in-out shadow-md hover:shadow-lg scale-100 hover:scale-105 cursor-pointer', buttonClasses]">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PricingDetail from './sub/PricingDetail.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    textcolor: {
        type: String,
        default: '#1E046C'
    },
    borderclr: {
        type: String,
        default: '#cdcfd4'
    },
    description: {
        type: String,
        required: true,
    },
    admissionFee: {
        type: Object,
        required: true,
        default: () => ({ price: '', strikethroughPrice: null, description: null, features: [] })
    },
    sppFee: {
        type: Object,
        required: true,
        default: () => ({ price: '', priceSuffix: null, description: null, features: [] })
    },
    registrationFee: {
        type: Object,
        required: true,
        default: () => ({ price: '', priceSuffix: null, description: null, features: [] })
    },
    reRegistrationFee: {
        type: Object,
        required: true,
        default: () => ({ price: '', priceSuffix: null, description: null, features: [] })
    },
    buttonText: {
        type: String,
        default: 'Ambil Promo Sekarang!',
    },
    themeColor: {
        type: String,
        default: '#1E046C', // Default primary color
    },
    secondaryColor: {
        type: String,
        default: '#FDCA2F', // Default secondary/hover color
    },
    cardBackgroundColor: {
        type: String,
        default: 'gray-200', // Default Tailwind class for background color or hex
    },
    cardBorderColor: {
        type: String,
        default: 'gray-300', // Default Tailwind class for border color or hex
    },
    textColor: {
        type: String,
        default: 'gray-700', // Default Tailwind class for general text color or hex
    }
});

// Computed properties untuk kelas CSS
const cardBgClass = computed(() => {
    if (props.cardBackgroundColor.startsWith('#')) {
        return `${props.cardBackgroundColor}`;
    }
    return `${props.cardBackgroundColor}`;
});

// Menggunakan textColor untuk deskripsi kartu dan teks fitur di PricingDetail
const generalTextColorClass = computed(() => {
    if (props.textColor.startsWith('#')) {
        return `text-[${props.textColor}]`;
    }
    return `text-${props.textColor}`;
});

// Prop textColor yang akan dilewatkan ke PricingDetail dan FeatureListItem
const generalTextColorProp = computed(() => {
    return props.textColor.startsWith('#') ? `[${props.textColor}]` : props.textColor;
});


const buttonClasses = computed(() => [
    `bg-[${props.themeColor}]`,
    `text-white`,
    `hover:bg-[${props.secondaryColor}]`,
    `hover:text-[${props.themeColor}]`, // Ubah warna teks hover menjadi themeColor
    `ring-2`,
    `ring-[${props.themeColor}]`,
    `hover:ring-[${props.secondaryColor}]`,
]);
</script>