<template>
	<select 
		:class="[className, 'district']" 
		:name="name" 
		v-model="district">
		<option v-for="district in districts" :value="district" :key="district">{{ district }}</option>
	</select>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		className: { type: String },
		name: { type: String, default: 'district' },
	},
	computed: {
		...mapState(['twzipcode']),
		districts() {
			return this.twzipcode.county ?
				Object.keys(this.twzipcode.zipcodeData[this.twzipcode.county]) :
				[];
		},
		district: {
			get() { return this.twzipcode.district },
			set(val) { this.$store.commit('twzipcode/UPDATE_DISTRICT', val) }
		}
	}
};
</script>
