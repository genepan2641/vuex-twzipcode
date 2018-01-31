<template>
	<div style="display:inline;">
		<zipcode  :class-name="classNames.zipcode"  :name="names.zipcode"></zipcode>
		<county   :class-name="classNames.county"   :name="names.county"></county>
		<district :class-name="classNames.district" :name="names.district"></district>
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
					county: 'formControl-twzipcode',
					district: 'formControl-twzipcode',
					zipcode: 'formControl-twzipcode',
				}, value);
			}
		},
	},
	computed: {
		...mapState(['twzipcode'])
	},
	watch: {
		'twzipcode.county': function (val) {
			/* 改變 county -> district 也要重設值 */
			if (this.twzipcode.county) {
				this.$store.dispatch('twzipcode/resetDistrict', this.twzipcode.county);
			}
		},
		'twzipcode.district': function (val) {
			if (val) {
				this.$store.dispatch('twzipcode/updateZipcode');
			}
		},
		'twzipcode.zipcode': function (val) {
			if (val) {
				this.$store.dispatch('twzipcode/setCountyAndDistrictFromZipcode', val);
			}
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
.formControl-twzipcode {
  height: 34px;
  border-radius: 5px;
  outline: none;
  padding: 0px 10px;
  border: 1px solid #c3c3c5;
  transition: all 0.25s ease-out;
}
.formControl-twzipcode:focus {
  border-color: #3e4459;
}
.hide {
  display: none;
}
</style>