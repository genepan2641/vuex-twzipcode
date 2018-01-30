<template>
	<input
		:class="[className, 'zipcode', { errorBorder: addressInput.zipcodeError }]"
		type="text"
		maxLength="3"
		v-model="zipcode"
		:name="name"
		:placeholder="placeholder"
	/>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		className: { type: String },
		name: { type: String, default: 'zipcode' },
		placeholder: { type: String },

	},
	computed: {
		...mapState(['addressInput']),
		zipcode: {
			get() { return this.addressInput.zipcode },
			set(val) { this.$store.commit('addressInput/UPDATE_ZIPCODE', val) }
		}
	}
};
</script>
