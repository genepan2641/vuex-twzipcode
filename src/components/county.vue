<template>
	<select 
		:class="[className, 'twzipcode__county']" 
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
		...mapState(['twzipcode']),
		counties() {
			return Object.keys(this.twzipcode.zipcodeData);
		},
		county: {
			get() { return this.twzipcode.county },
			set(val) { this.$store.commit('twzipcode/UPDATE_COUNTY', val) }
		}
	},
};
</script>
