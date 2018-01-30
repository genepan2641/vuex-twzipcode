<template>
	<select 
		:class="[className, 'county', { errorBorder: addressInput.zipcodeError }]" 
		:name="name" 
		v-model="county" >
		<option v-for="county in counties" :value="county" :key="county">{{ county }}</option>
	</select>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		className: { type: String },
		name: { type: String, default: 'county' },
	},
	computed: {
		...mapState(['addressInput']),
		counties() {
			return Object.keys(this.addressInput.zipcodeData);
		},
		county: {
			get() { return this.addressInput.county },
			set(val) { this.$store.commit('addressInput/UPDATE_COUNTY', val) }
		}
	},
};
</script>
