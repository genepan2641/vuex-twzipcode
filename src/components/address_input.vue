<template>
	<div class="">
		<input v-model="address" name="address" type="text" id="address" placeholder="請填上正確的地址" :class="{ errorBorder: twzipcode.addressError }">
		<p v-cloak class="errorMsg" v-if='twzipcode.addressError'>{{ twzipcode.addressError }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data: function () {
		return {
		}
	},
	computed: {
		...mapState(['twzipcode']),
		address: {
			get() { return this.twzipcode.address },
			set(val) { this.$store.commit('twzipcode/UPDATE_ADDRESS', val) }
		}
	}
}
</script>
<style scoped>
.errorBorder {
  border: 1px rgb(228, 83, 58) solid;
}
.errorMsg {
  color: rgb(228, 83, 58);
  font-size: 14px;
}
</style>
