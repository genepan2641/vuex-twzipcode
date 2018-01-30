<template>
	<div class="">
		<div id="twzipcode" class="w100" style="display: inline-block;">
			<twzipcode 
				ref="twzipcode" 
				:class-names="{county: 'addressCounty formControl', district: 'addressDistrict formControl', zipcode: 'hide formControl'}" ></twzipcode>
			<input v-model="address" name="address" type="text" class="formControl address"  id="address" placeholder="請填上正確的地址" v-bind:class="{ errorBorder:addressError }">
		</div>
		<p v-cloak class='errorMsg hasError' v-if='zipcodeError'>{{ zipcodeError }}</p>
		<p v-cloak class='errorMsg hasError' v-if='addressError'>{{ addressError }}</p>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import twzipcode from './twzipcode.vue';

export default {
	data: function () {
		return {
			zipcodeError: false,
			addressError: false,
			zipcodeHide: true,
		}
	},
	computed: {
		...mapState(['addressInput']),
		address: {
			get() { return this.addressInput.address },
			set(val) { this.$store.commit('addressInput/UPDATE_ADDRESS', val) }
		}
	},
	methods: {
		authentication: function () {
			var validateOk = true;
			this.resetError();
			if (this.addressInput.zipcode == "" || this.addressInput.county == "" || this.addressInput.district == "") {
				this.zipcodeError = '請選擇正確的行政區域';
				validateOk = false;
			}
			if (this.addressInput.address == "") {
				this.addressError = '請填上正確的地址';
				validateOk = false;
			}
			return validateOk;
		},
		resetError: function () {
			this.zipcodeError = false;
			this.addressError = false;
		}
	},
	components: {
		twzipcode
	}
}
</script>