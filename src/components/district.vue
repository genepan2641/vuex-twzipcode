<template>
	<select 
		:class="[className, 'district', { errorBorder: addressInput.zipcodeError }]" 
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
		...mapState(['addressInput']),
		districts() {
			return this.addressInput.county ?
				Object.keys(this.addressInput.zipcodeData[this.addressInput.county]) :
				[];
		},
		district: {
			get() { return this.addressInput.district },
			set(val) { this.$store.commit('addressInput/UPDATE_DISTRICT', val) }
		}
	}
};
</script>
