/**
 * Created by yuyongyu on 2016/11/9.
 */

class Validator{
    validateSponsorName(sponsorName){
        if(sponsorName && 0 < sponsorName.length && sponsorName.length <= 20 ){
            return null
        }else{
            return '联系人姓名为必填项，且长度不超过20位！'
        }
    }

    validatePhoneNumber(phoneNumber){
        const reg = /^1[3|4|5|8][0-9]\d{8}$/;
        if(phoneNumber && reg.test(phoneNumber)){
            return null
        }else {
            return '手机号必须为11位数字！'
        }

    }
}

export default new Validator()