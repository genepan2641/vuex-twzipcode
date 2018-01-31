<template>
	<input
		:class="[className, 'zipcode']"
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
		...mapState(['twzipcode']),
		zipcode: {
			get() { return this.twzipcode.zipcode },
			set(val) { this.$store.commit('twzipcode/UPDATE_ZIPCODE', val) }
		}
	}
};
</script>
<style scoped>
.zipcode {
  width: 50px;
}
</style>
