import regionData from '../../../static/js/regionData'; // all zipcodes

const addressInput = {
    namespaced: true,
    state: {
        zipcodeData: regionData,
        address: '',
        zipcode: '',
        county: '選擇城市',
        district: '選擇地區'
    },
    mutations: {
        ['UPDATE_COUNTY'](state, newCounty) {
            state.county = newCounty;
        },
        ['UPDATE_DISTRICT'](state, newDistrict) {
            state.district = newDistrict;
        },
        ['UPDATE_ZIPCODE'](state, newZipcode) {
            state.zipcode = newZipcode;
        },
        ['UPDATE_ADDRESS'](state, newAddress) {
            state.address = newAddress;
        }
    },
    actions: {
        updateZipcode({ commit, state }) {
            commit('UPDATE_ZIPCODE', state.zipcodeData[state.county][state.district]);
        },
        resetDistrict({ commit, state }, county) {
            const current = Object.keys(state.zipcodeData[county]);
            if (!current.includes(state.district)) {
                commit('UPDATE_DISTRICT', current[0]);
            }
        },
        setCountyAndDistrictFromZipcode({ commit, state }, inputZipcode) {
            Object.keys(state.zipcodeData).some(county => {
                const districtList = state.zipcodeData[county];

                Object.keys(districtList).some(district => {
                    const zipcode = districtList[district];

                    if (zipcode === inputZipcode.toString()) {
                        var self = this;
                        setTimeout(function () {
                            commit('UPDATE_COUNTY', county);
                            commit('UPDATE_DISTRICT', district);
                        }, 0);
                    }
                })
            });
        },
    }
};





export default addressInput;