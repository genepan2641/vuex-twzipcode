<template>
	<div style="display:inline;">
		<zipcode  :class-name="classNames.zipcode"  :name="names.zipcode"></zipcode>
		<county   :class-name="classNames.county"   :name="names.county"></county>
		<district :class-name="classNames.district" :name="names.district"></district>
		<p v-cloak class='errorMsg hasError' v-if='addressInput.zipcodeError'>{{ addressInput.zipcodeError }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Zipcode from './zipcode.vue';
import County from './county.vue';
import District from './district.vue';
export default {
	data() {
		return {
			style: {
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'wrap'
			}
		}
	},
	props: {
		names: {
			type: Object,
			default(value) {
				return Object.assign({
					county: 'county',
					district: 'district',
					zipcode: 'zipcode',
				}, value);
			},
		},
		classNames: {
			type: Object,
			default(value) {
				return Object.assign({
					county: '',
					district: '',
					zipcode: '',
				}, value);
			}
		},
	},
	computed: {
		...mapState(['addressInput'])
	},
	created: function () {
		this.$store.dispatch('addressInput/setCountyAndDistrictFromZipcode', this.addressInput.zipcode);
	},
	watch: {
		'addressInput.county': function () {
			if (this.addressInput.county) {
				/* 改變 county -> district 也要重設值 */
				this.$store.dispatch('addressInput/resetDistrict', this.addressInput.county);
			}
		},
		'addressInput.district': function () {
			if (this.addressInput.district) {
				this.$store.dispatch('addressInput/updateZipcode');
			}
		},
		'addressInput.zipcode': function (val) {
			this.$store.dispatch('addressInput/setCountyAndDistrictFromZipcode', val);
		}
	},
	components: {
		Zipcode,
		County,
		District,
	},
};
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