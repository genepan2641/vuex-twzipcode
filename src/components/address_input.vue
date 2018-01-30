<template>
	<div class="">
		<input v-model="address" name="address" type="text" id="address" placeholder="請填上正確的地址" :class="{ errorBorder: addressInput.addressError }">
		<p v-cloak class="errorMsg" v-if='addressInput.addressError'>{{ addressInput.addressError }}</p>
	</div>
</template>ㄊ

<script>
import { mapState } from 'vuex';

export default {
	data: function () {
		return {
		}
	},
	computed: {
		...mapState(['addressInput']),
		address: {
			get() { return this.addressInput.address },
			set(val) { this.$store.commit('addressInput/UPDATE_ADDRESS', val) }
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
